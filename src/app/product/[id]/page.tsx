import { notFound } from "next/navigation";
import Link from "next/link";
import ProductSchema from "@/components/ProductSchema";

type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  price: number;
  mrp: number;
  rating: number;
  reviewsCount: number;
  specs: {
    display: string;
    processor: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    os: string;
    weight: string;
  };
  pros: string[];
  cons: string[];
};

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  const products: Product[] = await res.json();

  return products.find((p) => p.id === id) || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) return {};

  return {
    title: `${product.name} Review & Price 2026`,
    description: `Buy ${product.name} at best price. Compare specs, pros, cons and ratings.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) return notFound();

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {/* SEO Schema */}
      <ProductSchema product={product} />

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          maxHeight: 400,
          objectFit: "cover",
          borderRadius: 12,
        }}
      />

      {/* Title */}
      <h1 style={{ marginTop: 20 }}>{product.name}</h1>

      <p style={{ color: "gray" }}>{product.brand}</p>

      {/* Price */}
      <p>
        ₹{product.price}{" "}
        <span
          style={{
            textDecoration: "line-through",
            color: "gray",
            marginLeft: 10,
          }}
        >
          ₹{product.mrp}
        </span>
      </p>

      {/* Rating */}
      <p>
        ⭐ {product.rating} ({product.reviewsCount} reviews)
      </p>

      {/* Buy Button */}
      <div style={{ marginTop: 20 }}>
        <Link
          href={`/buy/${product.id}`}
          style={{
            background: "black",
            color: "white",
            padding: "12px 20px",
            borderRadius: 8,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Buy Now
        </Link>
      </div>

      <hr style={{ margin: "30px 0" }} />

      {/* Specs */}
      <h2>Specifications</h2>
      <ul>
        <li>Display: {product.specs.display}</li>
        <li>Processor: {product.specs.processor}</li>
        <li>RAM: {product.specs.ram}</li>
        <li>Storage: {product.specs.storage}</li>
        <li>Camera: {product.specs.camera}</li>
        <li>Battery: {product.specs.battery}</li>
        <li>OS: {product.specs.os}</li>
        <li>Weight: {product.specs.weight}</li>
      </ul>

      <hr style={{ margin: "30px 0" }} />

      {/* Pros */}
      <h2>Pros</h2>
      <ul>
        {product.pros.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      {/* Cons */}
      <h2>Cons</h2>
      <ul>
        {product.cons.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <hr style={{ margin: "30px 0" }} />

      {/* SEO Content Block */}
      <section>
        <h2>Is {product.name} Worth Buying?</h2>

        <p>
          The {product.name} is one of the top-rated{" "}
          {product.category} products in its segment, offering balanced
          performance, design, and value for money.
        </p>

        <p>
          If you're looking for a reliable {product.category}, this model
          is worth considering based on its specifications and user feedback.
        </p>
      </section>

      <hr style={{ margin: "30px 0" }} />

      {/* Internal Links SEO LOOP */}
      <section>
        <h3>Explore More</h3>

        <div
          style={{
            display: "flex",
            gap: 15,
            flexWrap: "wrap",
          }}
        >
          <Link href="/products">All Products</Link>

          <Link href="/best-under/10000">Best Under ₹10K</Link>

          <Link href="/best-under/20000">Best Under ₹20K</Link>

          <Link href="/best-for/gaming">Best For Gaming</Link>

          <Link href="/compare">Product Comparisons</Link>

          <Link href="/category/mobile">Mobile</Link>

          <Link href="/category/laptop">Laptop</Link>
        </div>
      </section>
    </div>
  );
}