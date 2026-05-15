import { notFound } from "next/navigation";
import { brands } from "@/lib/data-brands";
import { events } from "@/lib/data-events";

import BrandHero from "@/components/brandSection/BrandHero";
import BrandAbout from "@/components/brandSection/BrandAbout";
import BrandEvents from "@/components/brandSection/BrandEvents";
import BrandGallery from "@/components/brandSection/BrandGallery";
import BrandContact from "@/components/brandSection/BrandContact";
import BrandAnother from "@/components/brandSection/BrandAnother";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) return {};

  return {
    title: `${brand.name}`,
    description: brand.description ?? `${brand.name} is part of Saya Group.`,
    alternates: {
      canonical: `https://sayagroup.id/brands/${brand.slug}`, // Fixed .id
    },
    openGraph: {
      title: `${brand.name} | Saya Group`,
      description: brand.description,
      images: [{ url: brand.image }],
      type: "website",
    },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // 1. Find the Brand
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return notFound();

  // 2. Filter the Events Database using the Brand's ID
  // Make sure event.brandId matches brand.id exactly
  const brandEvents = events.filter((event) => event.brandId === brand.id);

  const schemaType = 
    brand.slug === 'goasaya' ? "Restaurant" : 
    brand.slug === 'nemusaya' ? "Hotel" : "LocalBusiness";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Brands", "item": "https://sayagroup.id/brands" },
          { "@type": "ListItem", "position": 2, "name": brand.name, "item": `https://sayagroup.id/brands/${brand.slug}` }
        ]
      },
      {
        "@type": schemaType,
        "name": brand.name,
        "description": brand.description,
        "image": brand.image,
        "url": `https://sayagroup.id/brands/${brand.slug}`,
        "parentOrganization": {
          "@type": "Organization",
          "name": "Saya Group",
          "url": "https://sayagroup.id",
          "logo": "https://sayagroup.id/sayagroup-black.png"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": brand.slug === 'nemusaya' ? "Bali" : "Jakarta",
          "addressCountry": "ID"
        },
        ...(brand.slug === 'goasaya' && {
          "servesCuisine": "Asian Progressive",
          "areaServed": "PIK 2, Tangerang",
        })
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="w-full">
        <BrandHero brand={brand} />
        <BrandAbout brand={brand} />
        <BrandEvents events={brandEvents} brandName={brand.name} />        
        <BrandGallery brand={brand} />
        <BrandContact brand={brand} />
        <BrandAnother allBrands={brands} currentSlug={slug} />
      </div>
    </>
  );
}

