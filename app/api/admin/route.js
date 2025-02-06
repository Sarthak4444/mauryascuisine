import dbConnect from "./../../../lib/dbConnect";
import Admin from "./../../../models/Admin";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; 
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const adminExists = await Admin.findOne({ email });
    if (!adminExists) {
      return NextResponse.json({ message: "You do not have an access" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, adminExists.password);
    if (isMatch) {
      const admintoken = jwt.sign({ email: adminExists.email }, process.env.JWT_SECRET_KEY, {
        expiresIn: '10m',
      });

      cookies().set('admintoken', admintoken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 10,
        path: '/',
      });

      return NextResponse.json(
        { message: "Admin logged in successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error logging in admin:", error);
    return NextResponse.json({ message: "Error logging in admin" }, { status: 500 });
  }
}
