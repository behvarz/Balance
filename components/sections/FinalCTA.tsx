"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function FinalCTA() {
  const { content } = useLanguage();

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
          className="section-shell relative overflow-hidden p-6 md:p-10"
        >
          <div className="absolute -top-16 right-10 h-40 w-40 rounded-full bg-[#28C279]/18 blur-3xl" />
          <div className="absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-[#E3A858]/18 blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="relative lg:col-span-8">
              <h2 className="font-display text-4xl leading-tight text-[#F2F6F8] md:text-6xl">
                {content.finalCta.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#B8C2C8] md:text-lg">
                {content.finalCta.subtitle}
              </p>
            </div>

            <div className="relative grid gap-3 lg:col-span-4">
              <Link
                href="tel:+37441910911"
                className="inline-flex items-center justify-center rounded-xl border border-white/16 bg-[#24313B]/74 px-6 py-3 text-xs tracking-[0.2em] text-[#F2F6F8] uppercase hover:border-[#28C279]/62 hover:bg-[#14945D]/24"
              >
                {content.actions.orderCoffee}
              </Link>
              <Link
                href="https://www.instagram.com/balancesportcomplex/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/16 bg-[#24313B]/74 px-6 py-3 text-xs tracking-[0.2em] text-[#F2F6F8] uppercase hover:border-[#28C279]/62 hover:bg-[#14945D]/24"
              >
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/p/Balance-Sport-Complex-61556143100729/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/16 bg-[#24313B]/74 px-6 py-3 text-xs tracking-[0.2em] text-[#F2F6F8] uppercase hover:border-[#28C279]/62 hover:bg-[#14945D]/24"
              >
                Facebook
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
