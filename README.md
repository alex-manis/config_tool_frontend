# Frontend Application

Клиентское приложение для управления конфигурациями publishers.

## Структура

```
frontend/
├── src/                 # Исходный TypeScript код
│   ├── api/            # API клиент
│   ├── components/     # Компоненты UI
│   ├── state/          # Управление состоянием
│   ├── utils/          # Утилиты
│   └── types/          # TypeScript типы
├── public/             # Статические файлы и скомпилированный код
│   ├── assets/         # Изображения и ресурсы
│   ├── client/         # Скомпилированный JavaScript (генерируется)
│   ├── index.html      # Главная страница
│   └── styles.css      # Стили
├── package.json        # Зависимости
├── tsconfig.json       # Конфигурация TypeScript
└── README.md           # Документация
```

## Установка

```bash
npm install
```

## Разработка

```bash
# Собрать и запустить dev сервер
npm run dev

# Или раздельно:
npm run build  # Собрать TypeScript
npm run serve  # Запустить HTTP сервер
```

Приложение будет доступно на `http://localhost:3000`

## Конфигурация API

По умолчанию фронтенд обращается к API на `http://localhost:3001/api`.

Для изменения API URL можно установить глобальную переменную перед загрузкой скрипта в `index.html`:

```html
<script>
  window.API_BASE_URL = "http://your-api-url/api";
</script>
<script type="module" src="client/app.js"></script>
```

Или изменить константу в `src/utils/constants.ts`.

## Сборка

```bash
npm run build
```

Скомпилированные файлы будут в `public/client/`.

## Развертывание

После сборки можно развернуть папку `public/` на любом веб-сервере:
- Nginx
- Apache
- CDN (Cloudflare, AWS CloudFront и т.д.)
- GitHub Pages
- Netlify
- Vercel

## Технологии

- TypeScript
- Vanilla JavaScript (без фреймворков)
- HTML/CSS


