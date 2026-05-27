import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import ScrollHero from "@/components/hero/ScrollHero";
import Footer from "@/components/layout/Footer";

function SectionFallback() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 py-24 md:px-10 lg:px-16">
      <div className="h-44 animate-pulse rounded-3xl border border-white/10 bg-[#24313B]/55" />
    </div>
  );
}

const CollectionSection = dynamic(
  () => import("@/components/sections/CollectionSection"),
  { loading: SectionFallback },
);
const RitualStorySection = dynamic(
  () => import("@/components/sections/RitualStorySection"),
  { loading: SectionFallback },
);
const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection"),
  { loading: SectionFallback },
);
const InstagramSection = dynamic(
  () => import("@/components/sections/InstagramSection"),
  { loading: SectionFallback },
);
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), {
  loading: SectionFallback,
});

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />

      <main>
        <ScrollHero />
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(40,194,121,0.12),transparent_38%),radial-gradient(circle_at_84%_20%,rgba(227,168,88,0.12),transparent_34%),linear-gradient(180deg,rgba(22,32,41,0.88)_0%,rgba(15,21,27,0.96)_100%)]" />
          <CollectionSection />
          <RitualStorySection />
          <ExperienceSection />
          <InstagramSection />
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
