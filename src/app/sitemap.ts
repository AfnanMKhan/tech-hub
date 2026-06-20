import { MetadataRoute } from "next";

async function getProducts() {
  const res = await fetch(
    "https://techhubv.vercel.app/api/products",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://techhubv.vercel.app";

  const products = await getProducts();

  const staticPages = [
    "",
    "/products",
    "/compare",
    "/category/mobile",
    "/category/laptop",
    "/blog/best-phone-under-20000",
    "/blog/best-gaming-phone-under-30000",
    "/blog/iphone-15-review",
    "/blog/samsung-s24-review",
    "/blog/iphone-vs-samsung",
  ];

  const staticUrls = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const productUrls = products.map((p: any) => ({
    url: `${baseUrl}/product/${p.id}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...productUrls];
}