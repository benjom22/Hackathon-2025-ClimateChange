/*import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const partners = await prisma.partners.findMany();
    return res.status(200).json(partners);
  }

  if (req.method === "POST") {
    const { name, logo } = req.body;

    if (!name || !logo) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const partner = await prisma.partners.create({
      data: { name, logo },
    });
    return res.status(201).json(partner);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).json({ message: "Method not allowed" });
}*/
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const partner = await prisma.partners.findUnique({
      where: { id: Number(id) },
      include: { rewards: true },
    });
    return NextResponse.json(partner, { status: 200 });
  }

  const partners = await prisma.partners.findMany({
    include: { rewards: true },
  });
  return NextResponse.json(partners, { status: 200 });
}

export async function POST(req: Request) {
  const { name, logo } = await req.json();
  const newPartner = await prisma.partners.create({ data: { name, logo } });
  return NextResponse.json(newPartner, { status: 201 });
}

export async function PUT(req: Request) {
  try {
    const { id, name, logo } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Partner ID is required" },
        { status: 400 }
      );
    }

    const existingPartner = await prisma.partners.findUnique({
      where: { id: Number(id) },
    });

    if (!existingPartner) {
      return NextResponse.json({ error: "Partner not found" }, { status: 404 });
    }

    const updatedPartner = await prisma.partners.update({
      where: { id: Number(id) },
      data: { name, logo },
    });

    return NextResponse.json(updatedPartner, { status: 200 });
  } catch (error) {
    console.error("Error updating partner:", error);
    return NextResponse.json(
      { error: "Failed to update partner" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    await prisma.partners.delete({ where: { id: Number(id) } });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting partner:", error);
    return NextResponse.json(
      { error: "Failed to delete partner" },
      { status: 500 }
    );
  }
}
