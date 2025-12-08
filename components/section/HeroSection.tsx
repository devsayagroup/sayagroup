// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function HeroSection() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

//   return (
//     <section
//       ref={ref}
//       className="relative h-screen w-full overflow-hidden bg-white"
//     >
//       {/* <motion.div
//         style={{ y }}
//         initial={{ scale: 1.2, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.8, ease: "easeOut" }}
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/home/hero.jpg')" }}
//       />

//       <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/10"></div> */}

//       {/* CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, x: -40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//         className="relative h-full flex flex-col justify-center px-8 md:px-20 lg:px-32 max-w-3xl"
//       >
//         <h1 className="text-[2.8rem] md:text-[3rem] font-light tracking-wide leading-tight text-neutral-900">
//           Crafting Modern Hospitality
//         </h1>

//         <p className="mt-6 text-lg md:text-lg text-neutral-700 leading-relaxed max-w-xl">
//           Saya Group develops fine dining destinations, private clubs, luxury
//           villas, and artisan coffee experiences built with design, intention
//           and modern craftsmanship.
//         </p>

//         <motion.a
//           href="#brands"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
//           className="mt-10 inline-block text-sm tracking-wide uppercase text-neutral-900 border-b border-neutral-900/40 pb-1 hover:border-neutral-900 transition-all"
//         >
//           Discover Our Brands
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* <motion.div
        style={{ y }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-transparent" /> */}

      {/* ASYMMETRIC FLOATING SHAPES */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: -40 }}
        animate={{ opacity: 0.5, x: 0, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute top-20 right-10 w-40 h-40 bg-neutral-200/30 rounded-3xl backdrop-blur-xl rotate-12"
      />

      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        animate={{ opacity: 0.4, x: 0, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute bottom-20 left-10 w-56 h-56 bg-neutral-100/40 rounded-full backdrop-blur-xl -rotate-6"
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-full flex flex-col justify-center px-8 md:px-20 lg:px-32 max-w-3xl"
      >
        <h1 className="text-[2.8rem] md:text-[3.4rem] font-light tracking-wide leading-tight text-neutral-900">
          Crafting Modern Hospitality
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed max-w-xl">
          Saya Group develops fine dining destinations, private clubs, luxury
          villas, and artisan experiences built with design, intention and
          modern craftsmanship.
        </p>

        <motion.a
          href="#brands"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-10 inline-block text-sm tracking-wider uppercase text-neutral-900 border-b border-neutral-900/40 pb-1 hover:border-neutral-900 transition-all"
        >
          Discover Our Brands
        </motion.a>
      </motion.div>
    </section>
  );
}