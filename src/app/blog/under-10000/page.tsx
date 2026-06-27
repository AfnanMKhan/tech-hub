import Link from "next/link";

export default function Under10000Page() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Best Phones Under ₹10,000 (2026)
      </h1>

      <p className="text-gray-600 mb-8">
        Looking for the best smartphone under ₹10,000? Here are our top
        recommendations for battery life, gaming, cameras and daily use.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/product/vivot3lite5g"
          className="bg-[#F5E6CA] p-6 rounded-xl shadow"
        >
          <h2 className="text-xl font-bold">
            Vivo T3 Lite 5G
          </h2>

          <p className="text-gray-600 mt-2">
            Dimensity 6300 • 50MP Camera • 5000mAh Battery
          </p>
        </Link>

        <Link
          href="/product/redmi14c5g"
          className="bg-[#F5E6CA] p-6 rounded-xl shadow"
        >
          <h2 className="text-xl font-bold">
            Redmi 14C 5G
          </h2>

          <p className="text-gray-600 mt-2">
            Snapdragon 4 Gen 2 • 120Hz Display • 5160mAh
          </p>
        </Link>

        <Link
          href="/product/pococ755g"
          className="bg-[#F5E6CA] p-6 rounded-xl shadow"
        >
          <h2 className="text-xl font-bold">
            POCO C75 5G
          </h2>

          <p className="text-gray-600 mt-2">
            Snapdragon 4s Gen 2 • 120Hz Display • 5160mAh
          </p>
        </Link>

        <Link
          href="/product/redmi124g"
          className="bg-[#F5E6CA] p-6 rounded-xl shadow"
        >
          <h2 className="text-xl font-bold">
            Redmi 12 4G
          </h2>

          <p className="text-gray-600 mt-2">
            FHD+ Display • MediaTek Helio G88 • 5000mAh
          </p>
        </Link>

        <Link
          href="/product/oppoa3x5g"
          className="bg-[#F5E6CA] p-6 rounded-xl shadow"
        >
          <h2 className="text-xl font-bold">
            OPPO A3x 5G
          </h2>

          <p className="text-gray-600 mt-2">
            90Hz Display • 5100mAh Battery • 5G
          </p>
        </Link>
      </div>
    </main>
  );
}