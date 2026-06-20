import Link from "next/link";

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

export default async function Page() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          All Products
        </h1>

        <p className="text-gray-600 mb-8">
          Compare prices, features and find the best deals.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <Link href={`/buy/${p.id}`}>
                <img
                  src={p.image || "/placeholder.jpg"}
                  alt={p.name}
                  className="w-full h-56 object-cover"
                />
              </Link>

              <div className="p-5">
                <Link href={`/buy/${p.id}`}>
                  <h3 className="font-bold text-lg hover:text-blue-600 transition">
                    {p.name}
                  </h3>
                </Link>

                <p className="text-gray-500 mt-2">
                  {p.brand || "Top Brand"}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold">
                    ₹{p.price}
                  </span>

                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm">
                    ⭐ 4.5
                  </span>
                </div>

                <div className="mt-5 flex gap-2">
                  <Link
                    href={`/product/${p.id}`}
                    className="flex-1 border text-center py-2 rounded-lg hover:bg-gray-100"
                  >
                    Details
                  </Link>

                  <Link
                    href={`/buy/${p.id}`}
                    className="flex-1 bg-black text-white text-center py-2 rounded-lg hover:opacity-90"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center mt-10 text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </main>
  );
}