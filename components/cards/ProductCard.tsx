"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/site-content";
import { useLanguage } from "@/components/providers/LanguageProvider";

type ProductCardProps = {
  product: Product;
  index: number;
};

const productVisuals = [
  { image: "/images/product-signature.png" },
  { image: "/images/product-daily.png" },
  { image: "/images/product-midnight.png" },
];

export default function ProductCard({ product, index }: ProductCardProps) {
  const { content } = useLanguage();
  const visual = productVisuals[index % productVisuals.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group gold-glow rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(31,43,53,0.86),rgba(24,34,43,0.9))] p-6 md:p-8"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#24313B]/58 p-5">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={visual.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover opacity-72 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-78"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(40,194,121,0.2)_0%,rgba(36,49,59,0.18)_45%,rgba(15,21,27,0.58)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(227,168,88,0.18),transparent_42%)]" />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
      </div>

      <div className="mt-6">
        <h3 className="font-display text-3xl text-[#F2F6F8]">{product.name}</h3>
        <p className="mt-3 text-sm tracking-[0.12em] text-[#E3A858] uppercase">
          {product.tastingNote}
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#B8C2C8]">
          {product.description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm tracking-[0.2em] text-[#B8C2C8] uppercase">
          {content.actions.from}
        </span>
        <span className="font-display text-3xl text-[#28C279]">{product.price}</span>
      </div>
    </motion.article>
  );
}
