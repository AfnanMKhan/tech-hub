import { notFound } from "next/navigation";
import Link from "next/link";
import ProductSchema from "@/components/ProductSchema";
import ProductGallery from "@/components/ProductGallery";

type Product = {
  id: string;
  name: string;
  brand?: string;
  image: string;
  images?: string[];

  category?: string;

  price: number;
  rating: number;

  battery?: string;
  camera?: string;
  display?: string;
  processor?: string;

  highlights?: string[];

  amazon?: string;
  flipkart?: string;
  official?: string;

  specifications?: Record<
    string,
    Record<string, string>
  >;
};

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`,
    {
      cache: "no-store",
    }
  );

  const products = await res.json();

  return products.find((p: Product) => p.id === id) || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) return {};

  return {
    title: `${product.name} Review & Price 2026`,
    description: `Buy ${product.name} at best price. Compare specs, pros, cons and ratings.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProduct(slug);

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
      <div>
  <ProductGallery
    images={[
      product.image,
      ...(product.images || []),
    ].filter(Boolean) as string[]}
  />
</div>

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
      <div
  style={{
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 20,
  }}
>
  {product.amazon && (
    <a
      href={product.amazon}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "#ff9900",
        color: "white",
        padding: "12px 20px",
        borderRadius: 8,
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Buy on Amazon
    </a>
  )}

  {product.flipkart && (
    <a
      href={product.flipkart}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "#2874f0",
        color: "white",
        padding: "12px 20px",
        borderRadius: 8,
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Buy on Flipkart
    </a>
  )}

  {product.official && (
    <a
      href={product.official}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "#111",
        color: "white",
        padding: "12px 20px",
        borderRadius: 8,
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Official Website
    </a>
  )}
</div>
      <hr style={{ margin: "30px 0" }} />

      {/* Specs */}
      <h2>Highlights</h2>

      <ul>
        {product.highlights?.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>

      <hr style={{ margin: "30px 0" }} />

      <h2>Key Specifications</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              Display
            </td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {product.display}
            </td>
          </tr>

          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              Processor
            </td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {product.processor}
            </td>
          </tr>

          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              Camera
            </td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {product.camera}
            </td>
          </tr>

          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              Battery
            </td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {product.battery}
            </td>
          </tr>
        </tbody>
      </table>

      <hr style={{ margin: "30px 0" }} />

      {/* SEO Content Block */}
      {product.specifications && (
  <>
    <hr style={{ margin: "30px 0" }} />

    <h2>Detailed Specifications</h2>

    {Object.entries(product.specifications).map(
      ([section, specs]) => (
        <div key={section} style={{ marginBottom: 25 }}>
          <h3>{section}</h3>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              {Object.entries(specs).map(
                ([key, value]) => (
                  <tr key={key}>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {key}
                    </td>

                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: 10,
                      }}
                    >
                      {value}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )
    )}
  </>
)}

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