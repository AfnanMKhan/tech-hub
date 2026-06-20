type Props = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function Page({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};
  const q = params.q || "";

  return (
    <div style={{ padding: 20 }}>
      <h1>Search Page</h1>
      <p>Query: {q || "no search term"}</p>
    </div>
  );
}