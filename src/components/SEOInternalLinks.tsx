import Link from "next/link";

export default function SEOInternalLinks() {
  return (
    <div className="mt-10 border-t pt-6">
      <h3 className="text-lg font-semibold mb-3">Explore More Tech Deals</h3>

      <div className="flex flex-wrap gap-3 text-sm">
        {/* price pages */}
        <Link className="text-blue-600 underline" href="/best-under/10000">
          Under ₹10K
        </Link>

        <Link className="text-blue-600 underline" href="/best-under/15000">
          Under ₹15K
        </Link>

        <Link className="text-blue-600 underline" href="/best-under/20000">
          Under ₹20K
        </Link>

        {/* category pages */}
        <Link className="text-blue-600 underline" href="/best-for/gaming">
          Gaming
        </Link>

        <Link className="text-blue-600 underline" href="/best-for/students">
          Students
        </Link>

        <Link className="text-blue-600 underline" href="/best-for/budget">
          Budget Picks
        </Link>
      </div>
    </div>
  );
}