"use client";

import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/lib/data-brands";
import { motion } from "framer-motion";

export default function BrandClient({ brand }: { brand: Brand }) {
  return (
    <div className="bg-white text-neutral-900">
      {/* ============================
          BREADCRUMBS (SEO + UX)
      ============================ */}
      <div className="max-w-7xl mx-auto px-6 pt-10 text-sm text-neutral-500">
        <nav className="flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/brands" className="hover:text-black transition-colors">
            Brands
          </Link>
          <span>/</span>
          <span className="text-neutral-800">{brand.name}</span>
        </nav>
      </div>

      {/* ============================
          HERO – Minimalist + Cinematic
      ============================ */}
      <section className="relative h-[75vh] w-full overflow-hidden mt-6">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${brand.image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />

        <div className="absolute bottom-16 left-12 md:left-20">
          {brand.logo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={280}
                height={100}
                className="opacity-90 mb-6"
              />
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-light tracking-tight text-white drop-shadow-lg"
          >
            {brand.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/85 mt-4 text-lg max-w-xl leading-relaxed"
          >
            {brand.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* ============================
          ABOUT – Luxury Editorial Style
      ============================ */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-light mb-10 tracking-tight"
        >
          About {brand.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-neutral-700 text-lg leading-relaxed max-w-3xl"
        >
          {brand.description}
        </motion.p>
      </section>

      {/* ============================
          WHAT’S HAPPENING – Editorial Cards
      ============================ */}
      {Array.isArray(brand.whatsHappening) && brand.whatsHappening.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-28">
          <h2 className="text-3xl font-light mb-16 tracking-tight">
            What’s Happening
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {brand.whatsHappening.map((e) => (
              <motion.article
                key={e.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="rounded-2xl overflow-hidden bg-white shadow-[0_4px_28px_rgba(0,0,0,0.07)]"
              >
                {e.image && (
                  <div className="h-72 w-full overflow-hidden">
                    <Image
                      src={e.image}
                      alt={e.title}
                      width={1600}
                      height={900}
                      className="object-cover w-full h-full transition-transform duration-[1500ms] group-hover:scale-110"
                    />
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {e.title}
                  </h3>

                  {e.date && (
                    <p className="text-neutral-500 mt-1 text-sm">
                      {new Date(e.date).toLocaleDateString()}
                    </p>
                  )}

                  <p className="mt-4 text-neutral-700 leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* ============================
          GALLERY – Luxury Bento Layout
      ============================ */}
      {brand.gallery && brand.gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-3xl font-light mb-12 tracking-tight">Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {brand.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className={`relative overflow-hidden rounded-2xl 
                ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <Image
                  src={img}
                  alt={`${brand.name} image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ============================
          CONTACT – Minimalist Luxury
      ============================ */}
      {brand.contact && (
        <section className="bg-black text-white px-6 md:px-32 py-28 mt-10">
          <h2 className="text-3xl font-light tracking-tight mb-12">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-20">
            {/* LEFT – Details */}
            <div className="space-y-10 text-lg">
              {brand.contact.address && (
                <div className="border-b border-white/15 pb-6">
                  <p className="text-sm uppercase tracking-widest text-white/50 mb-2">
                    Address
                  </p>
                  <p className="leading-relaxed text-white/90">
                    {brand.contact.address}
                  </p>
                </div>
              )}

              {brand.contact.contactPerson && (
                <div className="border-b border-white/15 pb-6">
                  <p className="text-sm uppercase tracking-widest text-white/50 mb-2">
                    Contact
                  </p>
                  <p className="leading-relaxed text-white/90">
                    {brand.contact.contactPerson}
                  </p>
                </div>
              )}
            </div>

            {/* RIGHT – Socials & RSVP */}
            <div className="space-y-12">
              {brand.contact.socials && (
                <div className="border-b border-white/15 pb-6">
                  <p className="text-sm uppercase tracking-widest text-white/50 mb-2">
                    Socials
                  </p>

                  <div className="flex gap-6 mt-3 text-lg">
                    {brand.contact.socials.instagram && (
                      <a
                        href={brand.contact.socials.instagram}
                        target="_blank"
                        className="hover:text-white transition-opacity underline-offset-4 hover:underline"
                      >
                        Instagram
                      </a>
                    )}
                    {brand.contact.socials.website && (
                      <a
                        href={brand.contact.socials.website}
                        target="_blank"
                        className="hover:text-white transition-opacity underline-offset-4 hover:underline"
                      >
                        Website
                      </a>
                    )}
                  </div>
                </div>
              )}

              {brand.contact.rsvp && (
                <a
                  href={brand.contact.rsvp}
                  target="_blank"
                  className="inline-block px-10 py-4 bg-white text-black rounded-full tracking-wide text-lg hover:bg-neutral-200 transition-all"
                >
                  RSVP
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
