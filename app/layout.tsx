import type { Metadata } from "next";
import { Manrope, Montserrat, Noto_Sans_Armenian } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const notoArmenian = Noto_Sans_Armenian({
  variable: "--font-armenian",
  subsets: ["armenian"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balance | Luxury Wellness Sport Complex",
  description:
    "Cinematic luxury wellness experiences, performance training, and restorative rituals by Balance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="am"
      className={`${montserrat.variable} ${manrope.variable} ${notoArmenian.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] font-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
