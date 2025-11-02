import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/styles/globals.css";

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
        {children}
      </body>
    </html>
  );
}
