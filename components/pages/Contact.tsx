"use client";

import Link from "next/link";
import { motion, type Variants, useReducedMotion } from "framer-motion";

export default function ContactPage() {
  const reduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fade: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="w-full bg-white text-neutral-900">
      {/* <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl opacity-70" />
          <div className="absolute -bottom-48 right-[-140px] h-[560px] w-[560px] rounded-full bg-neutral-50 blur-3xl opacity-90" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12 py-18 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-neutral-300" />
              <span className="text-xs tracking-[0.28em] uppercase text-neutral-500">
                Contact
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em]">
              Let’s connect with
              <br className="hidden md:block" />
              Saya Group.
            </h1>

            <p className="mt-6 text-[17px] md:text-lg text-neutral-700 leading-relaxed max-w-2xl">
              For partnerships, press, leasing inquiries, or brand collaborations,
              share your details and our team will reach out.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#form"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 text-white px-6 py-3 text-sm tracking-wide hover:opacity-90 transition"
              >
                Send a Message <span className="ml-2">→</span>
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm tracking-wide text-neutral-900 hover:border-neutral-900/60 transition"
              >
                Learn About Saya Group
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* ===== CONTENT ===== */}
      <section className="py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT: INFO */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl border border-neutral-200 bg-white p-7 md:p-8 shadow-[0_18px_60px_-45px_rgba(0,0,0,0.25)]">
                <h2 className="text-xl font-medium tracking-[-0.01em]">
                  Contact Information
                </h2>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Choose the most relevant channel and we’ll route your message to the right team.
                </p>

                <div className="mt-8 space-y-6">
                  <InfoRow label="General Inquiries">
                    <a className="text-neutral-900 hover:underline" href="mailto:admin@sayagroup.id">
                      admin@sayagroup.id
                    </a>
                  </InfoRow>

                  <InfoRow label="Partnerships / Collabs">
                    <a className="text-neutral-900 hover:underline" href="mailto:partnerships@sayagroup.id">
                      partnership@sayagroup.id
                    </a>
                  </InfoRow>

                  <InfoRow label="Phone / WhatsApp">
                    <a className="text-neutral-900 hover:underline" href="tel:+620000000000">
                      +62 813-1801-269
                    </a>
                  </InfoRow>

                  <div className="h-px w-full bg-neutral-200" />

                  <div>
                    <p className="text-xs tracking-[0.28em] uppercase text-neutral-500">
                      Office
                    </p>
                    <p className="mt-2 text-neutral-700 leading-relaxed">
                      La Riviera, PIK 2
                      <br />
                      By appointment
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/628131801269"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm tracking-wide text-neutral-900 hover:border-neutral-900/60 transition"
                  >
                    WhatsApp <span className="ml-2">→</span>
                  </a>
                  <a
                    href="mailto:admin@sayagroup.id"
                    className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm tracking-wide text-white hover:opacity-90 transition"
                  >
                    Email Us
                  </a>
                </div>
              </div>
                <div className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-7">
                    <p className="text-xs tracking-[0.28em] uppercase text-neutral-500">
                    Response
                    </p>
                    <p className="mt-3 text-neutral-700 leading-relaxed">
                    We typically respond within <span className="text-neutral-900">1–2 business days</span>.
                    For urgent matters, please reach out via WhatsApp.
                    </p>
                </div>
              {/* Optional: map embed placeholder */}
              {/* <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={fade}
                className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <p className="text-xs tracking-[0.28em] uppercase text-neutral-500">
                  Location
                </p>
                <div className="mt-4 h-[220px] rounded-2xl border border-neutral-200 bg-white grid place-items-center text-neutral-500 text-sm">
                  Map embed (optional)
                </div>
              </motion.div> */}
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.div
              id="form"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-neutral-200 bg-white p-7 md:p-10 shadow-[0_18px_60px_-45px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl md:text-3xl font-light tracking-[-0.01em]">
                  Send a message
                </h2>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Share a brief and we’ll respond within 1–2 business days.
                </p>

                {/* NOTE: wire this to your API route / form handler */}
                <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Full Name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-900/40"
                      required
                    />
                  </Field>

                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-900/40"
                      required
                    />
                  </Field>

                  <Field label="Company / Brand" className="md:col-span-2">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name (optional)"
                      className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-900/40"
                    />
                  </Field>

                  <Field label="Inquiry Type" className="md:col-span-2">
                    <select
                      name="type"
                      className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-900/40"
                      defaultValue="partnership"
                    >
                      <option value="partnership">Partnership / Collaboration</option>
                      <option value="press">Press / Media</option>
                      <option value="leasing">Leasing / Property</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </Field>

                  <Field label="Message" className="md:col-span-2">
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Tell us what you’re looking to build…"
                      className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-900/40"
                      required
                    />
                  </Field>

                  <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                    <p className="text-sm text-neutral-500">
                      By submitting, you agree to be contacted by our team.
                    </p>

                    <motion.button
                      type="submit"
                      whileHover={reduceMotion ? undefined : { y: -1 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                      className="inline-flex items-center justify-center rounded-full bg-neutral-950 text-white px-7 py-3 text-sm tracking-wide hover:opacity-90 transition"
                    >
                      Submit <span className="ml-2">→</span>
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA / LOOKING FORWARD (same style as your site) ===== */}
      <section className="relative overflow-hidden bg-neutral-950 text-white py-20 md:py-24">
        {/* Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-pattern" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>

        {/* Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-[-140px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute right-[-180px] bottom-[-180px] h-[620px] w-[620px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 md:px-10 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="text-xs tracking-[0.28em] uppercase text-white/60">
              Looking Forward
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-light">
              Building brands with long-term value
              <br className="hidden md:block" />
              and cultural relevance.
            </h2>

            <p className="mt-7 text-lg text-white/70 leading-relaxed">
              As Saya Group continues to grow, our focus remains the same:
              creating thoughtful experiences that enrich how people dine,
              gather, and live — while building brands with lasting quality
              and intentional design.
            </p>

            <div className="mt-10 flex items-center justify-center gap-3 text-sm text-white/60">
              <span className="h-[1px] w-10 bg-white/20" />
              <span>Hospitality • Lifestyle • Craft</span>
              <span className="h-[1px] w-10 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ---------- helpers ---------- */

function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={["block", className].filter(Boolean).join(" ")}>
      <span className="block text-sm text-neutral-700 mb-2">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs tracking-[0.28em] uppercase text-neutral-500">
        {label}
      </p>
      <div className="mt-2 text-neutral-800">{children}</div>
    </div>
  );
}
