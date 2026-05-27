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
  "from-[#263745] via-[#19A667] to-[#1A2933]",
  "from-[#304454] via-[#2CC27B] to-[#1B2730]",
  "from-[#202F3A] via-[#D49B4A] to-[#273846]",
  "from-[#293A49] via-[#36505E] to-[#1FAE6D]",
  "from-[#1D2E3A] via-[#14945D] to-[#D7A558]",
  "from-[#2B3F4D] via-[#36C784] to-[#1D2D39]",
];

const amContent: SiteContent = {
  nav: {
    home: "Գլխավոր",
    collection: "Անդամակցություն",
    ritual: "Փիլիսոփայություն",
    contact: "Կապ",
  },
  actions: {
    orderCoffee: "Ամրագրել այց",
    enter: "Մուտք",
    followRitual: "Հետևել Balance-ին",
    from: "Սկսած",
    menu: "Մենյու",
    language: "Լեզու",
    close: "Փակել",
  },
  hero: {
    moments: [
      { text: "Հավասարակշռությունը սկսվում է լռությունից", start: 0.1, end: 0.25 },
      { text: "Մարզվիր ճշգրտությամբ, վերականգնվիր նպատակով", start: 0.35, end: 0.5 },
      { text: "Լույս, շնչառություն, ուժ և տարածք", start: 0.6, end: 0.75 },
      { text: "Պրեմիում wellness, հատուկ քեզ համար", start: 0.85, end: 1 },
    ],
    exploreCollection: "Բացահայտիր անդամակցությունները",
    scrollHint: "Սքրոլ արա, որպեսզի մտնես Balance փորձառության մեջ",
  },
  collection: {
    eyebrow: "Անդամակցություն",
    title: "Անդամակցություններ, որոնք կառուցված են երկարաժամկետ արդյունքի համար",
    description:
      "Յուրաքանչյուր փաթեթ միավորում է ուժային մարզում, սմարթ ռիքավերի և պարզ վերահսկվող առաջընթաց",
    products: [
      {
        name: "Essential Membership",
        description:
          "Մուտք ուժային, cardio և mobility գոտիներ, հարմար է կայուն օրական ռեժիմի համար",
        price: "$149",
        tastingNote: "Strength / Cardio / Mobility",
      },
      {
        name: "Performance+ Coaching",
        description:
          "Անհատական ծրագիր, թեստավորում, առաջընթացի հետևում և մարզչական ուղեկցում",
        price: "$289",
        tastingNote: "Coaching / Progress / Metrics",
      },
      {
        name: "Recovery Lounge Access",
        description:
          "Սաունա, սառը թերապիա և վերականգնման պրոտոկոլներ կենտրոնական նյարդային համակարգի համար",
        price: "$89",
        tastingNote: "Sauna / Cold / Recovery",
      },
    ],
  },
  ritual: {
    eyebrow: "Փիլիսոփայություն",
    title: "Արդյունք առանց գերլարվածության, ռիթմ առանց քաոսի",
    description:
      "Balance-ում տարածքը, լույսը և ծրագրերը մտածված են, որպեսզի մարմինը և միտքը աշխատեն մեկ համակարգով",
    location: "Երևան, Հայաստան",
    paragraphs: [
      "Մարզման գոտիները առանձնացված են ըստ նպատակի, որպեսզի շարժման հոսքը լինի պարզ և կենտրոնացված",
      "Մեր մեթոդը միավորում է performance training, mobility և նյարդային համակարգի վերականգնում",
      "Անկախ քո մակարդակից, համակարգը հարմարվում է քեզ և պահպանում կայուն առաջընթացը",
    ],
  },
  experience: {
    eyebrow: "Փորձառություն",
    title: "Ժամանակակից սպորտային համալիր, որը գործում է որպես wellness ակումբ",
    items: [
      {
        title: "Zoned Training",
        description:
          "Առանձին գոտիներ ուժի, ֆունկցիոնալ շարժման և բարձր ինտենսիվության աշխատանքի համար",
      },
      {
        title: "Smart Recovery",
        description:
          "Սառը և տաք վերականգնման փուլեր, շնչառական cooldown և հստակ պլանավորված վերականգնում",
      },
      {
        title: "Progress Metrics",
        description:
          "Մարմնի ցուցանիշներ, պարբերական վերահաշվարկ և տվյալահեն ծրագրի թարմացում",
      },
      {
        title: "Private-Class Mood",
        description:
          "Քիչ աղմուկ, ավելի շատ կենտրոնացում, մաքուր տեսք և կայուն մարզման մթնոլորտ",
      },
    ],
  },
  instagram: {
    eyebrow: "Մթնոլորտ",
    title: "Balance-ի իրական ռիթմը",
    description:
      "Տեսողական հոսք մարզումից, վերականգնումից և ամենօրյա կարգապահությունից",
    shots: [
      {
        title: "Morning Reset",
        caption: "Սկիզբը շնչառությամբ և մաքուր ուշադրությամբ",
        toneClassName: toneClasses[0],
      },
      {
        title: "Strength Session",
        caption: "Վերահսկվող ինտենսիվություն և տեխնիկա",
        toneClassName: toneClasses[1],
      },
      {
        title: "Recovery Zone",
        caption: "Վերականգնումը, որը հաջորդ մարզման հիմքն է",
        toneClassName: toneClasses[2],
      },
      {
        title: "Mobility Flow",
        caption: "Շարժման լայնություն և հոդերի ազատություն",
        toneClassName: toneClasses[3],
      },
      {
        title: "Evening Conditioning",
        caption: "Օրվա վերջում հաշվարկված ծանրաբեռնվածություն",
        toneClassName: toneClasses[4],
      },
      {
        title: "Calm Finish",
        caption: "Հավասարակշռված ավարտ և մաքուր վերականգնում",
        toneClassName: toneClasses[5],
      },
    ],
  },
  finalCta: {
    title: "Ամրագրիր քո փորձնական այցը",
    subtitle:
      "Ծանոթացիր Balance Sport Complex-ին և կազմիր անձնական մարզման ու ռիքավերիի համակարգ",
  },
  footer: {
    description:
      "Ժամանակակից սպորտային համալիր ուժի, շարժման և վերականգնման հավասարակշռված համակարգով",
    rights: "Բոլոր իրավունքները պաշտպանված են",
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
    orderCoffee: "Book A Visit",
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
    title: "Membership plans designed for consistent long term results",
    description:
      "Every package blends strength training, smart recovery, and clear measurable progress",
    products: [
      {
        name: "Essential Membership",
        description:
          "Access to strength, cardio, and mobility zones, ideal for a stable weekly training rhythm",
        price: "$149",
        tastingNote: "Strength / Cardio / Mobility",
      },
      {
        name: "Performance+ Coaching",
        description:
          "Personalized training plans, body assessments, and coach-led progress management",
        price: "$289",
        tastingNote: "Coaching / Progress / Metrics",
      },
      {
        name: "Recovery Lounge Access",
        description:
          "Sauna, cold therapy, and structured recovery protocols that support your nervous system",
        price: "$89",
        tastingNote: "Sauna / Cold / Recovery",
      },
    ],
  },
  ritual: {
    eyebrow: "Philosophy",
    title: "High performance without overload, structure without noise",
    description:
      "At Balance, space, lighting, and programming are aligned so body and mind perform as one system",
    location: "Yerevan, Armenia",
    paragraphs: [
      "Training zones are separated by goal, so movement flow stays clean and intentional",
      "Our method combines performance training, mobility, and nervous-system recovery",
      "Whatever your level, the system adapts to you and protects steady long term progress",
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "A modern sport complex that works like a private wellness club",
    items: [
      {
        title: "Zoned Training",
        description:
          "Dedicated areas for strength, functional movement, and high-intensity conditioning",
      },
      {
        title: "Smart Recovery",
        description:
          "Cold and heat phases, breath-led cooldown, and structured restoration after load",
      },
      {
        title: "Progress Metrics",
        description:
          "Body tracking, periodic recalibration, and data-driven program updates",
      },
      {
        title: "Private-Class Mood",
        description:
          "Lower noise, higher focus, clean visuals, and a premium training atmosphere",
      },
    ],
  },
  instagram: {
    eyebrow: "Atmosphere",
    title: "The real rhythm of Balance",
    description:
      "Visual moments from training, recovery, and disciplined daily performance",
    shots: [
      {
        title: "Morning Reset",
        caption: "Start with breath and focused clarity",
        toneClassName: toneClasses[0],
      },
      {
        title: "Strength Session",
        caption: "Controlled intensity and sharp mechanics",
        toneClassName: toneClasses[1],
      },
      {
        title: "Recovery Zone",
        caption: "Recovery that builds the next session",
        toneClassName: toneClasses[2],
      },
      {
        title: "Mobility Flow",
        caption: "Range, control, and joint freedom",
        toneClassName: toneClasses[3],
      },
      {
        title: "Evening Conditioning",
        caption: "Calculated work at the end of the day",
        toneClassName: toneClasses[4],
      },
      {
        title: "Calm Finish",
        caption: "Balanced closure and clear reset",
        toneClassName: toneClasses[5],
      },
    ],
  },
  finalCta: {
    title: "Book your trial visit",
    subtitle:
      "Step into Balance Sport Complex and set your personal training and recovery system",
  },
  footer: {
    description:
      "Modern sport complex with a balanced system for strength, movement, and recovery",
    rights: "All rights reserved",
  },
};

const ruContent: SiteContent = {
  nav: {
    home: "Главная",
    collection: "Абонементы",
    ritual: "Философия",
    contact: "Контакты",
  },
  actions: {
    orderCoffee: "Записаться на визит",
    enter: "Вход",
    followRitual: "Подписаться на Balance",
    from: "От",
    menu: "Меню",
    language: "Язык",
    close: "Закрыть",
  },
  hero: {
    moments: [
      { text: "Баланс начинается с тишины", start: 0.1, end: 0.25 },
      { text: "Тренируйся точно, восстанавливайся осознанно", start: 0.35, end: 0.5 },
      { text: "Свет, дыхание, сила и пространство", start: 0.6, end: 0.75 },
      { text: "Премиальный wellness, построенный под тебя", start: 0.85, end: 1 },
    ],
    exploreCollection: "Смотреть абонементы",
    scrollHint: "Прокрутите, чтобы войти в опыт Balance",
  },
  collection: {
    eyebrow: "Абонементы",
    title: "Пакеты, созданные для стабильного долгосрочного прогресса",
    description:
      "Каждый пакет объединяет силовую работу, умное восстановление и измеримый рост",
    products: [
      {
        name: "Essential Membership",
        description:
          "Доступ к зонам силы, cardio и mobility, оптимально для устойчивого недельного ритма",
        price: "$149",
        tastingNote: "Strength / Cardio / Mobility",
      },
      {
        name: "Performance+ Coaching",
        description:
          "Персональные планы, тестирование тела и сопровождение тренера по прогрессу",
        price: "$289",
        tastingNote: "Coaching / Progress / Metrics",
      },
      {
        name: "Recovery Lounge Access",
        description:
          "Сауна, холодная терапия и структурированные протоколы восстановления после нагрузок",
        price: "$89",
        tastingNote: "Sauna / Cold / Recovery",
      },
    ],
  },
  ritual: {
    eyebrow: "Философия",
    title: "Высокий результат без перегруза, структура без шума",
    description:
      "В Balance пространство, свет и программы выстроены так, чтобы тело и ум работали как единая система",
    location: "Ереван, Армения",
    paragraphs: [
      "Тренировочные зоны разделены по задаче, поэтому поток движения остается чистым и понятным",
      "Наш метод объединяет performance training, mobility и восстановление нервной системы",
      "Независимо от уровня, система адаптируется под тебя и сохраняет стабильный прогресс",
    ],
  },
  experience: {
    eyebrow: "Опыт",
    title: "Современный спорткомплекс, работающий как private wellness клуб",
    items: [
      {
        title: "Zoned Training",
        description:
          "Отдельные зоны для силы, функционального движения и высокоинтенсивной работы",
      },
      {
        title: "Smart Recovery",
        description:
          "Холод и тепло, дыхательный cooldown и системное восстановление после нагрузки",
      },
      {
        title: "Progress Metrics",
        description:
          "Отслеживание показателей тела, пересчет плана и обновление программы по данным",
      },
      {
        title: "Private-Class Mood",
        description:
          "Меньше шума, больше концентрации, чистая визуальная среда и премиальная атмосфера",
      },
    ],
  },
  instagram: {
    eyebrow: "Атмосфера",
    title: "Реальный ритм Balance",
    description:
      "Визуальные моменты тренировок, восстановления и дисциплинированного daily-подхода",
    shots: [
      {
        title: "Morning Reset",
        caption: "Старт с дыханием и сфокусированным вниманием",
        toneClassName: toneClasses[0],
      },
      {
        title: "Strength Session",
        caption: "Контролируемая интенсивность и точная техника",
        toneClassName: toneClasses[1],
      },
      {
        title: "Recovery Zone",
        caption: "Восстановление как база следующей тренировки",
        toneClassName: toneClasses[2],
      },
      {
        title: "Mobility Flow",
        caption: "Амплитуда, контроль и свобода суставов",
        toneClassName: toneClasses[3],
      },
      {
        title: "Evening Conditioning",
        caption: "Рассчитанная работа в конце дня",
        toneClassName: toneClasses[4],
      },
      {
        title: "Calm Finish",
        caption: "Сбалансированное завершение и чистый reset",
        toneClassName: toneClasses[5],
      },
    ],
  },
  finalCta: {
    title: "Запишитесь на пробный визит",
    subtitle:
      "Познакомьтесь с Balance Sport Complex и выстройте личную систему тренировок и восстановления",
  },
  footer: {
    description:
      "Современный спорткомплекс с сбалансированной системой силы, движения и восстановления",
    rights: "Все права защищены",
  },
};

export const siteContent: Record<LanguageCode, SiteContent> = {
  am: amContent,
  en: enContent,
  ru: ruContent,
};
