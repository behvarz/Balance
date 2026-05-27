import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
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
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] font-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
