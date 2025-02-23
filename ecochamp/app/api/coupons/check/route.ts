import prisma from "@/lib/prisma";

export const PUT = async (req: Request) => {
  try {
    const { email, couponCode } = await req.json();

    if (!email || !couponCode) {
      return new Response(
        JSON.stringify({ error: "Email and coupon code are required" }),
        { status: 400 }
      );
    }

    // Find the coupon
    const coupon = await prisma.coupon.findUnique({
      where: { code: couponCode },
    });

    if (!coupon) {
      return new Response(JSON.stringify({ error: "Invalid coupon code" }), {
        status: 404,
      });
    }

    if (coupon.used) {
      return new Response(JSON.stringify({ error: "Coupon already used" }), {
        status: 400,
      });
    }

    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    // Update user's points
    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        points: user.points + coupon.points,
      },
    });

    // Mark the coupon as used and link it to the user
    await prisma.coupon.update({
      where: { code: couponCode },
      data: {
        used: true,
        userId: user.id, // ✅ Assign userId when coupon is redeemed
      },
    });

    return new Response(
      JSON.stringify({
        message: "Coupon redeemed successfully",
        newPoints: updatedUser.points,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error redeeming coupon:", error);
    return new Response(JSON.stringify({ error: "Failed to redeem coupon" }), {
      status: 500,
    });
  }
};
