type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return (
    <div style={{ padding: 20 }}>
      <h1>Product Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}