"use client";

import Image from "next/image";

type Props = { brand: any };

export default function BrandContact({ brand }: Props) {
  const c = brand.contact;
  if (!c) return null;

  return (
    <section className="bg-stone-950 text-white px-6 md:px-32 py-16 relative">
      <div className="flex justify-center items-center mx-auto">
        <Image src={brand.logo} width={160} height={160} alt="Goa Saya"/>
      </div>

      <div className="my-12 md:my-16 mx-auto w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4c49e] to-transparent" />
      
      <div className="
        grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16
        items-start
        text-neutral-300 text-base md:text-lg
      ">

        <div className="space-y-3 text-center md:text-left">
          <p className="uppercase tracking-[0.2em] text-sm text-neutral-500">
            Address
          </p>
          <p className="leading-relaxed text-neutral-200">
            {c.address}
          </p>
        </div>

        <div className="space-y-3 text-center md:text-left">
          <p className="uppercase tracking-[0.2em] text-sm text-neutral-500">
            Contact
          </p>
          <p className="leading-relaxed text-neutral-200">
            {c.contactPerson}
          </p>
        </div>

        <div className="space-y-3 text-center md:text-left">
          <p className="uppercase tracking-[0.2em] text-sm text-neutral-500">
            Socials
          </p>

          <div className="flex flex-col md:flex-row gap-4 space-y-2">
            {c.socials?.instagram && (
              <a
                href={c.socials.instagram}
                target="_blank"
                className="hover:text-[#d4c49e] transition-colors"
              >
                Instagram
              </a>
            )}
             {c.socials?.tiktok && (
              <a
                href={c.socials.tiktok}
                target="_blank"
                className="hover:text-[#d4c49e] transition-colors"
              >
                Tiktok
              </a>
            )}
            {c.socials?.website && (
              <a
                href={c.socials.website}
                target="_blank"
                className="hover:text-[#d4c49e] transition-colors"
              >
                Website
              </a>
            )}
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-start">
          {c.rsvp && (
            <a
              href={c.rsvp}
              target="_blank"
              className="
                px-10 py-4 rounded-md
                bg-white/10 hover:bg-white/20
                border border-white/10 hover:border-white/20
                text-white tracking-wide
                transition-all backdrop-blur-sm
              "
            >
              RSVP
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
