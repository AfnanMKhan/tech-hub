type Props = {
  params: Promise<{ platform: string }>;
  searchParams?: Promise<{ product?: string }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { platform } = await params;
  const filters = searchParams ? await searchParams : {};

  return (
    <div style={{ padding: 20 }}>
      <h1>Redirect Page</h1>
      <p>Platform: {platform}</p>
      <p>Product: {filters.product || "none"}</p>
    </div>
  );
}