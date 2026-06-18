import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "iphone-15-pro",
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "mobile",

    image: "/products/iphone15.jpg",
    gallery: [],
    angles: [],

    price: 134900,
    mrp: 149900,

    rating: 4.7,
    reviewsCount: 12453,

    badges: ["Best Seller"],

    specs: {
      processor: "A17 Pro",
      ram: "8GB",
      storage: "256GB",
      battery: "3274 mAh",
      camera: "48MP",
      display: "6.1 OLED",
    },

    pros: ["Great camera"],
    cons: ["Expensive"],

    reviews: [],

    keywords: ["iphone", "apple"],

    variants: {
      ram: ["8GB"],
      storage: ["128GB", "256GB"],
    },

    buyLinks: {
      amazon: "#",
      flipkart: "#",
      official: "#",
    },

    popularity: 98,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: Product["category"]
): Product[] {
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();

  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.keywords.some((k) => k.toLowerCase().includes(q))
  );
}

export const categories = [
  "mobile",
  "laptop",
  "headphones",
] as const;

export const brands = [...new Set(products.map((p) => p.brand))];

export function scoreProduct(product: Product): number {
  return (
    product.rating * 20 +
    (product.popularity ?? 0) +
    product.reviewsCount / 100
  );
}

export function bestValueProduct(
  items: Product[]
): Product | undefined {
  return [...items].sort(
    (a, b) => scoreProduct(b) - scoreProduct(a)
  )[0];
}

export const keywordPages = [
  {
    slug: "best-phones",
    title: "Best Phones",
    category: "mobile",
  },
  {
    slug: "best-laptops",
    title: "Best Laptops",
    category: "laptop",
  },
];

export function getProductsByKeyword(slug: string) {
  const page = keywordPages.find((p) => p.slug === slug);

  if (!page) return [];

  return products.filter(
    (p) => p.category === page.category
  );
}