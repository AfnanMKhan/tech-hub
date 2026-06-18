import { Suspense } from "react";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { ProductsClient } from "./products-client";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-6"><SkeletonGrid /></div>}>
      <ProductsClient />
    </Suspense>
  );
}
