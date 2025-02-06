import Admin from "../../../models/Admin";
import dbConnect from "../../../lib/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; 

export async function POST(req) {
  try {
    try {
      await dbConnect();
    } catch (dbError) {
      console.error("Database connection error:", dbError);
      return NextResponse.json(
        { message: "Failed to connect to the database" },
        { status: 500 }
      );
    }

    let email, password;
    try {
      ({ email, password } = await req.json());
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return NextResponse.json(
        { message: "Invalid request format" },
        { status: 400 }
      );
    }

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    let existingAdmin;
    try {
      existingAdmin = await Admin.findOne({ email });
    } catch (findError) {
      console.error("Error finding admin:", findError);
      return NextResponse.json(
        { message: "Error checking for existing admin" },
        { status: 500 }
      );
    }

    if (existingAdmin) {
      return NextResponse.json(
        { message: "Admin with this email already exists" },
        { status: 409 }
      );
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (hashError) {
      console.error("Error hashing password:", hashError);
      return NextResponse.json(
        { message: "Failed to hash password" },
        { status: 500 }
      );
    }

    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    try {
      await newAdmin.save();
    } catch (saveError) {
      console.error("Error saving admin:", saveError.message, saveError.stack);
      return NextResponse.json(
        { message: "Failed to save new admin", error: saveError.message },
        { status: 500 }
      );
    }    

    let admintoken;
    try {
      admintoken = jwt.sign(
        { email: newAdmin.email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '10m' }
      );
    } catch (tokenError) {
      console.error("Error generating token:", tokenError);
      return NextResponse.json(
        { message: "Failed to generate token" },
        { status: 500 }
      );
    }

    try {
      cookies().set('admintoken', admintoken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 10,
        path: '/',
      });
    } catch (cookieError) {
      console.error("Error setting cookie:", cookieError);
      return NextResponse.json(
        { message: "Failed to set authentication cookie" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Admin added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Unexpected error in POST handler:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
