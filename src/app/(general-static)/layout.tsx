import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import PrelineScript from "@/components/preline/PrelineScript";
import Footer from "@/components/navigations/Footer";
import NavbarPill from "@/components/navigations/NavbarPill";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regenera",
  description: "Generated by create next app",
};

export default function GeneralStaticLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full min-h-screen bg-light-background-100 flex flex-col items-center`}
      >
        <NavbarPill />
        {children}
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
