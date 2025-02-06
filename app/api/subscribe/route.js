import dbConnect from "./../../../lib/dbConnect";
import Subscriber from "./../../../models/Subscriber";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, name } = await req.json();
    if (!email || !name) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: "Already subscribed" },
        { status: 409 }
      );
    }

    const newSubscriber = new Subscriber({
      email,
      name,
    });

    await newSubscriber.save();

    return NextResponse.json(
      { message: "Subscribed successfully", subscriber: newSubscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing:", error);
    return NextResponse.json(
      { error: "Error subscribing" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await dbConnect();
    const subscribers = await Subscriber.find()
    return NextResponse.json({ subscribers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json({ error: "Error fetching subscribers" }, { status: 500 });
  }
}