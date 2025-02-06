import { verifyAdminToken } from "../../../lib/auth";
import { NextResponse } from 'next/server';

export async function GET(req) {
  const user = await verifyAdminToken(req);
  if (user) {
    return NextResponse.json( user , { status: 200 });
  } else {
    return NextResponse.json({ error: "Unauthorized!!!" }, { status: 401 });
  }
}

