import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl border"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-2">
            {product.brand}
          </p>

          <div className="mt-4 text-2xl font-bold">
            ₹{product.price.toLocaleString()}
          </div>

          <div className="mt-2">
            Rating: ★ {product.rating}
          </div>
        </div>
      </div>
    </div>
  );
}