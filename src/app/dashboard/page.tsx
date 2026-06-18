import Link from "next/link";
import { Bell, Heart, Package, Star } from "lucide-react";
import { products } from "@/lib/products";
import { currency } from "@/lib/format";

export default function DashboardPage() {
  const orders = [
    {
      id: "ORD-10491",
      status: "Out for delivery",
      product: products[0],
      eta: "Today, 7 PM",
    },
    {
      id: "ORD-10422",
      status: "Delivered",
      product: products[1],
      eta: "Jun 12, 2026",
    },
  ].filter((order) => order.product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="text-2xl font-black">User Dashboard</h1>

      <div className="mt-5 grid gap-4 md:grid-cols-4">
        {[
          ["Orders", "2 active", Package],
          ["Wishlist", "8 saved", Heart],
          ["Price Alerts", "5 watching", Bell],
          ["Reviews", "12 verified", Star],
        ].map(([title, value, Icon]) => (
          <div key={title as string} className="rounded-lg border p-5">
            <Icon />
            <div className="mt-3 text-sm text-slate-500">
              {title as string}
            </div>
            <div className="text-xl font-black">
              {value as string}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-6 grid gap-5 lg:grid-cols-[1fr_380px]">
        <div className="rounded-lg border p-5">
          <h2 className="text-xl font-black">Order Tracking</h2>

          <div className="mt-4 space-y-4">
            {orders.map((order) => (
              <article
                key={order.id}
                className="rounded-lg border p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <div>
                    <div className="text-sm text-slate-500">
                      {order.id}
                    </div>

                    <h3 className="font-black">
                      {order.product?.name ?? "Product"}
                    </h3>

                    <p className="text-sm">
                      {order.status} / {order.eta}
                    </p>
                  </div>

                  <Link
                    href={`/product/${order.product?.slug}`}
                    className="border px-4 py-2 rounded"
                  >
                    View Product
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-lg border p-5">
          <h2 className="text-xl font-black">Recommendations</h2>

          <div className="mt-4 space-y-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="block rounded-md border p-3"
              >
                <div className="font-bold">{product.name}</div>

                <div className="text-sm text-slate-500">
                  {currency(product.price)}
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}