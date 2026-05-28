"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function FinalCTA() {
  const { content, language } = useLanguage();
  const adminLabel =
    language === "am"
      ? "Ադմինիստրացիա"
      : language === "ru"
        ? "Администрация"
        : "Administration";

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
          className="section-shell relative overflow-hidden p-6 md:p-10"
        >
          <div className="pointer-events-none absolute -top-20 left-10 h-48 w-48 rounded-full bg-[#28C279]/18 blur-3xl" />
          <div className="pointer-events-none absolute -right-12 -bottom-16 h-44 w-44 rounded-full bg-[#D89B47]/20 blur-3xl" />

          <div className="relative grid gap-7 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl leading-tight text-[#F2F6F8] md:text-5xl">
                {content.finalCta.title}
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#C0CBD2] md:text-base">
                {content.finalCta.subtitle}
              </p>
            </div>

            <div className="grid gap-3 lg:col-span-5 lg:grid-cols-2">
              <Link
                href="tel:+37441910911"
                className="inline-flex items-center justify-center rounded-xl border border-white/16 bg-[#243542]/74 px-5 py-3 text-[11px] tracking-[0.16em] text-[#F2F6F8] uppercase hover:border-[#28C279]/62 hover:bg-[#14945D]/24"
              >
                {content.actions.orderCoffee}
              </Link>
              <Link
                href="tel:+37441910916"
                className="inline-flex items-center justify-center rounded-xl border border-white/16 bg-[#243542]/74 px-5 py-3 text-[11px] tracking-[0.16em] text-[#F2F6F8] uppercase hover:border-[#28C279]/62 hover:bg-[#14945D]/24"
              >
                {adminLabel}
              </Link>
              <Link
                href="https://www.instagram.com/balancesportcomplex/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/16 bg-[#243542]/74 px-5 py-3 text-[11px] tracking-[0.16em] text-[#F2F6F8] uppercase hover:border-[#28C279]/62 hover:bg-[#14945D]/24"
              >
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/p/Balance-Sport-Complex-61556143100729/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/16 bg-[#243542]/74 px-5 py-3 text-[11px] tracking-[0.16em] text-[#F2F6F8] uppercase hover:border-[#28C279]/62 hover:bg-[#14945D]/24"
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
