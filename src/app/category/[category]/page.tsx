import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: {
    brand?: string;
    sort?: string;
  };
}) {
  const products = await getProducts();

  let filtered = products.filter(
    (p: any) => p.category === params.category
  );

  // BRAND FILTER
  if (searchParams.brand) {
    filtered = filtered.filter(
      (p: any) => p.brand === searchParams.brand
    );
  }

  // SORTING
  if (searchParams.sort === "low") {
    filtered.sort((a: any, b: any) => a.price - b.price);
  }

  if (searchParams.sort === "high") {
    filtered.sort((a: any, b: any) => b.price - a.price);
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6 capitalize">
        {params.category}
      </h1>

      {/* FILTER BAR */}
      <div className="flex gap-4 mb-6 text-sm">

        <Link
          href={`/category/${params.category}`}
          className="px-3 py-1 border rounded"
        >
          All
        </Link>

        <Link
          href={`/category/${params.category}?brand=Apple`}
          className="px-3 py-1 border rounded"
        >
          Apple
        </Link>

        <Link
          href={`/category/${params.category}?brand=Samsung`}
          className="px-3 py-1 border rounded"
        >
          Samsung
        </Link>

        <Link
          href={`/category/${params.category}?sort=low`}
          className="px-3 py-1 border rounded"
        >
          Price Low
        </Link>

        <Link
          href={`/category/${params.category}?sort=high`}
          className="px-3 py-1 border rounded"
        >
          Price High
        </Link>

      </div>

      {/* PRODUCTS */}
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