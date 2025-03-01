import { prisma } from "@/lib/PrismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const data = await prisma.products.findUnique({
      where: { id: parseInt((await params).id) },
      include: {
        reviews: true,
      },
    });
    if (data == null) {
      return NextResponse.json({ State: "El elemento no existe" });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { description, name, email } = await request.json();

    const data = await prisma.review.create({
      data: {
        description,
        email,
        name,
        products: { connect: { id: parseInt((await params).id) } },
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
