export const languageCodes = ["en"] as const;

export type LanguageCode = (typeof languageCodes)[number];

export const defaultLanguage: LanguageCode = "en";

export type HeroMoment = {
  text: string;
  start: number;
  end: number;
};

export type Product = {
  name: string;
  description: string;
  price: string;
  tastingNote: string;
};

export type ExperienceItem = {
  title: string;
  description: string;
};

export type InstagramShot = {
  title: string;
  caption: string;
  toneClassName: string;
};

type SiteContent = {
  nav: {
    home: string;
    collection: string;
    ritual: string;
    contact: string;
  };
  actions: {
    orderCoffee: string;
    enter: string;
    followRitual: string;
    from: string;
    menu: string;
    language: string;
    close: string;
  };
  hero: {
    moments: HeroMoment[];
    exploreCollection: string;
    scrollHint: string;
  };
  collection: {
    eyebrow: string;
    title: string;
    description: string;
    products: Product[];
  };
  ritual: {
    eyebrow: string;
    title: string;
    description: string;
    location: string;
    paragraphs: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: ExperienceItem[];
  };
  instagram: {
    eyebrow: string;
    title: string;
    description: string;
    shots: InstagramShot[];
  };
  finalCta: {
    title: string;
    subtitle: string;
  };
  footer: {
    description: string;
    rights: string;
  };
};

const toneClasses = [
  "from-[#0E0E0E] via-[#0E6B3D] to-[#050505]",
  "from-[#151515] via-[#1FA15A] to-[#050505]",
  "from-[#050505] via-[#B67A2D] to-[#0E0E0E]",
  "from-[#0E0E0E] via-[#151515] to-[#1FA15A]",
  "from-[#050505] via-[#0E6B3D] to-[#B67A2D]",
  "from-[#151515] via-[#1FA15A] to-[#0E0E0E]",
];

const enContent: SiteContent = {
  nav: {
    home: "Home",
    collection: "Memberships",
    ritual: "Philosophy",
    contact: "Contact",
  },
  actions: {
    orderCoffee: "Book a Tour",
    enter: "Enter",
    followRitual: "Follow Balance",
    from: "Starts At",
    menu: "Menu",
    language: "Language",
    close: "Close",
  },
  hero: {
    moments: [
      { text: "Balance Begins In Stillness", start: 0.1, end: 0.25 },
      { text: "Train With Precision, Recover With Intention", start: 0.35, end: 0.5 },
      { text: "Light, Breath, Strength, and Space", start: 0.6, end: 0.75 },
      { text: "Luxury Wellness, Personally Curated", start: 0.85, end: 1 },
    ],
    exploreCollection: "Explore Memberships",
    scrollHint: "Scroll to enter the Balance experience",
  },
  collection: {
    eyebrow: "Memberships",
    title: "Programs Built For Performance, Recovery, and Longevity",
    description:
      "A premium membership system for modern athletes and wellness-focused professionals.",
    products: [
      {
        name: "Essential Membership",
        description:
          "Full access to strength, cardio, and mobility zones in a calm cinematic setting.",
        price: "$149",
        tastingNote: "Strength / Cardio / Mobility",
      },
      {
        name: "Performance+ Coaching",
        description:
          "Personalized training plans, body analysis, and expert coaching for measurable growth.",
        price: "$289",
        tastingNote: "Coaching / Progress / Metrics",
      },
      {
        name: "Recovery Lounge Access",
        description:
          "Infrared sauna, cold contrast, and guided recovery protocols for complete reset.",
        price: "$89",
        tastingNote: "Sauna / Cold / Recovery",
      },
    ],
  },
  ritual: {
    eyebrow: "Philosophy",
    title: "Where Performance Meets Restoration",
    description:
      "Balance combines elite sport infrastructure with spa-grade recovery and minimalist design.",
    location: "Yerevan, Armenia",
    paragraphs: [
      "Every zone is designed to lower noise and increase focus: controlled lighting, generous spacing, and calm circulation between training and recovery.",
      "Our methodology blends performance training, mobility, and nervous-system recovery, so progress feels sustainable instead of exhausting.",
      "From private coaching to post-workout restoration, the experience is intentionally premium, modern, and deeply wellness-driven.",
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "A Sport Complex Designed Like a Private Wellness Resort",
    items: [
      {
        title: "Cinematic Training Floors",
        description:
          "Purpose-built zones with controlled acoustics, premium equipment, and clear training flow.",
      },
      {
        title: "Recovery-First Protocols",
        description:
          "Contrast therapy, breath-led cooldowns, and recovery guidance integrated into every plan.",
      },
      {
        title: "Personalized Member Journey",
        description:
          "Programs adapt around goals, schedule, and performance data for consistent long-term results.",
      },
      {
        title: "Luxury Wellness Atmosphere",
        description:
          "Dark cinematic interiors, emerald accents, and warm amber highlights for a calm premium mood.",
      },
    ],
  },
  instagram: {
    eyebrow: "Atmosphere",
    title: "Inside Balance",
    description:
      "A visual stream of training rhythm, restorative rituals, and minimal high-end wellness design.",
    shots: [
      {
        title: "Morning Reset",
        caption: "Breathwork, soft light, focused intent.",
        toneClassName: toneClasses[0],
      },
      {
        title: "Strength Session",
        caption: "Precision movement, controlled pace.",
        toneClassName: toneClasses[1],
      },
      {
        title: "Recovery Suite",
        caption: "Warm amber light and deep reset.",
        toneClassName: toneClasses[2],
      },
      {
        title: "Mobility Flow",
        caption: "Length, control, and fluid range.",
        toneClassName: toneClasses[3],
      },
      {
        title: "Evening Conditioning",
        caption: "Quiet intensity and clean execution.",
        toneClassName: toneClasses[4],
      },
      {
        title: "Post-Training Calm",
        caption: "Recovery as part of performance.",
        toneClassName: toneClasses[5],
      },
    ],
  },
  finalCta: {
    title: "Reserve Your Private Tour",
    subtitle:
      "Discover the Balance sport complex experience and build your personalized wellness plan.",
  },
  footer: {
    description:
      "Luxury sport complex for performance training, recovery rituals, and premium daily wellness.",
    rights: "All rights reserved.",
  },
};

export const siteContent: Record<LanguageCode, SiteContent> = {
  en: enContent,
};
