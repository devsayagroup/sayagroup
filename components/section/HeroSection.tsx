"use client";

import { heroCarousel } from "@/lib/data-carousel";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet-active",
        }}
        className="w-full h-full"
      >
        {heroCarousel.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-screen">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 flex flex-row flex-wrap sm:flex-nowrap gap-8 md:gap-12 items-center justify-center text-center text-white px-6">
                
                  {/* Brand strip (glass) */}
                  <div className="mt-14 md:mt-16">
                    <div className="w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-md px-8 md:px-12 py-4">
                      <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
                        <Image
                          src="/sayagroupnew.png"
                          alt="Saya Group"
                          width={120}
                          height={120}
                          priority={i === 0}
                          sizes="(max-width: 640px) 120px, 160px"
                          className="object-contain w-22 sm:w-36"
                        />
                        <div className="bg-white h-12 sm:h-22 w-px" />
                        <Image
                          src={item.logo}
                          alt={item.title}
                          width={100}
                          height={100}
                          priority={i === 0}
                          sizes="(max-width: 640px) 100px, 120px"
                          className="object-contain w-20 sm:w-30"
                        />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="lg:absolute bottom-10 left-10 z-30 text-white max-w-xs pointer-events-none">
        <h3 className="text-sm md:text-base font-light uppercase tracking-widest opacity-80">
          Exclusive Experiences
        </h3>
        <p className="text-xs opacity-70 leading-relaxed mt-1">
          Discover our curated destinations crafted with timeless elegance,
          refined hospitality, and world-class atmosphere.
        </p>
      </div>

      <div className="absolute bottom-20 md:bottom-10 right-10 z-30 text-white max-w-xs pointer-events-none text-right">
        <h3 className="text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
          Saya Group
        </h3>
        <p className="text-xs opacity-70 leading-relaxed mt-1">
          Home to iconic brands including GoaSaya, One Percent Lounge, and more.
          A collection built for unforgettable moments.
        </p>
      </div>

{/* 
      <style jsx global>{`
        .swiper-pagination {
          bottom: 35px !important;
        }

        .hero-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.35);
          display: inline-block;
          border-radius: 50%;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }

        .hero-bullet-active {
          background: white !important;
          width: 12px !important;
          height: 12px !important;
        }

        @media (max-width: 768px) {
          .swiper-pagination {
            bottom: 25px !important;
          }
          .hero-bullet {
            width: 8px;
            height: 8px;
          }
          .hero-bullet-active {
            width: 10px !important;
            height: 10px !important;
          }
        }
      `}</style> */}
      
      {/* BULLET STYLING */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 26px !important;
        }
        .hero-bullet {
          width: 7px;
          height: 7px;
          background: rgba(255, 255, 255, 0.25);
          display: inline-block;
          border-radius: 999px;
          margin: 0 5px !important;
          transition: all 0.25s ease;
        }
        .hero-bullet-active {
          background: rgba(255, 255, 255, 0.95) !important;
          width: 18px !important;
          height: 7px !important;
        }
      `}</style>
    </section>
  );
}


// "use client";

// import { heroCarousel } from "@/lib/data-carousel";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import { motion, useReducedMotion } from "framer-motion";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// export default function HeroSection() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section className="relative w-full h-[100vh] min-h-[680px] overflow-hidden bg-black">
//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         effect="fade"
//         loop
//         speed={1200}
//         autoplay={{ delay: 4500, disableOnInteraction: false }}
//         pagination={{
//           clickable: true,
//           bulletClass: "hero-bullet",
//           bulletActiveClass: "hero-bullet-active",
//         }}
//         className="w-full h-full"
//       >
//         {heroCarousel.map((item, i) => (
//           <SwiperSlide key={i}>
//             <div className="relative w-full h-[100vh] min-h-[680px]">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 priority={i === 0}
//                 sizes="100vw"
//                 className="object-cover object-center"
//               />

//               {/* Luxury overlay: gradient + soft vignette */}
//               <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
//               <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.10),transparent_60%)]" />

//               {/* Content */}
//               <div className="absolute inset-0 z-10">
//                 <div className="mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-16 md:pb-20">
//                   <motion.div
//                     initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//                     className="max-w-3xl"
//                   >
//                     {/* <p className="text-xs md:text-sm tracking-[0.28em] uppercase text-white/70">
//                       Saya Group
//                     </p> */}

//                     <h1 className="mt-4 text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] text-white">
//                       Curated destinations,
//                       <br className="hidden md:block" />
//                       built with timeless hospitality.
//                     </h1>

//                     <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
//                       Discover our portfolio — from destination dining and refined social spaces
//                       to artisan coffee, stone craftsmanship, and boutique retreats.
//                     </p>

//                     <div className="mt-10 flex flex-wrap gap-3">
//                       <Link
//                         href="/about"
//                         className="inline-flex items-center justify-center rounded-full bg-white text-neutral-950 px-6 py-3 text-sm tracking-wide hover:opacity-90 transition"
//                       >
//                         Explore Saya Group
//                         <span className="ml-2">→</span>
//                       </Link>

//                       <Link
//                         href="#brands"
//                         className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur px-6 py-3 text-sm tracking-wide text-white hover:border-white/70 transition"
//                       >
//                         View Brands
//                       </Link>
//                     </div>
//                   </motion.div>

//                   {/* Brand strip (glass) */}
//                   <div className="mt-14 md:mt-16">
//                     <div className="w-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md px-5 py-4">
//                       <div className="flex flex-wrap items-center justify-between gap-6">
//                         <div className="flex items-center gap-4">
//                           <Image
//                             src="/sayagroupnew.png"
//                             alt="Saya Group"
//                             width={120}
//                             height={120}
//                             priority={i === 0}
//                             className="object-contain w-16 md:w-20"
//                           />
//                           <div className="h-10 w-px bg-white/30" />
//                           <p className="text-xs md:text-sm text-white/70 tracking-wide">
//                             Featuring: <span className="text-white">{item.title}</span>
//                           </p>
//                         </div>

//                         <Image
//                           src={item.logo}
//                           alt={item.title}
//                           width={110}
//                           height={110}
//                           priority={i === 0}
//                           className="object-contain w-16 md:w-20 opacity-95"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Corner note (subtle) */}
//               <div className="pointer-events-none absolute top-8 right-8 z-20 hidden md:block text-right">
//                 <p className="text-xs tracking-[0.28em] uppercase text-white/55">
//                   Exclusive Experiences
//                 </p>
//                 <p className="mt-2 text-sm text-white/55 max-w-[260px] leading-relaxed">
//                   Timeless design, refined service, unforgettable moments.
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* BULLET STYLING */}
//       <style jsx global>{`
//         .swiper-pagination {
//           bottom: 26px !important;
//         }
//         .hero-bullet {
//           width: 7px;
//           height: 7px;
//           background: rgba(255, 255, 255, 0.25);
//           display: inline-block;
//           border-radius: 999px;
//           margin: 0 5px !important;
//           transition: all 0.25s ease;
//         }
//         .hero-bullet-active {
//           background: rgba(255, 255, 255, 0.95) !important;
//           width: 18px !important;
//           height: 7px !important;
//         }
//       `}</style>
//     </section>
//   );
// }
