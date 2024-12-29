import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const { email, number } = await req.json();

    let user = await User.findOne({ email });

    if (user) {
      user.number = number || user.number;
      await user.save();
      const response = NextResponse.json({
        message: "User updated successfully",
        user,
      });
      return setHeaders(response);
    } else {
      const newUser = new User({ email, number });
      await newUser.save();
      const response = NextResponse.json({
        message: "User created successfully",
        newUser,
      });
      return setHeaders(response);
    }
  } catch (error) {
    console.error("Error processing user request:", error);
    const response = NextResponse.json(
      { error: "Error processing user request" },
      { status: 500 }
    );
    return setHeaders(response);
  }
}
