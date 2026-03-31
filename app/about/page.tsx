import Headline from "@/components/ui/Headline";
import type { Metadata } from "next";
import AboutClient from "@/components/pages/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Saya Group, a hospitality and lifestyle group crafting meaningful spaces across dining, culture, and design.",
  alternates: {
    canonical: "https://sayagroup.id/about", 
  },
  robots: {
    index: true, 
    follow: true, 
  },
  openGraph: {
    title: "About Saya Group",
    description:
      "Discover the vision, values, and portfolio behind Saya Group.",
    url: "https://sayagroup.id/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Saya Group",
  "url": "https://sayagroup.id",
  "logo": "https://sayagroup.id/sayagroupnew.png", 
  "sameAs": [
    "https://www.instagram.com/sayagroup.id",
    "https://www.linkedin.com/company/sayagroup"
  ],
  "description": "A hospitality-driven lifestyle group crafting meaningful spaces across dining, culture, and design."
};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Headline
          title="About Us"
          breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
          ]}
      />
      <AboutClient/>
    </>
  );
}
