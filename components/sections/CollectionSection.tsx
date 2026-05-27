"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CollectionSection() {
  const { content } = useLanguage();

  return (
    <section id="collection" className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="section-shell p-6 md:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.22em] text-[#E3A858] uppercase">
                {content.collection.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[#F2F6F8] md:text-5xl">
                {content.collection.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#B8C2C8] md:text-lg">
                {content.collection.description}
              </p>
            </div>

            <div className="rounded-2xl border border-white/12 bg-[#21313C]/65 px-5 py-4">
              <p className="text-xs tracking-[0.16em] text-[#B8C2C8] uppercase">Balance Sport Complex</p>
              <p className="mt-2 text-sm text-[#F2F6F8]">Gym | Group Workouts | Pool | Spa | Massage</p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.collection.products.map((product, index) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  ease: [0.2, 0.8, 0.2, 1],
                  delay: index * 0.06,
                }}
                className="group rounded-2xl border border-white/12 bg-[#1E2D37]/78 p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs tracking-[0.2em] text-[#E3A858] uppercase">
                    0{index + 1}
                  </span>
                  <span className="rounded-full border border-white/14 bg-[#233542]/70 px-3 py-1 text-xs text-[#B8C2C8]">
                    {product.tastingNote}
                  </span>
                </div>

                <div className="relative mt-4 h-44 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={
                      index === 0
                        ? "/images/product-signature.png"
                        : index === 1
                          ? "/images/product-daily.png"
                          : "/images/product-midnight.png"
                    }
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-78 transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,21,27,0)_40%,rgba(15,21,27,0.72)_100%)]" />
                </div>

                <h3 className="mt-5 font-display text-3xl leading-tight text-[#F2F6F8]">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B8C2C8]">{product.description}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs tracking-[0.18em] text-[#B8C2C8] uppercase">
                    {content.actions.from}
                  </span>
                  <span className="font-display text-3xl text-[#28C279]">{product.price}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
