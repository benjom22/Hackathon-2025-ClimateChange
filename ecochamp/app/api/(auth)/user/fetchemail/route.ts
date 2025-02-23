import prisma from "@/lib/prisma";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, username: true, email: true },
  });

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(user), { status: 200 });
};
