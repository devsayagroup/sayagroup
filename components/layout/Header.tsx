// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <header className="fixed top-0 left-0 w-full z-99 bg-white backdrop-blur-xl border-b border-black/10">
//         <nav className="flex items-center justify-between py-2 px-6 md:px-32">
//           {/* Logo */}
//           <Link href="/" className="text-lg font-semibold tracking-wide">
//             <Image
//               src="/sayagroup-black.png"
//               width={100}
//               height={100}
//               alt="Saya Group"
//             />
//           </Link>

//           <div className="hidden md:flex gap-8 justify-center items-center text-sm font-medium uppercase">
//             <Link href="/about">About</Link>
//             <Link href="/brands">Brands</Link>
//             {/* <Link href="/media">Media</Link> */}
//             <Link href="/career">Career</Link>
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-full bg-neutral-950 text-white px-6 py-3 text-sm tracking-wide hover:opacity-90 transition"
//             >
//               Contact <span className="ml-2">→</span>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(true)}
//             className="md:hidden p-2"
//             aria-label="Open Menu"
//           >
//             <Menu size={22} />
//           </button>
//         </nav>
//       </header>

//       {/* Mobile Slide-In Menu */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//             />

//             {/* Drawer */}
//             <motion.div
//               className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl z-999 p-6 flex flex-col"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "tween", duration: 0.3 }}
//             >
//               <div className="flex justify-between items-center mb-10">
//                 <span className="font-semibold">Menu</span>
//                 <button onClick={() => setOpen(false)}>
//                   <X size={22} />
//                 </button>
//               </div>

//               <nav className="flex flex-col gap-6 font-light text-black/70 mt-4 text-lg">
//                 <Link href="/about" onClick={() => setOpen(false)}>
//                   About
//                 </Link>
//                 <Link href="/brands" onClick={() => setOpen(false)}>
//                   Brands
//                 </Link>
//                 <Link href="/career" onClick={() => setOpen(false)}>
//                   Career
//                 </Link>
//                 <Link
//                   href="/contact"
//                   onClick={() => setOpen(false)}
//                   className="inline-flex items-center justify-center rounded-full bg-neutral-950 text-white px-6 py-3 text-sm tracking-wide hover:opacity-90 transition"
//                 >
//                  Contact <span className="ml-2">→</span>
//                 </Link>
//               </nav>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 📍 To track current page
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // 🛣️ Identifies active route

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Brands", href: "/brands" },
    { name: "Career", href: "/career" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-99 bg-white backdrop-blur-xl border-b border-black/10">
        <nav className="flex items-center justify-between py-2 px-6 md:px-32">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold tracking-wide">
            <Image
              src="/sayagroup-black.png"
              width={100}
              height={100}
              alt="Saya Group"
            />
          </Link>

          {/* 💻 Desktop Links with Smooth Underline */}
          <div className="hidden md:flex gap-8 justify-center items-center text-sm font-medium uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 transition-colors hover:text-black/50 group"
                >
                  <span className={isActive ? "text-black" : "text-neutral-500"}>
                    {link.name}
                  </span>
                  
                  {/* ✨ Animated Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline" // 🧲 Forces the bar to "slide"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-neutral-950 text-white px-6 py-3 text-sm tracking-wide hover:opacity-90 transition active:scale-95"
            >
              Contact <span className="ml-2">→</span>
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

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl z-999 p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }} // 🪁 Snappier feel
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-semibold uppercase text-xs tracking-widest text-neutral-400">Menu</span>
                <button onClick={() => setOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 font-light text-black/70 mt-4 text-lg">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }} // 🪜 Staggered entrance
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setOpen(false)}
                      className={pathname === link.href ? "font-bold text-black" : ""}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-neutral-950 text-white px-6 py-3 text-sm tracking-wide"
                >
                  Contact <span className="ml-2">→</span>
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}