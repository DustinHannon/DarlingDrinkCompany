# Darling Drink Company

The official website for **Darling Drink Company** — a family-run mobile drink trailer serving specialty lemonades, dirty sodas, and dirty energy drinks in Madison, Mississippi.

**Live Site**: [darling-drink-company.vercel.app](https://darling-drink-company.vercel.app/)

## About

Darling Drink Company is run by Taylor Hannon and her mom, Dee Dee. They bring their signature pink trailer to vendor events, school functions, festivals, parties, and neighborhood gatherings across the Madison, MS area. As seen on WJTV Channel 12!

## Tech Stack

- **Next.js 16** (React 19) with App Router
- **Tailwind CSS v4** with custom glassmorphism theme
- **Framer Motion** for scroll-triggered animations
- **react-datepicker** for the event booking calendar
- **Google Fonts** — Pacifico (headings) + Quicksand (body)
- **Formspree** for contact form submissions (live)
- **Vercel** for hosting (auto-deployed on push via Git integration)

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation
```bash
git clone https://github.com/DustinHannon/DarlingDrinkCompany.git
cd DarlingDrinkCompany
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build
```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme, glassmorphism, date picker styles
│   ├── layout.tsx           # Root layout, fonts, SEO metadata
│   └── page.tsx             # Main page (all sections)
└── components/
    ├── Navbar.tsx            # Sticky nav with smooth-scroll
    ├── Hero.tsx              # Hero with glass logo panel, CTAs
    ├── About.tsx             # "Our Story" section
    ├── Menu.tsx              # Full drink menu with real prices
    ├── Reviews.tsx           # Customer testimonials
    ├── Press.tsx             # "As Seen On TV" WJTV feature
    ├── BookUs.tsx            # Booking form with date picker (Formspree)
    ├── Footer.tsx            # Contact, socials, event list
    └── AnimatedSection.tsx   # Scroll-triggered animation wrapper
```

## Documentation

- [`CLAUDE.md`](CLAUDE.md) — Full project guide for AI-assisted development
- [`docs/DESIGN.md`](docs/DESIGN.md) — Color palette, typography, animations, glassmorphism specs
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — System architecture, data flow, key decisions
- [`docs/CONTENT.md`](docs/CONTENT.md) — Real vs filler content tracking, menu details

## Deployment

The site auto-deploys to Vercel on every push to `master` via Git integration. Preview deployments are created for pull requests automatically.

## Contact

- **Taylor Hannon** — 601-405-4281
- **Email**: taylor@hellodarlingdesigns.net
- **Facebook**: [Darling Drink Company](https://www.facebook.com/groups/1729197157753383)
- **Instagram**: [@DarlingDrinkCo](https://www.instagram.com/DarlingDrinkCo)
