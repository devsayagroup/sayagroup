"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

type Props = {
  images: string[];
};

export default function BrandHeroCarousel({ images }: Props) {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active",
        }}
        className="w-full h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-screen">
              <Image
                src={img}
                alt={`brand-image-${i}`}
                fill
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className="object-cover"
              />

              {/* Optional dark overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination styles */}
      <style jsx global>{`
        .swiper-bullet {
          background: rgba(255, 255, 255, 0.4);
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          border-radius: 100%;
          bottom: 40px !important;
        }
        .swiper-bullet-active {
          background: white;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
}
