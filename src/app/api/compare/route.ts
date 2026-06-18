import { NextRequest, NextResponse } from "next/server";
import { products, bestValueProduct } from "@/lib/products";

export async function GET(request: NextRequest) {
  const ids = (request.nextUrl.searchParams.get("ids") ?? "").split(",").filter(Boolean).slice(0, 4);
  const selected = products.filter((product) => ids.includes(product.id));
  return NextResponse.json({
    data: selected,
    meta: {
      bestValueId: selected.length
        ? bestValueProduct(selected)?.id ?? null
        : null,
      limit: 4
    }
  });
}
