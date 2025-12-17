"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}               // start lower = parallax feel
      whileInView={{ opacity: 1, y: 0 }}            // fade + slide up smoothly
      viewport={{ once: true, amount: 0.2 }}        // only animate once, trigger early
      transition={{ duration: 1.5, ease: "easeOut" }} // slow luxurious animation
      className="pt-20 pb-8 border-t border-black/10 bg-white"
    >
      <div className="px-6 md:px-32 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="flex flex-col">
          <Image
            src="/sayagroup-black.png"
            alt="Saya Group"
            width={150}
            height={150}
            className="mb-6 opacity-90"
          />
          <p className="text-sm text-neutral-600 tracking-wide leading-relaxed">
            Hospitality. Culture. Experiences.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><a href="/brands" className="hover:text-neutral-900 transition">Brands</a></li>
            <li><a href="/media" className="hover:text-neutral-900 transition">Media</a></li>
            <li><a href="/career" className="hover:text-neutral-900 transition">Career</a></li>
            <li><a href="/contact" className="hover:text-neutral-900 transition">Contact</a></li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
            Address
          </h4>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Saya Group Headquarters<br />
            PIK 2, Indonesia<br />
            Jl. Example No. 123
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
            Contact
          </h4>
          <ul className="space-y-1 text-sm text-neutral-700">
            <li>
              Email:{" "}
              <a href="mailto:hello@sayagroup.com" className="hover:text-black transition">
                hello@sayagroup.id
              </a>
            </li>
            <li>Phone: <span className="text-neutral-700">+62 812 1234 1234</span></li>
            <li>
              Instagram:{" "}
              <a href="https://instagram.com/sayagroup.id" className="hover:text-black transition">
                @sayagroup.id
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-xs text-neutral-500 mt-16 tracking-wide">
        © {new Date().getFullYear()} Saya Group. All Rights Reserved.
      </p>
    </motion.footer>
  );
}
