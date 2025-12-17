"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-999 bg-white backdrop-blur-xl border-b border-black/10">
        <nav className="flex items-center justify-between py-4 px-6 md:px-32">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold tracking-wide">
            <Image
              src="/sayagroup-black.png"
              width={100}
              height={100}
              alt="Saya Group"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 justify-center items-center text-sm font-medium">
            <Link href="/brands">Brands</Link>
            <Link href="/about">About</Link>
            <Link href="/media">Media</Link>
            <Link href="/career">Career</Link>
            <Link
              href="/contact"
              className="border px-4 py-1 rounded-md hover:bg-black hover:text-white transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2"
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl z-50 p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-semibold">Menu</span>
                <button onClick={() => setOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-lg">
                <Link href="/brands" onClick={() => setOpen(false)}>
                  Brands
                </Link>
                <Link href="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
                <Link href="/media" onClick={() => setOpen(false)}>
                  Media
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="border px-4 py-2 rounded-md text-center"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
