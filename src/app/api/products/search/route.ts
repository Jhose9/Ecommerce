import { prisma } from "@/lib/PrismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const word: string = (await req.json()).name;

  const fragments = word.split(" ").filter((word) => word.length > 0);
  const products = await prisma.products.findMany({
    where: {
      OR: fragments.map((fragment) => ({
        name: {
          contains: fragment, // Busca cualquier fragmento dentro del nombre
          mode: "insensitive", // Ignora mayúsculas y minúsculas
        },
      })),
    },
    take: 4, // Limita la cantidad de resultados
  });
  return NextResponse.json(products);
}
