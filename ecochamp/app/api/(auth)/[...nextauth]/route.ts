import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";
import prisma from "../../../../lib/prisma"; // Adjust the path accordingly

export const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email }
        });

        if (user && bcrypt.compareSync(credentials?.password || "", user.password)) {
          return { id: user.id, email: user.email, username: user.username };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/auth/signin", // Custom login page
    error: "/auth/error",   // Custom error page
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async session({ session, user }) {
      // Attach user info to session
      if (user) {
        session.user.id = user.id;
        session.user.email = user.email;
        session.user.username = user.username;
      }
      return session;
    }
  }
});

export { handler as GET, handler as POST }; // Export both GET and POST handlers
