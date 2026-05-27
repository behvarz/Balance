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
          className="gold-glow relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-[linear-gradient(150deg,rgba(31,43,53,0.9),rgba(24,34,43,0.94))] px-8 py-14 text-center md:px-14 md:py-20"
        >
          <div className="absolute -top-20 right-10 h-44 w-44 rounded-full bg-[#28C279]/22 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-[#E3A858]/22 blur-3xl" />

          <h2 className="relative font-display text-5xl leading-tight text-[#F2F6F8] md:text-7xl">
            {content.finalCta.title}
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#B8C2C8] md:text-xl">
            {content.finalCta.subtitle}
          </p>

          <div className="relative mt-10">
            <Link
              href="tel:+37441910911"
              className="inline-flex items-center rounded-full border border-white/16 bg-[#24313B]/74 px-8 py-3 text-xs tracking-[0.24em] text-[#F2F6F8] uppercase hover:-translate-y-0.5 hover:border-[#28C279]/62 hover:bg-[#14945D]/24"
            >
              {content.actions.orderCoffee}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
