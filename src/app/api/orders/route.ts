import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      { id: "ORD-10491", status: "Out for delivery", total: 7999, eta: "Today, 7 PM" },
      { id: "ORD-10422", status: "Delivered", total: 42999, eta: "Jun 12, 2026" }
    ]
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({
    data: {
      id: `ORD-${Math.floor(10000 + Math.random() * 89999)}`,
      status: "Placed",
      ...body
    }
  }, { status: 201 });
}
