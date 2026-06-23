import Link from "next/link";

async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;

  const products = await getProducts();

  const results = products.filter((p: any) =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for "{q}"
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {results.map((p: any) => (
          <div
            key={p.id}
            className="border rounded-lg p-4"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover"
            />

            <h3 className="font-bold mt-3">
              {p.name}
            </h3>

            <p>₹{p.price}</p>

            <Link
              href={`/product/${p.id}`}
              className="text-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}