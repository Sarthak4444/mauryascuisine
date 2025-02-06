

import dbConnect from "./../../../lib/dbConnect";
import PrivateReservation from "./../../../models/PrivateReservation";
import User from "./../../../models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Database connection error:", error.message || error);
    return NextResponse.json({ error: "Failed to connect to the database. Please try again later." }, { status: 500 });
  }

  let reservationData;
  try {
    reservationData = await req.json();
  } catch (error) {
    console.error("Invalid JSON input:", error.message || error);
    return NextResponse.json({ error: "Invalid input data. Please check your form and try again." }, { status: 400 });
  }

  const { email, number, name, occasion, note, people, date, time } = reservationData;
  if (!email || !number || !name || !people || !date || !time) {
    return NextResponse.json({ error: "All required fields must be filled out." }, { status: 400 });
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({ error: "User with this email does not exist." }, { status: 404 });
    }
  } catch (error) {
    console.error("Error finding user:", error.message || error);
    return NextResponse.json({ error: "An error occurred while retrieving user data." }, { status: 500 });
  }

  let savedPrivateReservation;
  try {
    const newPrivateReservation = new PrivateReservation({
      email,
      number,
      name,
      occasion,
      note,
      people,
      date,
      time,
    });

    savedPrivateReservation = await newPrivateReservation.save();
  } catch (error) {
    console.error("Error saving private reservation:", error.message || error);
    return NextResponse.json({ error: "An error occurred while saving the private reservation." }, { status: 500 });
  }

  const privateReservationId = savedPrivateReservation._id;

  try {
    existingUser.privateReservation.push(privateReservationId);
    await existingUser.save();
  } catch (error) {
    console.error("Error updating user with private reservation ID:", error.message || error);
    return NextResponse.json({ error: "Failed to update user with reservation details." }, { status: 500 });
  }

  return NextResponse.json({ message: "Private reservation created and added to user successfully!" }, { status: 201 });
}

export async function GET(req) {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Database connection error:", error.message || error);
    return NextResponse.json({ error: "Failed to connect to the database. Please try again later." }, { status: 500 });
  }

  try {
    const privateReservations = await PrivateReservation.find();
    return NextResponse.json({ privateReservations }, { status: 200 });
  } catch (error) {
    console.error("Error fetching private reservations:", error);
    return NextResponse.json({ error: "Error fetching private reservations" }, { status: 500 });
  }
}