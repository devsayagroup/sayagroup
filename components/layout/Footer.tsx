// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="py-12 border-t border-black/10 bg-white">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
//         <div>
//           <Image src="/sayagroup.png" alt="Saya Group" width={140} height={140} className="mb-8" />
//           <p className="text-sm opacity-60 mt-1">
//             Hospitality. Culture. Experiences.
//           </p>
//         </div>

//         <div className="flex flex-col gap-2 text-sm opacity-70">
//           <a href="/brands">Brands</a>
//           <a href="/media">Media</a>
//           <a href="/contact">Contact</a>
//         </div>
//       </div>

//       <p className="text-center text-xs opacity-60 mt-10">
//         © {new Date().getFullYear()} Saya Group. All Rights Reserved.
//       </p>
//     </footer>
//   );
// }

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
      className="py-20 border-t border-black/10 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="flex flex-col">
          <Image
            src="/sayagroup.png"
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
            Jakarta, Indonesia<br />
            Jl. Example No. 123, SCBD
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
                hello@sayagroup.com
              </a>
            </li>
            <li>Phone: <span className="text-neutral-700">+62 812 3456 7890</span></li>
            <li>
              Instagram:{" "}
              <a href="https://instagram.com/sayagroup" className="hover:text-black transition">
                @sayagroup
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
