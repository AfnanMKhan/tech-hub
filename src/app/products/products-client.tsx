"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FilterSidebar } from "@/components/filter-sidebar";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export function ProductsClient() {
  const params = useSearchParams();

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [category, setCategory] = useState(
    params.get("category") ?? "All"
  );
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(120000);
  const [sort, setSort] = useState("popular");

  const query = params.get("q")?.toLowerCase() ?? "";

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch =
        !query ||
        `${product.name}
         ${product.brand}
         ${product.category}
         ${product.keywords.join(" ")}
         ${product.variants.ram.join(" ")}
         ${product.variants.storage.join(" ")}
         ${Object.values(product.specs).join(" ")}`
          .toLowerCase()
          .includes(query);

      const matchesBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand);

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesBrand &&
        matchesCategory &&
        product.rating >= minRating &&
        product.price <= maxPrice
      );
    });

    return [...result].sort((a, b) => {
      if (sort === "price-asc") {
        return a.price - b.price;
      }

      if (sort === "newest") {
        return b.price - a.price;
      }

      return (b.popularity ?? 0) - (a.popularity ?? 0);
    });
  }, [
    category,
    maxPrice,
    minRating,
    query,
    selectedBrands,
    sort,
  ]);

  return (
    <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 lg:grid-cols-[270px_1fr]">
      <FilterSidebar
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        category={category}
        setCategory={setCategory}
        minRating={minRating}
        setMinRating={setMinRating}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <section>
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-2xl font-black">
              Product Listings
            </h1>
            <p className="text-sm text-slate-500">
              {filtered.length} products found
            </p>
          </div>

          <select
            className="field w-full sm:w-56"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="popular">
              Sort by popularity
            </option>
            <option value="price-asc">
              Price: Low to High
            </option>
            <option value="newest">
              Highest Price First
            </option>
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}