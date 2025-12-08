"use client";

import { motion } from "framer-motion";

export default function MediaSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-4"
      >
        From the Media
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="opacity-70 mb-10"
      >
        Latest insights, features, and press coverage.
      </motion.p>

      {/* Placeholder until you create media database */}
      <div className="grid md:grid-cols-3 gap-10 opacity-60 text-sm">
        <div className="h-40 bg-black/5 rounded-xl"></div>
        <div className="h-40 bg-black/5 rounded-xl"></div>
        <div className="h-40 bg-black/5 rounded-xl"></div>
      </div>

      <a
        href="/media"
        className="inline-block mt-8 underline hover:opacity-60 transition"
      >
        View All Media
      </a>
    </section>
  );
}
