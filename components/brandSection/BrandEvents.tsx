"use client";
import Image from "next/image";

type Props = { brand: any };

export default function BrandEvents({ brand }: Props) {
  // if (!brand.events?.length) return null;

  return (
    <section className="w-full px-6 md:px-32 py-20">
      <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
        Events
      </h2>

      {brand.events && brand.events.length > 1 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
          {brand.events.map((event: any) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="relative w-full h-64 rounded-sm overflow-hidden shadow-sm">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition" />
              </div>

              <h3 className="mt-5 text-xl font-light tracking-wide group-hover:text-neutral-900 transition">
                {event.title}
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                {event.date}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-neutral-500 text-sm italic mt-6">No Recent Events</p>
      )}
    </section>
  );
}
