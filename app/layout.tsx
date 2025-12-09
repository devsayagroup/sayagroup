import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";

const styleFont = Quicksand({
  variable: "--font-style",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAYAGROUP",
  description: "A GROUP OF SAYA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styleFont.variable} font-style antialiased`}>
        <Header/>
        <SmoothScroll>{children}</SmoothScroll>
        <Footer/>
      </body>
    </html>
  );
}
