"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full"
    >
      <input
        type="text"
        placeholder="Search phones, laptops, tablets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 border border-gray-300 px-4 py-2 rounded-l-lg outline-none"
      />

      <button
        type="submit"
        className="bg-black text-white px-5 rounded-r-lg"
      >
        Search
      </button>
    </form>
  );
}