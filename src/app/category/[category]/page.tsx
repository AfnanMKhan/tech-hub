import Link from "next/link";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category.toLowerCase();

  const products = await getProducts();

  const filtered = products.filter((p) =>
    p.category?.toLowerCase().includes(category)
  );

  return (
    <main style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <h1>Best {category} Products</h1>

      <div style={{ display: "grid", gap: 15 }}>
        {filtered.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: 10 }}>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <p>⭐ {p.rating}</p>

            <Link href={`/blog/${p.name.toLowerCase().replace(/ /g, "-")}`}>
              View Review
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}