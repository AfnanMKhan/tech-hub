"use client";

import { ExternalLink, ShoppingBag, ShoppingCart } from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { currency, discount } from "@/lib/format";
import type { Product } from "@/lib/types";
import { useCart } from "./cart-provider";

export function ProductBuyPanel({ product }: { product: Product }) {
  const router = useRouter();
  const { addLine } = useCart();
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const variant = useMemo(
    () => product.variants.find((item) => item.id === variantId) ?? product.variants[0],
    [product.variants, variantId]
  );
  const bestSeller = [...product.sellers].sort((a, b) => a.price - b.price)[0];
  const price = variant?.price ?? bestSeller.price;
  const mrp = variant?.mrp ?? bestSeller.mrp;

  return (
    <aside className="panel h-fit rounded-lg p-5">
      <div className="text-sm font-bold text-mint">Best seller: {bestSeller.name}</div>
      <div className="mt-3 text-2xl font-black">{currency(price)}</div>
      <p className="text-sm text-slate-500">
        <span className="line-through">{currency(mrp)}</span> {discount(mrp, price)}% off. Delivery: {bestSeller.delivery}.
      </p>

      <div className="mt-5">
        <div className="mb-2 text-sm font-black">RAM / ROM variants</div>
        <div className="grid gap-2">
          {product.variants.map((item) => (
            <button
              key={item.id}
              className={`rounded-md border px-3 py-2 text-left text-sm font-semibold ${variantId === item.id ? "border-brand bg-blue-50 text-brand dark:bg-blue-950" : "border-slate-200 dark:border-slate-800"}`}
              onClick={() => setVariantId(item.id)}
            >
              <span className="block">{item.label}</span>
              <span className="text-xs text-slate-500">{currency(item.price)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        <button className="btn-primary w-full" onClick={() => addLine({ productId: product.id, sellerId: bestSeller.id, quantity: 1 })}>
          <ShoppingCart size={18} /> Add to cart
        </button>
        <button
          className="btn-primary w-full bg-market text-ink hover:bg-yellow-500"
          onClick={() => {
            addLine({ productId: product.id, sellerId: bestSeller.id, quantity: 1 });
            router.push("/cart");
          }}
        >
          <ShoppingBag size={18} /> Buy now
        </button>
      </div>

      <div className="mt-5">
        <div className="mb-2 text-sm font-black">Buy direct</div>
        <div className="grid gap-2">
          {product.buyLinks.map((link) => (
            <a key={link.seller} href={link.url} target="_blank" rel="noreferrer" className="btn-secondary w-full justify-between">
              {link.seller} <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
