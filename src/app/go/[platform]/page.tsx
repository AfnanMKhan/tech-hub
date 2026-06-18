import { redirect } from "next/navigation";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function GoPage({
  params,
  searchParams,
}: {
  params: { platform: string };
  searchParams: { product?: string };
}) {
  const products = await getProducts();

  const product = products.find(
    (p: any) => p.slug === searchParams.product
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  // Simulated affiliate links (replace later with real ones)
  const links: any = {
    amazon: product.affiliate?.amazon || "https://amazon.in",
    flipkart: product.affiliate?.flipkart || "https://flipkart.com",
  };

  const url = links[params.platform] || "https://google.com";

  // Optional: analytics log (you can upgrade later)
  console.log("Affiliate click:", {
    platform: params.platform,
    product: product.slug,
  });

  redirect(url);
}