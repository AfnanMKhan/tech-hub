import { getAllClicks } from "@/lib/analytics";

export default async function AnalyticsPage() {
  const data = await getAllClicks();

  return (
    <main style={{ padding: 20 }}>
      <h1>Affiliate Click Analytics</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([id, clicks]) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}