import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold">
        404
      </h1>

      <p className="mt-4 text-gray-600">
        Page not found
      </p>

      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-black text-white rounded"
      >
        Go Home
      </Link>
    </main>
  );
}