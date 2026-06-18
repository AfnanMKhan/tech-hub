import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/lib/products";

type ProductRouteContext = { params: Promise<{ id: string }> };

export async function GET(_: NextRequest, { params }: ProductRouteContext) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ data: product });
}

export async function PATCH(request: NextRequest, { params }: ProductRouteContext) {
  const { id } = await params;
  const body = await request.json();
  return NextResponse.json({ data: { id, ...body } });
}

export async function DELETE(_: NextRequest, { params }: ProductRouteContext) {
  const { id } = await params;
  return NextResponse.json({ data: { id, deleted: true } });
}
