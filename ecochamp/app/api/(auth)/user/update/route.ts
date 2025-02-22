import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

const updateUserSchema = z.object({
  id: z.number().int().positive("Invalid user ID"),
  username: z.string().min(1, "Username is required").max(100).optional(),
  email: z.string().email("Invalid email").optional(),
  password: z
    .string()
    .min(8, "Password must have at least 8 characters")
    .optional(),
  points: z.number().int().min(0, "Points cannot be negative").optional(),
});

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, email, username, password, points } =
      updateUserSchema.parse(body);

    const existingUser = await db.user.findUnique({ where: { id } });
    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    let hashedPassword;
    if (password) {
      hashedPassword = await hash(password, 10);
    }

    const updatedUser = await db.user.update({
      where: { id },
      data: {
        username,
        email,
        password: hashedPassword || existingUser.password,
        points,
      },
    });

    const { password: updatedPassword, ...rest } = updatedUser;

    return NextResponse.json(
      { user: rest, message: "User updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
