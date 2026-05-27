"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-white/8 bg-[#050505]/90">
      <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-6 py-14 md:grid-cols-2 md:px-10 lg:px-16">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] text-[#F5F5F5] uppercase">
            Balance
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#A1A1A1]">
            {content.footer.description}
          </p>
        </div>

        <div className="grid gap-5 text-sm text-[#A1A1A1] md:justify-end md:text-right">
          <Link
            href="https://www.instagram.com/balance.wellness"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1FA15A]"
          >
            instagram.com/balance.wellness
          </Link>
          <div>
            <p>+37496536006</p>
            <p>+37433536006</p>
          </div>
          <p>Sundukyan 64/3, Yerevan</p>
        </div>
      </div>

      <div className="border-t border-white/8 py-6 text-center text-xs tracking-[0.16em] text-[#6B6B6B] uppercase">
        (c) {new Date().getFullYear()} Balance. {content.footer.rights}
      </div>
      <div className="pb-8 text-center text-xs tracking-[0.16em] text-[#6B6B6B]">
        Powered by{" "}
        <Link
          href="https://orscale.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#D89B47] hover:text-[#F5F5F5]"
        >
          Orscale
        </Link>
      </div>
    </footer>
  );
}
