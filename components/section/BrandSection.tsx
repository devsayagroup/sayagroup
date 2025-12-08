// "use client";

// import { brands } from "@/lib/data-brands";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function BrandSection() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-28" id="brands">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-3xl font-semibold mb-10"
//       >
//         Our Brands
//       </motion.h2>

//       <div className="grid md:grid-cols-2 gap-12">
//         {brands.map((brand, index) => (
//           <motion.div
//             key={brand.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.15 }}
//           >
//             <Link href={`/brands/${brand.slug}`} className="group block">
//               <div className="overflow-hidden rounded-2xl">
//                 <img
//                   src={brand.image}
//                   alt={brand.name}
//                   className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
//                 />
//               </div>

//               <h3 className="mt-4 text-xl font-semibold">{brand.name}</h3>
//               <p className="opacity-70 text-sm">{brand.shortDescription}</p>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import Marquee from "react-fast-marquee";
// import { brands } from "@/lib/data-brands";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function BrandSection() {
//   return (
//     <section id="brands" className="py-28 bg-white overflow-hidden">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-3xl md:text-4xl font-semibold max-w-7xl mx-auto px-6 mb-14"
//       >
//         Our Brands
//       </motion.h2>

//       <div className="space-y-16">

//         <Marquee
//           speed={25}
//         >
//           <div className="flex gap-12 px-6">
//             {brands.map((brand) => (
//               <BentoBrandCard key={`row1-${brand.id}`} brand={brand} />
//             ))}
//           </div>
//         </Marquee>
//       </div>
//     </section>
//   );
// }


// function BentoBrandCard({ brand }: any) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1 }}
//       transition={{ type: "spring", stiffness: 200, damping: 18 }}
//       className="relative w-[420px] h-[520px] rounded-sm overflow-hidden shadow-sm cursor-pointer group"
//     >
//       <Link href={`/brands/${brand.slug}`}>

//         <motion.img
//           src={brand.image}
//           alt={brand.name}
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileHover={{ opacity: 0.25 }}
//           transition={{ duration: 0.4 }}
//           className="absolute inset-0 bg-black"
//         />

//         <div className="absolute bottom-6 left-6">
//           <h3 className="text-white text-2xl font-semibold tracking-tight drop-shadow-lg">
//             {brand.name}
//           </h3>
//           <p className="text-white/80 text-sm max-w-xs">
//             {brand.shortDescription}
//           </p>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

"use client";

import { brands } from "@/lib/data-brands";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BrandSection() {
  return (
    <section id="brands" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
            <span className="text-sm tracking-[0.2em] uppercase text-neutral-600 block">
                Saya Group Brands
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
      
        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {brands.map((brand) => (
            <BrandCard brand={brand} />
          ))}
        </div>
    </section>
  );
}

/* ------------------------------------------
    BENTO BRAND CARD (Luxury Hover)
------------------------------------------- */

function BrandCard({ brand }: any) {
  return (
    <Link href={`/brands/${brand.slug}`} className="group block w-full">
      <div className="relative overflow-hidden h-[420px] shadow-sm">

        {/* LARGE IMAGE */}
        <motion.img
          src={brand.image}
          alt={brand.name}
          className="w-full h-full object-cover"
        />


        {/* TEXT OVERLAY */}
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
