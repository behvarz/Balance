"use client";

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
          ? "border-b border-white/8 bg-[#050505]/72 backdrop-blur-xl shadow-[0_14px_38px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="#home" className="group">
          <p className="font-display text-base tracking-[0.28em] text-[#F5F5F5] md:text-lg">
            Balance
          </p>
        </Link>

        <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#F5F5F5]/82 hover:text-[#1FA15A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {hasLanguageToggle ? (
            <div className="flex items-center rounded-full border border-white/12 bg-[#151515]/55 p-1">
              {languageCodes.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code as LanguageCode)}
                  className={`rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] transition-colors ${
                    language === code
                      ? "bg-[#0E6B3D]/38 text-[#F5F5F5]"
                      : "text-[#A1A1A1] hover:text-[#F5F5F5]"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          ) : null}

          <Link
            href="tel:+37496536006"
            className="inline-flex items-center justify-center rounded-full border border-white/14 bg-[#151515]/72 px-5 py-2.5 text-[11px] tracking-[0.22em] text-[#F5F5F5] hover:-translate-y-0.5 hover:border-[#1FA15A]/58 hover:bg-[#0E6B3D]/24"
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
              className="rounded-full border border-white/14 bg-[#151515]/65 px-3 py-2 text-[10px] tracking-[0.16em] text-[#A1A1A1]"
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
            className="rounded-full border border-white/14 bg-[#151515]/65 px-4 py-2 text-[10px] tracking-[0.16em] text-[#A1A1A1]"
            aria-label={content.actions.menu}
          >
            {isMobileMenuOpen ? content.actions.close : content.actions.menu}
          </button>
        </div>
      </div>

      {hasLanguageToggle && isLanguageMenuOpen ? (
        <div className="px-6 pb-4 md:hidden">
          <div className="mx-auto w-full max-w-[1320px] rounded-2xl border border-white/10 bg-[#050505]/88 p-3 backdrop-blur-xl">
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
                      ? "bg-[#0E6B3D]/38 text-[#F5F5F5]"
                      : "bg-[#151515]/70 text-[#A1A1A1]"
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
          <div className="mx-auto w-full max-w-[1320px] rounded-2xl border border-white/10 bg-[#050505]/88 p-3 backdrop-blur-xl">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-[#F5F5F5]/88 hover:bg-[#151515]/80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3">
              <Link
                href="tel:+37496536006"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/14 bg-[#151515]/75 px-4 py-2.5 text-[11px] tracking-[0.18em] text-[#F5F5F5]"
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
