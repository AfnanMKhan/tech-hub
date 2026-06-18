import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();

  const product = await prisma.product.update({
    where: { id: body.id },
    data: {
      name: body.name,
      slug: body.slug,
      description: body.description,
      price: Number(body.price),
      category: body.category,
      brand: body.brand,
    },
  });

  return Response.json(product);
}