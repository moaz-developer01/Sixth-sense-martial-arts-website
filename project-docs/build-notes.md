# Build Notes

## Structure decisions

- The deployment surface is `dist/index.html`, `dist/styles.css`, `dist/main.js`, four thin stub pages (`blog.html`, `coach.html`, `privacy-policy.html`, `terms-of-service.html`), and `dist/images/`. No framework, no build step.
- Sections use semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`) and a single H1 in the hero for crawlability and assistive technology.
- The hero lead form (Full Name, Phone, Program) is the primary conversion path. It has no backend: `main.js` intercepts submission, runs native HTML5 validation, and shows an inline confirmation message. Wire it to a real CRM or email endpoint before launch.
- The "Our Programs" nav dropdown is a `<button>` plus `<ul>` pair, enhanced by `main.js` (click toggle, outside-click close, Escape close, `aria-expanded` sync) and additionally usable via CSS `:hover`/`:focus-within` at tablet width and up. Below 768px the whole primary nav collapses behind a hamburger toggle.
- The five dropdown items (Adult BJJ, Adult Muay Thai, Kids BJJ, Teen BJJ, Teen Muay Thai) link to the two Programs columns (`#programs-kids`, `#programs-adult`) since the source content only splits programs by Kids vs. Teen/Adult, not by five distinct sub-pages.
- Icon badges and check marks are inline SVG (no icon font/library dependency).
- Images use fixed `width`/`height` attributes to prevent layout shift; only the hero image is `loading="eager"` with `fetchpriority="high"`, everything else below the fold is `loading="lazy"`.

## Fixes applied versus the original sixthsensemma.com

- Every phone link uses `tel:+14699727800` (the original mixed in an incorrect `tel:4639727800`).
- Footer email and phone are two separate links with matching anchor text and `href` (the original pointed an email-text anchor at a phone number).
- No empty heading elements.
- Meta description spells "Coppell" correctly.
- Added `og:image` (1200x630) and matching Twitter card image, which the original lacked.
- Added `LocalBusiness` (`SportsActivityLocation`), `Organization`, and `WebSite` JSON-LD, which the original lacked.
- The two "start a free trial now" style CTAs that share the same role (hero form submit, safety-band pill button) use identical wording, `Free Trial - Start Now`. The final-CTA button intentionally keeps its own distinct wording (`Get Stronger Now - Free Trial`) since it closes a different section with different framing.

## SEO, AEO, and FEO

- Canonical, robots, Open Graph, Twitter card, and the three JSON-LD types are all present. See [seo-aeo-feo.md](seo-aeo-feo.md).
- "Sixth Sense" appears naturally in the hero's first paragraph, in the safety-band H2, in an image alt attribute, and in the footer About block, satisfying the keyword-placement requirement without stuffing.
- `blog.html`, `coach.html`, `privacy-policy.html`, and `terms-of-service.html` are placeholder pages marked `noindex` and left out of `sitemap.xml` until they have real content.

## Local preview convenience file

`dist/preview.html` is a self-contained snapshot of `index.html` with `styles.css`, `main.js`, and the in-page images inlined as data URIs, so it renders correctly by double-clicking it directly (no `php -S` needed). It is `noindex, nofollow`, has no canonical tag, and carries a fixed "LOCAL PREVIEW BUILD" banner so it is never mistaken for a real page. It is not linked from anywhere on the site and is excluded from `sitemap.xml`. Regenerate it after editing `index.html`, `styles.css`, or `main.js` (see the PowerShell steps used to build it, or ask to have it rebuilt); otherwise it will drift out of sync with the real page.

## Visual fidelity pass (2026-08-22)

The first build used invented placeholder colors, a hand-drawn logo, and generated placeholder graphics instead of the real brand. Since this environment has internet access, the real sixthsensemma.com page and its Elementor CSS were fetched to extract the actual palette, typography, and photography, then applied here:

- The header and hero now share one continuous dark zone using the site's real `Hero-Background.webp` texture, matching the live site (the original build wrongly used a solid white sticky header).
- The header logo is the real "6th / Sixth Sense Martial Arts" wordmark PNG, not a hand-drawn SVG.
- Header nav links, the tagline, and the contact links are white/light grey (`#E6E6E6`) with dark-red (`#BA0000`) mail/phone icons, matching the real header, which sits on a dark background rather than white.
- CTA buttons (`.btn-primary`, `.btn-pill`) use the real button treatment: `linear-gradient(180deg, #FF4141, #D10000)`, a soft red glow (`box-shadow: 0 0 10px rgba(255,0,0,0.5)`), and a fully rounded pill shape. "Meet The Coach" now uses this same style instead of a black outline button, matching the source CSS (every CTA on the real page shares this one button style).
- The badge pill ("Strength, Confidence, and Community Awaits") is transparent with a subtle white border, not a red-tinted pill.
- The benefits section now has all five real cards in the real color order (red `#EB0000`, white, white, black, white) instead of three invented ones, uses the real "We're A Community..." Frame-82 icon strip image, and includes the real "We'll Help You Develop Your 'Sixth Sense'..." card copy, which now carries the primary keyword naturally.
- The safety band and Open Mat section use the real texture backgrounds (`safety-bg.webp`, and a dark purple `#5E0043` with `openmat-bg.webp`) instead of invented solid reds.
- Every placeholder photo (hero, coach, safety band, mission, coaching) and the two Programs-column photos are now the academy's real photography, fetched directly from the live site rather than generated. See [asset-list.md](asset-list.md) for the full mapping and what still needs optimization.
- Heading color is now `#0E0E0E` (matching the real site) instead of inheriting the body text color.

## Known placeholders to replace before launch

See [asset-list.md](asset-list.md) for the full list: the Open Graph image, schema `geo` coordinates, `openingHours`, and `sameAs` social links are still placeholders. The `hero-training.png` re-encode also needs real compression.

## Verification targets

Checked rendering at 375px, 768px, and 1440px using the PHP preview server (`php -S localhost:8000 router.php`). Verify the lead form, dropdown navigation, focus styles, phone links, metadata, structured data, and all image alt text again after swapping in real content and photography.

## Adult BJJ Classes page (2026-08-22)

`dist/adult-bjj-classes.html` is a standalone page with its own `dist/adult-bjj-classes.css` and `dist/adult-bjj-classes.js`, deliberately not sharing `styles.css`/`main.js` with the homepage. The two pages use different measured palettes and typefaces (this page is Bebas Neue + Poppins on `#121212`/`#1B1D1B`, the homepage is Bebas Neue + Montserrat on `#0A0A0A`), so a shared stylesheet would force one page's design onto the other. The header, footer, and interaction patterns (hamburger nav, dropdown, focus handling) are intentionally parallel to the homepage's for consistency, just re-implemented against this page's own tokens.

- The whole page is dark by design (per the brief); the only light surface is the "Our Programs" dropdown flyout at tablet width and up, matching the same pattern used on the homepage.
- The repeating "Free" / "GET MY Class PASS!" block appears three times as plain duplicated markup (after the Transform section, after the Physical & Mental Health section, and after the FAQ) rather than being templated with JS, since this is a no-build static site.
- "Only 11 Passes Remaining!" is rendered as a plain string instead of the original's broken `[11]` merge-tag placeholder. Wire it to a real inventory variable before launch; until then it's a hardcoded number that will need manual upkeep.
- The `GET MY Class PASS!` buttons link to `index.html#trial-form`, reusing the homepage's native lead form, since this page has no lead-capture backend of its own and the real site's button targets a third-party embed this static rebuild does not replicate.
- The FAQ accordion is a plain `<button aria-expanded>` / `<div hidden>` pair per question, single-open (opening one closes the others), built with `adult-bjj-classes.js`. No animation library.
- The FAQ content is entirely replaced per the brief: the live page has kids-program Q&A mistakenly left on the adult page, so this rebuild ships nine new adult-focused questions and answers instead, and the FAQPage JSON-LD matches the new content.
- Breadcrumbs (Home > Our Programs > Adult BJJ Classes) are rendered visibly in the hero and mirrored in `BreadcrumbList` schema. "Our Programs" points to `index.html#programs` since there is no dedicated programs index page in this static rebuild.
- The footer Google Map is a keyless `google.com/maps?...&output=embed` iframe for the Coppell address, avoiding any API key requirement.
- `dist/brazilian-jiu-jitsu-preview.html` is the local preview convenience file for this page (same pattern as `dist/preview.html` for the homepage): a self-contained snapshot with `adult-bjj-classes.css`, `adult-bjj-classes.js`, and all images inlined as data URIs, `noindex, nofollow`, no canonical tag, and a fixed "LOCAL PREVIEW BUILD" banner. Not linked from the site and excluded from `sitemap.xml`. Regenerate it after editing the real page files.

## Adult BJJ Classes: pixel-measurement correction pass (2026-08-22)

The first pass of this page used invented spacing and a 4-column grid for the benefits section. It was corrected against a set of exact measurements taken from the live page at a 1432px viewport:

- Container widths are fixed custom properties: outer 1417px, standard content 1140px, wide 1240px, each two-column-row column 570px, benefit cards 519px, body copy capped at 1010px. Split rows use `gap: 0` at desktop since two 570px columns sum to exactly the 1140px standard width with no gutter between them.
- Bebas Neue headings now use `line-height` equal to `font-size` everywhere (H1 40px/40px, H2 38px/38px, card titles 26px/26px, the giant "Free" 200px/200px at desktop), matching the tight leading called out as a defining feature of the design. Body copy is the only text with loose leading (16px/24px).
- Section padding dropped from the original `3.5rem`-`4rem` (56px-64px) down to the measured values: outer sections use `0 10px`, with an inner `.content-block` wrapper carrying `40px` padding for actual vertical spacing; cards use `10px` padding; hero uses `0 120px` at desktop.
- The benefits section was rebuilt from a 4-column grid into two 570px-wide columns of four stacked 519px cards each, collapsing to one column on mobile, per the correction.
- Image display sizes are locked to the measured values via CSS (`max-width: 550px` on `.split-image`) rather than stretching to fill their column.
- The hero was given an explicit `min-height: 373px` at desktop, since `0` vertical padding alone doesn't account for the section's measured height. This is an inferred value, not a value given directly for padding.

**Known unresolved conflict in the measurement brief:** section 4 states benefit cards are "around 243px" tall while their containing column (four stacked cards) is "around 287px." A column of four 243px cards cannot itself be only 287px, so these two numbers can't both be literal. This build followed the explicit per-element values (card padding 10px, card width 519px, font sizes) rather than trying to force a 287px column height, since that would require shrinking the cards well below their specified size. Flagging this rather than silently picking one number.

**On the "verify total page height is ~8107px" request:** this environment's headless Chrome does not reliably honor requested viewport dimensions here (documented separately; it can also risk interacting with the user's real, already-open browser instead of an isolated instance), so no automated screenshot or height measurement was attempted. All values above were applied directly in code and can be verified by reading the CSS, but the resulting total page height was not independently measured. Check `document.body.scrollHeight` in the browser console at a 1432px window width to get the real number.

## Adult BJJ Classes: structural correction pass (2026-08-22, second pass)

A second correction added structure that was missing from the original brief:

- **Hero lead form**: `#topform` now sits in the hero next to the H1/breadcrumb, a real native form (Full Name, Phone, Email, submit) styled as a `#1B1D1B` card, since the live page's GoHighLevel iframe embed fails to load there (renders at 0 height, a bug not worth replicating). The `<form>` is wrapped in an HTML comment explaining it's a stand-in for the real CRM embed and showing the iframe snippet to drop in later.
- **CTA blocks are sections, not buttons**: the three repeating "Free" blocks are now full-width `<section class="cta-block">` elements with `background: transparent`, containing two `<h2>` elements ("Free" and the subheading) and an anchor (not a button) linking to `#topform`.
- **Section backgrounds and heights are forced explicitly**: every section from the hero through the FAQ now carries an exact `min-height` at the 1024px breakpoint (hero 373px, Transform 772px, Benefits 590px, CTA 1 453px, Health 479px, benefits heading 260px, the four benefit rows 307/331/331/283px, CTA 2 473px, Outcomes 772px, FAQ 1068px, CTA 3 473px, Map 465px) matching the brief's per-section measurements directly, rather than letting them emerge from padding alone. Each was checked by hand to confirm its actual content (text, image, or cards) fits inside the forced height without overflowing it.
- **Benefit cards are four rows of two**, each row its own `<section>` at `#121212`, not a 4-column grid or two long columns.
- **Google Map** is now its own section between CTA 3 and the closing section, a keyless embed sized up to 1397x445 at desktop.
- Closing section and footer both now use `background: transparent` as specified.

**Unresolved conflict, flagged rather than silently resolved:** the brief asks for "Closing + Footer" to total 616px, but the closing section's own image is specified at 550x732, which alone is larger than that budget. By hand-calculation (not a live measurement): the sixteen sections with forced heights sum to approximately 7492px; adding a header at ~62px brings it to ~7554px. The closing section plus footer, sized naturally around their real content (the 732px-tall image dominates), comes to roughly 1090px rather than 616px. That puts the estimated total around **8580-8600px**, about 470-490px over the 8107px target, and that gap is attributable entirely to this one conflict. This is a hand calculation using the exact CSS values, not a rendered measurement; ask for `document.body.scrollHeight` in a real browser at 1432px width for the authoritative number.

## Internal links are file-relative for local `file://` preview

All internal `href` values in `dist/` point at `*.html` files relative to the
page (`best-martial-arts.html`, `privacy-policy.html`, `terms-of-service.html`,
`adult-bjj-classes.html`, …) rather than at clean URLs (`/best-martial-arts/`).
Root-relative paths resolve against the drive root under `file:///D:/…`, which
broke every internal link when previewing without a server.

**At deploy time**, switch these back to clean URLs to match the canonical tags
and the live site's URL structure:

| Local (now)                    | Deploy to                   |
| ------------------------------ | --------------------------- |
| `best-martial-arts.html`       | `/best-martial-arts/`       |
| `blogs.html`                   | `/blogs/`                   |
| `adult-bjj-classes.html`       | `/adult-bjj-classes/`       |
| `adult-muay-thai-classes.html` | `/adult-muay-thai-classes/` |
| `kids-bjj-classes.html`        | `/kids-bjj-classes/`        |
| `teen-bjj-classes.html`        | `/teen-bjj-classes/`        |
| `teen-muay-thai-classes.html`  | `/teen-muay-thai-classes/`  |
| `privacy-policy.html`          | `/privacy-policy/`          |
| `terms-of-service.html`        | `/terms-and-conditions/`    |

The canonical tags already point at the live clean URLs and were left untouched.
`dist/.htaccess` has the rewrite that serves `/best-martial-arts/` from
`best-martial-arts.html`, so clean URLs work on the server either way.

Note: the footer "Terms of Service" link targets `terms-of-service.html`, which
is the file that exists in `dist/`. The live site uses `/terms-and-conditions/`.
Either rename the file or map it in `.htaccess` before launch.

## The blog listing is generated - never edit dist/blogs.html by hand

`dist/blogs.html` (and `dist/blogs-2.html`, `-3.html`, …) are build output. Any
manual edit is overwritten on the next run. The sitemap is generated too.

**To add a post:**

1. Add the post's `.html` file to `dist/`.
2. Add its entry to `project-docs/posts.json`:
   ```json
   {
     "slug": "your-post-slug",
     "title": "The post's H1",
     "image": "images/your-featured-image.webp",
     "date": "2025-03-14T12:00:00+00:00",
     "category": "Martial Arts"
   }
   ```
   `slug` must match the filename without `.html`. `date` drives the ordering -
   use the full ISO timestamp from the post's `article:published_time`, because
   several posts share a publication day and a date-only value makes the sort a
   tie. An `excerpt` field is no longer needed: the cards render the image and
   the title only (see below). Existing entries keep theirs harmlessly.
3. Run:
   ```
   node project-docs/build-blog.js
   ```

Posts sort newest first, repaginate at 9 per page, and the sitemap rewrites
itself. Page 1 stays `blogs.html` so `/blogs/` remains the clean canonical;
later pages are `blogs-2.html` onward with `rel="prev"` / `rel="next"` and a
canonical pointing at their own URL. Listing pages left over from a previous,
longer run are deleted automatically.

`dist/blogs-template.html` is the shell the script fills, via three markers:
`<!-- HEAD-LINKS -->`, `<!-- POSTS -->` and `<!-- PAGINATION -->`. Edit the
template to change the listing's layout, then re-run the script.

**Note:** the template lives in `dist/` as specified, which means it is
publicly reachable at `/blogs-template.html` and would render as a broken page
with visible markers. Before launch, either move it out of `dist/` (and update
`TEMPLATE_FILE` in the script) or block it in `robots.txt` and `.htaccess`.

## Blog posts carry no tag section (standing rule)

Blog posts do **not** have a tag / tag-pill section at the foot of the article.
This was decided after the section was built and removed three separate times;
it is not wanted on any post, present or future.

- Do not add `<div class="ap-tags">`, `.ap-tags-label` or `.ap-tag-list` markup
  to any post.
- The matching CSS has been deleted from `dist/styles.css`. Do not restore it.
- If a future content spec lists tag pills for a post, that instruction is
  superseded by this rule - leave them out and say so.

The reference pages on sixthsensemma.com do show tag pills. They are
deliberately not reproduced.

## Post table of contents: H2s, falling back to H3s (2026-09-18)

The "On this page" list in each post's sidebar is **static HTML, written into
the page when the post is built**. There is no JavaScript that builds it:
`dist/main.js` contains no TOC code at all, and the site deliberately avoids
JS-injected content. So the rule below lives in the page generator, not in a
script shipped to the browser.

**The rule:** build the TOC from the article body's `<h2>` headings. If the body
contains **no** `<h2>` at all, build it from the `<h3>` headings instead.

- 30 of the 31 posts have H2 sections and are unaffected.
- `/mixed-martial-arts-training-gloves/` has no H2 anywhere in the article: the
  client wrote 13 `<h3>` sections with 37 `<h4>`s beneath them, skipping the H2
  level entirely. Its heading levels are reproduced exactly as written (see the
  client issue log); only the TOC compensates, giving 13 entries instead of an
  empty list.
- The fallback picks one level for the whole list, never a mix, and it never
  changes the heading levels in the article.
- The FAQ heading is not part of the TOC on any post.

If a future post has the same problem, the same fallback applies. Do not
"fix" such a post by promoting its H3s to H2s: that would change the client's
content.

## Listing cards show image + title only (standing rule)

The blog listing cards on `dist/blogs.html` deliberately show **only** the
featured image and the post title. There is no excerpt / summary paragraph
beneath the heading.

- `cardHtml()` in `project-docs/build-blog.js` must not emit a
  `.bl-card-excerpt` paragraph.
- The matching CSS has been deleted from `dist/styles.css`. Do not restore it.
- The `excerpt` field in `posts.json` is now unused. It is left in place on the
  existing nine entries but nothing renders it, and new entries do not need it.

This sits alongside the "no tag section on blog posts" rule above: both are
elements that were built, shown to the client, and removed on request.

## Homepage lives at dist/index.html (2026-09-13)

The homepage is `dist/index.html`, the only filename every web server resolves
at `/` without configuration. `.htaccess` also sets `DirectoryIndex index.html`
explicitly.

History, so this doesn't recur: `index.html` was 0 bytes from the initial commit
onward. The working homepage markup had been recovered into
`dist/Home Preview.html` (see the one-file-per-page memory note on the earlier
data loss) and never renamed back. It has now been moved to `index.html`
byte-for-byte (md5 unchanged), and `Home Preview.html` no longer exists. Do not
recreate a second homepage file under any other name.

Every page's header "Home" link and header logo point at `index.html`, as does
the "Back to Home" button on the four stub pages. `build-blog.js` lists `/` at
priority 1.0 - the single highest value in `sitemap.xml`.

## Deployment: switching internal links to clean URLs

Locally, every internal link uses the `.html` form (`index.html`,
`adult-bjj-classes.html`, `blogs-2.html`, ...) so the site works when files are
opened straight from the filesystem.

**At deploy time, rewrite internal links back to clean URLs:**

| local form | deployed form |
|---|---|
| `index.html` | `/` |
| `adult-bjj-classes.html` | `/adult-bjj-classes/` |
| `blogs.html` | `/blogs/` |
| `blogs-2.html` | `/blogs/page/2/` |
| `some-post.html` | `/some-post/` |

`index.html` then serves at `/` automatically via `DirectoryIndex`, and the
`.htaccess` clean-URL rule serves `/some-post/` from `some-post.html`.

**No canonical changes are needed.** Every canonical, `og:url`, JSON-LD `@id` /
`url` / `item`, and every `<loc>` in `sitemap.xml` already uses the clean
absolute form (`https://sixthsensemma.com/`, `https://sixthsensemma.com/blogs/`,
...). None of them contain `.html`.

Two things to handle in that same pass:

- **Pagination URLs differ in shape, not just suffix.** `blogs-2.html` maps to
  `/blogs/page/2/`, not `/blogs-2/`. The `.htaccess` rule as written would serve
  `/blogs-2/` but not `/blogs/page/2/`, so either add a rewrite for
  `^blogs/page/(\d+)/?$ -> /blogs-$1.html`, or the canonical/`rel` URLs on the
  listing pages will point somewhere that 404s.
- **Consider a 301 from `/index.html` to `/`** so the homepage isn't reachable
  at two URLs. The canonical already names `/`, so this is tidiness rather than
  an SEO risk. Match on `THE_REQUEST` rather than the rewritten path, otherwise
  the redirect loops against `DirectoryIndex`.
