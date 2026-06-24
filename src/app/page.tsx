import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const categories = [
    { name: "Phones", href: "/category/mobile", icon: "📱" },
    { name: "Laptops", href: "/category/laptop", icon: "💻" },
    { name: "Gaming", href: "/best-for/gaming", icon: "🎮" },
    { name: "Budget", href: "/best-for/budget", icon: "💰" },
  ];

  const guides = [
    "best-phone-under-20000",
    "best-gaming-phone-under-30000",
    "iphone-15-review",
    "samsung-s24-review",
    "best-camera-phone",
    "best-battery-phone",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find The Best Tech Products
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare smartphones, laptops, gadgets and discover the best deals,
            reviews and buying guides.
          </p>

          <div className="mt-8">
            <SearchBar />
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/products"
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              Browse Products
            </Link>

            <Link
              href="/compare"
              className="border px-6 py-3 rounded-lg"
            >
              Compare Products
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-8">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <div className="font-semibold">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-8">
          Buying Guides
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide}
              href={`/blog/${guide}`}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">
                {guide.replace(/-/g, " ")}
              </h3>

              <p className="text-gray-500 mt-2">
                Read detailed review and recommendations.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-black text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Why Trust Tech Hub?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            We compare products based on specifications, performance,
            pricing and real-world value to help you make smarter
            buying decisions.
          </p>
        </div>
      </section>
    </main>
  );
}