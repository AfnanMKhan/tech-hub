"use client";

import { useEffect, useState } from "react";

export default function ComparePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [selected, setSelected] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleSelect = (product: any) => {
    if (selected.find((p) => p.id === product.id)) {
      setSelected(selected.filter((p) => p.id !== product.id));
    } else {
      if (selected.length < 2) {
        setSelected([...selected, product]);
      }
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Compare Products</h1>

      <h3>Select 2 products</h3>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => toggleSelect(p)}
            style={{
              border: "1px solid gray",
              padding: 10,
              cursor: "pointer",
              background: selected.find((s) => s.id === p.id)
                ? "#d1fae5"
                : "white",
            }}
          >
            <b>{p.name}</b>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>

      {selected.length === 2 && (
        <>
          <h2>Comparison</h2>

          <table border={1} cellPadding={10}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>{selected[0].name}</th>
                <th>{selected[1].name}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Price</td>
                <td>₹{selected[0].price}</td>
                <td>₹{selected[1].price}</td>
              </tr>

              <tr>
                <td>Category</td>
                <td>{selected[0].category}</td>
                <td>{selected[1].category}</td>
              </tr>

              <tr>
                <td>RAM</td>
                <td>{selected[0].specs?.ram}</td>
                <td>{selected[1].specs?.ram}</td>
              </tr>

              <tr>
                <td>Storage</td>
                <td>{selected[0].specs?.storage}</td>
                <td>{selected[1].specs?.storage}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}