import type { Metadata } from "next";
import "./globals.css";
import AuthContext from "./(user)/AutoContext";
import ProfileMenu from "./(user)/ProfileMenu";

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
          <AuthContext>
            {children}
          </AuthContext>
      </body>
    </html>
  );
}
