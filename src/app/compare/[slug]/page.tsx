async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function CompareDetail({
  params,
}: {
  params: { slug: string };
}) {
  const products = await getProducts();

  const main = products.find((p: any) => p.slug === params.slug);

  if (!main) return <div>Product not found</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      
      <h1 className="text-3xl font-bold mb-6">
        Compare: {main.name}
      </h1>

      <div className="bg-white p-6 rounded shadow">
        
        <h2 className="font-bold text-xl mb-4">
          Specifications
        </h2>

        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(main.specs, null, 2)}
        </pre>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {products
            .filter((p: any) => p.slug !== main.slug)
            .slice(0, 2)
            .map((p: any) => (
              <div key={p.id} className="border p-4 rounded">
                <h3 className="font-bold">{p.name}</h3>
                <p>₹{p.price}</p>
                <p>⭐ {p.rating}</p>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}