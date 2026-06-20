import { NextResponse } from "next/server";

async function getProducts() {
  const res = await fetch( `${process.env.NEXT_PUBLIC_SITE_URL}, {
    cache: "no-store",
  });

  return res.json();
}

export async function GET() {
  const products = await getProducts();

  return NextResponse.json({
    total: products.length,
    generatedAt: new Date().toISOString(),
    products,
  });
}