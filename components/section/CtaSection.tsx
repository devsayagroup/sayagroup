"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/pattern-sayagroup.png" 
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center opacity-100"
        />

        {/* DARK GRADIENT FOR READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/95 to-black/95" />
      </div>

      {/* ===== OPTIONAL SOFT GLOW (luxury touch) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-52 right-[-160px] h-[620px] w-[620px] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12 text-white">
        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md px-7 py-12 md:px-12 md:py-14 text-center">

          <motion.h2
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-style font-light tracking-[-0.01em]"
          >
            Partner with Saya Group
          </motion.h2>

          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto"
          >
            For collaborations, press, or partnership opportunities, our team is ready to connect.
            Let’s build something meaningful together.
          </motion.p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-neutral-950 px-7 py-3 text-sm tracking-wide hover:opacity-90 transition"
            >
              Contact Us →
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-3 text-sm tracking-wide text-white hover:border-white/50 transition"
            >
              Learn About Saya Group
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
