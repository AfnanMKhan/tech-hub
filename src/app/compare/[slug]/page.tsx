import Link from "next/link";
import { notFound } from "next/navigation";

type Comparison = {
  title: string;
  slug: string;
  intro: string;
  points: {
    label: string;
    a: string;
    b: string;
  }[];
};

const data: Comparison[] = [
  {
    title: "iPhone vs Android",
    slug: "iphone-vs-android",
    intro:
      "A detailed comparison between iPhone and Android smartphones across performance, ecosystem, camera, and customization.",
    points: [
      {
        label: "Performance",
        a: "Highly optimized hardware-software integration",
        b: "Depends on manufacturer (varies widely)",
      },
      {
        label: "Customization",
        a: "Limited customization",
        b: "Highly customizable",
      },
      {
        label: "Ecosystem",
        a: "Strong Apple ecosystem",
        b: "Google ecosystem + third-party flexibility",
      },
    ],
  },
  {
    title: "Laptop vs Tablet",
    slug: "laptop-vs-tablet",
    intro:
      "Compare laptops and tablets for productivity, study, entertainment, and portability.",
    points: [
      {
        label: "Productivity",
        a: "Best for heavy work and multitasking",
        b: "Good for light tasks and media",
      },
      {
        label: "Portability",
        a: "Heavier",
        b: "Very lightweight and portable",
      },
      {
        label: "Software",
        a: "Full desktop apps",
        b: "Mobile/tablet optimized apps",
      },
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = data.find((d) => d.slug === slug);

  if (!item) {
    return {
      title: "Comparison Not Found",
    };
  }

  return {
    title: `${item.title} 2026 - Full Comparison`,
    description: item.intro,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = data.find((d) => d.slug === slug);

  if (!item) return notFound();

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        {item.title}
      </h1>

      <p className="text-gray-600 mb-8">
        {item.intro}
      </p>

      <div className="space-y-6">
        {item.points.map((p, i) => (
          <div key={i} className="border p-4 rounded-lg">
            <h2 className="font-semibold text-lg mb-2">
              {p.label}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Option A</h3>
                <p className="text-gray-600">{p.a}</p>
              </div>

              <div>
                <h3 className="font-medium">Option B</h3>
                <p className="text-gray-600">{p.b}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/compare" className="text-blue-600">
          ← Back to Comparisons
        </Link>
      </div>
    </main>
  );
}