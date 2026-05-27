"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ExperienceSection() {
  const { content } = useLanguage();

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="section-shell p-6 md:p-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.22em] text-[#E3A858] uppercase">
                {content.experience.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[#F2F6F8] md:text-5xl">
                {content.experience.title}
              </h2>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#20313C]/70 px-4 py-3 text-sm text-[#B8C2C8]">
              <p>For membership: 041 910 911</p>
              <p>Administration: 041 910 916</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {content.experience.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="rounded-2xl border border-white/10 bg-[#1F2F3A]/68 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/14 bg-[#253947] text-xs text-[#E3A858]">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-2xl text-[#F2F6F8]">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#B8C2C8]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
