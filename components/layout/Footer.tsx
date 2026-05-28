"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

const footerLocale = {
  am: {
    contact: "Կապ",
    social: "Սոցցանցեր",
    membership: "Անդամակցություն",
    administration: "Ադմինիստրացիա",
    weekHours: "Երկ-Շաբ: 07:00-23:00",
    sundayHours: "Կիր: 08:00-22:00",
    poweredBy: "Ստեղծված է",
  },
  en: {
    contact: "Contact",
    social: "Social",
    membership: "Membership",
    administration: "Administration",
    weekHours: "Mon-Sat: 07:00-23:00",
    sundayHours: "Sun: 08:00-22:00",
    poweredBy: "Powered by",
  },
  ru: {
    contact: "Контакты",
    social: "Соцсети",
    membership: "Абонементы",
    administration: "Администрация",
    weekHours: "Пн-Сб: 07:00-23:00",
    sundayHours: "Вс: 08:00-22:00",
    poweredBy: "Разработка",
  },
} as const;

export default function Footer() {
  const { content, language } = useLanguage();
  const t = footerLocale[language];

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
            <p className="text-[11px] tracking-[0.2em] text-[#D89B47] uppercase">{t.contact}</p>
            <div className="mt-4 space-y-2 text-sm text-[#C6D1D7]">
              <p>{t.membership}: 041910911</p>
              <p>{t.administration}: 041910916</p>
              <p>Dzorap 40/2, Yerevan, Armenia, 0002</p>
              <p>{t.weekHours}</p>
              <p>{t.sundayHours}</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] tracking-[0.2em] text-[#D89B47] uppercase">{t.social}</p>
            <div className="mt-4 grid gap-3 text-sm">
              <Link
                href="https://www.instagram.com/balancesportcomplex/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/12 bg-[#223643]/68 px-4 py-3 text-[#F2F6F8] hover:text-[#28C279]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
                <span>Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/p/Balance-Sport-Complex-61556143100729/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/12 bg-[#223643]/68 px-4 py-3 text-[#F2F6F8] hover:text-[#28C279]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.55c0-.95.26-1.6 1.63-1.6h1.75V4.1c-.3-.04-1.32-.1-2.5-.1-2.48 0-4.18 1.5-4.18 4.28v2.38H7.4v3.2h2.8V22h3.3Z" />
                </svg>
                <span>Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-[11px] tracking-[0.16em] text-[#7F8B93] uppercase">
        (c) {new Date().getFullYear()} Balance. {content.footer.rights}
      </div>
      <div className="pb-8 text-center text-xs tracking-[0.14em] text-[#7F8B93]">
        {t.poweredBy}{" "}
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
