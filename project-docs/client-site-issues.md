# Issues found on the live site — sixthsensemma.com

Compiled 2026-09-15 while rebuilding the site. Every issue below was checked
against the live pages, not taken from notes. Counts come from scanning the
live HTML of **43 pages**: the homepage, the 5 program pages and all 37 blog
posts.

Each issue is tagged:

- **SECURITY** — the site or its visitors are at risk
- **SEO** — hurts how the site ranks or appears in search results
- **CONTENT** — wrong, broken or confusing for a visitor
- **GEOGRAPHIC TARGETING** — content aimed at the wrong location for a local business

The rebuilt site already fixes or works around every issue here. The client
still needs to act on the live WordPress site, most urgently the first two.

---

## Summary

| # | Issue | Tag | Pages affected | Priority |
|---|---|---|---|---|
| 1 | Hidden casino spam links injected into every page | SECURITY | all 43 | Urgent |
| 2 | Wrong phone number on every tap-to-call link | CONTENT | all 43 | Urgent |
| 3 | Kids FAQ copied onto adult and teen BJJ pages | CONTENT | 2 | High |
| 4 | Broken `%…%` page title (template bug, recurring) | SEO | 2 | High |
| 5 | Internal links pointing at the wrong post | SEO | 3 | High |
| 6 | Two separate Kali Sticks posts | SEO | 2 | High |
| 7 | Near-duplicate posts competing for the same searches | SEO | 17 | High |
| 8 | "Contact us" links that go to the Teen BJJ page | CONTENT | 2 | Medium |
| 9 | Same generic FAQ reused on 13 posts | SEO, CONTENT | 13 | Medium |
| 10 | Outbound Wikipedia links to unrelated pages | SEO, CONTENT | 19 | Medium |
| 11 | Blurry, upscaled featured images | SEO | 2 | Medium |
| 12 | ChatGPT markup pasted into posts | CONTENT | 3 | Medium |
| 13 | "Table" placeholder text left above tables | CONTENT | 4 | Medium |
| 14 | Orlando post targets a city 1,100 miles away; New York and Thailand tags elsewhere | GEOGRAPHIC TARGETING | 2 | High |
| 15 | Duplicated headings | SEO, CONTENT | 2 | Low |
| 16 | Empty headings | SEO | 2 | Low |
| 17 | Spelling errors and garbled headings | CONTENT | 10 | Low |
| 18 | Image alt text typo | SEO | 1 | Low |
| 19 | Duplicate WordPress tags | SEO | 2 | Low |
| 20 | Suspicious "last modified" dates | SEO | 9 | Low — to confirm |
| 21 | Numbered list skips a number | CONTENT | 1 | Low |
| 22 | "H2:" formatting marker left in a visible heading | CONTENT, SEO | 1 | Medium |
| 23 | Heading level skipped (H4 with no H3 above it) | SEO | 1 | Low |
| 24 | Two "Martial Arts Classes" posts, one with a `-2` URL | SEO | 2 | High |
| 25 | YouTube video that never loads, bare link shown instead | CONTENT | 1 | Medium |
| 26 | Poor image filenames: reused, duplicated by extension, or a bare number | CONTENT (asset management) | 10 | Low |
| 27 | Gi sizing chart has overlapping height ranges | CONTENT | 1 | Medium |
| 28 | A post with no H2 headings at all | SEO | 1 | Medium |
| 29 | A whole second article duplicated inside another post | CONTENT, SEO | 1 | High |
| 30 | Zero-width spaces in tag names, plus a "reddit" keyword tag | SEO | 3 | Low |
| 31 | Self-defence legal claims with no jurisdiction or disclaimer | CONTENT | 1 | Medium — for the client to review |
| 32 | Testimonials that cannot be verified | CONTENT | 1 | Low — for the client to decide |
| 33 | The brand name written in lowercase throughout a post | CONTENT, SEO | 1 | Medium |

**33 issues in total.**

---

## SECURITY

### 1. Hidden casino spam links injected into every page — SECURITY — Urgent

Every one of the 43 pages checked contains a block of links to French online
casino sites. It sits just inside `<body>`, above the header, in an element
pushed off-screen with `position:absolute; left:-35255px` so visitors never see
it. Search engines do.

Domains linked:
`shinywilds-fr.fr`, `blitzcasino.org`, `oscarspinfr.fr`, `quickwin-casino.app`,
`rizzcasino-fr.net`, `spin-million.com`, `cashedcasinoligne.fr`,
`fr-winmachancecasino.com`

**Affected:** all 43 pages checked — homepage, all 5 program pages, all 37 posts.

**Why it matters:** this is a hacked WordPress site. Hidden outbound links to
gambling sites are a classic SEO-spam injection and can get the site flagged or
penalised by Google. Whatever put it there may have other access too.

**What to do:** treat as a compromise, not a content fix. Scan the install for
malware; check the active theme (`header.php`, `functions.php`), all plugins,
and the database (`wp_options`, `wp_posts`) for the injected code; remove
unknown admin users; update WordPress core, theme and plugins; change every
password and the database credentials. Deleting the visible block alone will
not stop it coming back.

---

## CONTENT

### 2. Wrong phone number on every tap-to-call link — CONTENT — Urgent

The tap-to-call links use `tel:4639727800`. The real number is
**(469) 972-7800**. The area code is wrong, 463 instead of 469, so anyone who
taps "call" on a phone dials a different number.

**Affected:** all 43 pages. It appears twice on the homepage and on each blog
post, and once on each program page.

**What to do:** change every link to `tel:+14699727800`. It is in the site-wide
header and footer, so it should be a single template edit.

### 3. Kids FAQ copied onto adult and teen BJJ pages — CONTENT — High

The FAQ on the Adult BJJ and Teen BJJ pages was copied from the Kids BJJ page
without being rewritten. Six of the ten questions on each are about young
children and their parents, for example "Will My Child Become A Bully?",
"Do Parents Need To Stay?" and "My Child Is Addicted To Video Games, Will This
Be Suitable?".

**Affected:**
- `/adult-bjj-classes/` — 6 of 10 questions about children or parents
- `/teen-bjj-classes/` — 6 of 10 questions about children or parents

**Not affected:** `/adult-muay-thai-classes/` and `/teen-muay-thai-classes/`
have FAQs correctly written for their audience.

**What to do:** rewrite those six questions for adults and for teens.

### 8. "Contact us" links that go to the Teen BJJ page — CONTENT — Medium

Two posts have a contact call-to-action that sends visitors to the Teen BJJ
program page instead of a contact page or form.

**Affected:**
- `/muay-thai-stance/` — link text "Contect Us:" (also misspelled)
- `/kick-boxing-classes/` — link text "Contact us", in the "Call to Action" section

**What to do:** point both at the real contact page or booking form, and fix
the spelling.

### 12. ChatGPT markup pasted into posts — CONTENT — Medium

Two passages were copied straight out of the ChatGPT website, bringing its page
code with them (`gizmo-bot-avatar`, `bg-token-main-surface-primary`). The text
reads normally, but the stray code wraps it and it shows exactly how the post
was drafted to anyone who views the source.

**Affected:** `/martial-arts-for-adults/`: the opening line of "Self-Defense
Skills and Personal Safety", and the whole Conclusion.

**Two quieter cases:** on `/muay-thai-gear/`, four of the eight FAQ answers, and
on `/muay-thai-vs-kickboxing/`, four of the seven, carry `data-start` and
`data-end` attributes. Those are added by ChatGPT's web interface when text is
copied from it — on the Kickboxing post they appear on `<strong>` tags inside
the answers as well. Nothing shows on the page, but it is the same copy-paste
route as above, on two consecutive posts, and it confirms the FAQ answers were
pasted straight from a chat window.

**What to do:** re-paste those two passages as plain text, and paste future
answers through a plain-text editor so the attributes are stripped.

### 13. "Table" placeholder text left above tables — CONTENT — Medium

The word "Table", sometimes bold, sits on its own line above tables. It is a
leftover from drafting and shows on the page.

**Affected:** 22 instances across 4 posts

| Post | Count |
|---|---|
| `/martial-arts-karate-gi/` | 8 |
| `/is-boxing-a-martial-art/` | 7 |
| `/japanese-martial-arts-sign/` | 6 |
| `/what-martial-art-destroys-boxers/` | 1 |

**What to do:** delete the placeholder lines.

### 17. Spelling errors and garbled headings — CONTENT — Low

| Post | Error |
|---|---|
| `/nogi-brazilian-jiu-jitsu/` | "Mixed **Martials** Arts (MMA)?" |
| `/brazilian-jiu-jitsu-belt-ranks/` | "Promotion in Brazilian Jiu Jitsu Belt Ranks **Brazillian** Arts Globally" — misspelled and garbled; "Progress with **Degreed** or the Honorary Red Belt" |
| `/brazilian-jiu-jitsu-mat/` | "Choosing Suitable Mats for Sale Brazilian Jiu Jitsu" — garbled keyword phrase |
| `/martial-arts-classes-2/` | FAQ answer: "both **May Thai** and Brazilian Jiu-Jitsu classes" |
| `/mixed-martial-arts-brands/` | "Mixed Martial Arts **Brands Brands** vs Traditional Martial Arts Brands" — a duplicated word, see below |
| `/muay-thai-punching-bag/` | "**Alao** Read Our Article:" (for "Also") |
| `/muay-thai-stance/` | "**Contect** Us:" |
| `/kick-boxing-gloves/`, `/kick-boxing-bag/`, `/kick-boxing-classes/` | "Kick Boxing", "Kick boxing" and "Kickboxing" mixed, sometimes in adjacent headings |
| `/jiu-jitsu-guard-position/` | Six parallel section headings, but only two have a separator: "Open Guard **–** Mobility and Grip Strategy" and "Guard Retention Techniques **–** How to Keep Your Guard Strong" have an en dash, while "Closed Guard Classic Control and Attacks" and "Butterfly Guard Dynamic Sweeps and Control" have nothing, and "Half Guard&nbsp; Balance of Defense and Offense" and "Guard in MMA vs BJJ&nbsp; Key Differences" have a leftover double space (a non-breaking space) where the dash was deleted. Several of its sub-headings are also sentences or uncapitalised questions ("Guard vs top position who really has the advantage?", "Common open-guard grips include collars, sleeves, and pants.") |

The FAQ heading is also written inconsistently across posts: "FAQ's", "FAQ’s"
and "FAQ’S", sometimes as a main heading and sometimes as a sub-heading.

**The "Brands Brands" heading looks like a find-and-replace gone wrong.** On
`/mixed-martial-arts-brands/`, the heading reads "Mixed Martial Arts Brands
Brands vs Traditional Martial Arts Brands". Replacing "MMA" with the keyword
phrase "Mixed Martial Arts Brands" in "MMA Brands vs Traditional Martial Arts
Brands" would produce exactly this. It is worth checking other posts for
headings where a keyword phrase has been substituted in, since the same edit
would have run across the site.

### 33. The brand name written in lowercase throughout a post — CONTENT, SEO — Medium

On `/muay-thai-training/` the business name is written **"sixth sense mma"** in
lowercase every time it appears — six times, and not once correctly. Every other
post on the site writes "Sixth Sense MMA".

| Where | Text as published |
|---|---|
| H2 | "Why **sixth sense mma** is the Right Place to Grow Through Muay Thai" |
| H2 | "Why Choose **sixth sense mma** for Your Muay Thai Journey" |
| H3 | "What You'll Experience at **sixth sense mma**:" |
| Body text | "At *sixth sense mma*, Muay Thai is more than…" |
| Body text | "…and at *sixth sense mma*, the focus is always…" |
| Image alt text | "Growth Through Self Discovery **sixth sense mma**" |

**Why it matters:** two of the six are section headings, which are among the
most visible text on the page and carry weight in search. A brand that writes
its own name inconsistently looks careless to a reader comparing gyms, and it
weakens the brand signal search engines build from repeated, consistent naming.

**What to do:** correct all six to "Sixth Sense MMA", and check the other posts
for the same slip. Note the site also alternates between "Sixth Sense MMA" and
"Sixth Sense Martial Arts" elsewhere; settling on one form for body copy would
be worth doing at the same time.

**In the rebuild:** the lowercase spelling is reproduced exactly as published,
in all six places, and the build fails if it is silently corrected.

### 21. Numbered list skips a number — CONTENT — Low

The post's five numbered reasons are displayed as 1, 3, 4, 5. Reason 2,
"Reduced Maintenance and Replacement Costs Over Time", has no number, so the
list reads as if a reason is missing even though the title promises five.

**Affected:** `/brazilian-jiu-jitsu-mat/`, the five reasons.

**What to do:** make all five reasons one numbered list, or add the number 2 to
the second reason.

### 27. Gi sizing chart has overlapping height ranges — CONTENT — Medium

The "BJJ Gi Sizing Guide (A0–A5 & Brand Variations)" table is something readers
will actually use to pick a size, but two rows contradict each other:

| Size | Height Range (as published) |
|---|---|
| A3 | **6′0″–6′3″** |
| A4 | **6′2″–6′4″** |

Anyone between 6′2″ and 6′3″ falls into both A3 and A4. Every other height row
starts where the one before ends (A0 ends at 5′4″ where A1 begins, and so on).
The weight column has a gap too: A0 ends at 120 lbs and A1 starts at 125 lbs, so
121–124 lbs has no size.

**Affected:** `/brazilian-jiu-jitsu-gi/`, the sizing table.

**What to do:** fix the A3/A4 boundary so the height ranges don't overlap, close
the weight gap, and consider a note that sizes vary by brand, so readers should
check the maker's own chart.

### 22. "H2:" formatting marker left in a visible heading — CONTENT, SEO — Medium

A heading reads, on the page, **"H2: Picking the Most Suitable Martial Arts
Class"**. The "H2:" is a formatting note from the draft, meaning "make this a
main heading". It was pasted into the heading text instead of being removed.
Visitors see it, and search engines read it as part of the heading.

**Affected:** `/martial-arts-classes-2/`, in the "Tips for Choosing the Right
Class" section.

**What to do:** delete "H2: " from the heading. Because this suggests the post
was pasted from an outline, check the other posts for leftover markers such as
"H2:", "H3:" or "Table" (see issue 13).

### 25. YouTube video that never loads, bare link shown instead — CONTENT — Medium

A YouTube video block was added, but WordPress never turned it into a player.
The page shows the bare link
`https://youtu.be/oGmkxo72IzA?si=dJe1JCz-2qOo6Jnv` as plain, unclickable text.
The link includes a `?si=` share-tracking code copied from the YouTube app.

**Affected:** `/martial-arts-classes-2/`, at the end of "Benefits of Martial Arts
Classes".

**What to do:** re-add the video with the YouTube block, using the clean link
`https://www.youtube.com/watch?v=oGmkxo72IzA`, and check that the player appears.
Or remove the block. The video is a third-party channel ("Plainly Put"), so
confirm it's meant to be there.

### 32. Testimonials that cannot be verified, and no review schema — CONTENT — Low, for the client to decide

`/sambo-martial-art/` ends with a "Reviews for Sixth Sense MMA" section holding
five short testimonials, each signed with a first name and an initial: Ahmed R.,
Sana K., Ali M., Maria S. and Faisal H. They are plain text typed into the post,
not pulled from Google, Facebook or any review platform, so a reader has no way
to check them and the business has no record behind them. There are no star
ratings or dates.

Two small things in the markup: every quote opens and closes with the **same**
opening curly quote (`&#8220;` at both ends), and the names sit on a line break
inside the quote's own paragraph rather than being marked up as attributions.

**Why it matters:** testimonials a business writes into its own page carry
little weight with readers, and Google's review guidelines specifically exclude
self-serving reviews from rich results. Marking them up as Review or
AggregateRating structured data to chase stars in search results risks a manual
action.

**What to do:** if these are real, the stronger move is to collect them on
Google Business Profile and link to the profile, where the reviews are public
and verifiable. If they are placeholder copy, remove them. Either way, do not
add Review or AggregateRating schema for reviews hosted on your own page.

**In the rebuild:** the five testimonials are reproduced exactly as written,
with no stars, ratings or dates invented, and **no Review or AggregateRating
structured data was added** — the page carries only BlogPosting, FAQPage and
BreadcrumbList.

### 31. A section gives self-defence legal advice with no jurisdiction named — CONTENT — Medium, for the client to review

`/muay-thai-vs-kickboxing/` has a section headed "Legal Considerations in
Self-Defense Scenarios" that makes statements about what the law allows. It
says laws "typically emphasize the use of **reasonable force** and the
importance of de-escalating a situation whenever possible", that "a point in
legal defense is to avoid ground fighting", and that readers should
"familiarize yourself with local laws before applying any martial technique".

**Why it is worth a look:**
- Self-defence law differs by state, and the page names no state or country,
  while the academy serves Coppell, Texas.
- It reads as guidance on what a reader may lawfully do in a violent
  encounter, published by a business that teaches them to fight. A reader could
  act on it.
- There is no disclaimer anywhere on the page.

**What to do:** this is a judgement call for the client, not a factual error to
correct, so nothing was changed. The usual fix is a short line at the top or
foot of that section saying the information is general, is not legal advice,
and that laws vary by state — and, if they want to keep the specifics, having
someone qualified read the section first. The same check is worth applying to
any other post that touches on law.

**In the rebuild:** the section is reproduced word for word, with nothing added,
softened or caveated.

---

## SEO

### 4. Broken `%…%` page title — SEO — High — recurring template bug

The page title is wrapped in stray percent signs, a broken template variable
from an SEO plugin. It shows in Google results, browser tabs and social-share
previews as, for example,
`%Brazilian Jiu Jitsu Belt Ranks 2025: Path to Black Belt%`.

**Affected — 2 pages:**

| Post | Title as served | Published |
|---|---|---|
| `/brazilian-jiu-jitsu-belt-ranks/` | `%Brazilian Jiu Jitsu Belt Ranks 2025: Path to Black Belt%` | 2025-03-28 12:43 UTC |
| `/brazilian-jiu-jitsu-mat/` | `%Brazilian Jiu Jitsu Mat: Top 5 Reasons Gyms Go Premium%` | 2025-03-28 13:37 UTC |

On both pages all three title tags are broken: `<title>`, `og:title` and
`twitter:title`.

**This is a template bug, not a one-off typo.** It appears on two separate
posts, both published on the same day within an hour of each other, which
points to the SEO plugin's title template or a setting in use at that time
rather than a mistake typed into one post.

**Check done so far:** the `<title>`, `og:title` and `twitter:title` of all 43
live pages were scanned; only the two posts above are affected today.

**What to do:** find the title template or variable in the SEO plugin that
outputs the `%` signs and fix it there, then re-save both posts. Because the
cause is a template, **check every post** (including drafts, and any post
published or edited later) for the same `%…%` title, not only these two.

### 29. A whole second article duplicated inside another post — CONTENT, SEO — High

`/what-is-muay-thai/` contains the **entire** "Jiu Jitsu Guard Position"
article, pasted in above its own content. The Muay Thai article's own first
paragraph does not start until roughly two thirds of the way down the page.

| | Words |
|---|---|
| Whole page | about 5,980 |
| The duplicated Jiu Jitsu article | 3,481 |
| The actual Muay Thai article | 2,489 |

The duplicated block is word-for-word identical to `/jiu-jitsu-guard-position/`,
including its 15 H2 sections, its roughly 50 sub-headings, its three images and
its "Conclusion". So the page has two H1-level topics, two "Conclusion"
sections, and the Jiu Jitsu images appear on a Muay Thai page.

**Why it matters:**
- A reader who clicks "What Is Muay Thai?" reads about 3,500 words on BJJ guard
  positions before reaching a single word about Muay Thai. Most will leave.
- It is duplicate content against `/jiu-jitsu-guard-position/`: two URLs
  carrying the same 3,481 words, so search engines must pick one and may rank
  neither well.
- The page's topic is muddled. Its own keyword ("what is muay thai") is
  outweighed by guard-position text, which works against the ranking the post
  was written for.
- The FAQ shown on the page belongs to the Jiu Jitsu article, so the Muay Thai
  content has no FAQ of its own.

**What to do:** edit `/what-is-muay-thai/` and delete the duplicated block —
everything from the Jiu Jitsu opening question down to its "Conclusion"
paragraph — leaving the Muay Thai content that follows. Check the page in the
block editor: the Muay Thai text sits in separate blocks after it, so removing
the earlier ones is enough. Then check the other recent posts for the same
paste error.

**In the rebuild:** `dist/what-is-muay-thai.html` contains only the Muay Thai
article. The duplicated block, its three images and its FAQ were all left out,
and the post has no FAQ section as a result.

### 30. Zero-width spaces in tag names — SEO — Low

Tags on two posts end with an invisible zero-width space (U+200B):

| Post | Tags with the character |
|---|---|
| `/what-is-muay-thai/` | 5 of 7: "what is muay thai", "what is muay thai boxing", "what is muay thai fighting", "what is muay thai kickboxing", "what is the difference between muay thai and kickboxing" |
| `/muay-thai-gear/` | 6 of 13: "gear for muay thai", "muay thai gear bag", "muay thai gear bangkok", "muay thai gear fairtex", "muay thai gear usa", "muay thai training gear" |
| `/muay-thai-vs-kickboxing/` | 1 of 9: "dutch kickboxing vs muay thai" |

**A related tagging problem on the same post:** `/muay-thai-vs-kickboxing/` is
tagged "muay thai vs kickboxing **reddit**". That phrase is a keyword-tool
export, not a topic: someone searching it wants a Reddit thread, and this page
cannot give them one. Tags should describe what the post is about, not copy
every phrase a research tool returns.

They are invisible on the page, but they are part of the tag name and its URL
slug, so WordPress treats a clean tag and a zero-width-space tag as two
different tags. That is how duplicate tag archives get created (see issue 19).
The character is a tell-tale of text pasted from a keyword research tool, and it
now shows on two consecutive posts, so it is a habit rather than a one-off.

**What to do:** retype those eleven tag names, delete the duplicates left
behind, and watch for the same character when pasting keywords into titles and
headings as well. Pasting into a plain-text editor first strips it.

### 24. Two "Martial Arts Classes" posts, one with a `-2` URL — SEO — High

Two separate posts both target the keyword "Martial Arts Classes":

| URL | Title | Published |
|---|---|---|
| `/martial-arts-classes/` | "Premier Martial Arts Classes for Self Defense and Valuable Life Skills" | 2025-01-24 |
| `/martial-arts-classes-2/` | "Martial Arts Classes: Transform Your Life with Power" | 2025-03-29 |

The `-2` suffix is what WordPress adds when a new post is given a web address
that is already taken. The second post was written for the same keyword without
noticing the first one existed. The two now compete with each other in search
results (keyword cannibalisation), so neither ranks as well as one strong post
would. Both also overlap with the program pages (see issue 7).

**What to do:** merge them into one post under `/martial-arts-classes/`, keeping
the best sections of each. Then add a 301 redirect from
`/martial-arts-classes-2/` to it. Update any internal links that point at the
`-2` address.

### 5. Internal links pointing at the wrong post — SEO — High

Link text names one post, but the link goes to a different one.

| On page | Link text | Goes to | Should go to |
|---|---|---|---|
| `/japanese-martial-arts-sign/` | "What Martial Art Destroys Boxers? Comparing Fighting Techniques for Ultimate Dominance" | `/best-martial-arts/` | `/what-martial-art-destroys-boxers/` |
| `/martial-arts-karate-gi/` | "Martial Arts Kali Sticks: Techniques, History, and Benefits" | `/martial-arts-kali-sticks/` | `/martial-arts-kali-stick-2/` (the post with that title) |
| `/nogi-brazilian-jiu-jitsu/` | "Martial Arts Kali Sticks: Techniques, History, and Benefits" | `/martial-arts-kali-sticks/` | `/martial-arts-kali-stick-2/` |

On the Japanese post, the Boxers post becomes unreachable from that page, and
both links on it lead to the same place.

### 6. Two separate Kali Sticks posts — SEO — High

Two different posts cover the same topic, and one has a leftover `-2` in its URL.

- `/martial-arts-kali-sticks/` — "Martial Arts Kali Sticks Training for Real Defense"
- `/martial-arts-kali-stick-2/` — "Martial Arts Kali Sticks Master the Techniques History and Powerful Benefits"

They compete for the same searches. As issue 5 shows, the site's own links
already confuse them.

**What to do:** merge them into one post and redirect the other URL to it with
a 301.

### 7. Near-duplicate posts competing for the same searches — SEO — High

Several posts target the same keywords as each other, or as a program page.
Google then has to pick one and ranks all of them weaker.

| Topic | Competing pages |
|---|---|
| Best martial arts for self-defense | `/best-martial-arts/` · `/best-martial-arts-for-self-defense/` |
| BJJ belts and rank progression | `/brazilian-jiu-jitsu-belts/` · `/brazilian-jiu-jitsu-belt-ranks/` · `/martial-arts-belt-levels/` |
| Kali sticks | `/martial-arts-kali-sticks/` · `/martial-arts-kali-stick-2/` (see issue 6) |
| BJJ classes | `/brazilian-jiu-jitsu-classes/` · `/adult-bjj-classes/` (program page) · `/martial-arts-classes/` · `/martial-arts-classes-2/` (see issue 24) |
| Kickboxing / Muay Thai classes | `/kick-boxing-classes/` · `/adult-muay-thai-classes/` · `/teen-muay-thai-classes/` (program pages) |
| Martial arts for kids | `/martial-arts-for-kids/` · `/kids-bjj-classes/` (program page) |
| Martial arts for adults | `/martial-arts-for-adults/` · `/adult-bjj-classes/` · `/adult-muay-thai-classes/` (program pages) |
| Gloves (partial overlap) | `/kick-boxing-gloves/` · `/muay-thai-gloves/` |
| Boxing vs martial arts (partial overlap) | `/what-martial-art-destroys-boxers/` · `/is-boxing-a-martial-art/` |

**What to do:** for each group, pick one page to rank, and merge or clearly
separate the others. Blog posts about classes should link to the program page
rather than compete with it.

### 9. Same generic FAQ reused on 13 posts — SEO, CONTENT — Medium

An identical seven-question FAQ, starting "What is the best martial art for
beginners?", appears word for word on 13 posts, each with the same FAQ
structured data. That is duplicate content, and search engines are unlikely to
show FAQ rich results for any of them.

**Affected:** `/best-martial-arts/`, `/what-martial-art-destroys-boxers/`,
`/martial-arts-kali-stick-2/`, `/martial-arts-karate-gi/`,
`/is-boxing-a-martial-art/`, `/martial-arts-for-adults/`,
`/japanese-martial-arts-sign/`, `/martial-arts-classes/`,
`/martial-arts-for-kids/`, `/best-martial-arts-for-self-defense/`,
`/martial-arts-weapons/`, `/different-types-of-martial-arts/`,
`/martial-arts-belt-levels/`

The twenty-three newer posts each have their own FAQ, so the fix is to do the same for
these thirteen.

### 10. Outbound Wikipedia links to unrelated pages — SEO, CONTENT — Medium

Single words in answers are linked to Wikipedia articles that don't match the
meaning.

**Clearly wrong:**

| Post | Link text | Goes to |
|---|---|---|
| `/nogi-brazilian-jiu-jitsu/` | "Nogi" | *Nogi, Tochigi* — a town in Japan, nothing to do with no-gi grappling |
| `/brazilian-jiu-jitsu-belts/` | "train" (the verb, as in "seen train in BJJ") | *Train* — the article about railway trains |
| `/brazilian-jiu-jitsu-belt-ranks/` | "Chinese martial arts" | *Chinese martial arts* — loose fit on a BJJ article |
| `/muay-thai-punching-bag/` | "stronger" (FAQ: "You’ll notice stronger legs, arms, and core") | *Stronger* — a Wikipedia **disambiguation page** listing songs, albums and films called "Stronger"; nothing to do with strength training |

**Generic, low value** (one common word linked to a broad article):
`/martial-arts-for-kids/` "enrollment" · `/martial-arts-weapons/` "spirituality"
· `/different-types-of-martial-arts/` "growth" · `/martial-arts-belt-levels/`
"experience" · `/kick-boxing-gloves/` "reduction" · `/kick-boxing-bag/` "strength"
· `/brazilian-jiu-jitsu-orlando/` "reach" (FAQ answer on height) → *Reach*, a Wikipedia disambiguation page listing unrelated meanings
· `/muay-thai-clothing/` "sport" (FAQ: "In sport, signed or historic shorts…") → *Sport*, the general encyclopedia article; adds nothing for the reader
· `/brazilian-jiu-jitsu-gi/` "support" (FAQ: "strong support in the BJJ community") → *Support*, a Wikipedia disambiguation page
· `/mixed-martial-arts-brands/` "powerful" (FAQ: "His powerful left hand") → *Powerful*, a Wikipedia disambiguation page for songs and albums
· `/muay-thai-fitness-workout/` "stamina" (FAQ: "maintaining stamina outside of striking sessions") → *Stamina*, a Wikipedia disambiguation page, not the article on physical endurance
· `/mixed-martial-arts-training-gloves/` "Strength" (FAQ: "Strength, speed, and technique all add to that power") → *Strength*, another Wikipedia disambiguation page
· `/jiu-jitsu-guard-position/` "grip" (FAQ: "wrapped around the opponent's arm while grip their sleeve") → *Grip*, another Wikipedia disambiguation page
· `/muay-thai-gear/` "technique." (Conclusion: "respect your gear as much as your technique.") → *Technique*, another Wikipedia disambiguation page. The link also swallows the sentence's full stop, so the underline runs past the last word
· `/muay-thai-training/` "discipline" → *Discipline*, a Wikipedia disambiguation page covering academic fields and punishment, neither of which is the martial-arts sense meant here

**One post gets it right.** `/muay-thai-vs-kickboxing/` links the word
"kickboxing" to Wikipedia's *Kickboxing* article — the anchor text and the
destination match, and the page is the real article rather than a
disambiguation list. It is the only outbound link of this kind across all 35
posts that works as intended, which shows the others could have been done the
same way rather than needing to be removed.

**The pattern:** the last nine posts each end with one of these, always a single
word inside the final FAQ answer, always pointing at a Wikipedia disambiguation
page (Reach, Sport, Stronger, Support, Powerful, Stamina, Strength, Grip,
Technique). It
looks like a habit of dropping one outbound link into each new post to look
authoritative. None of them help a reader, and a disambiguation page is never a
useful destination. The simplest fix is to remove all of them.

A missed opportunity on the same post: it discusses IBJJF rules, competition
gi legality and gi colours several times, but never links to the IBJJF itself
(ibjjf.com). That link would help readers, unlike the Wikipedia ones.

**What to do:** remove the four clearly wrong links; replace or remove the
generic ones.

### 11. Blurry, upscaled featured images — SEO — Medium

The page stretches a small image to a much larger size, so it looks soft, and
the large declared size misleads the browser.

| Post | File actually served | Displayed at |
|---|---|---|
| `/muay-thai-stance/` | 300×188 thumbnail | 999×624 |
| `/kick-boxing-classes/` | 800×500 | 1020×638 |

A full 800×500 version of the Muay Thai Stance image exists on the server; the
page just isn't using it.

### 15. Duplicated headings — SEO, CONTENT — Low

The same heading text is repeated inside a single post.

**`/martial-arts-belt-levels/`** — three repeats:
- "Common Belt Colors and Their Meanings" appears twice
- "Variations in Belt Systems Across Martial Arts Disciplines" appears as a main
  heading and again as a sub-heading inside its own section
- "Requirements for Advancing Through Belt Levels" appears the same way

**`/kick-boxing-gloves/`** — "Factors to Consider When Choosing Kick boxing
Gloves" appears twice.

### 16. Empty headings — SEO — Low

Heading tags with no text in them.

**Affected — 2 headings on 2 posts:**
- `/best-martial-arts-for-self-defense/` — an empty sub-heading (H3) between
  Taekwondo's "Training Focus" and "Jeet Kune Do"
- `/best-martial-arts/` — a main heading (H2) holding only an image, with no text

### 23. Heading level skipped (H4 with no H3 above it) — SEO — Low

The sub-heading "Another Inspiring Tale" is an H4, but it sits directly under
the H2 "Transformational Journeys in Martial Arts" with no H3 between them. That
breaks the heading outline that screen readers and search engines use to
understand the page.

**Affected:** `/martial-arts-classes-2/`.

**What to do:** change "Another Inspiring Tale" to an H3.

### 28. A post with no H2 headings at all — SEO — Medium

`/mixed-martial-arts-training-gloves/` skips the H2 level completely. Its
outline is:

| Level | Count | Used for |
|---|---|---|
| H1 | 1 | The post title |
| H2 | **0** | — |
| H3 | 14 | The 13 main sections, plus the FAQ heading |
| H4 | 37 | Sub-sections inside those sections |

So the page jumps from the title straight to H3, and the H4s hang off headings
that are themselves two levels down. The opening question ("Can I use the same
MMA gloves for all types of training?") is an H4, where every other post uses an
H3 for it.

**Why it matters:** the heading levels are how search engines and screen readers
work out which sections are top-level and which are nested. With the H2 level
missing, a screen reader user navigating by heading level hears 13 main sections
announced at the same depth as sub-sections elsewhere on the site, and the
section-to-sub-section relationship is guesswork. Any feature that builds a
contents list from H2s (including this rebuild's sidebar) finds nothing.

**Affected:** `/mixed-martial-arts-training-gloves/` (the whole post).

**What to do:** promote the 13 section headings from H3 to H2 and the 37
sub-headings from H4 to H3, and make the opening question an H3. The visible
text does not need to change. Also check other posts for skipped levels; issue
23 is a smaller case of the same thing.

**In the rebuild:** the heading levels are reproduced exactly as the client
wrote them, because these pages are replicas. The sidebar contents list falls
back to H3s on this post so it isn't empty.

### 18. Image alt text typo — SEO — Low

Three images are described as "**marble** arts for kids" instead of "martial
arts for kids". Alt text is read by screen readers and used by image search.

**Affected:** `/martial-arts-for-kids/`, on 3 of its 4 images.

### 19. Duplicate WordPress tags — SEO — Low

Tags were created twice, producing duplicate tag archive pages.

- `self-defense` and `self-defense-2`, used on `/different-types-of-martial-arts/`
- `brazilian-jiu-jitsu` and `brazilian-jiu-jitsu-2`, used on `/brazilian-jiu-jitsu-belts/`

**What to do:** merge each pair and redirect the `-2` archive.

### 20. Suspicious "last modified" dates — SEO — Low, to confirm

On several posts, the "date modified" in the page's structured data matched the
exact day the page was fetched. That suggests a plugin rewriting the date on
every load rather than when the content changes. Constantly changing dates can
make search engines distrust the freshness signal.

**Observed on:** `/martial-arts-kali-stick-2/`,
`/best-martial-arts-for-self-defense/`, `/martial-arts-weapons/`,
`/different-types-of-martial-arts/`, `/martial-arts-belt-levels/`,
`/kick-boxing-gloves/`, `/muay-thai-stance/`, `/what-is-muay-thai/`

`/what-is-muay-thai/` is the clearest case: it was published 2025-05-08, but its
modified date read `2026-09-18T03:01:08` — the same day it was fetched, and hours
ahead of the fetch in UTC terms.

Separately, `/best-martial-arts/` gives two different modified dates in two
places: `2025-06-09` in its social tags and `2025-02-05` in its structured data.

**What to do:** check whether an SEO or caching plugin is setting the modified
date automatically. Treat this one as a question for whoever manages the plugins
rather than a confirmed fault.

---

## GEOGRAPHIC TARGETING

### 14. Orlando post targets a city 1,100 miles away and promotes competitors — GEOGRAPHIC TARGETING — High

`/brazilian-jiu-jitsu-orlando/` ("Brazilian Jiu Jitsu Orlando: Classes, Gyms &
Tips", published 2025-04-14) is written for people looking to train in
**Orlando, Florida**. Sixth Sense Martial Arts is in **Coppell, Texas**, roughly
1,100 miles away. Its keyword "Brazilian Jiu Jitsu Orlando" is repeated
throughout, and all nine of its WordPress tags are Orlando phrases ("BJJ
Orlando", "Orlando martial arts" and so on).

The post also recommends three competitor academies in Orlando by name, each
with its own section: **Gracie Barra Orlando**, **The Jungle MMA & Fitness** and
**American Top Team East Orlando**. A fourth section names three more:
Carlson Gracie Central Florida, Fusion X-Cel and "Orlando Brazilian Jiu Jitsu".
The names are plain text, not links, but the post still tells readers to visit
them. It never mentions Sixth Sense's own classes or location.

`/martial-arts-classes/` also links to this post, sending Coppell readers to it.

**Why it matters:**
- It can't bring in local students: anyone who finds it is looking for a gym in
  Orlando.
- The few readers it does reach are pointed at competitors.
- For local search, a Coppell business publishing Orlando pages muddies the
  signal of where the business actually is.

**What to do:** review whether this post should exist at all. The simplest fix
is to unpublish it and 301-redirect the URL to the Coppell BJJ program page
(`/adult-bjj-classes/`), then remove the link from `/martial-arts-classes/`. If
the content is worth keeping, rewrite it for Coppell and the Dallas–Fort Worth
area, and replace the competitor sections with Sixth Sense's own programs.

**The same mismatch, smaller, in tags on `/muay-thai-training/`.** The post
itself is fine — it never names a city — but three of its twelve tags point
somewhere else entirely:

- "muay thai training new york"
- "muay thai training nyc"
- "thailand training muay thai"

A reader searching any of those wants a gym in New York or a training camp in
Thailand, not Coppell. Tags create their own archive pages on the site, so these
publish three thin pages aimed at the wrong place. The post also carries
"muay thai training near me", which only works if the rest of the site makes the
location obvious.

**What to do:** delete those three tags and the archive pages they created.
Keep tags to what the business actually offers and where it offers it, and use
the city name you want to rank for — Coppell, or Dallas–Fort Worth.

### 26. Images reused from other articles under their filenames — CONTENT (asset management) — Low

Two image names have each been reused as a long numbered series across several
posts. Each series was named after the post it was made for, so on the other
posts the filenames describe the wrong subject.

**Series 1, "Parts-of-a-Brazilian-Jiu-Jitsu-Gi", made for `/brazilian-jiu-jitsu-gi/`:**

| Post | Article images | Social-sharing image | Filenames match content? |
|---|---|---|---|
| `/brazilian-jiu-jitsu-gi/` (the original) | `Parts-of-a-Brazilian-Jiu-Jitsu-Gi.jpg`, `…-Gi.png`, `…-Gi-1.png` | `…-Gi-2.png` | Yes |
| `/brazilian-jiu-jitsu-orlando/` | `…-Gi-3.png`, `-4`, `-5` | `-6` | No |
| `/muay-thai-clothing/` | `…-Gi-7.png`, `-8`, `-9` | `-10` | No |

**Series 2, "Benefits-of-Training-with-a-Muay-Thai-Punching-Bag", made for
`/muay-thai-punching-bag/`:**

| Post | Article images | Social-sharing image | Filenames match content? |
|---|---|---|---|
| `/muay-thai-punching-bag/` (the original) | `Benefits-of-Training-with-a-Muay-Thai-Punching-Bag-1.png`, `-2`, `-3` | `-4` | Yes |
| `/mixed-martial-arts-brands/` | `…-Punching-Bag-5.png`, `-6`, `-7` | `-8` | No |
| `/muay-thai-fitness-workout/` | `…-Punching-Bag-4.jpg`, `-10.png`, `-2.jpg` | `-3.jpg` | No |
| `/mixed-martial-arts-training-gloves/` | `…-Punching-Bag-13.png`, `-9.png`, `-11.png`, `-12.png` | `-13.png` | No |
| `/jiu-jitsu-guard-position/` | `…-Punching-Bag-17.png`, `-14.png`, `-15.png`, `-16.png` | `-17.png` | No |

The Fitness Workout post makes this worse: it draws its three images from
scattered numbers in the series (4, 10, 2) rather than a block, and the series
now mixes `.jpg` and `.png` at the same numbers, so `…-Punching-Bag-2.jpg` and
`…-Punching-Bag-2.png` are different pictures on different posts.

The Gi post also uses two files that differ only by extension (`.jpg` and
`.png`), which is easy to mix up.

**A third habit, on `/sambo-martial-art/`:** one of its three images is uploaded
as `2-1024x536.jpg` — a bare number. A filename like that says nothing about the
picture to a search engine, and in a media library of hundreds of uploads it is
impossible to find again. The post's other two images are named
`sambo-mar-art.jpg` and `sambo-mar-art-1.jpg`, which is better but still tells
you nothing about which section each belongs to.

The pictures show each post's own section titles, so readers aren't affected.
But seven posts now carry filenames describing another post's subject, which
makes the media library hard to manage and tells search engines the wrong
subject for those images.

**What to do:** a housekeeping item. Name each upload after the post and the
section it belongs to; re-upload the Orlando, Muay Thai Clothing, MMA Brands and
Sambo images with descriptive names; avoid two files that differ only by
extension, and never leave an upload named as a bare number.

---

## How these were checked

- **Spam, phone number, empty headings:** scanned the raw HTML of all 43 pages.
- **FAQ comparisons:** extracted every question and answer from each page and
  compared them word for word.
- **Links:** followed each one and compared its link text with its target.
- **Image sizes:** compared each file's real pixel size with the size the page
  declares.
- **Counts** (placeholders, duplicated headings, typos): taken from the live
  page source, not estimated.
