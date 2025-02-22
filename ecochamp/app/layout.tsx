import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoChamp: Empowering Sustainable Change",
  description: "Join us in our mission to protect and preserve the environment. Together, we can create a cleaner, greener future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-earthGreen-100`}
      >
        <Navbar/>
        <div className="px-5 pb-7 pt-[calc(64px+1.25rem)] md:p-10 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
