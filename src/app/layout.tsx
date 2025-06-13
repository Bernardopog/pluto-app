import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/Navbar";
import Modal from "./layout/Modal";

const dmSans = DM_Sans({
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pluto",
  description: "A personal finance app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.className} antialiased`}>
        <Modal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
