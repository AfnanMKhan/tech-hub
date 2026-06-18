import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { getProductsByKeyword, keywordPages } from "@/lib/products";

export default async function BuyingGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const keyword = keywordPages.find(
    (item) => item.slug === slug
);
  if (!keyword) notFound();

  const items = getProductsByKeyword(keyword.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-black capitalize">
            {keyword.title}
          </h1>
          <p className="text-sm text-slate-500">
            Curated Tech Ħµb picks with ratings, RAM/ROM variants, price comparison, and direct buying links.
          </p>
        </div>
        <Link href="/products" className="btn-secondary">All products</Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
