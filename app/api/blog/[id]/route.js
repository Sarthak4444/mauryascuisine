import dbConnect from "../../../../lib/dbConnect";
import Blog from "./../../../../models/Blog";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await dbConnect();

    const { id } = params;
    const { title, img, content } = await req.json();
    if (!title.trim() || !img.trim() || !content.trim()) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, img, content }, { new: true });

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog updated successfully", blog: updatedBlog }, { status: 200 });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: "Error updating blog" }, { status: 500 });
  }
} 
