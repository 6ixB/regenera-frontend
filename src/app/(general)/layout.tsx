import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import PrelineScript from "@/components/preline/PrelineScript";
import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/navbar/Navbar";
import ReactQueryProvider from "@/components/react-query/ReactQueryProvider";
import { getSession } from "@/lib/session";
import { SessionEntity } from "@/lib/model/session/session.entity";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regenera",
  description: "Generated by create next app",
};

export default async function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await getSession()) as SessionEntity | null;

  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full min-h-screen bg-light-background-100 flex flex-col items-center`}
      >
        <ReactQueryProvider>
          <Navbar pill={false} session={session} />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
