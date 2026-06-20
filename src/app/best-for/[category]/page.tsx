import Link from "next/link";
import { notFound } from "next/navigation";

type Product = {
  id: string;
  name: string;
  brand?: string;
  image?: string;
  category?: string;

  price: number;
  rating: number;

  battery?: string;
  camera?: string;
  display?: string;
  processor?: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

const categoryMap: Record<string, (p: Product) => boolean> = {
  gaming: (p) =>
    p.rating >= 4.3 ||
    p.category?.toLowerCase() === "laptop",

  students: (p) => p.price <= 20000,

    battery: (p) =>
    p.battery?.toLowerCase().includes("5000") ||
    p.category?.toLowerCase() === "mobile",

  photography: (p) =>
    !!p.camera ||
    p.category?.toLowerCase() === "mobile",

  budget: (p) => p.price <= 15000,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return {
    title: `Best ${category} Products 2026`,
    description: `Top rated ${category} products selected based on performance, price and user needs.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const products = await getProducts();

  const filterFn = categoryMap[category.toLowerCase()];

  if (!filterFn) {
    notFound();
  }

  const filtered = products
    .filter(filterFn)
    .sort((a, b) => b.rating - a.rating);

  return (
    <main style={{ maxWidth: 1000, margin: "auto", padding: 20 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
        Best {category} Products
      </h1>

      <p style={{ color: "gray", marginBottom: 20 }}>
        Handpicked products optimized for {category} use cases.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
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
        <h2>Explore More Categories</h2>

        <div
          style={{
            display: "flex",
            gap: 15,
            flexWrap: "wrap",
          }}
        >
          <Link href="/best-for/gaming">Gaming</Link>
          <Link href="/best-for/students">Students</Link>
          <Link href="/best-for/battery">Battery</Link>
          <Link href="/best-for/photography">Photography</Link>
          <Link href="/best-for/budget">Budget</Link>
        </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>More Tools</h2>

        <div
          style={{
            display: "flex",
            gap: 15,
            flexWrap: "wrap",
          }}
        >
          <Link href="/best-under/10000">
            Best Under ₹10K
          </Link>

          <Link href="/best-under/20000">
            Best Under ₹20K
          </Link>

          <Link href="/compare">
            Compare Products
          </Link>

          <Link href="/products">
            All Products
          </Link>

          <Link href="/category/mobile">
            Mobile
          </Link>
        </div>
      </section>
    </main>
  );
}