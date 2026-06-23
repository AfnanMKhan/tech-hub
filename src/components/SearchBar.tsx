"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Search phones, laptops..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-3 border rounded-l-lg"
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