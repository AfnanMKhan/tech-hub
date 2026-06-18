"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const method = editId ? "PUT" : "POST";

    await fetch("/api/products", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editId,
        ...form,
        price: Number(form.price),
      }),
    });

    setForm({ name: "", price: "", category: "", image: "" });
    setEditId(null);
    fetchProducts();
  };

  const handleEdit = (p: any) => {
    setEditId(p.id);
    setForm({
      name: p.name,
      price: p.price,
      category: p.category,
      image: p.image,
    });
  };

  const deleteProduct = async (id: string) => {
    await fetch(`/api/products?id=${id}`, { method: "DELETE" });
    fetchProducts();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel</h1>

      <h2>{editId ? "Edit Product" : "Add Product"}</h2>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />

      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      <hr />

      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          <b>{p.name}</b> - ₹{p.price}

          <button onClick={() => handleEdit(p)} style={{ marginLeft: 10 }}>
            Edit
          </button>

          <button onClick={() => deleteProduct(p.id)} style={{ marginLeft: 10 }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}