import dbConnect from "./../../../lib/dbConnect";
import TableReservation from "./../../../models/TableReservation";
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
    return NextResponse.json({ error: "All required fields must be filled out.", email, number, name, people, date, time }, { status: 400 });
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

  let savedTableReservation;
  try {
    const newTableReservation = new TableReservation({
      email,
      number,
      name,
      occasion,
      note,
      people,
      date,
      time,
    });

    savedTableReservation = await newTableReservation.save();
  } catch (error) {
    console.error("Error saving table reservation:", error.message || error);
    return NextResponse.json({ error: "An error occurred while saving the table reservation." }, { status: 500 });
  }

  const tableReservationId = savedTableReservation._id;

  try {
    existingUser.tableReservation.push(tableReservationId);
    await existingUser.save();
  } catch (error) {
    console.error("Error updating user with table reservation ID:", error.message || error);
    return NextResponse.json({ error: "Failed to update user with reservation details." }, { status: 500 });
  }

  return NextResponse.json({ message: "Table reservation created and added to user successfully!" }, { status: 201 });
}

export async function GET(req) {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Database connection error:", error.message || error);
    return NextResponse.json({ error: "Failed to connect to the database. Please try again later." }, { status: 500 });
  }

  try {
    const tableReservations = await TableReservation.find();
    return NextResponse.json({ tableReservations }, { status: 200 });
  } catch (error) {
    console.error("Error fetching table reservations:", error);
    return NextResponse.json({ error: "Error fetching table reservations" }, { status: 500 });
  }
}