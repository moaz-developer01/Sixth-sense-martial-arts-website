# Asset List

All images ship from `dist/images/`. These are the real photos and textures from the live sixthsensemma.com site (fetched directly since this rebuild reuses the academy's own brand assets), not placeholders. The one exception is `hero-training.png`, which is an uncompressed re-encode and should be optimized further before launch (see below).

| Filename | Dimensions | Placement | Alt text | Loading |
| --- | ---: | --- | --- | --- |
| logo-header.png | 768 x 219 | Header logo | Sixth Sense Martial Arts | eager |
| logo.svg | 240 x 60 (vector) | Favicon, Organization schema logo | Sixth Sense Martial Arts | eager |
| hero-bg.webp | 1440 x 752 | Header + hero background texture (CSS) | decorative | CSS background |
| hero-training.png | 840 x 739 | Hero right column | Coach standing with arms crossed | eager, fetchpriority=high |
| coach-session.webp | 1024 x 1020 | "Ready to feel challenged" section | Coach smiling with arms crossed | lazy |
| fighter-gi.webp | 768 x 563 | Safety band | Student putting on a patched gi | lazy |
| safety-bg.webp | 768 x ~350 | Safety band background texture (CSS) | decorative | CSS background |
| programs-kids.webp | 1024 x 600 | Kids Program column | Young student in a black gi | lazy |
| programs-adult.webp | 1024 x 600 | Teen/Adult Program column | Coach practicing BJJ with a student | lazy |
| openmat-bg.webp | ~2000 x 1155 | Open Mat section background texture (CSS) | decorative | CSS background |
| community-icons.png | 238 x 94 | "We're More Than Just A Gym" card | decorative (alt="") | lazy |
| mission-class.webp | 1024 x 924 | Mission section | Coach wearing academy merch, gi over shoulder | lazy |
| coach-portrait.webp | 1024 x 924 | Coaching section | Young student smiling in a black gi | lazy |
| og-sixth-sense.png | 1200 x 630 | Open Graph / Twitter image | Sixth Sense Martial Arts in Coppell, Texas | n/a (meta only), still a generated placeholder |

## Adult BJJ Classes page (`dist/adult-bjj-classes.html`)

Real photos fetched directly from the live `/adult-bjj-classes/` page, same approach as the homepage.

| Filename | Dimensions | Placement | Alt text | Loading |
| --- | ---: | --- | --- | --- |
| logo-header.png | 768 x 219 (displays 186x53 header / 216x62 footer) | Header + footer logo | Sixth Sense Martial Arts \| mixed martial arts | eager (header), lazy (footer) |
| bjj-hero-bg.webp | 2000 x 1296 | Hero background texture (CSS) | decorative | CSS background |
| bjj-transform.webp | 769 x 1024 (displays 550x732) | "Transform Your Body" section | Adult BJJ Classes | lazy |
| bjj-benefits.webp | 1024 x 1024 (displays 550x550) | "Life-Changing Benefits" section | Adult BJJ Classes | lazy |
| bjj-health.webp | 1024 x 766 (displays 550x411) | "Physical and Mental Health" section | Adult BJJ Classes | lazy |
| bjj-closing.webp | 769 x 1024 (displays 550x732) | Closing section | Adult BJJ Classes | lazy |
| og-adult-bjj.png | 1200 x 630 | Open Graph / Twitter image | Adult BJJ Classes at Sixth Sense Martial Arts in Coppell, Texas | n/a (meta only), generated graphic |

Outstanding for this page: `og-adult-bjj.png` is a generated placeholder graphic (gradient plus text), not a real photo; replace with a real Open Graph image before launch. The `GET MY Class PASS!` buttons link to `index.html#trial-form` since this static page has no lead-capture backend of its own; point them at a real booking flow before launch.

## Outstanding before launch

- `hero-training.png` is a re-encoded PNG (roughly 700KB); run it through a real PNG/WebP optimizer (it needs alpha transparency, so it can't become a plain JPEG) before shipping.
- `og-sixth-sense.png` is still a generated placeholder graphic, not a real photo; replace it with a proper 1200x630 Open Graph image.
- Verify the `geo` coordinates in the LocalBusiness schema (`dist/index.html`) against the exact address; the current values are an approximate Coppell, TX city-center placeholder.
- Confirm `openingHours` against the studio's real schedule; current values are placeholders.
- Add verified social profile URLs to the `sameAs` arrays in the LocalBusiness and Organization schema (currently empty).
- Replace the `blog.html`, `coach.html`, `privacy-policy.html`, and `terms-of-service.html` stub pages with real content, then remove their `noindex` robots meta tag and add them to `sitemap.xml`.
- The real site also has a "Real Stories, Real Transformations" testimonials section and an embedded third-party (GoHighLevel) lead-capture form that this static rebuild does not replicate; the hero here uses a native HTML form instead since the static site has no backend to receive a third-party embed.
