export const header = {
  logo: {
    src: "/static/images/logo.svg",
    alt: "logo",
  },
  menuList: [
    {
      label: "победители",
      href: "#winners",
    },
    {
      label: "О лотерее",
      href: "#about",
    },
    {
      label: "как участвовать",
      href: "#steps",
    },
    {
      label: "безопасность",
      href: "#security",
    },
    {
      label: "приложение",
      href: "#apps",
    },
  ],
  img: {
    src: "/static/images/header-img.svg",
    alt: "header-img",
  },
};

export const intro = {
  title: "Разыграем",
  list: [
    {
      content: [
        {
          text: "автомобиль",
          style: "intro__text_bg",
        },
        {
          text: "премиум-класса",
        },
      ],
    },
    {
      content: [
        {
          text: "Джекпот 800 000 000 ₽",
        },
      ],
      style: "intro__text_pos_abs",
    },
    {
      content: [
        {
          text: "призы по 300 000 ₽",
        },
      ],
    },
  ],
  button: {
    text: "Участвовать",
  },
  ntv: {
    logo: {
      src: "/static/images/ntv-logo.png",
      alt: "ntv-logo",
    },
    text: "Смотрите трансляцию 1435-го тиража 10 апреля на НТВ",
  },
};

export const results = {
  title: "Итоги 2021 года",
  list: [
    {
      img: {
        src: "/static/images/calendar.png",
        alt: "calendar",
      },
      title: ">169 млн",
      subtitle: "билетов куплено",
    },
    {
      img: {
        src: "/static/images/cup.png",
        alt: "cup",
      },
      title: "~8,4 млрд",
      subtitle: "рублей выиграно",
    },
    {
      img: {
        src: "/static/images/vault.png",
        alt: "vault",
      },
      title: "703",
      subtitle: "миллионера",
    },
    {
      img: {
        src: "/static/images/mark.png",
        alt: "mark",
      },
      title: "«Русское лото»",
      subtitle: "получило премию",
      subtitleBold: "«Марка № 1 в России»",
    },
  ],
  button: {
    text: "Участвовать",
  },
};

export const about = {
  title: "Как участвовать",
  steps: [
    {
      img: [
        {
          src: "/static/images/computer.png",
          alt: "computer",
        },
      ],

      text: "Выберите билет",
    },
    {
      img: [
        {
          src: "/static/images/hand.png",
          alt: "hand",
        },
      ],

      text: "Оплатите картой или другим удобным способом",
    },
    {
      img: [
        {
          src: "/static/images/aboutPhone.png",
          alt: "phone",
        },
        {
          src: "/static/images/aboutPult.png",
          alt: "pult",
          position: "abs",
        },
      ],

      text: "Смотрите трансляцию розыгрыша или проверьте билет на сайте ",
      link: {
        label: "stoloto.ru",
        href: "stoloto.ru",
      },
    },
    {
      img: [
        {
          src: "/static/images/aboutCup.png",
          alt: "cup",
        },
      ],

      text: "Насладитесь ожиданием, предвкушением и, возможно, радостью победы",
    },
  ],
  button: {
    text: "Участвовать",
  },
};

export const security = {
  title: "Покупайте билеты лотереи онлайн — это безопасно",
  card: [
    {
      title: "безопасная регистрация",
      icon: {
        src: "/static/images/securityCard1.svg",
        alt: "security",
      },
      description:
        "При регистрации вы указываете только свой электронный адрес и номер телефона. На этот номер мы будем отправлять вам sms с паролем для получения выигрышей на сайте. ",
    },
    {
      title: "безопасность данных",
      icon: {
        src: "/static/images/securityCard2.svg",
        alt: "security",
      },
      description:
        "Мы не сохраняем номера банковских карт, платёжные  пароли и другие данные, которые вы вводите при оплате билетов. Вся информация хранится только на стороне платёжной системы, которую  вы выбираете сами.L",
      images: [
        {
          src: "/static/images/visa.svg",
          alt: "visa",
        },
        {
          src: "/static/images/masterCard.svg",
          alt: "masterCard",
        },
        {
          src: "/static/images/mir.svg",
          alt: "mir",
        },
      ],
    },
    {
      title: "Государственные лотереи",
      icon: {
        src: "/static/images/securityCard3.svg",
        alt: "security",
      },
      description:
        "Организаторами всех лотерей в России являются Министерство спорта и Министерство финансов. Они следят за тем, чтобы все розыгрыши проводились честно, а победители вовремя  получали выигрыши.",
    },
    {
      title: "Ваш билет никогда не потеряется",
      icon: {
        src: "/static/images/securityCard4.svg  ",
        alt: "security",
      },
      description:
        "Вся информация о купленных билетах хранится в вашем личном кабинете. Если возникнут проблемы, вы сможете обратиться в нашу службу поддержки. Мы всегда вам поможем. ",
    },
  ],
  video: {
    src: "/static/images/video.png",
  },
  button: {
    text: "Купить билет",
  },
};

export const downloadApp = {
  title: "Скачайте мобильное приложение «Столото»",
  cardList: [
    {
      icon: {
        src: "/static/images/downloadAppCard1.png",
        alt: "download",
      },
      description: "Удобная и безопасная оплата",
    },
    {
      icon: {
        src: "/static/images/downloadAppCard2.png",
        alt: "download",
      },
      description: "Быстрый вывод денег на карту",
    },
    {
      icon: {
        src: "/static/images/downloadAppCard3.png",
        alt: "download",
      },
      description: "Лотереи всегда под рукой",
    },
    {
      icon: {
        src: "/static/images/downloadAppCard4.png",
        alt: "download",
      },
      description: "Push-уведомления о выигрышах",
    },
  ],
  storeList: [
    {
      icon: {
        src: "/static/images/apple.svg",
        alt: "download",
      },
      forPhone: "Для",
      phone: "iPhone",
    },
    {
      icon: {
        src: "/static/images/huawei.png",
        alt: "download",
      },
      forPhone: "Для",
      phone: "Huawei",
    },
    {
      icon: {
        src: "/static/images/android.svg",
        alt: "download",
      },
      forPhone: "Для других",
      phone: "android",
    },
    {
      icon: {
        src: "/static/images/samsung.png",
        alt: "download",
      },
      forPhone: "Для",
      phone: "Samsung",
    },
    {
      icon: {
        src: "/static/images/xiomi.png",
        alt: "download",
      },
      forPhone: "Для",
      phone: "Xiaomi",
    },
  ],
  phoneImg: {
    src: "/static/images/phone.png",
    alt: "phone",
  },
};

export const footer = {
  logo: {
    src: "/static/images/footerLogo.svg",
    alt: "logo",
  },
  copyright: [
    "Изображение автомобиля может отличаться от разыгрываемого приза в тираже «Русского лото» № 1435.  Денежный эквивалент автомобиля – 4 990 000 рублей.",
    "Фраза «Джекпот 800 000 000 ₽» указывает на минимальный гарантированный размер средств призового фонда в категории «Джекпот».",
    "Победитель премии «Марка № 1» в России в 2021 году в категории «лотереи».",
    "Фраза «Победителей будет больше!» означает, что розыгрыш будет вестись до 87-го хода включительно и в таком тираже победителей будет больше, чем в тиражах, в которых розыгрыш ведётся до 86-го хода включительно.",
    " «ВГЛ 4 Спорт» (алгоритм определения выигрышей № 3), коммерческое наименование — «Русское лото», срок проведения —  до 31.12.2029. Рекламируемый тираж — № 1435 (розыгрыш 09.04.2022). Информация об организаторе лотереи, о правилах ее проведения, призовом фонде, количестве призов или выигрышей, о сроках, месте и порядке их получения — на stoloto.ru. Розыгрыши проводятся еженедельно. Выигрыши носят вероятностный характер. Лотерея не является способом заработка  и источником дохода. АО «ТК «Центр», ОГРН 1127746385095, адрес: 109316, Москва, Волгоградский пр-т, д. 43, корп. 3, этаж 10, пом. XXV, ком. 13Б. Реклама. 18+",
  ],
  socialMedia: [
    {
      src: "/static/images/vk.svg",
      alt: "vk",
    },
    {
      src: "/static/images/ok.svg",
      alt: "ok",
    },
    {
      src: "/static/images/tikTok.svg",
      alt: "tikTok",
    },
    {
      src: "/static/images/rutube.svg",
      alt: "rutube",
    },
  ],
  partners: {
    logo: [
      {
        src: "/static/images/minSport.png",
        alt: "minSport",
      },
      {
        src: "/static/images/minFinance.png",
        alt: "minFinance",
      },
    ],
    organizators: "Организаторами лотерей являются Министерство спорта РФ и Министерство финансов РФ.",
    logoAssociations: {
      src: "/static/images/logoAssociations.png",
      alt: "logoAssociations",
    },
    right:
      "«Столото» (АО «ТК «Центр») состоит во Всемирной и Европейской лотерейных ассоциациях (The World Lottery Association и  The European Lotteries Association). Это гарантирует соблюдение прав участников, случайность определения победителей, своевременную выплату выигрышей, конфиденциальность личных данных.",
    note: [
      "WLA — международное объединение компаний-операторов государственных лотерей.",
      "ELA — объединение лотерейных компаний из Европы и соседних регионов.",
    ],
  },
};
