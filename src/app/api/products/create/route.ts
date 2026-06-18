import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description || "",
        price: Number(body.price),
        discount: Number(body.discount || 0),
        images: body.images || [],
        category: body.category,
        brand: body.brand,
        rating: Number(body.rating || 0),
        reviews: Number(body.reviews || 0),
        inStock: true,
        specs: body.specs || {},
        affiliate: body.affiliate || {},
      },
    });

    return Response.json(product);
  } catch (err) {
    return Response.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}