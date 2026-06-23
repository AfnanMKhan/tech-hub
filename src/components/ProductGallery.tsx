"use client";

import { useState } from "react";

export default function ProductGallery({
  images,
}: {
  images: string[];
}) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <>
      <img
        src={selected}
        alt=""
        style={{
          width: "100%",
          maxHeight: 500,
          objectFit: "contain",
          borderRadius: 12,
        }}
      />

      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 15,
          overflowX: "auto",
        }}
      >
        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt=""
            onClick={() => setSelected(img)}
            style={{
              width: 90,
              height: 90,
              cursor: "pointer",
              borderRadius: 8,
              border: selected === img
                ? "2px solid blue"
                : "1px solid #ddd",
            }}
          />
        ))}
      </div>
    </>
  );
}