export async function getProducts() {
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`,
  {
    cache: "no-store",
  }
);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}