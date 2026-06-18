"use client";

import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "./cart-provider";

export function ProductActions({ productId, sellerId }: { productId: string; sellerId: string }) {
  const router = useRouter();
  const { addLine } = useCart();

  return (
    <div className="mt-5 grid gap-3">
      <button className="btn-primary w-full" onClick={() => addLine({ productId, sellerId, quantity: 1 })}>
        <ShoppingCart size={18} /> Add to cart
      </button>
      <button
        className="btn-primary w-full bg-market text-ink hover:bg-yellow-500"
        onClick={() => {
          addLine({ productId, sellerId, quantity: 1 });
          router.push("/cart");
        }}
      >
        <ShoppingBag size={18} /> Buy now
      </button>
      <button className="btn-secondary w-full"><Heart size={18} /> Wishlist</button>
    </div>
  );
}
