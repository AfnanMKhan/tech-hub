import Link from "next/link";
import { seoKeywords } from "@/lib/seoKeywords";
import { generateBlog } from "@/lib/generateBlog";

export default function Page() {
  const blogs = seoKeywords.map((k, i) =>
    generateBlog(`auto-${i}`, k)
  );

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold">Auto SEO Blog Hub</h1>

      <div className="grid gap-4 mt-6">
        {blogs.map((b) => (
          <Link
            key={b.slug}
            href={`/blog/${b.slug}`}
            className="border p-4 rounded hover:bg-gray-50"
          >
            <h2 className="font-semibold">{b.title}</h2>
            <p className="text-sm text-gray-500">
              {b.keywords.join(", ")}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}