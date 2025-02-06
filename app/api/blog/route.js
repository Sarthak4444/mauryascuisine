import dbConnect from "../../../lib/dbConnect";
import Blog from "./../../../models/Blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();

    const { title, img, content } = await req.json();
    if (!title.trim() || !img.trim() || !content.trim()) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }    

    const newBlog = new Blog({
      title,
      img,
      content
    });

    await newBlog.save();

    return NextResponse.json(
      { message: "Blog added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding blogss" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await dbConnect();
    const blogs = await Blog.find()
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Error fetching blogs" }, { status: 500 });
  }
}