import { NextRequest, NextResponse } from "next/server";
import { products, scoreProduct } from "@/lib/products";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");
  const data = products
    .filter((product) => !category || product.category === category)
    .sort((a, b) => scoreProduct(b) - scoreProduct(a))
    .slice(0, 6);

  return NextResponse.json({
    data,
    meta: {
      strategy: "hybrid-content-score",
      signals: ["rating", "popularity", "discount", "category"]
    }
  });
}
