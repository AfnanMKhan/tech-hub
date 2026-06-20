import Link from "next/link";
import { notFound } from "next/navigation";

type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  rating: number;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch(" ${process.env.NEXT_PUBLIC_SITE_URL}/api/products", {
    cache: "no-store",
  });

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ price: string }>;
}) {
  const { price } = await params;

  return {
    title: `Best Under ₹${price} Products 2026`,
    description: `Find the best products under ₹${price}. Compare top rated smartphones, laptops and more.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ price: string }>;
}) {
  const { price } = await params;

  const maxPrice = Number(price);

  if (isNaN(maxPrice)) {
    notFound();
  }

  const products = await getProducts();

  const filtered = products
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) => b.rating - a.rating);

  return (
    <main style={{ maxWidth: 1000, margin: "auto", padding: 20 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
        Best Products Under ₹{maxPrice}
      </h1>

      <p style={{ color: "gray", marginBottom: 20 }}>
        Top rated products under budget with best value for money.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {filtered.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 15,
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />

            <h2 style={{ fontSize: 18, marginTop: 10 }}>
              {product.name}
            </h2>

            <p>₹{product.price}</p>
            <p>⭐ {product.rating}</p>

            <Link href={`/product/${product.id}`}>
              View Product
            </Link>
          </div>
        ))}
      </div>

      <section style={{ marginTop: 40 }}>
        <h2>More Budget Ranges</h2>

        <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
          <Link href="/best-under/10000">Under ₹10K</Link>
          <Link href="/best-under/15000">Under ₹15K</Link>
          <Link href="/best-under/20000">Under ₹20K</Link>
        </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Explore More</h2>

        <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
          <Link href="/compare">Compare Products</Link>
          <Link href="/products">All Products</Link>
          <Link href="/category/mobile">Mobile</Link>
          <Link href="/category/laptop">Laptop</Link>
        </div>
      </section>
    </main>
  );
}