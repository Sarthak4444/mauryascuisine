import dbConnect from "./../../../lib/dbConnect";
import User from "./../../../models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json(); 
        const { email } = body;

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const user = await User.findOne({ email }).select('-password');
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 404 });
        }

        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Error fetching user:", error.message || error);
        return NextResponse.json({ error: "Error fetching user" }, { status: 500 });
    }
}
