# Architecture Document — Darling Drink Company Website

## Overview

A Next.js application hosted on Vercel. The site uses static generation for all pages (prerendered at build time) with full Next.js Image Optimization enabled via Vercel's edge network. No database or server-side rendering. The contact form is the only external integration (Formspree).

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                  Vercel Edge Network                     │
│           darling-drink-company.vercel.app                │
│         (Image Optimization, CDN, Preview Deploys)       │
└────────────────────────┬────────────────────────────────┘
                         │ serves optimized assets
                         │
┌────────────────────────┴────────────────────────────────┐
│                  Vercel Build Pipeline                    │
│  Trigger: push to master (Git integration)               │
│  Steps: install → build → deploy to edge network         │
│  Preview: auto-deploys on pull requests                  │
└────────────────────────┬────────────────────────────────┘
                         │ builds from
                         │
┌────────────────────────┴────────────────────────────────┐
│                  Next.js Application                     │
│                                                          │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │  layout.tsx  │  │   page.tsx   │  │  globals.css   │  │
│  │  (fonts,SEO) │  │ (assembler)  │  │ (theme,glass)  │  │
│  └─────────────┘  └──────┬───────┘  └────────────────┘  │
│                          │ imports                        │
│  ┌───────────────────────┴──────────────────────────┐    │
│  │                  Components                       │    │
│  │                                                   │    │
│  │  Navbar ─── Hero ─── About ─── Menu               │    │
│  │  Reviews ── Press ── BookUs ── Footer              │    │
│  │  AnimatedSection (shared wrapper)                  │    │
│  └───────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘

External Services:
┌──────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  Google Fonts │  │  Formspree       │  │  Vercel          │
│  (Pacifico,   │  │  mykndrbk (LIVE) │  │  (hosting, CDN,  │
│   Quicksand)  │  │  → Taylor email  │  │   image optim.)  │
└──────────────┘  └──────────────────┘  └──────────────────┘
```

## Key Architectural Decisions

### 1. Vercel Hosting with Next.js
- Full Next.js support — no static export limitations
- Next.js Image Optimization enabled (served via Vercel's edge network)
- Automatic preview deployments for pull requests
- **Why**: Vercel is the native platform for Next.js; enables image optimization, edge caching, and zero-config deployments

### 2. Single Page with Section Navigation
- One `page.tsx` renders all sections in order
- Navbar uses `scrollIntoView({ behavior: "smooth" })` for navigation
- **Why**: All information fits naturally in one scroll flow; no need for route-based navigation for a small service business

### 3. Client Components
- All interactive components use `"use client"` directive
- Server components only at layout level (metadata, fonts)
- **Why**: Framer Motion and react-datepicker require client-side JavaScript; the page is fully static so SSR benefits are minimal

### 4. Tailwind CSS v4 with @theme
- Custom colors defined in `@theme inline` block in `globals.css`
- Custom utility classes (`.glass`, `.gradient-text`) in plain CSS
- **Critical**: `postcss.config.mjs` MUST be present — without it, Tailwind v4 utility classes are not generated and the site renders unstyled
- **Why**: Tailwind v4 uses CSS-native theming; custom glassmorphism classes are easier to maintain as plain CSS than as Tailwind plugins

### 5. Form Handling via Formspree
- Form POSTs to `https://formspree.io/f/mykndrbk` (LIVE)
- No backend code needed
- Graceful error fallback shows phone/email
- **Why**: Formspree free tier (50/month) is sufficient for a booking inquiry form

## Data Flow

### Contact Form Submission
```
User fills form → clicks Submit
  → JavaScript FormData constructed (includes formatted date)
  → POST to https://formspree.io/f/mykndrbk
  → Formspree sends email to taylor@hellodarlingdesigns.net
  → UI shows success message with confetti emoji
  → On error: shows fallback contact info (phone + email)
```

### Build & Deploy
```
Developer pushes to master
  → Vercel detects push via Git integration
  → npm ci (install deps)
  → npm run build (Next.js build)
  → Vercel deploys to edge network
  → Live at darling-drink-company.vercel.app
```

## Project Configuration

### Auto-Approve Permissions (`.claude/settings.json`)
Claude Code is configured to auto-approve common operations (Read, Edit, Write, npm, git, gh, shell commands) to speed up development workflow.

### Files Critical to Build
| File | Purpose | What breaks without it |
|------|---------|----------------------|
| `postcss.config.mjs` | Tailwind CSS v4 PostCSS plugin | All utility classes missing, site unstyled |
| `tsconfig.json` | `@/*` path alias | Component imports fail, build errors |
| `next.config.ts` | Next.js configuration | Build may fail or use wrong defaults |

## Performance Considerations

- **Images**: Optimized by Vercel's built-in Next.js Image Optimization — automatic resizing, format conversion (WebP/AVIF), and lazy loading
- **Fonts**: Loaded via `next/font/google` with `display: "swap"` — no FOIT, no external requests after initial load
- **JS Bundle**: Framer Motion is the largest dependency; tree-shaking keeps it reasonable
- **CSS**: Tailwind purges unused styles at build time

## Future Considerations

- **Custom domain**: Add via Vercel dashboard (Settings → Domains)
- **CMS integration**: If Taylor wants to manage content, could add a headless CMS (Contentful, Sanity) and fetch at build time
- **Analytics**: Could add Vercel Analytics or Google Analytics via the layout
- **Replace filler reviews**: 5 of 6 testimonials are generated filler (see docs/CONTENT.md)
- **API routes**: Vercel supports Next.js API routes if backend functionality is needed in the future
