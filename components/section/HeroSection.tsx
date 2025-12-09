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

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={220}
                  height={220}
                  priority={i === 0}
                  sizes="200px"
                  className="object-contain"
                />
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

      {/* BULLET STYLING */}
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
      `}</style>
    </section>
  );
}
