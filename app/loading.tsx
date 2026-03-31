"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1], // Custom Cubic Bezier for "Luxury" feel
          }}
          className="mb-8"
        >
          <Image
            src="/sayagroup-black.png"
            alt="Saya Group Logo"
            width={140}
            height={80}
            priority
            className="h-auto w-auto grayscale"
          />
        </motion.div>

        {/* Minimalist Progress Line */}
        <div className="relative h-[1px] w-40 overflow-hidden bg-neutral-100">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-neutral-800"
          />
        </div>
        
        {/* Subtle Text Reveal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-[10px] tracking-[0.3em] uppercase text-neutral-900 font-light"
        >
          Hospitality & Lifestyle
        </motion.p>
      </div>
    </motion.div>
  );
}