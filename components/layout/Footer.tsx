"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[#121C25]/86">
      <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-6 py-14 md:grid-cols-2 md:px-10 lg:px-16">
        <div>
          <p className="font-display text-2xl tracking-[0.14em] text-[#F2F6F8] uppercase">
            Balance
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#B8C2C8]">
            {content.footer.description}
          </p>
        </div>

        <div className="grid gap-5 text-sm text-[#B8C2C8] md:justify-end md:text-right">
          <Link
            href="https://www.instagram.com/balancesportcomplex/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#28C279]"
          >
            instagram.com/balancesportcomplex
          </Link>
          <Link
            href="https://www.facebook.com/p/Balance-Sport-Complex-61556143100729/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#28C279]"
          >
            facebook.com/Balance-Sport-Complex
          </Link>
          <div>
            <p>For membership: 041 910 911</p>
            <p>Administration: 041 910 916</p>
          </div>
          <p>Dzorap 40/2, Yerevan, Armenia, 0002</p>
          <p>Mon-Sat: 07:00-23:00 / Sun: 08:00-22:00</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs tracking-[0.16em] text-[#7F8B93] uppercase">
        (c) {new Date().getFullYear()} Balance. {content.footer.rights}
      </div>
      <div className="pb-8 text-center text-xs tracking-[0.16em] text-[#7F8B93]">
        Powered by{" "}
        <Link
          href="https://orscale.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#E3A858] hover:text-[#F2F6F8]"
        >
          Orscale
        </Link>
      </div>
    </footer>
  );
}
