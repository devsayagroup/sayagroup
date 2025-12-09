"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-neutral-50/75 py-22 px-8 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 items-center">

        {/* LEFT: IMAGE (ASyMMETRIC) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="bg-white overflow-hidden flex justify-center py-20 px-8 items-center rounded-md shadow-sm">
            <motion.img
              src="/sayagroup.png"
              alt="Saya Group Hospitality"
              className="w-[400px] h-full object-cover"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
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

          {/* <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "120px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="mt-12 h-[1px] bg-neutral-300"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}
