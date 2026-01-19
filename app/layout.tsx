import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import GlobalLoader from "@/components/ui/GlobalLoader";
import ScrollToTop from "@/components/ui/ScrollToTop";


export const metadata: Metadata = {
  metadataBase: new URL("https://sayagroup.id"),

  title: {
    default: "Saya Group | Hospitality & Lifestyle Group",
    template: "%s | Saya Group",
  },

  description:
    "Saya Group is a hospitality-driven lifestyle company based in Jakarta, operating premium brands across dining, coffee, nightlife, craftsmanship, and luxury stays.",

  applicationName: "Saya Group",

  keywords: [
    "Saya Group",
    "Hospitality Group Jakarta",
    "Lifestyle Group Indonesia",
    "Restaurant Group Jakarta",
    "Luxury Hospitality Indonesia",
    "GoaSaya",
    "One Percent Lounge",
    "Aroma Biji",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sayagroup.id",
    siteName: "Saya Group",
    title: "Saya Group | Hospitality & Lifestyle Group",
    description:
      "A hospitality-driven lifestyle group based in Jakarta, operating premium dining, lifestyle, and craftsmanship brands.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saya Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saya Group | Hospitality & Lifestyle Group",
    description:
      "Hospitality-driven lifestyle group based in Jakarta.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const styleFont = Quicksand({
  variable: "--font-style",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Saya Group",
              url: "https://sayagroup.id",
              logo: "https://sayagroup.id/sayagroup-black.png",
              sameAs: [
                "https://instagram.com/sayagroup",
                "https://linkedin.com/company/sayagroup",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: ["Brands", "Careers", "Media", "Contact"],
              url: [
                "https://sayagroup.id/brands",
                "https://sayagroup.id/careers",
                "https://sayagroup.id/media",
                "https://sayagroup.id/contact",
              ],
            }),
          }}
        />
      </head>
      <body className={`${styleFont.variable} font-style antialiased`}>
        <ScrollToTop/>
        <GlobalLoader/>
        <Header/>
        <SmoothScroll>{children}</SmoothScroll>
        <Footer/>
      </body>
    </html>
  );
}
