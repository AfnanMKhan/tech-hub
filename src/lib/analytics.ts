import { supabase } from "@/lib/supabase";

export async function trackClick(productId: string) {
  await supabase.from("clicks").insert([
    {
      product_id: productId,
    },
  ]);
}

export async function getAllClicks() {
  const { data } = await supabase.from("clicks").select("*");

  const grouped: Record<string, number> = {};

  data?.forEach((row) => {
    grouped[row.product_id] = (grouped[row.product_id] || 0) + 1;
  });

  return grouped;
}