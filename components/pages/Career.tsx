// "use client";

// import type { Career } from "@/lib/data-career";

// type Props = {
//   careers: Career[];
// };

// export default function CareerList({ careers }: Props) {
//   return (
//     <section className="bg-white px-6 md:px-32 py-16">
//       <div className="">
//         <div className="mb-20 max-w-2xl">
//           <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
//             Open Positions
//           </h2>
//           <p className="text-neutral-600 leading-relaxed">
//             Join a growing group of hospitality, lifestyle, and craftsmanship
//             brands driven by quality and thoughtful experiences.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {careers.map((job) => (
//             <article
//               key={job.id}
//               className="border border-black/10 bg-black/90 text-white rounded-lg p-10 hover:border-black transition"
//             >
//               <header>
//                 <h3 className="text-2xl font-light tracking-tight mb-3">
//                   {job.title}
//                 </h3>

//                 <div className="text-sm text-neutral-100 flex flex-wrap gap-3">
//                   <span>{job.department}</span>
//                   <span>•</span>
//                   <span>{job.location}</span>
//                   <span>•</span>
//                   <span>{job.type}</span>
//                 </div>
//               </header>

//               <p className="mt-6 text-neutral-400 leading-relaxed">
//                 {job.description}
//               </p>

//               <div className="mt-10 flex items-center justify-between">
//                 <a
//                   href={`/career/${job.id}`}
//                   className="text-sm uppercase tracking-widest border-b border-white pb-1 hover:tracking-[0.25em] transition-all"
//                 >
//                   View Details
//                 </a>

//                 <a
//                   href={`mailto:${job.applyEmail}`}
//                   className="text-sm text-neutral-500 hover:text-white transition"
//                 >
//                   Apply →
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import type { Career } from "@/lib/data-career";
import { motion, AnimatePresence, type Variants, useReducedMotion } from "framer-motion";

type Props = {
  careers: Career[];
};

export default function CareerList({ careers }: Props) {
  const reduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState<string | number | null>(null);

  const activeJob = useMemo(
    () => careers.find((c) => String(c.id) === String(openId)) ?? null,
    [careers, openId]
  );

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const overlay: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.18 } },
  };

  const modal: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
    },
    exit: reduceMotion
      ? { opacity: 0, transition: { duration: 0 } }
      : { opacity: 0, y: 10, scale: 0.99, transition: { duration: 0.2 } },
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-neutral-300" />
            <span className="text-xs tracking-[0.28em] uppercase text-neutral-500">
              Careers
            </span>
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-[-0.02em]">
            Open Positions
          </h2>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            Join a growing group of hospitality, lifestyle, and craftsmanship
            brands driven by quality and thoughtful experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {careers.map((job) => (
            <article
              key={job.id}
              className="group rounded-3xl border border-neutral-200 bg-neutral-950 text-white shadow-[0_18px_60px_-45px_rgba(0,0,0,0.55)] overflow-hidden"
            >
              {/* subtle top accent */}
              <div className="h-[2px] w-full bg-white/10" />

              <div className="p-7 md:p-9">
                <header>
                  <h3 className="text-2xl font-light tracking-[-0.01em]">
                    {job.title}
                  </h3>

                  <div className="mt-3 text-sm text-white/70 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                      {job.department}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                      {job.location}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                      {job.type}
                    </span>
                  </div>
                </header>

                <p className="mt-6 text-white/70 leading-relaxed">
                  {job.description}
                </p>

                <div className="mt-10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setOpenId(job.id)}
                    className="text-sm uppercase tracking-[0.22em] text-white/90 border-b border-white/30 pb-1 hover:border-white/70 hover:text-white transition"
                  >
                    View Details
                  </button>

                  <a
                    href={`mailto:${job.applyEmail}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/40 transition"
                  >
                    Apply <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeJob && (
          <motion.div
            className="fixed inset-0 z-[9999]"
            initial="hidden"
            animate="show"
            exit="exit"
            aria-modal="true"
            role="dialog"
            onClick={() => setOpenId(null)}
          >
            {/* overlay */}
            <motion.div
              variants={overlay}
              className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
            />

            {/* panel */}
            <div className="relative h-full w-full flex items-center justify-center p-4 md:p-8">
              <motion.div
                variants={modal}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl rounded-3xl border border-white/10 bg-neutral-950 text-white shadow-[0_30px_90px_-45px_rgba(0,0,0,0.85)] overflow-hidden"
              >
                {/* header */}
                <div className="p-6 md:p-8 border-b border-white/10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs tracking-[0.28em] uppercase text-white/60">
                        {activeJob.department} • {activeJob.location} • {activeJob.type}
                      </p>
                      <h3 className="mt-3 text-2xl md:text-3xl font-light tracking-[-0.01em]">
                        {activeJob.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpenId(null)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-white hover:border-white/30 transition"
                      aria-label="Close modal"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* body */}
                <div className="p-6 md:p-8 max-h-[70vh] overflow-auto">
                  <SectionTitle>Overview</SectionTitle>
                  <p className="mt-3 text-white/75 leading-relaxed">
                    {activeJob.description}
                  </p>

                  {/* If your Career object has extra fields, render them safely */}
                  {"responsibilities" in (activeJob as any) && Array.isArray((activeJob as any).responsibilities) && (
                    <div className="mt-8">
                      <SectionTitle>Responsibilities</SectionTitle>
                      <ul className="mt-3 space-y-2 text-white/75 leading-relaxed list-disc pl-5">
                        {(activeJob as any).responsibilities.map((x: string, idx: number) => (
                          <li key={idx}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {"requirements" in (activeJob as any) && Array.isArray((activeJob as any).requirements) && (
                    <div className="mt-8">
                      <SectionTitle>Requirements</SectionTitle>
                      <ul className="mt-3 space-y-2 text-white/75 leading-relaxed list-disc pl-5">
                        {(activeJob as any).requirements.map((x: string, idx: number) => (
                          <li key={idx}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* fallback helper if your dataset only has description */}
                  {!("responsibilities" in (activeJob as any)) && !("requirements" in (activeJob as any)) && (
                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-white/70 leading-relaxed">
                        Want full job scope & requirements? Email us and we’ll send the complete
                        role details.
                      </p>
                    </div>
                  )}
                </div>

                {/* footer */}
                <div className="p-6 md:p-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-sm text-white/60">
                    Send your CV / portfolio to{" "}
                    <a className="text-white/80 hover:text-white underline" href={`mailto:${activeJob.applyEmail}`}>
                      {activeJob.applyEmail}
                    </a>
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={`mailto:${activeJob.applyEmail}?subject=${encodeURIComponent(
                        `Application — ${activeJob.title}`
                      )}`}
                      className="inline-flex items-center justify-center rounded-full bg-white text-neutral-950 px-5 py-2.5 text-sm tracking-wide hover:opacity-90 transition"
                    >
                      Apply Now <span className="ml-2">→</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setOpenId(null)}
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/80 hover:text-white hover:border-white/40 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-white/20" />
      <h4 className="text-xs tracking-[0.28em] uppercase text-white/60">{children}</h4>
    </div>
  );
}

