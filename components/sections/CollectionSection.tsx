"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const localizedSection = {
  am: {
    week: "Երկ-Շաբ",
    sunday: "Կիր",
    poolSpa: "Լողավազան + Սպա",
    recovery: "Վերականգնում",
    disciplines: "Մարզասրահ | Խմբային մարզումներ | Լողավազան | Սպա | Մերսում",
  },
  en: {
    week: "Mon-Sat",
    sunday: "Sun",
    poolSpa: "Pool + Spa",
    recovery: "Recovery",
    disciplines: "Gym | Group Workouts | Pool | Spa | Massage",
  },
  ru: {
    week: "Пн-Сб",
    sunday: "Вс",
    poolSpa: "Бассейн + Спа",
    recovery: "Восстановление",
    disciplines: "Зал | Групповые тренировки | Бассейн | Спа | Массаж",
  },
} as const;

export default function CollectionSection() {
  const { content, language } = useLanguage();
  const isCompactLocale = language !== "en";
  const locale = localizedSection[language];
  const sectionStats = [
    { label: "07:00-23:00", note: locale.week },
    { label: "08:00-22:00", note: locale.sunday },
    { label: locale.poolSpa, note: locale.recovery },
  ];

  return (
    <section id="collection" className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
          className="section-shell overflow-hidden p-6 md:p-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p
                className={`text-[11px] text-[#E3A858] ${
                  isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.26em] uppercase"
                }`}
              >
                {content.collection.eyebrow}
              </p>
              <h2
                className={`mt-4 break-words font-display leading-tight text-[#F2F6F8] ${
                  isCompactLocale ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"
                }`}
              >
                {content.collection.title}
              </h2>
              <p className="mt-5 break-words text-sm leading-relaxed text-[#C0CBD2] md:text-base">
                {content.collection.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 self-start sm:grid-cols-3 lg:self-auto">
              {sectionStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/14 bg-[#21313D]/70 px-3 py-2 text-center"
                >
                  <p className="break-words text-[11px] font-semibold leading-tight text-[#F2F6F8]">{stat.label}</p>
                  <p className="mt-1 break-words text-[10px] tracking-[0.08em] text-[#AFC0CA]">
                    {stat.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            <article className="group relative overflow-hidden rounded-2xl border border-white/12 lg:col-span-6">
              <div className="relative h-[360px] md:h-[440px]">
                <Image
                  src="/images/product-signature.png"
                  alt="Balance strength floor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,30,0)_42%,rgba(15,22,30,0.86)_100%)]" />
              <div className="absolute right-5 bottom-5 left-5">
                <p className="text-[10px] tracking-[0.2em] text-[#E3A858] uppercase">Balance Sport Complex</p>
                <h3 className="mt-2 break-words font-display text-lg leading-snug text-[#F2F6F8] md:text-2xl">
                  {locale.disciplines}
                </h3>
              </div>
            </article>

            <div className="grid gap-4 lg:col-span-6">
              {content.collection.products.map((product, index) => (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.65, delay: index * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
                  className="rounded-2xl border border-white/12 bg-[#20303B]/72 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-[11px] text-[#B7C5CD] ${isCompactLocale ? "tracking-[0.08em]" : "tracking-[0.18em] uppercase"}`}>{content.actions.from}</p>
                      <p className="mt-1 font-display text-3xl text-[#28C279]">{product.price}</p>
                    </div>
                    <span className="rounded-full border border-white/14 bg-[#223540]/75 px-3 py-1 text-[10px] tracking-[0.12em] text-[#DDE5EA] uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 break-words font-display text-xl text-[#F2F6F8] md:text-2xl">{product.name}</h3>
                  <p className="mt-2 break-words text-sm leading-relaxed text-[#C0CBD2]">{product.description}</p>
                  <p className="mt-3 break-words text-[11px] tracking-[0.08em] text-[#9AB1BE]">{product.tastingNote}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
