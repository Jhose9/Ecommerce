import { prisma } from "@/lib/PrismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const data = await prisma.products.findMany({
    where: { collection: (await params).name },
  });
  return NextResponse.json(data);
}
