import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Tech Store - Compare & Find Best Deals",
  description:
    "Amazon-style product comparison platform for mobiles, laptops and accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">

        {/* NAVBAR */}
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="text-xl font-bold text-blue-600">
              TechStore
            </Link>

            {/* SEARCH */}
            <form
              action="/search"
              className="flex items-center gap-2 flex-1 max-w-xl mx-6"
            >
              <input
                name="q"
                placeholder="Search products, brands..."
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded text-sm">
                Search
              </button>
            </form>

            {/* NAV LINKS */}
            <nav className="flex items-center gap-4 text-sm font-medium">

              <Link href="/compare" className="hover:text-blue-600">
                Compare
              </Link>

              <Link href="/category/mobile" className="hover:text-blue-600">
                Mobile
              </Link>

              <Link href="/category/laptop" className="hover:text-blue-600">
                Laptop
              </Link>

              <Link href="/best-under/20000" className="hover:text-blue-600">
                Under 20K
              </Link>

              <Link href="/best-under/50000" className="hover:text-blue-600">
                Deals
              </Link>

            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <footer className="bg-white border-t mt-10">
          <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between">

            <p>© {new Date().getFullYear()} TechStore</p>

            <div className="flex gap-4">
              <Link href="/compare">Compare</Link>
              <Link href="/category/mobile">Mobile</Link>
              <Link href="/category/laptop">Laptop</Link>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}