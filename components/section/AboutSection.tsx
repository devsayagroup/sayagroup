// "use client";

// import { motion } from "framer-motion";

// export default function AboutSection() {
//   return (
//     <section className="relative w-full bg-neutral-50/75 py-22 px-8 md:px-20 lg:px-32">
//       <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="relative"
//         >
//           <div className="bg-white overflow-hidden flex justify-center py-20 px-8 items-center rounded-md shadow-sm">
//             <motion.img
//               src="/sayagroup-black.png"
//               alt="Saya Group Hospitality"
//               className="w-[400px] h-full object-cover"
//               initial={{ scale: 1.05 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, ease: "easeOut" }}
//             />
//           </div>
//         </motion.div>
        

//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="mt-24 lg:mt-0"
//         >
//           <span className="text-sm tracking-[0.2em] uppercase text-neutral-600 block">
//             About Saya Group
//           </span>

//           <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight text-neutral-900">
//             Crafting Spaces  
//             <br />
//             That Inspire Meaning
//           </h2>

//           <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed max-w-xl">
//             Saya Group creates destinations shaped by design, culture and
//             intentional hospitality. Our portfolio spans fine dining,
//             private clubs, luxury villas and artisan coffee, each crafted
//             with its own character and a shared commitment to quality.
//           </p>

//           {/* <motion.div
//             initial={{ width: 0, opacity: 0 }}
//             whileInView={{ width: "120px", opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
//             className="mt-12 h-[1px] bg-neutral-300"
//           /> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50]">
              <div className="relative aspect-[5/5]">
                <Image
                  src="/sayagroup-black.png"
                  alt="Saya Group"
                  fill
                  className="object-contain p-10 md:p-14"
                  priority={false}
                />
              </div>

              {/* <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur px-5 py-4">
                  <p className="text-xs tracking-[0.22em] uppercase text-neutral-500">
                    Thoughtful Hospitality
                  </p>
                  <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                    Brands with character — built for long-term value.
                  </p>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* RIGHT COPY */}
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-neutral-300" />
              <span className="text-xs tracking-[0.28em] uppercase text-neutral-500">
                About Saya Group
              </span>
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-light leading-[1.08] tracking-[-0.02em] text-neutral-900">
              Crafting spaces
              <br />
              that inspire meaning.
            </h2>

            <p className="mt-7 text-[17px] md:text-lg text-neutral-700 leading-relaxed max-w-2xl">
              Saya Group creates destinations shaped by design, culture, and intentional
              hospitality. Our portfolio spans destination dining, refined social spaces,
              boutique retreats, artisan coffee, and natural stone craftsmanship — each with
              its own identity and a shared commitment to quality.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm tracking-wide text-neutral-900 hover:border-neutral-900/60 transition"
              >
                Learn More
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm tracking-wide text-white hover:opacity-90 transition"
              >
                Partner With Us
              </Link>
            </div>

            {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { k: "Hospitality", v: "Destination-led experiences" },
                { k: "Lifestyle", v: "Refined social spaces" },
                { k: "Craft", v: "Stone & coffee heritage" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4"
                >
                  <p className="text-sm font-medium text-neutral-900">{x.k}</p>
                  <p className="mt-1 text-sm text-neutral-600">{x.v}</p>
                </div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

