"use client";

type Props = {
  brand: any;
};

export default function BrandAbout({ brand }: Props) {
  return (
    <section className="bg-gray-200 px-6 py-18 text-center">
      <p className="max-w-3xl mx-auto text-black font-medium leading-relaxed text-lg md:text-xl">
        {brand.description}
      </p>
    </section>
  );
}
