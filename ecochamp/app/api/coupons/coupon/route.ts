import prisma from "@/lib/prisma";

export const GET = async (req: Request) => {
  try {
    const coupons = await prisma.coupon.findMany({
      select: {
        id: true,
        code: true,
        points: true,
        used: true,
        userId: true,
      },
    });

    return new Response(JSON.stringify(coupons), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch coupons" }), {
      status: 500,
    });
  }
};
