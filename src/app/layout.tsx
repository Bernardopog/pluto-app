import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/Navbar";
import Modal from "./layout/Modal";
import ActionMessage from "./components/ActionMessage";
import ThemeToggler from "./layout/ThemeToggler/ThemeToggler";
import { cookies } from "next/headers";

const dmSans = DM_Sans({
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pluto",
  description: "A personal finance app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get("theme")?.value;

  return (
    <html lang="pt-BR" className={`${theme ?? ""}`}>
      <body className={`${dmSans.className} antialiased`}>
        <ThemeToggler themeIsDark={theme === "dark"} />
        <ActionMessage />
        <Modal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
