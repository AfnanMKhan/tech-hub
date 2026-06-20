import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  brand?: string;
  image?: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const products = await getProducts();

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold">All Products</h1>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #e5e5e5",
              padding: 12,
              borderRadius: 10,
            }}
          >
            {/* IMAGE → AFFILIATE FLOW */}
            <Link href={`/buy/${p.id}`}>
              <img
                src={p.image}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
                alt={p.name}
              />
            </Link>

            {/* TITLE → AFFILIATE FLOW */}
            <Link href={`/buy/${p.id}`}>
              <h3 style={{ marginTop: 10, fontWeight: 600 }}>
                {p.name}
              </h3>
            </Link>

            <p>₹{p.price}</p>
            <p style={{ color: "gray" }}>{p.brand}</p>

            {/* CTA BUTTON */}
            <Link
              href={`/buy/${p.id}`}
              style={{
                display: "inline-block",
                marginTop: 8,
                color: "#2563eb",
                textDecoration: "underline",
              }}
            >
              Buy Best Deal →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}