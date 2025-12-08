// "use client";

// import Image from "next/image";
// import type { Brand } from "@/lib/data-brands";

// type Props = {
//   brand: Brand;
// };

// export default function BrandHero({ brand }: Props) {
//   return (
//     <section className="relative w-full h-[80vh] overflow-hidden">
//       <div className="absolute inset-0">
//         <Image
//           src={brand.image}
//           alt={brand.name}
//           fill
//           priority
//           className="object-cover object-center"
//         />
//       </div>

//       <div className="absolute inset-0 flex items-center justify-center">
//         {brand.logo && (
//           <Image
//             src={brand.logo}
//             alt={`${brand.name} logo`}
//             width={260}
//             height={260}
//             className="opacity-95 w-40 md:w-56 lg:w-64 h-auto"
//             priority
//           />
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import type { Brand } from "@/lib/data-brands";

type Props = { brand: Brand };

export default function BrandHero({ brand }: Props) {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">

      {/* Background */}
        {/* <Image
        src={brand.image}
        alt={brand.name}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        unoptimized
        /> */}

        <Image
        src={brand.image}
        alt={brand.name}
        fill
        priority
        unoptimized
        className="object-cover object-center"
        />



      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        {brand.logo && (
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={800}     // high resolution source
            height={800}    // high resolution source
            className="opacity-95 w-40 md:w-56 lg:w-64 h-auto"
            priority
          />
        )}
      </div>

    </section>
  );
}
