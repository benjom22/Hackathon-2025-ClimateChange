import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const redemptions = await prisma.redemption.findMany({
    include: { reward: true, user: true },
  });
  return NextResponse.json(redemptions, { status: 200 });
}

export async function POST(req: Request) {
  const { userId, rewardId } = await req.json();
  const newRedemption = await prisma.redemption.create({
    data: { userId, rewardId },
  });
  return NextResponse.json(newRedemption, { status: 201 });
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const rewardId = searchParams.get("rewardId");

  if (!userId || !rewardId) {
    return NextResponse.json(
      { error: "Missing userId or rewardId" },
      { status: 400 }
    );
  }

  try {
    await prisma.redemption.delete({
      where: {
        userId_rewardId: {
          userId: Number(userId),
          rewardId: Number(rewardId),
        },
      },
    });

    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Redemption not found or already deleted" },
      { status: 404 }
    );
  }
}
