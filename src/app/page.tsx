"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  const applyFilters = (cat = category, text = search) => {
    let result = products;

    if (cat !== "all") {
      result = result.filter((p) => p.category === cat);
    }

    if (text.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(text.toLowerCase())
      );
    }

    setFiltered(result);
  };

  const handleCategory = (cat: string) => {
    setCategory(cat);
    applyFilters(cat, search);
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    applyFilters(category, text);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Tech Compare Hub</h1>

      <Link href="/compare">
        <button>Go to Compare</button>
      </Link>

      <hr />

      {/* Search */}
      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ padding: 8, marginBottom: 10 }}
      />

      {/* Filters */}
      <div>
        <button onClick={() => handleCategory("all")}>All</button>
        <button onClick={() => handleCategory("mobile")}>Mobile</button>
        <button onClick={() => handleCategory("laptop")}>Laptop</button>
      </div>

      <h2>Products</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {filtered.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: 10 }}>
            <img src={p.image} width={100} height={100} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <p>{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}