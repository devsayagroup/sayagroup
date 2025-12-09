"use client";

import { brands } from "@/lib/data-brands";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BrandSection() {
  return (
    <section id="brands" className="py-32 bg-white">
      <div className="px-6 md:px-32">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
            <span className="text-sm tracking-[0.2em] uppercase text-neutral-600 block">
                Brands
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight text-neutral-900">
                Explore the 
                <br />
                Saya Group Brands
            </h2>

            <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed max-w-xl">
                A curated collection of hospitality concepts that define dining, luxury 
                stays, lifestyle spaces, and artisan coffee culture across Indonesia.
            </p>
        </motion.div>

      </div>
      
        <div className="px-6 md:px-32 grid grid-cols-1 gap-2 md:grid-cols-2">
          {brands.map((brand) => (
            <BrandCard brand={brand} />
          ))}
        </div>
    </section>
  );
}


function BrandCard({ brand, index }: any) {
  return (
    <Link href={`/brands/${brand.slug}`} key={index} className="group block w-full">
      <div className="relative overflow-hidden h-[420px] rounded-sm shadow-sm">

        <motion.img
          src={brand.image}
          alt={brand.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-8 left-8">
          <h3 className="text-white text-2xl font-semibold tracking-tight drop-shadow-xl">
            {brand.name}
          </h3>
          <p className="text-white/90 text-sm max-w-sm drop-shadow leading-relaxed">
            {brand.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
