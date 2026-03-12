# Szymon Wator — Portfolio

Personal portfolio site for **Szymon Wator**, Cloud & DevOps Engineer.
Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Features

- **Dark / light theme** — persisted in `localStorage`, flash-free via inline script
- **i18n (EN / PL / DE)** — all copy lives in `src/i18n/locales/`; project titles and descriptions are locale-aware
- **Project gallery** — modal carousel for each project with full screenshot support
- **Animated custom cursor**
- **SEO** — `og:*` and `twitter:*` meta tags in `index.html`

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.9 |
| Bundler | Vite 7 (SWC) |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion v12) |
| UI primitives | Radix UI |
| Icons | Lucide React |

## Project structure

```
page/
├── public/
│   ├── drinkapp/       # project screenshots
│   ├── kaizen/
│   ├── k8srectask/
│   ├── solar/
│   ├── zuzugroomer/
│   └── me.jpeg
└── src/
    ├── components/
    │   ├── common/     # shared components (cursor, cards, modals…)
    │   ├── layout/     # Navbar, Footer
    │   ├── sections/   # Hero, About, Skills, Experience, Projects, Contact…
    │   └── ui/         # Radix-based primitives
    ├── contexts/       # ThemeContext, LanguageContext
    ├── data/           # projects.ts, skills.ts, experience.ts, personal.ts
    ├── hooks/          # useTypingEffect, useScrollSpy
    └── i18n/           # Locale type + en / pl / de translation files
```

## Getting started

```bash
# install dependencies
pnpm install

# start dev server
pnpm dev

# production build
pnpm build

# preview production build
pnpm preview
```

## Adding / editing content

| What | Where |
|---|---|
| Personal info (name, bio, links) | `src/data/personal.ts` |
| Projects | `src/data/projects.ts` — add to `projects[]` and all three locale blocks in `translations` |
| Skills | `src/data/skills.ts` |
| Work experience | `src/data/experience.ts` |
| Translations | `src/i18n/locales/{en,pl,de}.ts` |
| Project screenshots | `public/<project-slug>/` |
