"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 my-6"
    >
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-3 rounded-lg flex-1"
      />

      <button
        type="submit"
        className="bg-black text-white px-6 rounded-lg"
      >
        Search
      </button>
    </form>
  );
}