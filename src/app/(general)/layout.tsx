import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import PrelineScript from "@/components/preline/PrelineScript";
import Footer from "@/components/navigations/Footer";
import Providers from "@/components/Providers";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regenera",
  description: "Generated by create next app",
};

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full min-h-dvh bg-light-background-100 flex flex-col items-center`}
      >
        <Providers>
          <NextTopLoader color="#dd0025" height={2} />
          {children}
        </Providers>
      </body>
      <PrelineScript />
    </html>
  );
}
