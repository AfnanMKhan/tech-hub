import { supabase } from "@/lib/supabase";

// GET
export async function GET() {
  const { data } = await supabase.from("products").select("*");
  return Response.json(data);
}

// POST
export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabase.from("products").insert([body]);

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json(data);
}

// DELETE
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json({ success: true });
}

// UPDATE (NEW)
export async function PUT(req: Request) {
  const body = await req.json();

  const { data, error } = await supabase
    .from("products")
    .update({
      name: body.name,
      price: body.price,
      category: body.category,
      image: body.image,
      specs: body.specs,
    })
    .eq("id", body.id);

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json(data);
}