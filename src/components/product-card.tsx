import Link from "next/link";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="block border rounded-lg p-4 hover:shadow-md transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />

      <h2 className="mt-2 font-bold">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.brand}</p>

      <div className="mt-2 font-semibold">₹{product.price}</div>

      <div className="flex gap-1 mt-2 flex-wrap">
        {(product.badges ?? []).slice(0, 2).map((b) => (
          <span key={b} className="text-xs bg-blue-100 px-2 py-1 rounded">
            {b}
          </span>
        ))}
      </div>
    </Link>
  );
}