import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function GET() {
  const rewards = await prisma.rewards.findMany({ include: { partner: true } });
  return NextResponse.json(rewards, { status: 200 });
}

const generateQRCode = () =>
  crypto.randomBytes(6).toString("hex").toUpperCase();

export async function POST(req: Request) {
  try {
    const { description, value, partnerId } = await req.json();

    const qrcode = generateQRCode();

    const newReward = await prisma.rewards.create({
      data: { description, value, partnerId, qrcode },
    });

    return NextResponse.json(newReward, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong", details: error },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, description, value, partnerId } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Reward ID is required" },
        { status: 400 }
      );
    }

    const existingReward = await prisma.rewards.findUnique({
      where: { id: Number(id) },
    });

    if (!existingReward) {
      return NextResponse.json({ error: "Reward not found" }, { status: 404 });
    }

    const updatedReward = await prisma.rewards.update({
      where: { id: Number(id) },
      data: { description, value, partnerId },
    });

    return NextResponse.json(updatedReward, { status: 200 });
  } catch (error) {
    console.error("Error updating reward:", error);
    return NextResponse.json(
      { error: "Failed to update reward" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  try {
    await prisma.rewards.delete({ where: { id: Number(id) } });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting reward:", error);
    return NextResponse.json(
      { error: "Failed to delete reward" },
      { status: 500 }
    );
  }
}
