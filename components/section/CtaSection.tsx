"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 px-6 text-center bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold"
      >
        Partner With Saya Group
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 opacity-80 max-w-xl mx-auto"
      >
        For collaborations, press, or partnership opportunities, our team is here to connect with you.
      </motion.p>

      <Link
        href="/contact"
        className="inline-block mt-8 px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
