import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({
    data: {
      id: crypto.randomUUID(),
      name: body.name,
      email: body.email,
      role: "CUSTOMER"
    }
  }, { status: 201 });
}
