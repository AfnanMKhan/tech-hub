import { notFound } from "next/navigation";
import Link from "next/link";
import ProductSchema from "@/components/ProductSchema";
import { getProductById } from "@/lib/products";

type Product = {
  id: string;
  name: string;
  brand?: string;
  image?: string;
  category?: string;

  price: number;
  rating: number;

  battery?: string;
  camera?: string;
  display?: string;
  processor?: string;
};

async function getProduct(id: string): Promise<Product | null> {
  return getProductById(id) || null;
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
      <p>₹{product.price}</p>
        
      {/* Rating */}
      <p>
        ⭐ {product.rating}
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
        <li>Display: {product.display}</li>
        <li>Processor: {product.processor}</li>
        <li>Camera: {product.camera}</li>
        <li>Battery: {product.battery}</li>
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