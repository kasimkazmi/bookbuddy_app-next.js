import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: " Book Buddy  ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />

        <main className="relative overflow-hidden"></main>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>

        <Footer />
      </body>
    </html>
  );
}
