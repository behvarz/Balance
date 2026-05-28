"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const instagramImages = [
  "/images/ig-1.png",
  "/images/ig-2.png",
  "/images/ig-3.png",
  "/images/ig-4.png",
  "/images/ig-5.png",
  "/images/ig-6.png",
];

export default function InstagramSection() {
  const { content } = useLanguage();

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
          className="section-shell p-6 md:p-10"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.26em] text-[#E3A858] uppercase">{content.instagram.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-[#F2F6F8] md:text-5xl">{content.instagram.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-[#C0CBD2] md:text-base">{content.instagram.description}</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <Link
                href="https://www.instagram.com/balancesportcomplex/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/12 bg-[#223643]/72 px-4 py-3 text-[11px] tracking-[0.12em] text-[#F2F6F8] uppercase hover:border-[#28C279]/58"
              >
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/p/Balance-Sport-Complex-61556143100729/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/12 bg-[#223643]/72 px-4 py-3 text-[11px] tracking-[0.12em] text-[#F2F6F8] uppercase hover:border-[#28C279]/58"
              >
                Facebook
              </Link>
            </div>
          </div>

          <div className="mt-9 grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[210px] lg:grid-cols-4">
            {content.instagram.shots.map((shot, index) => {
              const spanClassName =
                index === 0
                  ? "col-span-2 row-span-2 lg:col-span-2"
                  : index === 3
                    ? "col-span-2 lg:col-span-1"
                    : "";

              return (
                <motion.article
                  key={shot.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/12 ${spanClassName}`}
                >
                  <Image
                    src={instagramImages[index % instagramImages.length]}
                    alt={shot.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${shot.toneClassName} opacity-28`} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_46%,rgba(15,22,30,0.84)_100%)]" />
                  <div className="absolute right-3 bottom-3 left-3">
                    <h3 className="font-display text-lg text-[#F2F6F8]">{shot.title}</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#C0CBD2]">{shot.caption}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="https://www.instagram.com/balancesportcomplex/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/16 bg-[#243542]/74 px-6 py-3 text-[11px] tracking-[0.2em] text-[#F2F6F8] uppercase hover:-translate-y-0.5 hover:border-[#28C279]/56 hover:bg-[#14945D]/24"
            >
              {content.actions.followRitual}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
