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

## What They Offer (Real Menu)
**32 oz. Lemonades** — Plain $7 / Flavored $8
- Strawberry, Blue Raspberry, Mango, Pineapple, Watermelon, Peach, Coconut, Granny Smith Apple, Cherry, Blue Cotton Candy

**Specialty Lemonades** — $8
- Tropical Sunrise, Pina Colada, Blue Hawaiian, Arnold Palmer, The Abby, Caramel Apple

**Dirty Sodas with Cream** — $10
- Southern Dew, The Darling, Coconut Wave, Butter Beer Coke, Pink Ladies, Southern Charm, Strawberry Sundrop

**Dirty Sodas w/out Cream** — $10
- Hawaiian Coke, Strawberry Refresher, Neon Nights, Fruit Loop

**Dirty Alanis (Energy Drinks)** — $10
- Sunburst, Cherry Jubilee, Blush & Bashful

**Drinks & Snacks**
- 32oz Sweet Tea $5, Soft Drinks $4, Ice Water $3, Candy $2, Nachos $8

## Event Types
- Vendor events, School functions, Sports events, Festivals
- Grand openings, Birthday parties / Weddings
- Neighborhood gatherings, Corporate events

## Branding
- **Trailer**: Pink mobile drink trailer
- **Logo**: Lemon/citrus glass with straw, "DARLING" in bold serif, "Drink Company" below
  - Original: `/companyinfo/real-logo.png`
  - Site copy: `/public/images/logo.png`
- **Primary Colors**: Rose pink (#E8A0BF), blush (#fda4af), white (#fff1f2)
- **Accent Colors**: Mint/teal (#a7f3d0, #6ee7b7)
- **Aesthetic**: Feminine, sweet, fun, approachable — cohesive pink branding throughout

## Reference Images
Company photos and marketing materials are in `/companyinfo/`. Renamed copies in `/public/images/`:

| Source File | Public Path | Description |
|---|---|---|
| `real-logo.png` | `images/logo.png` | Official company logo (current) |
| `real-menu.png` | — | Real menu board (reference only, data extracted to Menu component) |
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
- **Form Handling**: Formspree (endpoint `mykndrbk`, free tier 50 submissions/month)
- **Hosting**: Vercel (auto-deploys on push, Next.js Image Optimization enabled)
- **TypeScript**: Strict mode enabled

## Project Structure
```
DarlingDrinkCompany/
├── .claude/settings.json              # Auto-approve permissions for Claude Code
├── .vercel/                           # Vercel project config (auto-generated)
├── companyinfo/                       # Original source photos, logo, menu, text
├── docs/
│   ├── ARCHITECTURE.md                # System architecture and decisions
│   ├── CONTENT.md                     # Real vs filler content tracking
│   └── DESIGN.md                      # Color palette, typography, animations
├── public/images/                     # Renamed images used by the site
│   └── gallery/                      # Gallery page images (copied from companyinfo)
├── workingphotos/                     # Screenshots of site in progress (not deployed)
├── src/
│   ├── app/
│   │   ├── globals.css                # Tailwind theme, glassmorphism, date picker styles
│   │   ├── layout.tsx                 # Root layout (fonts, metadata, SEO)
│   │   ├── page.tsx                   # Main page (assembles all sections)
│   │   └── gallery/page.tsx           # Photo gallery with masonry layout + lightbox
│   └── components/
│       ├── AnimatedSection.tsx         # Reusable scroll-triggered fade-in wrapper
│       ├── Navbar.tsx                  # Sticky nav with full logo + mobile hamburger
│       ├── Hero.tsx                    # Hero: glass logo panel, gradient title, CTAs, scroll indicator
│       ├── About.tsx                   # "Our Story" section with photos
│       ├── Menu.tsx                    # Real drink menu (6 categories with prices)
│       ├── Reviews.tsx                 # Customer testimonials (1 real + 5 filler)
│       ├── Press.tsx                   # "As Seen On TV" WJTV feature section
│       ├── BookUs.tsx                  # Booking form with date picker + Formspree (live)
│       └── Footer.tsx                  # Contact info, event list, social links
├── next.config.ts                      # Next.js configuration
├── postcss.config.mjs                  # Tailwind CSS v4 PostCSS plugin
├── tsconfig.json                       # TypeScript config with @/* path alias
└── package.json
```

## Deployment
- **Live Site**: https://darling-drink-company.vercel.app/
- **Repo**: https://github.com/DustinHannon/DarlingDrinkCompany
- **Hosting**: Vercel (team "OneMan") — auto-deploys on push to `master`
- **Process**: Push to master → Vercel builds → deploys to production
- **Preview**: Pull requests get automatic preview deployments

## Contact Form (Formspree) — LIVE
- **Endpoint**: `https://formspree.io/f/mykndrbk`
- **Recipient**: taylor@hellodarlingdesigns.net
- **Free tier**: 50 submissions/month
- **Config location**: `src/components/BookUs.tsx` line 43

## Design Decisions
- **Gallery as separate page** — `/gallery` route with masonry CSS columns, lightbox overlay, responsive auto-sizing (no image editing needed)
- **Single-page scrolling (homepage)** — best for a service-based mobile business; all info in one flow
- **Glassmorphism** — frosted glass panels (`.glass`, `.glass-strong`, `.glass-dark`) over a pink gradient background
- **Hero logo in glass panel** — logo wrapped in frosted glass card to match site aesthetic (not a flat square)
- **No text-shadow on gradient text** — removed because it was dimming the bottom of letters
- **Scroll indicator** — "Scroll" label + down arrow at bottom of hero, positioned below buttons with spacing
- **No dark mode** — brand is inherently light/pink; dark mode would fight the aesthetic
- **Vercel hosting** — full Next.js support including Image Optimization, preview deployments, and edge network
- **Filler reviews** — clearly marked in code and docs; 1 real review from Facebook included

## Commands
```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build for production
npm run lint       # Run ESLint
```
