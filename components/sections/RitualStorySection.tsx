"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/sections/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function RitualStorySection() {
  const { content } = useLanguage();

  return (
    <section id="ritual" className="relative py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-6 md:px-10 lg:grid-cols-12 lg:px-16">
        <motion.div
          className="lg:col-span-5 lg:pt-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <SectionHeading
            eyebrow={content.ritual.eyebrow}
            title={content.ritual.title}
            description={content.ritual.description}
          />
        </motion.div>

        <motion.div
          className="relative lg:col-span-7"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="gold-glow rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(31,43,53,0.86),rgba(24,34,43,0.92))] p-8 md:p-12">
            <div className="absolute -top-5 right-9 hidden rounded-full border border-white/14 bg-[#18232C]/84 px-5 py-2 text-[10px] tracking-[0.2em] text-[#E3A858] uppercase md:block">
              {content.ritual.location}
            </div>

            <div className="space-y-7">
              {content.ritual.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-[#B8C2C8] md:text-xl md:leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
