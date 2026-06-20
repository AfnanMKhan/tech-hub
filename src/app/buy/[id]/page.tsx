import { notFound, redirect } from "next/navigation";

type Product = {
  id: string;
  name: string;
  affiliateLink: string;
};

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(" ${process.env.NEXT_PUBLIC_SITE_URL},/api/products", {
    cache: "no-store",
  });

  const products: Product[] = await res.json();

  return products.find((p) => p.id === id) || null;
}

export default async function BuyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) return notFound();

  // OPTIONAL: later you can log clicks here (analytics/db)

  if (product.affiliateLink) {
    redirect(product.affiliateLink);
  }

  return (
    <main style={{ padding: 30, textAlign: "center" }}>
      <h1>No affiliate link found</h1>
      <p>Please go back and try another product.</p>
    </main>
  );
}