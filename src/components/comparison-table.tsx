import { CheckCircle2, Minus } from "lucide-react";
import { currency } from "@/lib/format";
import { bestValueProduct, scoreProduct } from "@/lib/products";
import type { Product } from "@/types/product";
export function ComparisonTable({ items }: { items: Product[] }) {
  const best = bestValueProduct(items);
  const specs = [
  "display",
  "processor",
  "ram",
  "storage",
  "camera",
  "battery",
  "connectivity",
] as const;

  return (
    <div className="panel overflow-x-auto rounded-lg">
      <table className="w-full min-w-[860px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-800">
            <th className="sticky left-0 z-10 bg-white p-4 dark:bg-slate-950">Compare</th>
            {items.map((product) => (
              <th key={product.id} className="p-4 align-top">
                <div className="font-black">{product.name}</div>
                <div className="mt-1 text-slate-500">{currency(product.price)}</div>
                {best?.id === product.id && (
                  <span className="mt-2 inline-flex items-center gap-1 rounded bg-mint px-2 py-1 text-xs font-bold text-white">
                    <CheckCircle2 size={13} /> Best value
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Row label="Rating" values={items.map((item) => `${item.rating}/5 (${item.reviewsCount.toLocaleString("en-IN")})`)} />
          <Row label="Value score" values={items.map((item) => Math.round(scoreProduct(item)).toString())} />
          {specs.map((spec) => <Row key={spec} label={spec} values={items.map((item) => item.specs[spec] || "-")} />)}

        </tbody>
      </table>
    </div>
  );
}

function Row({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="border-b border-slate-200 last:border-0 dark:border-slate-800">
      <th className="sticky left-0 bg-white p-4 capitalize text-slate-500 dark:bg-slate-950">{label}</th>
      {values.map((value, index) => (
        <td key={`${label}-${index}`} className="p-4 font-semibold">
          {value === "-" ? <Minus size={16} /> : value}
        </td>
      ))}
    </tr>
  );
}
