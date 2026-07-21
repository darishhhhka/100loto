export const header = {
  logo: {
    src: "/images/intro/logo.svg",
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
    src: "/images/intro/header-img.svg",
    alt: "header-img",
  },
};

export const intro = {
  title: "Разыграем",
  content: [
    {
      priz: [
        {
          text: "автомобиль",
          style: "intro__text_bg",
        },
        {
          text: "премиум-класса",
          style: "intro__text_bg-m",
        },
      ],
    },
    {
      priz: [
        {
          text: "Джекпот 800 000 000 ₽",
        },
      ],
      style: "intro__text_pos_abs",
    },
    {
      priz: [
        {
          text: "призы по 300 000 ₽",
        },
      ],
    },
  ],

  triangleIcon: {
    img: {
      src: "/images/intro/triangle.svg",
      alt: "triangle-icon",
    },

    sourceData: {
      sources: [
        {
          srcSet: "/images/intro/triangleMobile.svg",
          type: "image/png",
          media: "(max-width: 1024px)",
        },
      ],
    },
  },

  button: {
    text: "Участвовать",
    href: "http://stoloto.ru/",
  },
  ntv: {
    logo: {
      src: "/images/ntv-logo.png",
      alt: "ntv-logo",
    },
    text: "Смотрите трансляцию 1435-го тиража 10 апреля на НТВ",
  },
  imgMen: {
    img: {
      src: "/images/intro/men.png",
      alt: "men",
    },
    sourceData: {
      sources: [
        {
          srcSet: "/images/intro/menMobile.png",
          type: "image/png",
          media: "(max-width: 1024px)",
        },
      ],
    },
  },
  imgCosmos: {
    img: {
      src: "/images/intro/intro-bg.png",
      alt: "intro cosmos",
    },
  },

  imgCar: {
    img: {},
  },

  imgPattern: {
    img: {
      src: "/images/intro/pattern.svg",
      alt: "pattern",
    },
  },
};

export const winners = {
  title: "Победители",
  link: {
    text: "Ещё больше историй смотрите в соцсетях",
    href: "#winners",
  },

  imgMen: {
    img: {
      src: "/images/winners/man.png",
      alt: "men",
    },
  },

  imgPattern: {
    img: {
      src: "/images/winners/pattern.svg",
      alt: "pattern",
    },
  },

  winners: [
    {
      img: {
        src: "/images/winners/winner1.png",
        alt: "winner1",
      },
      name: "Ольга Сусакина",
      prize: "Загородный дом",
      srcVideo: "https://rutube.ru/play/embed/3cb1e1d9830d450cd88f06530d1e6b94/",
    },
    {
      img: {
        src: "/images/winners/winner2.png",
        alt: "winner2",
      },
      name: "Андрей Павлик",
      prize: "Автомобиль",
      srcVideo: "https://rutube.ru/play/embed/fbe15da7b00bf9a532d05481ba736a35/",
    },
    {
      img: {
        src: "/images/winners/winner3.png",
        alt: "winner3",
      },
      name: "Анастасия Малюта",
      prize: "600 000 ₽",
      srcVideo: "https://rutube.ru/play/embed/87bf63ad103afd4dc4acddb2799b5962/",
    },
    {
      img: {
        src: "/images/winners/winner4.png",
        alt: "winner4",
      },
      name: "Анна Макарова",
      prize: "1 000 000 ₽ ",
      srcVideo: "https://rutube.ru/play/embed/7bd6278f426a5bc8496a9a1a822b63e6/",
    },
    {
      img: {
        src: "/images/winners/winner5.png",
        alt: "winner5",
      },
      name: "Рахима Игнатова",
      prize: "1 000 000 ₽ ",
      srcVideo: "https://rutube.ru/play/embed/c9722a301353ae57cc22916cf6fd45e6/",
    },
    {
      img: {
        src: "/images/winners/winner6.png",
        alt: "winner6",
      },
      name: "Татьяна Зеликова",
      prize: "812 500 ₽",
      srcVideo: "https://rutube.ru/play/embed/72479cee6ea5c3ca0094f50450d0fdca/",
    },
    {
      img: {
        src: "/images/winners/winner7.png",
        alt: "winner7",
      },
      name: "Елена Войтевич",
      prize: "1 000 000 ₽ ",
      srcVideo: "https://rutube.ru/play/embed/c9d69c7250ebc82a6cff1c59b3378482/",
    },
    {
      img: {
        src: "/images/winners/winner8.png",
        alt: "winner8",
      },
      name: "Роман Варганов",
      prize: "1 000 000 ₽ ",
      srcVideo: "https://rutube.ru/play/embed/2e749e2a7c2352adb1664da82af301fa",
    },
  ],

  playIcon: {
    src: "/images/winners/winners.svg",
  },

  arrowIcon: {
    src: "/images/winners/arrow.svg",
  },

  button: {
    text: "Хочу так же!",
    href: "http://stoloto.ru/",
  },
};

export const results = {
  title: "Итоги 2021 года",
  list: [
    {
      image: {
        imgAttr: {
          src: "/images/results/calendar.png",
          alt: "calendar",
        },
        sourceData: {
          sources: [
            {
              srcSet: "/images/results/calendarMobile.png",
              type: "image/png",
              media: "(max-width: 768px)",
            },
          ],
        },
      },
      title: {
        number: ">169",
        text: "млн",
      },
      subtitle: "билетов куплено",
    },
    {
      image: {
        imgAttr: {
          src: "/images/results/cup.png",
          alt: "cup",
        },
        sourceData: {
          sources: [
            {
              srcSet: "/images/results/cupMobile.png",
              type: "image/png",
              media: "(max-width: 768px)",
            },
          ],
        },
      },
      title: {
        number: "~8,4",
        text: "млрд",
      },
      subtitle: "рублей выиграно",
    },
    {
      image: {
        imgAttr: {
          src: "/images/results/safe.png",
          alt: "safe",
        },
        sourceData: {
          sources: [
            {
              srcSet: "/images/results/safeMobile.png",
              type: "image/png",
              media: "(max-width: 768px)",
            },
          ],
        },
      },

      title: {number: "703"},
      subtitle: "миллионера",
    },
    {
      image: {
        imgAttr: {
          src: "/images/results/marka.png",
          alt: "marka",
        },
        sourceData: {
          sources: [
            {
              srcSet: "/images/results/markaMobile.png",
              type: "image/png",
              media: "(max-width: 768px)",
            },
          ],
        },
      },

      title: {text: "«Русское лото»"},
      subtitle: "получило премию",
      subtitleBold: "«Марка № 1 в России»",
    },
  ],

  rocket: {
    imgAttr: {
      src: "/images/results/rocket.png",
    },
  },

  star: {
    imgAttr: {
      src: "/images/results/star.svg",
    },
  },

  imgPattern: {
    img: {
      src: "/images/results/pattern.svg",
    },
  },

  button: {
    text: "Участвовать",
    href: "http://stoloto.ru/",
  },
};

export const about = {
  title: "Как участвовать",
  steps: [
    {
      images: [
        {
          img: {
            src: "/images/about/computer.png",
            alt: "computer",
          },
          sourceData: {
            sources: [
              {
                srcSet: "/images/about/computerMobile.png",
                type: "image/png",
                media: "(max-width: 768px)",
              },
            ],
          },
        },
      ],
      text: "Выберите билет",
    },
    {
      images: [
        {
          img: {
            src: "/images/about/hand.png",
            alt: "hand",
          },
          sourceData: {
            sources: [
              {
                srcSet: "/images/about/handMobile.png",
                type: "image/png",
                media: "(max-width: 768px)",
              },
            ],
          },
        },
      ],

      text: "Оплатите картой или другим удобным способом",
    },
    {
      images: [
        {
          img: {
            src: "/images/about/phone.png",
            alt: "phone",
          },
          sourceData: {
            sources: [
              {
                srcSet: "/images/about/phoneMobile.png",
                type: "image/png",
                media: "(max-width: 768px)",
              },
            ],
          },
        },
      ],

      text: "Смотрите трансляцию розыгрыша или проверьте билет на сайте ",
      link: {
        label: "stoloto.ru",
        href: "stoloto.ru",
      },
    },
    {
      images: [
        {
          img: {
            src: "/images/about/cup.png",
            alt: "cup",
          },
          sourceData: {
            sources: [
              {
                srcSet: "/images/about/cupMobile.png",
                type: "image/png",
                media: "(max-width: 768px)",
              },
            ],
          },
        },
      ],
      text: "Насладитесь ожиданием, предвкушением и, возможно, радостью победы",
    },
  ],

  imgSputnik: {
    src: "/images/about/sputnik.png",
  },

  imgRing: {
    src: "/images/about/ring.svg",
  },

  button: {
    text: "Участвовать",
    href: "http://stoloto.ru/",
  },
};

export const security = {
  title: "Покупайте билеты лотереи онлайн — это безопасно",
  card: [
    {
      title: "безопасная регистрация",
      icon: {
        src: "/images/security/securityCard1.svg",
        alt: "security",
      },
      description:
        "При регистрации вы указываете только свой электронный адрес и номер телефона. На этот номер мы будем отправлять вам sms с паролем для получения выигрышей на сайте. ",
    },
    {
      title: "безопасность данных",
      icon: {
        src: "/images/security/securityCard2.svg",
        alt: "security",
      },
      description:
        "Мы не сохраняем номера банковских карт, платёжные  пароли и другие данные, которые вы вводите при оплате билетов. Вся информация хранится только на стороне платёжной системы, которую  вы выбираете сами.L",
      paySistem: [
        {
          src: "/images/security/visa.svg",
          alt: "visa",
        },
        {
          src: "/images/security/masterCard.svg",
          alt: "masterCard",
        },
        {
          src: "/images/security/mir.svg",
          alt: "mir",
        },
      ],
    },
    {
      title: "Государственные лотереи",
      icon: {
        src: "/images/security/securityCard3.svg",
        alt: "security",
      },
      description:
        "Организаторами всех лотерей в России являются Министерство спорта и Министерство финансов. Они следят за тем, чтобы все розыгрыши проводились честно, а победители вовремя  получали выигрыши.",
    },
    {
      title: "Ваш билет никогда не потеряется",
      icon: {
        src: "/images/security/securityCard4.svg  ",
        alt: "security",
      },
      description:
        "Вся информация о купленных билетах хранится в вашем личном кабинете. Если возникнут проблемы, вы сможете обратиться в нашу службу поддержки. Мы всегда вам поможем. ",
    },
  ],
  video: {
    src: "/images/security/video.png",
  },
  button: {
    text: "Купить билет",
    href: "http://stoloto.ru/",
  },
};

export const downloadApp = {
  title: "Скачайте мобильное приложение «Столото»",
  cardList: [
    {
      icon: {
        src: "/images/downloadApp/downloadAppCard1.png",
        alt: "download",
      },
      description: "Удобная и безопасная оплата",
    },
    {
      icon: {
        src: "/images/downloadApp/downloadAppCard2.png",
        alt: "download",
      },
      description: "Быстрый вывод денег на карту",
    },
    {
      icon: {
        src: "/images/downloadApp/downloadAppCard3.png",
        alt: "download",
      },
      description: "Лотереи всегда под рукой",
    },
    {
      icon: {
        src: "/images/downloadApp/downloadAppCard4.png",
        alt: "download",
      },
      description: "Push-уведомления о выигрышах",
    },
  ],
  storeList: [
    {
      icon: {
        src: "/images/downloadApp/IPhone.png",
        alt: "download",
      },
      forPhone: "Для",
      phone: "iPhone",
    },
    {
      icon: {
        src: "/images/downloadApp/samsung.png",
        alt: "download",
      },
      forPhone: "Для",
      phone: "Samsung",
    },
    {
      icon: {
        src: "/images/downloadApp/huawei.png",
        alt: "download",
      },
      forPhone: "Для",
      phone: "Huawei",
    },
    {
      icon: {
        src: "/images/downloadApp/xiaomi.png",
        alt: "download",
      },
      forPhone: "Для",
      phone: "Xiaomi",
    },
    {
      icon: {
        src: "/images/downloadApp/Android.png",
        alt: "download",
      },
      forPhone: "Для других",
      phone: "android",
    },
  ],
  phoneImg: {
    img: {
      src: "/images/downloadApp/phone.png",
      alt: "phone",
    },
    sourceData: {
      sources: [
        {
          srcSet: "/images/downloadApp/iphoneMobile.png",
          type: "image/png",
          media: "(max-width: 768px)",
        },
      ],
    },
  },

  cosmonautImg: {
    src: "/images/downloadApp/cosmonaut.png",
  },
};

export const moreWinners = {
  title: "Победителей будет больше!",
  button: {
    text: "Купить билеты",
    href: "http://stoloto.ru/",
  },
  ntv: {
    logo: {
      src: "/images/ntv-logo.png",
      alt: "ntv-logo",
    },
    text: "Смотрите трансляцию 1435-го тиража 10 апреля на НТВ",
  },

  bgImg: {
    img: {
      src: "/images/moreWinners/cosmos.png",
      alt: "cosmos",
    },

    sourceData: {
      sources: [
        {
          srcSet: "/images/moreWinners/cosmosMobile.png",
          type: "image/png",
          media: "(max-width: 767px)",
        },
      ],
    },
  },

  hatCosmonaut: {
    src: "/images/moreWinners/hat.png",
  },

  star: {
    imgAttr: {
      src: "/images/moreWinners/star.svg",
    },
  },
};

export const footer = {
  logo: {
    src: "/images/footerLogo.svg",
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
      src: "/images/footer/vk.svg",
      alt: "vk",
    },
    {
      src: "/images/footer/ok.svg",
      alt: "ok",
    },
    {
      src: "/images/footer/tikTok.svg",
      alt: "tikTok",
    },
    {
      src: "/images/footer/rutube.svg",
      alt: "rutube",
    },
  ],
  partners: {
    logo: [
      {
        src: "/images/footer/minSport.png",
        alt: "minSport",
      },
      {
        src: "/images/footer/minFinance.png",
        alt: "minFinance",
      },
    ],
    organizators: "Организаторами лотерей являются Министерство спорта РФ и Министерство финансов РФ.",
    logoAssociations: {
      src: "/images/footer/logoAssociations.png",
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

export const ntv = {
  logo: {
    src: "/images/ntv-logo.png",
    alt: "ntv-logo",
  },
  text: "Смотрите трансляцию 1435-го тиража 10 апреля на НТВ",
};
