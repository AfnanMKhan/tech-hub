import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  // 🔥 HERE replace with real affiliate link
  const affiliateLink = `https://www.amazon.in/dp/${id}`;

  return NextResponse.redirect(affiliateLink);
}