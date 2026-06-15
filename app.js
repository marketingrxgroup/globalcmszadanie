const sites = [
  {
    id: "global-cms",
    name: "GLOBAL CMS MENU",
    profileTitle: "Единно CMS меню",
    profileNote: "Предложение",
    type: "Единно CMS меню / препоръчано решение",
    platform: "Laravel Filament / Global CMS",
    database: "Multi-site: отделна връзка/конфигурация по сайт",
    status: "Предложение за финално меню",
    modules: ["Табло", "Каталог", "Операции", "Дейности", "Съдържание", "Маркетинг", "Анализи", "Настройки"],
    menuTree: [
      {
        title: "Табло",
        type: "common",
        children: [suggested("Dashboard"), suggested("Последна активност"), suggested("Бързи действия"), suggested("Избор на сайт")],
      },
      {
        title: "Каталог",
        type: "catalog",
        children: [suggested("Продукти / машини"), suggested("Категории"), suggested("Марки"), suggested("Филтри / Характеристики"), suggested("Доставчици"), suggested("Цени / Отстъпки"), suggested("Импорт / експорт")],
      },
      {
        title: "Операции",
        type: "shop",
        children: [suggested("Поръчки"), suggested("Резервации"), suggested("Запитвания"), suggested("Товарителници"), suggested("Рекламации"), suggested("Гаранционни карти"), suggested("Клиенти / потребители")],
      },
      {
        title: "Дейности",
        type: "special",
        children: [suggested("Продажби"), suggested("Наеми"), suggested("Сервиз / Услуги"), suggested("Търгове"), suggested("Малки обяви")],
      },
      {
        title: "Съдържание",
        type: "common",
        children: [suggested("Страници"), suggested("Новини / Блог"), suggested("Landing страници"), suggested("Homepage"), suggested("Медия / файлове")],
      },
      {
        title: "Маркетинг",
        type: "common",
        children: [suggested("Банери"), suggested("Слайдери"), suggested("Промо кодове"), suggested("Мейлинг"), suggested("SEO"), suggested("Редиректи"), suggested("Коментари / Отзиви"), suggested("Изоставени колички")],
      },
      {
        title: "Анализи / Отчети",
        type: "common",
        children: [suggested("Продажби"), suggested("Запитвания"), suggested("Резервации"), suggested("Кампании"), suggested("Продукти"), suggested("Клиенти / потребители"), suggested("Feedbacks")],
      },
      {
        title: "Настройки",
        type: "common",
        children: [suggested("Сайтове"), suggested("Брандинг / лога"), suggested("Хедър"), suggested("Футър"), suggested("Менюта"), suggested("Езици"), suggested("Текстове / Преводи"), suggested("Потребители"), suggested("Роли / Права"), suggested("Интеграции"), suggested("Логове"), suggested("История на промени")],
      },
    ],
    fields: [
      "Единно меню, което се филтрира според избрания сайт и активните му модули",
      "Всеки модул има тип/контекст: продажба, наем, сервиз, каталог, съдържание",
      "Поръчки, резервации и запитвания са общи екрани с филтър по дейност и сайт",
      "Правата и видимостта се управляват по сайт, роля и активен модул",
    ],
    processes: [
      "Потребителят влиза в Global CMS",
      "Избира сайт или работи през глобални списъци",
      "Менюто показва само разрешените за този сайт модули",
      "Оперативните модули използват филтри по сайт, дейност, статус и период",
      "Съдържание, маркетинг, анализи и настройки остават като общи back-office секции",
    ],
    notes: "Препоръката е Вариант 1: меню по бизнес обект. Резервации, поръчки и запитвания са общи модули, а конкретната дейност се избира чрез тип/контекст: продажба, наем, сервиз или услуга.",
  },
  {
    id: "rentex",
    name: "Rentex.bg",
    type: "Онлайн магазин + rental система",
    platform: "CRM / за уточняване",
    database: "Директна връзка към база",
    status: "В анализ",
    modules: [
      "Машини",
      "Наеми / резервации",
      "Наличности по градове",
      "Календар за заетост",
      "Поръчки",
      "Клиенти",
      "Запитвания",
      "Категории",
      "Марки",
      "Банери",
      "Страници",
      "SEO",
    ],
    menuTree: [
      {
        title: "Магазин",
        type: "shop",
        children: [
          "Поръчки",
          "Товарителници",
          "Рекламации",
          "Запитвания",
          "Запитвания за наем/услуги",
          "Абониране Цена",
          "Изоставени колички",
          "Гаранционни карти",
          "Изпратени имейли",
          "Потребители",
          suggested("Клиенти"),
          suggested("Статуси на поръчки"),
        ],
      },
      {
        title: "Каталог",
        type: "catalog",
        children: ["Категории", "Марки", "Филтри", "Продукти", "Търгове", "Марки - отстъпки", suggested("Доставчици"), suggested("Импорт / експорт")],
      },
      {
        title: "Rental / Наем",
        type: "special",
        children: [
          suggested("Резервации"),
          suggested("Календар за заетост"),
          suggested("Наличности по градове"),
          suggested("Складове"),
          suggested("Тарифи"),
          suggested("Депозити"),
          suggested("Сервизиране"),
          suggested("Barcode / Beacon / GPS"),
        ],
      },
      {
        title: "Маркетинг",
        type: "common",
        children: ["Банери", "Слайдери", "Промо кодове", "Мейлинг", "Коментари", "Коментари наем/услуги", suggested("SEO"), suggested("Редиректи")],
      },
      {
        title: "Съдържание",
        type: "common",
        children: ["Статични стр", "Новини", "Ладинг стр", suggested("Менюта"), suggested("Медия / файлове")],
      },
      {
        title: "Настройки",
        type: "common",
        children: ["Езици", "Текстове", suggested("Права и роли"), suggested("История на промени"), suggested("Логове")],
      },
    ],
    fields: [
      "RX номер, марка, модел, година",
      "Категория, технически характеристики, снимки",
      "Склад / град / наличност",
      "Цена за ден, уикенд, седмица, месец",
      "Депозит, отстъпка, статус",
      "Barcode, Beacon ID, GPS",
      "Сервизиране, гаранция, документи",
    ],
    processes: [
      "Избор на машина от склад",
      "Проверка на свободни дати в календар",
      "Избор на тарифа и период на наем",
      "Изчисляване на цена и депозит",
      "Създаване на резервация и документи",
    ],
    notes: "Rentex не е обикновен магазин. Има специфична rental логика за машини, градове, складове и календар.",
  },
  {
    id: "bauportal",
    name: "Bauportal.bg",
    type: "Каталожен сайт / портал",
    platform: "За уточняване",
    database: "За уточняване",
    status: "За попълване",
    modules: ["Запитвания", "Каталог", "Категории", "Марки", "Филтри", "Банери", "Страници", "Новини", "SEO"],
    menuTree: [
      {
        title: "Услуги / Сервиз",
        type: "special",
        children: ["Списък услуги", "Дейност", suggested("Детайлна страница на услуга"), suggested("Запитвания към услуга")],
      },
      {
        title: "Съдържание",
        type: "common",
        children: ["Банери", "Страници", suggested("SEO"), suggested("Менюта")],
      },
      {
        title: "Магазин",
        type: "shop",
        children: ["Категории", "Марки", "Продукти", "Свойства", suggested("Поръчки"), suggested("Клиенти")],
      },
      {
        title: "Търгове",
        type: "catalog",
        children: ["Търгове", "Чеклисти", "Свойства"],
      },
      {
        title: "Малки обяви",
        type: "catalog",
        children: ["Малки обяви", "Заявки"],
      },
      {
        title: "Запитвания",
        type: "catalog",
        children: ["Запитвания", suggested("История на запитвания"), suggested("Източник на запитване")],
      },
      {
        title: "Настройки",
        type: "common",
        children: ["Текстове", suggested("Езици"), suggested("Права и роли"), suggested("Логове")],
      },
    ],
    fields: ["Услуга: дейност, заглавие, описание", "Продукт: категория, марка, свойства", "Търг: чеклист и свойства", "Малки обяви: обява и заявка", "Съдържание: банери и страници", "Настройки: текстове"],
    processes: ["Управление на услуги/сервиз дейности", "Управление на магазин/каталог", "Управление на търгове", "Малки обяви и заявки", "Получаване на запитвания", "Редакция на банери, страници и текстове"],
    notes: "Bauportal има секция Сервиз, която реално е модул за услуги/дейности, например сервиз и ремонт на различни машини.",
  },
  {
    id: "bautrax",
    name: "Bautrax.com",
    type: "Каталог / корпоративен",
    platform: "За уточняване",
    database: "За уточняване",
    status: "За попълване",
    modules: ["Категории", "Продукти", "Запитвания", "Страници", "Банери", "SEO"],
    menuTree: [
      {
        title: "Настройки сайт",
        type: "common",
        children: [
          "Начална страница",
          "Каталог",
          "Страници",
          "Хедър",
          "Футър",
          "Оферти",
          "Отзиви",
          suggested("SEO настройки"),
          suggested("Менюта"),
        ],
      },
      {
        title: "Каталог",
        type: "catalog",
        children: ["Категории", "Продукти", "Характеристики", "Новини", "Видеа", "Икони"],
      },
      {
        title: "Запитвания",
        type: "catalog",
        children: ["Запитвания", suggested("Контактни форми"), suggested("Източник на запитване")],
      },
      {
        title: "Настройки админ",
        type: "common",
        children: ["Потребители", "Роли", suggested("Права"), suggested("История на промени")],
      },
      {
        title: "Landing страници",
        type: "special",
        children: ["Оферти", suggested("Продуктови фунии"), suggested("UTM / кампании")],
      },
    ],
    fields: ["Име", "Описание", "Категория", "Снимки", "SEO заглавие", "SEO описание"],
    processes: ["Управление на каталог", "Запитване от клиент", "Landing страници тип продуктова оферта/фуния"],
    notes: "В Bautrax 'Оферти' са по-скоро landing страници за конкретни продукти, не стандартни търговски оферти.",
  },
  {
    id: "mashini",
    name: "Mashini.bg",
    type: "Онлайн магазин / каталог",
    platform: "За уточняване",
    database: "За уточняване",
    status: "За попълване",
    modules: ["Продукти", "Категории", "Поръчки", "Запитвания", "Марки", "Филтри", "Банери", "Страници", "SEO"],
    menuTree: [
      {
        title: "Магазин",
        type: "shop",
        children: [
          "Поръчки",
          "Бекофис",
          "Товарителници",
          "Рекламации",
          "Запитвания",
          "Абониране цена",
          "Изоставени колички",
          "Еконт товарителници",
          "Гаранционни карти",
          "Изпратени имейли",
          "Потребители",
          "Feedbacks",
          "Статистика",
          "Анализи",
          suggested("Клиенти"),
        ],
      },
      {
        title: "Каталог",
        type: "catalog",
        children: ["Категории", "Марки", "Филтри", "Разопаковани етикети", "Продукти", "Доставчици", "Търгове", "Марки - отстъпки", suggested("Импорт / експорт")],
      },
      {
        title: "Продажби",
        type: "catalog",
        children: ["Запитвания", suggested("Landing страници / продуктови фунии"), suggested("Сравнение на цени")],
      },
      {
        title: "Маркетинг",
        type: "common",
        children: ["Банери", "Слайдери", "Промо кодове", "Мейлинг", "Коментари", suggested("SEO"), suggested("Редиректи")],
      },
      {
        title: "Съдържание",
        type: "common",
        children: ["Статични стр", "Блог / Новини", "Категории блог", "Ладинг стр", suggested("Менюта"), suggested("Медия / файлове")],
      },
      {
        title: "Настройки",
        type: "common",
        children: ["Езици", "Текстове", suggested("Права и роли"), suggested("История на промени"), suggested("Логове")],
      },
    ],
    fields: [
      "Продукти: ID, име, второ име, DST ID 1, DST ID 2, марка, модел, цена продажна, видимост, действия",
      "Поръчки: ID, дата, тотал, статус, товарителница, статус товарителница, име, фамилия, телефон, имейл, град, фирма, коментари, отговорник, действия",
      "Каталог: категории, марки, филтри, разопаковани етикети, доставчици, търгове, марки - отстъпки",
      "Страници: статични страници, блог/новини, категории блог, landing страници",
      "Маркетинг: банери, слайдери, промо кодове, мейлинг, коментари",
    ],
    processes: ["Управление на продуктов каталог", "Поръчки и плащания", "Товарителници и Еконт товарителници", "Импорт/експорт и масова редакция", "Статистика и анализи"],
    notes: "Mashini има развита магазин администрация с продукти, поръчки, логистика, статистика, анализи и импорт/експорт.",
  },
  {
    id: "cmx",
    name: "CMX.bg",
    type: "Онлайн магазин / каталог",
    platform: "За уточняване",
    database: "За уточняване",
    status: "За попълване",
    modules: ["Продукти", "Категории", "Поръчки", "Запитвания", "Банери", "Страници", "SEO"],
    menuTree: [
      {
        title: "Магазин",
        type: "shop",
        children: [
          "Поръчки",
          "Товарителници",
          "Рекламации",
          "Запитвания",
          "Абониране цена",
          "Изоставени колички",
          "Гаранционни карти",
          "Изпратени имейли",
          "Потребители",
          suggested("Клиенти"),
        ],
      },
      {
        title: "Каталог",
        type: "catalog",
        children: ["Категории", "Марки", "Филтри", "Продукти", "Търгове", "Марки - отстъпки", suggested("Импорт / експорт")],
      },
      {
        title: "Продажби",
        type: "catalog",
        children: ["Запитвания", suggested("Landing страници / продуктови фунии")],
      },
      {
        title: "Маркетинг",
        type: "common",
        children: ["Банери", "Слайдери", "Промо кодове", "Мейлинг", "Коментари", suggested("SEO"), suggested("Редиректи")],
      },
      {
        title: "Съдържание",
        type: "common",
        children: ["Статични стр", "Новини", "Ладинг стр", suggested("Менюта"), suggested("Медия / файлове")],
      },
    ],
    fields: ["Име", "Цена", "Категория", "Описание", "Снимки", "Наличност"],
    processes: ["Поръчка", "Запитване", "Съдържание и маркетинг"],
    notes: "Да се провери дали има специфични B2B цени или отстъпки.",
  },
  {
    id: "cimex",
    name: "Cimex.bg",
    type: "Онлайн магазин",
    platform: "За уточняване",
    database: "За уточняване",
    status: "В анализ",
    modules: ["Поръчки", "Товарителници", "Рекламации", "Запитвания", "Абониране цена", "Изоставени колички", "Гаранционни карти", "Изпратени имейли", "Потребители"],
    menuTree: [
      {
        title: "Магазин",
        type: "shop",
        children: [
          "Поръчки",
          "Товарителници",
          "Рекламации",
          "Запитвания",
          "Абониране цена",
          "Изоставени колички",
          "Гаранционни карти",
          "Изпратени имейли",
          "Потребители",
          suggested("Неуспешни плащания"),
        ],
      },
      {
        title: "Каталог",
        type: "catalog",
        children: ["Категории", "Марки", "Филтри", "Продукти", suggested("Доставчици"), suggested("Импорт / експорт")],
      },
      {
        title: "Маркетинг",
        type: "common",
        children: ["Банери", "Слайдери", "Промо кодове", "Мейлинг", "Коментари", suggested("SEO"), suggested("Редиректи")],
      },
      {
        title: "Съдържание",
        type: "common",
        children: ["Статични стр", "Новини", "Ладинг стр", suggested("Менюта"), suggested("Медия / файлове")],
      },
    ],
    fields: [
      "Поръчки: ID, дата, тотал, статус, товарителница, статус товарителница, име, фамилия, телефон, имейл, град, фирма",
      "Товарителници: товарителница, поръчка, дата, стойност, платено, получател, изпращач, плащане, статус, документи",
      "Рекламации и запитвания: клиентски данни, продукт, коментар, статус и действия",
      "Абониране цена и изоставени колички: lead/recovery процеси към продукти и колички",
      "Изпратени имейли и потребители: лог на системни имейли и клиентски профили",
    ],
    processes: ["Поръчки и плащания", "Товарителници", "Запитвания", "Рекламации", "Изоставени колички", "Имейл комуникация"],
    notes: "Cimex.bg е отделен онлайн магазин, различен от CMX.bg. Текущите скрийншотове са за магазинския процес.",
  },
  {
    id: "lonking",
    name: "Lonking",
    type: "Каталожен сайт",
    platform: "Laravel / Filament",
    database: "За уточняване",
    status: "В анализ",
    modules: ["Категории", "Характеристики", "Икони", "Продукти", "Homepage", "Каталог страница", "Страници", "Хедър", "Футър", "Новини"],
    menuTree: [
      {
        title: "Каталог",
        type: "catalog",
        children: ["Категории", "Характеристики", "Икони", "Продукти", suggested("Марки"), suggested("Филтри")],
      },
      {
        title: "Настройки на сайта",
        type: "common",
        children: ["Homepage", "Каталог страница", "Страници", "Хедър (лога)", "Футър", suggested("Менюта"), suggested("SEO настройки")],
      },
      {
        title: "Съдържание",
        type: "common",
        children: ["Новини", suggested("Медия / файлове"), suggested("Ландинг страници")],
      },
      {
        title: "Продажби",
        type: "catalog",
        children: ["Запитвания", suggested("Контактни форми")],
      },
      {
        title: "Системни",
        type: "common",
        children: [suggested("Права и роли"), suggested("История на промени"), suggested("Логове")],
      },
    ],
    fields: [
      "Продукт: име, категория, характеристики, икони, снимки",
      "Homepage: секции, банери, акценти",
      "Каталог страница: текстове, подредба, SEO",
      "Страници: заглавие, съдържание, статус",
      "Хедър и футър: лого, линкове, контакти",
    ],
    processes: [
      "Управление на продуктов каталог",
      "Редакция на homepage и каталог страница",
      "Публикуване на новини",
      "Поддръжка на хедър, футър и статични страници",
    ],
    notes: "Lonking изглежда като каталожен сайт без поръчки, но със запитвания. Добре е да добавим SEO, история на промени и роли като предложения.",
  },
  {
    id: "astralis",
    name: "Astralis.bg",
    type: "Корпоративен сайт",
    platform: "За уточняване",
    database: "За уточняване",
    status: "За попълване",
    modules: ["Страници", "Новини", "Услуги", "Галерия", "Банери", "Контакти", "SEO"],
    menuTree: [
      {
        title: "Съдържание",
        type: "common",
        children: ["Статични стр", "Новини", "Ладинг стр", suggested("Услуги"), suggested("Галерия"), suggested("Менюта")],
      },
      {
        title: "Магазин",
        type: "shop",
        children: ["Запитвания", "Предложени цени", "Абониране цена", "Изпратени имейли", "Потребители", suggested("Поръчки - само CRM процес")],
      },
      {
        title: "Маркетинг",
        type: "common",
        children: ["Банери", "Слайдери", "Промо кодове", "Мейлинг", "Коментари", suggested("SEO"), suggested("Редиректи")],
      },
      {
        title: "Настройки",
        type: "common",
        children: ["Езици", "Текстове", suggested("Контакти"), suggested("Права и роли"), suggested("История на промени")],
      },
    ],
    fields: ["Заглавие", "Съдържание", "Снимки", "SEO заглавие", "SEO описание"],
    processes: ["Редакция на съдържание", "Публикуване на новина", "Управление на банери"],
    notes: "Вероятно без поръчки, но трябва да се провери дали има форми за запитване.",
  },
];

const matrixRows = [
  { name: "Продукти / машини", type: "common", values: ["yes", "yes", "yes", "yes", "yes", "no"] },
  { name: "Категории", type: "common", values: ["yes", "yes", "yes", "yes", "yes", "yes"] },
  { name: "Поръчки", type: "shop", values: ["yes", "no", "no", "yes", "yes", "no"] },
  { name: "Запитвания", type: "catalog", values: ["yes", "yes", "yes", "yes", "yes", "maybe"] },
  { name: "Наеми / резервации", type: "special", values: ["yes", "no", "no", "no", "no", "no"] },
  { name: "Наличности по градове", type: "special", values: ["yes", "maybe", "no", "maybe", "maybe", "no"] },
  { name: "Календар за заетост", type: "special", values: ["yes", "no", "no", "no", "no", "no"] },
  { name: "Банери / слайдери", type: "common", values: ["yes", "yes", "yes", "yes", "yes", "yes"] },
  { name: "Страници", type: "common", values: ["yes", "yes", "yes", "yes", "yes", "yes"] },
  { name: "Новини", type: "common", values: ["yes", "yes", "maybe", "yes", "maybe", "yes"] },
  { name: "SEO", type: "common", values: ["yes", "yes", "yes", "yes", "yes", "yes"] },
];

const moduleGroups = [
  {
    title: "Табло",
    type: "common",
    items: ["Dashboard", "Последна активност", "Бързи действия", "Избор на сайт"],
  },
  {
    title: "Сайт",
    type: "common",
    items: ["Избор на сайт", "Профил на сайт", "Активни модули", "Домейни", "Връзка с база данни"],
  },
  {
    title: "Каталог",
    type: "catalog",
    items: ["Продукти", "Продукти / машини", "Категории", "Марки", "Филтри", "Характеристики", "Икони", "Свойства", "Разопаковани етикети", "Доставчици", "Марки - отстъпки", "Импорт / експорт", "Видеа", "Сравнение на цени"],
  },
  {
    title: "Магазин",
    type: "shop",
    items: ["Поръчки", "Бекофис", "Клиенти / потребители", "Потребители", "Колички / Изоставени колички", "Товарителници", "Еконт товарителници", "Рекламации", "Гаранционни карти", "Изпратени имейли", "Абониране цена", "Плащания / доставки", "Неуспешни плащания", "Статуси на поръчки", "Поръчки - само CRM процес"],
  },
  {
    title: "Запитвания",
    type: "catalog",
    items: ["Общи запитвания", "Запитвания за наем/услуги", "Запитвания към продукт", "Запитвания към услуга", "Предложени цени", "Контактни форми", "Източник на запитване", "История"],
  },
  {
    title: "Операции",
    type: "shop",
    items: ["Поръчки", "Резервации", "Запитвания", "Товарителници", "Рекламации", "Гаранционни карти", "Клиенти / потребители"],
  },
  {
    title: "Дейности",
    type: "special",
    items: ["Продажби", "Наеми", "Сервиз / Услуги", "Търгове", "Малки обяви"],
  },
  {
    title: "Услуги / Сервиз",
    type: "special",
    items: ["Списък услуги", "Дейност", "Детайлна страница на услуга", "Запитвания към услуга", "Услуги"],
  },
  {
    title: "Търгове",
    type: "catalog",
    items: ["Търгове", "Чеклисти", "Свойства", "Участници / заявки", "Статуси"],
  },
  {
    title: "Малки обяви",
    type: "catalog",
    items: ["Малки обяви", "Заявки", "Категории", "Контакти", "Статуси"],
  },
  {
    title: "Rental",
    type: "special",
    items: ["Резервации", "Календар за заетост", "Складове", "Наличности по градове", "Тарифи", "Депозити", "Документи", "Barcode / Beacon / GPS", "Сервизиране"],
  },
  {
    title: "Съдържание",
    type: "common",
    items: ["Страници", "Статични стр", "Новини", "Блог / Новини", "Категории блог", "Homepage", "Каталог страница", "Медия / файлове", "Отзиви", "Галерия"],
  },
  {
    title: "Landing страници",
    type: "special",
    items: ["Оферти като landing страници", "Продуктови фунии", "Landing страници", "Промо страници", "UTM / кампании", "Форми за запитване"],
  },
  {
    title: "Маркетинг",
    type: "common",
    items: ["Банери", "Слайдери", "SEO", "Редиректи", "Мейлинг", "Коментари", "Коментари наем/услуги", "Промо кодове", "Тракинг кодове"],
  },
  {
    title: "Анализи / Отчети",
    type: "common",
    items: ["Продажби", "Поръчки", "Запитвания", "Продукти", "Категории", "Клиенти / потребители", "Изоставени колички", "Промо кодове", "Банери / кампании", "Feedbacks", "Статистика", "Анализи", "Търгове", "Rental резервации", "Експорт към Excel"],
  },
  {
    title: "Настройки",
    type: "common",
    items: ["Брандинг / лога", "Хедър", "Футър", "Менюта", "Езици", "Текстове", "Преводи", "Контакти", "Имейл шаблони", "Права и роли", "Потребители", "История на промени", "Логове"],
  },
];

const canonicalGroupAliases = {
  "Rental / Наем": "Rental",
  "Настройки сайт": "Настройки",
  "Настройки админ": "Настройки",
  "Настройки на сайта": "Настройки",
  "Системни": "Настройки",
  "Продажби": "Запитвания",
};

const moduleItemGroupOverrides = {
  "Настройки сайт||Homepage": "Съдържание",
  "Настройки сайт||Каталог страница": "Съдържание",
  "Настройки сайт||Страници": "Съдържание",
  "Настройки сайт||Новини": "Съдържание",
  "Настройки на сайта||Homepage": "Съдържание",
  "Настройки на сайта||Каталог страница": "Съдържание",
  "Настройки на сайта||Страници": "Съдържание",
  "Настройки на сайта||Новини": "Съдържание",
  "Настройки сайт||Оферти": "Landing страници",
  "Продажби||Landing страници / продуктови фунии": "Landing страници",
  "Продажби||Сравнение на цени": "Каталог",
  "Настройки на сайта||SEO настройки": "Маркетинг",
  "Настройки сайт||SEO настройки": "Маркетинг",
  "Магазин||Запитвания": "Запитвания",
  "Магазин||Запитвания за наем/услуги": "Запитвания",
  "Магазин||Категории": "Каталог",
  "Магазин||Марки": "Каталог",
  "Магазин||Продукти": "Каталог",
  "Магазин||Свойства": "Каталог",
  "Магазин||Feedbacks": "Анализи / Отчети",
  "Магазин||Статистика": "Анализи / Отчети",
  "Магазин||Анализи": "Анализи / Отчети",
  "Магазин||Предложени цени": "Запитвания",
  "Каталог||Търгове": "Търгове",
  "Каталог||Новини": "Съдържание",
  "Съдържание||Банери": "Маркетинг",
  "Съдържание||SEO": "Маркетинг",
  "Съдържание||Ладинг стр": "Landing страници",
  "Съдържание||Ландинг страници": "Landing страници",
  "Съдържание||Услуги": "Услуги / Сервиз",
  "Съдържание||Хедър": "Настройки",
  "Съдържание||Хедър / лога": "Настройки",
  "Съдържание||Футър": "Настройки",
  "Съдържание||Менюта": "Настройки",
};

const moduleItemLabelAliases = {
  "Начална страница": "Homepage",
  "Хедър / лога": "Брандинг / лога",
  "Хедър (лога)": "Брандинг / лога",
  "Лога": "Брандинг / лога",
  "Лого": "Брандинг / лога",
  "SEO настройки": "SEO",
  "Абониране Цена": "Абониране цена",
  "Изоставени колички": "Колички / Изоставени колички",
  "Клиенти": "Клиенти / потребители",
  "Оферти": "Оферти като landing страници",
  "Landing страници / продуктови фунии": "Продуктови фунии",
  "Роли": "Права и роли",
  "Права": "Права и роли",
  "История на запитвания": "История",
  "Запитвания": "Общи запитвания",
  "Ладинг стр": "Landing страници",
  "Ландинг страници": "Landing страници",
};

const typeLabels = {
  common: "Общ",
  shop: "Магазин",
  catalog: "Каталог",
  special: "Специфичен",
};

const cellLabels = {
  yes: "✓",
  maybe: "?",
  no: "-",
};

const defaultMvpItems = {
  phase1: [
    "Избор на сайт от Global CMS",
    "Зареждане на активни модули според сайта",
    "Продукти / машини / категории",
    "Страници, новини, банери и SEO",
    "Поръчки за онлайн магазини",
    "Запитвания за каталожни сайтове",
  ],
  phase2: [
    "Импорт / експорт",
    "Мейлинг и промо кодове",
    "История на промени",
    "Логове и синхронизации",
    "Разширени роли и права",
    "Специфични интеграции по сайт",
  ],
};

const defaultQuestions = [
  "Всеки сайт ли ще има отделна директна връзка към собствена база данни?",
  "Кои таблици остават само за четене и кои ще се редактират от CMS?",
  "Rentex rental логиката отделен модул ли е или разширение на продуктите?",
  "Има ли обща структура за SEO полета във всички сайтове?",
  "Какви роли ще има: админ, редактор, маркетинг, склад, продажби?",
];

let cmsState = {
  assignments: {},
  details: {},
  completed: {},
  customModules: [],
  moduleLayout: null,
  collapsedTreeGroups: {},
  customMvpItems: [],
  mvpLayout: null,
  customQuestions: [],
  checkedQuestions: {},
  deletedQuestions: [],
  questionAnswers: {},
  siteMeta: {},
  deletedModules: [],
};

let collapsedTreeGroups = {};
const autosaveTimers = new Map();
const QUESTION_ANSWER_AUTOSAVE_MS = 60000;
const defaultModuleLayout = cloneModuleLayout(moduleGroups);
const EDITOR_NAME_STORAGE_KEY = "cms_editor_name";
const EDITOR_NAME_COOKIE = "cms_editor_name";
const EDITOR_NAME_COOKIE_DAYS = 365;
const DETAIL_ATTACHMENT_MAX_FILES = 12;
const DETAIL_ATTACHMENT_MAX_SOURCE_SIZE = 10 * 1024 * 1024;
const DETAIL_ATTACHMENT_IMAGE_MAX_DIMENSION = 1600;
const DETAIL_ATTACHMENT_JPEG_QUALITY = 0.82;

function readEditorNameCookie() {
  const match = document.cookie.match(new RegExp(`(?:^|; )${EDITOR_NAME_COOKIE}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
}

function writeEditorNameCookie(name) {
  const maxAge = EDITOR_NAME_COOKIE_DAYS * 24 * 60 * 60;
  document.cookie = `${EDITOR_NAME_COOKIE}=${encodeURIComponent(name)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function getEditorName() {
  return (localStorage.getItem(EDITOR_NAME_STORAGE_KEY) || readEditorNameCookie() || "").trim();
}

function setEditorName(name) {
  const trimmed = String(name || "").trim();
  if (!trimmed) return false;
  localStorage.setItem(EDITOR_NAME_STORAGE_KEY, trimmed);
  writeEditorNameCookie(trimmed);
  updateEditorNameUi();
  return true;
}

function updateEditorNameUi() {
  const button = document.querySelector("#editorNameBtn");
  if (!button) return;
  const name = getEditorName();
  if (!name) {
    button.hidden = true;
    button.textContent = "";
    return;
  }
  button.hidden = false;
  button.textContent = `Работиш като: ${name}`;
}

function openEditorNameModal(force = false) {
  const modal = document.querySelector("#editorNameModal");
  const input = document.querySelector("#editorNameInput");
  if (!modal || !input) return;

  input.value = force ? getEditorName() : getEditorName() || "";
  modal.hidden = false;
  window.setTimeout(() => input.focus(), 0);
}

function closeEditorNameModal() {
  const modal = document.querySelector("#editorNameModal");
  if (modal) modal.hidden = true;
}

function initEditorName() {
  updateEditorNameUi();
  if (!getEditorName()) {
    openEditorNameModal();
  }

  document.querySelector("#editorNameSaveBtn")?.addEventListener("click", () => {
    const input = document.querySelector("#editorNameInput");
    const name = input?.value.trim() || "";
    if (!name) {
      input?.focus();
      return;
    }
    setEditorName(name);
    closeEditorNameModal();
  });

  document.querySelector("#editorNameInput")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector("#editorNameSaveBtn")?.click();
    }
  });

  document.querySelector("#editorNameBtn")?.addEventListener("click", () => {
    openEditorNameModal(true);
  });
}

function siteById(siteId) {
  return sites.find((site) => site.id === siteId) || null;
}

function cmsEvent(eventType, action, details = {}) {
  const authorName = getEditorName();
  const prefixedAction = authorName ? `${authorName}: ${action}` : action;

  return {
    eventType,
    action: prefixedAction,
    authorName,
    title: details.title || prefixedAction,
    siteId: details.siteId || "",
    siteName: details.siteName || (details.siteId ? siteById(details.siteId)?.name || details.siteId : ""),
    moduleGroup: details.moduleGroup || "",
    moduleName: details.moduleName || "",
    questionKey: details.questionKey || "",
    questionText: details.questionText || "",
    description: details.description || action,
    changeText: details.changeText || "",
  };
}

function valueLines(value) {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function formatFieldValue(value) {
  const lines = valueLines(value);
  return lines.length ? lines.join("\n") : "(празно)";
}

function addedLines(before, after) {
  const beforeLines = valueLines(before);
  return valueLines(after).filter((line) => !beforeLines.includes(line));
}

function buildFieldChangeText(before, after, fields) {
  return fields
    .filter((field) => JSON.stringify(before[field.key] || "") !== JSON.stringify(after[field.key] || ""))
    .map((field) => {
      const added = addedLines(before[field.key], after[field.key]);
      const parts = [`Поле: ${field.label}`];

      if (added.length) {
        parts.push(`Допълнено:\n${added.join("\n")}`);
      } else {
        parts.push(`Преди:\n${formatFieldValue(before[field.key])}`);
      }

      parts.push(`Сега:\n${formatFieldValue(after[field.key])}`);
      return parts.join("\n");
    })
    .join("\n\n");
}

function siteNamesFromIds(siteIds = []) {
  return siteIds.map((siteId) => siteById(siteId)?.name || siteId);
}

function buildAssignmentChangeText(previousSiteIds = [], nextSiteIds = []) {
  const previous = new Set(previousSiteIds);
  const next = new Set(nextSiteIds);
  const added = [...next].filter((siteId) => !previous.has(siteId));
  const removed = [...previous].filter((siteId) => !next.has(siteId));
  const current = siteNamesFromIds(nextSiteIds);
  const parts = [];

  if (added.length) {
    parts.push(`Добавено към сайтове:\n${siteNamesFromIds(added).join("\n")}`);
  }

  if (removed.length) {
    parts.push(`Премахнато от сайтове:\n${siteNamesFromIds(removed).join("\n")}`);
  }

  parts.push(`Сега се показва в:\n${current.length ? current.join("\n") : "(няма избрани сайтове)"}`);
  return parts.join("\n\n");
}

if (location.protocol === "file:") {
  document.body.classList.add("file-mode");
}

function suggested(label) {
  return { label, status: "suggested" };
}

function setActiveView(viewId) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });
}

function renderMatrix() {
  const tbody = document.querySelector("#moduleMatrix tbody");

  tbody.innerHTML = matrixRows
    .map((row) => {
      const cells = row.values
        .map((value) => `<td><span class="cell-${value}">${cellLabels[value]}</span></td>`)
        .join("");

      return `
        <tr>
          <td><span class="module-tag ${row.type}">${typeLabels[row.type]}</span> ${row.name}</td>
          ${cells}
        </tr>
      `;
    })
    .join("");
}

function renderSiteTabs() {
  const tabs = document.querySelector("#siteTabs");

  tabs.innerHTML = sites
    .map((site, index) => {
      return `<button class="site-tab ${index === 0 ? "active" : ""}" data-site="${site.id}" type="button">${site.name}</button>`;
    })
    .join("");
}

function renderSiteProfile(siteId) {
  const site = sites.find((item) => item.id === siteId) || sites[0];
  const profile = document.querySelector("#siteProfile");
  const firstGroup = site.menuTree[0];
  const firstChild = firstGroup?.children[0];
  const firstLabel = getChildLabel(firstChild);

  document.querySelectorAll(".site-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.site === site.id);
  });

  const siteMeta = getSiteMeta(site);
  const profileTitle = site.profileTitle || site.name;
  const profileNote = site.profileNote || "Текущо CRM меню + предложения";

  profile.innerHTML = `
    <div class="profile-workspace">
      <div class="panel">
        <h3>${profileTitle}</h3>
        <p class="panel-note">${profileNote}</p>
        <div class="tree-legend">
          <span class="legend-current">Има го в момента</span>
          <span class="legend-suggested">Предложение / важно</span>
        </div>
        <div class="cms-tree">
          ${renderMenuTree(site, site.menuTree, firstGroup?.title, firstLabel)}
        </div>
      </div>

      <aside class="panel module-detail" id="moduleDetail">
        ${renderModuleDetail(site, firstGroup?.title, firstLabel, getChildStatus(firstChild))}
      </aside>
    </div>

    <div class="details-grid">
      <div class="panel">
        <h3>Полета / данни</h3>
        <textarea class="site-meta-textarea" id="siteFieldsEditor" data-meta="fields">${escapeHtml(siteMeta.fields.join("\n"))}</textarea>
      </div>

      <div class="panel">
        <h3>Процеси</h3>
        <textarea class="site-meta-textarea" id="siteProcessesEditor" data-meta="processes">${escapeHtml(siteMeta.processes.join("\n"))}</textarea>
      </div>
    </div>

    <div class="panel site-notes-panel">
      <h3>Бележки</h3>
      <textarea class="site-meta-textarea" id="siteNotesEditor" data-meta="notes">${escapeHtml(siteMeta.notes)}</textarea>
      <div class="editor-actions">
        <button class="primary-button site-meta-save" type="button">Запази данните за сайта</button>
        <span class="save-status" id="siteMetaStatus"></span>
      </div>
    </div>
  `;

  profile.querySelectorAll(".tree-item-button").forEach((button) => {
    button.addEventListener("click", () => {
      profile.querySelectorAll(".tree-item-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      setSiteModuleDetail(profile, site, button.dataset.group, button.dataset.item, button.dataset.status);
    });
  });

  profile.querySelectorAll(".tree-done-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", async () => {
      const key = makeStateKey(checkbox.dataset.site, checkbox.dataset.group, checkbox.dataset.item);
      cmsState.completed[key] = checkbox.checked;
      checkbox.closest("li")?.classList.toggle("completed", checkbox.checked);
      await saveCmsState(cmsEvent(checkbox.checked ? "module.completed" : "module.reopened", checkbox.checked ? "Маркиран е модул като готов" : "Модул е върнат като неготов", {
        siteId: checkbox.dataset.site,
        moduleGroup: checkbox.dataset.group,
        moduleName: checkbox.dataset.item,
        description: `${siteById(checkbox.dataset.site)?.name || checkbox.dataset.site}: "${checkbox.dataset.item}" е ${checkbox.checked ? "маркиран като готов" : "върнат като неготов"}.`,
      }));
    });
  });

  profile.querySelectorAll(".tree-toggle").forEach((toggle) => {
    toggle.addEventListener("click", async () => {
      const group = toggle.closest(".tree-group");
      const key = makeTreeCollapseKey(toggle.dataset.site, toggle.dataset.group);
      const collapsed = !group.classList.contains("collapsed");
      collapsedTreeGroups[key] = collapsed;
      cmsState.collapsedTreeGroups = { ...collapsedTreeGroups };
      group.classList.toggle("collapsed", collapsed);
      toggle.setAttribute("aria-expanded", String(!collapsed));
      toggle.querySelector(".tree-toggle-symbol").textContent = collapsed ? "+" : "-";
      await saveCmsState(cmsEvent(collapsed ? "tree.collapsed" : "tree.expanded", collapsed ? "Сгъната е група" : "Разгъната е група", {
        siteId: toggle.dataset.site,
        moduleGroup: toggle.dataset.group,
        description: `${collapsed ? "Сгъната" : "Разгъната"} е група "${toggle.dataset.group}".`,
      }));
    });
  });

  autosizeTextareas(profile);
  bindSiteDetailSave(profile, site, firstGroup?.title, firstLabel);
  bindSiteMetaSave(profile, site);
}

function getSiteMeta(site) {
  const saved = cmsState.siteMeta?.[site.id];
  return {
    fields: Array.isArray(saved?.fields) ? saved.fields : site.fields,
    processes: Array.isArray(saved?.processes) ? saved.processes : site.processes,
    notes: typeof saved?.notes === "string" ? saved.notes : site.notes,
  };
}

function bindSiteMetaSave(profile, site) {
  const saveSiteMeta = async (reason = "button") => {
    const previousMeta = getSiteMeta(site);
    const nextMeta = {
      fields: linesFromValue(profile.querySelector("#siteFieldsEditor").value),
      processes: linesFromValue(profile.querySelector("#siteProcessesEditor").value),
      notes: profile.querySelector("#siteNotesEditor").value.trim(),
    };

    cmsState.siteMeta = cmsState.siteMeta || {};
    cmsState.siteMeta[site.id] = nextMeta;

    const saved = await saveCmsState(cmsEvent("site.updated", reason === "autosave" ? "Автоматично обновени данни за сайт" : "Обновени са данни за сайт", {
      siteId: site.id,
      description: `${site.name}: променени са полета, процеси или бележки.`,
      changeText: buildFieldChangeText(previousMeta, nextMeta, [
        { key: "fields", label: "Полета / данни" },
        { key: "processes", label: "Процеси" },
        { key: "notes", label: "Бележки" },
      ]),
    }));
    const status = profile.querySelector("#siteMetaStatus");
    if (status) status.textContent = saved ? (reason === "autosave" ? "Автозаписано" : "Записано") : "Не е записано";
  };

  profile.querySelector(".site-meta-save")?.addEventListener("click", () => saveSiteMeta("button"));
  profile.querySelectorAll(".site-meta-textarea").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      window.clearTimeout(autosaveTimers.get(`siteMeta:${site.id}`));
      autosaveTimers.set(`siteMeta:${site.id}`, window.setTimeout(() => saveSiteMeta("autosave"), 1200));
    });
  });
}

function setSiteModuleDetail(profile, site, groupTitle, itemLabel, status) {
  const detail = profile.querySelector("#moduleDetail");
  detail.innerHTML = renderModuleDetail(site, groupTitle, itemLabel, status);
  autosizeTextareas(detail);
  bindSiteDetailSave(profile, site, groupTitle, itemLabel);
}

function renderMenuTree(site, tree = [], activeGroup = "", activeItem = "") {
  return tree
    .map((group) => {
      const collapseKey = makeTreeCollapseKey(site.id, group.title);
      const collapsed = Boolean(collapsedTreeGroups[collapseKey]);
      return `
        <div class="tree-group ${group.type}${collapsed ? " collapsed" : ""}">
          <button class="tree-parent tree-toggle" data-site="${site.id}" data-group="${escapeAttr(group.title)}" type="button" aria-expanded="${String(!collapsed)}">
            <span class="tree-icon"></span>
            <strong>${group.title}</strong>
            <span class="tree-toggle-symbol" aria-hidden="true">${collapsed ? "+" : "-"}</span>
          </button>
          <ul>
            ${group.children.map((child) => renderTreeChild(site, group.title, child, activeGroup, activeItem)).join("")}
          </ul>
        </div>
      `;
    })
    .join("");
}

function renderTreeChild(site, groupTitle, child, activeGroup = "", activeItem = "") {
  const label = getChildLabel(child);
  const status = getChildStatus(child);
  const badge = status === "suggested" ? '<span class="item-badge">ново</span>' : "";
  const active = groupTitle === activeGroup && label === activeItem ? " active" : "";
  const completedKey = makeStateKey(site.id, groupTitle, label);
  const checked = cmsState.completed[completedKey] ? "checked" : "";

  return `
    <li class="${status} ${checked ? "completed" : ""}">
      <input class="tree-done-checkbox" data-site="${site.id}" data-group="${escapeAttr(groupTitle)}" data-item="${escapeAttr(label)}" type="checkbox" ${checked} title="Маркирай като готово" />
      <button class="tree-item-button${active}" data-group="${escapeAttr(groupTitle)}" data-item="${escapeAttr(label)}" data-status="${status}" type="button">
        <span>${label}</span>${badge}
      </button>
    </li>
  `;
}

function getChildLabel(child) {
  return typeof child === "string" ? child : child.label;
}

function getChildStatus(child) {
  return typeof child === "string" ? "current" : child.status;
}

function escapeAttr(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeHtml(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function getDetailAttachments(detail = {}) {
  return Array.isArray(detail.attachments) ? detail.attachments : [];
}

function formatFileSize(size = 0) {
  if (!size) return "";
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function renderDetailAttachments(attachments = []) {
  if (!attachments.length) {
    return "";
  }

  return `
    <div class="attachment-grid">
      ${attachments
        .map((attachment, index) => {
          return `
            <figure class="attachment-card">
              <button class="attachment-remove" data-attachment-index="${index}" type="button" title="Премахни снимката">×</button>
              <button class="attachment-preview" data-attachment-index="${index}" type="button" title="Отвори снимката">
                <img src="${escapeAttr(attachment.dataUrl || "")}" alt="${escapeAttr(attachment.name || "Прикачена снимка")}" loading="lazy">
              </button>
              <figcaption>
                <strong>${escapeHtml(attachment.name || "Снимка")}</strong>
                <span>${escapeHtml(formatFileSize(attachment.size))}</span>
              </figcaption>
            </figure>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderDetailAttachmentBlock(detail) {
  return `
    <div class="detail-block attachment-block">
      <h4>Прикачени снимки</h4>
      <label class="attachment-upload" for="siteDetailAttachments">
        <input id="siteDetailAttachments" type="file" accept="image/*" multiple>
        <span>Прикачи снимки</span>
      </label>
      <div id="siteDetailAttachmentList">
        ${renderDetailAttachments(getDetailAttachments(detail))}
      </div>
    </div>
  `;
}

function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Не мога да прочета снимката."));
    };

    image.src = url;
  });
}

async function fileToDetailAttachment(file) {
  if (!file.type.startsWith("image/")) {
    throw new Error("Може да се прикачват само снимки.");
  }

  if (file.size > DETAIL_ATTACHMENT_MAX_SOURCE_SIZE) {
    throw new Error(`Снимката "${file.name}" е над ${DETAIL_ATTACHMENT_MAX_SOURCE_SIZE / (1024 * 1024)} MB.`);
  }

  const image = await loadImageFromFile(file);
  const scale = Math.min(1, DETAIL_ATTACHMENT_IMAGE_MAX_DIMENSION / Math.max(image.width, image.height));
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, width, height);
  const dataUrl = canvas.toDataURL("image/jpeg", DETAIL_ATTACHMENT_JPEG_QUALITY);

  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: file.name,
    type: "image/jpeg",
    size: Math.round((dataUrl.length * 3) / 4),
    width,
    height,
    uploadedAt: new Date().toISOString(),
    dataUrl,
  };
}

function initAttachmentLightbox() {
  if (document.querySelector("#attachmentLightbox")) return;

  const lightbox = document.createElement("div");
  lightbox.id = "attachmentLightbox";
  lightbox.className = "attachment-lightbox";
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <div class="attachment-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Прикачена снимка">
      <button class="attachment-lightbox-close" type="button" aria-label="Затвори">×</button>
      <img class="attachment-lightbox-image" alt="">
      <div class="attachment-lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.closest(".attachment-lightbox-close")) {
      closeAttachmentLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeAttachmentLightbox();
  });
}

function openAttachmentLightbox(attachment) {
  initAttachmentLightbox();
  const lightbox = document.querySelector("#attachmentLightbox");
  const image = lightbox.querySelector(".attachment-lightbox-image");
  const caption = lightbox.querySelector(".attachment-lightbox-caption");

  image.src = attachment.dataUrl || "";
  image.alt = attachment.name || "Прикачена снимка";
  caption.textContent = attachment.name || "";
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
}

function closeAttachmentLightbox() {
  const lightbox = document.querySelector("#attachmentLightbox");
  if (!lightbox) return;

  lightbox.hidden = true;
  lightbox.querySelector(".attachment-lightbox-image").src = "";
  document.body.classList.remove("lightbox-open");
}

function renderModuleDetail(site, groupTitle = "Модул", itemLabel = "Избери екран", status = "current") {
  const detail = getModuleDetail(site, groupTitle, itemLabel);
  const statusLabel = status === "suggested" ? "Предложение / важно" : "Има го в момента";

  return `
    <div class="detail-kicker">${site.name}</div>
    <h3>${groupTitle} - ${itemLabel}</h3>
    <span class="detail-status ${status}">${statusLabel}</span>
    <label class="editor-label" for="siteDetailSummary">Кратко описание</label>
    <textarea id="siteDetailSummary" rows="1">${escapeHtml(detail.summary || "")}</textarea>

    <div class="detail-block">
      <h4>Какво включва</h4>
      <textarea id="siteDetailIncludes" rows="1" placeholder="Един ред = една точка">${escapeHtml((detail.includes || []).join("\n"))}</textarea>
    </div>

    <div class="detail-block">
      <h4>Полета / данни</h4>
      <textarea id="siteDetailFields" rows="1" placeholder="Един ред = едно поле">${escapeHtml((detail.fields || []).join("\n"))}</textarea>
    </div>

    <div class="detail-block">
      <h4>Бележка за заданието</h4>
      <textarea id="siteDetailNote" rows="1">${escapeHtml(detail.note || "")}</textarea>
    </div>

    ${renderDetailAttachmentBlock(detail)}

    <div class="editor-actions">
      <button class="primary-button site-detail-save" type="button">Запази описанието</button>
      <span class="save-status" id="siteDetailStatus"></span>
    </div>
  `;
}

function bindSiteDetailSave(profile, site, groupTitle, itemLabel) {
  const button = profile.querySelector(".site-detail-save");
  if (!button) return;

  const stateKey = makeStateKey(site.id, groupTitle, itemLabel);

  const currentAttachments = () => {
    const saved = cmsState.details[stateKey];
    if (saved) return getDetailAttachments(saved);
    return getDetailAttachments(getModuleDetail(site, groupTitle, itemLabel));
  };

  const readDetailForm = (attachments = currentAttachments()) => ({
    summary: profile.querySelector("#siteDetailSummary").value.trim(),
    includes: linesFromValue(profile.querySelector("#siteDetailIncludes").value),
    fields: linesFromValue(profile.querySelector("#siteDetailFields").value),
    note: profile.querySelector("#siteDetailNote").value.trim(),
    attachments,
  });

  const renderAttachmentList = (attachments = currentAttachments()) => {
    const list = profile.querySelector("#siteDetailAttachmentList");
    if (list) list.innerHTML = renderDetailAttachments(attachments);
  };

  const saveSiteDetail = async (reason = "button") => {
    const hadSavedDetail = Boolean(cmsState.details[stateKey]);
    const previousDetail = getModuleDetail(site, groupTitle, itemLabel);
    const nextDetail = readDetailForm();
    cmsState.details[stateKey] = nextDetail;

    const saved = await saveCmsState(cmsEvent(hadSavedDetail ? "detail.updated" : "detail.created", reason === "autosave" ? "Автоматично обновено описание" : hadSavedDetail ? "Обновено е описание" : "Добавено е описание", {
      siteId: site.id,
      moduleGroup: groupTitle,
      moduleName: itemLabel,
      description: `${site.name}: променено е описание за "${itemLabel}" (${groupTitle}).`,
      changeText: buildFieldChangeText(previousDetail, nextDetail, [
        { key: "summary", label: "Кратко описание" },
        { key: "includes", label: "Какво включва" },
        { key: "fields", label: "Полета / данни" },
        { key: "note", label: "Бележка за заданието" },
      ]),
    }));
    const status = profile.querySelector("#siteDetailStatus");
    if (status) status.textContent = saved ? (reason === "autosave" ? "Автозаписано" : "Записано") : "Не е записано";
  };

  button.addEventListener("click", () => saveSiteDetail("button"));
  ["#siteDetailSummary", "#siteDetailIncludes", "#siteDetailFields", "#siteDetailNote"].forEach((selector) => {
    profile.querySelector(selector)?.addEventListener("input", () => {
      const timerKey = `detail:${site.id}:${groupTitle}:${itemLabel}`;
      window.clearTimeout(autosaveTimers.get(timerKey));
      autosaveTimers.set(timerKey, window.setTimeout(() => saveSiteDetail("autosave"), 1200));
    });
  });

  profile.querySelector("#siteDetailAttachments")?.addEventListener("change", async (event) => {
    const input = event.currentTarget;
    const status = profile.querySelector("#siteDetailStatus");
    const files = [...(input.files || [])];
    if (!files.length) return;

    if (status) status.textContent = "Качване...";

    try {
      const attachments = [...currentAttachments()];
      for (const file of files) {
        if (attachments.length >= DETAIL_ATTACHMENT_MAX_FILES) {
          throw new Error(`Може да има максимум ${DETAIL_ATTACHMENT_MAX_FILES} снимки към едно меню.`);
        }
        attachments.push(await fileToDetailAttachment(file));
      }

      const previousDetail = getModuleDetail(site, groupTitle, itemLabel);
      const nextDetail = readDetailForm(attachments);
      nextDetail.attachmentNames = attachments.map((attachment) => attachment.name);
      cmsState.details[stateKey] = nextDetail;
      renderAttachmentList(attachments);
      const saved = await saveCmsState(cmsEvent("detail.attachments.updated", "Прикачени са снимки към описание", {
        siteId: site.id,
        moduleGroup: groupTitle,
        moduleName: itemLabel,
        description: `${site.name}: добавени са снимки към "${itemLabel}" (${groupTitle}).`,
        changeText: buildFieldChangeText(
          { attachmentNames: getDetailAttachments(previousDetail).map((attachment) => attachment.name) },
          { attachmentNames: attachments.map((attachment) => attachment.name) },
          [{ key: "attachmentNames", label: "Прикачени снимки" }]
        ),
      }));
      if (status) status.textContent = saved ? "Записано" : "Не е записано";
    } catch (error) {
      if (status) status.textContent = error.message;
      status?.classList.add("error");
      window.setTimeout(() => status?.classList.remove("error"), 2600);
    } finally {
      input.value = "";
    }
  });

  profile.querySelector("#siteDetailAttachmentList")?.addEventListener("click", async (event) => {
    const removeButton = event.target.closest(".attachment-remove");
    const previewButton = event.target.closest(".attachment-preview");
    if (previewButton) {
      const attachment = currentAttachments()[Number(previewButton.dataset.attachmentIndex)];
      if (attachment) openAttachmentLightbox(attachment);
      return;
    }

    if (!removeButton) return;

    const index = Number(removeButton.dataset.attachmentIndex);
    const attachments = [...currentAttachments()];
    if (!Number.isInteger(index) || index < 0 || index >= attachments.length) return;

    const previousNames = attachments.map((attachment) => attachment.name);
    attachments.splice(index, 1);
    const nextDetail = readDetailForm(attachments);
    nextDetail.attachmentNames = attachments.map((attachment) => attachment.name);
    cmsState.details[stateKey] = nextDetail;
    renderAttachmentList(attachments);

    const saved = await saveCmsState(cmsEvent("detail.attachments.updated", "Премахната е снимка от описание", {
      siteId: site.id,
      moduleGroup: groupTitle,
      moduleName: itemLabel,
      description: `${site.name}: премахната е снимка от "${itemLabel}" (${groupTitle}).`,
      changeText: buildFieldChangeText(
        { attachmentNames: previousNames },
        { attachmentNames: attachments.map((attachment) => attachment.name) },
        [{ key: "attachmentNames", label: "Прикачени снимки" }]
      ),
    }));
    const status = profile.querySelector("#siteDetailStatus");
    if (status) status.textContent = saved ? "Записано" : "Не е записано";
  });
}

function getModuleDetail(site, groupTitle, itemLabel) {
  const saved = cmsState.details[makeStateKey(site.id, groupTitle, itemLabel)];
  if (saved) return saved;

  const key = normalizeKey(`${groupTitle}|${itemLabel}`);
  const siteKey = normalizeKey(`${site.id}|${groupTitle}|${itemLabel}`);
  const details = {
    [normalizeKey("rentex|Магазин|Поръчки")]: {
      summary: "Екран за управление на поръчки/резервации от магазина и rental процесите.",
      includes: ["Списък с поръчки", "Филтри по дата, статус, клиент и град", "Преглед и редакция на поръчка", "Връзка с продукти/машини и документи"],
      fields: ["ID", "Дата", "Клиент", "Телефон", "Имейл", "Статус", "Сума", "Град", "Коментар"],
      note: "За Rentex да се уточни кое е стандартна поръчка и кое е rental резервация с период, склад, тарифа и депозит.",
    },
    [normalizeKey("rentex|Rental / Наем|Календар за заетост")]: {
      summary: "Календар за проверка кога дадена машина е свободна или заета.",
      includes: ["Календар по машина", "Заетост по склад/град", "Период от дата до дата", "Връзка с резервация"],
      fields: ["Машина", "RX номер", "Склад", "От дата", "До дата", "Статус", "Клиент"],
      note: "Това е критичен специфичен модул за Rentex и не трябва да се третира като обикновена наличност.",
    },
    [normalizeKey("Bautrax.com|Landing страници|Оферти")]: {
      summary: "Landing страници за конкретни продукти, тип продажбена фуния, не стандартни търговски оферти.",
      includes: ["Списък landing страници", "Връзка с продукт", "Секции за съдържание", "Форма за запитване", "Кампания/източник"],
      fields: ["Заглавие", "Продукт", "URL", "Съдържание", "CTA текст", "SEO", "Статус"],
      note: "В интерфейса може да остане 'Оферти', но в заданието да се опише като landing/product funnel модул.",
    },
    [normalizeKey("Lonking|Продажби|Запитвания")]: {
      summary: "Екран за запитвания от каталожния сайт.",
      includes: ["Списък запитвания", "Филтри по дата и продукт", "Контакт с клиента", "Статус на обработка"],
      fields: ["Дата", "Име", "Телефон", "Имейл", "Продукт", "Съобщение", "Статус"],
      note: "Lonking има запитвания, но няма нужда от поръчки, ако няма checkout процес.",
    },
    [normalizeKey("Bauportal.bg|Услуги / Сервиз|Списък услуги")]: {
      summary: "Каталог на услуги/дейности, например сервиз и ремонт на различни типове машини.",
      includes: ["Списък услуги", "Добавяне/редакция", "Подредба", "Публикувана/скрита услуга"],
      fields: ["ID", "Дейност", "Заглавие", "Описание", "SEO", "Статус"],
      note: "Това не е сервизна CRM поддръжка, а съдържателен модул за услуги.",
    },
    [normalizeKey("mashini|Каталог|Продукти")]: {
      summary: "Основен екран за управление на продуктовия каталог в Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък с продукти",
        "Checkbox селекция на продукти",
        "Добавяне на нов продукт",
        "Изпращане към MONETA",
        "Import / Export",
        "Масова редакция",
        "Бутон Категории",
        "Архив, Excel и Print",
        "Индикация за видимост/активност на продукта",
        "Редакция на продукт",
        "Преглед на продукт",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "Checkbox за избор",
        "ID",
        "Име",
        "Второ име",
        "DST ID 1",
        "DST ID 2",
        "Марка",
        "Модел",
        "Цена продажна",
        "Видимост / активност",
        "Действия: редакция и преглед",
      ],
      note: "Това е централен модул за Mashini. Да се предвидят масови действия, импорт/експорт, архив, връзка с категории, марки, филтри, доставчици и MONETA. В screenshot-а бутонът 'Изпрати към MONETA' изглежда неактивен, което трябва да се уточни като условие.",
    },
    [normalizeKey("mashini|Магазин|Поръчки")]: {
      summary: "Екран за управление на поръчките в онлайн магазина Mashini.bg.",
      includes: [
        "Филтър по ключова дума",
        "Филтър по период: начална дата и крайна дата",
        "Dropdown филтър Избере",
        "Dropdown Всички статуси",
        "Dropdown Изберете отговорник",
        "Бутон Търси",
        "Checkbox Покажи всички продукти",
        "Допълнително поле Търсене над таблицата",
        "Списък с поръчки в табличен вид",
        "Разгъване на поръчка през зелен плюс в първа колона",
        "Export",
        "Създаване на ръчна поръчка през +Поръчка",
        "Синхронизация",
        "Отделен бутон/филтър НЕУСПЕШНИ ПЛАЩАНИЯ",
        "Excel export",
        "Print",
        "Действия по ред: редакция и допълнителна операция/преглед",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "Индикатор/бутон за разгъване на поръчката",
        "ID",
        "Дата",
        "Тотал",
        "Икона/индикатор за документ/поръчка",
        "Статус",
        "Товарителница",
        "Статус товарителница",
        "Име",
        "Фамилия",
        "Телефон",
        "Имейл",
        "Град",
        "Фирма",
        "Коментари / брой коментари",
        "Отговорник / потребител",
        "Действия: редакция, преглед, допълнителни операции",
      ],
      note: "В новия CMS този екран трябва да запази бързата работа с поръчки: филтри по период/статус/отговорник, ръчно добавяне, синхронизация, експорт, печат и отделен фокус върху неуспешни плащания. Зелените/жълти индикатори в първата колона вероятно показват състояние или нужда от внимание и трябва да се уточнят.",
    },
    [normalizeKey("mashini|Магазин|Бекофис")]: {
      summary: "Оперативен екран за хората, които отговарят за доставки от различни доставчици/фирми и подготвят вътрешните поръчки към тях.",
      includes: [
        "Филтър по ключова дума / продукт / CAT ID",
        "Филтър по период: начална дата и крайна дата",
        "Dropdown Всички доставчици",
        "Dropdown Изберете отговорник",
        "Бутон Търси",
        "Допълнително поле Търсене над таблицата",
        "Списък с продукти от клиентски поръчки, които трябва да се обработят от бекофис",
        "Копирай всички",
        "Копирай групирано",
        "Връщане към поръчки",
        "Excel export",
        "Print",
        "Действия по ред: копиране/операция и редакция",
      ],
      fields: [
        "Дата",
        "Поръчка",
        "Клиент",
        "CAT ID",
        "Код 1",
        "Код 2",
        "Продукт",
        "Доставчик",
        "Количество",
        "Склад",
        "Наличност",
        "Цена",
        "Тотал",
        "Товарителница",
        "Статус",
        "Отговорник",
        "Копи / действия",
      ],
      note: "Този модул е важен за оперативната работа след поръчка: кой продукт от кой доставчик се взима, има ли наличност, кой отговаря и какво трябва да се копира/изпрати към доставчик. Да се уточни дали 'Копирай всички' и 'Копирай групирано' копират текст за имейл/чат или подготвят реална заявка към доставчик.",
    },
    [normalizeKey("mashini|Магазин|Товарителници")]: {
      summary: "Екран за преглед и контрол на товарителници към поръчки в Mashini.bg.",
      includes: [
        "Филтър по период: начална дата и крайна дата",
        "Бутон Търси",
        "Допълнително поле Търсене над таблицата",
        "Списък с товарителници",
        "Excel export",
        "Print",
        "Линк към товарителница",
        "Линк към свързана поръчка",
        "Документ/номер на документ като цветен badge",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "Товарителница",
        "Поръчка",
        "Дата на товарителница",
        "Стойност поръчка",
        "Платено",
        "Дата плащане",
        "Получател",
        "Изпращач",
        "Общо",
        "Плащане",
        "Статус",
        "Документи",
      ],
      note: "Да се уточни дали сумите в евро/лева се пазят като отделни полета или се визуализират от една стойност с валутна конверсия. В таблицата се виждат документи като червен badge, например ФРА номер.",
    },
    [normalizeKey("mashini|Магазин|Рекламации")]: {
      summary: "Екран за управление на клиентски рекламации, върнати/дефектни продукти и последващи действия по тях.",
      includes: [
        "Поле Търсене",
        "Списък с рекламации",
        "Добавяне на нова рекламация",
        "Excel export",
        "Print",
        "Редакция на рекламация",
        "Бърз бутон/етикет РКЛ към реда",
        "Икони в header-а за търсене, списък и редакция/действия",
        "Следене на междинен и финален статус",
      ],
      fields: [
        "ID",
        "Дата",
        "Име",
        "Фамилия",
        "Телефон",
        "Дата на получаване на рекламацията",
        "Продукт",
        "Арт. номер",
        "NEW - тип рекламации",
        "Статус",
        "Срок за отстраняване / подмяна",
        "Междинен статус",
        "Финален статус",
        "Действия",
      ],
      note: "Да се запази разделението между тип рекламация, текущ статус, междинен статус и финален статус. Виждат се типове като грешна стока, за ремонт, отказан продукт и дефектна стока.",
    },
    [normalizeKey("mashini|Магазин|Запитвания")]: {
      summary: "Екран за клиентски запитвания към продукти в Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък със запитвания",
        "Добавяне на ново запитване",
        "Excel export",
        "Print",
        "Преглед на продукт, към който е направено запитването",
        "Контактни данни на клиента",
        "Коментар/съобщение от клиента",
        "Статус на запитването",
        "Действия по ред: редакция и изпращане/отговор по имейл",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Дата",
        "Продукт",
        "Име",
        "Имейл",
        "Телефон",
        "Коментар",
        "Статус",
        "Действия",
      ],
      note: "Този модул трябва да остане свързан с конкретен продукт. В действията се виждат икони за редакция и имейл, което подсказва нужда от отговор/комуникация към клиента директно от CMS.",
    },
    [normalizeKey("mashini|Магазин|Абониране цена")]: {
      summary: "Екран със заявки от клиенти, които са се абонирали/записали за цена на конкретен продукт.",
      includes: [
        "Поле Търсене",
        "Списък с абонаменти за цена",
        "Добавяне на запис",
        "Excel export",
        "Print",
        "Връзка към продукт",
        "Контактни данни на клиента",
        "Статус на обработка",
        "Действие по ред: редакция/обработка",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Дата",
        "Продукт",
        "Име",
        "Имейл",
        "Телефон",
        "Статус",
        "Действия",
      ],
      note: "В текущия CRM е под Магазин, но логически е marketing/lead модул: клиент оставя контакт за цена/оферта на продукт. В новия CMS може да се обмисли дали да стои под Маркетинг, Запитвания или Магазин според процеса на екипа.",
    },
    [normalizeKey("mashini|Магазин|Изоставени колички")]: {
      summary: "Екран за проследяване на изоставени колички и възстановяване на потенциални поръчки.",
      includes: [
        "Поле Търсене",
        "Списък с изоставени колички",
        "Разгъване на количка през зелен плюс",
        "Преглед на клиентски данни, когато са налични",
        "Преглед на IP адрес",
        "Бутон Създай поръчка",
        "Статус дали е изпратен имейл",
        "Брой коментари/комуникации",
        "Excel export",
        "Print",
        "Действия по ред",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "Индикатор/бутон за разгъване",
        "ID",
        "Дата",
        "Име",
        "Фамилия",
        "Имейл",
        "Телефон",
        "IP",
        "Поръчка / бутон Създай поръчка",
        "Изпратен имейл",
        "Коментари",
        "Действия",
      ],
      note: "В текущия CRM е под Магазин, защото идва от количката/checkout процеса. В новия CMS логически може да се позиционира като Магазин > Колички / Изоставени колички или Маркетинг > Recovery / Изоставени колички. Ако има автоматични имейли, сегментация и кампании, по-правилно е да има връзка и към Маркетинг.",
    },
    [normalizeKey("mashini|Магазин|Еконт товарителници")]: {
      summary: "Екран за преглед на Еконт товарителници и техния статус към поръчки.",
      includes: [
        "Show entries избор за брой записи на страница",
        "Search поле",
        "Списък с Еконт товарителници",
        "Pagination",
        "Линк към номер на товарителница",
        "Линк към номер на поръчка",
        "Преглед на обща стойност и цена за доставка",
        "Следене на Еконт статус",
        "Ден / информация за доставка",
        "Инфо и действия по ред",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "Номер на товарителница",
        "Номер на поръчка",
        "Обща стойност",
        "Цена за доставка",
        "Име",
        "Имейл",
        "Тел. номер",
        "Еконт статус",
        "Ден",
        "Инфо",
        "Действия",
      ],
      note: "Този екран е по-специфичен от общите товарителници и е вързан към Еконт. Да се уточни дали данните се синхронизират автоматично от Еконт API и какво означава 'Неизвестен статус' / 'Неизвестно'.",
    },
    [normalizeKey("mashini|Магазин|Гаранционни карти")]: {
      summary: "Екран за управление и преглед на гаранционни карти, свързани с поръчки, фактури и продукти.",
      includes: [
        "Поле Търсене",
        "Списък с гаранционни карти",
        "Добавяне на гаранционна карта",
        "Excel export",
        "Print",
        "Линк към номер на гаранционна карта",
        "Линк към свързана поръчка",
        "Редакция на гаранционна карта",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Номер",
        "Дата",
        "Клиент",
        "Поръчка",
        "Номер на фактура",
        "Продукт",
        "Брой",
        "Продължителност",
        "Действия",
      ],
      note: "Гаранционната карта трябва да има ясна връзка към поръчка, фактура и продукт. Продължителност изглежда като месеци гаранция, например 12 или 24, и трябва да се уточни като единица.",
    },
    [normalizeKey("mashini|Магазин|Изпратени имейли")]: {
      summary: "Лог/история на изпратени системни имейли от Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък с изпратени имейли",
        "Добавяне на запис",
        "Excel export",
        "Print",
        "Проследяване дали имейлът е изпратен успешно",
        "Дата и час на изпращане",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Имейл",
        "Заглавие",
        "Изпратен",
        "Дата на изпращане",
        "Действия",
      ],
      note: "Това е по-скоро системен/комуникационен лог, но в текущия CRM е под Магазин, защото много имейли са свързани с поръчки: сменен статус, приета поръчка, отказана поръчка, завършване на поръчка и др.",
    },
    [normalizeKey("mashini|Магазин|Потребители")]: {
      summary: "Екран за управление на регистрирани потребители/клиентски профили в Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък с потребители",
        "Добавяне на потребител",
        "Excel export",
        "Print",
        "Преглед дали профилът е потвърден",
        "Група на потребителя",
        "Редакция на потребителски профил",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Дата",
        "Име",
        "Фамилия",
        "Email",
        "Телефон",
        "Потвърден профил",
        "Група",
        "Действия",
      ],
      note: "Това са клиентски акаунти/потребители, различни от админ потребителите на CMS. Да се уточни какво означава 'Група' и дали 'Потвърден профил' е boolean поле 0/1.",
    },
    [normalizeKey("mashini|Магазин|Feedbacks")]: {
      summary: "Екран за клиентска обратна връзка и оценки след поръчка.",
      includes: [
        "Филтър по период: начална дата и крайна дата",
        "Dropdown филтър Всички",
        "Бутон Търси",
        "Допълнително поле Търсене над таблицата",
        "Списък с feedback записи",
        "Excel export",
        "Print",
        "Pagination",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "№",
        "Клиент",
        "Отговорник",
        "Дата на поръчка",
        "Машина оценка",
        "Машина коментар",
        "КА оценка",
        "КА коментар",
        "Склад оценка",
        "Склад коментар",
        "Препоръки",
        "Оценка",
        "Коментари",
        "Дата на оценка",
      ],
      note: "В screenshot-а няма налични записи, но колоните показват, че feedback-ът оценява няколко части от процеса: продукт/машина, клиентски асистент/отговорник и склад. Да се уточни какво точно означава 'КА'.",
    },
    [normalizeKey("mashini|Маркетинг|Мейлинг")]: {
      summary: "Маркетинг екран за списък с имейли и изпращане на мейлинг кампании.",
      includes: [
        "Поле Търсене",
        "Списък с имейл адреси",
        "Добавяне на имейл",
        "Изпрати мейл",
        "Excel export",
        "Print",
        "Редакция на запис",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Дата",
        "Имейл",
        "Действия",
      ],
      note: "Това е маркетинг модул за mailing база и ръчно/масово изпращане. Да се уточни дали има сегменти, шаблони, unsubscribe, GDPR съгласие и история на изпратените кампании.",
    },
    [normalizeKey("mashini|Магазин|Статистика")]: {
      summary: "Dashboard екран със статистика за продажби, оборот и поръчки в Mashini.bg.",
      includes: [
        "Графика Продажби по месец за последни 30 месеца",
        "Филтър/избор на период: Месеци",
        "Линии за приход, разход и профит",
        "Барове за продажби",
        "Графика Брой поръчки и оборот по месеци",
        "Разделение на изпълнени, в процес и неуспешни поръчки",
        "Оборот по статуси: изпълнени, в процес, неуспешни",
        "Tooltip с конкретни стойности по месец",
      ],
      fields: [
        "Дата / месец",
        "Приход",
        "Разход",
        "Профит",
        "Продажби",
        "Изпълнени - брой поръчки",
        "В процес - брой поръчки",
        "Неуспешни - брой поръчки",
        "Изпълнени - оборот",
        "В процес - оборот",
        "Неуспешни - оборот",
      ],
      note: "Това е аналитичен dashboard, не CRUD таблица. В новия CMS трябва да има ясни дефиниции за приход, разход, профит, продажби и статусите на поръчките, за да не се различават числата от стария CRM.",
    },
    [normalizeKey("mashini|Магазин|Анализи")]: {
      summary: "Разширен аналитичен екран за оборот, кампании, източници, марки, доставчици и продуктово представяне в магазина.",
      includes: [
        "Филтър по период: начална дата и крайна дата",
        "Бутон Търси",
        "Графика Общ оборот по източник",
        "Графика Общ оборот по кампания",
        "Оборот по Марка ТОП 25 - поръчани vs продадени",
        "Оборот по Доставчик ТОП 25 - поръчани vs продадени",
        "Таблица с продуктови анализи",
        "Поле Търсене за таблицата",
        "Export",
        "Сравнение на поръчани и продадени количества/оборот",
        "Разбивка по източник: organic, google, facebook, chatgpt.com, perplexity и други",
        "Разбивка по campaign/source naming",
      ],
      fields: [
        "Продукт",
        "Име на продукта",
        "DST ID 1",
        "Марка",
        "Модел",
        "Доставчик",
        "Покупна",
        "Ср. продажна поръчани",
        "Ср. продажна продадени",
        "Поръчани - количество",
        "Продадени - количество",
        "Поръчани - оборот",
        "Продадени - оборот",
        "Източник",
      ],
      note: "Това е магазин аналитика, различна от Статистика. Тук фокусът е attribution/източници, кампании, марки, доставчици и продуктова ефективност. Да се уточнят правилата за 'поръчани' срещу 'продадени' и от кои UTM/source полета се взима източникът.",
    },
    [normalizeKey("mashini|Каталог|Категории")]: {
      summary: "Екран за управление на категориите в каталога на Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък с категории",
        "Добавяне на категория",
        "Import",
        "Export",
        "Бутон Категории",
        "Бутон Лица за контакт",
        "Допълнителен Import",
        "Допълнителен Export",
        "Excel export",
        "Print",
        "Редакция на категория",
        "Изтриване/деактивиране през X",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Име",
        "Активна",
        "Главна категория",
        "Действия",
      ],
      note: "Категориите имат йерархия чрез поле 'Главна категория', включително пътеки от тип 'Рязане и шлайфане -> Стругове'. Да се уточни дали 'Активна' е 0/1 и как се управлява импортът/експортът на категории и лица за контакт.",
    },
    [normalizeKey("mashini|Каталог|Марки")]: {
      summary: "Екран за управление на марки/брандове в продуктовия каталог на Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък с марки",
        "Добавяне на марка",
        "Excel export",
        "Print",
        "Редакция на марка",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Име",
        "Продуктов мениджър",
        "Вид марка",
        "Доставчици",
        "Действия",
      ],
      note: "Марка е свързана с продуктов мениджър, тип/сегмент на марката и доставчици. Виждат се типове като Любителска (DIY), Полупрофесионална (SEMIPRO) и Професионална и скъпа (PRO).",
    },
    [normalizeKey("mashini|Каталог|Филтри")]: {
      summary: "Екран за управление на филтри/характеристики, които се използват за филтриране на продуктите в каталога.",
      includes: [
        "Поле Търсене",
        "Списък с филтри",
        "Добавяне на филтър",
        "Excel export",
        "Print",
        "Управление на стойности към филтър",
        "Редакция на филтър",
        "Изтриване/премахване на филтър",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Име",
        "Марка",
        "Стойности",
        "Действия",
      ],
      note: "Филтрите са важни за навигацията в каталога. Виждат се филтри като Размер, Скоростна кутия, Задвижване, Работна ширина, Ход на буталото, Скоби, Електроди Ø. Да се уточни дали полето 'Марка' реално означава марка или обхват/тип на филтъра.",
    },
    [normalizeKey("mashini|Каталог|Доставчици")]: {
      summary: "Екран за управление на доставчици/контрагенти, свързани с продуктовия каталог.",
      includes: [
        "Поле Търсене",
        "Списък с доставчици",
        "Бутон Въпроси",
        "Export",
        "Excel export",
        "Print",
        "Преглед на попълнени карти",
        "Експорт по конкретен доставчик",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Тип",
        "Име",
        "ЕИК/ЕГН",
        "Град",
        "Адрес",
        "Телефон",
        "E-mail",
        "Попълнени карти",
        "Действия",
      ],
      note: "Доставчиците могат да са частни лица или фирми. Полето 'Попълнени карти' показва дали има попълнена карта/форма и брой записи. Да се уточни какво съдържат картите и какво прави бутонът 'Въпроси'.",
    },
    [normalizeKey("mashini|Каталог|Марки - отстъпки")]: {
      summary: "Екран за управление на отстъпки по марка и доставчик.",
      includes: [
        "Поле Търсене",
        "Списък с отстъпки по марки",
        "Excel export",
        "Print",
        "Редакция на отстъпка",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Марка",
        "Доставчик",
        "Отстъпка",
        "Действия",
      ],
      note: "Този модул вероятно се използва за търговски условия и изчисления на цени/маржове. Да се уточни дали 'Отстъпка' е процент, дали важи глобално за марката или само за конкретния доставчик, и дали влияе на покупна/продажна цена.",
    },
    [normalizeKey("mashini|Съдържание|Статични стр")]: {
      summary: "Екран за управление на статичните информационни страници в Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък със статични страници",
        "Добавяне на статична страница",
        "Excel export",
        "Print",
        "Редакция на страница",
        "Pagination",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Заглавие",
        "Действия",
      ],
      note: "Примери за статични страници: Начини на плащане, Връщане на продукт, Гаранция и сервиз, Условия за доставка, Политика за лични данни, За нас.",
    },
    [normalizeKey("mashini|Съдържание|Блог / Новини")]: {
      summary: "Екран за управление на блог/новини статии в Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък с блог/новини",
        "Добавяне на статия",
        "Excel export",
        "Print",
        "Категоризация на статия",
        "Статус на публикация",
        "Дата на публикация",
        "Редакция на статия",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Заглавие",
        "Категория",
        "Статус",
        "Дата",
        "Действия",
      ],
      note: "Блогът има статуси като Активно и Чернова. Добре е новият CMS да поддържа SEO URL, meta title/description и връзка към категории блог.",
    },
    [normalizeKey("mashini|Съдържание|Категории блог")]: {
      summary: "Екран за управление на категориите за блог/новини.",
      includes: [
        "Поле Търсене",
        "Списък с категории блог",
        "Добавяне на категория",
        "Excel export",
        "Print",
        "Редакция на категория",
        "Pagination",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Име",
        "SEO URL",
        "Подредба",
        "Активна",
        "Действия",
      ],
      note: "Категориите блог имат SEO URL, подредба и статус. Виждат се категории като Ръководства за избор, Сравнения и алтернативи, Поддръжка и ремонт, Употреба и техники.",
    },
    [normalizeKey("mashini|Съдържание|Ладинг стр")]: {
      summary: "Екран за управление на landing страници в Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък с landing страници",
        "Добавяне на landing страница",
        "Excel export",
        "Print",
        "Редакция на landing страница",
        "Pagination",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Име / заглавие",
        "Действия",
      ],
      note: "Виждат се landing страници като СТРОИТЕЛНА ТЕХНИКА и ГРАДИНА 2026. Да се уточни дали landing страниците имат секции, продукти, банери, SEO полета и форма за запитване.",
    },
    [normalizeKey("mashini|Маркетинг|Банери")]: {
      summary: "Екран за управление на маркетинг банери в Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък с банери",
        "Добавяне на банер",
        "Excel export",
        "Print",
        "Линк към целева страница/продукт",
        "Дата на добавяне",
        "Дата на редакция",
        "Редакция на банер",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Заглавие",
        "Линк",
        "Дата на добавяне",
        "Дата на редакция",
        "Действия",
      ],
      note: "Този модул управлява банери с връзка към продуктови или landing страници. Да се уточни дали липсват полета като изображение, позиция, активност и период на показване, защото не се виждат в таблицата.",
    },
    [normalizeKey("mashini|Маркетинг|Слайдери")]: {
      summary: "Екран за управление на слайдери/hero слайдове в Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък със слайдери",
        "Добавяне на слайдер",
        "Excel export",
        "Print",
        "Линк към продукт, категория, търсене или landing страница",
        "Дата на добавяне",
        "Дата на редакция",
        "Редакция на слайдер",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Заглавие",
        "Линк",
        "Дата на добавяне",
        "Дата на редакция",
        "Действия",
      ],
      note: "Слайдерите изглеждат като homepage/кампанийни позиции към продукти, категории, search URL-и и landing страници. Да се уточнят изображение, подредба, активност, дата на показване и дали има desktop/mobile визии.",
    },
    [normalizeKey("mashini|Маркетинг|Промо кодове")]: {
      summary: "Екран за управление на промо кодове и отстъпки в Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък с промо кодове",
        "Добавяне на промо код",
        "Excel export",
        "Print",
        "Активиране/деактивиране на код",
        "Проследяване дали кодът е използван",
        "Редакция на промо код",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Име на промокод",
        "Отстъпка",
        "Промоция",
        "Активен",
        "Използван",
        "Действия",
      ],
      note: "Да се уточни дали 'Отстъпка' е процент или фиксирана сума, дали 'Промоция' е връзка към кампания, и дали кодът може да се използва еднократно или многократно.",
    },
    [normalizeKey("mashini|Маркетинг|Коментари")]: {
      summary: "Екран за управление на продуктови коментари/отзиви от клиенти.",
      includes: [
        "Филтър по период: начална дата и крайна дата",
        "Бутон Търси",
        "Допълнително поле Търсене над таблицата",
        "Списък с коментари",
        "Добавяне на коментар",
        "Excel export",
        "Print",
        "Връзка към продукт",
        "Контактни данни на автора",
        "Редакция на коментар",
        "Изтриване на коментар",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Дата",
        "Продукт",
        "Име",
        "Имейл",
        "Коментар",
        "Действия",
      ],
      note: "Коментарите са свързани с конкретни продукти. Да се уточни дали има статус за одобрение/публикуване, рейтинг със звезди и дали изтриването е soft delete или директно премахване.",
    },
    [normalizeKey("mashini|Настройки|Езици")]: {
      summary: "Екран за управление на активните езици в Mashini.bg.",
      includes: [
        "Поле Търсене",
        "Списък с езици",
        "Добавяне на език",
        "Excel export",
        "Print",
        "Редакция на език",
        "Pagination",
        "Икони в header-а за търсене, списък и редакция/действия",
      ],
      fields: [
        "ID",
        "Език",
        "Действия",
      ],
      note: "В момента се вижда само Български. Да се уточни дали новият CMS трябва да поддържа многоезичност за всички сайтове или само за конкретни.",
    },
    [normalizeKey("mashini|Настройки|Текстове")]: {
      summary: "Екран за управление на системни текстове/преводи по език.",
      includes: [
        "Поле Търсене",
        "Таблица с дума/ключ и превод по език",
        "Колона за Български",
        "Редакция директно в input полета",
        "Системни текстове за промоции, съобщения, грешки и UI етикети",
      ],
      fields: [
        "Дума/език",
        "Български",
      ],
      note: "Това е речник/translation модул. Виждат се ключове като 'Старата парола не съвпада!', 'Сравни Продукти', 'Промо Януари', 'Промо Пакети'. Добре е в новия CMS да има групиране по секция/контекст, защото списъкът може да стане много дълъг.",
    },
    [normalizeKey("cimex|Магазин|Поръчки")]: {
      summary: "Екран за управление на поръчките в онлайн магазина Cimex.bg.",
      includes: [
        "Филтър по ключова дума",
        "Филтър по период: начална дата и крайна дата",
        "Dropdown филтър Избере",
        "Бутон Търси",
        "Checkbox Покажи всички продукти",
        "Допълнително поле Търсене над таблицата",
        "Списък с поръчки в табличен вид",
        "Разгъване на поръчка през зелен плюс",
        "Export",
        "Създаване на ръчна поръчка през +Поръчка",
        "Отделен бутон НЕУСПЕШНИ ПЛАЩАНИЯ",
        "Действия по ред: редакция и допълнителна операция/преглед",
        "Икони за коментари, отговорник/потребител и действия",
      ],
      fields: [
        "Индикатор/бутон за разгъване",
        "ID",
        "Дата",
        "Тотал",
        "Статус",
        "Товарителница",
        "Статус товарителница",
        "Име",
        "Фамилия",
        "Телефон",
        "Имейл",
        "Град",
        "Фирма",
        "Коментари / брой коментари",
        "Отговорник / потребител",
        "Действия",
      ],
      note: "Да се запази отделният фокус върху неуспешни плащания. Зелените индикатори в първата колона вероятно маркират състояние/нужда от действие и трябва да се уточнят.",
    },
    [normalizeKey("cimex|Магазин|Товарителници")]: {
      summary: "Екран за преглед и контрол на товарителници към поръчките в Cimex.bg.",
      includes: [
        "Филтър по период: начална дата и крайна дата",
        "Бутон Търси",
        "Допълнително поле Търсене над таблицата",
        "Списък с товарителници",
        "Линк към товарителница",
        "Линк към свързана поръчка",
        "Стойности в евро и лева",
        "Проследяване на плащане",
        "Статус към куриер",
        "Документ/фактура като червен badge",
      ],
      fields: [
        "Товарителница",
        "Поръчка",
        "Дата на товарителница",
        "Стойност поръчка",
        "Платено",
        "Дата плащане",
        "Получател",
        "Изпращач",
        "Общо",
        "Плащане",
        "Статус",
        "Документи",
      ],
      note: "Виждат се статуси от тип 'Очаква предаване към Еконт' и плащания 'ППП' / 'По банка'. Да се уточни дали документите ФРА се генерират автоматично или идват от външна система.",
    },
    [normalizeKey("cimex|Магазин|Рекламации")]: {
      summary: "Екран за управление на рекламации към поръчки/продукти в Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък с рекламации",
        "Добавяне на рекламация",
        "Връзка към поръчка",
        "Връзка към продукт",
        "Количество",
        "Статус на рекламацията",
        "Действия по ред",
      ],
      fields: [
        "ID",
        "Дата",
        "Име",
        "Фамилия",
        "Телефон",
        "Имейл",
        "Поръчка №",
        "Продукт",
        "Арт. номер",
        "Кол.",
        "Статус",
        "Действия",
      ],
      note: "На screenshot-а няма налични записи, но колоните показват, че рекламацията е вързана към конкретна поръчка, продукт, артикулен номер и количество.",
    },
    [normalizeKey("cimex|Магазин|Запитвания")]: {
      summary: "Екран за клиентски запитвания към продукти в Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък със запитвания",
        "Добавяне на запитване",
        "Връзка към продукт",
        "Контактни данни на клиента",
        "Коментар/съобщение",
        "Статус на обработка",
        "Действия по ред",
      ],
      fields: [
        "ID",
        "Дата",
        "Продукт",
        "Име",
        "Имейл",
        "Телефон",
        "Коментар",
        "Статус",
        "Действия",
      ],
      note: "На screenshot-а няма налични записи. Модулът трябва да остане свързан с конкретен продукт и да позволява обработка/отговор от CMS.",
    },
    [normalizeKey("cimex|Магазин|Абониране цена")]: {
      summary: "Екран със заявки от клиенти, които са се абонирали за цена или известяване към продукт.",
      includes: [
        "Поле Търсене",
        "Списък с абонаменти за цена",
        "Добавяне на запис",
        "Връзка към продукт",
        "Контактни данни на клиента",
        "Статус на обработка",
        "Действия по ред",
      ],
      fields: [
        "ID",
        "Дата",
        "Продукт",
        "Име",
        "Имейл",
        "Телефон",
        "Статус",
        "Действия",
      ],
      note: "Логически това е lead/marketing модул, но в текущата администрация е под Магазин. Добре е в заданието да се отбележи като връзка между Магазин и Маркетинг.",
    },
    [normalizeKey("cimex|Магазин|Изоставени колички")]: {
      summary: "Екран за изоставени колички и възстановяване на потенциални поръчки в Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък с изоставени колички",
        "Разгъване на количка",
        "Преглед на клиентски данни, когато са налични",
        "IP адрес",
        "Бутон/действие за създаване на поръчка",
        "Статус дали е изпратен имейл",
        "Коментари/комуникация",
        "Действия по ред",
      ],
      fields: [
        "ID",
        "Дата",
        "Име",
        "Фамилия",
        "Имейл",
        "Телефон",
        "IP",
        "Поръчка / Създай поръчка",
        "Изпратен имейл",
        "Коментари",
        "Действия",
      ],
      note: "Да се уточни дали има автоматични recovery имейли и дали модулът трябва да се вижда и в Маркетинг. За магазинския екип е важно да остане свързан с количка/checkout.",
    },
    [normalizeKey("cimex|Магазин|Изпратени имейли")]: {
      summary: "Лог/история на системни имейли, свързани с поръчки и наличности в Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък с изпратени или чакащи имейли",
        "Добавяне на запис",
        "Заглавие на имейла",
        "Статус на изпращане",
        "Дата на изпращане",
        "Действия по ред",
      ],
      fields: [
        "ID",
        "Имейл",
        "Заглавие",
        "Изпратен",
        "Дата на изпращане",
        "Действия",
      ],
      note: "Виждат се записи със статус 'Имейла все още не е изпратен' и дата 0000-00-00 00:00:00, например за отказани поръчки поради неналичност. Да се предвиди ясна опашка/статус за чакащи имейли.",
    },
    [normalizeKey("cimex|Магазин|Потребители")]: {
      summary: "Екран за клиентски профили/потребители в Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък с потребители",
        "Добавяне на потребител",
        "Преглед/редакция на профил",
        "Връзка към поръчки и комуникация",
      ],
      fields: [
        "ID",
        "Дата",
        "Име",
        "Фамилия",
        "Email",
        "Телефон",
        "Потвърден профил",
        "Група",
        "Действия",
      ],
      note: "В предоставения screenshot таблицата е празна и част от заглавията не се виждат ясно. Полетата са предложени по аналогия с магазинския профил и трябва да се потвърдят при следващ преглед.",
    },
    [normalizeKey("cimex|Каталог|Категории")]: {
      summary: "Екран за управление на категориите в продуктовия каталог на Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък с категории",
        "Добавяне на категория",
        "Import",
        "Export",
        "Бутон Категории",
        "Бутон Лица за контакт",
        "Отделни Import / Export действия вдясно",
        "Активиране/деактивиране на категория",
        "Главна категория / родителска категория",
        "Редакция на категория",
        "Изтриване/премахване на категория",
        "Икони в header-а за търсене и списък",
      ],
      fields: [
        "ID",
        "Име",
        "Активна",
        "Главна категория",
        "Действия",
      ],
      note: "Категориите са йерархични чрез поле 'Главна категория'. Виждат се английски имена като PRESSURE WASHER ATTACHMENTS, GARDEN EQUIPMENT, TRENCHERS, REBAR MACHINERY и родителски категории като CLEANING MACHINERY / ALUMINIUM LADDERS. Да се уточни защо има две двойки Import/Export бутони и дали едните са за категории, а другите за лица за контакт.",
    },
    [normalizeKey("cimex|Каталог|Марки")]: {
      summary: "Екран за управление на марки/брандове в продуктовия каталог на Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък с марки",
        "Добавяне на марка",
        "Редакция на марка",
        "Икони в header-а за търсене и списък",
      ],
      fields: [
        "ID",
        "Име на марка",
        "Действия",
      ],
      note: "Екранът изглежда по-опростен от този в Mashini: виждат се основно ID, име на марка и редакция. Примери: Holzmann, Zipper, Jansen, Lumag, Trotec, Powermat. Да се уточни дали при редакция има допълнителни полета като лого, описание, SEO, активност или връзка с доставчик.",
    },
    [normalizeKey("cimex|Каталог|Филтри")]: {
      summary: "Екран за управление на филтри/характеристики за продуктовия каталог на Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък с филтри",
        "Добавяне на филтър",
        "Връзка към марка/обхват",
        "Управление на стойности към филтър",
        "Редакция на филтър",
        "Изтриване/премахване на филтър",
        "Икони в header-а за търсене и списък",
      ],
      fields: [
        "ID",
        "Име",
        "Марка",
        "Стойности",
        "Действия",
      ],
      note: "Филтрите се използват за навигация и сравнение в каталога. Виждат се примери като Скоростна кутия, Задвижване, Разтоварване, Работна ширина, Ход на буталото и Скоби. Да се уточни дали колоната 'Марка' реално е марка, тип филтър или обхват, защото стойността е 'Една ст-ст'.",
    },
    [normalizeKey("cimex|Каталог|Продукти")]: {
      summary: "Основен екран за управление на продуктовия каталог в Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък с продукти",
        "Добавяне на нов продукт",
        "Export",
        "Масова редакция",
        "Бутон Категории",
        "Архив",
        "Индикация за видимост/активност на продукта",
        "Редакция на продукт",
        "Преглед на продукт",
        "Икони в header-а за търсене и списък",
      ],
      fields: [
        "ID",
        "Име",
        "Второ име",
        "DST ID 1",
        "DST ID 2",
        "Модел",
        "Цена продажна",
        "Видимост / активност",
        "Действия: редакция и преглед",
      ],
      note: "Това е основният каталог за Cimex. Виждат се артикули с DST ID 1 и DST ID 2, модел и продажна цена. Да се уточни дали липсва колона 'Марка' в този изглед или е вътре в редакцията на продукта.",
    },
    [normalizeKey("cimex|Съдържание|Статични стр")]: {
      summary: "Екран за управление на статични страници в Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък със статични страници",
        "Добавяне на статична страница",
        "Редакция на страница",
        "Pagination",
        "Икони в header-а за търсене и списък",
      ],
      fields: [
        "ID",
        "Заглавие",
        "Действия",
      ],
      note: "На screenshot-а няма налични записи, но модулът трябва да позволява стандартно управление на информационни страници като За нас, Доставка, Плащане, Гаранция, Общи условия и политика за лични данни. Да се уточни дали има SEO полета, статус и подредба в редакцията.",
    },
    [normalizeKey("cimex|Маркетинг|Слайдери")]: {
      summary: "Екран за управление на маркетинг слайдери/кампанийни позиции в Cimex.bg.",
      includes: [
        "Поле Търсене",
        "Списък със слайдери",
        "Добавяне на слайдер",
        "Линк към продукт, бранд или друга целева страница",
        "Дата на добавяне",
        "Дата на редакция",
        "Редакция на слайдер",
        "Pagination",
        "Икони в header-а за търсене и списък",
      ],
      fields: [
        "ID",
        "Заглавие",
        "Линк",
        "Дата на добавяне",
        "Дата на редакция",
        "Действия",
      ],
      note: "Виждат се слайдери към product и brand URL-и, например POWER PLUS, FARTOOLS, KREATOR, HOLZMANN. Част от датите на редакция са 0000-00-00 00:00:00. Да се уточнят скритите полета при редакция: изображение, mobile/desktop вариант, активност, подредба и период на показване.",
    },
    [normalizeKey("astralis|Магазин|Поръчки")]: {
      summary: "Legacy/CRM екран за поръчки, но не изглежда да е основен CMS процес за Astralis.bg.",
      includes: [
        "Филтър по ключова дума",
        "Филтър по период: начална дата и крайна дата",
        "Dropdown Избере",
        "Бутон Търси",
        "Checkbox Покажи всички продукти",
        "Допълнително поле Търсене над таблицата",
        "Списък с поръчки",
        "Сортиране по колони",
      ],
      fields: [
        "ID",
        "Дата",
        "Тотал",
        "Статус",
        "Име",
        "Фамилия",
        "Телефон",
        "Имейл",
      ],
      note: "По уточнение Astralis няма колички/checkout в сайта. Основният процес е запитване, а поръчката вероятно се създава после в CRM. За новия CMS е по-добре този екран да не е активен модул, освен ако не трябва само справка/legacy достъп.",
    },
    [normalizeKey("astralis|Магазин|Запитвания")]: {
      summary: "Екран за клиентски запитвания към продукти/услуги в Astralis.bg.",
      includes: [
        "Поле Търсене",
        "Списък със запитвания",
        "Добавяне на запитване",
        "Продукт/услуга, към която е направено запитването",
        "Контактни данни на клиента",
        "Коментар/съобщение",
        "Статус на запитването",
        "Редакция на запитване",
        "Изпращане/отговор по имейл",
        "Икони в header-а за търсене и списък",
      ],
      fields: [
        "ID",
        "Дата",
        "Продукт",
        "Име",
        "Имейл",
        "Телефон",
        "Коментар",
        "Статус",
        "Действия",
      ],
      note: "Това е основният процес за Astralis: клиентът изпраща запитване, а след това екипът прави поръчка/сделка в CRM. В новия CMS не трябва да се добавят колички и изоставени колички за Astralis.",
    },
  };

  if (details[siteKey]) return details[siteKey];
  if (details[key]) return details[key];

  if (site.id === "global-cms") return buildGlobalCmsDetail(groupTitle, itemLabel);

  return buildGenericDetail(groupTitle, itemLabel);
}

function buildGenericDetail(groupTitle, itemLabel) {
  return buildReadableModuleDetail(groupTitle, itemLabel, false);
}

function buildGlobalCmsDetail(groupTitle, itemLabel) {
  return buildReadableModuleDetail(groupTitle, itemLabel, true);
}

function makeModuleDetail(summary, includes, fields, note) {
  return { summary, includes, fields, note };
}

function buildReadableModuleDetail(groupTitle, itemLabel, isGlobalCms = false) {
  const group = normalizeKey(groupTitle);
  const label = normalizeKey(itemLabel);
  const scope = isGlobalCms ? "в единния Global CMS" : "в CMS";
  const globalNote = isGlobalCms
    ? "Това е предложение за единно меню. Конкретният сайт ще показва само модулите, които са активни за него."
    : "Да се уточнят специфичните полета и правила според конкретния сайт.";

  if (group.includes("табло") || label.includes("dashboard") || label.includes("табло")) {
    return makeModuleDetail(
      `Начален екран ${scope} с бърз преглед на важните данни и преки действия.`,
      ["Обобщение по избрания сайт", "Бързи връзки към активните модули", "Последни промени и задачи", "Сигнали за важни действия"],
      ["Сайт", "Активни модули", "Последна активност", "Бързо действие", "Статус"],
      globalNote
    );
  }

  if (label.includes("избор на сайт")) {
    return makeModuleDetail(
      `Екран за избор на сайт, след който ${scope} зарежда само неговите активни менюта и настройки.`,
      ["Списък сайтове", "Търсене по име/домейн", "Показване на типа сайт", "Зареждане на активните модули"],
      ["Име на сайт", "Домейн", "Тип сайт", "Активни модули", "Статус"],
      "Това е входната точка за работа с различните сайтове в общия CMS."
    );
  }

  if (label.includes("последна активност")) {
    return makeModuleDetail(
      `Дневник с последните промени и действия ${scope}.`,
      ["Последно редактирани записи", "Кой потребител е направил промяната", "Филтър по сайт и модул", "Преглед на история"],
      ["Дата", "Потребител", "Сайт", "Модул", "Действие", "Описание"],
      "Помага на екипа да следи какво е променяно и от кого."
    );
  }

  if (label.includes("бързи действия")) {
    return makeModuleDetail(
      `Панел с най-често използваните действия ${scope}.`,
      ["Добавяне на продукт/страница", "Преглед на нови запитвания", "Бърз достъп до поръчки", "Бърз достъп до съдържание"],
      ["Действие", "Модул", "Сайт", "Права за достъп"],
      "Списъкът с бързи действия трябва да се настройва според ролята на потребителя."
    );
  }

  if (label.includes("поръч")) {
    return makeModuleDetail(
      `Общ модул за управление на поръчки ${scope}, независимо дали са за продажба, наем, сервиз или услуга.`,
      ["Списък с поръчки", "Филтри по тип, статус, дата и сайт", "Преглед и редакция на поръчка", "Връзка с клиент, продукт, плащане и документи"],
      ["ID", "Тип", "Дата", "Клиент", "Телефон", "Имейл", "Статус", "Сума", "Отговорник"],
      "Типът на поръчката трябва да се избира като контекст: продажба, наем, сервиз или услуга."
    );
  }

  if (label.includes("резерва")) {
    return makeModuleDetail(
      `Общ модул за резервации ${scope}, използван при наем, сервизен час, заявка за оглед или друг процес с период.`,
      ["Списък резервации", "Календар по дата/час", "Филтри по тип и статус", "Връзка с клиент, обект, продукт или машина"],
      ["ID", "Тип", "От дата", "До дата", "Клиент", "Обект/машина", "Локация", "Статус"],
      "Резервацията е обща като модул, а дейността се избира чрез тип: наем, сервиз, продажба или услуга."
    );
  }

  if (label.includes("запит")) {
    return makeModuleDetail(
      `Модул за приемане, преглед и обработка на клиентски запитвания ${scope}.`,
      ["Списък със запитвания", "Филтри по дата, сайт, тип и статус", "Контактни данни на клиента", "Маркиране като обработено"],
      ["Дата", "Име", "Телефон", "Имейл", "Тема/продукт", "Съобщение", "Статус"],
      "Да се поддържа тип на запитването: общо, продуктово, услуга, сервиз или landing страница."
    );
  }

  if (label.includes("товарител")) {
    return makeModuleDetail(
      `Модул за проследяване на товарителници и доставки към поръчки ${scope}.`,
      ["Списък товарителници", "Връзка с поръчка", "Статус на доставка", "Печат/експорт на документи"],
      ["Товарителница", "Поръчка", "Дата", "Получател", "Куриер", "Цена доставка", "Статус", "Документ"],
      "При сайтове с куриерска интеграция да се уточни дали статусите идват автоматично от Еконт/друг доставчик."
    );
  }

  if (label.includes("рекламац")) {
    return makeModuleDetail(
      `Модул за управление на рекламации, върнати продукти и последващи действия ${scope}.`,
      ["Списък рекламации", "Добавяне и редакция", "Тип рекламация", "Междинен и финален статус", "Връзка с поръчка/продукт"],
      ["ID", "Дата", "Клиент", "Телефон", "Продукт", "Тип рекламация", "Статус", "Финален статус"],
      "Да се уточнят статусите и отговорностите: ремонт, замяна, отказан продукт или дефектна стока."
    );
  }

  if (label.includes("гаранцион")) {
    return makeModuleDetail(
      `Модул за гаранционни карти и гаранционни документи ${scope}.`,
      ["Списък гаранционни карти", "Връзка с поръчка и продукт", "Редакция на срок", "Експорт/печат при нужда"],
      ["Номер", "Дата", "Клиент", "Поръчка", "Фактура", "Продукт", "Брой", "Гаранционен срок"],
      "Да се уточни дали картите се генерират автоматично при поръчка или се добавят ръчно."
    );
  }

  if (group.includes("настрой") && (label.includes("потребител") || label.includes("рол") || label.includes("права"))) {
    return makeModuleDetail(
      `Модул за админ потребители, роли и права за достъп ${scope}.`,
      ["Списък админ потребители", "Роли", "Права по сайт и модул", "Активиране/деактивиране"],
      ["Потребител", "Имейл", "Роля", "Сайт", "Права", "Статус"],
      "Важно е правата да могат да се ограничават по сайт, модул и действие."
    );
  }

  if (label.includes("клиент") || label.includes("потребител")) {
    return makeModuleDetail(
      `Модул за клиентски профили и потребители ${scope}.`,
      ["Списък профили", "Търсене по контактни данни", "Преглед на история", "Редакция на данни и статус"],
      ["ID", "Име", "Фамилия", "Имейл", "Телефон", "Група", "Потвърден профил", "Дата"],
      "Да се раздели ясно дали става дума за клиентски профили на сайта или админ потребители."
    );
  }

  if (group.includes("дейности") || label.includes("продажб") || label.includes("наем") || label.includes("сервиз") || label.includes("услуг") || label.includes("търгов") || label.includes("малки обяв")) {
    return makeModuleDetail(
      `Модул за конкретна бизнес дейност ${scope}.`,
      ["Настройка на активна дейност", "Връзка с поръчки, резервации и запитвания", "Специфични статуси и полета", "Филтър по дейност в общите модули"],
      ["Дейност", "Тип процес", "Статус", "Отговорник", "Свързан модул", "Бележка"],
      "Препоръката е дейността да е контекст към общите модули, а не отделно дублирано меню за всяка дейност."
    );
  }

  if (label.includes("продукт") || label.includes("машин")) {
    return makeModuleDetail(
      `Модул за управление на продукти, машини или артикулни записи в каталога ${scope}.`,
      ["Списък продукти", "Добавяне и редакция", "Категория, марка и модел", "Снимки, описания и характеристики", "Публикуване/скриване"],
      ["ID", "Име", "Категория", "Марка", "Модел", "Описание", "Снимки", "Цена", "Статус"],
      "По сайт да се уточнят специфичните полета: наличност, rental тарифи, технически характеристики, складове или доставчици."
    );
  }

  if (label.includes("катег")) {
    return makeModuleDetail(
      `Модул за управление на категорийна структура ${scope}.`,
      ["Списък категории", "Родител/дете йерархия", "Подредба", "SEO данни", "Публикуване/скриване"],
      ["ID", "Име", "Родителска категория", "URL", "Описание", "Снимка", "SEO заглавие", "Статус"],
      "Категориите трябва да поддържат различна дълбочина според нуждите на сайта."
    );
  }

  if (label.includes("марки") && label.includes("отстъп")) {
    return makeModuleDetail(
      `Модул за управление на отстъпки по марка, доставчик или търговско правило ${scope}.`,
      ["Списък отстъпки", "Редакция на процент/стойност", "Връзка с марка и доставчик", "Активиране/деактивиране"],
      ["Марка", "Доставчик", "Отстъпка", "Тип", "Статус", "Дата на промяна"],
      "Да се уточни дали отстъпките влияят само на админ цените или и на публичните цени."
    );
  }

  if (label.includes("марк")) {
    return makeModuleDetail(
      `Модул за управление на марки и брандове в каталога ${scope}.`,
      ["Списък марки", "Добавяне и редакция", "Връзка с доставчик", "Описание и SEO", "Публикуване/скриване"],
      ["ID", "Име", "Лого", "Доставчик", "Тип марка", "Описание", "SEO URL", "Статус"],
      "При онлайн магазини да се уточни дали марката има отделна публична страница."
    );
  }

  if (label.includes("филт") || label.includes("характерист") || label.includes("свойств")) {
    return makeModuleDetail(
      `Модул за управление на филтри, характеристики и свойства на продуктите ${scope}.`,
      ["Списък филтри/свойства", "Стойности към филтър", "Връзка с категории", "Подредба и активност"],
      ["ID", "Име", "Тип", "Стойности", "Категории", "Подредба", "Статус"],
      "Да се уточни дали стойностите се въвеждат свободно или се избират от предварителен списък."
    );
  }

  if (label.includes("доставч")) {
    return makeModuleDetail(
      `Модул за управление на доставчици и контрагенти ${scope}.`,
      ["Списък доставчици", "Контактни данни", "Връзка с продукти и марки", "Импорт/експорт при нужда"],
      ["ID", "Тип", "Име", "ЕИК/ЕГН", "Град", "Адрес", "Телефон", "Имейл"],
      "Да се уточни дали доставчикът участва само в каталога или и в бекофис поръчките."
    );
  }

  if (label.includes("цен") || label.includes("отстъп")) {
    return makeModuleDetail(
      `Модул за управление на цени, отстъпки и ценови правила ${scope}.`,
      ["Списък ценови правила", "Редакция на стойност/процент", "Валидност по период", "Връзка с продукт, марка или клиентска група"],
      ["Име", "Тип", "Стойност", "Обект", "От дата", "До дата", "Активен"],
      "Да се уточни приоритетът, ако за един продукт важат няколко ценови правила."
    );
  }

  if (label.includes("импорт") || label.includes("експорт")) {
    return makeModuleDetail(
      `Модул за импорт и експорт на данни ${scope}.`,
      ["Качване на файл", "Проверка преди импорт", "Експорт към Excel/CSV", "История на импорти и грешки"],
      ["Тип данни", "Файл", "Статус", "Брой записи", "Грешки", "Дата", "Потребител"],
      "Да се дефинира кои данни могат да се импортват за всеки сайт."
    );
  }

  if (group.includes("настрой") && (label.includes("брандинг") || label.includes("лого") || label.includes("хедър") || label.includes("футър") || label.includes("меню"))) {
    return makeModuleDetail(
      `Модул за управление на визуалната и навигационна структура на сайта ${scope}.`,
      ["Лого и бранд елементи", "Хедър настройки", "Футър настройки", "Навигационни менюта", "Линкове, контакти и позициониране"],
      ["Лого", "Цвят/брандинг", "Меню", "Линк", "Позиция", "Контакт", "Статус"],
      "Това са настройки на сайта, защото влияят на общата структура и визия, а не на конкретна редакционна страница."
    );
  }

  if (label.includes("страниц") || label.includes("homepage") || label.includes("хедър") || label.includes("футър") || label.includes("меню") || label.includes("медия") || label.includes("файлов")) {
    return makeModuleDetail(
      `Модул за управление на съдържание и структурни части на сайта ${scope}.`,
      ["Редакция на съдържание", "Подредба и позиция", "Изображения/файлове", "SEO полета", "Публикуване/скриване"],
      ["Заглавие", "Съдържание", "URL", "Изображение", "Позиция", "SEO заглавие", "SEO описание", "Статус"],
      "Тези модули са важни за редакторите и маркетинг екипа, не само за програмистите."
    );
  }

  if (label.includes("новин") || label.includes("блог")) {
    return makeModuleDetail(
      `Модул за новини, блог статии и техните категории ${scope}.`,
      ["Списък публикации", "Категории", "Редакция на съдържание", "SEO", "Статус на публикуване"],
      ["ID", "Заглавие", "Категория", "Автор", "Дата", "URL", "Статус"],
      "Да се уточни дали блогът е активен за конкретния сайт и дали има отделни категории."
    );
  }

  if (label.includes("landing")) {
    return makeModuleDetail(
      `Модул за landing страници и кампанийни продуктови страници ${scope}.`,
      ["Списък landing страници", "Секции за съдържание", "Връзка с продукт/кампания", "Форма за запитване", "SEO"],
      ["Заглавие", "URL", "Продукт", "Кампания", "CTA", "Съдържание", "Статус"],
      "Landing страниците трябва да се третират като продажбени страници, не като обикновени статични страници."
    );
  }

  if (label.includes("банер") || label.includes("слайдер")) {
    return makeModuleDetail(
      `Модул за визуални рекламни позиции ${scope}.`,
      ["Списък банери/слайдове", "Изображение", "Линк", "Позиция", "Период на активност"],
      ["ID", "Заглавие", "Изображение", "URL", "Позиция", "От дата", "До дата", "Статус"],
      "Да се уточнят позициите по сайт: homepage, каталог, продуктова страница и други."
    );
  }

  if (label.includes("промо")) {
    return makeModuleDetail(
      `Модул за промо кодове и кампанийни отстъпки ${scope}.`,
      ["Списък промо кодове", "Добавяне и редакция", "Отстъпка", "Активност", "Проследяване на използване"],
      ["Код", "Отстъпка", "Тип", "Кампания", "Активен", "Използван", "Валидност"],
      "Да се уточнят правилата: еднократен код, процент, фиксирана сума, минимална стойност на поръчка."
    );
  }

  if (label.includes("мейлинг") || label.includes("имейл")) {
    return makeModuleDetail(
      `Модул за имейл комуникация, изпратени имейли и кампанийни списъци ${scope}.`,
      ["Списък имейли", "Добавяне/изпращане", "Статус на изпращане", "История по получател"],
      ["ID", "Имейл", "Заглавие", "Изпратен", "Дата на изпращане", "Статус"],
      "Да се разделят системните имейли от маркетинг мейлинг кампаниите."
    );
  }

  if (label.includes("seo") || label.includes("редирект")) {
    return makeModuleDetail(
      `Модул за SEO настройки и URL пренасочвания ${scope}.`,
      ["SEO полета", "Meta заглавия и описания", "301/302 редиректи", "Контрол на URL адреси"],
      ["URL", "SEO заглавие", "SEO описание", "Canonical", "Redirect от", "Redirect към", "Статус"],
      "Да се уточни кои SEO полета са глобални и кои са специфични за продукт, категория или страница."
    );
  }

  if (label.includes("коментар") || label.includes("отзив") || label.includes("feedback")) {
    return makeModuleDetail(
      `Модул за клиентски коментари, отзиви и обратна връзка ${scope}.`,
      ["Списък отзиви", "Оценка", "Коментар", "Модерация", "Връзка с продукт/поръчка"],
      ["ID", "Клиент", "Продукт", "Оценка", "Коментар", "Дата", "Статус"],
      "Да се уточни дали отзивите се публикуват публично или са само вътрешна обратна връзка."
    );
  }

  if (label.includes("изоставени колич")) {
    return makeModuleDetail(
      `Модул за изоставени колички и възстановяване на потенциални поръчки ${scope}.`,
      ["Списък колички", "Клиентски данни, ако са налични", "Създаване на поръчка", "Изпратен напомнящ имейл"],
      ["ID", "Дата", "Име", "Имейл", "Телефон", "IP", "Поръчка", "Изпратен имейл"],
      "Подходящ е за ecommerce сайтове с количка. Не трябва да се показва за сайтове само със запитвания."
    );
  }

  if (group.includes("анализ") || group.includes("отчет") || label.includes("статист") || label.includes("анализ") || label.includes("кампан")) {
    return makeModuleDetail(
      `Модул за справки, анализи и отчети ${scope}.`,
      ["Графики и таблици", "Филтри по период, сайт и източник", "Сравнение на резултати", "Експорт на данни"],
      ["Период", "Сайт", "Източник", "Поръчани", "Продадени", "Оборот", "Кампания"],
      "Да се уточни кои отчети са задължителни за управители и кои са само помощни."
    );
  }

  if (label.includes("сайтов")) {
    return makeModuleDetail(
      `Модул за управление на сайтовете, които се обслужват от единния CMS.`,
      ["Списък сайтове", "Тип сайт", "Активни модули", "Домейни", "Връзка с база данни"],
      ["Име", "Домейн", "Тип", "Активни модули", "База данни", "Статус"],
      "Тук се определя кои менюта се показват за всеки сайт."
    );
  }

  if (label.includes("езиц") || label.includes("текст") || label.includes("превод")) {
    return makeModuleDetail(
      `Модул за езици, системни текстове и преводи ${scope}.`,
      ["Списък езици", "Текстови ключове", "Редакция на превод", "Търсене по дума/език"],
      ["Език", "Ключ", "Текст", "Превод", "Статус", "Дата на промяна"],
      "Да се уточни дали преводите са общи за всички сайтове или се презаписват по сайт."
    );
  }

  if (label.includes("рол") || label.includes("права") || label.includes("потребител")) {
    return makeModuleDetail(
      `Модул за админ потребители, роли и права за достъп ${scope}.`,
      ["Списък потребители", "Роли", "Права по сайт и модул", "Активиране/деактивиране"],
      ["Потребител", "Имейл", "Роля", "Сайт", "Права", "Статус"],
      "Важно е правата да могат да се ограничават по сайт и по модул."
    );
  }

  if (label.includes("интеграц")) {
    return makeModuleDetail(
      `Модул за външни интеграции ${scope}.`,
      ["Настройки за API връзки", "Куриери", "Плащания", "ERP/складови системи", "Проверка на статус"],
      ["Интеграция", "Тип", "API ключ", "Активна", "Последна синхронизация", "Статус"],
      "Чувствителните ключове трябва да се пазят сигурно и да не се експортират в публични файлове."
    );
  }

  if (label.includes("лог") || label.includes("история")) {
    return makeModuleDetail(
      `Модул за логове и история на промени ${scope}.`,
      ["История на действия", "Филтри по потребител, сайт и модул", "Преглед на промяна", "Експорт при нужда"],
      ["Дата", "Потребител", "Сайт", "Модул", "Действие", "Преди", "След"],
      "Полезно е за контрол, одит и проследяване на проблеми."
    );
  }

  return makeModuleDetail(
    `Модул "${itemLabel}" от група "${groupTitle}" ${scope}.`,
    ["Списък записи", "Добавяне и редакция", "Филтри и търсене", "Активиране/скриване", "История на промени"],
    ["Име/заглавие", "Описание", "Подредба", "Статус", "Дата на промяна"],
    globalNote
  );
}

function normalizeKey(value) {
  return String(value).toLowerCase().replace(/\s+/g, " ").trim();
}

function makeAssignmentKey(groupTitle, itemLabel) {
  return `${groupTitle}||${itemLabel}`;
}

function makeStateKey(siteId, groupTitle, itemLabel) {
  return `${siteId}||${groupTitle}||${itemLabel}`;
}

function makeTreeCollapseKey(siteId, groupTitle) {
  return `${siteId}||${groupTitle}`;
}

async function loadCmsState() {
  if (!location.protocol.startsWith("http")) {
    return;
  }

  try {
    const response = await fetch("api/state");
    if (!response.ok) throw new Error("state load failed");
    const loaded = await response.json();
    cmsState = {
      assignments: loaded.assignments || {},
      details: loaded.details || {},
      completed: loaded.completed || {},
      customModules: loaded.customModules || [],
      moduleLayout: loaded.moduleLayout || null,
      collapsedTreeGroups: loaded.collapsedTreeGroups || {},
      customMvpItems: loaded.customMvpItems || [],
      mvpLayout: loaded.mvpLayout || null,
      customQuestions: loaded.customQuestions || [],
      checkedQuestions: loaded.checkedQuestions || {},
      deletedQuestions: loaded.deletedQuestions || [],
      questionAnswers: loaded.questionAnswers || {},
      siteMeta: loaded.siteMeta || {},
      deletedModules: loaded.deletedModules || [],
    };
    collapsedTreeGroups = { ...cmsState.collapsedTreeGroups };
    applyModuleStructureFromState();
    applyMvpLayoutFromState();
  } catch (error) {
    console.warn("Не мога да заредя cms-state.json", error);
  }
}

async function saveCmsState(event = null) {
  if (!location.protocol.startsWith("http")) {
    setEditorHint("За реален Save отвори страницата през локалния server, не директно като файл.", true);
    return false;
  }

  const response = await fetch("api/state", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event ? { ...cmsState, _cmsEvent: event } : cmsState),
  });

  if (!response.ok) {
    setEditorHint("Неуспешен запис в cms-state.json.", true);
    return false;
  }

  setEditorHint("Записано");
  return true;
}

function applyCustomModules() {
  (cmsState.customModules || []).forEach((customModule) => {
    const groupTitle = customModule.groupTitle;
    const itemLabel = customModule.itemLabel;
    if (!groupTitle || !itemLabel) return;

    let group = moduleGroups.find((entry) => entry.title === groupTitle);
    if (!group) {
      group = { title: groupTitle, type: customModule.type || "common", items: [] };
      moduleGroups.push(group);
    }

    if (!group.items.includes(itemLabel)) {
      group.items.push(itemLabel);
    }
  });
}

function resolveCanonicalGroup(siteGroupTitle, itemLabel = "") {
  const overrideKey = `${siteGroupTitle}||${itemLabel}`;
  if (moduleItemGroupOverrides[overrideKey]) {
    return moduleItemGroupOverrides[overrideKey];
  }
  return canonicalGroupAliases[siteGroupTitle] || siteGroupTitle;
}

function normalizeModuleItemLabel(label, siteGroupTitle = "") {
  if (siteGroupTitle === "Настройки сайт" && label === "Каталог") {
    return "Каталог страница";
  }
  return moduleItemLabelAliases[label] || label;
}

function ensureModuleGroup(title) {
  let group = moduleGroups.find((entry) => entry.title === title);
  if (group) return group;

  const baseGroup = defaultModuleLayout.find((entry) => entry.title === title);
  if (!baseGroup) return null;

  group = { title: baseGroup.title, type: baseGroup.type, items: [...baseGroup.items] };
  moduleGroups.push(group);
  return group;
}

function addModuleItem(groupTitle, itemLabel) {
  if (!groupTitle || !itemLabel) return;
  const group = ensureModuleGroup(groupTitle);
  if (!group) return;
  if (!group.items.includes(itemLabel)) {
    group.items.push(itemLabel);
  }
}

function normalizeModuleGroupsByAliases() {
  const moves = [];

  moduleGroups.forEach((group) => {
    const keptItems = [];

    group.items.forEach((itemLabel) => {
      const canonicalGroupTitle = resolveCanonicalGroup(group.title, itemLabel);
      const normalizedLabel = normalizeModuleItemLabel(itemLabel, group.title);

      if (canonicalGroupTitle !== group.title || normalizedLabel !== itemLabel) {
        moves.push({ groupTitle: canonicalGroupTitle, itemLabel: normalizedLabel });
        return;
      }

      if (!keptItems.includes(itemLabel)) {
        keptItems.push(itemLabel);
      }
    });

    group.items = keptItems;
  });

  moves.forEach(({ groupTitle, itemLabel }) => addModuleItem(groupTitle, itemLabel));
}

function dedupeModuleGroups() {
  const groupsToRemove = [];

  moduleGroups.forEach((group, index) => {
    const canonicalTitle = resolveCanonicalGroup(group.title);
    if (canonicalTitle === group.title) return;

    group.items.forEach((item) => {
      const normalizedLabel = normalizeModuleItemLabel(item, group.title);
      const targetTitle = resolveCanonicalGroup(group.title, item);
      addModuleItem(targetTitle, normalizedLabel);
    });
    groupsToRemove.push(index);
  });

  [...new Set(groupsToRemove)].sort((a, b) => b - a).forEach((index) => {
    moduleGroups.splice(index, 1);
  });

  moduleGroups.forEach((group) => {
    group.items = [...new Set(group.items.filter(Boolean))];
  });
}

function splitLegacyCombinedModules() {
  moduleGroups.forEach((group) => {
    const combinedIndex = group.items.indexOf("Товарителници / Еконт товарителници");
    if (combinedIndex < 0) return;
    group.items.splice(combinedIndex, 1, "Товарителници", "Еконт товарителници");
    group.items = [...new Set(group.items)];
  });

  const legacyAssignmentKey = makeAssignmentKey("Магазин", "Товарителници / Еконт товарителници");
  if (cmsState.assignments[legacyAssignmentKey]) {
    const siteIds = cmsState.assignments[legacyAssignmentKey];
    cmsState.assignments[makeAssignmentKey("Магазин", "Товарителници")] = [...siteIds];
    cmsState.assignments[makeAssignmentKey("Магазин", "Еконт товарителници")] = [...siteIds];
    delete cmsState.assignments[legacyAssignmentKey];
  }

  cmsState.deletedModules = (cmsState.deletedModules || []).flatMap((entry) => {
    if (entry !== makeModuleKey("Магазин", "Товарителници / Еконт товарителници")) return [entry];
    return [
      makeModuleKey("Магазин", "Товарителници"),
      makeModuleKey("Магазин", "Еконт товарителници"),
    ];
  });
}

function applyModuleStructureFromState() {
  applyDeletedModulesToSites();

  if (Array.isArray(cmsState.moduleLayout) && cmsState.moduleLayout.length) {
    moduleGroups.splice(0, moduleGroups.length, ...cloneModuleLayout(cmsState.moduleLayout));
  } else {
    applyCustomModules();
  }

  splitLegacyCombinedModules();
  const before = JSON.stringify(moduleGroups);
  normalizeModuleGroupsByAliases();
  dedupeModuleGroups();
  syncSiteModulesToModuleGroups();
  normalizeModuleGroupsByAliases();
  migrateAssignmentKeysOnLoad();
  const changed = before !== JSON.stringify(moduleGroups);
  if (changed) {
    persistModuleLayout();
  }
  return changed;
}

function cloneModuleLayout(layout) {
  return layout.map((group) => ({
    title: group.title,
    type: group.type || "common",
    items: [...(group.items || [])],
  }));
}

function persistModuleLayout() {
  cmsState.moduleLayout = cloneModuleLayout(moduleGroups);
}

function makeModuleKey(groupTitle, itemLabel) {
  return `${groupTitle}||${itemLabel}`;
}

function applyDeletedModulesToSites() {
  const deleted = new Set(cmsState.deletedModules || []);
  if (!deleted.size) return;

  sites.forEach((site) => {
    site.menuTree.forEach((group) => {
      group.children = group.children.filter((child) => {
        return !deleted.has(makeModuleKey(group.title, getChildLabel(child)));
      });
    });
  });
}

function syncSiteModulesToModuleGroups() {
  const deleted = new Set(cmsState.deletedModules || []);

  sites.forEach((site) => {
    site.menuTree.forEach((siteGroup) => {
      siteGroup.children.forEach((child) => {
        const label = getChildLabel(child);
        if (!label) return;
        if (deleted.has(makeModuleKey(siteGroup.title, label))) return;

        const canonicalGroupTitle = resolveCanonicalGroup(siteGroup.title, label);
        const normalizedLabel = normalizeModuleItemLabel(label, siteGroup.title);
        addModuleItem(canonicalGroupTitle, normalizedLabel);
      });
    });
  });

  dedupeModuleGroups();
}

function migrateAssignmentKeysOnLoad() {
  const merged = {};

  Object.entries(cmsState.assignments || {}).forEach(([key, siteIds]) => {
    const [groupTitle, itemLabel] = key.split("||");
    if (!groupTitle || !itemLabel) return;

    const canonicalGroup = resolveCanonicalGroup(groupTitle, itemLabel);
    const normalizedLabel = normalizeModuleItemLabel(itemLabel, groupTitle);
    const nextKey = makeAssignmentKey(canonicalGroup, normalizedLabel);

    if (!merged[nextKey]) merged[nextKey] = new Set();
    siteIds.forEach((siteId) => merged[nextKey].add(siteId));
  });

  cmsState.assignments = Object.fromEntries(
    Object.entries(merged).map(([key, siteIds]) => [key, [...siteIds]])
  );

  const legacyLanguagesKey = makeAssignmentKey("Сайт", "Езици");
  const settingsLanguagesKey = makeAssignmentKey("Настройки", "Езици");
  if (cmsState.assignments[legacyLanguagesKey]) {
    const siteIds = new Set([
      ...(cmsState.assignments[settingsLanguagesKey] || []),
      ...cmsState.assignments[legacyLanguagesKey],
    ]);
    cmsState.assignments[settingsLanguagesKey] = [...siteIds];
    delete cmsState.assignments[legacyLanguagesKey];
  }
}

function findSiteGroupForAssignment(site, groupTitle, itemLabel) {
  const exactGroup = site.menuTree.find((entry) => entry.title === groupTitle);
  if (exactGroup) return exactGroup;

  return (
    site.menuTree.find((entry) => {
      if (resolveCanonicalGroup(entry.title) !== groupTitle) return false;
      return entry.children.some((child) => {
        const childLabel = getChildLabel(child);
        return childLabel === itemLabel || normalizeModuleItemLabel(childLabel, entry.title) === itemLabel;
      });
    }) ||
    site.menuTree.find((entry) => resolveCanonicalGroup(entry.title, itemLabel) === groupTitle) ||
    site.menuTree.find((entry) => resolveCanonicalGroup(entry.title) === groupTitle) ||
    null
  );
}

function siteHasAssignedModule(site, groupTitle, itemLabel) {
  const group = findSiteGroupForAssignment(site, groupTitle, itemLabel);
  if (!group) return false;

  return group.children.some((child) => {
    const childLabel = getChildLabel(child);
    return childLabel === itemLabel || normalizeModuleItemLabel(childLabel, group.title) === itemLabel;
  });
}

function applySavedAssignments() {
  Object.entries(cmsState.assignments).forEach(([key, siteIds]) => {
    const [groupTitle, itemLabel] = key.split("||");
    if (!groupTitle || !itemLabel) return;

    sites.forEach((site) => {
      const shouldHave = siteIds.includes(site.id);
      const group = findSiteGroupForAssignment(site, groupTitle, itemLabel);

      if (shouldHave) {
        if (group) {
          const exists = group.children.some((child) => {
            const childLabel = getChildLabel(child);
            return childLabel === itemLabel || normalizeModuleItemLabel(childLabel, group.title) === itemLabel;
          });
          if (!exists) group.children.push(suggested(itemLabel));
        } else {
          const moduleGroup = moduleGroups.find((entry) => entry.title === groupTitle);
          site.menuTree.push({ title: groupTitle, type: moduleGroup?.type || "common", children: [suggested(itemLabel)] });
        }
        return;
      }

      if (group) {
        group.children = group.children.filter((child) => {
          const childLabel = getChildLabel(child);
          const isSame = childLabel === itemLabel || normalizeModuleItemLabel(childLabel, group.title) === itemLabel;
          return !isSame;
        });
      }
    });
  });
}

function renderEditor() {
  const groupSelect = document.querySelector("#editorGroup");
  const itemSelect = document.querySelector("#editorItem");
  const siteSelect = document.querySelector("#editorDetailSite");

  groupSelect.innerHTML = moduleGroups.map((group) => `<option value="${escapeAttr(group.title)}">${group.title}</option>`).join("");
  siteSelect.innerHTML = sites.map((site) => `<option value="${site.id}">${site.name}</option>`).join("");

  groupSelect.addEventListener("change", () => {
    renderEditorItems();
    renderEditorSites();
    loadEditorDetail();
  });

  itemSelect.addEventListener("change", () => {
    renderEditorSites();
    loadEditorDetail();
  });

  siteSelect.addEventListener("change", loadEditorDetail);
  document.querySelector("#saveEditorBtn").addEventListener("click", saveEditorChanges);
  document.querySelector("#exportJsonBtn").addEventListener("click", exportCmsJson);
  document.querySelector("#importJsonInput").addEventListener("change", importCmsJson);

  renderEditorItems();
  renderEditorSites();
  loadEditorDetail();
}

function renderEditorItems() {
  const groupTitle = document.querySelector("#editorGroup").value || moduleGroups[0].title;
  const group = moduleGroups.find((item) => item.title === groupTitle) || moduleGroups[0];
  const itemSelect = document.querySelector("#editorItem");

  itemSelect.innerHTML = group.items.map((item) => `<option value="${escapeAttr(item)}">${item}</option>`).join("");
}

function renderEditorSites() {
  const groupTitle = document.querySelector("#editorGroup").value;
  const itemLabel = document.querySelector("#editorItem").value;
  const key = makeAssignmentKey(groupTitle, itemLabel);
  const savedSiteIds = cmsState.assignments[key];
  const container = document.querySelector("#editorSites");

  container.innerHTML = `
    <p class="panel-note">Да се показва в сайтове</p>
    ${sites
      .map((site) => {
        const hasCurrent = siteHasMenuItem(site, groupTitle, itemLabel);
        const checked = savedSiteIds ? savedSiteIds.includes(site.id) || hasCurrent : hasCurrent;
        return `
          <label class="site-check">
            <input type="checkbox" value="${site.id}" ${checked ? "checked" : ""} ${hasCurrent ? "data-current=\"true\"" : ""} />
            <span>${site.name}</span>
          </label>
        `;
      })
      .join("")}
  `;
}

function siteHasMenuItem(site, groupTitle, itemLabel) {
  return siteHasAssignedModule(site, groupTitle, itemLabel);
}

function loadEditorDetail() {
  const siteId = document.querySelector("#editorDetailSite").value;
  const site = sites.find((item) => item.id === siteId) || sites[0];
  const groupTitle = document.querySelector("#editorGroup").value;
  const itemLabel = document.querySelector("#editorItem").value;
  const detail = getModuleDetail(site, groupTitle, itemLabel);
  const savedForSite = Boolean(cmsState.details[makeStateKey(site.id, groupTitle, itemLabel)]);

  document.querySelector("#editorSummary").value = detail.summary || "";
  document.querySelector("#editorIncludes").value = (detail.includes || []).join("\n");
  document.querySelector("#editorFields").value = (detail.fields || []).join("\n");
  document.querySelector("#editorNote").value = detail.note || "";
  setEditorHint(
    savedForSite
      ? `Заредено е запазено описание за ${site.name} / ${groupTitle} / ${itemLabel}.`
      : `Попълваш отделно описание за ${site.name} / ${groupTitle} / ${itemLabel}.`
  );
}

async function saveEditorChanges() {
  const groupTitle = document.querySelector("#editorGroup").value;
  const itemLabel = document.querySelector("#editorItem").value;
  const siteId = document.querySelector("#editorDetailSite").value;
  const checkedSiteIds = [...document.querySelectorAll("#editorSites input:checked")].map((input) => input.value);
  const assignmentKey = makeAssignmentKey(groupTitle, itemLabel);
  const site = siteById(siteId) || sites[0];
  const previousDetail = getModuleDetail(site, groupTitle, itemLabel);
  const nextDetail = {
    summary: document.querySelector("#editorSummary").value.trim(),
    includes: linesFromTextarea("#editorIncludes"),
    fields: linesFromTextarea("#editorFields"),
    note: document.querySelector("#editorNote").value.trim(),
  };

  cmsState.assignments[assignmentKey] = checkedSiteIds;
  cmsState.details[makeStateKey(siteId, groupTitle, itemLabel)] = nextDetail;

  applySavedAssignments();
  renderSiteTabs();
  renderSiteProfile(siteId);
  await saveCmsState(cmsEvent("editor.saved", "Запазена е редакция от общия редактор", {
    siteId,
    moduleGroup: groupTitle,
    moduleName: itemLabel,
    description: `${siteById(siteId)?.name || siteId}: запазени са сайтове и описание за "${itemLabel}".`,
    changeText: buildFieldChangeText(previousDetail, nextDetail, [
      { key: "summary", label: "Кратко описание" },
      { key: "includes", label: "Какво включва" },
      { key: "fields", label: "Полета / данни" },
      { key: "note", label: "Бележка за заданието" },
    ]) || `Избрани сайтове:\n${checkedSiteIds.map((id) => siteById(id)?.name || id).join("\n") || "(няма)"}`,
  }));
  loadEditorDetail();
}

function linesFromTextarea(selector) {
  return linesFromValue(document.querySelector(selector).value);
}

function linesFromValue(value) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function autosizeTextareas(scope = document) {
  scope.querySelectorAll("textarea").forEach((textarea) => {
    resizeTextarea(textarea);
    textarea.addEventListener("input", () => resizeTextarea(textarea));
  });
}

function resizeTextarea(textarea) {
  textarea.style.height = "auto";
  const lineHeight = Number.parseFloat(getComputedStyle(textarea).lineHeight) || 20;
  textarea.style.height = `${textarea.scrollHeight + lineHeight}px`;
}

function exportCmsJson() {
  const blob = new Blob([JSON.stringify(cmsState, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cms-state.json";
  link.click();
  URL.revokeObjectURL(url);
}

async function importCmsJson(event) {
  const file = event.target.files[0];
  if (!file) return;

  const text = await file.text();
  const imported = JSON.parse(text);
  cmsState = {
    assignments: imported.assignments || {},
    details: imported.details || {},
    completed: imported.completed || {},
    customModules: imported.customModules || [],
    moduleLayout: imported.moduleLayout || null,
    collapsedTreeGroups: imported.collapsedTreeGroups || {},
    customMvpItems: imported.customMvpItems || [],
    mvpLayout: imported.mvpLayout || null,
    customQuestions: imported.customQuestions || [],
    checkedQuestions: imported.checkedQuestions || {},
    deletedQuestions: imported.deletedQuestions || [],
    questionAnswers: imported.questionAnswers || {},
    siteMeta: imported.siteMeta || {},
    deletedModules: imported.deletedModules || [],
  };

  collapsedTreeGroups = { ...cmsState.collapsedTreeGroups };
  applyModuleStructureFromState();
  applySavedAssignments();
  renderSiteTabs();
  renderSiteProfile(sites[0].id);
  renderEditorSites();
  loadEditorDetail();
  await saveCmsState(cmsEvent("state.imported", "Импортиран е CMS JSON", {
    description: "Импортиран е нов cms-state.json през интерфейса.",
  }));
}

function setEditorHint(message, isError = false) {
  const hint = document.querySelector("#editorHint");
  if (!hint) return;
  hint.textContent = message;
  hint.classList.toggle("error", isError);
}

function getTagClass(moduleName) {
  const lower = moduleName.toLowerCase();

  if (lower.includes("поръч") || lower.includes("клиент") || lower.includes("колич")) return "shop";
  if (lower.includes("каталог") || lower.includes("катег") || lower.includes("запит") || lower.includes("марк")) return "catalog";
  if (lower.includes("наем") || lower.includes("резер") || lower.includes("календар") || lower.includes("налич")) return "special";

  return "";
}

function renderModuleGroups(selectedGroupTitle = "", selectedItemLabel = "") {
  const container = document.querySelector("#moduleGroups");
  const activeGroup = moduleGroups.find((group) => group.title === selectedGroupTitle) || moduleGroups[0];
  const activeItem = activeGroup.items.includes(selectedItemLabel) ? selectedItemLabel : activeGroup.items[0];

  container.innerHTML = `
    <div class="module-card module-create-card">
      <h3>Нов модул</h3>
      <div class="module-create-form">
        <label>
          <span>Име на модул</span>
          <input id="newModuleName" type="text" placeholder="Напр. Неуспешни плащания" />
        </label>
        <label>
          <span>Група</span>
          <select id="newModuleGroup">
            ${moduleGroups.map((group) => `<option value="${escapeAttr(group.title)}">${group.title}</option>`).join("")}
            <option value="__custom">Друга група</option>
          </select>
        </label>
        <label class="custom-group-field" hidden>
          <span>Име на нова група</span>
          <input id="newModuleCustomGroup" type="text" placeholder="Напр. Интеграции" />
        </label>
        <button class="primary-button" id="createModuleBtn" type="button">Създай модул</button>
        <span class="save-status" id="createModuleStatus"></span>
      </div>
    </div>
    ${moduleGroups
    .map((group) => {
      return `
        <div class="module-card module-dropzone" data-group="${escapeAttr(group.title)}">
          <h3>${group.title}<span class="module-tag ${group.type}">${typeLabels[group.type]}</span></h3>
          <ul class="module-picker-list" data-group="${escapeAttr(group.title)}">
            ${group.items
              .map((item) => {
                const active = group.title === activeGroup.title && item === activeItem ? " active" : "";
                return `
                  <li class="module-picker-row" data-group="${escapeAttr(group.title)}" data-item="${escapeAttr(item)}">
                    <button class="module-picker${active}" data-group="${escapeAttr(group.title)}" data-item="${escapeAttr(item)}" type="button" draggable="true" title="Drag за преместване, double click за преименуване">${item}</button>
                    <button class="module-delete" data-group="${escapeAttr(group.title)}" data-item="${escapeAttr(item)}" type="button" title="Изтрий модул">×</button>
                  </li>
                `;
              })
              .join("")}
          </ul>
        </div>
      `;
    })
    .join("")}
  `;

  bindCreateModuleForm(container);
  bindModuleDragAndRename(container);
  bindModuleDelete(container);
  renderModuleAssignment(activeGroup.title, activeItem);

  container.querySelectorAll(".module-picker").forEach((button) => {
    button.addEventListener("click", () => {
      container.querySelectorAll(".module-picker").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderModuleAssignment(button.dataset.group, button.dataset.item);
    });
  });
}

function bindModuleDelete(container) {
  container.querySelectorAll(".module-delete").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.stopPropagation();
      const groupTitle = button.dataset.group;
      const itemLabel = button.dataset.item;
      const confirmed = window.confirm(`Да изтрия ли модул "${itemLabel}" от "${groupTitle}"? Assignment-ите ще се махнат, описанията ще останат като резерв.`);
      if (!confirmed) return;
      await deleteModule(groupTitle, itemLabel);
    });
  });
}

function bindCreateModuleForm(container) {
  const groupSelect = container.querySelector("#newModuleGroup");
  const customGroupField = container.querySelector(".custom-group-field");
  const customGroupInput = container.querySelector("#newModuleCustomGroup");
  const nameInput = container.querySelector("#newModuleName");
  const status = container.querySelector("#createModuleStatus");

  groupSelect.addEventListener("change", () => {
    const custom = groupSelect.value === "__custom";
    customGroupField.hidden = !custom;
    if (custom) customGroupInput.focus();
  });

  container.querySelector("#createModuleBtn").addEventListener("click", async () => {
    const itemLabel = nameInput.value.trim();
    const groupTitle = groupSelect.value === "__custom" ? customGroupInput.value.trim() : groupSelect.value;
    const existingGroup = moduleGroups.find((group) => group.title === groupTitle);
    const type = existingGroup?.type || "common";

    if (!itemLabel || !groupTitle) {
      status.textContent = "Попълни име и група";
      status.classList.add("error");
      return;
    }

    const duplicate = moduleGroups.some((group) => group.title === groupTitle && group.items.includes(itemLabel));
    if (duplicate) {
      status.textContent = "Този модул вече съществува";
      status.classList.add("error");
      return;
    }

    cmsState.customModules = cmsState.customModules || [];
    cmsState.deletedModules = (cmsState.deletedModules || []).filter((key) => key !== makeModuleKey(groupTitle, itemLabel));
    cmsState.customModules.push({ groupTitle, itemLabel, type });
    applyCustomModules();
    persistModuleLayout();
    const saved = await saveCmsState(cmsEvent("module.created", "Създаден е модул", {
      moduleGroup: groupTitle,
      moduleName: itemLabel,
      description: `Модулът "${itemLabel}" е добавен в група "${groupTitle}".`,
    }));
    renderModuleGroups(groupTitle, itemLabel);
    document.querySelector("#moduleAssignmentStatus").textContent = saved ? "Записано" : "Не е записано";
  });
}

function makeQuestionKey(question) {
  return normalizeKey(question);
}

function resolveQuestionLabel(questionKey) {
  const visible = getVisibleQuestions().find((question) => makeQuestionKey(question) === questionKey);
  if (visible) return visible;

  return (
    [...defaultQuestions, ...(cmsState.customQuestions || [])].find((question) => makeQuestionKey(question) === questionKey) ||
    questionKey
  );
}

function getVisibleQuestions() {
  const deleted = new Set(cmsState.deletedQuestions || []);
  return [...defaultQuestions, ...(cmsState.customQuestions || [])].filter((question) => !deleted.has(makeQuestionKey(question)));
}

async function deleteQuestion(questionKey, questionText) {
  const confirmed = window.confirm(`Да изтрия ли въпроса?\n\n${questionText}`);
  if (!confirmed) return;

  cmsState.deletedQuestions = cmsState.deletedQuestions || [];
  if (!cmsState.deletedQuestions.includes(questionKey)) {
    cmsState.deletedQuestions.push(questionKey);
  }

  cmsState.customQuestions = (cmsState.customQuestions || []).filter((question) => makeQuestionKey(question) !== questionKey);

  if (cmsState.checkedQuestions?.[questionKey]) {
    delete cmsState.checkedQuestions[questionKey];
  }
  if (cmsState.questionAnswers?.[questionKey]) {
    delete cmsState.questionAnswers[questionKey];
  }

  renderMvpAndQuestions();
  const saved = await saveCmsState(
    cmsEvent("question.deleted", "Изтрит е въпрос", {
      description: questionText,
    })
  );
  const status = document.querySelector("#questionStatus");
  if (status) {
    status.classList.remove("error");
    status.textContent = saved ? "Изтрито" : "Не е записано";
  }
}

async function saveQuestionAnswer(questionKey, questionText, reason = "manual") {
  const label = questionText || resolveQuestionLabel(questionKey);
  const answer = cmsState.questionAnswers?.[questionKey] || "";
  const trimmedAnswer = answer.trim();
  let event = null;

  if (trimmedAnswer || reason !== "autosave") {
    event = cmsEvent("question.answered", reason === "autosave" ? "Обновен е отговор на въпрос" : "Записан е отговор на въпрос", {
      questionKey,
      questionText: label,
      description: label,
      changeText: trimmedAnswer ? `Въпрос:\n${label}\n\nОтговор:\n${trimmedAnswer}` : `Въпрос:\n${label}\n\nОтговор: (изтрит)`,
    });
  }

  const saved = await saveCmsState(event);
  const status = document.querySelector("#questionStatus");
  if (status && reason !== "autosave") {
    status.classList.remove("error");
    status.textContent = saved ? "Записано" : "Не е записано";
  }
  return saved;
}

function cloneMvpLayout(layout) {
  return {
    phase1: [...(layout?.phase1 || [])],
    phase2: [...(layout?.phase2 || [])],
  };
}

function applyMvpLayoutFromState() {
  if (cmsState.mvpLayout && (cmsState.mvpLayout.phase1?.length || cmsState.mvpLayout.phase2?.length)) {
    cmsState.mvpLayout = cloneMvpLayout(cmsState.mvpLayout);
    return;
  }

  cmsState.mvpLayout = cloneMvpLayout(defaultMvpItems);
  (cmsState.customMvpItems || []).forEach((item) => {
    if (item.phase === "phase1") cmsState.mvpLayout.phase1.push(item.text);
    if (item.phase === "phase2") cmsState.mvpLayout.phase2.push(item.text);
  });
}

function ensureMvpLayout() {
  if (!cmsState.mvpLayout) applyMvpLayoutFromState();
  return cmsState.mvpLayout;
}

async function saveMvpLayout(reason = "manual") {
  const saved = await saveCmsState(
    cmsEvent("mvp.updated", reason === "autosave" ? "Автозаписан е MVP списък" : "Обновен е MVP списък")
  );
  const status = document.querySelector("#mvpStatus");
  if (status && reason !== "autosave") {
    status.classList.remove("error");
    status.textContent = saved ? "Записано" : "Не е записано";
  }
  return saved;
}

function renderMvpPhaseList(phase, container, muted = false) {
  const items = ensureMvpLayout()[phase] || [];
  const marker = muted ? "○" : "✓";

  container.innerHTML = items
    .map((text, index) => {
      return `
        <li class="mvp-item">
          <span class="mvp-item-marker" aria-hidden="true">${marker}</span>
          <input class="mvp-item-input" type="text" value="${escapeAttr(text)}" data-phase="${escapeAttr(phase)}" data-index="${index}" />
          <button class="mvp-delete" type="button" data-phase="${escapeAttr(phase)}" data-index="${index}" title="Изтрий">×</button>
        </li>
      `;
    })
    .join("");

  container.querySelectorAll(".mvp-item-input").forEach((input) => {
    input.addEventListener("input", () => {
      const layout = ensureMvpLayout();
      layout[input.dataset.phase][Number(input.dataset.index)] = input.value;
      const timerKey = `mvp:${input.dataset.phase}:${input.dataset.index}`;
      window.clearTimeout(autosaveTimers.get(timerKey));
      autosaveTimers.set(
        timerKey,
        window.setTimeout(() => {
          saveMvpLayout("autosave");
        }, 1200)
      );
    });
  });

  container.querySelectorAll(".mvp-delete").forEach((button) => {
    button.addEventListener("click", async () => {
      const layout = ensureMvpLayout();
      const index = Number(button.dataset.index);
      const text = layout[button.dataset.phase][index];
      if (!window.confirm(`Да изтрия ли MVP точката?\n\n${text}`)) return;

      layout[button.dataset.phase].splice(index, 1);
      renderMvpAndQuestions();
      const saved = await saveCmsState(
        cmsEvent("mvp.deleted", "Изтрита е MVP точка", {
          description: text,
        })
      );
      const status = document.querySelector("#mvpStatus");
      if (status) {
        status.classList.remove("error");
        status.textContent = saved ? "Изтрито" : "Не е записано";
      }
    });
  });
}

function renderMvpAndQuestions() {
  const phase1 = document.querySelector("#mvpPhase1");
  const phase2 = document.querySelector("#mvpPhase2");
  const questionsList = document.querySelector("#questionsList");
  if (!phase1 || !phase2 || !questionsList) return;

  renderMvpPhaseList("phase1", phase1, false);
  renderMvpPhaseList("phase2", phase2, true);

  const questions = getVisibleQuestions();
  questionsList.innerHTML = questions
    .map((question) => {
      const key = makeQuestionKey(question);
      const checked = cmsState.checkedQuestions?.[key] ? "checked" : "";
      const answer = cmsState.questionAnswers?.[key] || "";
      return `
        <article class="question-card">
          <div class="question-item">
            <input type="checkbox" data-question="${escapeAttr(key)}" ${checked} />
            <span class="question-text">${escapeHtml(question)}</span>
            <button class="question-delete" data-question="${escapeAttr(key)}" data-label="${escapeAttr(question)}" type="button" title="Изтрий въпрос">×</button>
          </div>
          <label class="question-answer-field">
            <span>Отговор</span>
            <textarea class="question-answer" data-question="${escapeAttr(key)}" data-question-label="${escapeAttr(question)}" rows="3" placeholder="Отговор, решение или бележка от екипа">${escapeHtml(answer)}</textarea>
          </label>
        </article>
      `;
    })
    .join("");

  questionsList.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", async () => {
      cmsState.checkedQuestions = cmsState.checkedQuestions || {};
      cmsState.checkedQuestions[checkbox.dataset.question] = checkbox.checked;
      await saveCmsState(
        cmsEvent("question.updated", checkbox.checked ? "Маркиран е въпрос" : "Размаркиран е въпрос", {
          description: checkbox.dataset.question,
        })
      );
    });
  });

  questionsList.querySelectorAll(".question-delete").forEach((button) => {
    button.addEventListener("click", async () => {
      await deleteQuestion(button.dataset.question, button.dataset.label);
    });
  });

  questionsList.querySelectorAll(".question-answer").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      cmsState.questionAnswers = cmsState.questionAnswers || {};
      cmsState.questionAnswers[textarea.dataset.question] = textarea.value;
      const timerKey = `questionAnswer:${textarea.dataset.question}`;
      window.clearTimeout(autosaveTimers.get(timerKey));
      autosaveTimers.set(
        timerKey,
        window.setTimeout(() => {
          saveQuestionAnswer(textarea.dataset.question, textarea.dataset.questionLabel, "autosave");
        }, QUESTION_ANSWER_AUTOSAVE_MS)
      );
    });
  });
}

function bindMvpAndQuestionForms() {
  document.querySelector("#addMvpBtn")?.addEventListener("click", async () => {
    const phase = document.querySelector("#newMvpPhase").value;
    const input = document.querySelector("#newMvpText");
    const status = document.querySelector("#mvpStatus");
    const text = input.value.trim();
    if (!text) {
      status.textContent = "Попълни текст";
      status.classList.add("error");
      return;
    }

    ensureMvpLayout()[phase].push(text);
    input.value = "";
    renderMvpAndQuestions();
    const saved = await saveCmsState(cmsEvent("mvp.created", "Добавена е MVP точка", {
      description: text,
    }));
    status.classList.remove("error");
    status.textContent = saved ? "Записано" : "Не е записано";
  });

  document.querySelector("#addQuestionBtn")?.addEventListener("click", async () => {
    const input = document.querySelector("#newQuestionText");
    const status = document.querySelector("#questionStatus");
    const text = input.value.trim();
    if (!text) {
      status.textContent = "Попълни въпрос";
      status.classList.add("error");
      return;
    }

    cmsState.customQuestions = cmsState.customQuestions || [];
    cmsState.customQuestions.push(text);
    input.value = "";
    renderMvpAndQuestions();
    const saved = await saveCmsState(cmsEvent("question.created", "Добавен е въпрос", {
      description: text,
    }));
    status.classList.remove("error");
    status.textContent = saved ? "Записано" : "Не е записано";
  });
}

function bindModuleDragAndRename(container) {
  container.querySelectorAll(".module-picker").forEach((button) => {
    button.addEventListener("dragstart", (event) => {
      button.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData(
        "application/json",
        JSON.stringify({ groupTitle: button.dataset.group, itemLabel: button.dataset.item })
      );
    });

    button.addEventListener("dragend", () => {
      button.classList.remove("dragging");
      container.querySelectorAll(".module-dropzone").forEach((zone) => zone.classList.remove("drag-over"));
    });

    button.addEventListener("dblclick", async (event) => {
      event.preventDefault();
      const currentName = button.dataset.item;
      const nextName = window.prompt("Ново име на модула:", currentName);
      if (!nextName || nextName.trim() === currentName) return;
      await renameModule(button.dataset.group, currentName, nextName.trim());
    });
  });

  container.querySelectorAll(".module-picker-row").forEach((row) => {
    row.addEventListener("dragover", (event) => {
      event.preventDefault();
      row.classList.add("drag-over-row");
      event.dataTransfer.dropEffect = "move";
    });

    row.addEventListener("dragleave", () => {
      row.classList.remove("drag-over-row");
    });

    row.addEventListener("drop", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      row.classList.remove("drag-over-row");
      const payload = JSON.parse(event.dataTransfer.getData("application/json") || "{}");
      if (!payload.groupTitle || !payload.itemLabel) return;
      await moveModule(payload.groupTitle, payload.itemLabel, row.dataset.group, row.dataset.item);
    });
  });

  container.querySelectorAll(".module-dropzone").forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("drag-over");
      event.dataTransfer.dropEffect = "move";
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", async (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");
      const payload = JSON.parse(event.dataTransfer.getData("application/json") || "{}");
      const targetGroup = zone.dataset.group;
      if (!payload.groupTitle || !payload.itemLabel || !targetGroup || payload.groupTitle === targetGroup) return;
      await moveModule(payload.groupTitle, payload.itemLabel, targetGroup);
    });
  });
}

async function moveModule(oldGroupTitle, itemLabel, newGroupTitle, beforeItemLabel = "") {
  const oldGroup = moduleGroups.find((group) => group.title === oldGroupTitle);
  const newGroup = moduleGroups.find((group) => group.title === newGroupTitle);
  if (!oldGroup || !newGroup) return;
  if (oldGroupTitle === newGroupTitle && itemLabel === beforeItemLabel) return;

  oldGroup.items = oldGroup.items.filter((item) => item !== itemLabel);
  if (!newGroup.items.includes(itemLabel)) {
    const insertIndex = beforeItemLabel ? newGroup.items.indexOf(beforeItemLabel) : -1;
    if (insertIndex >= 0) {
      newGroup.items.splice(insertIndex, 0, itemLabel);
    } else {
      newGroup.items.push(itemLabel);
    }
  }

  if (oldGroupTitle !== newGroupTitle) {
    migrateModuleReferences(oldGroupTitle, itemLabel, newGroupTitle, itemLabel);
  }
  persistModuleLayout();
  syncModuleOrderToSites(oldGroupTitle, newGroupTitle);
  applySavedAssignments();
  renderModuleGroups(newGroupTitle, itemLabel);
  renderSiteTabs();
  renderSiteProfile(sites[0].id);
  const saved = await saveCmsState(cmsEvent("module.moved", "Преместен е модул", {
    moduleGroup: newGroupTitle,
    moduleName: itemLabel,
    description: `Модулът "${itemLabel}" е преместен от "${oldGroupTitle}" към "${newGroupTitle}".`,
  }));
  document.querySelector("#moduleAssignmentStatus").textContent = saved ? "Записано" : "Не е записано";
}

async function renameModule(groupTitle, oldItemLabel, newItemLabel) {
  const group = moduleGroups.find((entry) => entry.title === groupTitle);
  if (!group || group.items.includes(newItemLabel)) return;

  group.items = group.items.map((item) => (item === oldItemLabel ? newItemLabel : item));
  migrateModuleReferences(groupTitle, oldItemLabel, groupTitle, newItemLabel);
  persistModuleLayout();
  applySavedAssignments();
  renderModuleGroups(groupTitle, newItemLabel);
  renderSiteTabs();
  renderSiteProfile(sites[0].id);
  const saved = await saveCmsState(cmsEvent("module.renamed", "Преименуван е модул", {
    moduleGroup: groupTitle,
    moduleName: newItemLabel,
    description: `Модулът "${oldItemLabel}" е преименуван на "${newItemLabel}".`,
  }));
  document.querySelector("#moduleAssignmentStatus").textContent = saved ? "Записано" : "Не е записано";
}

function migrateModuleReferences(oldGroupTitle, oldItemLabel, newGroupTitle, newItemLabel) {
  const oldAssignmentKey = makeAssignmentKey(oldGroupTitle, oldItemLabel);
  const newAssignmentKey = makeAssignmentKey(newGroupTitle, newItemLabel);
  const assignedSiteIds = new Set(cmsState.assignments[oldAssignmentKey] || []);

  sites.forEach((site) => {
    if (siteHasAssignedModule(site, oldGroupTitle, oldItemLabel)) assignedSiteIds.add(site.id);
    if (oldGroupTitle === newGroupTitle) {
      renameSiteMenuItem(site, oldGroupTitle, oldItemLabel, newItemLabel);
    } else {
      moveSiteMenuItemBetweenGroups(site, oldGroupTitle, newGroupTitle, oldItemLabel, newItemLabel);
    }
  });

  if (cmsState.assignments[newAssignmentKey]) {
    cmsState.assignments[newAssignmentKey].forEach((siteId) => assignedSiteIds.add(siteId));
  }

  cmsState.assignments[newAssignmentKey] = [...assignedSiteIds];
  delete cmsState.assignments[oldAssignmentKey];
  migrateStateKeyMap(cmsState.details, oldGroupTitle, oldItemLabel, newGroupTitle, newItemLabel);
  migrateStateKeyMap(cmsState.completed, oldGroupTitle, oldItemLabel, newGroupTitle, newItemLabel);
}

function siteMenuItemMatchesModule(siteGroupTitle, child, moduleGroupTitle, moduleItemLabel) {
  const label = getChildLabel(child);
  const itemMatches = label === moduleItemLabel || normalizeModuleItemLabel(label, siteGroupTitle) === moduleItemLabel;
  if (!itemMatches) return false;

  return (
    siteGroupTitle === moduleGroupTitle ||
    resolveCanonicalGroup(siteGroupTitle, label) === moduleGroupTitle ||
    resolveCanonicalGroup(siteGroupTitle) === moduleGroupTitle
  );
}

function renameSiteMenuItem(site, moduleGroupTitle, oldItemLabel, newItemLabel) {
  site.menuTree.forEach((group) => {
    group.children = group.children.map((child) => {
      if (!siteMenuItemMatchesModule(group.title, child, moduleGroupTitle, oldItemLabel)) return child;
      if (typeof child === "string") return newItemLabel;
      return { ...child, label: newItemLabel };
    });
  });
}

function getModuleItemOrder(moduleGroup, siteLabel, siteGroupTitle) {
  const normalized = normalizeModuleItemLabel(siteLabel, siteGroupTitle);
  let index = moduleGroup.items.indexOf(normalized);
  if (index >= 0) return index;
  index = moduleGroup.items.indexOf(siteLabel);
  return index >= 0 ? index : 9999;
}

function reorderSiteGroupChildrenByModuleGroup(siteGroup, moduleGroupTitle) {
  const moduleGroup = moduleGroups.find((group) => group.title === moduleGroupTitle);
  if (!moduleGroup) return;

  const matchedIndices = [];
  siteGroup.children.forEach((child, index) => {
    if (resolveCanonicalGroup(siteGroup.title, getChildLabel(child)) === moduleGroupTitle) {
      matchedIndices.push(index);
    }
  });

  if (matchedIndices.length < 2) return;

  const matchedChildren = matchedIndices.map((index) => siteGroup.children[index]);
  matchedChildren.sort((a, b) => {
    return (
      getModuleItemOrder(moduleGroup, getChildLabel(a), siteGroup.title) -
      getModuleItemOrder(moduleGroup, getChildLabel(b), siteGroup.title)
    );
  });

  matchedIndices.forEach((originalIndex, sortedIndex) => {
    siteGroup.children[originalIndex] = matchedChildren[sortedIndex];
  });
}

function syncModuleOrderToSites(...moduleGroupTitles) {
  const titles = moduleGroupTitles.length ? moduleGroupTitles : moduleGroups.map((group) => group.title);

  sites.forEach((site) => {
    site.menuTree.forEach((siteGroup) => {
      titles.forEach((moduleGroupTitle) => {
        reorderSiteGroupChildrenByModuleGroup(siteGroup, moduleGroupTitle);
      });
    });
  });
}

function moveSiteMenuItemBetweenGroups(site, oldModuleGroupTitle, newModuleGroupTitle, moduleItemLabel, newItemLabel = moduleItemLabel) {
  let movedChild = null;

  site.menuTree.forEach((group) => {
    group.children = group.children.filter((child) => {
      if (!siteMenuItemMatchesModule(group.title, child, oldModuleGroupTitle, moduleItemLabel)) return true;
      movedChild = typeof child === "string" ? newItemLabel : { ...child, label: newItemLabel };
      return false;
    });
  });

  if (!movedChild) return;

  let targetGroup = findSiteGroupForAssignment(site, newModuleGroupTitle, newItemLabel);
  if (!targetGroup) {
    const moduleGroup = moduleGroups.find((group) => group.title === newModuleGroupTitle);
    targetGroup = { title: newModuleGroupTitle, type: moduleGroup?.type || "common", children: [] };
    site.menuTree.push(targetGroup);
  }

  targetGroup.children.push(movedChild);
  reorderSiteGroupChildrenByModuleGroup(targetGroup, newModuleGroupTitle);
}

function migrateStateKeyMap(map, oldGroupTitle, oldItemLabel, newGroupTitle, newItemLabel) {
  Object.keys(map || {}).forEach((key) => {
    const [siteId, groupTitle, itemLabel] = key.split("||");
    const itemMatches = itemLabel === oldItemLabel || normalizeModuleItemLabel(itemLabel, groupTitle) === oldItemLabel;
    if (!itemMatches) return;

    const groupMatches =
      groupTitle === oldGroupTitle ||
      resolveCanonicalGroup(groupTitle, itemLabel) === oldGroupTitle ||
      resolveCanonicalGroup(groupTitle) === oldGroupTitle;
    if (!groupMatches) return;

    const nextGroupTitle = oldGroupTitle === newGroupTitle ? groupTitle : newGroupTitle;
    const nextKey = makeStateKey(siteId, nextGroupTitle, newItemLabel);
    if (nextKey === key) return;
    map[nextKey] = map[key];
    delete map[key];
  });
}

function removeSiteMenuItem(site, groupTitle, itemLabel) {
  const group = findSiteGroupForAssignment(site, groupTitle, itemLabel);
  if (!group) return;
  group.children = group.children.filter((child) => {
    return !siteMenuItemMatchesModule(group.title, child, groupTitle, itemLabel);
  });
}

async function deleteModule(groupTitle, itemLabel) {
  const group = moduleGroups.find((entry) => entry.title === groupTitle);
  if (!group) return;

  group.items = group.items.filter((item) => item !== itemLabel);
  cmsState.deletedModules = cmsState.deletedModules || [];
  const deletedKey = makeModuleKey(groupTitle, itemLabel);
  if (!cmsState.deletedModules.includes(deletedKey)) {
    cmsState.deletedModules.push(deletedKey);
  }
  cmsState.customModules = (cmsState.customModules || []).filter((item) => {
    return !(item.groupTitle === groupTitle && item.itemLabel === itemLabel);
  });

  delete cmsState.assignments[makeAssignmentKey(groupTitle, itemLabel)];
  sites.forEach((site) => removeSiteMenuItem(site, groupTitle, itemLabel));
  persistModuleLayout();
  renderModuleGroups();
  renderSiteTabs();
  renderSiteProfile(sites[0].id);
  const saved = await saveCmsState(cmsEvent("module.deleted", "Изтрит е модул", {
    moduleGroup: groupTitle,
    moduleName: itemLabel,
    description: `Модулът "${itemLabel}" е изтрит от група "${groupTitle}".`,
  }));
  const status = document.querySelector("#moduleAssignmentStatus");
  if (status) status.textContent = saved ? "Записано" : "Не е записано";
}

function renderModuleAssignment(groupTitle, itemLabel) {
  const panel = document.querySelector("#moduleAssignment");
  if (!panel) return;

  const key = makeAssignmentKey(groupTitle, itemLabel);
  const savedSiteIds = cmsState.assignments[key];

  panel.innerHTML = `
    <div class="detail-kicker">Обща CMS йерархия</div>
    <h3>${groupTitle} - ${itemLabel}</h3>
    <p class="detail-summary">Избери в кои сайтове този модул/екран да се появява. След запис ще го видиш в таб "Сайтове" и там ще можеш да му пишеш отделно описание за всеки сайт.</p>

    <div class="editor-sites assignment-sites">
      ${sites
        .map((site) => {
          const hasCurrent = siteHasMenuItem(site, groupTitle, itemLabel);
          const checked = savedSiteIds ? savedSiteIds.includes(site.id) || hasCurrent : hasCurrent;
          return `
            <label class="site-check">
              <input type="checkbox" value="${site.id}" ${checked ? "checked" : ""} />
              <span>${site.name}</span>
            </label>
          `;
        })
        .join("")}
    </div>

    <div class="editor-actions">
      <button class="primary-button module-assignment-save" type="button">Запази за сайтовете</button>
      <span class="save-status" id="moduleAssignmentStatus"></span>
    </div>
  `;

  const saveAssignment = async (reason = "button") => {
    const previousSiteIds = [...(cmsState.assignments[key] || [])];
    const nextSiteIds = [...panel.querySelectorAll(".assignment-sites input:checked")].map((input) => input.value);
    cmsState.assignments[key] = nextSiteIds;
    applySavedAssignments();
    renderSiteTabs();
    renderSiteProfile(sites[0].id);
    const saved = await saveCmsState(cmsEvent("assignment.updated", "Обновено е разпределение на модул", {
      moduleGroup: groupTitle,
      moduleName: itemLabel,
      description: `Променени са сайтовете, към които е закачен модулът "${itemLabel}".`,
      changeText: buildAssignmentChangeText(previousSiteIds, nextSiteIds),
    }));
    const status = document.querySelector("#moduleAssignmentStatus");
    if (status) status.textContent = saved ? (reason === "autosave" ? "Автозаписано" : "Записано") : "Не е записано";
  };

  panel.querySelector(".module-assignment-save").addEventListener("click", () => saveAssignment("button"));
  panel.querySelectorAll(".assignment-sites input").forEach((checkbox) => {
    checkbox.addEventListener("change", () => saveAssignment("autosave"));
  });
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => setActiveView(button.dataset.view));
});

document.querySelector("#siteTabs").addEventListener("click", (event) => {
  const tab = event.target.closest(".site-tab");
  if (!tab) return;

  renderSiteProfile(tab.dataset.site);
});

document.querySelector("#exportExcelBtn").addEventListener("click", exportSitesExcel);

async function initApp() {
  initEditorName();
  initAttachmentLightbox();
  await loadCmsState();
  applySavedAssignments();
  syncModuleOrderToSites();
  renderSiteTabs();
  renderSiteProfile(sites[0].id);
  renderModuleGroups();
  renderMvpAndQuestions();
  bindMvpAndQuestionForms();
}

initApp();

function exportSitesExcel() {
  const workbookXml = buildExcelXml();
  const blob = new Blob([workbookXml], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "global-cms-sites.xls";
  link.click();
  URL.revokeObjectURL(url);
}

function buildExcelXml() {
  const worksheets = sites.map((site) => {
    const rows = [
      `<Row ss:Height="28">${excelCell(`Сайт: ${site.name}`, "Title", 8)}</Row>`,
      `<Row ss:Height="22">${["Група", "Модул", "Текущо/предложение", "Готово", "Кратко описание", "Какво включва", "Полета / данни", "Бележка", "Прикачени снимки"].map((cell) => excelCell(cell, "Header")).join("")}</Row>`,
    ];

    site.menuTree.forEach((group) => {
      rows.push(`<Row ss:Height="22">${excelCell(group.title.toUpperCase(), groupStyle(group.type), 8)}</Row>`);

      group.children.forEach((child) => {
        const label = getChildLabel(child);
        const status = getChildStatus(child) === "suggested" ? "Предложение / важно" : "Има го в момента";
        const completed = cmsState.completed[makeStateKey(site.id, group.title, label)] ? "Да" : "Не";
        const detail = getModuleDetail(site, group.title, label);

        rows.push(
          `<Row ss:AutoFitHeight="1">
            ${excelCell(group.title, "Nav")}
            ${excelCell(label, "Module")}
            ${excelCell(status, getChildStatus(child) === "suggested" ? "Suggested" : "Current")}
            ${excelCell(completed, completed === "Да" ? "Done" : "Body")}
            ${excelCell(detail.summary || "", "Body")}
            ${excelCell((detail.includes || []).join("\n"), "Body")}
            ${excelCell((detail.fields || []).join("\n"), "Body")}
            ${excelCell(detail.note || "", "Body")}
            ${excelCell(getDetailAttachments(detail).map((attachment) => attachment.name).join("\n"), "Body")}
          </Row>`
        );
      });
    });

    return `
      <Worksheet ss:Name="${xmlAttr(sheetName(site.name))}">
        <Names>
          <NamedRange ss:Name="Print_Titles" ss:RefersTo="='${xmlAttr(sheetName(site.name))}'!R2"/>
        </Names>
        <Table>
          <Column ss:Width="130"/>
          <Column ss:Width="210"/>
          <Column ss:Width="120"/>
          <Column ss:Width="70"/>
          <Column ss:Width="250"/>
          <Column ss:Width="270"/>
          <Column ss:Width="250"/>
          <Column ss:Width="300"/>
          <Column ss:Width="220"/>
          ${rows.join("")}
        </Table>
        <WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">
          <FreezePanes/>
          <FrozenNoSplit/>
          <SplitHorizontal>2</SplitHorizontal>
          <TopRowBottomPane>2</TopRowBottomPane>
          <SplitVertical>2</SplitVertical>
          <LeftColumnRightPane>2</LeftColumnRightPane>
          <ActivePane>0</ActivePane>
        </WorksheetOptions>
      </Worksheet>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:x="urn:schemas-microsoft-com:office:excel"
  xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
  xmlns:html="http://www.w3.org/TR/REC-html40">
  <Styles>
    <Style ss:ID="Default" ss:Name="Normal">
      <Alignment ss:Vertical="Top" ss:WrapText="1"/>
      <Font ss:FontName="Arial" ss:Size="10"/>
    </Style>
    <Style ss:ID="Title">
      <Alignment ss:Vertical="Center"/>
      <Font ss:FontName="Arial" ss:Size="14" ss:Bold="1" ss:Color="#FFFFFF"/>
      <Interior ss:Color="#14304A" ss:Pattern="Solid"/>
    </Style>
    <Style ss:ID="Header">
      <Alignment ss:Vertical="Center" ss:WrapText="1"/>
      <Font ss:FontName="Arial" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/>
      <Interior ss:Color="#111827" ss:Pattern="Solid"/>
      <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#FFFFFF"/></Borders>
    </Style>
    <Style ss:ID="GroupCommon">
      <Font ss:FontName="Arial" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/>
      <Interior ss:Color="#2166A5" ss:Pattern="Solid"/>
    </Style>
    <Style ss:ID="GroupShop">
      <Font ss:FontName="Arial" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/>
      <Interior ss:Color="#2F8F5B" ss:Pattern="Solid"/>
    </Style>
    <Style ss:ID="GroupCatalog">
      <Font ss:FontName="Arial" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/>
      <Interior ss:Color="#C77921" ss:Pattern="Solid"/>
    </Style>
    <Style ss:ID="GroupSpecial">
      <Font ss:FontName="Arial" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/>
      <Interior ss:Color="#B5454A" ss:Pattern="Solid"/>
    </Style>
    <Style ss:ID="Nav">
      <Alignment ss:Vertical="Top" ss:WrapText="1"/>
      <Font ss:FontName="Arial" ss:Size="10" ss:Bold="1"/>
      <Interior ss:Color="#EEF3F8" ss:Pattern="Solid"/>
    </Style>
    <Style ss:ID="Module">
      <Alignment ss:Vertical="Top" ss:WrapText="1"/>
      <Font ss:FontName="Arial" ss:Size="10" ss:Bold="1" ss:Color="#174D7D"/>
    </Style>
    <Style ss:ID="Current">
      <Alignment ss:Vertical="Top" ss:WrapText="1"/>
      <Interior ss:Color="#DCEEFF" ss:Pattern="Solid"/>
    </Style>
    <Style ss:ID="Suggested">
      <Alignment ss:Vertical="Top" ss:WrapText="1"/>
      <Interior ss:Color="#FFE8C9" ss:Pattern="Solid"/>
    </Style>
    <Style ss:ID="Done">
      <Alignment ss:Vertical="Top" ss:WrapText="1"/>
      <Font ss:FontName="Arial" ss:Size="10" ss:Bold="1" ss:Color="#155A36"/>
      <Interior ss:Color="#DFF3E8" ss:Pattern="Solid"/>
    </Style>
    <Style ss:ID="Body">
      <Alignment ss:Vertical="Top" ss:WrapText="1"/>
      <Font ss:FontName="Arial" ss:Size="10"/>
    </Style>
  </Styles>
  ${worksheets.join("")}
</Workbook>`;
}

function excelCell(value, style = "Body", mergeAcross = 0) {
  const merge = mergeAcross ? ` ss:MergeAcross="${mergeAcross}"` : "";
  return `<Cell ss:StyleID="${style}"${merge}><Data ss:Type="String">${xmlText(value)}</Data></Cell>`;
}

function groupStyle(type) {
  if (type === "shop") return "GroupShop";
  if (type === "catalog") return "GroupCatalog";
  if (type === "special") return "GroupSpecial";
  return "GroupCommon";
}

function xmlText(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function xmlAttr(value = "") {
  return xmlText(value);
}

function sheetName(value) {
  return String(value).replace(/[\\/?*[\]:]/g, " ").slice(0, 31) || "Sheet";
}
