import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return new Response(JSON.stringify({ error: "Invalid email or password" }), {
      status: 400,
    });
  }

  // Compare the password with the stored hash
  const isValid = bcrypt.compareSync(password, user.password);
  if (!isValid) {
    return new Response(JSON.stringify({ error: "Invalid email or password" }), {
      status: 400,
    });
  }

  // Create a JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email, username: user.username },
    process.env.JWT_SECRET!, // Make sure to set this in your .env
    { expiresIn: "1d" }
  );

  // Respond with the token
  return new Response(JSON.stringify({ token }), { status: 200 });
};
