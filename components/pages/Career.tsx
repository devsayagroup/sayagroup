"use client";

import type { Career } from "@/lib/data-career";

type Props = {
  careers: Career[];
};

export default function CareerList({ careers }: Props) {
  return (
    <section className="bg-white px-6 md:px-32 py-16">
      <div className="">
        {/* <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Open Positions
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Join a growing group of hospitality, lifestyle, and craftsmanship
            brands driven by quality and thoughtful experiences.
          </p>
        </div> */}

        {/* Jobs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {careers.map((job) => (
            <article
              key={job.id}
              className="border border-black/10 bg-black/90 text-white rounded-lg p-10 hover:border-black transition"
            >
              <header>
                <h3 className="text-2xl font-light tracking-tight mb-3">
                  {job.title}
                </h3>

                <div className="text-sm text-neutral-100 flex flex-wrap gap-3">
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </header>

              <p className="mt-6 text-neutral-400 leading-relaxed">
                {job.description}
              </p>

              <div className="mt-10 flex items-center justify-between">
                <a
                  href={`/career/${job.id}`}
                  className="text-sm uppercase tracking-widest border-b border-white pb-1 hover:tracking-[0.25em] transition-all"
                >
                  View Details
                </a>

                <a
                  href={`mailto:${job.applyEmail}`}
                  className="text-sm text-neutral-500 hover:text-white transition"
                >
                  Apply →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
