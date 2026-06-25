"use client";

import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-bold"
        >
          Tech Hub
        </Link>

        <nav className="hidden lg:flex gap-8">
          <Link href="/products">Products</Link>
          <Link href="/category/mobile">Phones</Link>
          <Link href="/category/laptop">Laptops</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/news">News</Link>
        </nav>

        <div className="w-[450px]">
          <SearchBar />
        </div>

      </div>
    </header>
  );
}