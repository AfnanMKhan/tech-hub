import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  return (
    <header className="bg-[#F5E6CA] border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center gap-6">

        <Link
          href="/"
          className="bg-black text-[#F5E6CA] px-4 py-2 rounded-lg text-2xl font-bold whitespace-nowrap"
        >
          Tech Hub
        </Link>

        <nav className="hidden lg:flex gap-6 font-medium text-gray-800">

  <Link
    href="/products"
    className="hover:text-black hover:underline"
  >
    Products
  </Link>

  <Link
    href="/category/mobile"
    className="hover:text-black hover:underline"
  >
    Phones
  </Link>

  <Link
    href="/category/laptop"
    className="hover:text-black hover:underline"
  >
    Laptops
  </Link>

  <Link
    href="/best-for/gaming"
    className="hover:text-black hover:underline"
  >
    Gaming
  </Link>

  <Link
    href="/compare"
    className="hover:text-black hover:underline"
  >
    Compare
  </Link>

  <Link
    href="/blog"
    className="hover:text-black hover:underline"
  >
    Reviews
  </Link>

  <Link
    href="/news"
    className="hover:text-black hover:underline"
  >
    News
  </Link>

</nav>

        <div className="flex-1">
          <SearchBar />
        </div>

      </div>
    </header>
  );
}