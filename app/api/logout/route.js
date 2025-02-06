import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';  

export async function GET() {
  const cookieStore = cookies();
  cookieStore.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0, 
    path: '/', 
  });

  return NextResponse.json({ message: "User logged out" }, { status: 200 });
}
