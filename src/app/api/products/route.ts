import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
     id: "iphone15",
     name: "iPhone 15",
     brand: "Apple",
     price: 79999,
     rating: 4.6,
     image: "/products/iphone15.jpg",
     category: "mobile",
     battery: "3349mAh",
     camera: "48MP",
     display: "6.1 inch OLED",
     processor: "A16 Bionic",
    },
    {
      id: "s24",
      name: "Samsung S24",
      brand: "Samsung",
      price: 69999,
      rating: 4.5,
      image: "/products/s24.jpg",
      category: "mobile",
      battery: "4000mAh",
      camera: "50MP",
      display: "6.2 inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
    },
  ]);
}