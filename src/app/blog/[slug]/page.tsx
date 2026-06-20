import { notFound } from "next/navigation";
import { generateAIBlog } from "@/lib/aiBlogs";

type Product = {
  id: string;
  name: string;
  price: number;
  rating: number;
  category?: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`,
  {
    cache: "no-store",
  }
);

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const keyword = decodeURIComponent(slug);

  return {
    title: `${keyword} - Best Guide 2026`,
    description: `Find the best ${keyword} with reviews, comparisons and buying guide.`,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const keyword = decodeURIComponent(slug);

  const products = await getProducts();

  if (!products.length) {
    notFound();
  }

  const filteredProducts = products.filter((p) => {
    const text = `${p.name} ${p.category ?? ""}`.toLowerCase();
    return text.includes(keyword.toLowerCase());
  });

  const topProducts =
    filteredProducts.length > 0
      ? filteredProducts.slice(0, 2)
      : products.slice(0, 2);

  const productsHtml = topProducts
    .map(
      (p) => `
        <div style="border:1px solid #ddd;padding:10px;margin:10px 0;">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <p>⭐ ${p.rating}</p>
          <a href="/buy/${p.id}">Buy Now</a>
        </div>
      `
    )
    .join("");

  const dynamicKeyword = keyword
    .replace(/-/g, " ")
    .toLowerCase();

  const content = await generateAIBlog(
    dynamicKeyword,
    productsHtml
  );

  return (
    <main
      style={{
        maxWidth: 800,
        margin: "auto",
        padding: 20,
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </main>
  );
}