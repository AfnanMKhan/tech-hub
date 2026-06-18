"use client";

import Link from "next/link";
import { PackageCheck, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { currency } from "@/lib/format";
import { getProductById } from "@/lib/products";

export function CartClient() {
  const { lines, removeLine, clearCart } = useCart();

  const enriched = lines
    .map((line) => {
      const product = getProductById(line.productId);

      return product
        ? {
            ...line,
            product,
          }
        : null;
    })
    .filter(Boolean);

  const subtotal = enriched.reduce(
    (sum, line) => sum + line!.product.price * line!.quantity,
    0
  );

  const coupon =
    subtotal > 50000 ? 2500 : subtotal > 10000 ? 750 : 0;

  const total = subtotal - coupon;

  return (
    <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 lg:grid-cols-[1fr_360px]">
      <section className="panel rounded-lg p-5">
        <h1 className="text-2xl font-black">Cart & Checkout</h1>

        <div className="mt-5 space-y-4">
          {enriched.length === 0 && (
            <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center">
              <p className="font-bold">Your cart is empty.</p>

              <Link
                className="btn-primary mt-4 inline-block"
                href="/products"
              >
                Start Shopping
              </Link>
            </div>
          )}

          {enriched.map((line) => (
            <article
              key={line!.product.id}
              className="flex flex-col gap-4 border-t border-slate-200 pt-4 sm:flex-row sm:items-center"
            >
              <div className="flex-1">
                <h2 className="font-black">
                  {line!.product.name}
                </h2>

                <p className="text-sm text-slate-500">
                  Brand: {line!.product.brand}
                </p>

                <p className="mt-1 text-sm">
                  Qty {line!.quantity}
                </p>
              </div>

              <div className="text-lg font-black">
                {currency(
                  line!.product.price * line!.quantity
                )}
              </div>

              <button
                className="btn-secondary px-3"
                onClick={() =>
                  removeLine(line!.product.id, "default")
                }
                aria-label="Remove item"
              >
                <Trash2 size={17} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <aside className="panel h-fit rounded-lg p-5">
        <h2 className="text-xl font-black">
          Order Summary
        </h2>

        <div className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{currency(subtotal)}</span>
          </div>

          <div className="flex justify-between">
            <span>Smart Coupon</span>
            <span>-{currency(coupon)}</span>
          </div>

          <div className="flex justify-between border-t pt-3 text-lg font-black">
            <span>Total</span>
            <span>{currency(total)}</span>
          </div>
        </div>

        <button
          className="btn-primary mt-5 w-full"
          disabled={enriched.length === 0}
          onClick={clearCart}
        >
          <PackageCheck size={18} />
          Place Order
        </button>
      </aside>
    </div>
  );
}