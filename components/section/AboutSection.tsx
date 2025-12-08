// // "use client";

// // import { motion } from "framer-motion";

// // export default function AboutSection() {
// //   return (
// //     <section className="max-w-6xl mx-auto px-6 py-28">
// //       <motion.h2
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.6 }}
// //         className="text-3xl md:text-4xl font-semibold"
// //       >
// //         Crafting Spaces With Purpose
// //       </motion.h2>

// //       <motion.p
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.8, delay: 0.1 }}
// //         className="mt-4 max-w-3xl text-lg opacity-80"
// //       >
// //         Saya Group is a hospitality collective built on design, culture, and thoughtful guest experience. 
// //         Every brand carries its own identity while sharing a foundation of excellence.
// //       </motion.p>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";

// export default function AboutSection() {
//   return (
//     <section className="relative w-full bg-white py-32 px-8 md:px-20 lg:px-32">
//       <div className="max-w-4xl">
//         {/* SECTION LABEL */}
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-sm tracking-[0.2em] uppercase text-neutral-600"
//         >
//           About Saya Group
//         </motion.span>

//         {/* TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mt-4 text-4xl md:text-5xl font-light leading-tight text-neutral-900"
//         >
//           Crafting Spaces That Inspire
//         </motion.h2>

//         {/* DESCRIPTION */}
//         <motion.p
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
//           className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed max-w-3xl"
//         >
//           Saya Group creates hospitality concepts shaped by design, comfort and
//           intention. Our brands span fine dining, private clubs, luxury villas
//           and artisan coffee. Each destination carries its own personality while
//           sharing the same dedication to craft and meaningful experiences.
//         </motion.p>

//         {/* SMALL DIVIDER LINE FOR LUXURY FEEL */}
//         <motion.div
//           initial={{ width: 0, opacity: 0 }}
//           whileInView={{ width: "80px", opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
//           className="mt-10 h-[1px] bg-neutral-300"
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-neutral-50/50 py-36 px-8 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: IMAGE (ASyMMETRIC) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl shadow-sm">
            <motion.img
              src="/onepercent.jpg"
              alt="Saya Group Hospitality"
              className="w-full h-[480px] object-cover"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-24 lg:mt-0"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-neutral-600 block">
            About Saya Group
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight text-neutral-900">
            Crafting Spaces  
            <br />
            That Inspire Meaning
          </h2>

          <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed max-w-xl">
            Saya Group creates destinations shaped by design, culture and
            intentional hospitality. Our portfolio spans fine dining,
            private clubs, luxury villas and artisan coffee, each crafted
            with its own character and a shared commitment to quality.
          </p>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "120px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="mt-12 h-[1px] bg-neutral-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
