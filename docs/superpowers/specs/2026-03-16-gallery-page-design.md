# Gallery Page Design Spec

## Overview
Add a standalone photo gallery page to the Darling Drink Company site at `/gallery`. Masonry column layout with CSS-based responsive image sizing, click-to-expand lightbox, and scroll-triggered animations matching the existing site theme.

## Route & Page Structure
- **Route**: `/gallery` → `src/app/gallery/page.tsx`
- **Layout**: Inherits root `layout.tsx` (fonts, metadata, background gradient)
- **Page composition**: Navbar → Gallery heading → Masonry grid → Footer
- Same pink gradient background, glassmorphism, and fonts as homepage

## Masonry Layout
- **Technique**: CSS `columns` property (no JS library needed)
- **Responsive columns**: 3 on desktop (lg), 2 on tablet (sm), 1 on mobile
- **Image sizing**: Each image gets `width: 100%` within its column — browser handles all resizing from the original file. No image editing, no multiple file versions, no Next.js image optimization.
- **Spacing**: `gap` via column-gap and margin-bottom on each item
- **Break behavior**: `break-inside: avoid` on each image container to prevent splitting across columns

## Images
- **Source**: All `.jpg` files from `companyinfo/` folder
- **Deployed to**: `public/images/gallery/` (copied and renamed for cleaner paths)
- **Excluded**: `real-logo.png`, `real-menu.png`, `text.txt` (not gallery content)
- **Format**: Original files served as-is, unoptimized (matching existing static export approach)

## Lightbox
- **Trigger**: Click any gallery image
- **Overlay**: Fixed position, full viewport, semi-transparent dark backdrop (`bg-black/80`)
- **Image display**: Centered, `max-width: 90vw`, `max-height: 90vh`, `object-fit: contain`
- **Close**: Click anywhere outside the image (on the backdrop)
- **Animation**: Framer Motion `AnimatePresence` — fade in overlay + scale-up image on open, reverse on close
- **Scroll lock**: `overflow: hidden` on body while lightbox is open

## Animations
- Each gallery image wrapped in staggered `AnimatedSection` (fade-up on scroll, matching site pattern)
- Hover effect: `whileHover={{ scale: 1.02 }}` with `transition={{ duration: 0.3 }}`
- Consistent with existing animation patterns across the site

## Navbar Changes
- Add "Gallery" link to `navLinks` array in `Navbar.tsx`
- Gallery link uses Next.js `<Link href="/gallery">` (page route, not hash scroll)
- Existing hash links (`#about`, `#menu`, etc.) must still work when on the homepage
- When on the gallery page, hash links should navigate back to homepage sections
- Mobile menu includes Gallery link

## Components
- **New file**: `src/app/gallery/page.tsx` — the gallery page (client component for lightbox state)
- **Modified**: `src/components/Navbar.tsx` — add Gallery link with routing logic
- **Reused**: `AnimatedSection.tsx`, `Navbar.tsx`, `Footer.tsx`

## No New Dependencies
- CSS columns for masonry (native CSS)
- Framer Motion already installed (lightbox animations)
- Next.js Image component already used throughout
