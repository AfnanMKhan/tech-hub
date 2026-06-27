import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  const categories = [
    { name: "Phones", href: "/category/mobile", icon: "📱" },
    { name: "Laptops", href: "/category/laptop", icon: "💻" },
    { name: "Gaming", href: "/best-for/gaming", icon: "🎮" },
    { name: "Budget", href: "/best-for/budget", icon: "💰" },
  ];

 const guides = [
  "best-phone-under-20000",
  "best-phone-under-30000",
  "iphone-16-pro-review",
  "galaxy-s25-ultra-review",
  "best-gaming-laptop-2026",
  "gta-6-pre-order-guide"
];

  return (
  <>

    <main className="min-h-screen bg-[#E8D6B5]">
      <section className="relative h-[650px] overflow-hidden">
  <Image
    src="/images/gta6-banner.jpg"
    alt="GTA 6"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/50">
    <div className="max-w-7xl mx-auto h-full flex items-center px-6">
      <div className="text-white max-w-2xl">

        <span className="bg-red-600 px-4 py-2 rounded-full text-sm font-bold">
          BREAKING NEWS
        </span>

        <h1 className="text-6xl font-bold mt-6">
          GTA VI Pre-Orders Are Live
        </h1>

        <p className="text-xl mt-6 text-gray-200">
          Get the latest GTA 6 news, release updates,
          gameplay details and pre-order information.
        </p>

        <a
          href="https://www.rockstargames.com/VI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-lg font-semibold"
        >
          Official GTA VI Website
        </a>

      </div>
    </div>
  </div>
</section>
      <section className="bg-[#E8D6B5] border-b border-gray-300">
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
              className="bg-[#F5E6CA] p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <div className="font-semibold">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
  <h2 className="text-3xl font-bold mb-8">
    Featured Products
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <Link
      href="/products/iphone16pro"
      className="bg-white p-6 rounded-xl shadow"
    >
      <h3 className="font-bold text-xl">iPhone 16 Pro</h3>
      <p className="text-gray-500">A18 Pro • 48MP Camera</p>
    </Link>

    <Link
      href="/products/galaxys25ultra"
     className="bg-[#F5E6CA] p-6 rounded-xl shadow"
    >
      <h3 className="font-bold text-xl">Galaxy S25 Ultra</h3>
      <p className="text-gray-500">200MP Camera • S Pen</p>
    </Link>

    <Link
      href="/products/macbookairm4"
      className="bg-white p-6 rounded-xl shadow"
    >
      <h3 className="font-bold text-xl">MacBook Air M4</h3>
      <p className="text-gray-500">Apple M4 • 18 Hours Battery</p>
    </Link>
  </div>
</section>
<section className="max-w-6xl mx-auto px-6 py-14">
  <h2 className="text-3xl font-bold mb-8">
    Upcoming Launches
  </h2>

  {/* Mobiles */}
  <h3 className="text-2xl font-semibold mb-4">
    📱 Mobile Phones
  </h3>

  <Link href="/product/xiaomi17t" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  Xiaomi 17T
</Link>

<Link href="/product/oneplus15r" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  OnePlus 15R
</Link>

<Link href="/product/realme16t" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  Realme 16T
</Link>

<Link href="/product/galaxya37" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  Samsung Galaxy A37
</Link>

<Link href="/product/galaxys26" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  Samsung Galaxy S26
</Link>

<Link href="/product/galaxys26ultra" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  Samsung Galaxy S26 Ultra
</Link>

<Link href="/product/iqoo15" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  iQOO 15
</Link>

<Link href="/product/oppofindx9ultra" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  OPPO Find X9 Ultra
</Link>


  {/* Laptops */}
  <h3 className="text-2xl font-semibold mb-4">
    💻 Laptops
  </h3>

<Link href="/product/hp-omen-max-16" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  HP Omen Max 16
</Link>

<Link href="/product/lenovo-legion-9i" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  Lenovo Legion 9i
</Link>

<Link href="/product/acer-predator-helios-18" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
  Acer Predator Helios 18
</Link>

  {/* Games */}
  <h2 className="text-2xl font-bold mb-4">
  🎮 Upcoming Games
</h2>

<div className="grid md:grid-cols-3 gap-6">

  <Link href="/game/gta6" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
    GTA VI
  </Link>

  <Link href="/game/witcher4" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
    The Witcher 4
  </Link>

  <Link href="/game/ea-fc-27" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
    EA FC 27
  </Link>

  <Link href="/game/call-of-duty-black-ops-8" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
    Call of Duty: Black Ops 8
  </Link>

  <Link href="/game/forza-horizon-6" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
    Forza Horizon 6 (Launched)
  </Link>

  <Link href="/game/resident-evil-9" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
    Resident Evil 9 (Launched)
  </Link>

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
              className="bg-[#F5E6CA] p-5 rounded-xl shadow hover:shadow-lg transition"

            > <Link href="/blog/under-10000">
              Best Phones Under ₹10,000
            </Link>

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
  <h2 className="text-3xl font-bold mb-8">
    Trending Tech News
  </h2>

  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="p-8">
      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
        Breaking News
      </span>

      <h3 className="text-3xl font-bold mt-4">
        GTA 6 Pre-Orders Open This Week
      </h3>

      <p className="text-gray-600 mt-4">
        Rockstar Games has confirmed that GTA VI pre-orders begin
        on June 25. The game launches on November 19 for PS5 and
        Xbox Series X/S.
      </p>

      <a
        href="https://www.rockstargames.com/VI"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg"
      >
        View Official GTA VI Page
      </a>
    </div>
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
</>
  );
}