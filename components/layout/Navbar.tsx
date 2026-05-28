"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { languageCodes, type LanguageCode } from "@/lib/site-content";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {
  const { content, language, setLanguage } = useLanguage();
  const isCompactLocale = language !== "en";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsLanguageMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { label: content.nav.home, href: "#home" },
    { label: content.nav.collection, href: "#collection" },
    { label: content.nav.ritual, href: "#ritual" },
    { label: content.nav.contact, href: "#contact" },
  ];
  const hasLanguageToggle = languageCodes.length > 1;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 transition-all duration-500 md:px-6">
      <div
        className={`mx-auto flex w-full max-w-[1320px] items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl md:px-6 ${
          isScrolled
            ? "border-white/14 bg-[#111A24]/90 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
            : "border-white/10 bg-[#111A24]/68"
        }`}
      >
        <Link href="#home" className="group">
          <Image
            src="/logo-white.png"
            alt="Balance Sport Complex"
            width={220}
            height={64}
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>

        <nav
          className={`hidden items-center lg:flex ${
            isCompactLocale ? "gap-4 text-[10px] tracking-[0.06em]" : "gap-6 text-[11px] tracking-[0.16em]"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="max-w-[11rem] truncate text-[#F2F6F8]/84 transition hover:text-[#28C279]"
              title={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {hasLanguageToggle ? (
            <div className="flex items-center rounded-full border border-white/14 bg-[#25323C]/54 p-1">
              {languageCodes.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code as LanguageCode)}
                  className={`rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] transition-colors ${
                    language === code
                      ? "bg-[#14945D]/42 text-[#F2F6F8]"
                      : "text-[#B8C2C8] hover:text-[#F2F6F8]"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          ) : null}

          <Link
            href="tel:+37441910911"
            className="inline-flex items-center justify-center rounded-full border border-white/18 bg-[#24313B]/74 px-4 py-2 text-[11px] tracking-[0.14em] text-[#F2F6F8] hover:-translate-y-0.5 hover:border-[#28C279]/62 hover:bg-[#14945D]/26"
          >
            041910911
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {hasLanguageToggle ? (
            <button
              type="button"
              onClick={() => {
                setIsLanguageMenuOpen((prev) => !prev);
                setIsMobileMenuOpen(false);
              }}
              className="rounded-full border border-white/16 bg-[#25323C]/66 px-3 py-2 text-[10px] tracking-[0.16em] text-[#B8C2C8]"
              aria-label={content.actions.language}
            >
              {language.toUpperCase()}
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              setIsLanguageMenuOpen(false);
            }}
            className="rounded-full border border-white/16 bg-[#25323C]/66 px-4 py-2 text-[10px] tracking-[0.16em] text-[#B8C2C8] lg:hidden"
            aria-label={content.actions.menu}
          >
            {isMobileMenuOpen ? content.actions.close : content.actions.menu}
          </button>
        </div>
      </div>

      {hasLanguageToggle && isLanguageMenuOpen ? (
        <div className="px-2 pt-2 md:hidden">
          <div className="mx-auto w-full max-w-[1320px] rounded-2xl border border-white/12 bg-[#15212B]/88 p-3 backdrop-blur-xl">
            <p className="mb-2 text-[10px] tracking-[0.14em] text-[#D89B47] uppercase">
              {content.actions.language}
            </p>
            <div className="flex gap-2">
              {languageCodes.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setLanguage(code as LanguageCode);
                    setIsLanguageMenuOpen(false);
                  }}
                  className={`rounded-full px-3 py-2 text-[11px] tracking-[0.14em] ${
                    language === code
                      ? "bg-[#14945D]/42 text-[#F2F6F8]"
                      : "bg-[#24313B]/70 text-[#B8C2C8]"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {isMobileMenuOpen ? (
        <div className="px-2 pt-2 md:hidden">
          <div className="mx-auto w-full max-w-[1320px] rounded-2xl border border-white/12 bg-[#15212B]/88 p-3 backdrop-blur-xl">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-[#F2F6F8]/88 hover:bg-[#24313B]/76"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3">
              <Link
                href="tel:+37441910911"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/16 bg-[#24313B]/76 px-4 py-2.5 text-[11px] tracking-[0.18em] text-[#F2F6F8]"
              >
                041910911
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
