import prisma from "@/lib/prisma";

export const GET = async (req: Request) => {
  try {
    const rewards = await prisma.rewards.findMany({
      select: {
        name: true,
        description: true,
        qrcode: true,
        value: true,
        partner: {
          select: {
            logo: true,
          },
        },
      },
    });

    const formattedRewards = rewards.map((reward) => ({
      name: reward.name,
      description: reward.description,
      qrcode: reward.qrcode,
      value: reward.value,
      logo: reward.partner.logo,
    }));

    return new Response(JSON.stringify(formattedRewards), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch rewards" }), {
      status: 500,
    });
  }
};
