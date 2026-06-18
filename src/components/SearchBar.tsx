"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import type { Product } from "@/types/product";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const results: Product[] =
    query.trim().length > 0
      ? products.filter((p: Product) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {results.length > 0 && (
        <div className="absolute left-0 right-0 z-50 mt-1 rounded-lg border bg-white shadow-lg">
          {results.map((p: Product) => (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              className="block px-4 py-3 hover:bg-gray-100"
            >
              {p.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}