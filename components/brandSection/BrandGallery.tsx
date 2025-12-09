"use client";
import { useState } from "react";
import Image from "next/image";

type Props = { brand: any };

export default function BrandGallery({ brand }: Props) {
  const [active, setActive] = useState<string | null>(null);

  if (!brand.gallery?.length) return null;

  return (
    <section className="w-full px-6 md:px-32 pb-20">
      <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
        Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {brand.gallery.map((img: string, i: number) => (
          <div
            key={i}
            className="relative w-full h-48 md:h-86 rounded-sm overflow-hidden cursor-pointer"
            onClick={() => setActive(img)}
          >
            <Image src={img} alt={`${brand.name} image`} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <div className="relative w-[90%] h-[80vh] max-w-4xl">
            <Image src={active} alt="Full image" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
