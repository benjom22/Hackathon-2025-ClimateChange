import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";  // For hashing passwords

export async function POST(req: Request) {
  const { email, username, password } = await req.json();

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { email: email },
        { username: username }
      ]
    }
  });

  if (existingUser) {
    return NextResponse.json(
      { error: "User with this email or username already exists." },
      { status: 400 }
    );
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword
      }
    });

    return NextResponse.json({ message: "User registered successfully." });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while creatng the user." },
      { status: 500 }
    );
  }
}
