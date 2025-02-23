import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcryptjs";
import { env } from "process";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials");
          return null;
        }

        const existingUser = await db.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!existingUser) {
          console.log("User not found");
          return null;
        }

        console.log("Provided password:", credentials.password); // Log provided password
        console.log("Stored (hashed) password:", existingUser.password); // Log stored password

        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          console.log("Password mismatch");
          return null;
        }

        console.log("Passwords match");

        return {
          id: existingUser.id + "",
          username: existingUser.username,
          email: existingUser.email,
        };
      },
    }),
  ],
};
