# Content Guide — Darling Drink Company Website

## Real Content (from business)

### Logo
- **Source**: `/companyinfo/real-logo.png` (provided by owner)
- **Deployed to**: `/public/images/logo.png`
- Pink lemon/citrus glass illustration with "DARLING" in bold serif and "Drink Company" below

### About Text
Source: `/companyinfo/text.txt` and Facebook group description.

The About section uses Taylor's own words adapted for the website:
- Family-run by Taylor Hannon and her mom, Dee Dee
- Other family members often help at events
- Based in Central Mississippi
- Community-focused, grateful for customer support

### Menu (Real — from `/companyinfo/real-menu.png`)
The entire menu is sourced from the real trailer menu board. All items, descriptions, and prices are accurate:

**32 oz. Lemonades** — Plain $7 / Flavored $8
- Strawberry, Blue Raspberry, Mango, Pineapple, Watermelon, Peach, Coconut, Granny Smith Apple, Cherry, Blue Cotton Candy

**Specialty Lemonades** — $8
| Drink | Ingredients |
|-------|------------|
| Tropical Sunrise | Watermelon + Mango + Coconut |
| Pina Colada | Coconut + Pineapple |
| Blue Hawaiian | Coconut + Blue Raspberry + Pineapple |
| Arnold Palmer | Lemonade + Sweet Tea |
| The Abby | Peach + Watermelon + Mango |
| Caramel Apple | Granny Smith Apple + Caramel Drizzle |

**Dirty Sodas with Cream** — $10
| Drink | Ingredients |
|-------|------------|
| Southern Dew | Mountain Dew + Watermelon + Peach + Cream |
| The Darling | Choice of Soda + Vanilla + Cream |
| Coconut Wave | Sprite + Blue Raspberry + Coconut Cream |
| Butter Beer Coke | Coke + Vanilla + Caramel + Cream |
| Pink Ladies | Sprite + Strawberry + Vanilla + Coconut Cream |
| Southern Charm | Dr. Pepper + Cherry + Vanilla + Cream |
| Strawberry Sundrop | Sunkist + Strawberry + Pineapple + Cream |
| Campfire | Dr Pepper or Root Beer + Marshmallow Sauce + Toasted Marshmallow Syrup + Vanilla + Cold Foam |

**Dirty Sodas w/out Cream** — $10
| Drink | Ingredients |
|-------|------------|
| Hawaiian Coke | Coke + Pineapple + Cherry |
| Strawberry Refresher | Lemonade + Sprite + Strawberry |
| Neon Nights | Sprite + Blue Raspberry + Pineapple Juice |
| Fruit Loop | Sprite + Strawberry + Watermelon + Pineapple |
| Pina Colada Sprite | Sprite + Coconut + Pineapple |

**Dirty Alanis (Energy Drinks)** — $10
| Drink | Ingredients |
|-------|------------|
| Sunburst | Orange Kiss Alani + Vanilla + Coconut + Peach + Cream |
| Cherry Jubilee | Cherry Twist Alani + Cherry + Peach + Mango + Cream |
| Blush & Bashful | Pink Slush Alani + Pineapple + Vanilla + Strawberry + Cream |
| Mississippi Moon | Cosmic Stardust Alani + Raspberry + Vanilla + Sprite + Coconut + Cream + Cold Foam |

**Drinks & Snacks**
| Item | Price |
|------|-------|
| 32oz Sweet Tea | $5 |
| Soft Drinks | $4 |
| Ice Water | $3 |
| Candy | $2 |
| Nachos | $8 |

### Contact Information (confirmed from flyer)
- **Name**: Taylor Hannon
- **Phone**: 601-405-4281
- **Email**: taylor@hellodarlingdesigns.net
- **Facebook**: Darling Drink Company group
- **Instagram**: @DarlingDrinkCo

### Event Types (confirmed from flyer)
- Vendor Events, School Functions, Sports Events, Festivals
- Grand Openings, Parties, Neighborhood Gatherings

### Press
- Featured on WJTV Channel 12 (Jackson, MS CBS affiliate)
- Photos of Taylor and Dee Dee at the WJTV studio
- Photos of WJTV crew filming at the trailer

### Contact Form
- **Service**: Formspree (live, endpoint `mykndrbk`)
- **Recipient**: taylor@hellodarlingdesigns.net
- **Fields**: Name, Email, Phone, Event Type, Event Date (calendar picker), Guest Count, Location, Message

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

---

## Content Update Instructions

To update any content on the site:

1. **Reviews**: Edit `src/components/Reviews.tsx` — update the `reviews` array
2. **Menu items/prices**: Edit `src/components/Menu.tsx` — update the `menuCategories` array
3. **About text**: Edit `src/components/About.tsx` — update the paragraph text
4. **Contact info**: Edit `src/components/Footer.tsx` and `src/components/BookUs.tsx`
5. **Logo**: Replace `public/images/logo.png` (and keep original in `companyinfo/`)
6. **Images**: Add new images to `public/images/` and reference them in components
7. Push changes to `master` — the site auto-deploys via GitHub Actions
