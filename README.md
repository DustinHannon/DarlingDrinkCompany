# Darling Drink Company

The official website for **Darling Drink Company** — a family-run mobile drink trailer serving specialty lemonades, dirty sodas, and dirty energy drinks in Madison, Mississippi.

**Live Site**: [dustinhannon.github.io/DarlingDrinkCompany](https://dustinhannon.github.io/DarlingDrinkCompany/)

## About

Darling Drink Company is run by Taylor Hannon and her mom, Dee Dee. They bring their signature pink trailer to vendor events, school functions, festivals, parties, and neighborhood gatherings across the Madison, MS area. As seen on WJTV Channel 12!

## Tech Stack

- **Next.js 16** (React 19) with App Router and static export
- **Tailwind CSS v4** with custom glassmorphism theme
- **Framer Motion** for scroll-triggered animations
- **react-datepicker** for the event booking calendar
- **Google Fonts** — Pacifico (headings) + Quicksand (body)
- **Formspree** for contact form submissions
- **GitHub Pages** for hosting (auto-deployed via GitHub Actions)

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
Static output is generated in the `/out/` directory.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme, glassmorphism, date picker styles
│   ├── layout.tsx           # Root layout, fonts, SEO metadata
│   └── page.tsx             # Main page (all sections)
└── components/
    ├── Navbar.tsx            # Sticky nav with smooth-scroll
    ├── Hero.tsx              # Hero with logo, tagline, CTAs
    ├── About.tsx             # "Our Story" section
    ├── Menu.tsx              # Drink menu (4 categories)
    ├── Reviews.tsx           # Customer testimonials
    ├── Press.tsx             # "As Seen On TV" WJTV feature
    ├── BookUs.tsx            # Booking form with date picker
    ├── Footer.tsx            # Contact, socials, event list
    └── AnimatedSection.tsx   # Scroll-triggered animation wrapper
```

## Deployment

The site auto-deploys to GitHub Pages on every push to `master` via the GitHub Actions workflow at `.github/workflows/deploy.yml`.

## Contact Form Setup

The booking form uses [Formspree](https://formspree.io). To connect it:

1. Create a free Formspree account
2. Create a new form with the recipient email
3. Replace the placeholder endpoint ID in `src/components/BookUs.tsx` (line 43)
4. Push to `master` to deploy

## Contact

- **Taylor Hannon** — 601-405-4281
- **Email**: taylor@hellodarlingdesigns.net
- **Facebook**: [Darling Drink Company](https://www.facebook.com/groups/1729197157753383)
- **Instagram**: [@DarlingDrinkCo](https://www.instagram.com/DarlingDrinkCo)
