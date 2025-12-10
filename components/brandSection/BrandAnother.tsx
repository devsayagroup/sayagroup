"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  allBrands: any[];
  currentSlug: string; 
};

export default function BrandAnother({ allBrands, currentSlug }: Props) {
  const otherBrands = allBrands.filter((b) => b.slug !== currentSlug);

  if (otherBrands.length === 0) return null;

  return (
    <section className="bg-white py-20 px-6 md:px-32">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
            Explore Our Other Brands
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherBrands.map((brand) => (
            <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="group cursor-pointer"
            >
                <div className="relative w-full h-64 overflow-hidden rounded-md bg-neutral-100">
                <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-50 transition" />
                </div>
                <h3 className="mt-5 text-xl font-light tracking-wide group-hover:text-neutral-900 transition">
                {brand.name}
                </h3>
                <span className="mt-2 inline-block text-sm tracking-wide text-neutral-700 group-hover:text-black transition">
                Discover →
                </span>
            </Link>
            ))}
        </div>
    </section>
  );
}
