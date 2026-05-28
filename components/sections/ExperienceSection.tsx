"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const localeByLanguage = {
  am: {
    recoverySystem: "Վերականգնման համակարգ",
    recoveryText: "Սաունա, սառը թերապիա, շնչառական հանգստացում և անհատական վերականգնման փուլեր։",
    directLines: "Ուղիղ կապ",
    membership: "Անդամակցություն",
    administration: "Ադմինիստրացիա",
  },
  en: {
    recoverySystem: "Recovery System",
    recoveryText: "Sauna, cold therapy, breath-led cooldown and tailored reset protocols.",
    directLines: "Direct Lines",
    membership: "Membership",
    administration: "Administration",
  },
  ru: {
    recoverySystem: "Система восстановления",
    recoveryText: "Сауна, холодовая терапия, дыхательное расслабление и персональные протоколы восстановления.",
    directLines: "Прямой контакт",
    membership: "Абонементы",
    administration: "Администрация",
  },
} as const;

export default function ExperienceSection() {
  const { content, language } = useLanguage();
  const isCompactLocale = language !== "en";
  const t = localeByLanguage[language];

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
          className="section-shell p-6 md:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className={`text-[11px] text-[#E3A858] ${isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.26em] uppercase"}`}>
                {content.experience.eyebrow}
              </p>
              <h2 className={`mt-4 max-w-3xl break-words font-display leading-tight text-[#F2F6F8] ${isCompactLocale ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"}`}>
                {content.experience.title}
              </h2>

              <div className="mt-7 space-y-3">
                {content.experience.items.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
                    className="rounded-xl border border-white/12 bg-[#20303C]/70 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#2A3F4E] text-[10px] text-[#E3A858]">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="break-words font-display text-xl text-[#F2F6F8]">{item.title}</h3>
                        <p className="mt-2 break-words text-sm leading-relaxed text-[#C0CBD2]">{item.description}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:col-span-5">
              <article className="relative overflow-hidden rounded-2xl border border-white/12">
                <div className="relative h-56 md:h-72">
                  <Image
                    src="/images/product-midnight.png"
                    alt="Recovery lounge"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,30,0.1)_30%,rgba(15,22,30,0.86)_100%)]" />
                <div className="absolute right-4 bottom-4 left-4">
                  <p className={`text-[10px] text-[#E3A858] ${isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.2em] uppercase"}`}>{t.recoverySystem}</p>
                  <p className="mt-2 break-words text-sm leading-relaxed text-[#F2F6F8]">
                    {t.recoveryText}
                  </p>
                </div>
              </article>

              <div className="rounded-2xl border border-white/12 bg-[#20303C]/70 p-4">
                <p className={`text-[11px] text-[#AFC0CA] ${isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.16em] uppercase"}`}>{t.directLines}</p>
                <p className="mt-2 text-sm text-[#F2F6F8]">{t.membership}: 041910911</p>
                <p className="text-sm text-[#F2F6F8]">{t.administration}: 041910916</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
