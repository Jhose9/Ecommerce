import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/PrismaClient";

export async function GET() {
  try {
    const data = await prisma.products.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      price,
      details,
      composition,
      sizes,
      description,
      collection,
      img,
    } = body;

    const data = await prisma.products.create({
      data: {
        name,
        price,
        composition,
        details,
        description,
        sizes,
        collection,
        img,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
