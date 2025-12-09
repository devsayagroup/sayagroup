// app/brands/page.tsx (server)
import Link from "next/link";
import { brands } from "@/lib/data-brands";

export default function BrandsPage() {

  return (
    <main className="max-w-7xl mx-auto px-6 py-32">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Our Brands</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/brands/${brand.slug}`}
            className="group block rounded-md overflow-hidden"
          >
            <div className="relative h-72 bg-gray-100">
              {/* Using plain img for simple demo; you can replace with next/image */}
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 ml-4">
              <h3 className="text-xl font-semibold">{brand.name}</h3>
              <p className="text-sm text-neutral-600">{brand.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
