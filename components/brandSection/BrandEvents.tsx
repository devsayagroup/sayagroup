// "use client";
// import Image from "next/image";
// import { BrandEvent } from "@/lib/data-events";

// type Props = { 
//   events: BrandEvent[]; 
//   brandName: string; 
// };

// export default function BrandEvents({ events, brandName }: Props) {
//   if (!events || events.length === 0) return null;

//   return (
//     // Reverted to your original wrapper width and background
//     <section className="w-full px-6 md:px-32 py-20 bg-white">
      
//       {/* Reverted to your original Header layout with the horizontal line */}
//       <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
//         <div>
//           <h2 className="text-4xl md:text-5xl font-light tracking-tight">
//             Events
//           </h2>
//           <p className="text-neutral-500 mt-2 uppercase text-[10px] tracking-[0.2em]">
//             Exclusive happenings at {brandName}
//           </p>
//         </div>
        
//         <div className="h-[1px] flex-1 bg-neutral-100 mx-8 hidden md:block mb-4" />
//       </div>

//       {/* Reverted to your original grid gap and spacing */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//         {events.map((event) => (
//           <article key={event.id} className="relative group">
            
//             {/* The SEO Link Wrapper (Kept from the SEO update) */}
//             <a 
//               href={event.ctaLink || "#"} 
//               target={event.ctaLink ? "_blank" : "_self"}
//               rel="noopener noreferrer"
//               className="block cursor-pointer"
//             >
//               <div className="relative w-full aspect-[4/5] md:h-96 rounded-sm overflow-hidden shadow-sm bg-neutral-100">
//                 <Image
//                   src={event.image}
//                   alt={event.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover transition duration-[1.5s] ease-out group-hover:scale-105"
//                 />
                
//                 {/* Category Badge */}
//                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-black shadow-sm">
//                   {event.category}
//                 </div>

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                    {event.ctaLink && (
//                      <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/40 px-6 py-3 backdrop-blur-sm">
//                        Explore
//                      </span>
//                    )}
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="mt-6 space-y-2">
//                 <h3 className="text-xl font-light tracking-wide group-hover:underline decoration-neutral-300 underline-offset-8 transition-all">
//                   {event.title}
//                 </h3>
                
//                 <div className="flex items-center gap-4">
//                   <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">
//                     {event.date}
//                   </p>
//                   <span className="w-1 h-1 rounded-full bg-neutral-300" />
//                   <p className="text-[11px] text-neutral-500 uppercase tracking-wider">
//                     {event.brandId}
//                   </p>
//                 </div>

//                 <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 pt-2">
//                   {event.description}
//                 </p>
//               </div>
//             </a>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { BrandEvent } from "@/lib/data-events";

type Props = { 
  events: BrandEvent[]; 
  brandName: string; 
};

export default function BrandEvents({ events, brandName }: Props) {
  if (!events || events.length === 0) return null;

  return (
    <section className="w-full px-6 md:px-32 py-20 bg-white">
      
      {/* Original Header Layout */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Events
          </h2>
          <p className="text-neutral-500 mt-2 uppercase text-[10px] tracking-[0.2em]">
            Exclusive happenings at {brandName}
          </p>
        </div>
        
        <div className="h-[1px] flex-1 bg-neutral-100 mx-8 hidden md:block mb-4" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {events.map((event) => (
          <article key={event.id} className="relative group">
            
            {/* The SEO Link Wrapper */}
            <a 
              href={event.ctaLink || "#"} 
              target={event.ctaLink ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block cursor-pointer flex flex-col h-full"
            >
              {/* 4:5 Image Container */}
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-neutral-100 shadow-sm">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-[1.5s] ease-out group-hover:scale-105"
                />
                
                {/* Category Badge - Always Visible */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-black shadow-sm z-10">
                  {event.category}
                </div>

                {/* DESKTOP HOVER OVERLAY (Hidden on Mobile) */}
                <div className="hidden lg:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col justify-end p-8 z-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-2">
                    {event.date}
                  </p>
                  <h3 className="text-2xl font-light tracking-wide text-white mb-3 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed line-clamp-3 mb-6">
                    {event.description}
                  </p>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors">
                      Explore Experience 
                    </span>
                  </div>
                </div>
              </div>

              {/* MOBILE STATIC TEXT (Hidden on Desktop) */}
              <div className="mt-5 space-y-2 lg:hidden flex-grow flex flex-col">
                <h3 className="text-xl font-light tracking-wide text-neutral-900">
                  {event.title}
                </h3>
                
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  {event.date}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 pt-1 flex-grow">
                  {event.description}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900 border-b border-black pb-1">
                    Explore Experience 
                  </span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}