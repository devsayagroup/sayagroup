"use client";

type Props = { brand: any };

export default function BrandContact({ brand }: Props) {
  const c = brand.contact;
  if (!c) return null;

  return (
    <section className="bg-stone-950 text-white px-6 md:px-20 py-24">
      <h2 className="text-3xl font-light tracking-tight mb-12">Contact</h2>

      <div className="grid md:grid-cols-4 place-items-center justify-center items-center gap-12 text-lg text-neutral-700">
        {/* Address */}
        <div>
          <p className="font-medium text-white mb-2">Address</p>
          <p>{c.address}</p>
        </div>

        {/* Contact */}
        <div>
          <p className="font-medium text-white mb-2">Contact</p>
          <p>{c.contactPerson}</p>
        </div>

        {/* Socials */}
        <div>
          <p className="font-medium text-white mb-2">Socials</p>
          <div className="flex flex-col space-y-1">
            {c.socials?.instagram && (
              <a href={c.socials.instagram} target="_blank" className="underline hover:text-black">
                Instagram
              </a>
            )}
            {c.socials?.website && (
              <a href={c.socials.website} target="_blank" className="underline hover:text-black">
                Website
              </a>
            )}
          </div>
        </div>
        <div className="">
            {c.rsvp && (
                <a
                href={c.rsvp}
                target="_blank"
                className="inline-block mt-12 px-10 py-4 bg-black text-white rounded-full tracking-wide hover:bg-neutral-800 transition"
                >
                RSVP
                </a>
            )}
        </div>
      </div>

     
    </section>
  );
}
