import { NextRequest, NextResponse } from "next/server";

const coupons = {
  SMART750: { amountOff: 750, minCart: 10000 },
  BIG2500: { amountOff: 2500, minCart: 50000 }
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const coupon = coupons[String(body.code).toUpperCase() as keyof typeof coupons];
  if (!coupon || Number(body.cartTotal) < coupon.minCart) {
    return NextResponse.json({ error: "Coupon is invalid for this cart" }, { status: 400 });
  }
  return NextResponse.json({ data: coupon });
}
