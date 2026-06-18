import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function BestUnderPage({
  params,
}: {
  params: { price: string };
}) {
  const products = await getProducts();

  const maxPrice = Number(params.price);

  const filtered = products
    .filter((p: any) => p.price <= maxPrice)
    .sort((a: any, b: any) => b.rating - a.rating);

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-2">
        Best Products Under ₹{maxPrice}
      </h1>

      <p className="text-gray-600 mb-6">
        Top rated products in this budget range
      </p>

      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((product: any) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >

              <h2 className="font-bold text-lg">
                {product.name}
              </h2>

              <p className="text-gray-500">
                {product.brand}
              </p>

              <div className="mt-2 text-green-600 font-bold">
                ₹{product.price}
              </div>

              <div className="text-yellow-500">
                ⭐ {product.rating}
              </div>

            </Link>
          ))}

        </div>
      )}
    </div>
  );
}