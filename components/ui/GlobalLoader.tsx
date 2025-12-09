// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

// export default function GlobalLoader() {
//     const pathname = usePathname();
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         window.scrollTo({ top: 0, behavior: "instant" });
//         setLoading(true);
//         const timer = setTimeout(() => {
//         setLoading(false);
//         }, 800);
//         return () => clearTimeout(timer);
//     }, [pathname]);

//     return (
//         <AnimatePresence mode="wait">
//         {loading && (
//             <motion.div
//             className="fixed inset-0 bg-white flex items-center justify-center z-[9999]"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             >
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 <Image
//                 src="/sayagroup.png"
//                 width={150}
//                 height={150}
//                 alt="Sayagroup"
//                 priority
//                 />
//             </motion.div>
//             </motion.div>
//         )}
//         </AnimatePresence>
//     );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function GlobalLoader() {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handler = (e: any) => {
//       const link = e.target.closest("a");
//       if (!link) return;

//       const href = link.getAttribute("href");
//       if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;

//       const isInternal =
//         href.startsWith("/") && !href.startsWith("//");

//       if (!isInternal) return;

//       e.preventDefault();

//       setLoading(true);

//       setTimeout(() => {
//         window.location.href = href; 
//       }, 1500); 
//     };

//     document.addEventListener("click", handler);

//     return () => document.removeEventListener("click", handler);
//   }, []);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }, []);

//   return (
//     <AnimatePresence mode="wait">
//       {loading && (
//         <motion.div
//           className="fixed inset-0 bg-white flex items-center justify-center z-[9999]"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src="/sayagroup.png"
//               width={150}
//               height={150}
//               alt="Sayagroup"
//               priority
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GlobalLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        window.scrollTo({ top: 0, behavior: "smooth" });

        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <AnimatePresence mode="wait">
        {loading && (
            <motion.div
            className="fixed inset-0 bg-white flex items-center justify-center z-[9999]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                src="/sayagroup.png"
                width={150}
                height={150}
                alt="Sayagroup"
                priority
                />
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );
}
