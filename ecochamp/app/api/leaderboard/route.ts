import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const users = await prisma.user.findMany({
      orderBy: { points: "desc" },
      select: {
        id: true,
        username: true,
        points: true,
      },
    });

    const leaderboard = users.map((user, index) => ({
      rank: index + 1,
      ...user,
    }));

    return NextResponse.json(leaderboard, { status: 200 });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json(
      { error: "Failed to fetch leaderboard" },
      { status: 500 }
    );
  }
}
