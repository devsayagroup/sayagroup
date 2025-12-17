// import { Brand, brands } from "@/lib/data-brands";
// import BrandClient from "@/components/pages/BrandPageDetail";
// import { notFound } from "next/navigation";

// type BrandPageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export default async function BrandPage({ params }: BrandPageProps) {
//   const { slug } = await params;

//   const brand = brands.find((b) => b.slug === slug);

//   if (!brand) return notFound();

//   return <BrandClient brand={brand} />;
// }

// export function generateStaticParams() {
//   return brands.map((brand) => ({
//     slug: brand.slug,
//   }));
// }


import { notFound } from "next/navigation";
import { brands } from "@/lib/data-brands"; // your dummy DB
import BrandHero from "@/components/brandSection/BrandHero";
import BrandAbout from "@/components/brandSection/BrandAbout";
import BrandEvents from "@/components/brandSection/BrandEvents";
import BrandGallery from "@/components/brandSection/BrandGallery";
import BrandContact from "@/components/brandSection/BrandContact";
import BrandAnother from "@/components/brandSection/BrandAnother";

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function BrandPage({ params }: Params) {
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
      <BrandAnother allBrands={brands} currentSlug={slug}/>
    </div>
  );
}
