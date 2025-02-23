import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs"; // For hashing passwords

export async function POST(req: Request) {
  const { email, username, password } = await req.json();

  // Check if user already exists with email or username
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email: email }, { username: username }],
    },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: "User with this email or username already exists." },
      { status: 400 }
    );
  }

  // Hash password before storing in database
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log("Hashed password during registration:", hashedPassword); // Log hashed password

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Respond with success message and user data
    return NextResponse.json({
      message: "User registered successfully.",
      data: newUser,
    });
  } catch (error) {
    // Handle errors that occur during user creation
    return NextResponse.json(
      { error: "An error occurred while creating the user." },
      { status: 500 }
    );
  }
}
