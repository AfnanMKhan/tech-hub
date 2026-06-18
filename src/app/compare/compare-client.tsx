"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ComparisonTable } from "@/components/comparison-table";
import { products } from "@/lib/products";

export function CompareClient() {
  const params = useSearchParams();
  const initialIds = (params.get("ids") ?? "").split(",").filter(Boolean).slice(0, 4);
  const [ids, setIds] = useState<string[]>(initialIds.length ? initialIds : products.slice(0, 3).map((product) => product.id));

  const selected = useMemo(() => products.filter((product) => ids.includes(product.id)), [ids]);

  function setSlot(index: number, id: string) {
    setIds((current) => {
      const copy = [...current];
      copy[index] = id;
      return Array.from(new Set(copy)).slice(0, 4);
    });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-5">
        <h1 className="text-2xl font-black">Product comparison</h1>
        <p className="text-sm text-slate-500">Compare up to four products side-by-side with automatic best-value highlighting.</p>
      </div>
      <div className="panel mb-5 grid gap-3 rounded-lg p-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <select key={index} className="field" value={ids[index] ?? ""} onChange={(event) => setSlot(index, event.target.value)}>
            <option value="">Add product</option>
            {products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
          </select>
        ))}
      </div>
      <ComparisonTable items={selected} />
    </div>
  );
}
