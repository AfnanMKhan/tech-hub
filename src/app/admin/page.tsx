import { supabase } from "@/lib/supabaseClient";

export default async function AdminPage() {
  const { data: clicks } = await supabase
    .from("clicks")
    .select("*");

  const totalClicks = clicks?.length ?? 0;

  const grouped: Record<string, number> = {};

  clicks?.forEach((click) => {
    grouped[click.product_id] =
      (grouped[click.product_id] || 0) + 1;
  });

  const leaderboard = Object.entries(grouped)
    .sort((a, b) => b[1] - a[1]);

  const estimatedRevenue = totalClicks * 5;

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <h2>Total Clicks</h2>
          <p className="text-3xl font-bold">
            {totalClicks}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h2>Estimated Revenue</h2>
          <p className="text-3xl font-bold">
            ₹{estimatedRevenue}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h2>Products Clicked</h2>
          <p className="text-3xl font-bold">
            {leaderboard.length}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Top Products
        </h2>

        {leaderboard.map(([productId, count]) => (
          <div
            key={productId}
            className="border rounded p-3 mb-2"
          >
            Product #{productId} — {count} clicks
          </div>
        ))}
      </div>
    </main>
  );
}