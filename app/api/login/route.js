import dbConnect from "./../../../lib/dbConnect";
import User from "./../../../models/User";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; 
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    
    const existingCookie = cookies().get('token');
    if (existingCookie) {
      return NextResponse.json({ error: "Already logged in." }, { status: 400 });
    }

    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const userExists = await User.findOne({ email });
    if (!userExists) {
      return NextResponse.json({ error: "User does not exist" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, userExists.password);
    if (isMatch) {
      const token = jwt.sign({ email: userExists.email }, process.env.JWT_SECRET_KEY, {
        expiresIn: '365d',
      });

      cookies().set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 365,
        path: '/',
      });

      return NextResponse.json(
        { message: "User logged in successfully", user: userExists },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    return NextResponse.json({ error: "Error logging in user" }, { status: 500 });
  }
}
