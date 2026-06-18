"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BarChart3, Heart, Moon, Search, ShoppingCart, Sun, UserRound } from "lucide-react";
import { categories, products } from "@/lib/products";
import { useCart } from "./cart-provider";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { lines } = useCart();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const suggestions = useMemo(() => {
    const normalized = query.toLowerCase();
    if (normalized.length < 2) return [];
    return products
      .filter((product) => `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(normalized))
      .slice(0, 5);
  }, [query]);

  function submitSearch(event: React.FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category !== "All") params.set("category", category);
    router.push(`/products?${params.toString()}`);
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95"
      style={{ position: "sticky", top: 0 }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-xl font-black text-ink dark:text-white">
            Tech <span className="text-brand">Ħµb</span>
          </Link>
          <div className="flex lg:hidden">
            <HeaderActions dark={dark} setDark={setDark} cartCount={lines.length} compact />
          </div>
        </div>

        <form onSubmit={submitSearch} className="relative flex flex-1 rounded-md border-2 border-market bg-white dark:border-market dark:bg-slate-900">
          <select
            aria-label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-28 rounded-l bg-slate-100 px-2 text-sm outline-none dark:bg-slate-800"
          >
            <option>All</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search best budget phone under 15000, gaming laptop..."
            className="min-w-0 flex-1 px-3 text-sm outline-none dark:bg-slate-900"
          />
          <button className="flex w-12 items-center justify-center bg-market text-ink" aria-label="Search">
            <Search size={20} />
          </button>
          {suggestions.length > 0 && (
            <div className="absolute left-28 right-0 top-12 z-20 overflow-hidden rounded-md border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-950">
              {suggestions.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`} className="block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">
                  {product.name} <span className="text-slate-500">in {product.category}</span>
                </Link>
              ))}
            </div>
          )}
        </form>

        <nav className="flex items-center justify-between gap-2 text-sm font-semibold lg:justify-start">
          {[
            ["/products", "Products"],
            ["/compare", "Compare"],
            ["/dashboard", "Dashboard"],
            ["/admin", "Admin"]
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-md px-3 py-2 ${pathname === href ? "bg-slate-100 dark:bg-slate-800" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <HeaderActions dark={dark} setDark={setDark} cartCount={lines.length} />
        </div>
      </div>
    </header>
  );
}

function HeaderActions({ dark, setDark, cartCount, compact = false }: { dark: boolean; setDark: (value: boolean) => void; cartCount: number; compact?: boolean }) {
  return (
    <div className="flex items-center gap-1">
      {!compact && (
        <>
          <Link href="/compare" className="btn-secondary px-3" title="Compare">
            <BarChart3 size={18} />
          </Link>
          <Link href="/dashboard" className="btn-secondary px-3" title="Wishlist">
            <Heart size={18} />
          </Link>
        </>
      )}
      <Link href="/login" className="btn-secondary px-3" title="Account">
        <UserRound size={18} />
      </Link>
      <Link href="/cart" className="btn-secondary relative px-3" title="Cart">
        <ShoppingCart size={18} />
        {cartCount > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-brand px-1.5 text-xs text-white">{cartCount}</span>}
      </Link>
      <button className="btn-secondary px-3" onClick={() => setDark(!dark)} title="Toggle theme" aria-label="Toggle theme">
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}
