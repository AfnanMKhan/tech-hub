import Link from "next/link";

type Product = {
  id: string;
  name: string;
  brand?: string;
  image?: string;
  category?: string;
  price: number;
  rating: number;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const products = await getProducts();

  const filtered = products.filter(
    (p) => p.category?.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Best {category} Products
        </h1>

        <p className="text-gray-600 mb-8">
          Browse and compare top {category} products.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={p.image || "/placeholder.jpg"}
                alt={p.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg">
                  {p.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {p.brand}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold">
                    ₹{p.price}
                  </span>

                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm">
                    ⭐ {p.rating}
                  </span>
                </div>

                <div className="mt-5">
                  <Link
                    href={`/product/${p.id}`}
                    className="block text-center bg-black text-white py-2 rounded-lg hover:opacity-90"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center mt-10 text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </main>
  );
}