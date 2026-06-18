import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "iPhone 15",
        slug: "iphone-15",
        description: "Latest Apple iPhone",
        price: 79999,
        images: ["/products/iphone15.jpg"], // FIXED
        category: "mobile",
        brand: "Apple",
        rating: 4.6,
        reviews: 1200,
        specs: {
          ram: "6GB",
          storage: "128GB"
        },
        affiliate: {
          amazon: "#",
          flipkart: "#"
        }
      },
      {
        name: "MacBook Air M2",
        slug: "macbook-air-m2",
        description: "Apple laptop",
        price: 114999,
        images: ["/products/macbook.jpg"], // FIXED
        category: "laptop",
        brand: "Apple",
        rating: 4.8,
        reviews: 890,
        specs: {
          ram: "8GB",
          storage: "256GB SSD"
        },
        affiliate: {
          amazon: "#",
          flipkart: "#"
        }
      }
    ]
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });