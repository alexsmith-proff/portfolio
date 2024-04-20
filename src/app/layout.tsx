import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/navbar";

const roboto = Roboto({ weight: '400', subsets: ["latin"], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: "Мое портфолио",
  description: "Мое портфолио",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
