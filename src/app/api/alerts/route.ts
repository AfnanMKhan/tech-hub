import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({
    data: {
      id: crypto.randomUUID(),
      productId: body.productId,
      targetPrice: body.targetPrice,
      channel: body.channel ?? "email",
      active: true
    }
  }, { status: 201 });
}
