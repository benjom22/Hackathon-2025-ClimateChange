import type { Metadata } from "next";
import "./globals.css";

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
        className={`antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
