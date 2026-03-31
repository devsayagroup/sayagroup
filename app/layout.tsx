import type { Metadata } from "next";
import { Quicksand, Spline_Sans } from "next/font/google";
import "@/styles/globals.css";
import ClientLayout from "./layout-client";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://sayagroup.id"),
  title: {
    default: "Saya Group | Hospitality & Lifestyle Group",
    template: "%s | Saya Group",
  },
  description:"Saya Group is a hospitality-driven lifestyle company based in Jakarta, operating premium brands across dining, coffee, nightlife, craftsmanship, and luxury stays.",
  applicationName: "Saya Group",
  keywords: [
    "Saya Group", "Hospitality Group Jakarta", "Lifestyle Group Indonesia",
    "Restaurant Group Jakarta", "Luxury Hospitality Indonesia",
    "GoaSaya", "One Percent Lounge", "Aroma Biji",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sayagroup.id",
    siteName: "Saya Group",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Saya Group" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: {index: true, follow: true} },
};

const styleFont = Quicksand({
  variable: "--font-style",
  subsets: ["latin"],
});

const textFont = Spline_Sans({
  variable: "--font-text",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

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
        {/* Navigation Schema */}
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
      <body className={`${styleFont.variable} ${textFont.variable} font-text antialiased`}>
        <GoogleAnalytics gaId={GA_ID} />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}