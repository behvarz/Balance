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
  "from-[#233644] via-[#1FA15A] to-[#101A22]",
  "from-[#2D4456] via-[#28C279] to-[#172431]",
  "from-[#2B3F4E] via-[#D89B47] to-[#1A2936]",
  "from-[#263A49] via-[#1A9365] to-[#15222E]",
  "from-[#30495A] via-[#B67A2D] to-[#1B2934]",
  "from-[#1D3040] via-[#26B873] to-[#243848]",
];

const amContent: SiteContent = {
  nav: {
    home: "Գլխավոր",
    collection: "Անդամակցություններ",
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
      { text: "Հավասարակշռությունը սկսվում է կարգապահությունից", start: 0.1, end: 0.25 },
      { text: "Մարզվիր ճշգրիտ, վերականգնվիր խելամիտ", start: 0.35, end: 0.5 },
      { text: "Ուժ, շնչառություն, շարժում և վերահսկում", start: 0.6, end: 0.75 },
    ],
    exploreCollection: "Բացահայտիր անդամակցությունները",
    scrollHint: "Սքրոլ արա՝ Balance փորձառությունը տեսնելու համար",
  },
  collection: {
    eyebrow: "Ծրագրեր",
    title: "Անդամակցություններ՝ կառուցված արդյունքի և կայուն ռիթմի համար",
    description:
      "Յուրաքանչյուր փաթեթ միավորում է մարզում, վերականգնում և հստակ առաջընթացի հսկում՝ առանց ավելորդ աղմուկի",
    products: [
      {
        name: "Հիմնական փաթեթ",
        description:
          "Մուտք ուժային, կարդիո և շարժունակության գոտիներ՝ ամենօրյա կայուն մարզման համար",
        price: "$149",
        tastingNote: "Ուժ / Կարդիո / Շարժունակություն",
      },
      {
        name: "Առաջընթաց+ մարզչական",
        description:
          "Անհատական ծրագիր, պարբերական թեստավորում և մարզչական ուղեկցում",
        price: "$289",
        tastingNote: "Մարզչական / Չափումներ / Արդյունք",
      },
      {
        name: "Վերականգնման գոտի",
        description:
          "Սաունա, սառը թերապիա և վերականգնման պրոտոկոլներ նյարդային համակարգի համար",
        price: "$89",
        tastingNote: "Սաունա / Սառը / Վերականգնում",
      },
    ],
  },
  ritual: {
    eyebrow: "Balance-ի փիլիսոփայություն",
    title: "Բարձր արդյունք՝ առանց քաոսի, ինտենսիվություն՝ առանց գերծանրաբեռնվածության",
    description:
      "Տարածքը, լույսը և ծրագրերը նախագծված են այնպես, որ մարմինը և միտքը աշխատեն նույն համակարգում",
    location: "Երևան, Հայաստան",
    paragraphs: [
      "Մարզման գոտիները տարանջատված են ըստ նպատակի՝ մաքուր շարժման հոսքի համար",
      "Մեր մեթոդը համադրում է արդյունքային մարզում, շարժունակություն և վերականգնման գիտակցված փուլեր",
      "Անկախ մակարդակից՝ ծրագիրը հարմարվում է քեզ և պահպանում կայուն առաջընթացը",
    ],
  },
  experience: {
    eyebrow: "Փորձառություն",
    title: "Ժամանակակից սպորտային համալիր՝ փակ բարեկեցության ակումբի տրամադրությամբ",
    items: [
      {
        title: "Գոտիական մարզում",
        description:
          "Առանձին գոտիներ ուժային, ֆունկցիոնալ և բարձր ինտենսիվության մարզման համար",
      },
      {
        title: "Խելացի վերականգնում",
        description:
          "Ջերմ և սառը փուլեր, շնչառական հանգստացում և կառուցված վերականգնում",
      },
      {
        title: "Առաջընթացի չափումներ",
        description:
          "Մարմնի ցուցանիշների վերահսկում և տվյալահեն ծրագրի թարմացում",
      },
      {
        title: "Հանգիստ պրեմիում միջավայր",
        description:
          "Քիչ աղմուկ, մաքուր միջավայր, ավելի շատ կենտրոնացում և կարգապահություն",
      },
    ],
  },
  instagram: {
    eyebrow: "Մթնոլորտ",
    title: "Balance-ի իրական ռիթմը",
    description:
      "Տեսողական կադրեր մարզումից, վերականգնումից և համալիրի էներգետիկ միջավայրից",
    shots: [
      {
        title: "Ուժային գոտի",
        caption: "Հսկվող ծանրաբեռնվածություն և ճշգրիտ տեխնիկա",
        toneClassName: toneClasses[0],
      },
      {
        title: "Ֆունկցիոնալ գոտի",
        caption: "Շարժման ազատություն և ուժի դինամիկա",
        toneClassName: toneClasses[1],
      },
      {
        title: "Լողավազանի ռիթմ",
        caption: "Վերականգնման հավասարակշռված միջավայր",
        toneClassName: toneClasses[2],
      },
      {
        title: "Վերականգնման փուլ",
        caption: "Սթրեսի նվազում և նյարդային համակարգի հանգստացում",
        toneClassName: toneClasses[3],
      },
      {
        title: "Խմբային էներգիա",
        caption: "Թիմային ռիթմ և հստակ ուղեցույց",
        toneClassName: toneClasses[4],
      },
      {
        title: "Երեկոյան կենտրոնացում",
        caption: "Օրվա ավարտ՝ վերահսկված և կենտրոնացած",
        toneClassName: toneClasses[5],
      },
    ],
  },
  finalCta: {
    title: "Ամրագրիր փորձնական այցդ",
    subtitle:
      "Միացիր Balance Sport Complex-ին և կառուցիր մարզման ու վերականգնման քո անձնական համակարգը",
  },
  footer: {
    description:
      "Ժամանակակից սպորտային համալիր՝ ուժի, շարժման և վերականգնման հավասարակշռված համակարգով",
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
      { text: "Balance Begins With Discipline", start: 0.1, end: 0.25 },
      { text: "Train Precisely, Recover Intelligently", start: 0.35, end: 0.5 },
      { text: "Strength, Breath, Movement, Control", start: 0.6, end: 0.75 },
    ],
    exploreCollection: "Explore Memberships",
    scrollHint: "Scroll to enter the Balance experience",
  },
  collection: {
    eyebrow: "Programs",
    title: "Membership plans designed for performance and consistency",
    description:
      "Every package blends focused training, intelligent recovery, and measurable progress",
    products: [
      {
        name: "Essential Plan",
        description:
          "Access to strength, cardio, and mobility zones for a stable weekly rhythm",
        price: "$149",
        tastingNote: "Strength / Cardio / Mobility",
      },
      {
        name: "Performance+ Coaching",
        description:
          "Personalized plan, body testing, and coach-led progression tracking",
        price: "$289",
        tastingNote: "Coaching / Metrics / Results",
      },
      {
        name: "Recovery Lounge",
        description:
          "Sauna, cold therapy, and recovery protocols to restore your nervous system",
        price: "$89",
        tastingNote: "Sauna / Cold / Recovery",
      },
    ],
  },
  ritual: {
    eyebrow: "Balance Philosophy",
    title: "High output without noise, intensity without overload",
    description:
      "Space, lighting, and programming are designed to align body and mind into one system",
    location: "Yerevan, Armenia",
    paragraphs: [
      "Training zones are separated by objective, keeping movement flow clean and intentional",
      "Our method combines performance training, mobility work, and recovery phases",
      "Whatever your level, the system adapts to you and protects long-term progress",
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "A modern sport complex with a private-club wellness atmosphere",
    items: [
      {
        title: "Zoned Training",
        description:
          "Dedicated areas for strength, functional movement, and high-intensity conditioning",
      },
      {
        title: "Smart Recovery",
        description:
          "Heat and cold cycles, breath-led cooldown, and structured restoration",
      },
      {
        title: "Progress Metrics",
        description:
          "Body tracking, periodic recalibration, and data-driven program updates",
      },
      {
        title: "Calm Premium Mood",
        description:
          "Lower noise, sharper focus, clean visuals, and disciplined execution",
      },
    ],
  },
  instagram: {
    eyebrow: "Atmosphere",
    title: "The real rhythm of Balance",
    description:
      "Visual moments from training, recovery, and daily performance discipline",
    shots: [
      {
        title: "Strength Floor",
        caption: "Controlled load and precise mechanics",
        toneClassName: toneClasses[0],
      },
      {
        title: "Functional Zone",
        caption: "Dynamic movement and active mobility",
        toneClassName: toneClasses[1],
      },
      {
        title: "Pool Rhythm",
        caption: "Balanced environment for restoration",
        toneClassName: toneClasses[2],
      },
      {
        title: "Recovery Ritual",
        caption: "Nervous-system reset and physical decompression",
        toneClassName: toneClasses[3],
      },
      {
        title: "Group Energy",
        caption: "Coach-led structure and collective momentum",
        toneClassName: toneClasses[4],
      },
      {
        title: "Evening Focus",
        caption: "A calm finish with deliberate effort",
        toneClassName: toneClasses[5],
      },
    ],
  },
  finalCta: {
    title: "Book your trial visit",
    subtitle:
      "Join Balance Sport Complex and build your personal system for training and recovery",
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
      { text: "Баланс начинается с дисциплины", start: 0.1, end: 0.25 },
      { text: "Тренируйся точно, восстанавливайся осознанно", start: 0.35, end: 0.5 },
      { text: "Сила, дыхание, движение и контроль", start: 0.6, end: 0.75 },
    ],
    exploreCollection: "Смотреть абонементы",
    scrollHint: "Прокрутите, чтобы войти в атмосферу Balance",
  },
  collection: {
    eyebrow: "Программы",
    title: "Абонементы для стабильного прогресса и высокой формы",
    description:
      "Каждый пакет сочетает тренировки, продуманное восстановление и контроль результата",
    products: [
      {
        name: "Essential Plan",
        description:
          "Доступ к зонам силы, cardio и mobility для устойчивого недельного ритма",
        price: "$149",
        tastingNote: "Strength / Cardio / Mobility",
      },
      {
        name: "Performance+ Coaching",
        description:
          "Индивидуальный план, тестирование и сопровождение тренера по прогрессу",
        price: "$289",
        tastingNote: "Coaching / Metrics / Results",
      },
      {
        name: "Recovery Lounge",
        description:
          "Сауна, холодовая терапия и протоколы восстановления после нагрузки",
        price: "$89",
        tastingNote: "Sauna / Cold / Recovery",
      },
    ],
  },
  ritual: {
    eyebrow: "Философия Balance",
    title: "Высокий результат без шума, интенсивность без перегруза",
    description:
      "Пространство, свет и программы построены так, чтобы тело и ум работали как единая система",
    location: "Ереван, Армения",
    paragraphs: [
      "Зоны тренировок разделены по задачам, чтобы движение оставалось чистым и понятным",
      "Наш подход сочетает performance training, mobility и этапы восстановления",
      "Независимо от уровня, система адаптируется к вам и сохраняет стабильный прогресс",
    ],
  },
  experience: {
    eyebrow: "Опыт",
    title: "Современный спорткомплекс с атмосферой private wellness клуба",
    items: [
      {
        title: "Zoned Training",
        description:
          "Отдельные зоны для силовой работы, функционального движения и интенсивного кондишнинга",
      },
      {
        title: "Smart Recovery",
        description:
          "Циклы тепла и холода, дыхательный cooldown и структурированное восстановление",
      },
      {
        title: "Progress Metrics",
        description:
          "Отслеживание показателей, периодическая корректировка и обновление программы",
      },
      {
        title: "Calm Premium Mood",
        description:
          "Меньше шума, больше концентрации, чистая визуальная среда и дисциплина",
      },
    ],
  },
  instagram: {
    eyebrow: "Атмосфера",
    title: "Реальный ритм Balance",
    description:
      "Визуальные сцены тренировок, восстановления и ежедневной спортивной дисциплины",
    shots: [
      {
        title: "Strength Floor",
        caption: "Контролируемая нагрузка и точная техника",
        toneClassName: toneClasses[0],
      },
      {
        title: "Functional Zone",
        caption: "Динамика движения и активная мобильность",
        toneClassName: toneClasses[1],
      },
      {
        title: "Pool Rhythm",
        caption: "Сбалансированная среда для восстановления",
        toneClassName: toneClasses[2],
      },
      {
        title: "Recovery Ritual",
        caption: "Снижение стресса и перезагрузка нервной системы",
        toneClassName: toneClasses[3],
      },
      {
        title: "Group Energy",
        caption: "Тренерская структура и командный темп",
        toneClassName: toneClasses[4],
      },
      {
        title: "Evening Focus",
        caption: "Спокойный финал дня с осознанной нагрузкой",
        toneClassName: toneClasses[5],
      },
    ],
  },
  finalCta: {
    title: "Запишитесь на пробный визит",
    subtitle:
      "Присоединяйтесь к Balance Sport Complex и постройте личную систему тренировок и восстановления",
  },
  footer: {
    description:
      "Современный спорткомплекс со сбалансированной системой силы, движения и восстановления",
    rights: "Все права защищены",
  },
};

export const siteContent: Record<LanguageCode, SiteContent> = {
  am: amContent,
  en: enContent,
  ru: ruContent,
};
