"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function RitualStorySection() {
  const { content } = useLanguage();

  return (
    <section id="ritual" className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="grid gap-6 lg:grid-cols-12"
        >
          <article className="section-shell p-6 md:p-8 lg:col-span-7">
            <p className="text-xs tracking-[0.22em] text-[#E3A858] uppercase">
              {content.ritual.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[#F2F6F8] md:text-5xl">
              {content.ritual.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#B8C2C8] md:text-lg">
              {content.ritual.description}
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {content.ritual.paragraphs.map((paragraph) => (
                <p key={paragraph} className="rounded-xl border border-white/10 bg-[#1D2C36]/70 p-4 text-sm leading-relaxed text-[#B8C2C8]">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <aside className="section-shell flex flex-col justify-between p-6 md:p-8 lg:col-span-5">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#E3A858] uppercase">Complex Data</p>
              <p className="mt-3 text-2xl font-semibold text-[#F2F6F8]">{content.ritual.location}</p>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-xl border border-white/10 bg-[#1D2C36]/66 p-4">
                <p className="text-xs tracking-[0.16em] text-[#B8C2C8] uppercase">Working Hours</p>
                <p className="mt-2 text-lg text-[#F2F6F8]">Mon-Sat 07:00-23:00</p>
                <p className="text-lg text-[#F2F6F8]">Sun 08:00-22:00</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#1D2C36]/66 p-4">
                <p className="text-xs tracking-[0.16em] text-[#B8C2C8] uppercase">Disciplines</p>
                <p className="mt-2 text-sm leading-relaxed text-[#F2F6F8]">Gym | Group workouts | Pool | Spa | Massage</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#1D2C36]/66 p-4">
                <p className="text-xs tracking-[0.16em] text-[#B8C2C8] uppercase">Address</p>
                <p className="mt-2 text-sm leading-relaxed text-[#F2F6F8]">Dzorap 40/2, Yerevan, Armenia 0002</p>
              </div>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
