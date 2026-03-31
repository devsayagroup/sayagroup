// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Footer() {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 80 }}               
//       whileInView={{ opacity: 1, y: 0 }}            
//       viewport={{ once: true, amount: 0.2 }}        
//       transition={{ duration: 1.5, ease: "easeOut" }} 
//       className="pt-20 pb-8 border-t border-black/10 bg-white"
//     >
//       <div className="px-6 md:px-32 grid grid-cols-1 md:grid-cols-4 gap-12">

//         {/* BRAND */}
//         <div className="flex flex-col">
//           <Image
//             src="/sayagroup-black.png"
//             alt="Saya Group"
//             width={150}
//             height={150}
//             className="mb-6 opacity-90"
//           />
//           <p className="text-sm text-neutral-600 tracking-wide leading-relaxed">
//             Hospitality. Culture. Experiences.
//           </p>
//         </div>

//         {/* LINKS */}
//         <div>
//           <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
//             Navigation
//           </h4>
//           <ul className="space-y-2 text-sm text-neutral-700">
//             <li><a href="/about" className="hover:text-neutral-900 transition">About</a></li>
//             <li><a href="/brands" className="hover:text-neutral-900 transition">Brands</a></li>
//             {/* <li><a href="/media" className="hover:text-neutral-900 transition">Media</a></li> */}
//             <li><a href="/career" className="hover:text-neutral-900 transition">Career</a></li>
//             <li><a href="/contact" className="hover:text-neutral-900 transition">Contact</a></li>
//           </ul>
//         </div>

//         {/* ADDRESS */}
//         <div>
//           <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
//             Address
//           </h4>
//           <p className="text-sm text-neutral-700 leading-relaxed">
//             Saya Group <br />
//             Ruko La Riviera, PIK 2 <br />
//             Tangerang, Indonesia
//           </p>
//         </div>

//         {/* CONTACT */}
//         <div>
//           <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
//             Contact
//           </h4>
//           <ul className="space-y-1 text-sm text-neutral-700">
//             <li>
//               Email:{" "}
//               <a href="mailto:admin@sayagroup.id" className="hover:text-black transition">
//                 admin@sayagroup.id
//               </a>
//             </li>
//             <li>Phone: <span className="text-neutral-700">+62 813 1801 269</span></li>
//             <li>
//               Instagram:{" "}
//               <a href="https://instagram.com/sayagroup.id" className="hover:text-black transition">
//                 @sayagroup.id
//               </a>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* COPYRIGHT */}
//       <p className="text-center text-xs text-neutral-500 mt-16 tracking-wide">
//         © {new Date().getFullYear()} Saya Group. All Rights Reserved.
//       </p>
//     </motion.footer>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link"; 
import { motion } from "framer-motion";
import { brands } from "@/lib/data-brands"; 
import { Mail, Phone } from "lucide-react"; 

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="pt-20 pb-8 border-t border-black/5 bg-white"
    >
      <div className="px-6 md:px-20 lg:px-32 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* BRAND & TAGLINE */}
        <div className="lg:col-span-2 flex flex-col">
          <Link href="/">
            <Image
              src="/sayagroup-black.png"
              alt="Saya Group - Hospitality & Lifestyle Holding Jakarta"
              width={140}
              height={40}
              className="mb-6 opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </Link>
          <p className="text-sm text-neutral-500 tracking-widest uppercase font-medium leading-relaxed max-w-xs">
            A hospitality-driven lifestyle group based in Jakarta.
          </p>
        </div>

        {/* BRANDS - CRITICAL FOR SITELINKS SEO */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-6 font-bold">
            Our Brands
          </h4>
          <ul className="space-y-3 text-sm text-neutral-700 font-medium">
            {brands.map((brand) => (
              <li key={brand.slug}>
                <Link 
                  href={`/brands/${brand.slug}`} 
                  className="hover:text-black transition-colors"
                >
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-6 font-bold">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-neutral-700 font-medium">
            <li><Link href="/about" className="hover:text-black transition">About</Link></li>
            <li><Link href="/brands" className="hover:text-black transition">Portfolio</Link></li>
            <li><Link href="/career" className="hover:text-black transition">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
          </ul>
        </div>

        {/* OFFICE & CONTACT */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-6 font-bold">
            Head Office
          </h4>
          <div className="text-sm text-neutral-600 leading-relaxed space-y-4">
            <p>
              Ruko La Riviera, PIK 2 <br />
              Tangerang, Banten 15510
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-neutral-50 rounded-full group-hover:bg-neutral-100 transition-colors">
                  <Mail size={14} strokeWidth={1.5} className="text-neutral-500 group-hover:text-black" />
                </div>
                <a 
                  href="mailto:admin@sayagroup.id" 
                  className="text-black font-semibold hover:underline transition underline-offset-4 decoration-neutral-300"
                >
                  admin@sayagroup.id
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-neutral-50 rounded-full group-hover:bg-neutral-100 transition-colors">
                  <Phone size={14} strokeWidth={1.5} className="text-neutral-500 group-hover:text-black" />
                </div>
                <span className="font-medium text-neutral-700">+62 813 1801 269</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-20 pt-8 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-20 lg:px-32 max-w-[1920px] mx-auto">
        <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Saya Group. Jakarta, Indonesia.
        </p>
        <div className="flex gap-6 text-[10px] text-neutral-400 uppercase tracking-widest">
          <a href="#" className="hover:text-black transition">Privacy Policy</a>
          <a href="#" className="hover:text-black transition">Terms</a>
        </div>
      </div>
    </motion.footer>
  );
}