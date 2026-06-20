"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { lines, removeLine, clearCart } = useCart();

  const total = lines.reduce((sum, item) => {
    const price = 1000; // fallback price (we don’t yet fetch real price here)
    return sum + price * item.quantity;
  }, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Your Cart</h1>

      {lines.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {lines.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: 10,
                marginTop: 10,
              }}
            >
              <p>Product ID: {item.productId}</p>
              <p>Seller: {item.sellerId}</p>
              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() =>
                  removeLine(item.productId, item.sellerId)
                }
                style={{
                  marginTop: 5,
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: 5,
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <hr style={{ marginTop: 20 }} />

          <h2>Total: ₹{total}</h2>

          <button
            onClick={clearCart}
            style={{
              marginTop: 10,
              background: "black",
              color: "white",
              padding: 10,
              border: "none",
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}