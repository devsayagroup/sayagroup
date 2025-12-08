"use client";
import Image from "next/image";

type Props = { brand: any };

export default function BrandEvents({ brand }: Props) {
  if (!brand.whatsHappening?.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-light tracking-tight mb-12">
        What’s Happening
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {brand.whatsHappening.map((event: any) => (
          <div key={event.id} className="group">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <h3 className="mt-6 text-xl font-medium">{event.title}</h3>
            <p className="text-sm text-neutral-500">{event.date}</p>
            <p className="mt-3 text-neutral-600">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
