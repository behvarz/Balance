"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const localeByLanguage = {
  am: {
    address: "Հասցե",
    hours: "Աշխատաժամեր",
    phones: "Հեռախոսներ",
    disciplines: "Ուղղություններ",
    liveEnergy: "Կենդանի էներգիա",
    membership: "Անդամակցություն",
    administration: "Ադմինիստրացիա",
    services: "Մարզասրահ | Խմբային մարզումներ | Լողավազան | Սպա | Մերսում",
    week: "Երկ-Շաբ: 07:00-23:00",
    sunday: "Կիր: 08:00-22:00",
  },
  en: {
    address: "Address",
    hours: "Hours",
    phones: "Phones",
    disciplines: "Disciplines",
    liveEnergy: "Live Energy",
    membership: "Membership",
    administration: "Administration",
    services: "Gym | Group Workouts | Pool | Spa | Massage",
    week: "Mon-Sat: 07:00-23:00",
    sunday: "Sun: 08:00-22:00",
  },
  ru: {
    address: "Адрес",
    hours: "Часы работы",
    phones: "Телефоны",
    disciplines: "Направления",
    liveEnergy: "Живая энергия",
    membership: "Абонементы",
    administration: "Администрация",
    services: "Зал | Групповые тренировки | Бассейн | Спа | Массаж",
    week: "Пн-Сб: 07:00-23:00",
    sunday: "Вс: 08:00-22:00",
  },
} as const;

export default function RitualStorySection() {
  const { content, language } = useLanguage();
  const isCompactLocale = language !== "en";
  const t = localeByLanguage[language];

  return (
    <section id="ritual" className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
          className="grid gap-5 lg:grid-cols-12"
        >
          <article className="section-shell overflow-hidden p-6 md:p-9 lg:col-span-8">
            <p
              className={`text-[11px] text-[#E3A858] ${
                isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.26em] uppercase"
              }`}
            >
              {content.ritual.eyebrow}
            </p>
            <h2 className={`mt-4 max-w-4xl break-words font-display leading-tight text-[#F2F6F8] ${isCompactLocale ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"}`}>
              {content.ritual.title}
            </h2>
            <p className="mt-5 max-w-3xl break-words text-sm leading-relaxed text-[#C0CBD2] md:text-base">
              {content.ritual.description}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {content.ritual.paragraphs.map((paragraph) => (
                <div key={paragraph} className="rounded-xl border border-white/12 bg-[#1F2F3A]/72 p-4">
                  <p className="break-words text-sm leading-relaxed text-[#CBD4DA]">{paragraph}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 relative overflow-hidden rounded-2xl border border-white/12">
              <div className="relative h-52 md:h-64">
                <Image
                  src="/images/product-daily.png"
                  alt="Functional zone"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,30,0.1)_0%,rgba(15,22,30,0.85)_100%)]" />
              <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-4">
                <p className="max-w-xl break-words text-sm leading-relaxed text-[#F2F6F8]">
                  {content.ritual.location}
                </p>
                <span className={`rounded-full border border-white/16 bg-[#223744]/80 px-3 py-1 text-[10px] text-[#E3A858] ${isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.16em] uppercase"}`}>
                  {t.liveEnergy}
                </span>
              </div>
            </div>
          </article>

          <aside className="section-shell flex flex-col gap-4 p-6 md:p-8 lg:col-span-4">
            <div className="rounded-2xl border border-white/12 bg-[#21313E]/76 p-4">
              <p className={`text-[11px] text-[#AFC0CA] ${isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.18em] uppercase"}`}>{t.address}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#F2F6F8]">Dzorap 40/2, Yerevan, Armenia 0002</p>
            </div>

            <div className="rounded-2xl border border-white/12 bg-[#21313E]/76 p-4">
              <p className={`text-[11px] text-[#AFC0CA] ${isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.18em] uppercase"}`}>{t.hours}</p>
              <p className="mt-2 text-sm text-[#F2F6F8]">{t.week}</p>
              <p className="text-sm text-[#F2F6F8]">{t.sunday}</p>
            </div>

            <div className="rounded-2xl border border-white/12 bg-[#21313E]/76 p-4">
              <p className={`text-[11px] text-[#AFC0CA] ${isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.18em] uppercase"}`}>{t.phones}</p>
              <p className="mt-2 text-sm text-[#F2F6F8]">{t.membership}: 041910911</p>
              <p className="text-sm text-[#F2F6F8]">{t.administration}: 041910916</p>
            </div>

            <div className="rounded-2xl border border-white/12 bg-[#21313E]/76 p-4">
              <p className={`text-[11px] text-[#AFC0CA] ${isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.18em] uppercase"}`}>{t.disciplines}</p>
              <p className="mt-2 break-words text-sm leading-relaxed text-[#F2F6F8]">{t.services}</p>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
