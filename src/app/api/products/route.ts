import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "iphone15",
      name: "iPhone 15",
      price: 79999,
      rating: 4.6,
    },
    {
      id: "s24",
      name: "Samsung S24",
      price: 69999,
      rating: 4.5,
    },
  ]);
}