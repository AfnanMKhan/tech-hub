import { products } from "@/lib/products";

export function searchProducts(query: string) {
  const normalized = query.toLowerCase().trim();

  return products.filter((product) =>
    [
      product.name,
      product.brand,
      product.category,
      ...product.badges,
      ...product.keywords,
      ...product.variants.ram,
      ...product.variants.storage,
      ...Object.values(product.specs).filter(Boolean),
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );
}