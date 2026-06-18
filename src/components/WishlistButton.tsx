"use client";

import { useState } from "react";

export default function WishlistButton() {
  const [saved, setSaved] = useState(false);

  return (
    <button
      onClick={() => setSaved(!saved)}
      className={`w-full mt-3 py-2 rounded border ${
        saved
          ? "bg-red-100 text-red-600"
          : "bg-white text-gray-700"
      }`}
    >
      {saved ? "♥ Saved" : "♡ Add to Wishlist"}
    </button>
  );
}