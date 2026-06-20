import { supabase } from "@/lib/supabaseClient";

type Click = {
  id: string;
  product_id: string;
  created_at: string;
};

export default async function AdminClicksPage() {
  const { data, error } = await supabase
    .from("clicks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="p-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-red-500 mt-4">
          Failed to load clicks data
        </p>
      </main>
    );
  }

  const clicks = (data || []) as Click[];

  const productStats: Record<string, number> = {};

  clicks.forEach((click) => {
    productStats[click.product_id] =
      (productStats[click.product_id] || 0) + 1;
  });

  const topProducts = Object.entries(productStats).sort(
    (a, b) => b[1] - a[1]
  );

  const estimatedRevenue = clicks.length * 2;

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Admin Click Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold">
            Total Clicks
          </h2>

          <p className="text-3xl font-bold mt-2">
            {clicks.length}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="font-semibold">
            Products Clicked
          </h2>

          <p className="text-3xl font-bold mt-2">
            {Object.keys(productStats).length}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="font-semibold">
            Estimated Revenue
          </h2>

          <p className="text-3xl font-bold mt-2">
            ₹{estimatedRevenue}
          </p>
        </div>
      </div>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Top Products
        </h2>

        {topProducts.length === 0 ? (
          <p>No clicks yet.</p>
        ) : (
          <ul className="space-y-2">
            {topProducts.map(([productId, count]) => (
              <li
                key={productId}
                className="flex justify-between border-b pb-2"
              >
                <span>{productId}</span>
                <span>{count} clicks</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Recent Clicks
        </h2>

        {clicks.length === 0 ? (
          <p>No click data found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">
                    Product ID
                  </th>
                  <th className="border p-2 text-left">
                    Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {clicks.map((click) => (
                  <tr key={click.id}>
                    <td className="border p-2">
                      {click.product_id}
                    </td>

                    <td className="border p-2">
                      {new Date(
                        click.created_at
                      ).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}