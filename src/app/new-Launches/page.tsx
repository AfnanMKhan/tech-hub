import Link from "next/link";

export default function NewLaunchesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        🚀 New Launches 2026
      </h1>

      {/* Mobiles */}
      <h2 className="text-2xl font-bold mb-4">
        📱 Mobiles
      </h2>

      <div className="grid md:grid-cols-4 gap-4 mb-10">
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
          Galaxy A37
        </Link>

        <Link href="/product/galaxys26" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
          Galaxy S26
        </Link>

        <Link href="/product/galaxys26ultra" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
          Galaxy S26 Ultra
        </Link>

        <Link href="/product/iqoo15" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
          iQOO 15
        </Link>

        <Link href="/product/oppofindx9ultra" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
          OPPO Find X9 Ultra
        </Link>
      </div>

      {/* Laptops */}
      <h2 className="text-2xl font-bold mb-4">
        💻 Laptops
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <Link href="/product/hpomenmax16" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
          HP Omen Max 16
        </Link>

        <Link href="/product/lenovolegion9i" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
          Lenovo Legion 9i
        </Link>

        <Link href="/product/acerpredatorhelios18" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
          Acer Predator Helios 18
        </Link>
      </div>

      {/* Games */}
      <h2 className="text-2xl font-bold mb-4">
        🎮 Upcoming Games
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/blog/gta-6-pre-order-guide" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
          GTA VI
        </Link>

        <Link href="/news" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
          The Witcher 4
        </Link>

        <Link href="/news" className="bg-[#F5E6CA] p-5 rounded-xl shadow block">
          EA FC 27
        </Link>
      </div>
    </main>
  );
}