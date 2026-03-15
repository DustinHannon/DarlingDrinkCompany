# Content Guide — Darling Drink Company Website

## Real Content (from business)

### About Text
Source: `/companyinfo/text.txt` and Facebook group description.

The About section uses Taylor's own words adapted for the website:
- Family-run by Taylor Hannon and her mom, Dee Dee
- Other family members often help at events
- Based in Madison, MS 39110
- Community-focused, grateful for customer support

### Menu Items
The following drink names and categories are confirmed from the trailer menu boards and flyer images:

**Specialty Lemonades:**
- Blush and Bashful (confirmed from customer review)
- The Alanis (confirmed from customer review)
- Southern Charm (from trailer menu board)
- Pink Ladies (from trailer menu board)
- Fruit Loop (from trailer menu board)

**Dirty Sodas:**
- Dirty Dr Pepper
- Dirty Sprite
- Dirty A&W

**Dirty Energy Drinks:**
- Custom energy drinks with flavor combos

**Seasonal:**
- Hot Chocolate (confirmed from customer review — winter)

**Snacks:**
- Popcorn (confirmed from drink photo)

### Contact Information (confirmed from flyer)
- **Name**: Taylor Hannon
- **Phone**: 601-405-4281
- **Email**: taylor@hellodarlingdesigns.net
- **Facebook**: Darling Drink Company group
- **Instagram**: @DarlingDrinkCo

### Event Types (confirmed from flyer)
- Vendor Events
- School Functions
- Sports Events
- Festivals
- Grand Openings
- Parties
- Neighborhood Gatherings

### Press
- Featured on WJTV Channel 12 (Jackson, MS CBS affiliate)
- Photos of Taylor and Dee Dee at the WJTV studio
- Photos of WJTV crew filming at the trailer

---

## Filler Content (to be replaced)

### Testimonials / Reviews
Only **one review is real** (from the Facebook group text):
> "Just enjoyed 'Blush and Bashful' the best version of the Alanis and my daughter had the Best Hot Chocolate at the Jingle and Mingle event in Madison from Darling Drink Company. Highly recommend both!!!!"

The following **5 reviews are filler** and should be replaced with real customer reviews when available:

| Reviewer | Event | Status |
|----------|-------|--------|
| Sarah M. — Jingle & Mingle | **REAL** (adapted from Facebook) | Keep |
| Jessica R. — Neighborhood Block Party | Filler | Replace |
| Amanda K. — School Fall Festival | Filler | Replace |
| Lauren T. — Birthday Party | Filler | Replace |
| Melissa H. — Grand Opening | Filler | Replace |
| Caroline D. — Vendor Market | Filler | Replace |

### Menu Descriptions
The short descriptions under each drink name are **generated filler** based on the drink type and brand voice. The actual drink names are real, but the descriptions should be reviewed and updated by Taylor.

---

## Content Update Instructions

To update any content on the site:

1. **Reviews**: Edit `src/components/Reviews.tsx` — update the `reviews` array
2. **Menu items**: Edit `src/components/Menu.tsx` — update the `menuCategories` array
3. **About text**: Edit `src/components/About.tsx` — update the paragraph text
4. **Contact info**: Edit `src/components/Footer.tsx` and `src/components/BookUs.tsx`
5. **Images**: Add new images to `public/images/` and reference them in components
6. Push changes to `master` — the site auto-deploys via GitHub Actions
