"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";

export default function AboutClient() {
  const reduceMotion = useReducedMotion();

  // Parallax for hero media
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const heroY = useTransform(heroProgress, [0, 1], reduceMotion ? [0, 0] : [20, -20]);
  const heroScale = useTransform(heroProgress, [0, 1], reduceMotion ? [1, 1] : [1.02, 1]);

 const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // ok once Variants is applied
      },
    },
  };

  return (
    <main className="w-full bg-white text-neutral-900">
      <section
        ref={heroRef as any}
        className="relative overflow-hidden border-b border-neutral-200"
      >
        {/* Soft luxury background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl opacity-70" />
          <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-neutral-50 blur-3xl opacity-90" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-24 md:grid-cols-2">
            {/* Copy */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-[1px] w-10 bg-neutral-300" />
                <span className="text-xs tracking-[0.28em] uppercase text-neutral-500">
                  About Saya Group
                </span>
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-light leading-[1.08] tracking-[-0.02em]">
                A Group Built on
                <br />
                Thoughtful Hospitality
              </h1>

              <p className="mt-7 text-[17px] md:text-md text-neutral-700 leading-relaxed max-w-xl">
                Saya Group is a diversified holding company dedicated to creating
                meaningful destinations across hospitality, lifestyle, craftsmanship,
                and property.
              </p>

              <p className="mt-5 text-[17px] md:text-md text-neutral-700 leading-relaxed max-w-xl">
                Our work spans destination dining, refined social spaces, artisan coffee,
                natural stone craftsmanship, and boutique luxury retreats — each brand
                shaped by its own character and a shared commitment to quality and design.
              </p>

              {/* subtle CTA row (optional) */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/brands"
                  className="group inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm tracking-wide text-neutral-900 hover:border-neutral-900 transition"
                >
                  Explore Brands
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>

                <div className="text-sm text-neutral-500">
                  Jakarta • Hospitality • Lifestyle
                </div>
              </div>
            </motion.div>

            {/* Hero Media w/ Parallax */}
            <motion.div
              style={{ y: heroY, scale: heroScale }}
              className="relative"
              aria-hidden="true"
            >
              <div className="relative aspect-[6/5] w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.35)]">
                {/* Replace with your own luxury hero image */}
                <Image
                  src="/brands/onepercent/inner-circle.png"
                  alt="Saya Group — hospitality and lifestyle"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Luxury glass label */}
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md px-5 py-4 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.22em] uppercase opacity-80">
                        Craft • Atmosphere • Detail
                      </p>
                      <p className="mt-1 text-lg font-light">
                        Destinations with character.
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10">
                      ✦
                    </span>
                  </div>
                </div>
              </div>

              {/* subtle corner accent */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-neutral-200 bg-white/60 backdrop-blur" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <div>
              <p className="text-xs tracking-[0.28em] uppercase text-neutral-500">
                Our Philosophy
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.01em]">
                Designed with intention,
                <br className="hidden md:block" />
                delivered with consistency.
              </h2>
            </div>

            <p className="max-w-xl text-neutral-600 leading-relaxed">
              We build brands that feel timeless — where design and service align
              to create calm, elevated experiences that last beyond trends.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Intentional Design",
                desc:
                  "Every space, menu, and experience is crafted with purpose — balancing aesthetics, comfort, and emotion.",
              },
              {
                title: "Human-Centered Culture",
                desc:
                  "Great experiences begin with great people: strong culture, training, and thoughtful leadership.",
              },
              {
                title: "Enduring Quality",
                desc:
                  "From craftsmanship to service standards, we prioritize quality that outlives the moment.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeUp}
                className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.35)]"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full border border-neutral-200 bg-neutral-50" />
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="portfolio" className="py-20 md:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="text-xs tracking-[0.28em] uppercase text-neutral-500">
              Our Portfolio
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-light">
              Brands built for different moments,
              <br className="hidden md:block" />
              united by one standard.
            </h2>

            <p className="mt-6 text-lg text-neutral-700 max-w-3xl leading-relaxed">
              Saya Group is home to a growing portfolio across hospitality and lifestyle —
              each crafted with its own identity and audience.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { name: "GoaSaya", desc: "Destination dining experience" },
              { name: "One Percent Lounge", desc: "Refined social space" },
              { name: "Aroma Biji", desc: "Specialty coffee brand" },
              { name: "Maha Karya Marmer", desc: "Natural stone craftsmanship" },
              { name: "NemuSaya Villa", desc: "Boutique luxury retreat" },
            ].map((b) => (
              <motion.div
                key={b.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeUp}
                className="group rounded-3xl border border-neutral-200 bg-white p-7 md:p-8 transition hover:border-neutral-900/40"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.01em]">
                      {b.name}
                    </h3>
                    <p className="mt-2 text-neutral-600">{b.desc}</p>
                  </div>
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 transition group-hover:border-neutral-900/40">
                    →
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-neutral-100" />
                <p className="mt-5 text-sm text-neutral-500 leading-relaxed">
                  Built with a consistent design language, operational discipline,
                  and a premium guest experience in mind.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

        <section className="relative overflow-hidden bg-neutral-950 text-white py-20 md:py-24">
            {/* ===== BACKGROUND PATTERN ===== */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                >
                <defs>
                    <pattern
                    id="cta-pattern"
                    x="0"
                    y="0"
                    width="64"
                    height="64"
                    patternUnits="userSpaceOnUse"
                    >
                    <path
                        d="M64 0H0V64"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
                </svg>
            </div>

            {/* ===== SOFT LIGHT BLOBS ===== */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-120px] top-[-140px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
                <div className="absolute right-[-180px] bottom-[-180px] h-[620px] w-[620px] rounded-full bg-white/5 blur-3xl" />
            </div>

            {/* ===== CONTENT ===== */}
            <div className="relative mx-auto max-w-4xl px-6 md:px-10 lg:px-12 text-center">
                <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                >
                <p className="text-xs tracking-[0.28em] uppercase text-white/60">
                    Looking Forward
                </p>

                <h2 className="mt-4 text-3xl md:text-4xl font-light">
                    Building brands with long-term value
                    <br className="hidden md:block" />
                    and cultural relevance.
                </h2>

                <p className="mt-7 text-lg text-white/70 leading-relaxed">
                    As Saya Group continues to grow, our focus remains the same:
                    creating thoughtful experiences that enrich how people dine,
                    gather, and live while building brands with lasting quality
                    and intentional design.
                </p>

                <div className="mt-10 flex items-center justify-center gap-3 text-sm text-white/60">
                    <span className="h-[1px] w-10 bg-white/20" />
                    <span>Hospitality • Lifestyle • Craft</span>
                    <span className="h-[1px] w-10 bg-white/20" />
                </div>
                </motion.div>
            </div>
            </section>

    </main>
  );
}
