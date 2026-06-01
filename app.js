const sites = [
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
    items: ["Поръчки", "Бекофис", "Клиенти / потребители", "Потребители", "Колички / Изоставени колички", "Товарителници / Еконт товарителници", "Рекламации", "Гаранционни карти", "Изпратени имейли", "Абониране цена", "Плащания / доставки", "Неуспешни плащания", "Статуси на поръчки", "Поръчки - само CRM процес"],
  },
  {
    title: "Запитвания",
    type: "catalog",
    items: ["Общи запитвания", "Запитвания за наем/услуги", "Запитвания към продукт", "Запитвания към услуга", "Предложени цени", "Контактни форми", "Източник на запитване", "История"],
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
    items: ["Страници", "Статични стр", "Новини", "Блог / Новини", "Категории блог", "Homepage", "Каталог страница", "Хедър / лога", "Футър", "Менюта", "Медия / файлове", "Отзиви", "Галерия"],
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
    items: ["Езици", "Текстове", "Преводи", "Контакти", "Имейл шаблони", "Права и роли", "Потребители", "История на промени", "Логове"],
  },
];

const canonicalGroupAliases = {
  "Rental / Наем": "Rental",
  "Настройки сайт": "Съдържание",
  "Настройки админ": "Настройки",
  "Настройки на сайта": "Съдържание",
  "Системни": "Настройки",
  "Продажби": "Запитвания",
};

const moduleItemGroupOverrides = {
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
};

const moduleItemLabelAliases = {
  "Начална страница": "Homepage",
  "Хедър": "Хедър / лога",
  "Хедър (лога)": "Хедър / лога",
  "SEO настройки": "SEO",
  "Абониране Цена": "Абониране цена",
  "Товарителници": "Товарителници / Еконт товарителници",
  "Еконт товарителници": "Товарителници / Еконт товарителници",
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
  customQuestions: [],
  checkedQuestions: {},
  siteMeta: {},
  deletedModules: [],
};

let collapsedTreeGroups = {};
const defaultModuleLayout = cloneModuleLayout(moduleGroups);

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

  profile.innerHTML = `
    <div class="profile-workspace">
      <div class="panel">
        <h3>${site.name}</h3>
        <p class="panel-note">Текущо CRM меню + предложения</p>
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
      await saveCmsState();
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
      await saveCmsState();
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
  profile.querySelector(".site-meta-save")?.addEventListener("click", async () => {
    cmsState.siteMeta = cmsState.siteMeta || {};
    cmsState.siteMeta[site.id] = {
      fields: linesFromValue(profile.querySelector("#siteFieldsEditor").value),
      processes: linesFromValue(profile.querySelector("#siteProcessesEditor").value),
      notes: profile.querySelector("#siteNotesEditor").value.trim(),
    };

    const saved = await saveCmsState();
    const status = profile.querySelector("#siteMetaStatus");
    if (status) status.textContent = saved ? "Записано" : "Не е записано";
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

    <div class="editor-actions">
      <button class="primary-button site-detail-save" type="button">Запази описанието</button>
      <span class="save-status" id="siteDetailStatus"></span>
    </div>
  `;
}

function bindSiteDetailSave(profile, site, groupTitle, itemLabel) {
  const button = profile.querySelector(".site-detail-save");
  if (!button) return;

  button.addEventListener("click", async () => {
    cmsState.details[makeStateKey(site.id, groupTitle, itemLabel)] = {
      summary: profile.querySelector("#siteDetailSummary").value.trim(),
      includes: linesFromValue(profile.querySelector("#siteDetailIncludes").value),
      fields: linesFromValue(profile.querySelector("#siteDetailFields").value),
      note: profile.querySelector("#siteDetailNote").value.trim(),
    };

    const saved = await saveCmsState();
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

  return buildGenericDetail(groupTitle, itemLabel);
}

function buildGenericDetail(groupTitle, itemLabel) {
  const label = itemLabel.toLowerCase();

  if (label.includes("запит")) {
    return {
      summary: "Екран за приемане, преглед и обработка на клиентски запитвания.",
      includes: ["Списък със запитвания", "Филтри по дата и статус", "Преглед на контактни данни", "Маркиране като обработено"],
      fields: ["Дата", "Име", "Телефон", "Имейл", "Тема/продукт", "Съобщение", "Статус"],
      note: "Да се уточни дали запитването е общо, към продукт, към услуга или към landing страница.",
    };
  }

  if (label.includes("продукт") || label.includes("машин")) {
    return {
      summary: "Екран за управление на продуктови/машинни записи в каталога.",
      includes: ["Списък записи", "Добавяне и редакция", "Категория/марка", "Снимки и характеристики", "Публикуване"],
      fields: ["Име", "Категория", "Марка", "Описание", "Снимки", "Характеристики", "Статус"],
      note: "По сайт да се уточнят специфичните полета: цена, наличност, rental тарифи, икони или свойства.",
    };
  }

  if (label.includes("катег")) {
    return {
      summary: "Екран за управление на категорийна структура.",
      includes: ["Списък категории", "Родител/дете йерархия", "Подредба", "SEO данни", "Публикуване"],
      fields: ["Име", "Родителска категория", "URL", "Описание", "Снимка", "SEO заглавие", "Статус"],
      note: "Важно е категориите да поддържат различна дълбочина според сайта.",
    };
  }

  if (label.includes("банер") || label.includes("слайдер")) {
    return {
      summary: "Екран за управление на визуални рекламни позиции.",
      includes: ["Списък банери/слайдове", "Позиция", "Снимка", "Линк", "Период на активност"],
      fields: ["Заглавие", "Изображение", "URL", "Позиция", "От дата", "До дата", "Статус"],
      note: "Да се уточнят позициите по сайт: homepage, каталог, продуктова страница и др.",
    };
  }

  if (label.includes("страниц") || label.includes("homepage") || label.includes("футър") || label.includes("хедър")) {
    return {
      summary: "Екран за управление на съдържание и структурни части на сайта.",
      includes: ["Редакция на съдържание", "Подредба/позиция", "Публикуване", "SEO полета"],
      fields: ["Заглавие", "Съдържание", "URL", "Изображения", "SEO заглавие", "SEO описание", "Статус"],
      note: "Тези екрани са важни за редакторите и маркетинг екипа, не само за програмистите.",
    };
  }

  return {
    summary: `CMS екран от група "${groupTitle}", който трябва да се опише по-конкретно при финализиране на заданието.`,
    includes: ["Списък записи", "Добавяне", "Редакция", "Изтриване/скриване", "Филтри и търсене"],
    fields: ["Име/заглавие", "Описание", "Подредба", "Статус", "Дата на промяна"],
    note: "Това е базово описание. При важните модули трябва да добавим точни полета и бизнес правила.",
  };
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
      customQuestions: loaded.customQuestions || [],
      checkedQuestions: loaded.checkedQuestions || {},
      siteMeta: loaded.siteMeta || {},
      deletedModules: loaded.deletedModules || [],
    };
    collapsedTreeGroups = { ...cmsState.collapsedTreeGroups };
    applyModuleStructureFromState();
  } catch (error) {
    console.warn("Не мога да заредя cms-state.json", error);
  }
}

async function saveCmsState() {
  if (!location.protocol.startsWith("http")) {
    setEditorHint("За реален Save отвори страницата през локалния server, не директно като файл.", true);
    return false;
  }

  const response = await fetch("api/state", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cmsState),
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

function applyModuleStructureFromState() {
  applyDeletedModulesToSites();

  if (Array.isArray(cmsState.moduleLayout) && cmsState.moduleLayout.length) {
    moduleGroups.splice(0, moduleGroups.length, ...cloneModuleLayout(cmsState.moduleLayout));
  } else {
    applyCustomModules();
  }

  const before = JSON.stringify(moduleGroups);
  dedupeModuleGroups();
  syncSiteModulesToModuleGroups();
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

  cmsState.assignments[assignmentKey] = checkedSiteIds;
  cmsState.details[makeStateKey(siteId, groupTitle, itemLabel)] = {
    summary: document.querySelector("#editorSummary").value.trim(),
    includes: linesFromTextarea("#editorIncludes"),
    fields: linesFromTextarea("#editorFields"),
    note: document.querySelector("#editorNote").value.trim(),
  };

  applySavedAssignments();
  renderSiteTabs();
  renderSiteProfile(siteId);
  await saveCmsState();
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
    customQuestions: imported.customQuestions || [],
    checkedQuestions: imported.checkedQuestions || {},
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
  await saveCmsState();
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
    const saved = await saveCmsState();
    renderModuleGroups(groupTitle, itemLabel);
    document.querySelector("#moduleAssignmentStatus").textContent = saved ? "Записано" : "Не е записано";
  });
}

function renderMvpAndQuestions() {
  const phase1 = document.querySelector("#mvpPhase1");
  const phase2 = document.querySelector("#mvpPhase2");
  const questionsList = document.querySelector("#questionsList");
  if (!phase1 || !phase2 || !questionsList) return;

  const customMvp = cmsState.customMvpItems || [];
  const phase1Items = [...defaultMvpItems.phase1, ...customMvp.filter((item) => item.phase === "phase1").map((item) => item.text)];
  const phase2Items = [...defaultMvpItems.phase2, ...customMvp.filter((item) => item.phase === "phase2").map((item) => item.text)];
  phase1.innerHTML = phase1Items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  phase2.innerHTML = phase2Items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  const questions = [...defaultQuestions, ...(cmsState.customQuestions || [])];
  questionsList.innerHTML = questions
    .map((question) => {
      const key = makeQuestionKey(question);
      const checked = cmsState.checkedQuestions?.[key] ? "checked" : "";
      return `
        <label class="question-item">
          <input type="checkbox" data-question="${escapeAttr(key)}" ${checked} />
          <span>${escapeHtml(question)}</span>
        </label>
      `;
    })
    .join("");

  questionsList.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", async () => {
      cmsState.checkedQuestions = cmsState.checkedQuestions || {};
      cmsState.checkedQuestions[checkbox.dataset.question] = checkbox.checked;
      await saveCmsState();
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

    cmsState.customMvpItems = cmsState.customMvpItems || [];
    cmsState.customMvpItems.push({ phase, text });
    input.value = "";
    renderMvpAndQuestions();
    const saved = await saveCmsState();
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
    const saved = await saveCmsState();
    status.classList.remove("error");
    status.textContent = saved ? "Записано" : "Не е записано";
  });
}

function makeQuestionKey(question) {
  return normalizeKey(question);
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
  applySavedAssignments();
  renderModuleGroups(newGroupTitle, itemLabel);
  renderSiteTabs();
  renderSiteProfile(sites[0].id);
  const saved = await saveCmsState();
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
  const saved = await saveCmsState();
  document.querySelector("#moduleAssignmentStatus").textContent = saved ? "Записано" : "Не е записано";
}

function migrateModuleReferences(oldGroupTitle, oldItemLabel, newGroupTitle, newItemLabel) {
  const oldAssignmentKey = makeAssignmentKey(oldGroupTitle, oldItemLabel);
  const newAssignmentKey = makeAssignmentKey(newGroupTitle, newItemLabel);
  const assignedSiteIds = new Set(cmsState.assignments[oldAssignmentKey] || []);

  sites.forEach((site) => {
    if (siteHasMenuItem(site, oldGroupTitle, oldItemLabel)) assignedSiteIds.add(site.id);
    removeSiteMenuItem(site, oldGroupTitle, oldItemLabel);
  });

  if (cmsState.assignments[newAssignmentKey]) {
    cmsState.assignments[newAssignmentKey].forEach((siteId) => assignedSiteIds.add(siteId));
  }

  cmsState.assignments[newAssignmentKey] = [...assignedSiteIds];
  delete cmsState.assignments[oldAssignmentKey];
  migrateStateKeyMap(cmsState.details, oldGroupTitle, oldItemLabel, newGroupTitle, newItemLabel);
  migrateStateKeyMap(cmsState.completed, oldGroupTitle, oldItemLabel, newGroupTitle, newItemLabel);
}

function migrateStateKeyMap(map, oldGroupTitle, oldItemLabel, newGroupTitle, newItemLabel) {
  Object.keys(map || {}).forEach((key) => {
    const [siteId, groupTitle, itemLabel] = key.split("||");
    if (groupTitle !== oldGroupTitle || itemLabel !== oldItemLabel) return;
    const nextKey = makeStateKey(siteId, newGroupTitle, newItemLabel);
    map[nextKey] = map[key];
    delete map[key];
  });
}

function removeSiteMenuItem(site, groupTitle, itemLabel) {
  const group = site.menuTree.find((entry) => entry.title === groupTitle);
  if (!group) return;
  group.children = group.children.filter((child) => getChildLabel(child) !== itemLabel);
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
  const saved = await saveCmsState();
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

  panel.querySelector(".module-assignment-save").addEventListener("click", async () => {
    cmsState.assignments[key] = [...panel.querySelectorAll(".assignment-sites input:checked")].map((input) => input.value);
    applySavedAssignments();
    renderSiteTabs();
    renderSiteProfile(sites[0].id);
    const saved = await saveCmsState();
    panel.querySelector("#moduleAssignmentStatus").textContent = saved ? "Записано" : "Не е записано";
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
  await loadCmsState();
  applySavedAssignments();
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
      `<Row ss:Height="28">${excelCell(`Сайт: ${site.name}`, "Title", 7)}</Row>`,
      `<Row ss:Height="22">${["Група", "Модул", "Текущо/предложение", "Готово", "Кратко описание", "Какво включва", "Полета / данни", "Бележка"].map((cell) => excelCell(cell, "Header")).join("")}</Row>`,
    ];

    site.menuTree.forEach((group) => {
      rows.push(`<Row ss:Height="22">${excelCell(group.title.toUpperCase(), groupStyle(group.type), 7)}</Row>`);

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
