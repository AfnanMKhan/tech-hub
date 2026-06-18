"use client";

import { brands, categories } from "@/lib/products";

type Props = {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  category: string;
  setCategory: (category: string) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
};

export function FilterSidebar(props: Props) {
  function toggleBrand(brand: string) {
    props.setSelectedBrands(
      props.selectedBrands.includes(brand)
        ? props.selectedBrands.filter((item) => item !== brand)
        : [...props.selectedBrands, brand]
    );
  }

  return (
    <aside className="panel sticky top-28 h-fit rounded-lg p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold">Filters</h2>
        <button
          className="text-sm font-semibold text-brand"
          onClick={() => {
            props.setSelectedBrands([]);
            props.setCategory("All");
            props.setMinRating(0);
            props.setMaxPrice(120000);
          }}
        >
          Reset
        </button>
      </div>
      <div className="space-y-5">
        <label className="block text-sm font-semibold">
          Category
          <select className="field mt-2 w-full" value={props.category} onChange={(event) => props.setCategory(event.target.value)}>
            <option>All</option>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <div>
          <div className="mb-2 text-sm font-semibold">Brand</div>
          <div className="grid gap-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={props.selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} />
                {brand}
              </label>
            ))}
          </div>
        </div>
        <label className="block text-sm font-semibold">
          Max price: Rs {props.maxPrice.toLocaleString("en-IN")}
          <input className="mt-2 w-full" type="range" min="5000" max="120000" step="1000" value={props.maxPrice} onChange={(event) => props.setMaxPrice(Number(event.target.value))} />
        </label>
        <label className="block text-sm font-semibold">
          Minimum rating
          <select className="field mt-2 w-full" value={props.minRating} onChange={(event) => props.setMinRating(Number(event.target.value))}>
            <option value={0}>Any rating</option>
            <option value={4}>4 stars and above</option>
            <option value={4.5}>4.5 stars and above</option>
          </select>
        </label>
      </div>
    </aside>
  );
}
