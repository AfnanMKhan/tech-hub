import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <h1>Best Tech Products 2026</h1>

      <p>
        Find the best smartphones, laptops, and gadgets with detailed reviews,
        comparisons, and buying guides.
      </p>

      <h2>🔥 Top Categories</h2>

      <ul>
        <li><Link href="/blog/best-phone-under-20000">Best Phones Under 20000</Link></li>
        <li><Link href="/blog/best-gaming-phone-under-30000">Best Gaming Phones</Link></li>
        <li><Link href="/blog/iphone-15-review">iPhone 15 Review</Link></li>
        <li><Link href="/blog/samsung-s24-review">Samsung S24 Review</Link></li>
        <li><Link href="/blog/iphone-vs-samsung">iPhone vs Samsung</Link></li>
      </ul>

      <h2>📊 Why Trust Us?</h2>
      <p>
        We compare real specifications, performance, and pricing to help you
        choose the best product for your budget.
      </p>

      <h2>🚀 Latest Guides</h2>
      <ul>
        <li><Link href="/blog/best-phone-under-10000">Best Phones Under 10000</Link></li>
        <li><Link href="/blog/best-camera-phone">Best Camera Phones</Link></li>
        <li><Link href="/blog/best-battery-phone">Best Battery Phones</Link></li>
      </ul>
    </main>
  );
}