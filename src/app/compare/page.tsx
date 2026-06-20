import Link from "next/link";

type CompareItem = {
  title: string;
  slug: string;
  description: string;
};

const comparisons: CompareItem[] = [
  {
    title: "iPhone vs Android",
    slug: "iphone-vs-android",
    description: "Compare performance, camera, battery and ecosystem.",
  },
  {
    title: "Laptop vs Tablet",
    slug: "laptop-vs-tablet",
    description: "Best for productivity, study and portability.",
  },
  {
    title: "Budget Phones vs Flagship Phones",
    slug: "budget-vs-flagship-phones",
    description: "Is flagship really worth the extra money?",
  },
  {
    title: "Intel vs AMD",
    slug: "intel-vs-amd",
    description: "CPU performance comparison for gaming and work.",
  },
  {
    title: "Windows vs Mac",
    slug: "windows-vs-mac",
    description: "Which ecosystem suits you better?",
  },
];

export default function ComparePage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-3">
        Product Comparisons
      </h1>

      <p className="text-gray-600 mb-8">
        Explore detailed comparisons to choose the best product for your needs.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {comparisons.map((item) => (
          <div key={item.slug} className="border rounded-lg p-5">
            <h2 className="text-xl font-semibold mb-2">
              {item.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {item.description}
            </p>

            <Link
              href={`/compare/${item.slug}`}
              className="text-blue-600 font-medium"
            >
              View Comparison →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}