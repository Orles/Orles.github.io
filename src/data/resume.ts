export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  lead: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  name: string;
  year: string;
  kind: string;
  description: string;
  tags: string[];
  url?: string;
  featured?: boolean;
}

export interface Experience {
  period: string;
  company: string;
  position: string;
  description: string;
}

export interface Contact {
  label: string;
  value: string;
  url: string;
}

export const profile: Profile = {
  name: 'Иван Орлов',
  firstName: 'Иван',
  lastName: 'Орлов',
  role: 'Веб-разработчик',
  lead: 'Делаю сайты и веб-приложения целиком: pixel perfect вёрстка, фронтенд на Vue и React, бэкенд на Laravel и NestJS.',
  description:
    'Иван Орлов, веб-разработчик. TypeScript, Vue, React, Laravel, NestJS и Eleventy.',
};

export const skills: SkillGroup[] = [
  {
    title: 'Интерфейсы',
    items: [
      'TypeScript',
      'JavaScript',
      'Vue',
      'Nuxt',
      'Pinia',
      'React',
      'Next.js',
      'HTML',
      'CSS',
      'SCSS',
      'Tailwind CSS',
      'GSAP',
      'Swiper',
      'Chart.js',
    ],
  },
  {
    title: 'Сайты и сборка',
    items: ['Eleventy', 'Nunjucks', 'Vite', 'ESLint', 'Stylelint', 'Prettier'],
  },
  {
    title: 'Бэкенд и деплой',
    items: [
      'Laravel',
      'Node.js',
      'NestJS',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'TypeORM',
      'REST API',
      'JWT',
      'Docker',
      'Docker Compose',
      'pm2',
      'OpenCart',
    ],
  },
];

export const projects: Project[] = [
  {
    name: '11ty-template',
    year: '2026',
    kind: 'Шаблон',
    description:
      'Шаблон статических сайтов на Eleventy и Vite. На нём собран этот сайт.',
    tags: ['Eleventy', 'Vite', 'TypeScript', 'SCSS'],
    url: 'https://github.com/Orles/11ty-template',
  },
  {
    name: 'Сайт центра реабилитации',
    year: '2026',
    kind: 'Вёрстка',
    description:
      'Вёрстка сайта: шапка, главный баннер, блоки главной и подвал.',
    tags: ['Eleventy', 'Vite', 'TypeScript', 'SCSS', 'Swiper'],
  },
  {
    name: 'Площадка объявлений',
    year: '2026',
    kind: 'Сайт и вёрстка',
    description:
      'Вёрстка и фронтенд площадки объявлений: авторизация, личный кабинет, риелторы, тарифы и подача объявлений.',
    tags: ['Eleventy', 'Laravel', 'Vue', 'Tailwind CSS', 'Chart.js'],
  },
  {
    name: 'Корпоративный сайт с каталогом',
    featured: true,
    year: '2025–2026',
    kind: 'Сайт и вёрстка',
    description:
      'Pixel perfect вёрстка и перенос на Laravel: каталог, страницы продукта, статьи, новости и контакты.',
    tags: ['Eleventy', 'Laravel', 'Vue', 'Tailwind CSS', 'TypeScript'],
  },
  {
    name: 'Сайт бизнес-услуг',
    year: '2025–2026',
    kind: 'Сайт',
    description:
      'Фронтенд сайта: главная, тарифы, выбор региона, аккаунт, новости, контакты и страницы ошибок.',
    tags: ['Laravel', 'Vue', 'Tailwind CSS', 'GSAP', 'TypeScript'],
  },
  {
    name: 'Лендинг девелопера',
    year: '2025–2026',
    kind: 'Вёрстка',
    description:
      'Pixel perfect вёрстка для компьютера и телефона: инвестиции, локация, блоки о проекте.',
    tags: ['Eleventy', 'Vite', 'TypeScript', 'SCSS', 'Swiper'],
  },
  {
    name: 'Сервис с дашбордами',
    featured: true,
    year: '2025–2026',
    kind: 'Веб-приложение',
    description:
      'Фронтенд сервиса: дашборды, сотрудники, предложения, публикации и обработка неуспешных оплат.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Chart.js', 'TypeScript'],
  },
  {
    name: 'Сайт с подкастом',
    year: '2025–2026',
    kind: 'Сайт',
    description: 'Страница подкаста и правки изображений на сайте.',
    tags: ['Laravel', 'Eleventy', 'GSAP', 'TypeScript'],
  },
  {
    name: 'Сайт клуба',
    year: '2025',
    kind: 'Вёрстка',
    description:
      'Pixel perfect вёрстка MVP: главный баннер, направления, награды, формы и подвал.',
    tags: ['Eleventy', 'GSAP', 'TypeScript', 'SCSS'],
  },
  {
    name: 'Сайт благотворительного проекта',
    featured: true,
    year: '2025',
    kind: 'Сайт и вёрстка',
    description:
      'Вёрстка и перенос на Laravel: страницы о проекте, анимации, меню для планшетов и блоки пожертвований.',
    tags: ['Eleventy', 'Laravel', 'Tailwind CSS', 'GSAP', 'TypeScript'],
  },
  {
    name: 'Сайт производителя материалов',
    year: '2025',
    kind: 'Сайт',
    description:
      'Доработка сайта производителя: шапка, подвал, новости, контакты и партнёрство.',
    tags: ['TypeScript', 'SCSS', 'Swiper'],
  },
  {
    name: 'Сайт сервиса обмена',
    year: '2025',
    kind: 'Сайт',
    description:
      'Доработка сайта: баннеры, форма заявки, шапка страницы обмена и мобильные стили.',
    tags: ['Laravel', 'Eleventy', 'Vite', 'TypeScript'],
  },
  {
    name: 'Каталог компаний',
    featured: true,
    year: '2025',
    kind: 'Сайт',
    description:
      'Фронтенд на Laravel и Vue: авторизация, карточки компаний, новости, услуги и мобильная версия.',
    tags: ['Laravel', 'Vue', 'TypeScript', 'SCSS'],
  },
  {
    name: 'Два лендинга',
    year: '2025',
    kind: 'Лендинги',
    description:
      'Два лендинга: партнёрская сеть, реферальная программа, истории и отзывы.',
    tags: ['Eleventy', 'Vite', 'TypeScript', 'SCSS'],
  },
  {
    name: 'Интерфейс киоска',
    year: '2025',
    kind: 'Веб-приложение',
    description: 'Интерфейс киоска самообслуживания: выбор услуг и каталог.',
    tags: ['Vue', 'Pinia', 'TypeScript', 'Vite'],
  },
  {
    name: 'Правки интернет-магазина',
    year: '2025',
    kind: 'Правки',
    description: 'Небольшие правки меню магазина на OpenCart.',
    tags: ['OpenCart', 'TypeScript', 'SCSS'],
  },
  {
    name: 'ERP-система',
    year: '2025',
    kind: 'Правки',
    description: 'Попап в интерфейсе ERP-системы.',
    tags: ['Vue', 'TypeScript'],
  },
  {
    name: 'Правки каталога',
    year: '2025',
    kind: 'Правки',
    description: 'Правки каталога.',
    tags: ['Vue', 'SCSS'],
  },
  {
    name: 'Новая версия сайта компании',
    year: '2024–2025',
    kind: 'Вёрстка',
    description:
      'Новая версия вёрстки: блог, примеры работ, отзывы, сертификаты, установка, рассрочка и заказ.',
    tags: ['Eleventy', 'Vite', 'TypeScript', 'SCSS'],
  },
  {
    name: 'Сайт строительной компании',
    year: '2024–2025',
    kind: 'Вёрстка',
    description: 'Вёрстка сайта: карточка товара, корзина, документы и формы.',
    tags: ['Eleventy', 'GSAP', 'TypeScript', 'SCSS'],
  },
  {
    name: 'Интернет-магазин растений',
    featured: true,
    year: '2024–2025',
    kind: 'Интернет-магазин',
    description:
      'Переработка фронтенда магазина: каталог, фильтры, корзина, заказ, блог и главная страница.',
    tags: ['Laravel', 'Vue', 'TypeScript', 'SCSS'],
  },
  {
    name: 'Отраслевой портал',
    featured: true,
    year: '2024–2025',
    kind: 'Вёрстка',
    description:
      'Вёрстка сайта: страницы прогнозов, новости, поиск, авторизация, темы и меню.',
    tags: ['Eleventy', 'Nunjucks', 'Vite', 'TypeScript', 'SCSS'],
  },
  {
    name: 'Сайт о строительстве домов',
    year: '2024',
    kind: 'Вёрстка',
    description:
      'Pixel perfect вёрстка: видеоотзывы, гарантии, страница о компании и формы.',
    tags: ['Eleventy', 'Vite', 'TypeScript', 'SCSS'],
  },
  {
    name: 'Сайт с решениями для отраслей',
    year: '2024',
    kind: 'Вёрстка',
    description:
      'Вёрстка сайта: главный экран, преимущества, страницы решений и отраслей.',
    tags: ['Eleventy', 'TypeScript', 'SCSS', 'Swiper'],
  },
  {
    name: 'Интернет-магазин на Nuxt',
    year: '2024',
    kind: 'Интернет-магазин',
    description:
      'Попапы доставки и ухода, прайс-лист и фильтры в магазине на Nuxt.',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'SCSS'],
  },
  {
    name: 'Price Options',
    year: '2024',
    kind: 'Виджет',
    description:
      'Виджет опций цены: выбор цвета и сохранение значений в адресе страницы.',
    tags: ['JavaScript', 'Vue'],
  },
  {
    name: 'Бэкенд сервиса вишлистов',
    year: '2024',
    kind: 'Проектная работа',
    description:
      'REST API на NestJS: пользователи, вишлисты, подарки и сборы, авторизация по JWT, документация в Swagger.',
    tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'JWT'],
  },
  {
    name: 'Бэкенд «Места»',
    year: '2024',
    kind: 'Проектная работа',
    description:
      'API на Express и MongoDB: пользователи и карточки, авторизация, валидация запросов и логирование.',
    tags: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
  },
  {
    name: 'КупиПодариДай в Docker',
    year: '2024',
    kind: 'Проектная работа',
    description:
      'Докеризация фронтенда и бэкенда сервиса с запуском через Docker Compose.',
    tags: ['Docker', 'Docker Compose'],
    url: 'https://github.com/Orles/web-plus-docker-and-compose',
  },
  {
    name: 'Автоматизация деплоя',
    year: '2024',
    kind: 'Проектная работа',
    description:
      'Автоматический деплой фронтенда и бэкенда на сервер через pm2.',
    tags: ['pm2', 'JavaScript'],
    url: 'https://github.com/Orles/web-plus-pm2-deploy',
  },
  {
    name: 'Графики и таблицы',
    year: '2023–2024',
    kind: 'Виджет',
    description:
      'Веб-компонент с графиками, таблицами, агрегацией данных и календарём.',
    tags: ['Chart.js', 'Grid.js', 'Vite', 'SCSS'],
  },
  {
    name: 'Виджеты карт',
    year: '2023',
    kind: 'Виджет',
    description:
      'Веб-компоненты с геокоординатами на Яндекс Картах и Google Картах.',
    tags: ['JavaScript', 'Vite', 'SCSS'],
  },
  {
    name: 'Алгосош',
    year: '2023',
    kind: 'Проектная работа',
    description:
      'Визуализатор алгоритмов с анимацией и поэтапным показом каждого шага.',
    tags: ['TypeScript', 'CSS'],
    url: 'https://github.com/Orles/algosohs',
  },
  {
    name: 'Stellar Burger',
    year: '2023',
    kind: 'Проектная работа',
    description: 'Приложение на React с компонентной структурой.',
    tags: ['React', 'JavaScript'],
    url: 'https://github.com/Orles/react-stellar-burger',
  },
  {
    name: 'Место',
    year: '2023',
    kind: 'Проектная работа',
    description:
      'Адаптивная страница с редактированием профиля и модальными окнами на чистом JavaScript.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://github.com/Orles/mesto',
  },
];

// Секция «Опыт» появится на сайте, как только здесь будет хотя бы одна запись
export const experience: Experience[] = [];

// Новые контакты, например почту или Telegram, достаточно добавить в этот список
export const contacts: Contact[] = [
  {
    label: 'Telegram',
    value: '@gargamelsasd',
    url: 'https://t.me/gargamelsasd',
  },
  {
    label: 'GitHub',
    value: 'github.com/Orles',
    url: 'https://github.com/Orles',
  },
];
