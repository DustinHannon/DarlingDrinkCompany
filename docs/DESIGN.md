# Design Document — Darling Drink Company Website

## Design Philosophy

The website reflects the Darling Drink Company brand: feminine, fun, approachable, and polished. Every design decision ties back to the pink trailer and the warm, family-run feel of the business.

## Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Rose Pink | `#E8A0BF` | Buttons, headings gradient, accents |
| Secondary | Blush | `#fda4af` | Hover states, gradient endpoints |
| Dark Rose | Deep Rose | `#c2455a` | Gradient text start, strong emphasis |
| Deep | Wine Rose | `#9f1239` | Darkest text on rose scale |
| Background Start | Rose White | `#fff1f2` | Page background gradient |
| Background Mid | Light Pink | `#ffe4e6` | Page background gradient |
| Background End | Soft Pink | `#fecdd3` | Page background gradient |
| Accent 1 | Mint Light | `#d1fae5` | Decorative blobs |
| Accent 2 | Mint | `#a7f3d0` | Decorative elements |
| Accent 3 | Mint Strong | `#6ee7b7` | Accent highlights |
| Text | Dark Plum | `#4a2030` | Body text color |
| Glass BG | White 25% | `rgba(255,255,255,0.25)` | Glass panels |
| Glass Strong | White 45% | `rgba(255,255,255,0.45)` | Forms, strong glass |

## Typography

| Role | Font | Source | Weight |
|------|------|--------|--------|
| Headings | **Pacifico** | Google Fonts | 400 (Regular) |
| Body | **Quicksand** | Google Fonts | 300–700 (Variable) |

- Pacifico gives a playful, handwritten feel for section titles
- Quicksand is rounded and friendly for body text, matching the brand personality
- Both loaded via `next/font` — no external requests after initial load

## Visual Style: Glassmorphism

Three glass levels are used throughout the site:

### `.glass` — Standard panels
- Background: white at 25% opacity
- Blur: 16px
- Border: white at 40% opacity
- Shadow: rose-tinted (200, 100, 130 at 15%)
- **Used for**: Menu cards, review cards, photo frames, nav links

### `.glass-strong` — Prominent panels
- Background: white at 45% opacity
- Blur: 20px
- Border: white at 50% opacity
- Shadow: rose-tinted at 20%
- **Used for**: Booking form, scrolled navbar, success message

### `.glass-dark` — Tinted panels
- Background: rose at 15% opacity
- Blur: 16px
- Border: white at 30% opacity
- **Used for**: Footer

## Gradient Text

Section headings use a CSS gradient fill:
```css
background: linear-gradient(135deg, #c2455a 0%, #e8a0bf 50%, #d4748f 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## Animations

All animations use **Framer Motion**:

| Animation | Trigger | Details |
|-----------|---------|---------|
| Navbar slide-in | Page load | Slides down from y: -100 |
| Hero logo | Page load | Scale from 0.8 to 1, fade in |
| Hero text | Page load | Staggered fade-in with y offset (0.3s, 0.5s, 0.65s, 0.8s delays) |
| Floating blobs | Continuous | Slow y-axis bobbing + subtle rotation, infinite loop |
| Scroll indicator | Page load | Bouncing chevron at bottom of hero |
| Section fade-in | Scroll into view | `AnimatedSection` wrapper: fade + slide up (y: 60 to 0) |
| Card hover | Mouse hover | Slight y lift (-4px) + subtle scale (1.01) |
| Mobile menu | Toggle | Height + opacity animation with AnimatePresence |
| Hamburger icon | Toggle | Lines rotate into X shape |
| Form submit button | Hover/tap | Scale up on hover (1.02), scale down on tap (0.98) |

## Page Background

Fixed gradient background that doesn't scroll:
```css
background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 30%, #fecdd3 60%, #fff1f2 100%);
background-attachment: fixed;
```

## Responsive Design

- **Mobile-first** Tailwind classes
- Navbar collapses to hamburger menu below `md` (768px)
- Grid layouts switch from multi-column to single-column on mobile
- Hero text sizes scale: `text-5xl` → `sm:text-7xl` → `lg:text-8xl`
- Form fields stack to single column on mobile, two columns on `sm`+
- Logo text hidden on mobile, visible on `sm`+

## Custom Scrollbar (WebKit)

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #fff1f2; }
::-webkit-scrollbar-thumb { background: #e8a0bf; border-radius: 4px; }
```

## Date Picker Styling

react-datepicker is fully restyled to match the glassmorphism theme:
- Header: rose-to-blush gradient
- Selected day: rose gradient with circular shape
- Hover: soft pink (#fecdd3) with circular shape
- Container: frosted glass with blur and rose shadow
- Navigation arrows: white
