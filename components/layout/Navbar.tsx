"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { languageCodes, type LanguageCode } from "@/lib/site-content";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {
  const { content, language, setLanguage } = useLanguage();
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-[#101922]/74 backdrop-blur-xl shadow-[0_14px_38px_rgba(0,0,0,0.36)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="#home" className="group">
          <Image
            src="/logo-white.png"
            alt="Balance Sport Complex"
            width={220}
            height={64}
            className="h-9 w-auto md:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#F2F6F8]/84 hover:text-[#28C279]"
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
            className="inline-flex items-center justify-center rounded-full border border-white/18 bg-[#24313B]/74 px-5 py-2.5 text-[11px] tracking-[0.2em] text-[#F2F6F8] hover:-translate-y-0.5 hover:border-[#28C279]/62 hover:bg-[#14945D]/26"
          >
            {content.actions.orderCoffee}
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
            className="rounded-full border border-white/16 bg-[#25323C]/66 px-4 py-2 text-[10px] tracking-[0.16em] text-[#B8C2C8]"
            aria-label={content.actions.menu}
          >
            {isMobileMenuOpen ? content.actions.close : content.actions.menu}
          </button>
        </div>
      </div>

      {hasLanguageToggle && isLanguageMenuOpen ? (
        <div className="px-6 pb-4 md:hidden">
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
        <div className="px-6 pb-4 md:hidden">
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
                {content.actions.orderCoffee}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
