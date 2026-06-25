import { notFound } from "next/navigation";

async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const products = await getProducts();

  const product = products.find(
    (p: any) => p.id === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-2">
        {product.name}
      </h1>

      <p className="text-gray-600 mb-6">
        {product.brand}
      </p>

      <div className="bg-white rounded-xl p-6 shadow">
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating}</p>
        <p><strong>Processor:</strong> {product.processor}</p>
        <p><strong>Display:</strong> {product.display}</p>
        <p><strong>Camera:</strong> {product.camera}</p>
        <p><strong>Battery:</strong> {product.battery}</p>
      </div>
    </main>
  );
}