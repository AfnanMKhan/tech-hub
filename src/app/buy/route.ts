import { NextResponse } from "next/server";
import { trackClick } from "@/lib/analytics";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  // track click
  trackClick(id);

  // redirect to real affiliate/product page (placeholder for now)
  return NextResponse.redirect(
    `http://localhost:3000/product/${id}`
  );
}