import dbConnect from "./../../../lib/dbConnect";
import User from "./../../../models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; 

export async function POST(req) {
  try {
    await dbConnect();

    const existingCookie = cookies().get('token');
    if (existingCookie) {
      return NextResponse.json({ error: "Already logged in." }, { status: 400 });
    }

    const { email, password, number, name } = await req.json();
    if (!email || !password || !number || !name) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const token = jwt.sign({ email: existingUser.email }, process.env.JWT_SECRET_KEY, {
        expiresIn: '365d',
      });

      cookies().set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 365,
        path: '/',
      });

      return NextResponse.json(
        { message: "User logged in successfully", user: existingUser },
        { status: 200 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      number,
      name,
    });

    await newUser.save();

    const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET_KEY, {
      expiresIn: '365d',
    });

    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });

    return NextResponse.json(
      { message: "User added successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json({ error: "Error adding user" }, { status: 500 });
  }
}
