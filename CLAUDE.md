# CLAUDE.md

This file provides guidance for AI assistants working with this codebase.

## Project Overview

This is a **Next.js 16** frontend application bootstrapped with `create-next-app`. It uses the App Router (Next.js 13+), React 19, TypeScript, and Tailwind CSS v4. The project is in its initial scaffold state — no custom pages, API routes, or database have been added yet.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1.6 (App Router) |
| UI Library | React 19.2.3 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 via PostCSS |
| Fonts | Geist Sans + Geist Mono (Google Fonts) |
| Linting | ESLint 9 with `eslint-config-next` |

## Directory Structure

```
good.li/
├── app/                  # Next.js App Router root
│   ├── layout.tsx        # Root layout (fonts, metadata, HTML shell)
│   ├── page.tsx          # Home page (currently default scaffold)
│   └── globals.css       # Global styles and Tailwind CSS import
├── public/               # Static assets served at /
│   ├── next.svg
│   ├── vercel.svg
│   └── *.svg
├── next.config.ts        # Next.js configuration (minimal)
├── tsconfig.json         # TypeScript configuration
├── postcss.config.mjs    # PostCSS + Tailwind CSS plugin
├── eslint.config.mjs     # ESLint flat config
└── package.json          # Dependencies and scripts
```

### Adding New Routes

New pages go in `app/` following the Next.js App Router file-system convention:
- `app/about/page.tsx` → `/about`
- `app/blog/[slug]/page.tsx` → `/blog/:slug`
- `app/api/hello/route.ts` → `GET/POST /api/hello`

## Development Commands

```bash
npm run dev      # Start development server (hot reload) at http://localhost:3000
npm run build    # Compile and optimize production build into .next/
npm start        # Serve the production build
npm run lint     # Run ESLint across the project
```

Always run `npm run lint` and `npm run build` before committing to catch type errors and lint violations.

## TypeScript Configuration

- **Strict mode** is enabled — no implicit `any`, no unsafe assignments.
- Path alias `@/*` resolves to the project root (e.g., `@/app/components/Button`).
- `noEmit: true` — TypeScript is type-checking only; Next.js handles bundling.
- Target is ES2017 for broad compatibility.

## Styling Conventions

- Use **Tailwind CSS utility classes** directly in JSX — no separate CSS modules unless necessary.
- Dark mode is handled via `dark:` prefix classes (triggered by `prefers-color-scheme: dark`).
- CSS custom properties are defined in `app/globals.css` for theme values (`--background`, `--foreground`, `--font-geist-sans`, `--font-geist-mono`).
- `bg-foreground` / `text-background` reference these CSS variables for dynamic theming.
- Responsive variants: `sm:` (640px+), `md:` (768px+), `lg:` (1024px+).

## Component Conventions

- All files in `app/` are **React Server Components** by default.
- Add `"use client"` at the top of a file only when client-side interactivity (hooks, event handlers, browser APIs) is needed.
- Use Next.js `<Image>` for all images — never raw `<img>` tags.
- Use Next.js `<Link>` for internal navigation — never raw `<a>` tags for internal links.
- Export page components as default exports named after the route (e.g., `export default function AboutPage()`).

## Key Conventions

- **No API routes exist yet** — add them under `app/api/<route>/route.ts`.
- **No database** — if adding one, prefer Prisma for type-safe ORM integration.
- **No state management library** — use React built-ins (`useState`, `useContext`, `useReducer`) or server-side data fetching until complexity warrants more.
- Metadata (title, description) is exported from `layout.tsx` or individual `page.tsx` files using the Next.js `Metadata` type.
- Fonts are loaded via `next/font/google` in `app/layout.tsx` and injected as CSS variables.

## Environment Variables

- Next.js exposes variables prefixed with `NEXT_PUBLIC_` to the browser.
- Server-only secrets (no prefix) are only available in Server Components and Route Handlers.
- Create a `.env.local` file for local secrets (already gitignored).

## What Does Not Exist Yet

The following are absent from the current codebase and will need to be added as the project grows:

- Custom components directory (suggest `app/components/` or `components/`)
- API routes (`app/api/`)
- Database / ORM
- Authentication
- Testing setup (Jest, Playwright, etc.)
- State management library
- CI/CD pipeline configuration
