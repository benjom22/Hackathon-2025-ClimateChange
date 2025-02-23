import prisma from "@/lib/prisma";

export const GET = async (req: Request) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        email: true,
        points: true,
      },
      orderBy: {
        points: "desc",
      },
    });

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
    });
  }
};
