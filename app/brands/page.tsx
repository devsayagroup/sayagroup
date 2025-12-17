// app/brands/page.tsx (server)
import Link from "next/link";
import { brands } from "@/lib/data-brands";
import Headline from "@/components/ui/Headline";

export default function BrandsPage() {

  return (
    <main className="">
      <Headline
        title="Our Brands"
        breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Brands" },
        ]}
      />

      <div className="px-6 md:px-32 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/${brand.slug}`}
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
