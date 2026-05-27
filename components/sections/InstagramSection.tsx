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
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="section-shell p-6 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-12">
            <article className="lg:col-span-4">
              <p className="text-xs tracking-[0.22em] text-[#E3A858] uppercase">
                {content.instagram.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[#F2F6F8] md:text-5xl">
                {content.instagram.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#B8C2C8]">{content.instagram.description}</p>

              <div className="mt-6 grid gap-3">
                <Link
                  href="https://www.instagram.com/balancesportcomplex/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/12 bg-[#223542]/72 px-4 py-3 text-sm text-[#F2F6F8] transition hover:border-[#28C279]/58"
                >
                  Instagram / @balancesportcomplex
                </Link>
                <Link
                  href="https://www.facebook.com/p/Balance-Sport-Complex-61556143100729/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/12 bg-[#223542]/72 px-4 py-3 text-sm text-[#F2F6F8] transition hover:border-[#28C279]/58"
                >
                  Facebook / Balance Sport Complex
                </Link>
              </div>
            </article>

            <div className="grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-3">
              {content.instagram.shots.map((shot, index) => (
                <motion.article
                  key={shot.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.2, 0.8, 0.2, 1],
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/12"
                >
                  <div className="relative h-40 md:h-52">
                    <Image
                      src={instagramImages[index % instagramImages.length]}
                      alt={shot.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover opacity-74 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${shot.toneClassName} opacity-35`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(15,21,27,0.74)_100%)]" />
                  <div className="absolute right-3 bottom-3 left-3">
                    <h3 className="font-display text-xl text-[#F2F6F8]">{shot.title}</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#B8C2C8]">{shot.caption}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="https://www.instagram.com/balancesportcomplex/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/16 bg-[#24313B]/72 px-6 py-3 text-xs tracking-[0.22em] text-[#F2F6F8] uppercase hover:-translate-y-0.5 hover:border-[#28C279]/56 hover:bg-[#14945D]/24"
            >
              {content.actions.followRitual}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
