"use client";

import { useState } from "react";

export default function ProductGallery({
  images,
}: {
  images: string[];
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <img
        src={selectedImage}
        alt="Product"
        style={{
          width: "100%",
          maxHeight: "500px",
          objectFit: "contain",
          borderRadius: "12px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px",
          overflowX: "auto",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => setSelectedImage(img)}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              cursor: "pointer",
              borderRadius: "8px",
              border:
                selectedImage === img
                  ? "2px solid blue"
                  : "1px solid #ddd",
            }}
          />
        ))}
      </div>
    </>
  );
}