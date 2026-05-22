import type { Metadata } from "next";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "J-Pilot",
  description: "Your Japan Travel Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}