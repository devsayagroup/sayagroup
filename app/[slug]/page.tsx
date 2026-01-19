import { notFound } from "next/navigation";
import { brands } from "@/lib/data-brands";

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

  if (brand) {
    return {
      title: `${brand.name}`,
      description: brand.description ?? `${brand.name} is part of Saya Group.`,
      alternates: {
        canonical: `https://sayagroup.com/brands/${brand.slug}`,
      },
      openGraph: {
        title: `${brand.name} | Saya Group`,
        description: brand.description,
        images: [brand.image],
        type: "website",
      },
    };
  }
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;

  const brand = brands.find((b) => b.slug === slug);

  if (!brand) return notFound();

  return (
    <div className="w-full">
      <BrandHero brand={brand} />
      <BrandAbout brand={brand} />
      <BrandEvents brand={brand} />
      <BrandGallery brand={brand} />
      <BrandContact brand={brand} />
      <BrandAnother allBrands={brands} currentSlug={slug} />
    </div>
  );
}
