"use client";

type Props = {
  brand: any;
};

export default function BrandAbout({ brand }: Props) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      {/* <h2 className="text-4xl font-light tracking-tight mb-6">
        About {brand.name}
      </h2> */}
      <p className="text-black leading-relaxed text-xl">
        {brand.description}
      </p>
    </section>
  );
}
