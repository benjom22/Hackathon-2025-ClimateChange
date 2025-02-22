import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import * as z from "zod";
import jwt from "jsonwebtoken";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);

    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    const { password: _, ...userData } = user;

    return NextResponse.json(
      {
        message: "Login successful",
        user: userData,
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
