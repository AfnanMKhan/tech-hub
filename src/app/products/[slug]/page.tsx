import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduct(slug: string) {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  const products = await res.json();
  return products.find((p: any) => p.slug === slug);
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">

      {/* IMAGE */}
      <div className="bg-white p-4 rounded shadow">
        <div className="relative h-[400px]">
          <Image
            src={product.images?.[0]}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* DETAILS */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="text-gray-500 mt-1">{product.brand}</p>

        <div className="mt-3 text-yellow-500">
          ⭐ {product.rating} ({product.reviews} reviews)
        </div>

        <div className="text-2xl font-bold text-green-600 mt-4">
          ₹{product.price}
        </div>

        <p className="mt-4 text-gray-700">{product.description}</p>

        {/* AFFILIATE BUTTONS (REAL SYSTEM) */}
        <div className="mt-6 space-y-3">

          <Link
            href={`/go/amazon?product=${product.slug}`}
            className="block w-full bg-orange-500 text-white py-3 rounded text-center"
          >
            Buy on Amazon
          </Link>

          <Link
            href={`/go/flipkart?product=${product.slug}`}
            className="block w-full bg-blue-500 text-white py-3 rounded text-center"
          >
            Buy on Flipkart
          </Link>

        </div>

        {/* SPECS */}
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">Specifications</h2>
          <pre className="text-sm">
            {JSON.stringify(product.specs, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}