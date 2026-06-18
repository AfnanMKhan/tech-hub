import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const products = await getProducts();

  const query = searchParams.q?.toLowerCase() || "";

  const filtered = products.filter((p: any) =>
    p.name.toLowerCase().includes(query) ||
    p.brand?.toLowerCase().includes(query) ||
    p.category?.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <h1 className="text-2xl font-bold mb-4">
        Search Results for: "{query}"
      </h1>

      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((p: any) => (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              className="border p-4 rounded hover:shadow"
            >
              <h2 className="font-bold">{p.name}</h2>
              <p className="text-gray-500">{p.brand}</p>
              <p className="text-green-600 font-bold">
                ₹{p.price}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}