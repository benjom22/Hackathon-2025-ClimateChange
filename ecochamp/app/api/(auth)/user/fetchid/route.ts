import prisma from "@/lib/prisma";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("id");

  if (!userId) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
    });
  }

  const numericUserId = parseInt(userId, 10);

  if (isNaN(numericUserId)) {
    return new Response(JSON.stringify({ error: "Invalid user ID" }), {
      status: 400,
    });
  }

  const user = await prisma.user.findUnique({
    where: { id: numericUserId },
    select: { id: true, username: true, email: true },
  });

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(user), { status: 200 });
};
