"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[#121c25]/95">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-14 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/logo-white.png"
              alt="Balance Sport Complex"
              width={210}
              height={64}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#B8C5CD]">
              {content.footer.description}
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.2em] text-[#D89B47] uppercase">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-[#C6D1D7]">
              <p>Membership: 041910911</p>
              <p>Administration: 041910916</p>
              <p>Dzorap 40/2, Yerevan, Armenia, 0002</p>
              <p>Mon-Sat: 07:00-23:00</p>
              <p>Sun: 08:00-22:00</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] tracking-[0.2em] text-[#D89B47] uppercase">Social</p>
            <div className="mt-4 grid gap-3 text-sm">
              <Link
                href="https://www.instagram.com/balancesportcomplex/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/12 bg-[#223643]/68 px-4 py-3 text-[#F2F6F8] hover:text-[#28C279]"
              >
                instagram.com/balancesportcomplex
              </Link>
              <Link
                href="https://www.facebook.com/p/Balance-Sport-Complex-61556143100729/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/12 bg-[#223643]/68 px-4 py-3 text-[#F2F6F8] hover:text-[#28C279]"
              >
                facebook.com/Balance-Sport-Complex
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-[11px] tracking-[0.16em] text-[#7F8B93] uppercase">
        (c) {new Date().getFullYear()} Balance. {content.footer.rights}
      </div>
      <div className="pb-8 text-center text-xs tracking-[0.14em] text-[#7F8B93]">
        Powered by{" "}
        <Link
          href="https://orscale.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#D89B47] hover:text-[#F2F6F8]"
        >
          Orscale
        </Link>
      </div>
    </footer>
  );
}
