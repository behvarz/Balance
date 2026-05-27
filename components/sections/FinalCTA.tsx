"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function FinalCTA() {
  const { content } = useLanguage();

  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
          className="gold-glow relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(150deg,rgba(21,21,21,0.93),rgba(14,14,14,0.98))] px-8 py-14 text-center md:px-14 md:py-20"
        >
          <div className="absolute -top-20 right-10 h-44 w-44 rounded-full bg-[#1FA15A]/24 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-[#D89B47]/22 blur-3xl" />

          <h2 className="relative font-display text-5xl leading-tight text-[#F5F5F5] md:text-7xl">
            {content.finalCta.title}
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#A1A1A1] md:text-xl">
            {content.finalCta.subtitle}
          </p>

          <div className="relative mt-10">
            <Link
              href="tel:+37496536006"
              className="inline-flex items-center rounded-full border border-white/14 bg-[#151515]/72 px-8 py-3 text-xs tracking-[0.24em] text-[#F5F5F5] uppercase hover:-translate-y-0.5 hover:border-[#1FA15A]/60 hover:bg-[#0E6B3D]/24"
            >
              {content.actions.orderCoffee}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
