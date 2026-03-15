# Darling Drink Company - Project Guide

## About the Business
- **Business Name**: Darling Drink Company
- **Owner**: Taylor Hannon (runs it with her mom, Dee Dee) — family-run company
- **Location**: Madison, MS 39110 (Falls Crossing / Carpenter Cove area)
- **Contact**: Taylor Hannon, 601-405-4281, taylor@hellodarlingdesigns.net
- **Social Media**:
  - Facebook: [Darling Drink Company Group](https://www.facebook.com/groups/1729197157753383)
  - Instagram: [@DarlingDrinkCo](https://www.instagram.com/DarlingDrinkCo)
- **Press**: Featured on WJTV Channel 12 (Jackson, MS)

## What They Offer
- **Specialty Lemonades** (e.g., "Blush and Bashful", "The Alanis", "Southern Charm", "Pink Ladies", "Fruit Loop")
- **Dirty Sodas** (Sprite, Dr Pepper, A&W based drinks with cream/flavors)
- **Dirty Energy Drinks** (custom energy drinks with flavor combos and cream)
- **Hot Chocolate** (seasonal/winter)
- **Snacks**: Popcorn
- Served from a pink mobile drink trailer with branded cups

## Event Types
- Vendor events
- School functions
- Sports events
- Festivals
- Grand openings
- Birthday parties / Weddings
- Neighborhood gatherings
- Corporate events

## Branding
- **Trailer**: Pink mobile drink trailer
- **Logo**: Lemon/citrus glass with straw, floral accents, "DARLING" in bold serif, "Drink Company" below (file: `/companyinfo/logo.png`)
- **Primary Colors**: Rose pink (#E8A0BF), blush (#fda4af), white (#fff1f2)
- **Accent Colors**: Mint/teal (#a7f3d0, #6ee7b7)
- **Aesthetic**: Feminine, sweet, fun, approachable — cohesive pink branding throughout
- **Branded cups** with Darling Drink Company stickers
- **Feather flag**: "LEMONADE" / "SODA" banner at events

## Reference Images
Company photos and marketing materials are in `/companyinfo/`. Renamed copies are in `/public/images/` for use on the site:

| Source File | Public Path | Description |
|---|---|---|
| `logo.png` | `images/logo.png` | Company logo |
| `585616436_*.jpg` | `images/deedee-serving.jpg` | Dee Dee serving at the trailer window |
| `600547058_*.jpg` | `images/trailer-holiday.jpg` | Trailer with holiday balloon decorations |
| `622764354_*.jpg` | `images/trailer-side.jpg` | Full side view of trailer |
| `638005029_*.jpg` | `images/trailer-outdoor.jpg` | Trailer at outdoor event with LEMONADE flag |
| `644559671_*.jpg` | `images/flyer-info.jpg` | Business info flyer (contact, services) |
| `645424368_*.jpg` | `images/flyer-booking.jpg` | Spring booking promo (illustrated) |
| `647261312_*.jpg` | `images/drink-pink.jpg` | Pink drink with branded cup + popcorn |
| `648149974_*.jpg` | `images/wjtv-promo.jpg` | "As Seen On" WJTV promo graphic |
| `649350397_*.jpg` | `images/wjtv-visit.jpg` | Taylor & Dee Dee at WJTV station |
| `649594705_*.jpg` | `images/wjtv-filming.jpg` | WJTV filming at the trailer |
| `651326127_*.jpg` | `images/taylor-deedee.jpg` | Taylor & Dee Dee portrait at trailer |
| `652676166_*.jpg` | `images/flyer-march.jpg` | March event dates flyer |

## Tech Stack
- **Framework**: Next.js 16 (React 19) with App Router
- **Styling**: Tailwind CSS v4 + custom CSS (glassmorphism)
- **Animations**: Framer Motion (scroll-triggered + hover effects)
- **Date Picker**: react-datepicker (styled to match theme)
- **Fonts**: Google Fonts via next/font — Pacifico (headings) + Quicksand (body)
- **Form Handling**: Formspree (free tier, 50 submissions/month)
- **Static Export**: `next build` outputs to `/out/` for GitHub Pages
- **TypeScript**: Strict mode enabled

## Project Structure
```
DarlingDrinkCompany/
├── .github/workflows/deploy.yml   # GitHub Actions: build + deploy to Pages
├── companyinfo/                    # Original source photos and text
├── public/images/                  # Renamed images used by the site
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind theme, glassmorphism classes, date picker styles
│   │   ├── layout.tsx              # Root layout (fonts, metadata, SEO)
│   │   └── page.tsx                # Main page (assembles all sections)
│   └── components/
│       ├── AnimatedSection.tsx      # Reusable scroll-triggered fade-in wrapper
│       ├── Navbar.tsx               # Sticky nav with smooth-scroll + mobile hamburger
│       ├── Hero.tsx                 # Hero section with logo, tagline, CTAs
│       ├── About.tsx                # "Our Story" section with photos
│       ├── Menu.tsx                 # Drink menu cards (4 categories)
│       ├── Reviews.tsx              # Customer testimonials (1 real + 5 filler)
│       ├── Press.tsx                # "As Seen On TV" WJTV feature section
│       ├── BookUs.tsx               # Booking form with date picker + Formspree
│       └── Footer.tsx               # Contact info, event list, social links
├── next.config.ts                   # Static export + GitHub Pages basePath
├── postcss.config.mjs               # Tailwind CSS v4 PostCSS plugin
├── tsconfig.json                    # TypeScript config with @/* path alias
└── package.json
```

## Deployment
- **Hosting**: GitHub Pages at https://dustinhannon.github.io/DarlingDrinkCompany/
- **CI/CD**: GitHub Actions workflow (`.github/workflows/deploy.yml`) — auto-deploys on push to `master`
- **Process**: Push to master → Actions builds with `npm run build` → uploads `/out/` → deploys to Pages
- **basePath**: Set to `/DarlingDrinkCompany` in production for GitHub Pages subpath routing

## Setup for Contact Form (Formspree)
The booking form currently uses a **placeholder** Formspree endpoint. To activate:
1. Sign up at https://formspree.io (free tier = 50 submissions/month)
2. Create a new form, set recipient to `taylor@hellodarlingdesigns.net`
3. Copy the form endpoint ID (the part after `/f/`)
4. Update `src/components/BookUs.tsx` line 43: replace `xpwdqjkl` with the real endpoint ID
5. Push to master — the workflow will auto-deploy

## Design Decisions
- **Single-page scrolling** — best for a service-based mobile business; all info in one flow
- **Glassmorphism** — frosted glass panels (`.glass`, `.glass-strong`, `.glass-dark`) over a pink gradient background
- **No dark mode** — brand is inherently light/pink; dark mode would fight the aesthetic
- **Static export** — no server needed; fast, free hosting on GitHub Pages
- **Filler reviews** — clearly marked as filler in code; 1 real review from Facebook included
- **basePath conditional** — development runs at `/`, production at `/DarlingDrinkCompany` for GitHub Pages

## Commands
```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build static export to /out/
npm run lint       # Run ESLint
```
