import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { id } = await req.json();

  await prisma.product.delete({ where: { id } });

  return Response.json({ success: true });
}