export const languageCodes = ["am", "en", "ru"] as const;

export type LanguageCode = (typeof languageCodes)[number];

export const defaultLanguage: LanguageCode = "am";

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
  "from-[#1E2A33] via-[#1A9E67] to-[#131D25]",
  "from-[#263542] via-[#30B678] to-[#16212A]",
  "from-[#1A2631] via-[#D19849] to-[#1F2D38]",
  "from-[#202D38] via-[#2A3C48] to-[#1A9E67]",
  "from-[#18242E] via-[#14945D] to-[#D19849]",
  "from-[#22313D] via-[#34BE7E] to-[#1A2630]",
];

const amContent: SiteContent = {
  nav: {
    home: "Ô³Õ¬Õ­Õ¡Õ¾Õ¸Ö€",
    collection: "Ô±Õ¶Õ¤Õ¡Õ´Õ¡Õ¯ÖÕ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶",
    ritual: "Õ“Õ«Õ¬Õ«Õ½Õ¸ÖƒÕ¡ÕµÕ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶",
    contact: "Ô¿Õ¡Õº",
  },
  actions: {
    orderCoffee: "Ô±Õ´Ö€Õ¡Õ£Ö€Õ¥Õ¬ Õ¿Õ¸Ö‚Ö€",
    enter: "Õ„Õ¸Ö‚Õ¿Ö„",
    followRitual: "Õ€Õ¥Õ¿Ö‡Õ¥Õ¬ Balance-Õ«Õ¶",
    from: "ÕÕ¯Õ½Õ¡Õ®",
    menu: "Õ„Õ¥Õ¶ÕµÕ¸Ö‚",
    language: "Ô¼Õ¥Õ¦Õ¸Ö‚",
    close: "Õ“Õ¡Õ¯Õ¥Õ¬",
  },
  hero: {
    moments: [
      { text: "Õ€Õ¡Õ¾Õ¡Õ½Õ¡Ö€Õ¡Õ¯Õ·Õ¼Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶Õ¨ Õ½Õ¯Õ½Õ¾Õ¸Ö‚Õ´ Õ§ Õ¬Õ¼Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶Õ«Ö", start: 0.1, end: 0.25 },
      { text: "Õ„Õ¡Ö€Õ¦Õ¾Õ«Ö€ Õ³Õ·Õ£Ö€Õ¿Õ¸Ö‚Õ©ÕµÕ¡Õ´Õ¢, Õ¾Õ¥Ö€Õ¡Õ¯Õ¡Õ¶Õ£Õ¶Õ¾Õ«Ö€ Õ¶ÕºÕ¡Õ¿Õ¡Õ¯Õ¸Õ¾", start: 0.35, end: 0.5 },
      { text: "Ô¼Õ¸Ö‚ÕµÕ½, Õ·Õ¶Õ¹Õ¡Õ¼Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶, Õ¸Ö‚Õª Ö‡ Õ¿Õ¡Ö€Õ¡Õ®Ö„", start: 0.6, end: 0.75 },
      { text: "ÕŠÖ€Õ¥Õ´Õ«Õ¸Ö‚Õ´ wellnessÕ Õ°Õ¡Õ¿Õ¸Ö‚Õ¯ Ö„Õ¥Õ¦ Õ°Õ¡Õ´Õ¡Ö€", start: 0.85, end: 1 },
    ],
    exploreCollection: "Ô²Õ¡ÖÕ¡Õ°Õ¡ÕµÕ¿Õ«Ö€ Õ¡Õ¶Õ¤Õ¡Õ´Õ¡Õ¯ÖÕ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶Õ¶Õ¥Ö€Õ¨",
    scrollHint: "ÕÖ„Ö€Õ¸Õ¬ Õ¡Ö€Õ¡Õ Balance ÖƒÕ¸Ö€Õ±Õ¡Õ¼Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶Õ¨ Õ¢Õ¡ÖÕ¥Õ¬Õ¸Ö‚ Õ°Õ¡Õ´Õ¡Ö€",
  },
  collection: {
    eyebrow: "Ô±Õ¶Õ¤Õ¡Õ´Õ¡Õ¯ÖÕ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶",
    title: "Ô¾Ö€Õ¡Õ£Ö€Õ¥Ö€Õ Õ¸Ö‚ÕªÕ«, Õ¾Õ¥Ö€Õ¡Õ¯Õ¡Õ¶Õ£Õ¶Õ´Õ¡Õ¶ Ö‡ Õ¯Õ¡ÕµÕ¸Ö‚Õ¶ Õ¡Ö€Õ¤ÕµÕ¸Ö‚Õ¶Ö„Õ« Õ°Õ¡Õ´Õ¡Ö€",
    description:
      "Balance-Õ¸Ö‚Õ´ Õ¡Õ¶Õ¤Õ¡Õ´Õ¡Õ¯ÖÕ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶Õ¶Õ¥Ö€Õ¨ Õ¯Õ¡Õ¦Õ´Õ¾Õ¡Õ® Õ¥Õ¶ ÕªÕ¡Õ´Õ¡Õ¶Õ¡Õ¯Õ¡Õ¯Õ«Ö Õ´Õ¡Ö€Õ¦Õ´Õ¡Õ¶, Õ¼Õ«Ö„Õ¡Õ¾Õ¥Ö€Õ«Õ« Ö‡ wellness Õ¼Õ«Õ©Õ´Õ« Õ·Õ¸Ö‚Ö€Õ»",
    products: [
      {
        name: "Essential Membership",
        description:
          "Õ„Õ¸Ö‚Õ¿Ö„ Õ¸Ö‚ÕªÕ¡ÕµÕ«Õ¶, cardio Ö‡ mobility Õ£Õ¸Õ¿Õ«Õ¶Õ¥Ö€Õ Õ°Õ¡Õ¶Õ£Õ«Õ½Õ¿ Ö‡ ÕºÖ€Õ¸Ö†Õ¥Õ½Õ«Õ¸Õ¶Õ¡Õ¬ Õ´Õ«Õ»Õ¡Õ¾Õ¡ÕµÖ€Õ¸Ö‚Õ´",
        price: "$149",
        tastingNote: "Strength / Cardio / Mobility",
      },
      {
        name: "Performance+ Coaching",
        description:
          "Ô±Õ¶Õ°Õ¡Õ¿Õ¡Õ¯Õ¡Õ¶ Õ®Ö€Õ¡Õ£Õ«Ö€, Õ©Õ¥Õ½Õ¿Õ¡Õ¾Õ¸Ö€Õ¸Ö‚Õ´ Ö‡ Õ´Õ¡Ö€Õ¦Õ¹Õ¡Õ¯Õ¡Õ¶ Õ¸Ö‚Õ²Õ¥Õ¯ÖÕ¸Ö‚Õ´Õ Õ¹Õ¡ÖƒÕ¥Õ¬Õ« Õ¡Õ¼Õ¡Õ»Õ¨Õ¶Õ©Õ¡ÖÕ« Õ°Õ¡Õ´Õ¡Ö€",
        price: "$289",
        tastingNote: "Coaching / Progress / Metrics",
      },
      {
        name: "Recovery Lounge Access",
        description:
          "Ô»Õ¶Ö†Ö€Õ¡Õ¯Õ¡Ö€Õ´Õ«Ö€ Õ½Õ¡Õ¸Ö‚Õ¶Õ¡, Õ½Õ¡Õ¼Õ¨ Õ©Õ¥Ö€Õ¡ÕºÕ«Õ¡ Ö‡ Õ¼Õ«Ö„Õ¡Õ¾Õ¥Ö€Õ«Õ« ÕºÖ€Õ¸Õ¿Õ¸Õ¯Õ¸Õ¬Õ¶Õ¥Ö€Õ Õ¡Õ´Õ¢Õ¸Õ²Õ»Õ¡Õ¯Õ¡Õ¶ Õ¾Õ¥Ö€Õ¡Õ¯Õ¡Õ¶Õ£Õ¶Õ´Õ¡Õ¶ Õ°Õ¡Õ´Õ¡Ö€",
        price: "$89",
        tastingNote: "Sauna / Cold / Recovery",
      },
    ],
  },
  ritual: {
    eyebrow: "Õ“Õ«Õ¬Õ«Õ½Õ¸ÖƒÕ¡ÕµÕ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶",
    title: "Ô±ÕµÕ½Õ¿Õ¥Õ² Õ¯Õ¡Õ¿Õ¡Ö€Õ¸Õ²Õ¡Õ¯Õ¡Õ¶Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶Õ¨ Õ°Õ¡Õ¶Õ¤Õ«ÕºÕ¸Ö‚Õ´ Õ§ Õ¾Õ¥Ö€Õ¡Õ¯Õ¡Õ¶Õ£Õ¶Õ´Õ¡Õ¶Õ¨",
    description:
      "Balance-Õ¨ Õ°Õ¡Õ´Õ¡Õ¤Ö€Õ¸Ö‚Õ´ Õ§ high-end Õ´Õ¡Ö€Õ¦Õ¸Ö‚Õ´Õ¡ÕµÕ«Õ¶ Õ¥Õ¶Õ©Õ¡Õ¯Õ¡Õ¼Õ¸Ö‚ÖÕ¾Õ¡Õ®Ö„Õ¨ Ö‡ wellness Õ¾Õ¥Ö€Õ¡Õ¯Õ¡Õ¶Õ£Õ¶Õ´Õ¡Õ¶ ÖƒÕ¸Ö€Õ±Õ¡Õ¼Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶Õ¨",
    location: "ÔµÖ€Ö‡Õ¡Õ¶, Õ€Õ¡ÕµÕ¡Õ½Õ¿Õ¡Õ¶",
    paragraphs: [
      "Õ…Õ¸Ö‚Ö€Õ¡Ö„Õ¡Õ¶Õ¹ÕµÕ¸Ö‚Ö€ Õ£Õ¸Õ¿Õ« Õ¶Õ¡Õ­Õ¡Õ£Õ®Õ¾Õ¡Õ® Õ§ Õ¯Õ¥Õ¶Õ¿Ö€Õ¸Õ¶Õ¡ÖÕ´Õ¡Õ¶ Õ°Õ¡Õ´Õ¡Ö€Õ Õ­Õ¥Õ¬Õ¡ÖÕ« Õ¬Õ¸Ö‚Õ½Õ¡Õ¾Õ¸Ö€Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶, Õ¬Õ¡ÕµÕ¶ Õ¿Õ¡Ö€Õ¡Õ®Ö„ Ö‡ Õ´Õ¡Ö„Õ¸Ö‚Ö€ Õ·Õ¡Ö€ÕªÕ´Õ¡Õ¶ Õ¿Ö€Õ¡Õ´Õ¡Õ¢Õ¡Õ¶Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶",
      "Õ„Õ¥Ö€ Õ´Õ¥Õ©Õ¸Õ¤Õ¡Õ¢Õ¡Õ¶Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶Õ¨ Õ´Õ«Õ¡Õ¾Õ¸Ö€Õ¸Ö‚Õ´ Õ§ performance training, mobility Ö‡ Õ¶ÕµÕ¡Ö€Õ¤Õ¡ÕµÕ«Õ¶ Õ°Õ¡Õ´Õ¡Õ¯Õ¡Ö€Õ£Õ« Õ¾Õ¥Ö€Õ¡Õ¯Õ¡Õ¶Õ£Õ¶Õ¸Ö‚Õ´",
      "Ô±Õ¶Õ°Õ¡Õ¿Õ¡Õ¯Õ¡Õ¶ Õ´Õ¡Ö€Õ¦Õ¸Ö‚Õ´Õ«Ö Õ´Õ«Õ¶Õ¹Ö‡ Õ´Õ¡Ö€Õ¦Õ¸Ö‚Õ´Õ«Ö Õ°Õ¥Õ¿Õ¸ Õ°Õ¡Õ¶Õ£Õ½Õ¿Õ¡ÖÕ¸Ö‚Õ´Õ Õ¡Õ´Õ¢Õ¸Õ²Õ» ÖƒÕ¸Ö€Õ±Õ¡Õ¼Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶Õ¨ Õ¯Õ¡Õ¼Õ¸Ö‚ÖÕ¾Õ¡Õ® Õ§ Õ¥Ö€Õ¯Õ¡Ö€Õ¡ÕªÕ¡Õ´Õ¯Õ¥Õ¿ Õ¡Ö€Õ¤ÕµÕ¸Ö‚Õ¶Ö„Õ« Õ·Õ¸Ö‚Ö€Õ»",
    ],
  },
  experience: {
    eyebrow: "Õ“Õ¸Ö€Õ±Õ¡Õ¼Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶",
    title: "ÔºÕ¡Õ´Õ¡Õ¶Õ¡Õ¯Õ¡Õ¯Õ«Ö sport complexÕ private wellness Õ¡Õ¯Õ¸Ö‚Õ´Õ¢Õ« Õ¦Õ£Õ¡ÖÕ¸Õ²Õ¸Ö‚Õ©ÕµÕ¡Õ´Õ¢",
    items: [
      {
        title: "Ô¿Õ«Õ¶Õ¥Õ´Õ¡Õ¿Õ«Õ¯ Õ´Õ¡Ö€Õ¦Õ´Õ¡Õ¶ Õ£Õ¸Õ¿Õ«Õ¶Õ¥Ö€",
        description:
          "Ô¶Õ¸Õ¶Õ¡Õ¾Õ¸Ö€Õ¾Õ¡Õ® Õ°Õ¡Õ¿Õ¡Õ¯Õ¡Õ£Õ«Õ®, ÕºÖ€Õ¥Õ´Õ«Õ¸Ö‚Õ´ Õ½Õ¡Ö€Ö„Õ¡Õ¾Õ¸Ö€Õ¸Ö‚Õ´Õ¶Õ¥Ö€ Ö‡ Õ°Õ½Õ¿Õ¡Õ¯ Õ´Õ¡Ö€Õ¦Õ´Õ¡Õ¶ Õ°Õ¸Õ½Ö„",
      },
      {
        title: "Recovery-first Õ´Õ¸Õ¿Õ¥ÖÕ¸Ö‚Õ´",
        description:
          "Contrast therapy, Õ·Õ¶Õ¹Õ¡Õ¼Õ¡Õ¯Õ¡Õ¶ cooldown Ö‡ Õ¾Õ¥Ö€Õ¡Õ¯Õ¡Õ¶Õ£Õ¶Õ´Õ¡Õ¶ Õ¸Ö‚Õ²Õ¥ÖÕ¸Ö‚ÕµÖÕ ÕµÕ¸Ö‚Ö€Õ¡Ö„Õ¡Õ¶Õ¹ÕµÕ¸Ö‚Ö€ Õ®Ö€Õ¡Õ£Ö€Õ¸Ö‚Õ´",
      },
      {
        title: "Ô±Õ¶Õ°Õ¡Õ¿Õ¡Õ¯Õ¡Õ¶ Õ¡Õ¶Õ¤Õ¡Õ´Õ« Õ¸Ö‚Õ²Õ«",
        description:
          "Ô¾Ö€Õ¡Õ£Ö€Õ¥Ö€Õ¨ Õ°Õ¡Ö€Õ´Õ¡Ö€Õ¥ÖÕ¾Õ¸Ö‚Õ´ Õ¥Õ¶ Õ¶ÕºÕ¡Õ¿Õ¡Õ¯Õ«Õ¶, Õ£Ö€Õ¡Ö†Õ«Õ¯Õ«Õ¶ Ö‡ Õ«Ö€Õ¡Õ¯Õ¡Õ¶ Õ¿Õ¾ÕµÕ¡Õ¬Õ¶Õ¥Ö€Õ«Õ¶",
      },
      {
        title: "Calm luxury Õ´Õ©Õ¶Õ¸Õ¬Õ¸Ö€Õ¿",
        description:
          "Ô±Õ¾Õ¥Õ¬Õ« Õ¬Õ¸Ö‚Õ½Õ¡Õ¾Õ¸Ö€ dark-tone Õ«Õ¶Õ¿Õ¥Ö€Õ«Õ¥Ö€, emerald Õ·Õ¥Õ·Õ¿Õ¥Ö€ Ö‡ Õ½ÕºÕ¸Ö€Õ¿Õ¡ÕµÕ«Õ¶ Õ´Õ«Õ¶Õ«Õ´Õ¡Õ¬Õ«Õ¦Õ´",
      },
    ],
  },
  instagram: {
    eyebrow: "Õ„Õ©Õ¶Õ¸Õ¬Õ¸Ö€Õ¿",
    title: "Balance-Õ« Õ¶Õ¥Ö€Õ½Õ¸Ö‚Õ´",
    description:
      "ÕÕ¥Õ½Õ¸Õ²Õ¡Õ¯Õ¡Õ¶ Õ¨Õ¶Õ¿Ö€Õ¡Õ¶Õ«Õ Õ¸Ö‚ÕªÕ«, Õ·Õ¡Ö€ÕªÕ´Õ¡Õ¶ Ö‡ Õ¼Õ«Ö„Õ¡Õ¾Õ¥Ö€Õ«Õ« ÕªÕ¡Õ´Õ¡Õ¶Õ¡Õ¯Õ¡Õ¯Õ«Ö Õ¼Õ«Õ©Õ´Õ«Ö",
    shots: [
      {
        title: "Morning Reset",
        caption: "Õ‡Õ¶Õ¹Õ¡Õ¼Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶, Õ¯Õ¥Õ¶Õ¿Ö€Õ¸Õ¶Õ¡ÖÕ¸Ö‚Õ´, Õ´Õ¡Ö„Õ¸Ö‚Ö€ Õ´Õ¥Õ¯Õ¶Õ¡Ö€Õ¯",
        toneClassName: toneClasses[0],
      },
      {
        title: "Strength Session",
        caption: "ÕÕ¥Ö€Õ¡Õ°Õ½Õ¯Õ¾Õ¸Õ² Õ«Õ¶Õ¿Õ¥Õ¶Õ½Õ«Õ¾Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶ Ö‡ Õ¿Õ¥Õ­Õ¶Õ«Õ¯Õ¡",
        toneClassName: toneClasses[1],
      },
      {
        title: "Recovery Suite",
        caption: "Õ‹Õ¥Ö€Õ´Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶, Õ¬Õ¼Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶ Ö‡ Õ¾Õ¥Ö€Õ¡Õ¯Õ¡Õ¶Õ£Õ¶Õ¸Ö‚Õ´",
        toneClassName: toneClasses[2],
      },
      {
        title: "Mobility Flow",
        caption: "Õ‡Õ¡Ö€ÕªÕ´Õ¡Õ¶ Õ¡Õ¦Õ¡Õ¿Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶ Ö‡ Õ¾Õ¥Ö€Õ¡Õ°Õ½Õ¯Õ¸Ö‚Õ´",
        toneClassName: toneClasses[3],
      },
      {
        title: "Evening Conditioning",
        caption: "Ô¿Õ¥Õ¶Õ¿Ö€Õ¸Õ¶Õ¡ÖÕ¾Õ¡Õ® Õ§Õ¶Õ¥Ö€Õ£Õ«Õ¡, Õ´Õ¡Ö„Õ¸Ö‚Ö€ Õ¯Õ¡Õ¿Õ¡Ö€Õ¸Ö‚Õ´",
        toneClassName: toneClasses[4],
      },
      {
        title: "Post-Training Calm",
        caption: "ÕÕ¥Ö€Õ¡Õ¯Õ¡Õ¶Õ£Õ¶Õ¸Ö‚Õ´Õ¨Õ Õ¸Ö€ÕºÕ¥Õ½ Õ¡Õ¼Õ¡Õ»Õ¨Õ¶Õ©Õ¡ÖÕ« Õ´Õ¡Õ½",
        toneClassName: toneClasses[5],
      },
    ],
  },
  finalCta: {
    title: "Ô±Õ´Ö€Õ¡Õ£Ö€Õ«Ö€ Ö„Õ¸ private tour-Õ¨",
    subtitle:
      "Ô¾Õ¡Õ¶Õ¸Õ©Õ¡ÖÕ«Ö€ Balance sport complex-Õ«Õ¶ Ö‡ Õ¯Õ¡Õ¦Õ´Õ¥Õ¶Ö„ Ö„Õ¸ Õ¡Õ¶Õ°Õ¡Õ¿Õ¡Õ¯Õ¡Õ¶ wellness ÕºÕ¬Õ¡Õ¶Õ¨",
  },
  footer: {
    description:
      "ÔºÕ¡Õ´Õ¡Õ¶Õ¡Õ¯Õ¡Õ¯Õ«Ö Õ½ÕºÕ¸Ö€Õ¿Õ¡ÕµÕ«Õ¶ Õ°Õ¡Õ´Õ¡Õ¬Õ«Ö€Õ performance Õ´Õ¡Ö€Õ¦Õ´Õ¡Õ¶, recovery Ö‡ premium wellness Õ¼Õ«Õ©Õ´Õ« Õ°Õ¡Õ´Õ¡Ö€",
    rights: "Ô²Õ¸Õ¬Õ¸Ö€ Õ«Ö€Õ¡Õ¾Õ¸Ö‚Õ¶Ö„Õ¶Õ¥Ö€Õ¨ ÕºÕ¡Õ·Õ¿ÕºÕ¡Õ¶Õ¾Õ¡Õ® Õ¥Õ¶",
  },
};

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
      { text: "Premium Wellness, Built Around You", start: 0.85, end: 1 },
    ],
    exploreCollection: "Explore Memberships",
    scrollHint: "Scroll to enter the Balance experience",
  },
  collection: {
    eyebrow: "Memberships",
    title: "Programs Built For Performance, Recovery, and Longevity",
    description:
      "A premium membership system for modern athletes and wellness-focused professionals",
    products: [
      {
        name: "Essential Membership",
        description:
          "Full access to strength, cardio, and mobility zones in a calm performance setting",
        price: "$149",
        tastingNote: "Strength / Cardio / Mobility",
      },
      {
        name: "Performance+ Coaching",
        description:
          "Personalized training plans, body analysis, and expert coaching for measurable growth",
        price: "$289",
        tastingNote: "Coaching / Progress / Metrics",
      },
      {
        name: "Recovery Lounge Access",
        description:
          "Infrared sauna, cold contrast, and guided recovery protocols for complete reset",
        price: "$89",
        tastingNote: "Sauna / Cold / Recovery",
      },
    ],
  },
  ritual: {
    eyebrow: "Philosophy",
    title: "Where Performance Meets Restoration",
    description:
      "Balance combines elite sport infrastructure with spa-grade recovery and minimalist design",
    location: "Yerevan, Armenia",
    paragraphs: [
      "Every zone is designed to lower noise and increase focus: controlled lighting, generous spacing, and calm movement flow",
      "Our method blends performance training, mobility, and nervous-system recovery for sustainable progress",
      "From private coaching to post-workout restoration, the entire journey is intentionally modern and premium",
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "A Sport Complex Designed Like a Private Wellness Club",
    items: [
      {
        title: "Cinematic Training Floors",
        description:
          "Purpose-built zones with premium equipment and a clean training rhythm",
      },
      {
        title: "Recovery-First Protocols",
        description:
          "Contrast therapy, breath-led cooldowns, and recovery guidance in every program",
      },
      {
        title: "Personalized Member Journey",
        description:
          "Programs adapt to your goals, schedule, and real performance data",
      },
      {
        title: "Modern Athletic Atmosphere",
        description:
          "Balanced dark-light tones, emerald accents, and calm high-end gym energy",
      },
    ],
  },
  instagram: {
    eyebrow: "Atmosphere",
    title: "Inside Balance",
    description:
      "A visual stream of training rhythm, restorative rituals, and modern sport aesthetics",
    shots: [
      {
        title: "Morning Reset",
        caption: "Breathwork, focus, clean start",
        toneClassName: toneClasses[0],
      },
      {
        title: "Strength Session",
        caption: "Controlled intensity and precise form",
        toneClassName: toneClasses[1],
      },
      {
        title: "Recovery Suite",
        caption: "Warm light and full nervous-system reset",
        toneClassName: toneClasses[2],
      },
      {
        title: "Mobility Flow",
        caption: "Length, control, and fluid range",
        toneClassName: toneClasses[3],
      },
      {
        title: "Evening Conditioning",
        caption: "Quiet intensity and clean execution",
        toneClassName: toneClasses[4],
      },
      {
        title: "Post-Training Calm",
        caption: "Recovery as a core part of performance",
        toneClassName: toneClasses[5],
      },
    ],
  },
  finalCta: {
    title: "Reserve Your Private Tour",
    subtitle:
      "Discover the Balance sport complex experience and build your personalized wellness plan",
  },
  footer: {
    description:
      "Modern sport complex for performance training, recovery rituals, and premium daily wellness",
    rights: "All rights reserved",
  },
};

const ruContent: SiteContent = {
  nav: {
    home: "Ğ“Ğ»Ğ°Ğ²Ğ½Ğ°Ñ",
    collection: "ĞĞ±Ğ¾Ğ½ĞµĞ¼ĞµĞ½Ñ‚Ñ‹",
    ritual: "Ğ¤Ğ¸Ğ»Ğ¾ÑĞ¾Ñ„Ğ¸Ñ",
    contact: "ĞšĞ¾Ğ½Ñ‚Ğ°ĞºÑ‚",
  },
  actions: {
    orderCoffee: "Ğ—Ğ°Ğ¿Ğ¸ÑĞ°Ñ‚ÑŒÑÑ Ğ½Ğ° Ñ‚ÑƒÑ€",
    enter: "Ğ’Ğ¾Ğ¹Ñ‚Ğ¸",
    followRitual: "ĞŸĞ¾Ğ´Ğ¿Ğ¸ÑĞ°Ñ‚ÑŒÑÑ Ğ½Ğ° Balance",
    from: "ĞÑ‚",
    menu: "ĞœĞµĞ½Ñ",
    language: "Ğ¯Ğ·Ñ‹Ğº",
    close: "Ğ—Ğ°ĞºÑ€Ñ‹Ñ‚ÑŒ",
  },
  hero: {
    moments: [
      { text: "Ğ‘Ğ°Ğ»Ğ°Ğ½Ñ Ğ½Ğ°Ñ‡Ğ¸Ğ½Ğ°ĞµÑ‚ÑÑ Ñ Ñ‚Ğ¸ÑˆĞ¸Ğ½Ñ‹", start: 0.1, end: 0.25 },
      { text: "Ğ¢Ñ€ĞµĞ½Ğ¸Ñ€ÑƒĞ¹ÑÑ Ñ‚Ğ¾Ñ‡Ğ½Ğ¾, Ğ²Ğ¾ÑÑÑ‚Ğ°Ğ½Ğ°Ğ²Ğ»Ğ¸Ğ²Ğ°Ğ¹ÑÑ Ğ¾ÑĞ¾Ğ·Ğ½Ğ°Ğ½Ğ½Ğ¾", start: 0.35, end: 0.5 },
      { text: "Ğ¡Ğ²ĞµÑ‚, Ğ´Ñ‹Ñ…Ğ°Ğ½Ğ¸Ğµ, ÑĞ¸Ğ»Ğ° Ğ¸ Ğ¿Ñ€Ğ¾ÑÑ‚Ñ€Ğ°Ğ½ÑÑ‚Ğ²Ğ¾", start: 0.6, end: 0.75 },
      { text: "ĞŸÑ€ĞµĞ¼Ğ¸Ğ°Ğ»ÑŒĞ½Ñ‹Ğ¹ wellness, ÑĞ¾Ğ·Ğ´Ğ°Ğ½Ğ½Ñ‹Ğ¹ Ğ¿Ğ¾Ğ´ Ñ‚ĞµĞ±Ñ", start: 0.85, end: 1 },
    ],
    exploreCollection: "Ğ¡Ğ¼Ğ¾Ñ‚Ñ€ĞµÑ‚ÑŒ Ğ°Ğ±Ğ¾Ğ½ĞµĞ¼ĞµĞ½Ñ‚Ñ‹",
    scrollHint: "ĞŸÑ€Ğ¾ĞºÑ€ÑƒÑ‚Ğ¸Ñ‚Ğµ, Ñ‡Ñ‚Ğ¾Ğ±Ñ‹ Ğ¾Ñ‚ĞºÑ€Ñ‹Ñ‚ÑŒ Ğ¾Ğ¿Ñ‹Ñ‚ Balance",
  },
  collection: {
    eyebrow: "ĞĞ±Ğ¾Ğ½ĞµĞ¼ĞµĞ½Ñ‚Ñ‹",
    title: "ĞŸÑ€Ğ¾Ğ³Ñ€Ğ°Ğ¼Ğ¼Ñ‹ Ğ´Ğ»Ñ ÑĞ¸Ğ»Ñ‹, Ğ²Ğ¾ÑÑÑ‚Ğ°Ğ½Ğ¾Ğ²Ğ»ĞµĞ½Ğ¸Ñ Ğ¸ Ğ´Ğ¾Ğ»Ğ³Ğ¾Ğ³Ğ¾ Ğ¿Ñ€Ğ¾Ğ³Ñ€ĞµÑÑĞ°",
    description:
      "ĞŸÑ€ĞµĞ¼Ğ¸Ğ°Ğ»ÑŒĞ½Ğ°Ñ ÑĞ¸ÑÑ‚ĞµĞ¼Ğ° Ğ°Ğ±Ğ¾Ğ½ĞµĞ¼ĞµĞ½Ñ‚Ğ¾Ğ² Ğ´Ğ»Ñ ÑĞ¾Ğ²Ñ€ĞµĞ¼ĞµĞ½Ğ½Ñ‹Ñ… ÑĞ¿Ğ¾Ñ€Ñ‚ÑĞ¼ĞµĞ½Ğ¾Ğ² Ğ¸ Ñ‚ĞµÑ…, ĞºÑ‚Ğ¾ Ñ†ĞµĞ½Ğ¸Ñ‚ wellness-Ğ¿Ğ¾Ğ´Ñ…Ğ¾Ğ´",
    products: [
      {
        name: "Essential Membership",
        description:
          "Ğ”Ğ¾ÑÑ‚ÑƒĞ¿ Ğº ÑĞ¸Ğ»Ğ¾Ğ²Ñ‹Ğ¼, cardio Ğ¸ mobility Ğ·Ğ¾Ğ½Ğ°Ğ¼ Ğ² ÑĞ¿Ğ¾ĞºĞ¾Ğ¹Ğ½Ğ¾Ğ¹ Ğ¿Ñ€Ğ¾Ñ„ĞµÑÑĞ¸Ğ¾Ğ½Ğ°Ğ»ÑŒĞ½Ğ¾Ğ¹ Ğ°Ñ‚Ğ¼Ğ¾ÑÑ„ĞµÑ€Ğµ",
        price: "$149",
        tastingNote: "Strength / Cardio / Mobility",
      },
      {
        name: "Performance+ Coaching",
        description:
          "ĞŸĞµÑ€ÑĞ¾Ğ½Ğ°Ğ»ÑŒĞ½Ñ‹Ğµ Ğ¿Ğ»Ğ°Ğ½Ñ‹, Ğ°Ğ½Ğ°Ğ»Ğ¸Ğ· Ñ‚ĞµĞ»Ğ° Ğ¸ ÑĞ¾Ğ¿Ñ€Ğ¾Ğ²Ğ¾Ğ¶Ğ´ĞµĞ½Ğ¸Ğµ Ñ‚Ñ€ĞµĞ½ĞµÑ€Ğ° Ñ Ğ¸Ğ·Ğ¼ĞµÑ€Ğ¸Ğ¼Ñ‹Ğ¼ Ñ€ĞµĞ·ÑƒĞ»ÑŒÑ‚Ğ°Ñ‚Ğ¾Ğ¼",
        price: "$289",
        tastingNote: "Coaching / Progress / Metrics",
      },
      {
        name: "Recovery Lounge Access",
        description:
          "Ğ˜Ğ½Ñ„Ñ€Ğ°ĞºÑ€Ğ°ÑĞ½Ğ°Ñ ÑĞ°ÑƒĞ½Ğ°, Ñ…Ğ¾Ğ»Ğ¾Ğ´Ğ½Ñ‹Ğ¹ ĞºĞ¾Ğ½Ñ‚Ñ€Ğ°ÑÑ‚ Ğ¸ Ğ¿Ñ€Ğ¾Ñ‚Ğ¾ĞºĞ¾Ğ»Ñ‹ Ğ²Ğ¾ÑÑÑ‚Ğ°Ğ½Ğ¾Ğ²Ğ»ĞµĞ½Ğ¸Ñ Ğ¿Ğ¾ÑĞ»Ğµ Ğ½Ğ°Ğ³Ñ€ÑƒĞ·Ğ¾Ğº",
        price: "$89",
        tastingNote: "Sauna / Cold / Recovery",
      },
    ],
  },
  ritual: {
    eyebrow: "Ğ¤Ğ¸Ğ»Ğ¾ÑĞ¾Ñ„Ğ¸Ñ",
    title: "Ğ“Ğ´Ğµ Ñ€ĞµĞ·ÑƒĞ»ÑŒÑ‚Ğ°Ñ‚ Ğ²ÑÑ‚Ñ€ĞµÑ‡Ğ°ĞµÑ‚ÑÑ Ñ Ğ²Ğ¾ÑÑÑ‚Ğ°Ğ½Ğ¾Ğ²Ğ»ĞµĞ½Ğ¸ĞµĞ¼",
    description:
      "Balance Ğ¾Ğ±ÑŠĞµĞ´Ğ¸Ğ½ÑĞµÑ‚ ÑĞ¿Ğ¾Ñ€Ñ‚Ğ¸Ğ²Ğ½ÑƒÑ Ğ¸Ğ½Ñ„Ñ€Ğ°ÑÑ‚Ñ€ÑƒĞºÑ‚ÑƒÑ€Ñƒ Ğ²Ñ‹ÑĞ¾ĞºĞ¾Ğ³Ğ¾ ÑƒÑ€Ğ¾Ğ²Ğ½Ñ Ğ¸ Ğ°Ñ‚Ğ¼Ğ¾ÑÑ„ĞµÑ€Ñƒ wellness-ĞºĞ»ÑƒĞ±Ğ°",
    location: "Ğ•Ñ€ĞµĞ²Ğ°Ğ½, ĞÑ€Ğ¼ĞµĞ½Ğ¸Ñ",
    paragraphs: [
      "ĞšĞ°Ğ¶Ğ´Ğ°Ñ Ğ·Ğ¾Ğ½Ğ° ÑĞ¾Ğ·Ğ´Ğ°Ğ½Ğ° Ğ´Ğ»Ñ ĞºĞ¾Ğ½Ñ†ĞµĞ½Ñ‚Ñ€Ğ°Ñ†Ğ¸Ğ¸: Ğ¿Ñ€Ğ¾Ğ´ÑƒĞ¼Ğ°Ğ½Ğ½Ğ¾Ğµ Ğ¾ÑĞ²ĞµÑ‰ĞµĞ½Ğ¸Ğµ, Ğ¿Ñ€Ğ¾ÑÑ‚Ñ€Ğ°Ğ½ÑÑ‚Ğ²Ğ¾ Ğ¸ Ğ»Ğ¾Ğ³Ğ¸Ñ‡Ğ½Ñ‹Ğ¹ Ñ‚Ñ€ĞµĞ½Ğ¸Ñ€Ğ¾Ğ²Ğ¾Ñ‡Ğ½Ñ‹Ğ¹ Ğ¿Ğ¾Ñ‚Ğ¾Ğº",
      "ĞĞ°ÑˆĞ° Ğ¼ĞµÑ‚Ğ¾Ğ´Ğ¸ĞºĞ° Ğ¾Ğ±ÑŠĞµĞ´Ğ¸Ğ½ÑĞµÑ‚ performance training, mobility Ğ¸ Ğ²Ğ¾ÑÑÑ‚Ğ°Ğ½Ğ¾Ğ²Ğ»ĞµĞ½Ğ¸Ğµ Ğ½ĞµÑ€Ğ²Ğ½Ğ¾Ğ¹ ÑĞ¸ÑÑ‚ĞµĞ¼Ñ‹",
      "ĞÑ‚ Ğ¿ĞµÑ€ÑĞ¾Ğ½Ğ°Ğ»ÑŒĞ½Ñ‹Ñ… Ñ‚Ñ€ĞµĞ½Ğ¸Ñ€Ğ¾Ğ²Ğ¾Ğº Ğ´Ğ¾ post-workout Ğ²Ğ¾ÑÑÑ‚Ğ°Ğ½Ğ¾Ğ²Ğ»ĞµĞ½Ğ¸Ñ â€” Ğ²ĞµÑÑŒ Ğ¿ÑƒÑ‚ÑŒ Ğ¿Ğ¾ÑÑ‚Ñ€Ğ¾ĞµĞ½ ĞºĞ°Ğº Ğ¿Ñ€ĞµĞ¼Ğ¸Ğ°Ğ»ÑŒĞ½Ñ‹Ğ¹ Ğ¾Ğ¿Ñ‹Ñ‚",
    ],
  },
  experience: {
    eyebrow: "ĞĞ¿Ñ‹Ñ‚",
    title: "Ğ¡Ğ¿Ğ¾Ñ€Ñ‚Ğ¸Ğ²Ğ½Ñ‹Ğ¹ ĞºĞ¾Ğ¼Ğ¿Ğ»ĞµĞºÑ Ğ² Ñ„Ğ¾Ñ€Ğ¼Ğ°Ñ‚Ğµ private wellness ĞºĞ»ÑƒĞ±Ğ°",
    items: [
      {
        title: "ĞšĞ¸Ğ½ĞµĞ¼Ğ°Ñ‚Ğ¾Ğ³Ñ€Ğ°Ñ„Ğ¸Ñ‡Ğ½Ñ‹Ğµ Ñ‚Ñ€ĞµĞ½Ğ¸Ñ€Ğ¾Ğ²Ğ¾Ñ‡Ğ½Ñ‹Ğµ Ğ·Ğ¾Ğ½Ñ‹",
        description:
          "ĞŸÑ€ĞµĞ¼Ğ¸Ğ°Ğ»ÑŒĞ½Ğ¾Ğµ Ğ¾Ğ±Ğ¾Ñ€ÑƒĞ´Ğ¾Ğ²Ğ°Ğ½Ğ¸Ğµ, Ğ¿Ñ€Ğ¾Ğ´ÑƒĞ¼Ğ°Ğ½Ğ½Ğ¾Ğµ Ğ·Ğ¾Ğ½Ğ¸Ñ€Ğ¾Ğ²Ğ°Ğ½Ğ¸Ğµ Ğ¸ Ñ‡Ğ¸ÑÑ‚Ñ‹Ğ¹ Ñ€Ğ¸Ñ‚Ğ¼ Ñ‚Ñ€ĞµĞ½Ğ¸Ñ€Ğ¾Ğ²ĞºĞ¸",
      },
      {
        title: "Recovery-first Ğ¿Ğ¾Ğ´Ñ…Ğ¾Ğ´",
        description:
          "ĞšĞ¾Ğ½Ñ‚Ñ€Ğ°ÑÑ‚Ğ½Ñ‹Ğµ Ğ¿Ñ€Ğ¾Ñ‚Ğ¾ĞºĞ¾Ğ»Ñ‹, Ğ´Ñ‹Ñ…Ğ°Ñ‚ĞµĞ»ÑŒĞ½Ñ‹Ğµ cooldown-ÑĞµÑÑĞ¸Ğ¸ Ğ¸ ÑĞ¸ÑÑ‚ĞµĞ¼Ğ½Ğ¾Ğµ Ğ²Ğ¾ÑÑÑ‚Ğ°Ğ½Ğ¾Ğ²Ğ»ĞµĞ½Ğ¸Ğµ",
      },
      {
        title: "ĞŸĞµÑ€ÑĞ¾Ğ½Ğ°Ğ»ÑŒĞ½Ñ‹Ğ¹ Ğ¿ÑƒÑ‚ÑŒ ÑƒÑ‡Ğ°ÑÑ‚Ğ½Ğ¸ĞºĞ°",
        description:
          "ĞŸÑ€Ğ¾Ğ³Ñ€Ğ°Ğ¼Ğ¼Ñ‹ Ğ°Ğ´Ğ°Ğ¿Ñ‚Ğ¸Ñ€ÑƒÑÑ‚ÑÑ Ğ¿Ğ¾Ğ´ Ñ†ĞµĞ»Ğ¸, Ğ³Ñ€Ğ°Ñ„Ğ¸Ğº Ğ¸ Ñ„Ğ°ĞºÑ‚Ğ¸Ñ‡ĞµÑĞºĞ¸Ğµ Ğ¿Ğ¾ĞºĞ°Ğ·Ğ°Ñ‚ĞµĞ»Ğ¸ Ğ¿Ñ€Ğ¾Ğ³Ñ€ĞµÑÑĞ°",
      },
      {
        title: "Ğ¡Ğ¾Ğ²Ñ€ĞµĞ¼ĞµĞ½Ğ½Ğ°Ñ ÑĞ¿Ğ¾Ñ€Ñ‚Ğ¸Ğ²Ğ½Ğ°Ñ ÑÑÑ‚ĞµÑ‚Ğ¸ĞºĞ°",
        description:
          "Ğ¡Ğ±Ğ°Ğ»Ğ°Ğ½ÑĞ¸Ñ€Ğ¾Ğ²Ğ°Ğ½Ğ½Ñ‹Ğµ Ñ‚ĞµĞ¼Ğ½Ñ‹Ğµ Ğ¸ ÑĞ²ĞµÑ‚Ğ»Ñ‹Ğµ Ñ‚Ğ¾Ğ½Ğ°, emerald-Ğ°ĞºÑ†ĞµĞ½Ñ‚Ñ‹ Ğ¸ Ğ¿Ñ€ĞµĞ¼Ğ¸Ğ°Ğ»ÑŒĞ½Ğ°Ñ ÑĞ½ĞµÑ€Ğ³Ğ¸Ñ",
      },
    ],
  },
  instagram: {
    eyebrow: "ĞÑ‚Ğ¼Ğ¾ÑÑ„ĞµÑ€Ğ°",
    title: "Ğ’Ğ½ÑƒÑ‚Ñ€Ğ¸ Balance",
    description:
      "Ğ’Ğ¸Ğ·ÑƒĞ°Ğ»ÑŒĞ½Ñ‹Ğ¹ Ğ¿Ğ¾Ñ‚Ğ¾Ğº Ñ‚Ñ€ĞµĞ½Ğ¸Ñ€Ğ¾Ğ²Ğ¾Ğº, Ğ²Ğ¾ÑÑÑ‚Ğ°Ğ½Ğ¾Ğ²Ğ»ĞµĞ½Ğ¸Ñ Ğ¸ ÑĞ¾Ğ²Ñ€ĞµĞ¼ĞµĞ½Ğ½Ğ¾Ğ¹ Ñ„Ğ¸Ñ‚Ğ½ĞµÑ-ÑÑÑ‚ĞµÑ‚Ğ¸ĞºĞ¸",
    shots: [
      {
        title: "Morning Reset",
        caption: "Ğ”Ñ‹Ñ…Ğ°Ğ½Ğ¸Ğµ, Ñ„Ğ¾ĞºÑƒÑ, Ñ‡Ğ¸ÑÑ‚Ñ‹Ğ¹ ÑÑ‚Ğ°Ñ€Ñ‚",
        toneClassName: toneClasses[0],
      },
      {
        title: "Strength Session",
        caption: "ĞšĞ¾Ğ½Ñ‚Ñ€Ğ¾Ğ»ÑŒ, Ñ‚ĞµÑ…Ğ½Ğ¸ĞºĞ° Ğ¸ Ğ¸Ğ½Ñ‚ĞµĞ½ÑĞ¸Ğ²Ğ½Ğ¾ÑÑ‚ÑŒ",
        toneClassName: toneClasses[1],
      },
      {
        title: "Recovery Suite",
        caption: "Ğ¢ĞµĞ¿Ğ»Ñ‹Ğ¹ ÑĞ²ĞµÑ‚ Ğ¸ Ğ³Ğ»ÑƒĞ±Ğ¾ĞºĞ¸Ğ¹ reset",
        toneClassName: toneClasses[2],
      },
      {
        title: "Mobility Flow",
        caption: "ĞĞ¼Ğ¿Ğ»Ğ¸Ñ‚ÑƒĞ´Ğ°, ĞºĞ¾Ğ½Ñ‚Ñ€Ğ¾Ğ»ÑŒ Ğ¸ Ğ¿Ğ»Ğ°Ğ²Ğ½Ğ¾ÑÑ‚ÑŒ",
        toneClassName: toneClasses[3],
      },
      {
        title: "Evening Conditioning",
        caption: "Ğ¢Ğ¸Ñ…Ğ°Ñ ĞºĞ¾Ğ½Ñ†ĞµĞ½Ñ‚Ñ€Ğ°Ñ†Ğ¸Ñ Ğ¸ Ñ‚Ğ¾Ñ‡Ğ½Ğ¾ÑÑ‚ÑŒ",
        toneClassName: toneClasses[4],
      },
      {
        title: "Post-Training Calm",
        caption: "Ğ’Ğ¾ÑÑÑ‚Ğ°Ğ½Ğ¾Ğ²Ğ»ĞµĞ½Ğ¸Ğµ ĞºĞ°Ğº Ñ‡Ğ°ÑÑ‚ÑŒ Ñ€ĞµĞ·ÑƒĞ»ÑŒÑ‚Ğ°Ñ‚Ğ°",
        toneClassName: toneClasses[5],
      },
    ],
  },
  finalCta: {
    title: "Ğ—Ğ°Ğ¿Ğ¸ÑˆĞ¸Ñ‚ĞµÑÑŒ Ğ½Ğ° private tour",
    subtitle:
      "ĞŸĞ¾Ğ·Ğ½Ğ°ĞºĞ¾Ğ¼ÑŒÑ‚ĞµÑÑŒ Ñ Balance sport complex Ğ¸ ÑĞ¾Ğ±ĞµÑ€Ğ¸Ñ‚Ğµ Ğ¿ĞµÑ€ÑĞ¾Ğ½Ğ°Ğ»ÑŒĞ½Ñ‹Ğ¹ wellness-Ğ¿Ğ»Ğ°Ğ½",
  },
  footer: {
    description:
      "Ğ¡Ğ¾Ğ²Ñ€ĞµĞ¼ĞµĞ½Ğ½Ñ‹Ğ¹ ÑĞ¿Ğ¾Ñ€Ñ‚Ğ¸Ğ²Ğ½Ñ‹Ğ¹ ĞºĞ¾Ğ¼Ğ¿Ğ»ĞµĞºÑ Ğ´Ğ»Ñ performance-Ñ‚Ñ€ĞµĞ½Ğ¸Ñ€Ğ¾Ğ²Ğ¾Ğº, recovery Ğ¸ Ğ¿Ñ€ĞµĞ¼Ğ¸Ğ°Ğ»ÑŒĞ½Ğ¾Ğ³Ğ¾ daily wellness",
    rights: "Ğ’ÑĞµ Ğ¿Ñ€Ğ°Ğ²Ğ° Ğ·Ğ°Ñ‰Ğ¸Ñ‰ĞµĞ½Ñ‹",
  },
};

export const siteContent: Record<LanguageCode, SiteContent> = {
  am: amContent,
  en: enContent,
  ru: ruContent,
};

