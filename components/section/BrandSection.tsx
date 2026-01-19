// "use client";

// import { brands } from "@/lib/data-brands";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function BrandSection() {
//   return (
//     <section id="brands" className="py-32 bg-white">
//       <div className="px-6 md:px-32">

//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="mb-16"
//         >
//             <span className="text-sm tracking-[0.2em] uppercase text-neutral-600 block">
//                 Brands
//             </span>

//             <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight text-neutral-900">
//                 Explore the 
//                 <br />
//                 Saya Group Brands
//             </h2>

//             <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed max-w-xl">
//                 A curated collection of hospitality concepts that define dining, luxury 
//                 stays, lifestyle spaces, and artisan coffee culture across Indonesia.
//             </p>
//         </motion.div>

//       </div>
      
//         <div className="px-6 md:px-32 grid grid-cols-1 gap-2 md:grid-cols-2">
//           {brands.map((brand) => (
//             <BrandCard brand={brand} />
//           ))}
//         </div>
//     </section>
//   );
// }


// function BrandCard({ brand, index }: any) {
//   return (
//     <Link href={`/${brand.slug}`} key={index} className="group block w-full">
//       <div className="relative overflow-hidden h-[420px] rounded-sm shadow-sm">

//         <motion.img
//           src={brand.image}
//           alt={brand.name}
//           className="w-full h-full object-cover"
//         />

//         <div className="absolute bottom-8 left-8">
//           <h3 className="text-white text-2xl font-semibold tracking-tight drop-shadow-xl">
//             {brand.name}
//           </h3>
//           <p className="text-white/90 text-sm max-w-sm drop-shadow leading-relaxed">
//             {brand.shortDescription}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }

"use client";

import { brands } from "@/lib/data-brands";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function BrandSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="brands" className="py-20 md:py-28 bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-neutral-300" />
            <span className="text-xs tracking-[0.28em] uppercase text-neutral-500">
              Brands
            </span>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-light leading-[1.08] tracking-[-0.02em] text-neutral-900">
            Explore the
            <br />
            Saya Group brands.
          </h2>

          <p className="mt-6 text-[17px] md:text-lg text-neutral-700 leading-relaxed max-w-2xl">
            A curated collection of hospitality concepts defining dining, luxury stays,
            lifestyle spaces, artisan coffee culture, and craftsmanship across Indonesia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {brands.map((brand, idx) => (
            <BrandCard key={brand.slug ?? idx} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand }: any) {
  return (
    <Link href={`/${brand.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-black shadow-[0_18px_60px_-40px_rgba(0,0,0,0.55)]">
        <div className="relative h-[420px]">
          <Image
            src={brand.image}
            alt={brand.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            priority={false}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-medium tracking-[-0.01em]">
                {brand.name}
              </h3>
              <p className="mt-2 text-white/75 text-sm max-w-md leading-relaxed">
                {brand.shortDescription}
              </p>
            </div>

            <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur text-white transition group-hover:border-white/45">
              →
            </span>
          </div>

          <div className="mt-6 h-px w-full bg-white/15" />
        </div>
      </div>
    </Link>
  );
}
