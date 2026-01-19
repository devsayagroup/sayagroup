import ScrollToTop from "@/components/ui/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Explore the portfolio of Saya Group brands across hospitality, dining, lifestyle, and luxury experiences.",
  openGraph: {
    title: "Saya Group Brands",
    description:
      "GoaSaya, Aroma Biji, One Percent Lounge, NemuSaya Villa, and more.",
    url: "https://sayagroup.id/brands",
  },
};


export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}
