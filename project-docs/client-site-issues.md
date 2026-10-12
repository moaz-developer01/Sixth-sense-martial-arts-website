# Issues found on the live site — sixthsensemma.com

Compiled 2026-09-15 while rebuilding the site. Every issue below was checked
against the live pages, not taken from notes. Counts come from scanning the
live HTML of **86 pages**: the homepage, the 5 program pages and all 80 blog
posts.

Each issue is tagged:

- **SECURITY** — the site or its visitors are at risk
- **SEO** — hurts how the site ranks or appears in search results
- **CONTENT** — wrong, broken or confusing for a visitor
- **GEOGRAPHIC TARGETING** — content aimed at the wrong location for a local business

The rebuilt site already fixes or works around every issue here, with one
exception: issue 0 is a claim the rebuild **omits** rather than reproduces, and
it needs a decision from the client before that page can go live as published.
The client also still needs to act on the live WordPress site, most urgently
issue 0, then issues 1 and 2, then issue 40, which is now sending link equity to
a competing gym.

---

## Most urgent — act on this before anything else

### 0. A post tells readers the gym carries no risk of concussion or brain injury — CONTENT (accuracy), LIABILITY — **URGENT**

`/types-of-sambo/`, in the paragraph under the H3 **"Safe, Controlled and
Professional Training Environment"**, publishes these four sentences:

> Concussion risk none. Brain injuries stay out. Brain damage no chance. Head
> trauma camp free.

This is a medical safety guarantee. It tells a prospective student — or a parent
reading on behalf of a child — that training at this gym cannot cause a
concussion, a brain injury or head trauma. No combat-sports gym on earth can
promise that, and the same page contradicts it: the paragraph these four
sentences sit inside also says "Head strikes helmet on", "Strikes to the head
glove catch", "Blows to the head ref call" and "Head shots body lead", and the
page elsewhere carries "Concussion real none", "Concussion beginner none",
"Brain injuries train smart" and "Head trauma performance safe" — the same claim
restated eight more times in degraded form.

It also contradicts the rest of the site. `/muay-thai-gear-for-safety/` exists
to tell readers that head protection matters and that gear is what keeps them
safe; `/mixed-martial-arts-training-gloves/` is a buying guide premised on
impact being real. One page sells protective equipment on the grounds that
strikes to the head are dangerous, and another promises that at this gym they
are not.

**Affected:** 1 page, `/types-of-sambo/`.

**Why it matters:** this is not a typo or an SEO problem. It is a written
representation about physical safety, made to consumers, by a business that
teaches striking to adults and children. If a student is concussed in a class at
this gym, this sentence is the first thing a lawyer will put in front of a jury,
and it is on the client's own domain in the client's own words. It is also the
kind of claim a regulator or a platform treats as a false health claim
regardless of intent.

**Status in the rebuild: OMITTED.** `dist/types-of-sambo.html` reproduces that
section's heading and every other sentence in it verbatim, and leaves an HTML
comment where the four sentences were:

```html
<!-- HELD: false head-injury safety claim, see client-site-issues.md,
     awaiting client decision before publication -->
```

Nothing was paraphrased, softened or substituted in their place — the gap is
literal, and the eight restatements elsewhere on the page are still there,
reproduced as published, because removing those is a content decision the client
has not been asked for yet.

**What to do:** remove these four sentences from the live page immediately —
before the malware, because this one is a statement the business is answerable
for, and deleting it takes one edit. Then decide what the section should say
instead; if the intent was that sparring is controlled and head contact is
limited, that can be said truthfully. Then tell us whether to publish the
rebuilt page with the gap, with replacement copy you approve, or with the
original sentences restored. Until then the rebuilt page is accurate but
incomplete by design. The eight restatements elsewhere on the page need the same
decision.

---

## Summary

| # | Issue | Tag | Pages affected | Priority |
|---|---|---|---|---|
| 0 | A post promising no concussion, brain-injury or head-trauma risk — **omitted from the rebuild, awaiting the client's decision** | CONTENT (accuracy), LIABILITY | 1 | **URGENT** |
| 1 | Hidden casino spam links injected into every page | SECURITY | all 86 | Urgent |
| 2 | Wrong phone number on every tap-to-call link | CONTENT | all 86 | Urgent |
| 3 | Kids FAQ copied onto adult and teen BJJ pages | CONTENT | 2 | High |
| 4 | Broken `%…%` page title (template bug, recurring) | SEO | 2 | High |
| 5 | Internal links pointing at the wrong post, six at wp-admin screens | SEO | 8 | High |
| 6 | Two separate Kali Sticks posts | SEO | 2 | High |
| 7 | Near-duplicate posts competing for the same searches: seven on one question, six on Muay Boran, four on belt ranks, three on Sambo, two on gear | SEO | 41 | **CRITICAL** |
| 8 | "Contact us" links that go to the Teen BJJ page | CONTENT | 2 | Medium |
| 9 | Same generic FAQ reused on 13 posts | SEO, CONTENT | 13 | Medium |
| 10 | Outbound links to unrelated, weak or foreign-language sources, one to an American-football article | SEO, CONTENT | 33 | **High** |
| 11 | Blurry, upscaled featured images, and three sizes on one page | SEO | 3 | Medium |
| 12 | AI-tool markup pasted into posts: ChatGPT, and now DeepSeek | CONTENT | 4 | Medium |
| 13 | "Table" placeholder text left above tables | CONTENT | 4 | Medium |
| 14 | Orlando post targets a city 1,100 miles away; reviews placing a Texas gym across the USA and now in the UK | GEOGRAPHIC TARGETING | 8 | **CRITICAL** |
| 15 | Duplicated and near-identical headings and captions | SEO, CONTENT | 9 | Medium |
| 16 | Empty headings | SEO | 3 | Low |
| 17 | Spelling errors, garbled headings, keyword-crammed headings and the opening conjunction deleted 21 times | CONTENT | 35 | **High** |
| 18 | Image alt text typos, scrambled descriptions, the brand run together, and trailing whitespace | SEO | 12 | Low |
| 19 | Duplicate WordPress tags | SEO | 2 | Low |
| 20 | Published and modified dates that disagree | SEO | 11 | Low — to confirm |
| 21 | Numbered list skips a number | CONTENT | 1 | Low |
| 22 | Editing notes, level markers and layout instructions left inside visible headings | CONTENT, SEO | 7 | **High** |
| 23 | Heading level skipped (H4 with no H3 above it) | SEO | 1 | Low |
| 24 | Two "Martial Arts Classes" posts, one with a `-2` URL | SEO | 2 | High |
| 25 | YouTube video that never loads, bare link shown instead | CONTENT | 1 | Medium |
| 26 | Poor image filenames: reused, WhatsApp exports, misspelt, duplicated, or a bare number | CONTENT (asset management) | 22 | Low |
| 27 | Gi sizing chart has overlapping height ranges | CONTENT | 1 | Medium |
| 28 | A post with no H2 headings at all | SEO | 1 | Medium |
| 29 | Content duplicated inside a post: a whole article on one, a whole section on another | CONTENT, SEO | 2 | High |
| 30 | Bad tags: zero-width spaces, misspellings, tags for arts the gym does not teach, and six tags about the wrong subject | SEO | 20 | **High** |
| 31 | Self-defence, weapon-law, street-fighting and injury-risk content with no disclaimer | CONTENT | 7 | **High — liability** |
| 32 | Testimonials that cannot be verified, one set that clearly can, and a second set now on six posts | CONTENT | 38 | Low — for the client to decide |
| 33 | The brand name written eleven different ways, and the head coach's name two ways across five posts | CONTENT, SEO | 18 | **High** |
| 34 | WordPress editor markup published in a page heading | SEO, CONTENT | 1 | Medium |
| 35 | Weight chart figures that disagree with each other | CONTENT | 1 | Medium — to verify |
| 36 | A four-letter acronym that spells nothing | CONTENT | 1 | Low |
| 37 | Two paragraphs run together, and a Muay Thai post that closes about MMA | CONTENT | 1 | Low |
| 38 | Document outline breaks: half a post sits under a heading it has nothing to do with | SEO, CONTENT | 1 | Medium |
| 39 | Posts advertising classes, perks, awards and certified instructors the gym may not have, including a Sambo academy | CONTENT (accuracy, trademark) | 23 | **CRITICAL — client must confirm** |
| 58 | British and American spellings of "defence" used across the site, inside one page, and inside one tag list | CONTENT, SEO | 14 | Medium |
| 59 | A "Follow Us" section linking one platform | CONTENT | 15 | Low |
| 64 | An auto-linking plugin that cuts words in half, wraps whole clauses, and has now linked the same review on six pages | SEO, CONTENT | 10 | **High** |
| 62 | Unnamed "experts" cited as authority, sourceless attributions, and unspecified "studies" credited to a federation | CONTENT (accuracy), SEO | 5 | **High** |
| 63 | A 7,000-word article with three images and five wall-of-text tables | CONTENT, UX | 1 | Medium |
| 61 | A competitor's brand name published as a tag | SEO, LEGAL (trademark) | 1 | **High** |
| 40 | Invisible ChatGPT citation links, one to a competing gym | SEO, ACCESSIBILITY, CONTENT | 6 posts, 19 links | **CRITICAL** |
| 41 | A page whose title promises techniques and whose content is about confidence | SEO | 1 | Medium |
| 42 | FAQ questions published as section headings, competing with the page's own FAQ | SEO, CONTENT | 5 | Medium |
| 43 | A broken image: the page links a file that is not in the media library | CONTENT | 1 | Medium |
| 44 | The same topic published under two URL spellings, kick-boxing and kickboxing | SEO | 4 | Medium |
| 45 | A "Top 9" list that contains the same technique twice | CONTENT | 1 | Medium |
| 46 | A whole article section published inside a table caption | CONTENT, SEO, ACCESSIBILITY | 1 | Medium |
| 47 | Step-by-step instruction for a strike banned in every combat sport | CONTENT | 1 | **High — liability and reputation** |
| 48 | Pricing sections that name no price — one post prints three, the rest promise "value" | CONTENT (accuracy), TRUST | 11 | **CRITICAL** |
| 49 | A map embed that overflows on a phone | CONTENT, ACCESSIBILITY | 8 | Low |
| 60 | A whole page advertising a class the homepage says has not launched | CONTENT (accuracy) | 2 | **CRITICAL — client must confirm** |
| 50 | Eleven "near me" pages competing for the same local searches, including four for one discipline | SEO | 11 | **CRITICAL** |
| 51 | Tags aimed at firefighting and at street violence, on a school that teaches children | SEO, CONTENT (reputation) | 1 | **High** |
| 52 | Comparison sections against competitors — one names two local businesses and publishes their prices | CONTENT (accuracy), LEGAL | 5 | **CRITICAL** |
| 53 | A single-location gym advertising students "Across the USA" | GEOGRAPHIC TARGETING, CONTENT | 2 | **High** |
| 54 | Subheadings published as bold paragraphs: bullets on one post, numbers on another | SEO, ACCESSIBILITY | 2 | Medium |
| 55 | Two pages advertising two different discount schemes | CONTENT (accuracy), TRUST | 2 | **High — client must confirm** |
| 56 | A nine-page local set that is inconsistent with itself, three now missing the pricing section the others have | CONTENT, SEO | 9 | Medium |
| 57 | Four blog pages and three program pages chasing the same BJJ local search | SEO | 7 | **CRITICAL** |
| 65 | A "Top Ten Martial Arts" list that is five disciplines counted twice | CONTENT (accuracy), SEO | 1 | **High** |
| 66 | Two WordPress placeholder pages, live and indexable, linked from a published article | SEO, CONTENT | 3 | **High** |
| 67 | A conclusion written as keyword salad rather than English | CONTENT, SEO | 1 | **High** |
| 68 | A published URL that misspells its own keyword | SEO | 1 | Medium |
| 69 | A minimum age that contradicts the gym's own programme, its own page and its own tags | CONTENT (accuracy) | 1 | **High** |
| 70 | An AI generation timestamp published in the article body | CONTENT | 1 | **High** |
| 71 | A local-intent page whose H1 and tags omit the city entirely, and a city name lower-cased in the title | SEO | 1 | Medium |
| 72 | Belt-rank timeframes that describe years of training where the real criteria are age-based | CONTENT (accuracy) | 1 | Medium — to verify |
| 73 | Private coaching advertised on three pages in three different forms, and on no programme page | CONTENT (accuracy) | 3 | **High — client must confirm** |
| 74 | A post that sells eight products the site has no shop for, and contradicts its own twin | CONTENT (accuracy), TRUST | 2 | **CRITICAL — client must confirm** |
| 75 | Six tags about gym bags on a post about protective gear | SEO | 1 | **High** |
| 76 | A whole 3,449-word article written as two- and three-word fragments, not sentences | CONTENT, SEO | 1 | **CRITICAL** |
| 77 | An eight-question FAQ where six questions are about boxing, on a Sambo post | SEO, CONTENT | 1 | **High** |
| 78 | A local-intent post that publishes no address, on a site where every other post does | SEO (local), CONTENT | 1 | Medium |

**79 issues in total, numbered 0–78.** Issue 0 is the only one the rebuild does
not reproduce.

---

## SECURITY

### 1. Hidden casino spam links injected into every page — SECURITY — Urgent

Every one of the 63 pages checked contains a block of links to French online
casino sites. It sits just inside `<body>`, above the header, in an element
pushed off-screen with `position:absolute; left:-35255px` so visitors never see
it. Search engines do.

Domains linked:
`shinywilds-fr.fr`, `blitzcasino.org`, `oscarspinfr.fr`, `quickwin-casino.app`,
`rizzcasino-fr.net`, `spin-million.com`, `cashedcasinoligne.fr`,
`fr-winmachancecasino.com`

**Affected:** all 63 pages checked — homepage, all 5 program pages, all 57 posts.

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

**Affected:** all 63 pages. It appears twice on the homepage and on each blog
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

### 12. AI-tool markup pasted into posts: ChatGPT, and now DeepSeek — CONTENT — Medium

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

**A different AI tool, on `/martial-arts-gyms-near-me/`.** All five FAQ answers
on the site's newest post are wrapped in `<p class="ds-markdown-paragraph">`.
That class is **DeepSeek's** markdown renderer, not ChatGPT's — a different
assistant, the same copy-paste route, four months later.

The same five answers also carry the structural debris that comes with pasting
rendered markdown into a rich-text field:

| Answer | What came with it |
|---|---|
| 2 | An empty ordered list after the text: `<ol start="1"><li> </li></ol>` |
| 3 | The **entire answer** wrapped in a one-item `<ol>`, so it renders as a numbered "1." for no reason, followed by an empty paragraph |
| 4, 5 | A trailing empty `<p> </p>` |

Answer 3 is the visible one: a reader sees a numbered list of one item where the
other four answers are plain paragraphs.

**Why the second tool matters more than the first.** One post drafted in ChatGPT
is a shortcut. Two different assistants leaving their own markup across four
posts, five months apart, is the drafting process. Taken with the untranslated
"Ka" (issue 17) and the unreviewed headings across the "near me" set, the
picture is consistent: text is being generated elsewhere and pasted in without a
read-through.

**What to do:** re-paste those passages as plain text, and paste future answers
through a plain-text editor so the wrapper classes and empty list items are
stripped. Then delete the stray `<ol>` in FAQ answers 2 and 3 on
`/martial-arts-gyms-near-me/`.

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

### 17. Spelling errors, garbled headings and one untranslated Hindi/Urdu word — CONTENT — Medium

| Post | Error |
|---|---|
| `/nogi-brazilian-jiu-jitsu/` | "Mixed **Martials** Arts (MMA)?" |
| `/brazilian-jiu-jitsu-belt-ranks/` | "Promotion in Brazilian Jiu Jitsu Belt Ranks **Brazillian** Arts Globally" — misspelled and garbled; "Progress with **Degreed** or the Honorary Red Belt" |
| `/brazilian-jiu-jitsu-mat/` | "Choosing Suitable Mats for Sale Brazilian Jiu Jitsu" — garbled keyword phrase |
| `/martial-arts-classes-2/` | FAQ answer: "both **May Thai** and Brazilian Jiu-Jitsu classes" |
| `/mixed-martial-arts-brands/` | "Mixed Martial Arts **Brands Brands** vs Traditional Martial Arts Brands" — a duplicated word, see below |
| `/muay-thai-punching-bag/` | "**Alao** Read Our Article:" (for "Also") |
| `/muay-thai-stance/` | "**Contect** Us:" |
| `/jiu-jitsu-near-me/` | The H1 reads "**Jiu jitsu** Near Me with Caring Coaches and **Budget friendly**" — "jitsu" and "friendly" both lowercase, and the sentence stops without a noun, so it ends on an adjective that modifies nothing. It is the page title a searcher sees. One H3, "Options for All Levels  Beginner to Advanced", keeps a space, a non-breaking space and another space where its separator was deleted |
| `/mae-mai-muay-thai-what-is-it/` | The opening H2 reads "What Is Mae Mai **muay thai** **?**" — the subject in lowercase mid-heading, and a space before the question mark, in the first section of the article. "What **defines** Luk Mai from Mae Mai?" uses the wrong verb, where "distinguishes" or "separates" is meant. "Why Choose Sixth Sense MMA **Trusted** Partner" is missing its separator. The fifteen technique names all put a space before their colon — "Salab Fan Pla **:**" — the same French convention as `/10-muay-boran-techniques/`, and the page carries 28 narrow no-break spaces inside "Mae Mai" itself, as `/muay-chaiya/` does inside "Muay Chaiya" |
| `/kidney-punch/` | The H1 reads "Kidney Punch **,** How It Works, Why It Hurts & Its Legality" — a space before the comma, French convention again, in the single most visible line on the page and in every search result for it. The closing H2, "SixthSense MMA **Where** Fighters Train Safely & Legally", is missing its separator |
| `/muay-chaiya/` | "Techniques & Training **Drill**" is singular where the plural belongs, and the page is threaded with **28 narrow no-break spaces** (U+202F) — a character almost nothing types deliberately — inside "Muay Chaiya", "Wai Khru" and "pra jiad", alongside 22 ordinary no-break spaces. They are invisible on screen but they sit inside the site's own primary keyword, so "Muay Chaiya" in a heading is not the same string as "Muay Chaiya" typed normally. Anyone searching the site's content for the phrase, or matching it programmatically, will miss those instances |
| `/10-muay-boran-techniques/` | Six H3s put a **space before the colon** — "Mae Mai :", "Look Mai :", "Muay Chaiya :", "Muay Korat :", "Muay Lopburi :", "Muay Thasao :" — which is French typographic convention, not English. Four of them end at the bare colon with nothing after it, so they read as labels with their content missing. Two also carry a stray non-breaking space after the colon. "Why Nine Limbs Is Important for Muay Boran**?**" is a statement punctuated as a question, "Highlighted Look Mai **include**:" does not agree with its subject, and "Learn These Techniques at SixthSense **Real** Training, Real Skills" is missing a separator, with two more non-breaking spaces at its end |
| `/neck-bridges/` | Four errors in the headings of one post. "Where Can You Learn **This** Neck Bridges Safely?" — singular determiner, plural noun. "**TOp**  Neck bridge  Exercises" — a capital in the wrong place, plus a non-breaking space in both gaps. "Training Plan & Progressions with trusted **parnter** sixth sense mma" — "partner" misspelt, and the brand in lowercase, in an H2. "**Way** & Wall Assisted Bridges" — "Way" where the sentence wants nothing, or "Wall" written twice. The leaked "H2:" marker on the same post is logged under issue 22 |
| `/mma-fighting-styles/` | The contact block prints "📧 **Email**: **[**info@sixthsensemma.com" — an opening square bracket that is never closed, sitting in front of the address, so the email reads as "[info@…". Two sentences in the weight-classes intro also run together without their spaces: "divided into divisions according to weight range.**To** guarantee fair matches" and "compete in weight based classes.**Here's** a breakdown". The claim under the men's list is garbled too: "eight official men's divisions in UFC––minus the combined divisions shared with women (fly, bantam, featherweight)", which is not how the UFC's divisions work — men's and women's flyweight, bantamweight and featherweight are separate divisions, not shared ones |
| `/are-there-multiple-styles-of-muay-boran/` | A regional style is published as "**Muay Lopbur**", missing its final letter — and the post's own FAQ spells it "Muay Lopburi" correctly two screens further down, as does `/muay-thai-muay-boran/`, so the page contradicts itself. A section heading reads "**Why choose  sixth sense mma is  trusted partner**": the brand in lowercase, "is" where "is your" belongs, and a non-breaking space in two of its gaps. Two sentences also run together without their spaces — "authentic Muay Boran training.**you** can contact us" and "more than just **skillit** builds character" |
| `/is-tai-chi-a-martial-art/` | The same separator loss, four more times: "Tai Chi Basics A Deeper Look Into the Practice" and "Competitive Tai Chi Is It Also a Sport?" each keep a non-breaking space plus a space where a colon was deleted, while "Where Tai Chi Comes From A Look at Its Origins" and "Different Styles of Tai Chi From Chen to Sun" have nothing at all. A sub-heading reads "Effectiveness in practical combat **scenario**", missing its plural. One H2 begins with a telephone emoji, "**📞**Ready to Take a Martial Approach to Learning Tai Chi?", and another lowercases its own subject, "Can older persons and children do **tai chi**?" |
| `/is-wrestling-a-martial-art/` | Four headings on one post lost their punctuation. "Core Traits of Martial Arts **(**Discipline, Defense, Philosophy" opens a bracket and never closes it. "Rules Techniques and Objectives" has lost both commas. "Wrestling vs Martial Arts The Comparison" and "Wrestling vs Sambo Technical Comparison" each have a space followed by a **non-breaking space** where a dash or colon was deleted, so they read as a double gap on screen — the same deletion pattern as `/jiu-jitsu-guard-position/` above, which suggests a find-and-replace that stripped separators across several posts |
| `/muay-thai-fighting-stance/` | Two sentences run on with no punctuation at the join: "helping students master the art of Muay Thai **With** a strong focus on fundamentals especially the Muay Thai fighting stance **we** provide structured, high-quality training" (two missing commas or full stops in one sentence), and "Click the button below to contact us directly **let's** talk training" |
| `/sambo-techniques/` | **The dropped opening conjunction, thirteen times on one page — the largest concentration in the project.** Every instance is an "X or Y" construction missing its "Whether": "**You are** into MMA judo or just curious about combat sports sambo's practical approach grabs attention", "**You are** training at a sambo academy or watching sambo events the focus is on skills that work in real life", "**You are** using a hip throw or submission techniques you adjust to the situation", "Ground control is key **You are** aiming for a pin in sport sambo or a quick submission in military sambo", "**You are** a beginner or seasoned sambo training pushes your body to new levels", "**You are** eyeing sport sambo or combat sambo here's why it's a great pick", "**You are** new or seasoned they craft custom plans to match your pace", "Their approach builds confidence **You are** aiming for a local match or just want solid self-defense skills", "**You are** into freestyle sambo or eyeing world championships the support system pushes you to improve", "You'll feel at home **You are** rolling on mats or chatting post-class", "**You are** mastering hip throws leg locks or ground control at a sambo academy", "**You are** a beginner or chasing world championships", plus one more. **"Whether" is used correctly five times on the same page**, which rules out vocabulary and leaves a find-and-replace or a truncation in whatever produced the draft. Across four posts the count is now **21 instances** — 13 here, 5 on `/muay-boran/`, 2 on `/martial-arts-near-me-classes/` and 1 on `/martial-arts-for-kids-strenght/` — all published between 17 and 21 October. **Raised to High:** at this volume it is not a typo pattern, it is a broken process, and one search for "You are" followed by an "or" clause finds every instance |
| `/martial-arts-for-self-defense/` | **Two H2s with the keyword phrase crammed in, one of them mid-sentence-capitalised.** "Steps to Find the Right **Martial Arts for Self Defense** Style for You" reads as two headings spliced together — the phrase is wedged between "Right" and "Style", where a writer would have put one or the other. "Why Train at Sixth Sense MMA **For** Martial Arts for Self Defense" capitalises "For" mid-heading and then repeats the phrase a second time in the same sentence. Both are in the table of contents. The first H3 also keeps a **trailing no-break space** inside the heading, "Handling Close-Range Threats&nbsp;", and the body drops the comma after the town: "Tucked in **Coppell Texas** this place focuses on brazilian jiu-jitsu". One quotation also carries a space before its closing mark: the "art of eight limbs **”**" |
| `/martial-arts-near-me-classes/` | **The third post in a row with the same fault**, published 25 minutes after the one below it: "**You are looking to get back in shape** or teach your family safety skills these programs work for all ages" and "**You are after self-defense skills** or just a way to build character our certified instructors make it happen" both need "Whether" in front. The word does appear once elsewhere on the page, so the drafting process can produce it — it is being dropped, not absent from the vocabulary. Three posts, eight sentences, all published between 17 and 18 October |
| `/martial-arts-for-kids-strenght/` | **The same fault as `/muay-boran/` below, on the post published the next day, and it starts in the opening sentence:** "**You're wondering what martial arts for kids is all about you're in the right spot**" needs "If" in front of it. The article's very first line reads as a sentence beginning halfway through. Together with the five on `/muay-boran/`, this is now a pattern rather than a slip: the leading conjunction of an "If X, then Y" or "Whether X or Y" construction is being dropped by whatever produces these drafts, and nobody reads the first line back |
| `/muay-boran/` | **The word "Whether" has been deleted from the front of five separate sentences**, each of which is an "X or Y" construction that cannot stand without it: "**you're into martial arts** or just curious these techniques show the depth of muay boran", "**you want to stay fit** or learn to protect yourself muay boran delivers", "**you prefer a defensive approach** or raw power there's something for everyone", "**you're kicking a bag** or practicing grapples it's all about growth", and "**it's mastering strikes** or joining our Coppell community the ride's been eye-opening". The word appears **nowhere on the page**, which rules out a typo and points at a find-and-replace or a truncation in whatever produced the draft. Each one reads as a sentence that starts in the middle. Two paragraphs also run together with no full stop: "our classes stand out with personal **attentionOur** free trial waits" |
| `/best-self-defense/` | The page's **first H2 has its words the wrong way round**: "**Best self defense for Martial Arts**", where the sentence wants "Best Martial Arts for Self Defense". As written it says the martial arts are being defended against, and it drops into lower case mid-heading ("self defense") while capitalising "Martial Arts" after it. It is the opening section heading of the article, it is in the table of contents, and it is the phrase the page is built to rank for — the H1 two lines above it gets the same words the right way round. One paragraph below also runs two sentences together with no space at the join: "even if they're larger or **stronger.By** mastering these techniques" |
| `/muay-thai-backpack/` | Section heading "**Mouthguar**" — the final letter is missing from "Mouthguard". It is one of eight parallel gear headings, so the slip sits next to seven correct ones, and it heads the section a reader searching for mouthguards would land on |
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

**A word left in the wrong language entirely, on `/fight-training-near-me/`.**
One of its H3s reads:

> Physical Fitness + Mental Strength **Ka** Combination

"Ka" is the Hindi and Urdu possessive particle, roughly "of". The heading was
evidently composed as "Physical Fitness + Mental Strength **ka** Combination" —
half English, half Hindi/Urdu — and published without anyone reading it back. It
is not a typo, a brand name or a martial-arts term; it is a word from another
language sitting in an English heading on a US business's website.

**Why this one matters more than the spelling errors above.** Every other entry
in this issue is a slip of the keyboard. This one is evidence about *how* the
content is being produced: drafted by someone thinking in another language, or
run through a machine translator, and then published with no review pass. That
reframes the rest of this log — the run-together sentences (issue 37), the
missing words, the garbled word order, and the headings with no separator before
their second clause. They are not twenty unrelated typos. They are one
unreviewed pipeline.

The same page carries four more in its headings alone:

| Heading as published | What is wrong |
|---|---|
| Looking for "Fight Training Near Me"? **Sixth sense mma has covered** | The brand is lower case, and "you" is missing: it should read "has you covered" |
| Location Convenience Matters **of** Sixth Sense MMA | Word order reversed |
| Our Training Style **Discipline**, Strategy & Support — and How to Join SixthSense MMA **Simple** Steps | No separator, a colon or a dash, before the second clause |
| **Customers** Reviews: | Should be "Customer Reviews" |

**The same pattern again on `/bjj-classes-near-me/`, published hours later.** Two
of its eight H2s carry errors a proofreader would catch on the first pass:

| Heading as published | What is wrong |
|---|---|
| "What **is** BJJ classes **?**" | Subject-verb disagreement — "is" for "are" — and a space before the question mark, which is French typographic convention, not English |
| "Why Choose SixthSense MMA for **BJ** Classes Near You" | "BJ" for "BJJ". A letter is missing from the site's own primary keyword, in a heading, on a page about BJJ |

The **BJ** one is the more damaging of the two. It is an H2 on a page whose
entire purpose is to rank for "BJJ classes near me", so the keyword is
misspelt in one of the strongest on-page signals Google reads — and "BJ" carries
an unrelated meaning that a school marketing to children does not want beside
its brand name in a search result.

Five of its H3s also run two clauses together with no separator, the same habit
as the page before it: "BJJ vs. MMA **Which** One Fits You Better?", "Our Unique
Coaching Method **Focused**, Respectful, Real", "Transparent Pricing **No**
Hidden Fees", "Free First Class **Come** See for Yourself", and "Small Class
Sizes, Big Impact: One on One Attention".

**And again on `/martial-arts-gyms-near-me/`.** Its second H2 is "**What is**
martial arts**?**" — the same subject-verb disagreement as the BJJ page's "What
is BJJ classes ?", with "martial arts" in lower case in a heading where every
other noun is capitalised. Two of its H3s run their clauses together across a
no-break space — "Muay Thai⁠ The Art of Eight Limbs" and "Transparent Plans⁠ No
Hidden Charges" — and its H2 "Facility Tour What to Expect at SixthSense MMA"
does the same with an ordinary space.

The H1 itself has one: "Martial Arts Gyms Near **me** with Real Coaching and
Care" — title case for every word except "me". That is the page's single most
visible line of text and the one Google shows in the tab.

**A whole word missing from a heading, on `/mma-gyms-near-me/`.** Its fourth H2
reads:

> Why Choosing the Right MMA Gyms **Near** Isn't Just About Location

The word "Me" is absent after "Near". The heading is built on the page's own
primary keyword, "MMA gyms near me", and the keyword is incomplete in it.

The same post's H1 is "MMA Gyms Near **me** Giving **free** Trials and **Real
results**" — three words in the wrong case in one title, in two directions: "me"
and "free" lower case where the rest is title case, and "Real" capitalised while
"results" is not. Six of its headings run two clauses together with no separator
("Sixth Sense MMA Where Expertise Meets Real Community", "Trial Classes Are Free
Try Before You Commit", and four more), and one FAQ question is published as
"**hat** community aspects make SixthSense MMA stand out?" — the W is missing
from "What", so a question in the site's structured data begins mid-word.

Three of its nine testimonials also carry the same lack of a read-through: two
names are lower case ("**jansen** J., 27", "**danial** M., 32") and a third is
garbled across a tag boundary — "**kalin ssan** K., Jiu-Jitsu Competitor",
where "kalin" sits outside the bold tag that holds "ssan K.".

**A missing noun, and two words fused together, on `/mixed-martial-arts-near-me/`.**
Its fourth H2 reads:

> What Makes a Great **MMA** Near You?

A great MMA *what*? The noun — "gym" — is absent, so the heading asks an
incomplete question. This is the second heading in two days built on the site's
own keyword with a word missing from it, after "MMA Gyms **Near** Isn't Just
About Location" on `/mma-gyms-near-me/`.

Its second H2 writes the brand as "SixthSense **mma** has you covered" — the
suffix in lower case inside a heading that capitalises the rest of the name
correctly. And in the body:

> There are no hidden fees or confusing **contractsjust** honest coaching…

"contracts" and "just" are fused with no space and no punctuation between them —
in the sentence that makes the page's contractual claim.

The H1 continues the case problem: "Mixed Martial Arts **near me** with Proven
Real **results**" — two phrases in lower case in a title that capitalises
everything else, on the third consecutive post to do it.

**A fourth H1 with the same case problem, on `/brazilian-jiu-jitsu-near-me/`:**

> Brazilian Jiu Jitsu **near me Join now** with Flexible Pricing

Two phrases in lower case, and no punctuation at all between "me" and "Join", so
the title runs two sentences together. Four consecutive posts have now published
an H1 with the same fault.

Its H2 "How to Join a Brazilian Jiu Jitsu Class Near You **in** sixth sense mma"
uses "in" where English wants "at", and three of its H3s run clauses together
with no separator: "Personalized Training Plans **Not** One Size Fits All",
"Real Sparring, Real Growth **Safely**", "No Pressure, No Contracts **Just**
Progress".

**What to do:** this is the point to stop fixing individual typos and put a
proofreading step in front of publication. Whoever is drafting should have a
native English reader check each post before it goes live. Then correct these
headings, starting with "BJ Classes", the missing words, the missing "W" in the
FAQ question, "contractsjust", and the lower-case words in all four H1s.

### 33. The brand name written nine different ways, one of them in a page title — CONTENT, SEO — **High**

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

**A second post, with four spellings on one page.** `/muay-thai-muay-boran/`
manages to write the name four different ways:

| Form | Where |
|---|---|
| **sixthsensemma** (run together, lowercase) | H2: "Train Muay Thai Muay Boran the Right Way at sixthsensemma" |
| **sixth sense mma** (lowercase, spaced) | Alt text of the "Fist, Elbow, Knee, and Shin Use" image |
| **sixthsense mma** (half run together) | Alt text of the "Regional Styles" image |
| **Sixth Sense MMA** (correct) | Two headings and the body text |

So across these two posts the business name appears as "sixth sense mma",
"sixthsensemma", "sixthsense mma" and "Sixth Sense MMA", with the wrong forms in
section headings both times.

**A third post, mixing two spellings in three lines.** `/muay-thai-backpack/`
gets the name right in both of its headings — "Contact Sixth Sense MMA – We're
Here to Help" and "Why Choose Sixth Sense MMA?" — then writes it **"sixth sense
mma"**, in bold, in the first sentence under the second of them: "At **sixth
sense mma**, we care about quality, comfort, and your training needs." The
lowercase form is the emphasised text directly below a correctly-cased heading.

**`/10-muay-boran-techniques/` uses "SixthSense" seven times** and never writes
the name correctly, including in the H2 that closes the article ("Learn These
Techniques at **SixthSense** Real Training, Real Skills") and in a review it
quotes. No new variant, but it is now the third post in a row where the wrong
form is the only form.

**A sixth spelling, and a post that uses three of them at once.**
`/neck-bridges/` never writes the name correctly. It uses **"SixthSenseMMA"**
(five times), **"SixthSense"** (six more) and **"sixth sense mma"** (three,
including one in an H2 heading — "Training Plan & Progressions with trusted
parnter **sixth sense mma**"). Three variants on one page, none of them right.

That brings the site's total to six: **Sixth Sense MMA**, **sixth sense mma**,
**sixthsensemma**, **sixthsense mma**, **SixthSense** and **SixthSenseMMA**.

**A fifth spelling: "SixthSense", run together.** `/mma-fighting-styles/` uses
it **seven times** and never once writes the name correctly — not in the body,
not in the headings, not in the reviews it quotes:

| Where | Text as published |
|---|---|
| H2 | "Real MMA Training in Every Style at **SixthSense**" |
| H3 | "Why Choose **SixthSense** MMA Real Benefits We Offer" |
| Review | "**SixthSense** MMA made it possible." |
| Review | "Training at **SixthSense** changed my life." |
| Review | "**SixthSense** MMA taught him focus, discipline, and self control." |

So the site now writes its own name five ways: **Sixth Sense MMA**, **sixth
sense mma**, **sixthsensemma**, **sixthsense mma** and **SixthSense**. This post
is the first where the wrong form is the *only* form, which means a reader who
arrives here never sees the name spelled correctly.

**A seventh post, in a section heading, with the grammar broken too.**
`/are-there-multiple-styles-of-muay-boran/` heads its sales section "Why choose
**sixth sense mma** is trusted partner" — lowercase brand, and a sentence that
never resolves ("is trusted partner" for "is your trusted partner"). The
paragraph directly beneath it opens "**Sixth Sense MMA** isn't a typical gym",
correctly cased, so the two sit one line apart. The heading is the more visible
of the two.

**A sixth post, three times in body copy.** `/is-tai-chi-a-martial-art/` gets
the name right in its three section headings and wrong in the three sentences
underneath them: "At **sixth sense mma** , we strip away the myths", "At **sixth
sense mma** , we bridge tradition with…" and "Sites like **sixth sense mma** dive
deeper". Both of the first two also put a space before the comma. So the page
writes the brand correctly three times and incorrectly three times, and the
wrong version is always the one in the sentence a reader actually reads.

**A fifth post, in alt text twice.** `/muay-thai-thai-boxing/` writes the name
correctly nine times in its copy, then lowercase in both of its in-article image
descriptions: "Mental Toughness and Muay Thai: Strengthening Your Mind **sixth
sense mma**" and "Getting Started with Muay Thai Building Confidence from Day
One **sixth sense mma**". Alt text is exactly where these keep hiding — the same
slip as on `/muay-thai-muay-boran/`.

**A fourth post, where the brand is also the broken link.** On
`/is-wrestling-a-martial-art/` the Contact Us paragraph reads "Reach out to us
today via **sixth sense mma** to explore our classes" — lowercase, and
underlined with a `<u>` tag so it looks like a link. It is not one: the actual
`<a>` next to it wraps a single non-breaking space (see issue 40), so the
underlined brand name is unclickable and the real link is invisible. The post
gets the name right eight other times.

**A seventh form, on `/martial-arts-gyms-near-me/`.** The pricing section opens
"At **SixthSenseMMA**, we keep our pricing transparent" — the name run together
as one word, on a page that writes it "SixthSense MMA" fifteen other times. One
page, two spellings, three paragraphs apart.

**An eighth form, and three spellings in one page's headings, on
`/brazilian-jiu-jitsu-near-me/`.** This post manages three different versions of
the business name across its seven H2s alone:

| H2 | Brand as written |
|---|---|
| "Looking for Brazilian Jiu Jitsu Near Me? **Sixthsense mma** What to Expect" | **Sixthsense mma** — new form: one word, one capital, lower-case suffix |
| "How to Join a Brazilian Jiu Jitsu Class Near You in **sixth sense mma**" | **sixth sense mma** — all lower case |
| "Why **SixthSense MMA** Is the Right Place to Train BJJ" | **SixthSense MMA** — the correct form |

A reader scrolling this one page sees the gym's name spelt three ways in its
section headings, which are the largest text on the page after the title. The
body adds "SixthSense" on its own, so four variants in one article.

**The worst case so far: one page writes the run-together form 31 times.**
`/types-of-sambo/` uses **SixthSenseMMA** — no spaces, three internal capitals —
**31 times** in its body copy, and the correct "Sixth Sense MMA" **5 times** on
the same page. Nearly every paragraph on the post opens with it:
"SixthSenseMMA mats clean safe", "SixthSenseMMA coaches fought cages",
"SixthSenseMMA leads sambo in Coppell TX", "SixthSenseMMA stands tall in Coppell
TX", "SixthSenseMMA turns sambo into real strength for everyone in Coppell".

This is the same eighth form already logged above, but the ratio is new: on every
earlier post the wrong spelling was the exception. Here it is the rule, 31 to 5,
and the five correct instances are the ones inside headings the template
generated. A reader who only ever lands on this page will take
"SixthSenseMMA" to be the name of the business, which is not what the homepage,
the programme pages, the footer or the Google listing say.

**The coach's name is now wrong on a second post, and the split runs across five
pages.** `/muay-thai-gear-for-safety/` writes:

> Instructors like Coach **Mattheus** keep things personal

while the five reviews on the same page write **Matheus** four times. Counting
the whole site, the body copy of two posts uses the double-T form and five posts
carry reviews using the single-T form, which is also what `/muay-boran/` uses in
its own copy when it names the coach properly.

So the correct spelling is **Matheus**, it appears correctly in every customer
review on five pages, and the gym's own writers get it wrong on two of them.
There is no clearer illustration of the absence of a style sheet than a business
misspelling its head coach while quoting customers who spell it right.

**And the head coach's name is now spelt two ways on a single page.** On
`/martial-arts-for-kids-strenght/`, the gym's own copy writes:

> Led by coach **Mattheus** Galvao these sessions help…
> Coaches like **Mattheus** Galvao bring years of hands-on…
> coaches like **Mattheus** can spot form issues…

while all five customer reviews on the same page write **Matheus**:

> "Coach **Matheus** is a jiu jitsu master from Brazil…"
> "Professor **Matheus** is amazing with the kids."

Three occurrences with a double T in the site's own words, four with a single T
in the customers'. `/muay-boran/`, published the day before, uses **Matheus**
throughout — so the correct spelling is the single T, and the page that gets it
wrong is the one the gym wrote itself.

This belongs with the brand-name problem rather than beside it: a school whose
public copy misspells its own head coach's name, in the same article where five
customers spell it correctly, has the same absence of a style sheet that
produced the ten brand variants. **Add both to the same check.**

**An eleventh form, in image alt text.** `/bjj-belt-ranks-in-coppell/` publishes
two images whose alt text ends "**by sixthsense mma**" — run together, all lower
case. See issue 18 for the detail. Eleven spellings across seventeen pages, and
this is the first one in an attribute rather than visible text, which means a
spell-check of the content would never find it.

**A tenth form, in an H2, and it is the worst-formed one yet.**
`/top-ten-martial-arts-for-self-defense/` publishes this as a section heading:

> ## Sixth Sense&nbsp; **Mma** is trusted partner for Martial Arts Excels in Self defense Training

"**Mma**" — capital M, two lower-case letters — is a spelling of the acronym
that appears nowhere else on the site. The heading also carries a **no-break
space plus an ordinary space** between "Sense" and "Mma", the separator-deletion
pattern logged at issue 17, and the sentence itself is broken twice over: no
article before "trusted partner", and a subject that changes halfway through
("Sixth Sense Mma is trusted partner for Martial Arts Excels in…").

Ten spellings now, on fifteen pages, and this one is in a heading that Google may
show as the page's answer to a query.

**A ninth form, and this one is in a `<title>` tag.**
`/best-fighting-style-for-self-defense/` is titled:

> Best Fighting Style for Self Defense at **sixth sense mma**

All lower case, in the single most visible piece of text the site produces — the
`<title>` is the blue link in the search result and the label on the browser
tab. Every other title on the site capitalises the brand. The page's own body
copy writes it "Sixth Sense MMA" correctly throughout, so the error is confined
to the one element where it is most public.

This is also the first time a brand variant has reached the title rather than a
heading or body text, which makes it the cheapest of the nine to fix and the
most worth fixing first.

**Why this moves from Medium to High.** Nine spellings across fourteen pages is
no longer a typo pattern, it is an absence of a style rule — and titles and
headings are where it does the most damage, because they are what Google shows
and what a skim-reader registers. For a local business, consistent naming is
also what ties the site to the Google Business Profile, the map pack and any
citation elsewhere; nine variants dilute all of it.

**What to do:** correct every instance to "Sixth Sense MMA" on all four posts, and
check the rest of the site for the same slip — image alt text included, since
two of these hide there. Note the site also alternates between "Sixth Sense MMA"
and "Sixth Sense Martial Arts" elsewhere; settling on one form for body copy
would be worth doing at the same time.

**In the rebuild:** every spelling is reproduced exactly as published, and the
build fails if any of them is silently corrected.

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

### 22. Editing notes, level markers and layout instructions left inside visible headings — CONTENT, SEO — **High**

A heading reads, on the page, **"H2: Picking the Most Suitable Martial Arts
Class"**. The "H2:" is a formatting note from the draft, meaning "make this a
main heading". It was pasted into the heading text instead of being removed.
Visitors see it, and search engines read it as part of the heading.

**Affected:** `/martial-arts-classes-2/`, in the "Tips for Choosing the Right
Class" section.

**What to do:** delete "H2: " from the heading. Because this suggests the post
was pasted from an outline, check the other posts for leftover markers such as
"H2:", "H3:" or "Table" (see issue 13).

**The "H2:" marker has happened again.** `/neck-bridges/` opens its article with
a heading that reads, on the page, **"H2: What Are Neck Bridges?"**. It is the
same bug as `/martial-arts-classes-2/` above, and this time it is the **first
heading a reader meets** — the section directly under the introduction, and the
first entry in the page's table of contents.

Two instances of the identical marker, on posts written months apart, means this
is not a one-off slip: the drafts are being written with "H2:" prefixes and
pasted in whole. Every post should be checked for a heading beginning "H1:",
"H2:", "H3:" or similar before anything else on this list is done, because the
check takes one search and the fix takes one keystroke each.

**A second one: "(Bullet Points)".** On `/muay-thai-vs-mma/`, a published
heading reads **"New Skills to Learn (Bullet Points)"**. "(Bullet Points)" is a
note to whoever was writing the section — *put this part in bullets* — and it
was never deleted. It sits directly beneath a heading that already says "New
Skills to Learn", so the page carries the same heading twice in a row, the
second time with the instruction still attached:

> ### New Skills to Learn
> …
> ### New Skills to Learn (Bullet Points)

Same cause as the "H2:" marker above — an outline pasted in and published
without a read-through — and it confirms the check suggested there is worth
doing across the site.

**A third: "Call to Action:".** `/which-martial-art-is-best-for-self-defence/`
publishes an H2 that reads, on the page:

> ## Call to Action:

"Call to Action" is what a copywriter calls the closing paragraph; it is not what
the section is about. The paragraph beneath it is a perfectly good CTA — "Are you
ready to take your Self Defence skills to the next level? Join Sixth Sense MMA
today…" — with a label describing its own function sitting on top of it, in the
largest text in that part of the page.

It is the same class of error as "H2:" and "(Bullet Points)": a structural note
from the draft, published as content. This one is the most visible of the three,
because it is an H2 rather than an H3 and it appears in the page's table of
contents. It is also **worse than the others for SEO**, because "Call to Action"
is the heading Google may show for that section, and nobody searches it.

Two sibling headings on the same page do something milder: "**Customer
Reviews:**" and "**Benefits:**" both end in a colon, which reads like a label
rather than a heading, though neither is a leftover instruction.

Three leftover markers now, on three posts written months apart. The check is
still one search.

**Two layout instructions from a content brief, published as headings, on one
page.** `/muay-boran/` carries both of these exactly as written:

> ## Comparing Sixth Sense MMA to Other Gyms **(Use table format)**

> ### Other Regional Variations **(Use bullets)**

These are not editing notes or level markers — they are **instructions to the
writer about what markup to use**, left in the finished headings. The first is
an H2, so it is in the page's table of contents and is a candidate for Google's
sitelinks and jump-to-section results: the phrase "(Use table format)" can
appear in a search listing.

**What makes these the most telling instances so far:** in both cases **the
writer followed the instruction**. The section under the first heading is a
table; the section under the second is a bulleted list. So the brief was read,
the instruction was carried out, and then the instruction itself was published
alongside the thing it asked for. Nobody read the page back afterwards.

That makes **four distinct kinds of leaked marker across seven posts**: heading
level markers ("H2:", twice), a format note ("(Bullet Points)", once), a section
label ("Call to Action", three times), and now layout instructions ("(Use table
format)", "(Use bullets)", twice on one page).

**The pattern is now unambiguous: content briefs are being pasted in and
published without an editing pass.** Every one of these is invisible to a
spell-checker and obvious to a reader, which is exactly what a five-minute
read-through before publishing catches.

**"Call to Action:" has happened again.** `/mma-vs-kickboxing-for-self-defense/`
publishes the identical H2 — same words, same colon, same position as the final
section before the social block. And `/best-fighting-style-for-self-defense/`
publishes it a **third** time, as an H3 and without the colon: "**Call to
Action**".

That makes four distinct leftover markers across six posts: "H2:" twice,
"(Bullet Points)" once, "Call to Action" three times. They are written months
apart by the same process, which is why the one-search check below is still the
first thing to do. Note the third instance drops the colon, so a search for
"Call to Action:" alone would miss it.

**What to do:** delete "(Bullet Points)" and merge the two sections, or give the
second one a heading that says what it actually covers. Replace **all three**
"Call to Action" headings with something a reader would search — "Start Training
in Coppell", or similar — and drop the trailing colons from "Customer Reviews:"
and "Benefits:". Search for "call to action" without the colon to catch them
all. Delete "(Use table format)" and "(Use bullets)" from the two `/muay-boran/`
headings; the markup they ask for is already there.

**One search finds all of them.** Query the post content for an opening
parenthesis or a colon immediately before a closing heading tag, plus the
literal strings "H2:", "H3:", "Use ", "Bullet" and "Call to Action". It is a
single pass over the database and it closes this issue permanently — as opposed
to finding the eighth instance on the next post.

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

### 32. Testimonials that cannot be verified, and one page's that clearly can — CONTENT — Low, for the client to decide

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

**A second set, on `/muay-thai-muay-boran/`:** five more testimonials, this time
as a bulleted list under a "Customer reviews:" heading, signed John M. (USA),
Emma L. (UK), Lucas F. (Brazil), Sophie K. (Australia) and Michael T. (Canada).
Again static text, no stars, no dates, nothing linking to a review platform.
Two of them have typing errors that suggest hasty drafting: Sophie K.'s opens
with a doubled quote mark (`""Great coaching`) and ends a sentence with two full
stops ("a deep belief of community.."), and Michael T.'s also has ".." mid-quote.
"a deep belief of community" reads oddly too.

The country labels are worth a thought of their own: a Coppell gym showing
reviews from the UK, Brazil, Australia and Canada tells a local reader nothing
about whether people near them train there. Reviews from Dallas–Fort Worth would
carry far more weight.

#### And one set that reads as genuinely real: `/which-martial-art-is-best-for-self-defence/`

This page carries **twelve** testimonials, and they are a different species from
every other set on the site. They have **full names** — Muntasir Zaman, Isabella
Barbosa, Ameera Abbasi, Ben Holland, Sana Haq, Noor Ghaffar, Sagar deep singh,
Shiraz, Adnan Sheriff, Mohammed Shaazuddin — one display name (FunDadMo, which is
exactly what a Google account looks like), **no city labels at all**, and they
say specific, checkable things:

- "The head coach **Matheus** really paid attention to small details" — the
  **only named coach anywhere in the project**, across 65 posts.
- "So excited to have a jiu jitsu gym in our neighborhood! **This is what
  Coppell needed!**" — the only review on the entire site that names the town the
  gym is actually in.
- "I had gone for a **free trial session**" — matches the offer the program pages
  make.
- "The **pricing** isn't too bad." — a customer who has been told a price, on a
  site that publishes none (issue 48).

These look like Google reviews copied across, and if they are, they are worth
more than the other forty-one combined. **The client should confirm and then link
to the Google Business Profile**, which turns unverifiable text into public
proof.

**Three problems with how they were copied, though, and one is serious.**

**1. Two reviews are visibly broken.** Isabella Barbosa's is truncated
mid-sentence and ends on an opening quote mark with nothing after it:

> "So nice space!! The staff are very friendly. I loved "

FunDadMo's has a stray extra closing quote, so the second sentence sits outside
the quotation:

> "Great hidden jiu jitsu gym for all ages, perfect for learning self defense
> techniques." The teacher is great and really knows the art."

**2. One attribution line is not a name.** Where the other eleven have a person,
the third has a sentence of marketing copy:

> **Tamires Piol is a dedicated instructor in effective martial arts for self
> defense.**
> "Great environment for kids' Jiu Jitsu and women's BJJ; the coaches provide
> excellent self defense training!"

So a reviewer's name has been replaced by a keyword-bearing sentence about an
instructor. A reader cannot tell who left that review.

**3. The reviews appear to have been edited to insert keywords, and this is the
serious one.** The phrase "**effective martial arts for self defense**" appears
inside two of the twelve, and "self defense" appears in several more in places
where it reads as inserted rather than spoken:

> "My kids love their classes. Professional and friendly instructors ensure you
> learn **effective martial arts for self defense**. Clean and well lit space."

That sentence does not read like a parent. **Editing the text of a real customer
review to insert search keywords is a different thing from writing fictional
ones** — it attributes words to a named person that they did not write. If these
came from Google, the originals are public and the difference is checkable by
anyone.

**And a fourth page, `/mma-vs-kickboxing-for-self-defense/`,** carrying the same
ten as the self-defence post, a **fifth**, `/womens-self-defense-class/`, and a
**sixth**, `/best-fighting-style-for-self-defense/`, carrying the same ten
**And the second set is now on two pages.** `/martial-arts-near-me-classes/`,
published 25 minutes after the post below, carries the identical five reviews in
the identical order. So the newer set is being re-cut across pages exactly as
the older eleven were — the practice has not changed, only the source material.

It reads better here than the eleven would have, because four of the five name
the coach and this page's whole argument is about instruction quality. But the
same caveat applies: **no source, no date, no link to the Google Business
Profile they came from.**

**The second set is now on six pages.** `/sambo-techniques/` carries the same
five reviews in the same order, with the same markup inconsistency and the same
auto-inserted link in Stacie Arce's testimonial.

**Six pages, and the mismatch is now total.** This is a 5,271-word technical
article about Russian grappling. Not one of the five reviews mentions Sambo,
grappling, throws or techniques; four are about children's classes and one about
the layout of the room. The block has no relationship to the page it sits on.

**The second set is now on five pages.** `/muay-thai-gear-for-safety/` carries
the same five reviews in the same order, with the same markup inconsistency —
four in `<blockquote>`, Kaivan Askari's in a plain paragraph — and the same
auto-inserted link in Stacie Arce's testimonial.

**Five pages, identical block, identical faults.** On a post about buying
gloves, four of the five reviews are about children's classes and none mentions
equipment, so the block is not even matched to its page any more. It is being
pasted in as furniture.

**The second set is now on four pages.** `/martial-arts-for-self-defense/`
carries the same five reviews in the same order, with the **same markup
inconsistency** as the post before it — four in `<blockquote>`, Kaivan Askari's
in a plain paragraph — and the **same auto-inserted link** inside Stacie Arce's
testimonial (issue 64).

So the inconsistency is not a one-off slip on one page; it is being copied along
with the reviews. Whatever process duplicates this block duplicates its faults
exactly, which means fixing it once in the source fixes it everywhere.

**The second set is now on three pages, and the third one publishes it with
inconsistent markup.** `/bjj-belt-ranks-in-coppell/` carries the same five
reviews in the same order, but **four of the five are wrapped in a
`<blockquote>` and the fifth, Kaivan Askari's, is a plain paragraph.** On the
page the fifth review loses the indent and styling the other four get, so it
reads as body copy rather than as a quotation.

It also carries the auto-linker damage described at issue 64: Stacie Arce's
review now contains a link she did not write.

**Three outings for this set in three weeks.** The practice logged below has not
changed — the same reviews re-cut page by page, with no source, no date and no
link to the Google Business Profile they came from. The only thing that changed
is which five.

**A second, completely different review set appears on the newest post — and it
is better than the one on the other eight.** `/martial-arts-for-kids-strenght/`
publishes five reviews, and **not one of the eleven catalogued below appears on
it**:

> **Stacie Arce** — "My son has been coming since December and grown so much.
> Coach Matheus is a jiu jitsu master from Brazil but more important than that,
> he is a skilled coach."
> **Danilo De souza** — "Family friendly and professional. My kids love Coach
> Matheus and **Coach Milly**."
> **Márcio Rabelo** · **juwaryiyya** · **Kaivan Askari**

**Why this set is better for this page.** Four of the five talk about children,
on a post about children. Three name the coach. One names a second coach,
**Milly**, who appears nowhere else on the site. And juwaryiyya's review
explains the L-shaped room that three other pages mention as a feature without
saying why it matters:

> "I also feel very comfortable as a Muslim woman because of how the room is
> shaped like an L giving privacy and comfort for sisters."

That is a specific, credible reason to choose this gym, written by a customer,
and it is on one page out of seventy-four.

**What this changes about the recommendation below.** The problem was never that
the eleven reviews are fake — it is that the same eleven are re-cut across eight
pages with no source. This page shows the alternative: **pick the reviews that
speak to each page's reader.** A second set exists, so the material is there.
Pull both sets from the Google Business Profile with a plugin that cites the
source, and match them to the page.

**And `/muay-boran/` carries none at all, which is worth noting.**
`/muay-boran/`, published 17 October, is the first post in months with **no
customer reviews section**. It is also 3,242 words and reads as the most
professional page on the site. Whatever this set of eleven testimonials is
doing for the other eight pages, the newest and best-built one does without
them — which is a useful data point for the client's decision below.

again, a **seventh**, `/best-self-defense/`, and an **eighth**,
`/top-ten-martial-arts-for-self-defense/`, both of which go back up to eleven.
Eight pages now publish subsets of one Google review set — 12, 11, 10, 10, 10,
10, 11 and 11 — re-cut each time.

The eighth republishes the two broken quotations described below **and** has one
of them turned into an advertisement link by the auto-linking plugin: half of
FunDadMo's review is clickable and points at another of the gym's articles
(issue 64). A customer's testimonial is now doing double duty as internal
linking.

**Two of the eleven on the seventh page are published broken**, and they are
broken in the copy itself, not in the rebuild:

> **Isabella Barbosa**
> "So nice space!! The staff are very friendly. I loved "

The sentence stops after "I loved", and what should be the closing quotation
mark is a second **opening** one. A named customer is quoted saying half a
sentence.

> **FunDadMo**
> "Great hidden jiu jitsu gym for all ages, perfect for learning self defense
> techniques." The teacher is great and really knows the art."

The quotation closes after "techniques", then a second sentence runs on outside
it and closes with a quotation mark that opens nothing. Both faults are
consistent with text pasted from Google and trimmed by hand.

This matters more than a typo would, because these are **real people's words
under their real names**. Publishing half of what someone said, and attaching a
stray sentence to it, is the one category of error on this site where the fix is
not optional. Both are reproduced exactly in the rebuild, because correcting a
customer's quotation is not the rebuild's call to make.

The sixth is edited again, too: Muntasir Zaman's review opens "Great gym! **I
came in** for a session today" here, where the other five publish "Great gym!
**Came in** for a session today". One word added to a named customer's words,
on one page out of six.

The women's page is the one where the reuse shows. It is about women's
self-defence, and the ten reviews it carries are the generic set: "My kids love
their classes", "Coach is super awesome… with kids", "Huge facility". **Not one
of the ten is from a woman describing a self-defence class.** A reader who has
just been told the programme is running (issue 60) is shown ten testimonials
that say nothing about it.

**The same set on a third page, edited again — which proves the point.**
`/self-defense-classes-near-me/` publishes ten of the twelve, and
`/teens-bjj-near-me/` publishes eleven: the same ten plus **Thiago Prado**. So
the set is being re-cut and re-pasted per page.

Two things confirm the editing:

**1. The keyword phrasing changes between pages.** Sana Haq's review reads
"effective martial arts for **self defense**" on two pages and "effective martial
arts for **Self-defense**" — capitalised and hyphenated — on the teens post. The
same sentence, attributed to the same person, published three ways. Whatever is
inserting these phrases is matching each page's target keyword, which is the
clearest possible evidence that customer text is being rewritten for SEO.

**2. The name-replaced-by-copy pattern repeats.** Where Tamires Piol's
attribution was a sentence of marketing copy, Thiago Prado's is too:

> **Thiago Prado specializes in teaching effective martial arts for Self-defense .**
> "I already trained with Coach Matheus when he was an instructor in Brazil and
> he is a great teacher for all ages. Without a doubt, if I had the opportunity I
> would go to the US to train with him again."

Note the space before the full stop. And note what the review itself says, which
is the most useful sentence about this gym anywhere on the site: **Coach Matheus
was an instructor in Brazil**, and a former student there rates him highly enough
to say he would fly to train with him again.

That is a credential. It is sitting in a customer quotation on one blog post,
while thirteen other posts say "certified and experienced coaches" and name
nobody (issue 39).

**What to do:** get the originals from Google Business Profile and republish them
word for word, or link to the profile and let Google show them. Restore
Isabella Barbosa's full review or remove it. Put names back where Tamires Piol's
and Thiago Prado's should be. And stop editing review text — the keyword gain is
negligible and the downside is attributing invented words to named customers,
now demonstrably three different ways on three pages.

**In the rebuild:** these five are likewise reproduced word for word, doubled
quote marks and all, with no Review schema.

**A third set, on `/muay-thai-gym-bag/`:** three reviews — Ali R. (Canada),
Maya S. (USA) and Tariq K. (UAE) — again static text with no stars, dates or
link to any review platform. Two things about them:

- **The markup is inside out.** Each reviewer's *name* sits alone in a
  `<blockquote>`, while the quotation itself is an ordinary paragraph after it.
  A blockquote should hold the quotation, with the name as its attribution.
- **None of them is about the subject of the post.** The page is a buying guide
  for gym bags; all three reviews praise the gym's training and coaches. One
  even says "I joined Sixth Sense MMA while visiting family in USA", which reads
  oddly on a US business's own site.

The post's "Real User Testimonials" section, despite its name, quotes nobody: it
is two paragraphs of "many fighters say…" with no attribution at all, which is
weaker than saying nothing.

**In the rebuild:** the three reviews are reproduced word for word with no
Review schema. The names are rendered as paragraphs rather than blockquotes,
because the site has no blockquote styling and adding some would mean new CSS.

**A fourth set, on `/muay-thai-backpack/`, with nobody's name on it.** The
"Customer Reviews" section holds three reviews, and the line above each one is
not a person but a product: "Fairtex Backpack (AB1) – Best for Daily Training",
"Venum Challenger Pro Evo – Great for Gym & Work" and "Hayabusa Ryoko
Duffel-Backpack – Ideal Hybrid Gear Bag". The reviews are written in the first
person — "I use this bag for daily training", "I've used it during travel and
long gym days" — but no reviewer is named anywhere, so the section reads as the
business reviewing products in an unnamed individual's voice. No stars, no
dates, no link to a review platform. The markup is inside out in the same way as
the gym bag post: the product name sits alone in a `<blockquote>` and the review
itself is an ordinary paragraph after it.

Worth noting separately: these are favourable reviews of three other brands'
products on a page that closes by asking the reader to buy from Sixth Sense MMA.

**In the rebuild:** the three reviews are reproduced word for word, with no
reviewer names invented, no stars added and no Review schema.

**A fifth set, on `/muay-thai-fighting-stance/`, cut off mid-sentence.** Three
reviews, signed Ali R., Zainab K. and Usman M., and every one of them is
truncated with an ellipsis where the rest of the quote should be:

> "Training at Sixth Sense MMA has completely changed my Muay Thai game…"
> — Ali R.

After each cut-off quote comes a sentence about the reviewer written in the
third person by the business ("Ali noticed real improvements in his movement and
control…"), so the page summarises a review it does not actually show. Whatever
the intention, what is published is three quotations with their endings missing.
No stars, no dates, no link to a review platform, and the first names with an
initial follow the same pattern as the Sambo set.

**In the rebuild:** reproduced exactly, ellipses and all, with no attempt to
complete the quotes and no Review schema.

**A sixth set, on `/martial-arts-kali-sticks/`.** Four testimonials, each with a
headline and a first name or an initial — Ayaan Malik, Sarah K., Junaid R. and
Aliya N. Static text again, no stars, no dates, no review platform behind them.
The markup is inconsistent even within the section: each name sits in a
`<blockquote>`, but two of the four quotations are inside that blockquote with
the name and the other two are ordinary paragraphs after it, so identical-looking
testimonials are marked up two different ways on one page.

These matter more than the others because of issue 39: they are testimonials
about Kali instruction, on a page advertising Kali classes.

**In the rebuild:** all four are reproduced word for word, with no Review schema.
The blockquotes are unwrapped and their children kept, as on the other posts,
because the site has no blockquote styling.

**An eighteenth set, on `/jiu-jitsu-near-me/` — and these are the ones to keep.**
Seven testimonials, each with a first name and a genuinely local identifier:
Jason (beginner from **Coppell**), Alicia (jiu jitsu student in **Irving**),
Malik (MMA hobbyist), Priya (grappler from **Valley Ranch**), Kevin (dad and
beginner), Leo (competitive blue belt) and Sami (21, new to Texas).

Coppell, Irving and Valley Ranch are all in the gym's actual catchment. After
seventeen sets signed from Pakistan, Sweden, Japan, France and half the United
States, this is the first that reads like it came from people who could plausibly
walk into the building. One even names the search that brought them: "I found
this spot while Googling 'jiu jitsu near me.'"

They are still unverifiable — no dates, no ratings, nothing linking to a review
platform — so the recommendation does not change: collect them on Google
Business Profile, where a Coppell name and a date are visible to everyone. But
if the client wants a model for how the written ones should read, it is this set.

**In the rebuild:** all seven are reproduced word for word, with no Review schema.

**A seventeenth set, on `/mae-mai-muay-thai-what-is-it/`, and one of them is
broken in half.** Six reviews: Adam R., **katherin.** (lowercase, with a full
stop after it), Rachel M., Daniel P., Sarah A. and Daniel  G. (two spaces before
the initial). No dates, no ratings, no review platform, and no locations this
time — the US-state pattern of the last four posts is gone.

Rachel M.'s review is split across two paragraphs: the quotation ends
`</em>.` on one line and the name "– Rachel M." sits alone in the next, so on
screen her name appears detached from what she said. The other five keep quote
and attribution together.

**In the rebuild:** all six are reproduced word for word, the lowercase name, the
double space and the split paragraph included, with no Review schema.

**A sixteenth set, on `/kidney-punch/`, and two of them are about the subject of
the page.** Six reviews in a numbered list, all US cities: Rebecca T. (Tampa,
FL), Ethan L. (Phoenix, AZ), Maya R. (San Diego, CA), Sarah K. (Chicago, IL),
Daniel W. (New York, NY) and Nina G. (Seattle, WA). No dates, ratings or review
platform, as ever.

Two are written to answer the page's own problem: "The coaches actually explain
why some strikes like kidney punches are banned" and "they never teach dirty or
illegal moves like kidney shots". A testimonial insisting the gym does not teach
illegal strikes, printed underneath a page that explains how to throw one, is an
awkward combination — and it suggests whoever wrote the reviews understood the
difficulty the article creates (issue 47).

**In the rebuild:** all six are reproduced word for word, with no Review schema.

**A fifteenth set, on `/muay-chaiya/`, as a bulleted list.** Seven reviews, each
a list item with a quotation and a first name and US state: David (California),
Linda (Texas), Marcus (New York), Emily (Illinois), Robert (Florida), Ava
(Nevada) and Chris (Arizona). US geography again, which is right, and one from
Texas. Still no dates, ratings or review platform.

Two of them describe services the rest of the site does not evidence — "Love the
online option—works great with my busy schedule" implies online classes, and
"Real Muay Chaiya, taught the right way" is the claim issue 39 asks the client
to confirm.

**In the rebuild:** all seven are reproduced word for word, with no Review schema.

**A fourteenth set, on `/10-muay-boran-techniques/`, and the geography is right
this time.** Six reviews: Tina K. (California), Jayden H. (**Texas**), Sarah G.
(Florida), Derek L. (Illinois), Emily R. (Georgia) and Nathan J. (Washington).
All six name a US state, which is the third set in a row to get that right after
the Tai Chi and Multiple Styles posts — a noticeable improvement on the Pakistan
and Europe sets. Still unverifiable: no dates, no ratings, no review platform.

One of them quotes the gym's Muay Boran expertise directly — "Their knowledge of
Boran styles like Korat and Lopburi is unmatched" — which belongs with issue 39
rather than here.

**In the rebuild:** all six are reproduced word for word, with no Review schema.

**A thirteenth set, on `/neck-bridges/`, numbered from nothing.** Five reviews,
each with a name, a country and a discipline: Jason Miller – USA (Amateur MMA
Fighter), Sophia García – Spain (Fitness Coach), Tobias Lund – Sweden (BJJ
Practitioner), Aiko Tanaka – Japan (Kickboxer) and Lucas Moreau – France (Muay
Thai Fighter). More detail than most sets on the site, and still no dates, no
ratings and no review platform.

Two markup faults worth fixing at the same time. The list is numbered **. , 2,
3, 4, 5** — the first item's number is missing, leaving a bare full stop in bold
where "1." belongs. And all five are marked up as `<p class="wp-block-heading">`,
paragraphs wearing the heading class, with an empty paragraph between each pair.

The geography is the same problem as `/muay-thai-thai-boxing/`: USA, Spain,
Sweden, Japan and France, for a gym in Coppell, Texas. Only one of the five names
a country the business operates in.

**In the rebuild:** all five are reproduced word for word, missing number
included, with no Review schema.

**A twelfth set, on `/kickboxing-techniques/`, and the longest yet.** Ten
testimonials under "What Our Students Say" — Aiden M., Jasmin T., Khalid R.,
Mark B., Sophie H., Leo W., Daniella K., Rahim U., Emily Z. and Andre L. Each is
one sentence, each signed with a first name and an initial, none carries a date,
a rating, a city or a link to any review platform. Ten unverifiable quotations in
a row is more than any other post on the site, and quantity works against them:
one anonymous testimonial reads as a testimonial, ten in identical format read as
a list someone wrote in one sitting.

**In the rebuild:** all ten are reproduced word for word, with no Review schema.

**An eleventh set, on `/mma-fighting-styles/`, published under the heading "Real
Reviews".** Six of them — Umar A., Hamza R., Sana M., Zeeshan L., Rabia F. and
Nadia M. — each a single sentence in quotation marks with a first name and an
initial. Static text, no stars, no dates, nothing linking to a review platform,
and no way for a reader to identify or contact any of these people.

The heading is the problem here. Every other post on the site calls this section
"Customer reviews" or "Testimonials"; this one calls it "What Our Students Say
**Real Reviews**". Labelling unverifiable text as *real* invites exactly the
scrutiny the text cannot survive, and if any of the six is not a real student,
the word turns an ordinary marketing liberty into a false statement. Either
verify them and drop the adjective, or collect them on Google Business Profile
where "real" is demonstrable.

**In the rebuild:** all six are reproduced word for word, heading included, with
no Review schema.

**A tenth set, on `/are-there-multiple-styles-of-muay-boran/` — and these are
the right shape too.** Four reviews under a heading that reads "Customer
Review**:**", singular with a colon: Kelly Kim (Coppell, TX), Ian Jee's Parent
(Coppell, TX), David Miller (Austin, TX) and Sarah Thompson (Dallas, TX). Two of
the four are from **Coppell**, where the gym actually is, and all four are from
Texas. They are still plain text with no stars, dates or review platform behind
them, so they cannot be verified, but as written testimonials these are the best
on the site: they name the right places, they mention what the gym teaches
children, and "Ian Jee's Parent" reads like a real person rather than a template.

**In the rebuild:** all four are reproduced word for word, with no Review schema.

**A ninth set, on `/is-tai-chi-a-martial-art/` — and these are the right shape.**
Four reviews, signed Jason M. (Austin, TX), Rachel S. (San Diego, CA), Michael
R. (Boston, MA) and David L. (Chicago, IL). Still static text with no stars, no
dates and no review platform behind them, so the verification problem is the
same. But they are the first set on the site signed from **US cities**, and one
of them is from Texas. If the client is going to keep writing testimonials into
pages, these read far better to a Coppell reader than the Pakistan, UK, France
and Australia set on `/muay-thai-thai-boxing/` — and if they are real, a Texas
reviewer is exactly who should be asked for a Google review instead.

Worth noting they all describe **Tai Chi instruction at the gym**, which is the
same concern as issue 39: testimonials describing a service.

**In the rebuild:** all four are reproduced word for word, with no Review schema.

**An eighth set, on `/muay-thai-thai-boxing/`, and one of them relocates the
gym.** Four reviews under a "Customer reviews:" heading — Jessica M.
(Australia), David L. (UK), Sophie T. (France) and Liam H. (Canada) — static
text, no stars, no dates, no review platform. The first one reads:

> "I trained at Sixth Sense MMA during my **3-month stay in Pakistan** —
> honestly, it's better than many gyms back home. The trainers are world-class!"

Sixth Sense MMA is in Coppell, Texas. A published review placing the gym in
Pakistan is the strongest signal yet that these testimonials were written to a
template rather than collected from students, and it is logged again under
issue 14 because of what it tells search engines about where the business is.

The same post has a separate section, "Stories from Practitioners: Real
Confidence Transformations", which despite its heading contains no stories and
no practitioners: four bolded labels ("Overcoming Self-Doubt:", "Mental
Resilience:", "Holistic Growth:", "Lasting Impact:") each followed by a general
sentence about what "individuals" and "practitioners" experience. Nobody is
named and nothing is quoted, so the heading promises specifics the section never
delivers.

**In the rebuild:** all four reviews and all four story labels are reproduced
word for word, with nothing invented or named, and no Review schema.

**A seventh set, on `/martial-blade-concepts/`, and one blockquote is never
closed.** Four reviews — Ahsan R., Bilal Khan, Sarah M. and Usman Javed — again
static, no stars, no dates, no review platform. The fourth `<blockquote>` opens
and is **never closed**: it runs past the end of its own review, swallows the
"Call to Action" heading and the closing paragraph, and only ends because the
article does. In a browser that means the gym's closing sales pitch is marked up
as part of a customer's quotation.

Two of these reviews describe knife-defence instruction ("I joined to learn
knife defense", "MBC at Sixth Sense MMA gave me solid, real-life skills"), which
is the same concern as issue 39: testimonials describing a service being
received.

**In the rebuild:** the four reviews are reproduced word for word with no Review
schema; the three closed blockquotes are unwrapped and the unclosed one's
opening tag is dropped, so the Call to Action stands as its own section.

### 36. A four-letter acronym that spells nothing — CONTENT — Low

`/muay-thai-gym-bag/` introduces four features as lettered sub-headings under
"Features for a Muay Thai Gym Bag":

> **A** – Aesthetics · **G** – Gear Protection · **S** – Smell Control ·
> **R** – Room/Storage

The letters read **A, G, S, R**, which is not a word. The section never says
what the acronym is meant to be, so a reader sees four letters that look like
they should spell something and do not. Reordered as **G, A, S, R** — Gear
protection, Aesthetics, Smell control, Room — they spell "GASR", which is
probably the intention, or the writer may have meant a different fourth word.

**Affected:** `/muay-thai-gym-bag/`, the four H4 sub-headings.

**What to do:** decide what the acronym is supposed to be, reorder the sections
to match, and say it in the paragraph above them ("we call this the GASR test")
so the letters have a purpose. If there is no acronym, drop the letters and use
plain sub-headings.

**In the rebuild:** the letters are reproduced in the published order, A G S R,
and the build fails if that order changes.

### 37. Two paragraphs run together, and a Muay Thai post that closes about MMA — CONTENT — Low

The Conclusion on `/muay-thai-backpack/` is one paragraph with two conclusions
jammed into it, no space at the join:

> …helps you stay ready for every session. Train smart and stay
> prepared!**The** right MMA backpack is more than just a bag it's an essential
> part of your training gear…

Two drafts of the same closing appear to have been pasted one after the other:
the first four sentences finish the article, then it starts finishing it again.
The second half also drops a mark of punctuation — "just a bag it's an essential
part" needs a dash, comma or full stop after "bag".

The subject changes at the same join. The post is about **Muay Thai** backpacks
throughout — the title, the H1 and all nine sections — and the closing half
talks about an "**MMA** backpack" and lists "gloves, wraps, rash guards, shoes",
which is a grappling and MMA kit list rather than a Muay Thai one: no shin
guards, and rash guards are not Muay Thai gear. It reads as a conclusion written
for a different post.

**Why it matters:** the conclusion is the last thing a reader sees and a common
source of search snippets. A visible run-together typo and a switch of subject
cost more there than they would mid-article.

**What to do:** delete one of the two closings, keep the one that is about Muay
Thai, and add the missing punctuation after "bag".

**In the rebuild:** reproduced exactly as published, run-together sentence and
all.

### 38. Document outline breaks: half a post sits under a heading it has nothing to do with — SEO, CONTENT — Medium

`/muay-thai-fighting-stance/` has six H2 sections. After the last one, "How
Fighters Use Their Stance in Real Matches", the post keeps going for another
eight sections — but every one of them is an H3, so as far as any machine
reading the page is concerned they are all subsections of "How Fighters Use
Their Stance in Real Matches":

| Section | Level published | What it actually is |
|---|---|---|
| Who We Are | H3 | About the business |
| Get in Touch With Sixth Sense MMA | H3 | Contact CTA |
| Customer reviews | H3 | Testimonials |
| Why Choose Sixth Sense MMA? | H3 | Sales section |
| Expert Coaches | H3 | Sub-point of "Why Choose" |
| Beginner to Pro Friendly | H3 | Sub-point of "Why Choose" |
| Stance-Focused Training | H3 | Sub-point of "Why Choose" |
| Supportive Community | H3 | Sub-point of "Why Choose" |

Two separate problems are visible in that table. The whole brand-and-reviews
block hangs off an unrelated article section, and the four "Why Choose"
sub-points sit at the *same* level as the heading they belong to, so nothing in
the markup says they are its sub-points.

**Two more markup slips in the same block:**

- **One `<blockquote>` wraps the entire section.** It opens at the first review
  and does not close until after "Supportive Community", so it swallows the
  three reviews, the "Why Choose Sixth Sense MMA?" heading, its four
  sub-headings, their paragraphs *and* a table. A blockquote means "this is a
  quotation from elsewhere"; a heading and a table are not a quotation.
- **A table with one row and an empty cell, used as a text box.** Under "Expert
  Coaches" there is a one-row, two-column table whose first cell holds a
  sentence ("Train under experienced Muay Thai professionals…") and whose second
  cell is empty. It is a sentence in a box, not tabular data. Screen readers
  announce it as a table and offer to navigate its (non-existent) columns.

**Why it matters:** the heading outline is how search engines and screen readers
work out what a page is about and how it is organised. An outline that says
"Who We Are" is part of "How Fighters Use Their Stance in Real Matches" is
telling them something untrue about half the page, and the "Why Choose" section
loses the structure that would let a reader skim its four selling points.

**What to do:** promote "Who We Are", "Get in Touch", "Customer reviews" and
"Why Choose Sixth Sense MMA?" to H2, drop the four sub-points to H3 beneath the
last of them, delete the stray blockquote, and replace the one-row table with an
ordinary paragraph.

**In the rebuild:** the outline is reproduced exactly as published — nothing was
promoted or demoted — because the brief is a faithful replica. The blockquote is
unwrapped and its children kept (the site has no blockquote styling, so it would
render as an ordinary block anyway), and the one-row table is kept as a table but
left without an invented header row.

### 39. Posts advertising classes and certified instructors the gym may not have, including a Sambo academy — CONTENT (accuracy) — **CRITICAL, the client must confirm before this goes live**

#### Read this first: a full Sambo academy, with class tiers and instructors — **CRITICAL**

**Three posts now advertise Sambo instruction** (see the note at the end of this
section for the third), and the second of them does not stop at
saying the gym teaches it. `/sambo-techniques/` (21 October 2025, 5,271 words)
describes a **structured academy** with named tiers, in the present tense:

> ## Sambo Academy Programs at Sixth Sense MMA
> **Sixth Sense MMA runs a top-notch sambo academy** where folks dive into sambo
> techniques with hands-on guidance… **Their programs cater to everyone** from
> newbies eager to learn sambo basics to pros sharpening edges in combat sambo or
> sport sambo.

> ### Beginner Classes to Learn Sambo
> **Beginner classes at Sixth Sense MMA's sambo academy** ease you into sambo
> techniques without overwhelming the senses… No prior martial art experience
> needed just show up ready to sweat. **By week's end you'll execute a basic hip
> throw or escape a simple pin.**

> ### Advanced Sessions for Skill Refinement
> **Advanced sessions at the sambo academy** crank up the challenge… Think
> intense rounds of live rolling…

> ### Experienced Instructors and Custom Plans
> **Instructors at Sixth Sense MMA know sambo techniques inside out** bringing
> expertise from years in combat sambo and sport sambo. **They've trained under
> systems tied to sambo's roots like those from Anatoly Kharlampiev's era**…

> **Sambo fighters here wear sambo uniforms** drilling everything from hip throws
> to leg locks.

**Sambo appears nowhere else on the site.** It is not one of the five programmes
(Adult BJJ, Adult Muay Thai, Kids BJJ, Teen BJJ, Teen Muay Thai), it is not on
the homepage's programme list, and no programme page mentions it. The only other
place it appears is `/sambo-martial-art/`, the first Sambo post.

**What the page does and does not commit to.** Checked precisely:

- **No instructor is named**, and **no credential is claimed.** The strongest
  statement is "Instructors bring years of experience" plus the Kharlampiev
  line, which implies lineage without asserting one — Kharlampiev co-founded
  Sambo and died in 1979, so "trained under systems tied to his era" is not a
  qualification. This matters because **Sambo requires specialist
  qualification**; a BJJ or Muay Thai coach is not a Sambo coach.
- **No class times, days or schedule** appear anywhere. The only time reference
  is "By week's end", which implies a weekly cadence without stating one.
- **It is described as running, not planned.** Present tense throughout — "runs",
  "cater", "ease you into", "crank up", "wear sambo uniforms". Nothing says
  coming soon, launching or planned. The verifier fails if any future-tense
  qualifier is introduced.

**Why this is the most developed false service claim in the library, if it is
false.** The other twenty-two entries in this issue name a discipline in passing
or claim it in a list. This one builds the full apparatus: an academy, two class
tiers, a curriculum ("basic throws and takedowns" then "joint locks and chokes"),
instructors with implied lineage, uniforms, and a progression promise with a
timescale. A parent or adult reading it has every reason to believe they can
book a Sambo class this week.

**Two possibilities, and the client must answer before launch:**

1. **The gym does not teach Sambo.** Then both Sambo posts need rewriting as
   informational articles — the technique content is genuinely good — with every
   "our", "here" and "at Sixth Sense MMA" removed from the academy sections, and
   the `/sambo-techniques/` academy H2 deleted outright.
2. **The gym does teach Sambo.** Then it needs a programme page, a place on the
   homepage list, a named qualified coach, and a schedule — none of which exists.

**The third Sambo page, and the claim is now in the present tense with a
frequency.** `/types-of-sambo/` (11 November 2025) does not describe a programme
in as much detail as `/sambo-techniques/` does, but it states the service more
plainly than either of the others:

> SixthSenseMMA leads sambo in Coppell TX. **Types of sambo run daily.**

> **Sambo training runs daily** with clear plans for kids, adults, beginners, or
> pros.

> SixthSenseMMA in Coppell, TX opens its doors for anyone ready to learn sambo.

"Runs daily" is a schedule claim, and "kids, adults, beginners, or pros" is a
claim about four programme tiers. The post also asserts staff credentials —
"Sambo black belts roll" (issue 62) — and closes by telling the reader to
"Participate in sambo today". Between the three posts the site now says the gym
leads Sambo locally, runs it every day for four audiences, employs Sambo black
belts and operates a beginner-to-advanced academy for it, while Sambo appears on
no programme page, no schedule and no price list.

**Do not launch any of the three Sambo pages in their current form without that
answer.** This is the one item in this document where publishing the replica
as-is carries the claim forward.

---



Two posts read as service pages for disciplines that are not among the gym's
five programs (Adult BJJ, Adult Muay Thai, Kids BJJ, Teen BJJ, Teen Muay Thai).
They do not describe the art in general terms; they state, in the present tense,
that Sixth Sense MMA teaches it.

**`/martial-arts-kali-sticks/`** is built as a sales page for Kali classes. Its
first H2 is "Why Choose Sixth Sense MMA for Kali Stick Training", and under it:

| Heading or claim | What it tells a reader |
|---|---|
| "Certified and Experienced Kali Instructors" | The gym employs instructors certified in Kali |
| "Structured Class Curriculum for All Levels" | There is a written Kali curriculum, beginner to advanced |
| "Small Class Sizes for Personalized Attention" | Kali classes run, and have a class size |
| "Martial Arts Programs by Age Group" | A table listing Kali under "16+ Years — Adult Training (Kali, BJJ, Muay Thai)" |
| "Sparring and Controlled Contact for Advanced Students" | There are advanced Kali students |
| "Open Mat Days & Small Group Instruction" | Scheduled Kali sessions |

It also carries four testimonials from people describing their Kali training at
the gym (issue 32), and a "Get in Touch with Sixth Sense MMA" section inviting
the reader to "book a free trial".

**`/sambo-martial-art/`** does the same for Sambo: "our **Sambo programs** are
designed to sharpen your reflexes", "Sixth Sense MMA provides **expert Sambo
training with highly qualified instructors**", and five testimonials about
Sambo training at the gym.

**Why it matters:** these are not marketing adjectives, they are checkable
statements about what a business sells and who it employs. If the gym does not
teach Kali or Sambo, a visitor can book a free trial for a class that does not
exist, and "certified instructors" is a claim about credentials. That is a
consumer-protection problem before it is an SEO one, and the testimonials make
it worse, because they describe a service being received.

**`/muay-chaiya/` asks a narrower question than any of the others: lineage.** Its
closing H2 is "Why Learn Muay Chaiya with SixthSenseMMA", followed by "7 Benefits
of Training with SixthSenseMMA" and seven reviews, one of which says "Real Muay
Chaiya, taught the right way. The culture and technique are unmatched."

Muay Chaiya is not a general style anyone can teach from a book. It is a
specific southern Thai lineage, traditionally passed down through named masters
— the page itself says so, with a section on Por Than Mar and a claim that the
gym "carries the authentic Muay Chaiya lineage". That is a checkable statement
about provenance, not a marketing adjective.

**What the client needs to confirm:** does any instructor hold Muay Chaiya
training, and from whom? If the answer is a named teacher in that lineage, put
the name on the page — it is the strongest thing the page could say. If the
answer is that the gym teaches Muay Thai and has read about Chaiya, the word
"authentic" and the lineage claim have to go.

**`/10-muay-boran-techniques/` is a softer case, and worth separating from the
others.** Its closing H2 is "Learn These Techniques at SixthSense Real Training,
Real Skills", followed by "Benefits of Training with SixthSense" and six reviews
praising the gym's Boran instruction — one of them saying "Their knowledge of
Boran styles like Korat and Lopburi is unmatched".

Unlike Kali, Sambo, Martial Blade Concepts and Tai Chi, this one is plausible on
its face: **Muay Boran is the traditional ancestor of Muay Thai**, and a Muay
Thai programme may legitimately teach some of its techniques, stances and
history. The question is narrower than "does the gym teach this art at all" — it
is whether the specific Boran material on the page, the Mae Mai and Look Mai
sets and the named regional styles, is actually covered in the Muay Thai
classes.

**Lower priority than the other five**, and the answer may well be yes. But the
client should confirm it, because a review claiming unmatched knowledge of Korat
and Lopburi is a specific claim about what is taught, and because the same page
is one of three now competing for Muay Boran searches (issue 7).

**`/mma-fighting-styles/` is the broadest claim on the site.** Its final section
is headed "**Real MMA Training in Every Style at SixthSense**", directly after
eleven numbered sections covering Boxing, Muay Thai, Brazilian Jiu Jitsu,
Kickboxing, Wrestling, Taekwondo, Karate, Judo, Kung Fu, Capoeira and Sambo. The
heading tells a reader the gym teaches all eleven. Its own program pages cover
**two**: Adult BJJ and Adult Muay Thai (plus the kids' and teens' versions of
those).

**Capoeira, Kung Fu, Taekwondo, Karate and Judo appear nowhere else on the
site** — no program page, no schedule, no instructor, no other post. A visitor
reading this page could reasonably arrive expecting a Capoeira class.

The reviews underneath make it concrete: "I never thought I could learn this
many styles in one place. SixthSense MMA made it possible." That is a
testimonial to a service the site does not otherwise evidence.

Counting this one, **five posts** advertise disciplines the gym's own programs
list does not include, and between them they name Sambo, Kali, Martial Blade
Concepts, Tai Chi and now nine more.

**`/is-tai-chi-a-martial-art/` is the fourth.** Two of its section headings are
"What Sets **Sixth Sense MMA** Apart in **Tai Chi Martial Arts Training**" and
"Why Choose **Sixth Sense MMA** for **Real** Tai Chi Martial Arts Training", and
it closes with "📞Ready to Take a Martial Approach to Learning Tai Chi?" — an
invitation to book. The body says "At sixth sense mma, we strip away the myths
and teach Tai Chi as it was meant to be trained", and four testimonials describe
Tai Chi classes at the gym. Tai Chi is not one of the five programs the site has
pages for.

That makes **four disciplines** — Sambo, Kali, Martial Blade Concepts and Tai
Chi — advertised on the blog as things this gym teaches, none of which appears
in its own programs list. At four, this stops looking like an oversight on one
post and starts looking like a content strategy of writing sales pages for
whatever term ranks. Each one is a page a visitor can act on.

**`/martial-blade-concepts/` is the third, and it adds a trademark question.**
The page is written as a sales page for MBC classes: "Why Train in Martial Blade
Concepts at **Sixth Sense MMA**", "**Certified** & Highly Skilled Instructors",
"What You'll Learn in **Our** Martial Blade Concepts **Classes**", "Combining MBC
with Other Martial Arts Styles", a "Programs for Every Age Group" table, four
testimonials from students describing MBC training, and a "Contact Us | Start
Your Martial Blade Training Today" section.

Martial Blade Concepts is not a generic term for knife defence. It is a
proprietary system created by **Michael Janich**, with its own instructor
certification programme. The page's own hidden links (issue 40) point at
`martialbladeconcepts.com/seminar-schedule` and at an Illinois trainer's page
that names Janich directly, so the page itself identifies whose system it is
advertising.

That makes "Certified & Highly Skilled Instructors" a specific claim: certified
by whom, in what. If the gym holds MBC instructor certification, this is fine
and the certifying body should be named on the page. If it does not, the page
advertises classes in another instructor's named system and describes its staff
as certified in it — a trademark and misrepresentation exposure, not just an
accuracy problem. MBC is also not one of the five programs the site has pages
for, exactly as with Kali and Sambo.

**What to do — the client must answer first:**

1. Does Sixth Sense MMA run Kali classes? Sambo classes? Martial Blade Concepts
   classes?
1. For MBC specifically: does anyone on staff hold Michael Janich's MBC
   instructor certification? If yes, name it on the page. If no, the words
   "Martial Blade Concepts", "MBC" and "certified" cannot stay as they are.
2. If yes: add them to the programs list and the schedule, and be able to name
   the certifying body behind "certified Kali instructors".
3. If no: rewrite the posts as what they actually are — articles about the art —
   and remove every first-person service claim, the age-group programs table,
   the free-trial invitation and the testimonials.

**In the rebuild:** every claim on all three posts is reproduced word for word,
exactly as published. Nothing was softened, removed or qualified, and the build
fails if any of the headline claims is altered. This issue is the flag; the
pages themselves are faithful copies.

**Knife-law claims on the MBC post** are logged separately under issue 31:
"Learn Legal, Controlled Knife Usage" and "Disengagement & Legal De-escalation"
are claims about what the law permits, made without naming a state.

**`/martial-arts-near-me/` is the eighth, and the only one that contradicts the
homepage outright.** It lists four programs under H3s, written as current
offerings in the present tense. Two of them have no program page:

| Advertised on `/martial-arts-near-me/` | Elsewhere on the site? |
|---|---|
| **Brazilian Jiu Jitsu (BJJ) Classes** | **Yes** — adult, teen and kids program pages |
| **Muay Thai & Kickboxing Training** | **Partly** — adult and teen Muay Thai pages exist; kickboxing has no program page |
| **Mixed Martial Arts (MMA) Coaching** — "our step-by-step coaching helps each student master essential moves" | **Nowhere.** No program page, no schedule entry, no coach named. The phrase "MMA Coaching" appears on no other page |
| **Women's Self-Defense Programs** — "our women's self-defense sessions focus on real-life techniques" | **Contradicted.** The homepage lists "Self-Defense for Women **(Coming Soon)**" |

The Women's Self-Defense entry is the sharpest problem in this whole issue,
because the site does not merely fail to corroborate it — it says the opposite.
The homepage says the class is not running yet. This page describes it in the
present tense, in detail, down to what a session covers ("how to escape holds,
apply practical techniques, and stay prepared"), and invites the reader to book
a free trial. A visitor who reads both pages cannot tell which is true, and a
visitor who reads only this one may book a class that does not exist.

**What the client must confirm:** is women's self-defense running now, or still
coming soon? Whichever it is, both pages must say the same thing. And is there
MMA coaching on the schedule, given that the gym's own program list stops at BJJ
and Muay Thai?

**In the rebuild:** both are reproduced word for word and **neither is linked to
anything**, because there is no page to link them to. The build fails if an
anchor is ever wrapped around either name.

**`/fight-training-near-me/` is the ninth, and it advertises four disciplines
under one H2.** "Types of Fight Training Available at SixthSense MMA" is
followed by four H3s, each written as a current offering:

| Advertised on `/fight-training-near-me/` | Elsewhere on the site? |
|---|---|
| **Jiu Jitsu for Ground Game and Control** | **Yes** — adult, teen and kids BJJ program pages |
| **Muay Thai to Master Elbows and Knees** | **Yes** — adult and teen Muay Thai program pages |
| **Boxing for Hand Speed and Defense** | **Nowhere.** No boxing program page, no schedule entry, no coach. Boxing appears only inside other posts' prose |
| **MMA for Real Fight Readiness** | **Nowhere.** Same as on `/martial-arts-near-me/`: the phrase is advertised, the program does not exist on the site |

That is the word "Available" in the H2 doing work the rest of the site does not
support for two of the four.

**A separate claim on the same page: "Meet Our Coaches and Choose Your Path".**
The heading is plural and the section promises the reader will "meet our
certified, experienced coaches" on the first visit. **No coach is named anywhere
on the page** — not one first name, not one credential, not one photograph. The
same page's ten testimonials all praise "the coaches" in the abstract. A page
that invites someone to come and meet a team should be able to say who the team
is, and "certified" is the same unnamed-credential claim already logged above
for Kali, MBC and BJJ.

**What to do:** confirm whether boxing and MMA are on the schedule. If they are,
give each a program page — they are being advertised on the site's conversion
pages with nothing behind them. If they are not, cut the two sections. And put
the coaches' names and actual certifications on the page; it is the single
cheapest credibility fix available here.

**`/bjj-classes-near-me/` is the tenth, and it advertises membership perks
rather than disciplines.** Its H3 "Membership Perks: Private Coaching, Open Mat,
More" is followed by:

> When you become a member, you get access to more than just weekly classes. Our
> memberships include **private coaching, open mat sessions, practice time, and
> invites to events, seminars, and workshops** so you can grow at your own pace.

| Perk advertised | Elsewhere on the site? |
|---|---|
| **Private coaching** | **Nowhere confirmed.** Now advertised on two pages — here and `/jiu-jitsu-near-me/` ("Private Coaching Sessions") — and on **none** of the five program pages |
| **Open mat sessions** | **Nowhere.** No program page or schedule mentions an open mat |
| **Events, seminars and workshops** | **Nowhere.** No events page, no seminar listing, no past event named |

Private coaching is the one to settle first, because two separate conversion
pages now sell it and nothing on the site says it exists, what it costs or who
delivers it. Open mat is the easiest to answer — a gym either has one on the
timetable or it does not.

The page also carries the unnamed-certification claim in a different form: its
H3 "Our Unique Coaching Method Focused, Respectful, Real" describes a
proprietary method that is not documented anywhere else on the site.

**What the client must confirm:** is there private coaching, at what rate and
with whom? Is there an open mat, and when? Have any seminars or workshops
actually run? If the answer to any is no, that line has to come off both pages.

**`/martial-arts-gyms-near-me/` is the eleventh, and it makes the Women Only
problem a pattern.** Its H2 "Types of Martial Arts Classes We Offer" — the verb
is "offer", present tense — is followed by five H3s:

| Advertised on `/martial-arts-gyms-near-me/` | Elsewhere on the site? |
|---|---|
| **Brazilian Jiu Jitsu (BJJ)** | **Yes** — adult, teen and kids program pages |
| **Muay Thai The Art of Eight Limbs** | **Yes** — adult and teen program pages |
| **Kids Martial Arts** | **Yes** — Kids BJJ program page |
| **MMA Fundamentals** | **Nowhere.** No program page, no schedule, no coach. Third page in a row to advertise MMA coaching with nothing behind it |
| **Women Only Classes** | **Contradicted.** The homepage still says "Self-Defense for Women **(Coming Soon)**" |

**Women Only Classes is now advertised as a current class on two separate pages**
— here and `/martial-arts-near-me/` ("Women's Self-Defense Programs") — while the
homepage says it has not launched. One page contradicting the homepage was an
oversight; two pages, written two days apart, is the copy being generated from a
wish list rather than from the timetable.

The testimonials underneath make it concrete in a way the other pages did not:
**Ashley L. says "I started in the women-only sessions to build confidence."**
That is a testimonial for a class the homepage says is not running yet. If the
class does not exist, the review cannot be real; if it does exist, the homepage
is wrong. Both cannot stand.

**What the client must confirm, and this one is now urgent:** has women's
self-defence launched? Whatever the answer, the homepage and these two pages have
to agree, and the Ashley L. testimonial has to be consistent with it.

**`/mma-gyms-near-me/` is the twelfth, and it advertises a class for children
that the site does not offer.** Its H3 is "**Parents Love Our Kids' MMA
Programs**", followed by three parent testimonials about it.

The gym's kids offering is **Kids BJJ** — one program page, one discipline.
There is no kids MMA programme anywhere on the site: no page, no schedule entry,
no coach. MMA is full-contact striking plus grappling, and a parent reading
"Kids' MMA Programs" is being told their child can learn to strike. That is a
materially different thing from Brazilian Jiu Jitsu, which is the grappling-only
class the gym actually runs, and it is the difference a parent would most want
to get right.

The three testimonials underneath describe it as a going concern: "The kids'
classes are well-structured and fun. The coaches are great at working with
children and teaching them respect and **self-defense**" — Bilal A., Parent.

This is also the **fourth consecutive page** to advertise MMA coaching with
nothing behind it, after `/martial-arts-near-me/`, `/fight-training-near-me/`
and `/martial-arts-gyms-near-me/`. On this one the URL, the H1 and every heading
are built on it: the page is called "MMA Gyms Near Me" and MMA is the one
discipline with no program page.

The same page's FAQ adds a fifth instance of the women's claim: question 2 is
"What is unique about the **women's-only program** at SixthSense MMA?" — a class
the homepage still lists as "Coming Soon", now asserted in the site's FAQPage
structured data, where Google may surface it as a rich result.

**What the client must confirm:** is there a kids MMA class, or is "Kids' MMA"
a loose way of writing "Kids BJJ"? If the latter, the heading and the three
testimonials need rewording — this is the one claim on the site where being
imprecise involves somebody's child.

**`/brazilian-jiu-jitsu-near-me/` is the thirteenth, and it is the clearest
statement of the certification claim yet.** Its H3 is "**Our Coaches Are
Certified and Friendly**", and beneath it:

> At SixthSense, our BJJ instructors and coaches are **not only fully certified**
> but also kind, patient, and approachable…

"Fully certified" is as strong as the site has put it, and **nothing on the page
says certified in what, by whom, or to what level**. There is no IBJJF
affiliation, no belt rank, no named instructor, no lineage, no photograph — I
searched the whole page for every form of the claim and this sentence is all
there is. The third image's alt text repeats it — "Brazilian Jiu Jitsu NEAR ME
WITH CERTIFIED COACHES" — so the claim is made twice on one page and evidenced
zero times.

**In BJJ specifically, this is a checkable thing, and people check it.** Brazilian
Jiu Jitsu is a belt-ranked art with a traceable lineage: a legitimate instructor
has a rank, awarded by a named professor, usually verifiable through the IBJJF
or a recognised association. Prospective students ask. Naming the instructor's
belt and who awarded it would be the single strongest sentence on this page — and
its absence, on a page that says "fully certified" twice, is conspicuous in a way
it would not be for, say, a fitness class.

**What the client must confirm:** who teaches BJJ here, what belt do they hold,
and who awarded it? If the answer is a named black belt under a named professor,
put it on the page. If the certification is something else — a coaching
qualification, a first-aid certificate — say which, because "fully certified"
currently implies a BJJ rank whether or not that is intended.

**A partial answer turned up on the newest post, in a place nobody would look.**
`/which-martial-art-is-best-for-self-defence/` does not name a coach in its own
copy either — but one of its customer reviews does:

> "Great gym! Came in for a session today and loved the environment and
> instruction. **The head coach Matheus** really paid attention to small details
> and made sure to give everyone adequate time and focus."
> — Muntasir Zaman

Across sixty-five posts, that is **the only place on the site where a coach is
named**, and it is in a quotation from a customer rather than anywhere the gym
says it itself. Another review on the same page refers to an instructor named
Tamires Piol (issue 32).

That is the wrong way round. A prospective student reading thirteen posts that
say "certified and experienced coaches" learns nothing; the same student reading
one review learns the head coach's name. **The gym has at least one named coach
it could be putting on every program page**, with a belt rank and a photograph,
and instead the name only survives because a customer happened to use it.

**The cheapest fix on this entire list:** put the coaching staff on the site.
Names, ranks, who awarded them, one photograph each. It answers the certification
question on thirteen posts at once, it is the first thing a parent looks for, and
the material already exists — somebody just has to write it down.

**`/womens-self-defense-class/` is the fifteenth, and it carries the site's only
outcome assurance.** The page is covered in full under issue 60, because its
central claim — that the women's programme is running — contradicts the
homepage. It belongs here for a narrower reason: twice, in the gym's own voice,
it tells the reader what training will achieve rather than what it offers.

> These classes are designed to build your confidence and **ensure that you have
> the skills needed to protect yourself in everyday situations.**

> They bring years of experience and **ensure that you learn proper techniques
> and strategies to stay safe.**

"Ensure that you have the skills needed to protect yourself" is a promise about
a future encounter. No training can guarantee that, and on a self-defence page
it is the claim most likely to be repeated back after something has gone wrong.
Every other post on the site says training "helps you", "builds confidence" or
"prepares you"; these two sentences say it *ensures*.

**What to do:** change both to "help you build the skills" and "help you learn
proper techniques". It costs the page nothing — the sentences read the same to a
customer — and it removes the only unqualified outcome promise on the site.

**`/best-fighting-style-for-self-defense/` is the sixteenth, and it states the
teaching claim outright in its FAQ.** Asked "What fighting styles are taught at
Sixth Sense MMA?", the page answers:

> **We teach** Brazilian Jiu Jitsu (BJJ), Muay Thai, **and MMA**, each offering
> unique techniques for effective self defense.

Two of the three have program pages. **MMA does not** — it is the fifth
consecutive page to advertise MMA coaching with nothing behind it, and the first
to put the claim inside `FAQPage` structured data, where Google may surface it
as a rich result.

The page also names eight other styles — Boxing, Kickboxing, Krav Maga, Karate,
Judo, Taekwondo, Wrestling and Wing Chun — but those are discussed generically
rather than offered, so they do not add to this list.

**`/martial-arts-for-self-defense/` is the twenty-second, and it gives four
untaught disciplines a heading each.** Its H2 "Leading Martial Arts for Self
Defense Suited for Real Protection" runs six H3s:

| Discipline | Programme page? | Mentions in the body |
|---|---|---|
| **Krav Maga** | **No** | 11 |
| Brazilian Jiu-Jitsu | Yes | — |
| Muay Thai | Yes | — |
| **Judo** | **No** | 12 |
| **Wrestling** | **No** | 7 |
| **Sambo** | **No** | 5 |

**Every one of the six is written as an invitation, not a description.** "**Give
it a shot** if you want something effective fast" (Krav Maga). "**Give it a try**
if you like a hands-on approach" (Judo). "**Jump in** and see how it strengthens
your self defense skills" (Wrestling). "**Worth a look** if you want something
different" (Sambo). The section's own introduction points the reader at the gym:

> Trying these out can show you what fits **maybe even at a place like Sixth
> Sense MMA**.

Four of those six invitations cannot be accepted here.

**The page does say what the gym does, once, 4,000 characters later:** "Tucked in
Coppell Texas **this place focuses on brazilian jiu-jitsu**". Then it muddies it
again in the next breath:

> If you're eyeing **krav maga or judo nearby** this gym's got the heart for
> beginners and pros alike.

"Nearby" almost concedes those are somewhere else, but the sentence is
constructed to keep the reader here.

**The FAQ is the worst of it, because it is structured data.** Three of the five
questions recommend untaught arts, and the first recommends one as the single
best:

> **Q: What is the best martial art for self defense in real-world situations?**
> A: **Krav Maga is widely considered the best martial art for self defense**
> because it focuses on real-world combat techniques.

> **Q: Which martial art is best for beginners?**
> A: Beginners often find **Krav Maga, Judo**, or Muay Thai easy to start with.

> **Q: How long does it take to learn self defense through martial arts?**
> A: Styles like **Krav Maga** teach practical self defense techniques in a few
> weeks, while arts such as **Judo** or BJJ may take several months… Training
> regularly **at a place like Sixth Sense MMA** accelerates progress.

That last answer puts Krav Maga and Judo in the same sentence as training at
Sixth Sense. Inside `FAQPage` markup, Google may surface the first answer as a
direct response to "best martial art for self defense" — a gym's own page
telling searchers the best option is something it does not offer.

**Sambo is worth a separate note.** It has **its own dedicated post** elsewhere on
the site (`/sambo-martial-art/`), is given a heading here, and is taught nowhere.
Krav Maga now appears across three pages: described at length here, tagged on
`/best-self-defense/`, and claimed as taught on `/martial-arts-near-me-classes/`.

**What to do:** the fix is the same one-sentence-per-section change recommended
for the kids post. Keep all six descriptions, they are useful, and add a line to
each of the four: "We don't teach Krav Maga at Sixth Sense — we teach Brazilian
Jiu Jitsu and Muay Thai, which cover the same ground." Then **rewrite FAQ answers
1, 3 and 4**, which are the ones Google may quote.

**`/martial-arts-near-me-classes/` is the twenty-first — and it is the first
page that deserves credit in the same breath.**

**What it gets right, which no other page in the near-me cluster does.** It
names the gym's **actual programmes**, using the homepage's own words:

> Our kids martial arts programs kick off with **Intro to Jiu Jitsu** where
> young learners start with basic moves... **Little Champions** steps it up
> focusing on discipline and self-confidence

> **Our focus leans on Brazilian Jiu-Jitsu**

> Those **free open mat days**? They're a highlight

Intro to Jiu Jitsu, Little Champions and the free open mats are all real, all
on the homepage, all spelled the way the gym spells them. After twenty entries
in this issue about invented services, a page that describes the actual business
is worth saying out loud, and **this is the model the other ten near-me pages
should be rewritten from.**

**What it gets wrong, in the same section.** The paragraph introducing those
real programmes is:

> Our focus leans on Brazilian Jiu-Jitsu but **we mix in karate and krav maga**
> for a well-rounded experience.

And it is not a one-off. Across the article, **karate appears 12 times and krav
maga 11**, including three more direct claims:

> **We cover krav maga** for practical safety skills **and karate** for
> technique tailored to different fitness levels.

> Our deep dive into Brazilian Jiu-Jitsu techniques **woven with krav maga** for
> street-smart self-defense.

> Maybe it's **a discount on a krav maga workshop** or a free class pass.

That last one advertises a discount on a workshop in an art with no programme
page. And the FAQ puts the claim into `FAQPage` structured data:

> **Q: What types of martial arts can I learn at Sixth Sense MMA?**
> A: At Sixth Sense MMA, you can explore a mix of martial arts styles like
> Brazilian Jiu-Jitsu, **Karate, Krav Maga**, Muay Thai, and more.

The tag list agrees: one of the six tags is "**karate near me**" (issue 30).

**So the same page both models the fix and repeats the fault.** The difference
between this page and a genuinely good one is deleting two words from four
sentences, one list item, one FAQ clause and one tag. Nothing else needs
touching.

**It also asserts "certified instructors" eight times** with no certifying body
named anywhere — see issue 62.

**`/martial-arts-for-kids-strenght/` is the twentieth, and the audience makes it
worse than the count suggests.** Its H2 "Popular Types of Martial Arts for Kids"
gives a section each to **six** disciplines:

| Discipline | Programme page? |
|---|---|
| Karate Basics | **No** |
| Taekwondo Features | **No** |
| Judo Techniques | **No** |
| Aikido Approaches | **No** |
| Brazilian Jiu Jitsu Methods | Yes |
| Muay Thai Elements | Yes |

**Every one of the six is written in neutral third person** — "Karate is a
classic pick for kids martial arts", "Aikido takes a calmer route" — with
nothing anywhere in the section saying which the gym teaches and which it does
not. A parent reading it has no way to tell.

**The answer arrives 4,000 characters later and does not match.** Under "Martial
Arts Classes at Sixth Sense MMA", the page says "Our brazilian jiu jitsu focus
fits right into those trends", and its three class headings are all jiu jitsu:
Intro to Jiu Jitsu, Little Champions, Rising Champions. **Muay Thai is not
offered on this page either** — so of the six disciplines described, the gym's
own classes section delivers **one**.

Then the FAQ contradicts that in turn:

> **Q: Which martial arts styles are offered for kids at Sixth Sense MMA?**
> A: We specialize in Brazilian Jiu Jitsu (BJJ) for kids... **Classes also
> introduce elements from Judo and Muay Thai** for a complete experience.

So the page gives three different answers to "what do you actually teach": six
disciplines described neutrally, one in the classes section, and three in the
FAQ — one of which, **Judo**, has no programme page and is named as taught
inside `FAQPage` structured data.

**Why this one is more consequential than the informational posts.** The other
nineteen entries in this issue are articles someone reads out of interest. This
is a decision page for a parent choosing a class for their child. Four of the
six options it presents cannot be booked, and the page never says so. The most
likely outcome is not a complaint — it is a parent deciding the taekwondo
sounded right and going somewhere else.

**What to do:** keep all six sections, they are genuinely useful, but add one
sentence to each of the four: "We don't teach karate at Sixth Sense — if it
sounds right for your child, look for a local dojo." Then say plainly, in the
"Popular Types" section rather than 4,000 characters below it, that the gym
teaches Brazilian Jiu Jitsu and Muay Thai. Correct the FAQ's Judo claim.

**`/muay-boran/` is the nineteenth, and it is the first to advertise Muay Boran
as a class of its own.** The three earlier Muay Boran posts treat the art as
background on Muay Thai. This one gives it a whole H2, "**Our Muay Boran Classes
at Sixth Sense MMA**", and two H3s under it, and writes in the present tense:

> At Sixth Sense MMA **we've woven this ancient martial art into our lineup**
> blending it with the striking power of muay thai for a full-body experience.

> Beginners **start with intro classes** that cover basic muay boran techniques
> like simple strikes and footwork. **Intermediate groups** ramp up with partner
> drills and light sparring. **Advanced sessions** go deeper into styles like
> muay chaiya. **Kids get age-tailored options** too.

> **Drop in anytime our schedule runs daily** and a free trial lets you test the
> waters.

That is a four-tier programme — beginner, intermediate, advanced, kids — with a
daily timetable, for a discipline that has **no programme page** and is not one
of the gym's five listed programmes. The competitor table (issue 52) doubles
down, giving "Muay Boran Focus" its own row and claiming a "**strong emphasis on
traditional techniques like chaiya style**" against two named rivals.

**It also advertises a class structure the gym may not run.** Beginner,
intermediate and advanced streams are a specific operational claim: a parent
reading this expects to be told which of the three their teenager joins.

**On the other side of the ledger, this page does something no other page has
done: it names its coaches.**

> Lead instructor **Matheus Galvao** has years under his belt breaking down
> complex grapples into easy steps for all ages. **Anthony Wikstrom** handles
> the striking side drawing from muay thai roots.

Two named people with described specialisms. After eighteen pages of "our
expert instructors" and "certified coaches" with nobody behind them (issue 62),
this is exactly the evidence the other pages were missing — and the head coach's
name matches the one in the Google reviews republished across eight other posts.
**Put these two names, with their credentials, on the programme pages.** It is
the cheapest credibility the site can buy, and the copy already exists.

Note also that this page claims **no certification and no award** — a marked
improvement on the page before it.

**`/top-ten-martial-arts-for-self-defense/` is the eighteenth, and it is the
most exposed page on the site for this issue.** It makes four separate kinds of
unevidenced claim, three of them under their own headings.

**1. The FAQ states, in structured data, that the gym teaches eight
disciplines.** Asked "Which martial arts styles are included in the top ten at
Sixth Sense Martial Arts?", the page answers:

> **We teach** Brazilian Jiu Jitsu, Muay Thai, **Kickboxing, Wrestling, Judo,
> Karate, Krav Maga, MMA**, and specialized age-based programs for kids, teens,
> and adults.

Two of the eight have program pages. **Six do not.** This is the largest single
teaching claim on the site, it uses the words "we teach", and it sits inside
`FAQPage` JSON-LD where Google may surface it as a rich result.

**2. "Certifications and Recognition" names no certification.** The whole
section, quoted in full:

> Recognition matters when picking a martial arts spot. Sixth Sense Martial Arts
> earns nods for our top ten martial arts for Self-defense. Local groups praise
> our programs. **We hold creds from respected bodies.** Students show off belts
> with pride. Events highlight our standing. Community trust builds over time.
> Instructors bring proven skills. It's a badge of honor we share. Drop by to
> feel that reputation.

"Creds from respected bodies" — **no body is named**. Not IBJJF, not a Muay Thai
sanctioning organisation, not a local authority. "Local groups praise our
programs" names no group.

**3. "Industry Accolades" names no award.**

> Regional events bring **wins in BJJ and Muay Thai**. Peers give thumbs up for
> teaching quality. **Community awards stack up yearly.** Students shine in local
> comps. It's a sign we're doing right. Check out our **wall of praise** sometime.

No award, no awarding body, no year, no competition, no student named. "Awards
stack up yearly" is a claim about a recurring, verifiable thing.

**4. "Certified Instructors You Can Trust" names no certificate.**

> They hold **belts in martial art styles like karate and judo**. Years of
> practice back their lessons. Ongoing training keeps them sharp.

A belt is not a teaching certification, and karate and judo are two arts the gym
does not teach — so the credential offered as reassurance is in a discipline the
reader cannot train in here.

**Why these four sit at High together.** Certifications and awards are
*verifiable*. A parent choosing a school for their child can ask which body, and
which award, and the page has committed the gym to having an answer. If the
answers exist, naming them is free and makes the section far stronger. If they
do not, three headed sections are promising credentials the school does not
hold, and that is the kind of claim that damages a local business when it comes
up in conversation rather than in a lawsuit.

**What to do:** for each of the three sections, either **name the specific body,
award and certificate** — which turns weak copy into the strongest part of the
page — or delete the section. There is no good third option. And correct the FAQ
answer to the disciplines the gym actually teaches, since it is the version
Google may quote.

**`/best-self-defense/` is the seventeenth, and it makes the claim in a tag
rather than in the copy.** The body is careful: Krav Maga is named twice as one
of the "top choices for individuals who are serious about learning self
defense", but always in the third person, and the page never says the gym
teaches it. The section that lists what Sixth Sense MMA offers names only
Brazilian Jiu Jitsu, Muay Thai and MMA.

The tag does not keep that distinction. One of the page's nine tags is:

> **krav maga self defense**

A tag is an entry point. It exists so that someone searching Krav Maga finds
this page, and what they find is a gym that does not teach it — the same
mismatch already logged for Kali, Sambo, Martial Blade Concepts, Tai Chi,
Boxing and MMA, but reached from the other direction: here it is the tag
promising the service rather than the article.

**What to do:** remove the "krav maga self defense" tag. The two body mentions
are accurate as written and can stay. If the gym ever does offer Krav Maga, the
tag can come back alongside a program page.

**It carries the strongest outcome assurances on the site.** The word "ensure"
appears eight times, and four of them promise a result rather than a service:

> From controlling an opponent in BJJ to landing powerful strikes in Muay Thai
> and mastering MMA's versatile techniques, **our classes ensure that you are
> prepared for any threat.**

> Training at Sixth Sense MMA **ensures you gain confidence, strength, and the
> ability to defend yourself in any situation.** *(published twice)*

> we prioritize realistic techniques that work effectively in everyday
> encounters, **ensuring you're fully prepared for any situation.**

"Prepared for **any threat**" and "defend yourself in **any situation**" are
unqualified guarantees about violent encounters. No training can deliver that,
and these are considerably stronger than the two on
`/womens-self-defense-class/`. Four pages on this site now make outcome promises
with "ensure"; this one makes four of them by itself.

**What to do:** change every "ensure" that promises an outcome to "help you" —
the sentences read the same to a customer and commit to nothing the gym cannot
deliver. This is now a site-wide search-and-replace rather than a per-page edit.

**To the credit of this page, two things it does not do.** It makes **no
statistical claim** — no assault rates, no percentages, no "one in four", none
of the alarming framing this topic usually attracts. And it makes **no legal
claim** at all, unlike `/muay-thai-vs-kickboxing/` and
`/mma-vs-kickboxing-for-self-defense/` (issue 31). For a women's self-defence
page those are the two easiest mistakes to make, and it makes neither.

**And a second data point turned up, again inside a review.**
`/teens-bjj-near-me/` carries a testimonial from Thiago Prado:

> "I already trained with **Coach Matheus when he was an instructor in Brazil**
> and he is a great teacher for all ages. Without a doubt, if I had the
> opportunity I would go to the US to train with him again."

So the site now establishes, entirely through customer quotations, that the head
coach is named **Matheus** and that he taught BJJ **in Brazil** before Coppell.
For a Brazilian Jiu Jitsu school that is close to the ideal credential, and it
appears nowhere the gym says it in its own voice.

**The instruction stands and gets easier:** an "Our Coaches" page with Matheus's
name, belt, the academy he trained under and a photograph would retire the
unnamed-certification claim on fourteen posts in one edit — and the strongest
material for it is already published on the site, written by his students.

**`/self-defense-classes-near-me/` is the fourteenth, and it is the one that
mostly gets it right.** Its four programme sections map cleanly onto the gym's
five program pages — Kids (Intro to Jiu Jitsu, Little Champions, Rising
Champions), Teen (BJJ, Muay Thai), Adult (BJJ Fundamentals, Advanced Techniques,
Muay Thai, Open Mat) — with age ranges attached. After thirteen posts advertising
Kali, Sambo, Tai Chi, MBC, boxing, kids' MMA and women-only classes the site
cannot evidence, this one describes the actual timetable.

Two claims on it still need confirming:

- "**Open Mat Sessions (Flexible Weekly Training)**" — an open mat with a stated
  weekly frequency. Advertised on `/bjj-classes-near-me/` too, and on no program
  page. Two pages now, still unconfirmed.
- The **women's programme**, which the page describes as both running and not
  running. That contradiction is severe enough to have its own entry: see
  **issue 60**.

### 40. Invisible ChatGPT citation links, one of them to a competing gym — SEO, ACCESSIBILITY, CONTENT — **CRITICAL**

**Raised to CRITICAL.** When this was first written it covered one post and read
as an accessibility and tidiness problem. It is now on **three** posts, and one
of the links on the third goes to **another martial arts gym's website**. The
site is not just leaking that its articles were generated and published unread;
it is passing authority, and any reader who finds the link, to a direct
competitor.

**The six posts:** `/martial-blade-concepts/` (seven links),
`/is-tai-chi-a-martial-art/` (one, inside a table cell),
`/are-there-multiple-styles-of-muay-boran/` (two, one of them the competitor),
`/mma-fighting-styles/` (one, citing another martial arts blog for the UFC
weight limits), `/neck-bridges/` (four) and `/muay-chaiya/` (four).
**Nineteen invisible links in total**, on six of the last ten posts checked.

Counting the destinations rather than the links: the site is invisibly citing
**two competing gyms or training providers, two commercial businesses and five
competing martial arts content sites**. Not one of those links is visible to a
reader, and not one was put there deliberately. Nobody has been checking, so **search the whole
site for `utm_source=chatgpt.com` before assuming these are all of them**, and
check every new post before it goes live.

---

`/martial-blade-concepts/` contains seven `<a>` elements whose entire anchor
text is a single non-breaking space. Nothing is visible on the page: no word, no
underline, nothing to click deliberately. Every one carries
`?utm_source=chatgpt.com`.

| # | Destination | What it is |
|---|---|---|
| 1, 2 | `sofrep.com/news/martial-blade-concepts-effective-modern-self-defense-everyone/` | A special-operations news site's MBC article — linked twice |
| 3, 4 | `defencelab.fi/en/mbc` | A **Finnish** self-defence company's MBC page — linked twice |
| 5 | `swatmag.com/article/martial-blade-concepts-progressive-knife-skills-course/` | A tactical magazine's course write-up |
| 6 | `teamspartan.com/…Michael_Janich_Martial_Blade_Concepts_Defensive_Knife_Skills_Level_2.htm` | An **Illinois firearms trainer** selling MBC Level 2 courses |
| 7 | `martialbladeconcepts.com/seminar-schedule` | The **official MBC seminar schedule** |

Three separate problems:

**1. Accessibility and SEO.** A link with no text is an empty link. Screen
readers announce it as "link" with nothing to identify it, or read the URL
aloud, which is a WCAG 2.4.4 (Link Purpose) failure. Keyboard users tab onto a
focus ring around nothing. And a link a visitor cannot see but a crawler can
follow is the shape of a hidden link, which search engines treat as a
manipulation signal whether or not that was the intent.

**2. It publicly shows the article was written by ChatGPT and not read
afterwards.** `utm_source=chatgpt.com` is the parameter ChatGPT adds to the
citations it returns. Seven of them, with their anchor text stripped to a
non-breaking space, is what you get when an AI answer is pasted into the editor
whole. Anyone who views the page source — a competitor, a prospective student,
a journalist — can see it, and it sits on a page selling safety training, where
"we didn't read what we published" is the worst possible impression.

**3. It hands link equity to competitors.** Six of the seven point at other
people selling the same training: a Finnish defence company, an Illinois
firearms and knife instructor, a tactical magazine's course listing, and the
official MBC seminar schedule. A reader who follows them lands on someone else's
booking page. The gym is passing authority, and any traffic, straight to its own
competition.

**What to do:** remove all seven. They add nothing for a reader — there is
nothing to click — and each of the three problems is solved by deletion. If any
source is genuinely worth citing, cite it with visible anchor text, no `utm`
parameter, and a reason for the reader to follow it.

**Related, on the same page:** its eight FAQ questions are search-engine
"people also ask" results for the wrong *Blade*. Four of them — "What martial
arts does Blade know?", "What is Blade's weakness?", "Who taught Blade to
fight?", "What knife does the CIA carry?" — are about the Marvel character and
spycraft trivia, not about Martial Blade Concepts or the gym's classes. Same
root cause: generated content published without a read-through.

**In the rebuild:** all seven links are reproduced exactly as published —
same destinations, same `utm_source=chatgpt.com`, same non-breaking-space anchor
text, same positions — because the brief is a faithful replica. Each one is
given `rel="noopener"` and an `aria-label` naming its destination, so a screen
reader at least announces where it goes. The FAQ is reproduced verbatim,
Blade questions and all.

---

**A second page with a leaked ChatGPT citation.** `/is-tai-chi-a-martial-art/`
carries one, and it is hidden inside a table. In the "Techniques & Benefits by
Weapon" table, the Jian row's Benefits cell ends with an invisible link:

> Precision, balance, mental focus`<a href="https://en.wikipedia.org/wiki/Wind_and_fire_wheels?utm_source=chatgpt.com"> </a>`

The anchor text is a single non-breaking space, and the destination is
Wikipedia's article on **wind and fire wheels** — a different weapon from the
one the row is about. So it is an invisible link, in a table cell, pointing at
the wrong weapon, with `utm_source=chatgpt.com` still attached. Everything in
the Martial Blade Concepts entry above applies, with the addition that a link
inside a table cell is even harder to notice in the editor.

That is now **two posts** with ChatGPT citation markers published intact. It is
worth searching the whole site for `utm_source=chatgpt.com` rather than fixing
these two and assuming that is all of them.

**In the rebuild:** reproduced exactly — same destination, same parameter, same
non-breaking space, same cell — with `rel="noopener"` and an `aria-label` naming
where it goes.

**A third page, and this one links to a competing gym.**
`/are-there-multiple-styles-of-muay-boran/` carries two invisible links, both
with `utm_source=chatgpt.com` and both with a non-breaking space for anchor text
(the second one wraps its space in `<strong>`, which changes nothing a reader
can see):

| Destination | What it is |
|---|---|
| `wayofmartialarts.com/muay-boran-everything-you-need-to-know/` | Another martial arts content site's Muay Boran guide — the same subject as this page, competing for the same searches |
| `jpboxinggym.com/muay-boran-jp-boxing-gym/` | **JP Boxing Gym — a martial arts gym.** A business that sells the same thing Sixth Sense MMA sells |

The second one is the reason this issue is now critical. A gym's own blog post
about Muay Boran contains a hidden link to another gym's Muay Boran page. Search
engines follow it and pass authority; a reader who happens to tab onto it lands
on a competitor's site. Neither was intended — it is a ChatGPT citation nobody
removed — but the effect is the same as if it had been.

**What to do first:** delete these two before anything else on this list that is
not the spam or the phone number. It takes a minute and it stops the site
recommending a competitor.

**In the rebuild:** both are reproduced exactly as published — same
destinations, same parameters, same invisible anchors, same positions — with
`rel="noopener"` and an `aria-label` naming each destination.

**A sixth page, with four more.** `/muay-chaiya/` carries four invisible
citation links, all with a non-breaking space for anchor text and all still
carrying `utm_source=chatgpt.com`:

| Destination | What it is |
|---|---|
| `nowmuaythai.com/blog/the-spiritual-side-of-muay-thai-strength-protection-focus` | **A competing Muay Thai content site**, cited for the spiritual side of the art |
| `sweetscienceoffighting.com/why-do-muay-thai-fighters-wear-armbands-headbands/` | **Another competing martial arts site**, cited for the mongkol and pra jiad |
| `thecoloursofthailand.com/what-to-do/benefits-of-practicing-muay-thai/` | A Thailand tourism site, cited for the benefits of Muay Thai |
| `en.wikipedia.org/wiki/Wai_khru_ram_muay` | Wikipedia, cited for the Wai Khru |

The first two are the problem repeating itself: a Muay Thai gym's blog post
about Muay Chaiya rituals hands authority to two other Muay Thai publishers, on
the exact subjects a reader might have come to this page for. The fourth shows
the pattern clearly — the page *could* simply have linked Wikipedia visibly, the
way it links the Muay Chaiya article two paragraphs earlier. It did that once,
deliberately, and then pasted four more citations it never looked at.

**In the rebuild:** all four are reproduced exactly, with `rel="noopener"` and an
`aria-label` naming each destination.

**A fifth page, with four — and one of them sells a product the page
recommends.** `/neck-bridges/` carries four invisible citation links:

| Destination | What it is |
|---|---|
| `fitnessmind.org/neck-bridges/` ×2 | A fitness content site's neck bridge article — the same subject as this page |
| `fightsense.com/blog/neck-harness-workout/` | Another martial arts site's neck harness workout |
| `honehealth.com/edge/iron-neck/` | **Hone Health, a commercial hormone-therapy company** |

The last one is attached to the third item in the page's own product list, the
"Iron‑Neck Device", immediately after the sentence "Many physical therapists
praise it as a game-changer for neck rehab and strength training". So the page
recommends a product, then passes authority — invisibly — to a company selling
health services, with a ChatGPT tracking parameter still on the URL. A reader
cannot see the link; a search engine can.

That is two of the five sites in this issue that are outright businesses
(jpboxinggym.com and honehealth.com) rather than articles.

**In the rebuild:** all four are reproduced exactly, with `rel="noopener"` and
an `aria-label` naming each destination.

**A fourth page.** `/mma-fighting-styles/` has one, at the end of the paragraph
under the men's weight divisions:

> …minus the combined divisions shared with women (fly, bantam, featherweight)`<a href="https://thekarateblog.com/ufc-weight-classes-divisions/?utm_source=chatgpt.com"> </a>`

Same shape as the others: a non-breaking space for anchor text, the tracking
parameter intact. The destination is another martial arts blog's page on UFC
weight classes — not a competing gym this time, but still a content site
competing for the same searches, and still a citation nobody removed.

**In the rebuild:** reproduced exactly, with `rel="noopener"` and an
`aria-label` naming where it goes.

**A second page with the same empty-anchor bug, without the tracking
parameters.** `/is-wrestling-a-martial-art/` has one link whose anchor text is a
single non-breaking space, in its Contact Us paragraph:

> Reach out to us today via`<a href="https://sixthsensemma.com/"> </a>``<u>sixth
> sense mma</u>` to explore our classes…

The link wraps the space *before* the brand name; the brand name itself is
wrapped in `<u>`, which underlines it without linking it. So the page shows an
underlined phrase that cannot be clicked, next to a clickable gap that cannot be
seen. A reader trying to reach the contact page clicks the underlined words and
nothing happens.

**Two links where one word should be.** On the same post, "martial art" and its
final "s" are two separate `<a>` elements pointing at the same URL, so the word
"martial arts" is split across two links in the markup. It looks right on screen
but it is two links, and the second one's entire text is the letter **s**.

**What to do:** move the link onto the words — `<a href="/contact/">Sixth Sense
MMA</a>` — delete the `<u>`, and merge the two "martial art"/"s" anchors into
one. There are no tracking parameters on this post, so this is a markup fix
rather than the three-part problem above.

**In the rebuild:** both are reproduced as published. The empty anchor keeps its
non-breaking space and is given an `aria-label` naming its destination; the
split "s" link is left split.

### 41. A page whose title promises techniques and whose content is about confidence — SEO — Medium

`/muay-thai-thai-boxing/` sells one thing in search results and delivers
another.

| Where | What it says |
|---|---|
| `<title>` | "Muay Thai Thai Boxing **Training & Techniques**" |
| Meta description | "Discover Muay Thai Thai Boxing basics, **training tips, and techniques** to improve your skills, fitness, and self-defense." |
| H1 | "What Muay Thai Thai Boxing Can Teach You About **Confidence**" |
| The article | All 21 sections are about confidence |

Not one of the 21 sections teaches a technique. They are "Origins of Muay Thai
and Its links to Confidence", "Mental Toughness and Muay Thai", "Overcoming Fear
and Building Courage", "Psychological Impact of Muay Thai on Self-Image",
"Confidence Beyond the Ring", and so on. The closest the page comes to
technique is "Mastering Technique: How Skill Development Fuels Confidence",
which is about how mastering technique *feels*, not how to do it.

**Why it matters:** the title and description are the advert; the page is the
product. Someone searching for Muay Thai techniques clicks a result promising
techniques, finds an essay about self-esteem, and leaves. Google reads that
pattern — click, quick return to the results — as the page failing the query,
and the page ends up ranking for neither intent: not for "techniques", because
it has none, and not for confidence, because nothing in its title or description
mentions it.

**What to do:** pick one. Either retitle the page to match what it actually says
— the H1 already does this well — and rewrite the description around confidence,
mindset and self-esteem; or keep the title and rewrite the body to teach the
techniques it promises. The first is a ten-minute change and keeps a genuinely
decent article.

**A note on the keyword itself.** The target phrase, "muay thai thai boxing", is
redundant: *Muay Thai* translates as *Thai boxing*, so the phrase reads "Thai
boxing Thai boxing". It survives in the URL, the title, the description and the
H1. Real searchers type "muay thai" or "thai boxing", rarely both together, so
the phrase optimises for a query with little volume while reading awkwardly to
anyone who sees it.

**In the rebuild:** the title, description, H1 and every section are reproduced
exactly as published. This is a strategy problem for the client, not a markup
error to fix.

### 42. FAQ questions published as section headings, competing with the page's own FAQ — SEO, CONTENT — Medium

`/is-tai-chi-a-martial-art/` has 21 H2 sections. Five of them are not sections
at all, they are FAQ questions that were promoted to headings:

- "Does Tai Chi help with stress and anxiety?"
- "Can it improve focus and clarity?"
- "What kind of clothing is appropriate for a Tai Chi class?"
- "Can older persons and children do tai chi?"
- "How long does it take to get good at Tai Chi?"

They are in sentence case, unlike every other heading on the page; they are
phrased in the second person; and each is followed by one short answer
paragraph. "Can it improve focus and clarity?" does not even name its own
subject — it only makes sense as the second item in a list of questions.

**Two problems this causes:**

**They compete with the page's own FAQ.** The post ends with a real FAQ
accordion of eight questions, one of which — "Is Tai Chi suitable for beginners,
older adults, or children?" — is the same question as the H2 "Can older persons
and children do tai chi?", answered twice on one page in two places. A search
engine picking a snippet, or an assistant picking an answer, now has two
candidates from the same URL.

**They bloat the table of contents.** The contents list on the rebuilt page
shows 20 entries, and five of them are questions sitting at the same level as
"Where Tai Chi Comes From" and "Weapon Forms and Techniques in Traditional Tai
Chi". A reader scanning the list cannot tell the structure of the article from
it.

**What to do:** move the five questions into the FAQ accordion where they
belong, merging the duplicate, or demote them to H3s under "Practical
Considerations for Beginners", which is where four of the five already sit in
reading order.

**Two more on `/mae-mai-muay-thai-what-is-it/`, and the FAQ answers both again.**
"**Can kids learn these at home?**" and "**How long to learn basics?**" are
published as H2 sections in the middle of the article, in sentence case unlike
the headings around them, each with a short answer beneath. Both then appear in
the table of contents beside the real sections.

The page's own FAQ accordion then asks "Can I train Mae Mai at home?" and "How
long does it take to learn Mae Mai basics?" — the same two questions, reworded,
answered a second time. That is now the third post in this pattern where the
body and the FAQ answer the same questions on one URL.

**Three more on `/muay-chaiya/`.** "Is Muay Chaiya safe for older adults?", "Are
there competitions in Muay Chaiya?" and "How long does it take to learn?" are all
published as H2 sections in the middle of the article, all in sentence case
unlike the headings around them, each followed by a short answer. All three then
appear in the table of contents beside the real sections. The third is the worst
case on the site: it is also repeated as an H3 lower down (issue 15) **and**
asked again in the page's own FAQ accordion, so one question is answered three
times on one URL.

**And again on `/10-muay-boran-techniques/`.** An H2 in the middle of the
article reads "**Are these techniques safe for beginners to practice?**" — a
question, at the top level of the document outline, sitting between "Pros of
Learning These Techniques" and the closing sales section. It is answered in the
two paragraphs beneath it and then appears in the table of contents alongside
the real sections. The page has its own six-question FAQ accordion below, which
is where it belongs.

**The same pattern on `/neck-bridges/`, twice over.** That post has an H3 reading
"**When should I avoid neck bridges?**" sitting in the middle of the article, and
a paragraph styled as a heading reading "**Are neck bridges safe for
beginners?**" followed by two paragraphs of answer. Both are questions with
answers, placed in the body. And the page's FAQ accordion, a few screens later,
opens with the question "**Are neck bridges safe for beginners?**" — the same
question, answered twice on one URL, exactly as on the Tai Chi post.

**What to do:** delete the body copy of the duplicated question and leave it in
the FAQ, and either move "When should I avoid neck bridges?" into the accordion
or rewrite it as a statement, since a heading that asks a question in the middle
of an article reads as a stray FAQ entry.

**In the rebuild:** all five stay H2s, exactly as published, and so appear in
the table of contents.

### 43. A broken image: the page links a file that is not in the media library — CONTENT — Medium

`/kickboxing-techniques/` has four `<img>` tags. Three load. The fourth, between
the "9-Uppercut" section and "Kickboxing Footwork Techniques", points at

```
https://sixthsensemma.com/wp-content/uploads/2025/07/Uppercut-1024x536.jpg
```

which returns **404 Not Found**. The file is not in the media library at that
path, under that name, or at the un-resized `Uppercut.jpg`. The live page
therefore renders a broken image placeholder, or a blank gap, depending on the
browser — in the middle of the article, directly under the last of the nine
numbered techniques.

The tag itself looks normal: `class="wp-image-4141"`, alt text "Uppercut by
sixthsensemma.com", a title attribute. So the image was uploaded at some point
and attachment 4141 was inserted into the post; the file behind it has since been
deleted, renamed, or lost in a migration. Nobody has opened the page since.

**Why it matters:** it is visible damage on a page that sells professional
coaching, and it is the kind of thing a visitor notices immediately. It also
wastes a request on every page load.

**What to do:** re-upload the image, or delete the tag. Then check the media
library for other attachments whose files are missing — if one went, others from
the same batch may have gone with it. WordPress will not warn about this.

**In the rebuild:** there are no bytes to copy, and pointing at a dead URL would
publish the same broken image here, so **the tag was dropped** and this entry is
the record of it. The other three images on the page are reproduced normally.
This is the only place in the rebuild where something visible on the live page
was deliberately left out, and it was left out because it is not visible on the
live page either.

### 44. The same topic published under two URL spellings — SEO — Medium

Kickboxing is spelled two different ways in the site's own URLs:

| URL | Title |
|---|---|
| `/kick-boxing-classes/` | Transform Your Fitness Journey with Kick Boxing Classes |
| `/kick-boxing-gloves/` | The Best Kick boxing Gloves for Ultimate Performance |
| `/kick-boxing-bag/` | Unleash Power: Top Kick Boxing Bag Picks |
| `/kickboxing-techniques/` | Top 9 kickboxing techniques every fighter should master |

Three hyphenated, one not. The word itself is inconsistent inside the titles too
— "Kick Boxing", "Kick boxing" and "kickboxing" — which issue 17 already records
for the headings.

**Why it matters:** "kickboxing" as one word is what people search and what the
sport is called; "kick boxing" as two is a much rarer spelling. Splitting a small
site's coverage of one topic across two URL conventions means neither spelling
accumulates the authority, internal links point at whichever form the writer
remembered that day, and anyone auditing the site later has to check both.

**What to do:** settle on **kickboxing**, one word, for every future URL, title
and heading. Existing URLs are worth changing only with 301 redirects in place —
the three hyphenated posts have been live long enough that the redirects matter
more than the slugs do. At minimum, stop creating new ones in the other spelling
and make the titles consistent, which costs nothing.

### 45. A "Top 9" list that contains the same technique twice — CONTENT — Medium

`/kickboxing-techniques/` promises nine techniques in its H1, numbers nine
sections 1 to 9, and lists nine rows in its summary table. But **items 3 and 8
are the same punch**:

| # | Heading | Table row |
|---|---|---|
| 3 | "3-Hook Punch" | Hook Punch — "Horizontal arc, bent elbow" — Jaw, temple |
| 8 | "8-Hook" | Hook — "Short-range, body rotation" — Head/body (close range) |

A hook and a hook punch are one technique. The two sections describe it twice in
different words, and the table repeats the duplication rather than catching it,
so a reader who checks the table against the headings finds the same error in
both places. The article delivers **eight** distinct techniques under a heading
that says nine.

**Why it matters:** the number is the promise the headline makes. A reader who
counts finds the gym cannot count its own list, on a page whose subject is
technical precision. It also wastes one of nine slots that could have covered a
technique kickboxers actually need — the teep, the elbow, the check, the cross.

**What to do:** merge sections 3 and 8 into one hook section, renumber, and add a
ninth technique — or change the title to eight. The table has to be corrected at
the same time.

**In the rebuild:** both sections and both table rows are reproduced exactly as
published.

### 46. A whole article section published inside a table caption — CONTENT, SEO, ACCESSIBILITY — Medium

The "Specific Top 10 Techniques" section of `/10-muay-boran-techniques/` is a
table listing the ten techniques with a one-line description each. Underneath it,
WordPress renders a **`<figcaption>` of about 4,500 characters** — roughly a
sixth of the whole article — containing the full write-up of all ten techniques,
numbered 1 to 10, several paragraphs long apiece.

That is not a caption. A caption labels a table; this one repeats the table's
contents at length and then adds everything the table left out. The substance of
the page's headline section is inside an element meant for a line of
explanatory text.

**Three consequences:**

- **Structure.** The ten technique write-ups have no headings. A reader skimming
  the contents list sees "Specific Top 10 Techniques" and nothing beneath it;
  there is no way to link to "Hanuman Thawai Waen" or to find it in the outline.
- **Search.** A `figcaption` is weak context. Ten named techniques, each with a
  detailed description, are exactly the sort of content that earns long-tail
  traffic — and they are buried in the one element on the page least likely to
  be read as body copy.
- **Screen readers.** The caption is announced as belonging to the table, so a
  user navigating by table is handed 4,500 characters of prose as that table's
  description.

**What to do:** lift the ten write-ups out of the caption and into the article as
ten H3 sections under "Specific Top 10 Techniques", keeping the table above them
as the summary it was meant to be. If a caption is wanted, one sentence.

**In the rebuild:** the caption is reproduced in full, using the captioned-table
markup this project already uses on `/martial-arts-for-kids/` — a
`<figure class="bl-table-figure">` holding the scrollable table and a
`<p class="bl-table-caption">` — so every word survives and no new CSS was
needed. The structure is wrong in the same way it is wrong on the live page.

### 47. Step-by-step instruction for a strike banned in every combat sport — CONTENT — **High, liability and reputation**

`/kidney-punch/` teaches readers how to throw a kidney punch. Not how to defend
against one, not why it is illegal — although it covers both of those as well —
but how to execute it. The section headings are the issue on their own:

| Heading | Level |
|---|---|
| **How to Throw a Kidney Punch (If Allowed)** | H2 |
| **Step by Step Breakdown for Kidney Punching** | H3 |
| **Best Angle and Body Movement** | H3 |
| **What Are the Benefits of a Kidney Shot in Fighting?** | H2 |
| **Common Mistakes to Avoid While Throwing a Kidney Shot** | H2 |

Four of those are offensive instruction. The fifth frames the strike as having
"benefits". Under them the page supplies a numbered breakdown, guidance on angle
and body movement, and a list of mistakes to avoid — the structure of a
technique tutorial, written the way the site's legitimate technique posts are
written.

The strike is **illegal in boxing, in MMA under the Unified Rules, and in every
other major combat sport**, because it damages the kidneys and can cause
internal bleeding. The page says so itself, at length, in "Why Kidney Punches
Are Illegal and Dangerous". The hedge in the first heading — "(If Allowed)" —
does not undo the four sections that follow it.

**Why this matters more than an ordinary content problem:**

1. **Reputation.** A martial arts school publishing a how-to for a banned strike
   is a screenshot waiting to happen. Rival gyms, parents comparing schools and
   local journalists all read the same page. The site's own reviews on that page
   protest that the gym "never teach[es] dirty or illegal moves like kidney
   shots" — printed directly beneath the instructions.
2. **Audience.** This site sells **kids' and teens' classes**. The same domain
   that hosts `/kids-bjj-classes/` and `/teen-muay-thai-classes/` hosts a
   tutorial for a strike that causes organ damage, with nothing gating it.
3. **Liability.** It is instruction, published by the business, for an act that
   is prohibited in competition and would be an assault outside it. That is a
   different exposure from describing the strike so readers can recognise and
   avoid it.
4. **Search intent.** The page ranks for a query — "kidney punch" — that is
   mostly asked by people who have been hit by one, or who want to know if it is
   allowed. Those readers want the legality and the injury sections. The
   offensive instruction serves nobody the gym wants as a student.

**What to do.** The page does not need deleting outright — the material on
legality, injury and defence is genuinely useful, and it is what the search
traffic wants. What needs removing is the instruction:

- Delete "How to Throw a Kidney Punch (If Allowed)", "Step by Step Breakdown for
  Kidney Punching" and "Best Angle and Body Movement" entirely.
- Rewrite "What Are the Benefits of a Kidney Shot in Fighting?" — a kidney shot
  has no benefits the gym should be publishing — as an explanation of why
  fighters are tempted and why officials stop it.
- Keep and lead with "Why Kidney Punches Are Illegal and Dangerous", "Can You
  Defend Against a Kidney Punch?" and the injury material.
- Add the disclaimer described in issue 31.

If the client would rather not rewrite it, unpublish the page and 301 it to the
Muay Thai or BJJ programme. The traffic it earns is not worth the sentence a
competitor could quote.

**In the rebuild:** the page is reproduced word for word, headings and all. No
sentence anywhere in the technique sections was written, extended or clarified
during the rebuild, and the build fails if any of those headings is reworded.
This entry is the flag; the page itself is an exact copy of what is live.

### 48. Pricing sections that name no price, and programs advertised nowhere else — CONTENT (accuracy), TRUST — **CRITICAL**

`/jiu-jitsu-near-me/` is the most commercially specific page on the site. It is
also the page most likely to convert: someone searching "jiu jitsu near me" is
ready to book. It makes six offers a prospective member would act on, and **not
one of them appears on the five program pages**.

| Advertised on `/jiu-jitsu-near-me/` | Elsewhere on the site? |
|---|---|
| **Private Coaching Sessions** — "one-on-one and small group training tailored to your personal goals" | **Nowhere.** No program page mentions private or one-to-one coaching |
| **Advanced and Competition Prep Classes** — "our advanced and competition prep programs" | **Nowhere.** The phrase "competition prep" appears on no other page of the site |
| **Discounts for Families, Students, and Military** — "our pricing includes special discounts for families, students, and military personnel" | **Nowhere.** No program page offers any of these three discounts |
| **Membership Plans for Every Budget** — "unlimited access or more flexible weekly or monthly membership options" | **Nowhere.** The phrase "membership plan" appears on no other page |
| **Free Trial Class for New Students** | **Yes.** All five program pages carry "Free trial class" and a "Risk-Free Trial Offer" FAQ. This one checks out |
| **Experienced and Certified Instructors** — "our experienced and certified instructors" | Similar wording elsewhere, but **no certification is ever named**, here or anywhere |

**What the client must confirm, one by one:** do private coaching sessions exist,
and at what price? Is there a competition prep class on the schedule? Are family,
student and military discounts real, and what are the terms — percentage, proof
required, combinable? Are there weekly and monthly membership tiers? Certified by
whom?

**Why this is High rather than a content nit.** These are not adjectives. A
visitor reads "special discounts for families, students, and military personnel",
walks in expecting one, and either gets it or does not. An advertised discount
that is not honoured is a consumer-trust failure at best, and in Texas a
potentially actionable deceptive trade practice at worst. The military discount
is the sharpest of the three — it is the one a customer is most likely to arrive
expecting, and the one whose refusal causes the most damage.

The instructor line has the same shape as the problems already logged under issue
39: "certified" is a claim about credentials, and no certifying body is named
anywhere on the site.

**A second, separate problem on the same page: the pricing sections state no
prices.** "Affordable, Flexible Pricing" and "Membership Plans for Every Budget"
run to several hundred words about affordability and contain **no figure at
all**. The closest the page gets is "there are no hidden fees, no unexpected
surprises, just clear payment choices" — which promises clarity without
supplying any. There is no price anywhere on the homepage or on any of the five
program pages either, so a visitor who reads every commercial page on this site
still cannot find out what a month costs. That was flagged in the original audit
and it is still true; this page makes it worse by raising the subject at length
and then not answering it.

**What to do:** either publish the rates, or replace the pricing sections with
one honest line — that plans start from a figure, or that pricing is discussed at
the free trial. A page that talks about money for four paragraphs and names no
number reads as evasive.

**In the rebuild:** every claim is reproduced word for word. No price, discount,
program name or guarantee was added, adjusted or invented, and the build fails if
a currency figure is ever introduced into the body.

#### The same gap again, and worse: `/martial-arts-near-me/`

This is the **second page with the pricing gap**, and it is the more serious of
the two, because this one puts the promise in the title.

- The SEO title is "Martial arts near me with **honest pricing** and plans".
- The H1 is "Martial arts near me **with prices worth checking out**".
- Two of the six sections are about money: "**Pricing and Membership Options**"
  and "**Flexible Memberships and Trial Classes**".
- The page contains **zero prices**. Not a figure, not a range, not a starting
  point. Counted in the raw HTML: no currency amount anywhere in the body.

What the pricing sections say instead:

> We keep pricing clear, honest, and based on your needs no hidden costs,
> confusing contracts, or pressure to sign up… With monthly, quarterly, and even
> weekly plans, we make sure your experience feels real, not rushed.

> We offer trial classes and flexible plans that fit your lifestyle, budget, and
> schedule so you can start training with no commitment and zero pressure… you
> can join without hidden fees or long-term contracts.

A title that says "prices worth checking out" is a promise a visitor clicks on.
Arriving to find several hundred words about honesty and no number is the exact
shape of a page people bounce from, and it is the kind of mismatch between title
and content that search engines demote on their own. On `/jiu-jitsu-near-me/`
the gap was inside the page; here it is in the headline.

Two further claims on this page need checking against reality, because they are
specific enough to hold the client to:

- "**monthly, quarterly, and even weekly plans**" — three named billing tiers.
  No program page mentions any of them.
- "**no hidden fees or long-term contracts**" — a contractual statement. If a
  membership agreement has a minimum term or a cancellation fee, this sentence
  is not accurate.

**What to do:** publish the rates on both pages, or change the title and the two
headings so they stop promising something the page does not deliver. "Martial
arts near me with prices worth checking out" is the one heading on this site that
cannot stay as written unless a price appears under it.

**In the rebuild:** reproduced exactly, including the title and both headings. No
price was invented or estimated, and the build fails on any currency figure in
the body.

#### The third page, and the reason this is now CRITICAL: `/fight-training-near-me/`

Three pages now promise pricing and publish none. This one goes furthest of the
three, because the promise is in the browser tab:

| Where the promise is made | What it says |
|---|---|
| `<title>` | "fight training near me **with no hidden costs** today" |
| H1 | "Fight Training Near Me **with Flexible Pricing Plans**" |
| Section heading | "**Flexible Membership Plans** Without Pressure" |
| Prices on the page | **None. Not one figure.** |

The pricing section reads, in full:

> Our membership options are built for real people with busy lives. We offer
> plans that are flexible, easy to adjust, and fit your schedule and budget.
> There's no pressure to lock in just smart choices that match your needs. You
> can pause or shift your plan anytime if life gets in the way. At SixthSense,
> we believe in keeping things transparent, welcoming, and stress-free, so you
> feel motivated, supported, and in full control of your journey.

Ninety-one words about money that contain no number, no range and no starting
point. The words "transparent" and "no hidden costs" are the problem rather than
the solution: **a page that advertises "no hidden costs" while hiding all of
them is making a claim about itself that the page disproves.** The other two
pages were evasive. This one is contradictory, and it is the sentence a customer
would quote back if they felt misled.

Three specific commitments here also need checking, because each is testable:

- "**no hidden costs**" — if there is a joining fee, an equipment cost or a
  grading fee, this is inaccurate as written.
- "**You can pause or shift your plan anytime**" — a contractual promise. If the
  membership agreement has a notice period, it is not true.
- "**Flexible Membership Plans**" — plural tiers, which appear on no program
  page.

**Why this crosses from High to CRITICAL.** One page with a pricing gap is an
oversight. Three pages, all of them the site's local-intent conversion pages,
all promising transparency in the title and delivering nothing, is a pattern a
customer can characterise — and in Texas, advertising that misrepresents the
terms of a transaction is the territory of the Deceptive Trade Practices Act.
These are also the three pages most likely to be the first thing a new customer
reads.

#### The fourth page, and the clearest case of all: `/bjj-classes-near-me/`

Published the same day as `/fight-training-near-me/`, three hours later, with
the same gap. This one puts the word "Transparent" directly above the empty
space:

| Where the promise is made | What it says |
|---|---|
| `<title>` | "BJJ classes near me with **free trials and flexible timings**" |
| Section H2 | "**Pricing**, Trial Classes & Membership Options" |
| Section H3 | "**Transparent Pricing** No Hidden Fees" |
| Prices on the page | **None. Not one figure.** |

The two sections read, in full:

> **Pricing, Trial Classes & Membership Options** — At SixthSense MMA, we keep
> everything upfront and simple so you always know exactly what you're getting.
> Whether you're just starting out in BJJ or looking for a gym that respects
> your time and budget, our programs, memberships, and sessions are designed to
> give you full value without the stress of hidden costs or confusing details.
> From your first class to long-term training, we make it easy to access the
> right fit for your needs.

> **Transparent Pricing No Hidden Fees** — We believe in honest, clearly laid
> out pricing with no hidden fees, no fine print, and no extra charges. When you
> join our gym, you'll always know what you're paying for whether it's group
> classes, private sessions, or flexible memberships. It's real value, with no
> surprises.

A heading that says **"Transparent Pricing"** sitting above a paragraph that
says **"you'll always know what you're paying for"**, on a page that never says
what you pay, is the clearest instance of this problem on the site. The second
paragraph goes further than the other three pages did: it names three things you
can pay for — "group classes, private sessions, or flexible memberships" — and
prices none of them. It is a price list with the prices removed.

Two further claims here are testable in the same way as the last page's:
"**no fine print**" and "**no extra charges**" are statements about the
membership agreement, not adjectives.

#### The fifth page, and now a house style: `/martial-arts-gyms-near-me/`

Every local landing page the client has published carries a pricing section with
no prices in it. This one has **three** pricing headings and still names no
figure:

| Heading | What follows it |
|---|---|
| H2 "**Pricing** That Fits Your Goals" | "we keep our pricing transparent, flexible, and stress free… without surprise add ons, pressure, or hidden costs. Here's how we make it easy for everyone to access great training with real value:" |
| H3 "**Transparent Plans** No Hidden Charges" | "From day one, you'll know exactly what you're paying for… Everything gear use, facility access, or extra sessions—is clearly explained before you sign up. With us, what you see is what you get." |
| H3 "**Pay As You Go or Monthly Memberships**" | "we offer both pay-as-you-go and monthly membership options. Try one class to get a feel for the vibe, or choose a monthly plan for full access" |
| H3 "**Family or Group Discounts Available**" | "we offer family and group discounts for kids, siblings, parents, or friends who want to join as a team… you can save money" |

"Here's how we make it easy for everyone to access great training with real
value:" is a colon promising a list of prices. What follows is three headings
about how transparent the pricing is.

**This page adds two commitments the others did not:**

- "**Pay As You Go**" — a per-class rate exists, is named as a product, and is
  not priced. This is the most quotable of the five pages, because a
  pay-as-you-go option has one number and the page withholds it.
- "**Family or Group Discounts Available**" — a discount offered with no
  percentage, no eligibility and no terms. The same discount claim was logged on
  `/jiu-jitsu-near-me/` ("families, students, and military"); it is now on two
  pages and defined on neither.

**Five for five.** Every "near me" page the client has published — 2 to 5 August
2025 — has a pricing section, and none of them has a price. That is no longer a
series of oversights; it is how these pages are written. A visitor can read all
five, some 15,000 words, and still not know what a month costs.

#### The sixth page. Every local landing page, without exception: `/mma-gyms-near-me/`

`<title>`: "MMA gyms near me that **fit my budget** and lifestyle". H2: "**Pricing**
and Membership Options That Fit Your Life". Three H3s beneath it. **No figure
anywhere.**

The section reads:

> At SixthSense, we've built membership options that actually fit your lifestyle
> and budget without the hidden fees or pushy sales tactics… our plans are
> flexible and fair, designed to support steady progress and long term
> commitment… **Our pricing reflects the real value of the training you'll
> receive nothing more, nothing less.**

"Our pricing reflects the real value of the training you'll receive" is a
sentence about pricing that contains no pricing. The title puts the word
"budget" in the search result, which is what a cost-conscious visitor clicks.

**Six for six.** Every one of the six local landing pages published between 2
and 5 August 2025 has a pricing section, and not one states a price:

| Page | Pricing headings | Prices |
|---|---|---|
| `/jiu-jitsu-near-me/` | 2 | none |
| `/martial-arts-near-me/` | 2 | none |
| `/fight-training-near-me/` | 1, promise in the title | none |
| `/bjj-classes-near-me/` | 2, "Transparent Pricing" | none |
| `/martial-arts-gyms-near-me/` | 3 | none |
| `/mma-gyms-near-me/` | 3, "budget" in the title | none |

Thirteen pricing headings across six pages and roughly 18,000 words, and a
visitor who reads all of it still cannot find out what a month costs. There is
no longer any question of oversight: this is the template these pages are
written from.

Three commitments on this page also need checking, and two of them are new:

- "**Trial Classes Are Free Try Before You Commit**" — consistent with the
  program pages, which do offer a free trial. This one checks out.
- "**No Long Term Contracts Just Consistent Growth**" — "our month to month
  flexibility gives you the freedom to train at your own pace". A statement
  about the membership agreement's term. If there is a minimum commitment or a
  notice period, it is inaccurate.
- "**Discounts for Students, Families & First Responders**" — see **issue 55**,
  because this page and `/jiu-jitsu-near-me/` name **different** groups.

#### The seventh page has no pricing section at all: `/mixed-martial-arts-near-me/`

This one breaks the pattern, and not in a good way. It is the only local landing
page with **no pricing heading anywhere** — no "Pricing", no "Membership", no
"Plans". A reader looking for cost on the site's newest page finds no section to
look in.

It still makes cost claims, just buried in running text with no heading above
them:

> We keep things upfront, from **pricing** to how we teach. There are no **hidden
> fees** or confusing contractsjust honest coaching and real support.

> With **no contracts**, a **pressure-free trial**, and **all gear provided**,
> it's simple to sign-up, either online or in person.

So the page makes four commitments — upfront pricing, no hidden fees, no
contracts, all gear provided — and states no price, exactly like the six before
it, but now without even a section heading a reader could scan to.

"**All gear provided**" is new and is worth confirming: it means gloves, wraps
and pads at no cost, which is a real expense for a gym and the kind of promise a
beginner turns up relying on. No other page on the site says it.

**Seven for seven.** Every local landing page states no price. Six have a pricing
section that answers nothing; the seventh does not have one at all. See issue 56
for what that inconsistency does to the set as a whole.

#### The eleventh page promises "value" three ways and prints nothing: `/martial-arts-near-me-classes/`

One post in seventy-five now publishes a price (below). The next one published
goes straight back to promising value without naming any, and does it in three
separate sections.

> #### Better Value in Program Options
> Value-wise our program options **beat out most local martial arts schools**.
> You get **unlimited access to classes for a flat rate** covering everything
> from kids martial arts to adult sessions **without hidden fees** tacked on.
> Competitors often charge extra for basics like open mats or family spots but
> we bundle it all. It's **smart pricing** that lets you chase fitness goals and
> life skills without breaking the bank think **full self-defense training for
> less than a fancy gym pass**.

A flat rate with no rate. "Less than a fancy gym pass" is a price comparison
against an unnamed benchmark. And "beat out most local martial arts schools" is
a claim about competitors' pricing made by a page that publishes none of its own
— the same fault as the named table at issue 52, minus the names.

> #### Access to Exclusive Online Offers
> Joining unlocks some sweet online perks like special deals on gear or extra
> sessions... **Maybe it's a discount on a krav maga workshop or a free class
> pass** to share with a friend.

Read that "**Maybe**". The page is not describing an offer the gym runs; it is
speculating about one. A reader cannot act on it, and a reader who signs up
expecting a discount on a krav maga workshop will find the gym does not teach
krav maga (issue 39).

> #### Flexible Schedules with Free Open Mat Days
> we keep schedules loose to match **morning evening even weekend slots**...
> Those **free open mat days**? They're a highlight

**The free open mats are real** — they are on the homepage, and this is the only
blog post that mentions them correctly. But no day and no time is given, which
is the same gap as `/muay-boran/` below: **seventy-five posts and still not one
published class time.**

**What to do:** put the `$120/month` figure that already exists (below) into the
"Better Value" section on this page, name the open mat day, and either describe
the actual new-member offer or delete the "Access to Exclusive Online Offers"
section. A speculative offer is worse than no offer.

#### The tenth page finally prints a price — three of them, and two belong to other businesses: `/muay-boran/`

After nine pages that raise pricing and state none, `/muay-boran/` publishes
real figures:

> **$120/month unlimited**

That is the first monthly rate published anywhere on this site, and it should be
said plainly: **this is the fix working.** It is specific, it is scannable, and
it answers the question every one of the nine pages below dodges.

**Three things are wrong with where it landed.**

1. **It is in a competitor comparison table, not a pricing section.** The page
   has no pricing heading at all. A reader looking for what a class costs has to
   find it inside a five-row table comparing the gym with two others.
2. **Two of the three prices are other businesses'** — $130/month attributed to
   Championship Martial Arts and $110/month to FUEL MMA, both named. That is
   issue 52, and it is now CRITICAL.
3. **It is on one page out of seventy-three.** The five programme pages, which
   are where somebody decides to book, still publish nothing.

**And the schedule is still missing.** This page advertises Muay Boran classes
with "our schedule runs daily", devotes a whole H3 to "**Class Quality and
Schedule**", and states no day and no time:

> Schedules run smooth too with **slots from early mornings for busy parents to
> late nights for shift workers**.

The table's "Weekly Schedule" row says "Daily options mornings to evenings". So
after seventy-three posts, **no page on this site has ever published a class
time.** The page even criticises the competitors' timetables — "Championship's
evening-heavy lineup", "FUEL's weekend bursts" — which requires knowing their
schedules while publishing none of its own.

**What to do:** take the $120/month figure out of the comparison table, put it
on the five programme pages with the actual timetable beside it, and remove the
two competitor prices entirely. The number exists and somebody knows it; it is
currently published in the one place it does the least good and the most harm.

#### The ninth page has two pricing headings and a sentence with the price cut out of it: `/top-ten-martial-arts-for-self-defense/`

This one goes further than the eight below. It publishes **two** headed pricing
sections plus an offers section, and still names no figure.

> #### Pricing and Packages at Sixth Sense Martial Arts
> Pricing fits all at Sixth Sense Martial Arts. **Plans start low** for everyone.
> **Bundles save cash** over time. Options match your goals. No hidden fees
> surprise you. **Check with us for details.** It's worth every penny.

> #### Affordable Options for Self-defense Training
> Affordable training shines at Sixth Sense Martial Arts. **Kids' classes kick
> off at a month.** Adult plans vary by intensity. Group rates cut costs.

**Read that second quote again.** "Kids' classes kick off at **a month**" is not
a sentence. The price has been deleted out of the middle of it — it was written
as "kick off at \$X a month" and the figure was removed, leaving the preposition
and the unit behind with nothing between them.

That is the clearest evidence in this document of what is happening across all
nine pages: **the prices were written and then taken out.** Every other page
leaves a heading with vague copy under it, which could be a decision. This one
leaves the grammatical hole where the number used to be.

> #### Special Offers for New Students
> New students get perks. **First month dips with a discount.** Referrals earn
> **free weeks**. Free trials let you test fit.

A discount of no stated size, and free weeks of no stated number. The page also
publishes a comparison table row claiming "**Rates beat many competitors**"
(issue 52) — a price comparison on a page with no price.

**Nine for nine.** Every page on this site that raises pricing declines to state
one. The fix is unchanged and takes an afternoon: publish the actual numbers,
starting with the kids' monthly rate that this page was originally written to
state.

#### The eighth page puts the promise in the H1: `/brazilian-jiu-jitsu-near-me/`

Every earlier page buried the promise in a section heading or a `<title>`. This
one puts it in the headline a visitor reads first:

> # Brazilian Jiu Jitsu near me Join now with **Flexible Pricing**

The page then contains **no price, and no pricing section**. The closest it comes
is an H3, "**No Pressure, No Contracts Just Progress**":

> At our gym, we believe training should fit your lifestyle, not feel like a
> burden so there are no long-term contracts, no hidden commitments, and
> absolutely no pressure to stick to rigid rules. You train at your own pace,
> with the freedom to grow without guilt, backed by real support on and off the
> mats. Whether you're on a **monthly plan** or just testing the waters, you'll
> experience steady progress and personal growth in a relaxed space that values
> consistency over perfection.

A monthly plan is mentioned. Its price is not. "Flexible Pricing" in an H1 above
a page with no pricing is the most direct version of this problem on the site:
the other seven made the promise somewhere inside the page, where a reader might
not reach it. This one makes it in the first line, which is also what Google
shows in the result a visitor clicks.

**Eight for eight.** Every local landing page promises something about cost and
states no cost.

Two claims here also join the verification list, and the first is a repeat:

- "**no long-term contracts, no hidden commitments**" — the same contractual
  statement as `/mma-gyms-near-me/`, now on two pages.
- "**a monthly plan**" — a named billing tier with no rate, as on four other
  pages.

**What to do, in priority order:** (1) publish a price, even a "from" figure, on
all eight pages — the pay-as-you-go rate is the single most useful number and the
easiest to state, and the "Flexible Pricing" H1 is the first thing to fix or
delete; (2) if the client will not publish prices, delete the pricing
sections and the pricing promises from the titles and H1s — a page can decline
to state a price, but it cannot advertise transparency and then decline, and
"Transparent Pricing No Hidden Fees" above no prices is the heading that would
be quoted back first; (3) verify the "no hidden costs", "no fine print", "no
extra charges", "pause anytime", "no long term contracts", "all gear provided"
and every discount claim against the actual membership agreement.

### 49. A map embed that overflows on a phone — CONTENT, ACCESSIBILITY — Low

All eight "near me" pages — `/jiu-jitsu-near-me/`, `/martial-arts-near-me/`,
`/fight-training-near-me/`, `/bjj-classes-near-me/`,
`/martial-arts-gyms-near-me/`, `/mma-gyms-near-me/`,
`/mixed-martial-arts-near-me/` and `/brazilian-jiu-jitsu-near-me/` — embed a
Google Map of the Coppell studio, which is exactly right for a "near me" page.
The markup is not: every one of them carries the same iframe, copied from one to
the next:

```html
<iframe style="border: 0;" src="https://www.google.com/maps/embed?..."
        width="600" height="450" allowfullscreen="allowfullscreen"></iframe>
```

Three problems, all small, all easy:

- **Fixed 600px width.** On a phone the article column is about 350px, so the map
  is wider than the screen and pushes the page sideways. The program pages avoid
  this by styling their map to `width: 100%`.
- **No `title` attribute.** A screen reader announces the frame with no
  indication of what it contains. The program pages' embeds carry
  `title="Sixth Sense Martial Arts location in Coppell, TX"`.
- **No `loading="lazy"`.** A Google Maps embed is a heavy third-party request,
  loaded eagerly here, on the page most likely to be opened on a phone on mobile
  data.

All three faults are on all eight pages, in the same order, with the same
attributes and the same missing ones. On `/bjj-classes-near-me/` the embed sits
high in the page, inside "Local, Safe & Clean Environment", so the sideways
scroll it causes on a phone is the first thing a visitor meets. Only the embed's coordinates differ, and
on `/fight-training-near-me/` the map sits inside the "Location Convenience"
section, which is the part of the page most likely to be read on a phone while
someone is standing outside.

**What to do:** give all eight iframes `width="100%"`, a `title`, and `loading="lazy"`,
copying the pattern already used on the program pages.

**In the rebuild:** the embed is reproduced exactly as published, inline style,
fixed width and all, because the brief is a faithful replica. It is the only
inline style anywhere in the rebuilt site.

### 34. WordPress editor markup published in a page heading — SEO, CONTENT — Medium

On `/muay-thai-weight-classes/` the H1 is published with the block editor's own
attributes still attached:

```
<h1 class="wp-block wp-block-post-title block-editor-block-list__block
    editor-post-title editor-post-title__input rich-text"
    role="textbox" contenteditable="true" aria-label="Add title"
    aria-multiline="true">
```

`contenteditable="true"` means **a visitor can click the headline and type over
it** in their own browser. Nothing is saved, but it looks broken, and anyone can
screenshot the page with a headline of their choosing. `role="textbox"` and
`aria-label="Add title"` are worse for screen reader users: the page's main
heading is announced as an empty edit field labelled "Add title", not as the
title of the article.

This is editor chrome that escaped into the published page, most likely by
pasting markup copied out of the editor rather than typing the title into the
title field.

**Affected:** `/muay-thai-weight-classes/`, the H1.

**What to do:** retype the title in the editor's title field so WordPress
outputs a plain `<h1>`. Check any other post where the title was pasted in, and
search the database for `contenteditable` to catch the rest.

**In the rebuild:** the page uses the site's own clean `<h1>`, and the build
fails if any editor attribute survives.

### 35. Weight chart figures that disagree with each other — CONTENT — Medium, to verify

`/muay-thai-weight-classes/` publishes four tables of weight limits, which is
exactly the kind of content readers act on. Three things in them do not line up,
and none was changed in the rebuild:

- **The top division is named twice, differently.** The main chart's heaviest
  entry is "Heavyweight, ~95.3+ kg / ~210+ lbs", but the speed-versus-power
  table calls the same bracket "Super Heavyweight (210+ lbs)".
- **Every figure in the main chart is approximate** ("~47.6 kg", "~105 lbs").
  Competition limits are exact numbers a fighter has to make, so a reader
  checking whether they fit a division cannot rely on a tilde.
- **The stadium comparison gives Lumpinee and Rajadamnern the same 105–160 lbs
  range**, which is narrower than the divisions those stadiums actually run, and
  it stops well below the chart's own heavier classes. Worth checking against
  each organisation's published limits.

**What to do:** have someone who competes check the tables against the current
Lumpinee, Rajadamnern and ONE Championship limits, replace the approximations
with exact figures, and use one name per division throughout. A "last checked"
date next to the chart would help, since these limits change.

**In the rebuild:** every number, unit and tilde is copied exactly as published.
Nothing was converted, rounded or corrected.

### 31. Legal, street-fighting and injury-risk content published with no disclaimer — CONTENT — **High, liability**

**Joint-lock and leg-lock instruction on a page whose title invites beginners to
start today.** `/sambo-techniques/` is titled "Learn sambo techniques that
**beginners can start today**" and carries step-by-step instruction for the two
categories of technique most likely to injure an untrained partner:

> ### Arm Locks and Joint Manipulations
> Start by securing your opponent's arm often after a throw or takedown. Twist
> the arm while pinning their body to limit movement. **Common moves like the
> armbar hyperextend the elbow** making taps quick in sambo competitions. Joint
> manipulations also include **wrist locks**…

> ### Leg Locks for Control
> **Target the knee or ankle with moves like the heel hook or kneebar.** After a
> takedown isolate their leg by trapping it between yours. **Twist or extend to
> apply pressure** forcing a submission or limiting their movement.

The **heel hook** is the specific concern. It is widely restricted in grappling
competition for beginners and banned outright in many rulesets precisely because
it loads the knee in a way the person being held often cannot feel until damage
is done. The page names it in a list of moves to "target", to a reader it has
told can start today.

**Three sacrifice-throw and hip-throw sequences** carry the same shape — "Roll
backward pulling them over you", "Your hip acts as the fulcrum push it into their
lower body" — which are falls that need a coach and a mat.

**To the page's credit, it carries one line of its own:**

> Sambo fighters train these carefully as they **can cause injury if mishandled**.

That is the only safety wording on 5,271 words, it sits inside the leg-lock
section only, and it describes the risk rather than telling the reader what to do
about it.

**This is the third instance in this issue**, after the neck-bridge progressions
and the kidney-punch article. The pattern is the same each time: genuinely
competent technical writing, published with no supervision note, on a site whose
audience includes parents of children.

**What to do:** add one sentence at the top of the technique sections — "These
techniques need a qualified coach and a mat. Do not attempt joint locks or leg
locks on a partner without supervision." It costs nothing, it does not weaken the
article, and it is the difference between instructional content and an
instruction. The same sentence serves the neck-bridge and kidney-punch pages.

**In the rebuild:** every technique description is reproduced word for word and
**no supervision note has been added** — the build fails if one appears, because
inventing safety copy the client has not approved would misrepresent the live
page. The recommendation is the client's to action.



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

**A fifth post, about children training unsupervised.**
`/mae-mai-muay-thai-what-is-it/` has an H2 headed "**Can kids learn these at
home?**", and its FAQ opens with "Can I train Mae Mai at home?". Both are
answered encouragingly, on a page that has just listed fifteen striking and
clinching techniques including elbow strikes to the neck, knee strikes to the
ribs and arm-twisting takedowns.

This is a much milder case than the neck bridges or kidney punch pages — Mae Mai
practice is ordinary Muay Thai training, and nothing on the page tells a child to
do anything dangerous. But it is a section specifically about **children
practising strikes at home, away from a coach**, published by the gym that would
otherwise be supervising them, with no line anywhere saying a parent should be
present or that these are best learned in class.

**What to do:** add one sentence to that section — children should practise with
an adult present and learn the techniques in class first. It costs nothing, it is
what the gym would say in person, and it also happens to be an argument for
booking a class rather than against it.

**A sixth post, and the first to advise on street fights directly:
`/mma-vs-kickboxing-for-self-defense/`.** The site's longest article, 6,785
words, carries two sections written about real violence outside a gym:

**"Limitations of Each in Street Fights"** is a 29-row table comparing what
kickboxing and MMA cannot do in an unsanctioned fight — "No ground defense when
down", "Limited to stand-up only", "Weak in close quarters", and so on. It is a
tactical assessment of how each art fails in a street fight.

**"Protective Attire for Self-Defense Scenarios"** goes further and advises on
what to wear and use:

> In self-defense situations, protective attire is minimal, often consisting of
> street clothes… **Sturdy shoes can be helpful**, but gloves and headgear are
> not typically practical. **The goal is to adapt to the situation and use
> what's available.**

"Use what's available" in a violent encounter is advice about improvised
weapons, however lightly it is phrased. Neither section carries a disclaimer,
and neither mentions de-escalation, leaving, or calling the police — the three
things every responsible self-defence curriculum puts first.

**Why this one belongs here rather than being waved through as comparison
content.** The page is not describing how a sport works; it is telling a reader
how to conduct themselves in a street fight, and it is doing so on a site whose
five program pages include **Kids BJJ, Teen BJJ and Teen Muay Thai**. A
thirteen-year-old reading "adapt to the situation and use what's available" is
being given a different message from the one the gym gives in class.

It also sits three clicks from `/kidney-punch/` (issue 47) and `/neck-bridges/`,
so the site now has a small cluster of pages about hurting people or getting
hurt, none of them disclaimed.

**What to do:** add the same short disclaimer used for the other five, and add
one sentence to "Protective Attire" saying the first goal in any confrontation
is to leave safely. If the client would rather not carry street-fight content at
all on a site marketing to children, the two sections can be cut without
weakening the comparison, which stands on its own as a sports article.

**A fourth post, and the sharpest case: `/kidney-punch/`.** It describes damage
to an internal organ — kidney trauma, internal bleeding, the reasons the strike
is banned — and carries no disclaimer of any kind. It is covered in full under
issue 47, which deals with the instructional problem; it belongs here too
because the disclaimer gap is identical to the neck bridges page: an article
that describes serious physical harm in detail, published by the business that
would supervise the training, with nothing telling the reader to see a doctor if
it happens to them. The page's own FAQ asks "What should I do if I get punched
in the kidney in training?" and answers it without once saying "seek medical
attention" in any formal way.

**Raised to High, and it is no longer only about the law.** This entry began as
two posts making claims about self-defence and knife law. `/neck-bridges/` adds
a different kind of exposure: **step-by-step instructions for an exercise that
can injure the reader's spine**, published with no medical disclaimer of any
kind.

The page is not vague about the risk. It has a section headed "**Risks & Safety
Concerns**", and two under it: "**Spinal Compression & Injury**" and "**Nerve
Damage & Chronic Injuries**". It tells readers that poor form risks "compression,
nerve irritation, and damage to the spine, discs, or ligaments due to axial and
shear forces". It then gives a numbered technique walkthrough, a "Sample Weekly
Routine" table, a "SixthSenseMMA style Plan (2–3 sessions/week)" and a
progression plan — everything a reader needs to attempt the movement at home,
unsupervised, having been told exactly what it can do to their neck.

Nowhere does it say: ask a doctor first; do not attempt this if you have an
existing neck or spinal condition; learn it with a coach watching. A reader with
an undiagnosed disc problem gets a weekly plan and no warning.

**Why this one is High rather than Medium.** The knife and self-defence posts
describe what the law might allow. This post instructs a reader to load their
cervical spine, acknowledges in its own words that doing so can cause nerve
damage and disc injury, and provides a schedule. If someone follows it and is
hurt, the page is the instruction that they followed, published by the business
that would have supervised them.

**What to do:** add a short, plain disclaimer at the top of `/neck-bridges/` and
above any future exercise-instruction content —

> This article is general information, not medical advice. Neck training loads
> the cervical spine. Speak to a physician before starting, especially if you
> have any history of neck, back or nerve problems, and learn these movements
> under qualified supervision.

— and have a coach or physiotherapist read the technique and progression
sections before they stay up. The same sentence pattern covers the law posts.

**A second post, about knives.** `/martial-blade-concepts/` goes further,
because the subject is a weapon. Two of its section headings are legal claims in
themselves — "**Learn Legal, Controlled Knife Usage**" and "**Disengagement &
Legal De-escalation**" — and the body under them tells readers they will learn
to use a blade within legal limits and when disengaging is the legally safer
choice.

Knife law varies far more than unarmed self-defence law does, and it varies on
details a class cannot generalise about: blade length, locking mechanisms,
concealed versus open carry, whether carry is lawful at all in a given city, and
whether defensive use of a knife counts as deadly force. A page that promises to
teach "legal" knife use, names no state and carries no disclaimer is making a
promise it cannot keep for every reader — and the gym is in Coppell, Texas,
while the page is readable anywhere.

**What to do, for both posts:** add a short line to each section saying the
information is general, is not legal advice, and that weapon and self-defence law
varies by state and city; and have the knife sections read by someone qualified
before they stay up. The client should get that from a lawyer in their state,
not from a rebuild note.

**In the rebuild:** both sections are reproduced word for word, with nothing
added, softened or caveated.

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

**Check done so far:** the `<title>`, `og:title` and `twitter:title` of all 63
live pages were scanned; only the two posts above are affected today.

**What to do:** find the title template or variable in the SEO plugin that
outputs the `%` signs and fix it there, then re-save both posts. Because the
cause is a template, **check every post** (including drafts, and any post
published or edited later) for the same `%…%` title, not only these two.

### 29. Content duplicated inside a post: a whole article on one, a whole section on another — CONTENT, SEO — High

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

#### It has happened again, at section scale: `/self-defense-classes-near-me/`

The site's newest post publishes its **"Adult Self Defense Programs" section
twice**. Not a repeated heading — the whole section:

| | First copy | Second copy |
|---|---|---|
| H2 | Adult Self Defense Programs | Adult Self Defense Programs |
| H3s | Adult Brazilian Jiu Jitsu Fundamentals · Advanced Techniques & Strategy · Adult Muay Thai Training · Open Mat Sessions (Flexible Weekly Training) | *identical, all four* |
| Ordered list | 5 items | *identical, all five* |
| Words | 317 | 317 |
| Plain text | — | **word-for-word identical** |

The two copies differ in exactly one respect: the second has `<strong>` keyword
emphasis on phrases like "self defense classes near me" and "fitness" that the
first does not. That is the tell — someone produced a keyword-emphasised revision
of the section and pasted it in **instead of replacing** the original.

They are also not adjacent. The first sits between "Teen Self Defense Programs"
and "Women's Self Defense Classes"; the second sits between "Women's Self
Defense Classes" and "What to Expect in Our Classes". So the page's structure
reads: Kids → Teen → **Adult** → Women's → **Adult again** → What to Expect. A
reader scrolling through meets the adult programmes, then the women's
programmes, then the adult programmes again, identically worded.

**Three consequences.**

- **The reader loses trust.** Repeating 317 words verbatim is the most visible
  kind of carelessness there is; it is noticed immediately and it is impossible
  to read as anything but unchecked.
- **The page indexes badly.** Two identical H2s with the same text generate two
  identical anchor targets, and roughly 10% of the page's 2,973 words are a
  straight repeat.
- **The four-item section index at the top of the page lists "Adult Self Defense
  Programs" once**, so the page's own navigation does not match its contents.

**What to do:** delete the **first** copy and keep the second, which is the
keyword-emphasised revision that was presumably meant to replace it. Then check
the rest of the September posts for the same paste error — this is now twice, on
posts eight months apart, and both times it was a paste that added rather than
replaced.

**In the rebuild:** both copies are reproduced exactly as published, because the
brief is a faithful replica, and the build fails if either is silently removed.
This is the one place where the rebuild deliberately keeps a fault that a reader
will notice.

### 30. Bad tags: zero-width spaces, section titles used as tags, misspellings, and twenty-two on one post — SEO — Medium

**A tag set that is on topic, and still makes issue 7 worse.** The ten tags on
`/types-of-sambo/` are, unusually for this site, all about the post's subject:
"combat sambo", "freestyle sambo", "martial art and combat sport", "russian
martial art", "sambo techniques", "sambo training", "self-defense sambo", "sixth
sense mma", "sport sambo", "types of sambo". Two problems remain:

- **"sambo techniques" is the slug of another post.** `/sambo-techniques/`
  exists and targets that phrase as its primary keyword. Tagging this post with
  it adds a third URL — the tag archive — competing on the same term, on top of
  the three posts already in the Sambo cluster (issue 7).
- **"sixth sense mma" is the lower-cased brand form** logged in issue 33. A tag
  archive page will be titled with it exactly as written.

Five of the ten — "combat sambo", "freestyle sambo", "self-defense sambo", "sport
sambo", "types of sambo" — are also the post's own five H3s and its H2, which is
the pattern logged below: section titles used as tags, each generating a thin
archive page for a term the post itself already ranks for.


Tags on two posts end with an invisible zero-width space (U+200B):

| Post | Tags with the character |
|---|---|
| `/what-is-muay-thai/` | 5 of 7: "what is muay thai", "what is muay thai boxing", "what is muay thai fighting", "what is muay thai kickboxing", "what is the difference between muay thai and kickboxing" |
| `/muay-thai-gear/` | 6 of 13: "gear for muay thai", "muay thai gear bag", "muay thai gear bangkok", "muay thai gear fairtex", "muay thai gear usa", "muay thai training gear" |
| `/muay-thai-vs-kickboxing/` | 1 of 9: "dutch kickboxing vs muay thai" |
| `/muay-thai-gym-bag/` | 1 of 9: "muay thai gear bag" |

**A related tagging problem on the same post:** `/muay-thai-vs-kickboxing/` is
tagged "muay thai vs kickboxing **reddit**". That phrase is a keyword-tool
export, not a topic: someone searching it wants a Reddit thread, and this page
cannot give them one. Tags should describe what the post is about, not copy
every phrase a research tool returns.

**A misspelt tag on `/muay-thai-muay-boran/`:** "is **muat** boran more powerful
than muay thai" — "muat" for "muay". The typo is in the tag name and therefore
in its URL, `/tag/is-muat-boran-more-powerful-than-muay-thai/`, so the site
publishes an archive page built around a misspelling. That post's other five
tags are clean and none carries a zero-width space.

**Tags that are not words, on `/mae-mai-muay-thai-what-is-it/`.** The post
carries four tags, and three of them are not search terms:

| Tag | What is wrong with it |
|---|---|
| "**ma muay**" | Not a Muay Thai term and not a phrase anyone searches. Looks like "mae muay" or "muay" truncated |
| "**mai real**" | Not a term at all. Most likely "mai" plus the start of another word, cut off |
| "**mai mai thai**" | "mai mai" for "mae mai" — the post's own subject, misspelt |
| "mae mai muay thai what is it" | The only usable one, and it is the page's whole title rather than a topic |

Three garbled tags out of four, each generating its own archive page at a URL
built from the mistake. "mai real" in particular is the clearest evidence yet
that these are pasted from a keyword tool's output without being read — it is
not a phrase in any language relevant to this site.

**A second misspelt tag, on the other Muay Boran post.**
`/are-there-multiple-styles-of-muay-boran/` is tagged "how muay boran is
**diffrent** from muay thai" — "diffrent" for "different" — which likewise
becomes the tag's URL. Two Muay Boran posts, two misspelt tags, each generating
its own archive page that no one will ever search for. Both are also full
sentences rather than topics, which is the same keyword-tool habit as the
"reddit" tag above.

They are invisible on the page, but they are part of the tag name and its URL
slug, so WordPress treats a clean tag and a zero-width-space tag as two
different tags. That is how duplicate tag archives get created (see issue 19).
The character is a tell-tale of text pasted from a keyword research tool, and it
now shows on two consecutive posts, so it is a habit rather than a one-off.

**Five tags that are five ways of saying the same thing, on `/mma-gyms-near-me/`.**
The post carries exactly five tags:

| Tag | |
|---|---|
| mma classes near me | |
| mma facilities near me | |
| mma gym near me | singular |
| mma gyms near me | plural — the page's own keyword |
| mma near me | |

These are not five topics. They are one topic typed five ways, and WordPress
creates a separate archive page for each, so the site now publishes five thin
pages of identical content that compete with the post they came from and with
each other. "mma gym near me" and "mma gyms near me" differ by a single letter.

This is the tag equivalent of the page-level problem in issue 50: the same
keyword-variation habit, applied to taxonomy instead of to posts. It is also why
this issue moves from Low to Medium — a tag archive is a real indexable URL, and
the site is generating them faster than it generates content.

**And six of them the next post along.** `/mixed-martial-arts-near-me/` carries
six tags, and they are six spellings of one phrase:

| Tag | |
|---|---|
| mix martial arts gym near me | "**mix**" for "mixed" |
| mix martial arts near me | "**mix**" for "mixed" |
| mixed martial arts classes near me | |
| mixed martial arts gym near me | singular |
| mixed martial arts gyms near me | plural |
| mixed martial arts near me | the page's own keyword |

Two of the six use "**mix** martial arts", which is not the name of the sport.
Two more differ only by the letter s on "gym". Between this post and
`/mma-gyms-near-me/`, **eleven tags** were created in one evening for what is
one topic, each generating its own indexable archive page.

**An entire tag set belonging to a different article, on
`/muay-thai-gear-for-safety/` — raised to High.** All six of its tags are about
gym bags and backpacks, on a post about gloves, shin guards and mouthguards, and
one of them carries a trailing zero-width space. This is the first time a whole
set has been wrong rather than one or two entries, and it has its own entry at
**issue 75**.

**That changes the shape of the tag audit recommended below.** The faults are now:
invisible characters, section titles used as tags, misspellings, arts the gym
does not teach, a competitor's brand name, spelling split inside one list, and
now a set copied from the wrong post. Seven distinct failure modes across twenty
pages means the tags are not being written per-post at all — they are being
assembled from somewhere and pasted in. One export of every post's tags to a
spreadsheet, read once against the post titles, finds all of it in an afternoon.

**Six tags on `/martial-arts-near-me-classes/`, and one advertises an art the
gym does not teach.** The set:

> **karate near me** · martial arts classes near me · martial arts for kids near
> me · martial arts gym near me · mixed martial arts near me · mma near me

Five of the six are squarely on target for a local martial arts school, and all
six are mechanically clean — no zero-width spaces, no duplicates, no
misspellings. **"karate near me" is the exception**: someone searching it wants
a karate dojo, and this gym has no karate programme. It compounds the body
copy's claim to "mix in karate" (issue 39), so a searcher arriving on that tag
reads a page that appears to confirm the gym teaches it.

As on the post before it, there is **no local tag** — no Coppell, no TX — on a
page whose whole premise is "near me". Five of the six tags end in "near me",
which is the phrase, but none says where "near" is.

**What to do:** remove "karate near me", and replace it with "martial arts
Coppell TX". That is a one-line change that fixes the accuracy problem and the
locality gap at the same time.

**Six tags on `/martial-arts-for-kids-strenght/`, and three of them contradict
the page they are attached to.** The set:

> jiu jitsu near me for kids · kids martial arts · **martial arts for 5 year
> olds** · **martial arts for 6 year olds** · martial arts near me for kids ·
> **toddler bjj**

Mechanically this is the cleanest set in the document — six tags, no zero-width
spaces, no duplicates, no misspellings, all six squarely on topic, and three
carrying "near me" or an age qualifier that a parent would genuinely type. As a
piece of keyword work it is the best on the site.

**And then the page tells those searchers to go away.** Three of the six target
children aged 5, 6 and younger, on a page whose H3 and FAQ both state a minimum
age of **seven** (issue 69). The tags are right — the gym takes children from
four — and the copy is wrong, which is the unusual direction for this site.

Note also there is **no local tag at all**: no Coppell, no TX, on a page whose
body names Coppell four times and publishes the full address. The two previous
posts had the opposite problem. Nothing on this site does both at once.

**What to do:** keep all six tags and fix the copy (issue 69), then add two
local ones — "kids martial arts Coppell", "kids BJJ Coppell TX".

**Twenty-two well-chosen tags on `/muay-boran/`, and the local signal finally
lands in the body copy.** The tag set:

> ancient martial art · combat techniques · elbow strikes · flying knees ·
> grappling and throws · **krabi krabong** · martial art styles · Martial Arts
> Training · muay boran · muay boran history · muay boran techniques · muay
> boran vs muay thai · **muay chaiya** · **muay korat** · Muay Thai · physical
> fitness · Self Defense · thai boxing · thai culture · thai martial arts ·
> thai military training · traditional thai fighting

No zero-width spaces, no section titles, no misspellings, no duplicates, and
every one is genuinely about the subject of the page — the most *relevant* set
on the site, as distinct from the most local. **Not one names Coppell**, which
on a topic page is a defensible choice.

**Four target disciplines the gym does not teach.** "**krabi krabong**" is a
Thai weapons art — swords and staves — with no programme page and no mention of
it being taught; "**muay chaiya**" and "**muay korat**" are regional Muay Boran
styles the page describes but does not offer as classes; and "**muay boran**"
itself is the subject of issue 39's newest entry. Krabi Krabong is the one to
remove: anyone searching it is looking for weapons training, which this gym does
not provide in any form.

**The body copy, though, is the best on the site for local signal.**
`/muay-boran/` names Coppell **five times**, all of them in the article's own
voice, and it publishes a **complete NAP block** in the "Contact Sixth Sense MMA
to Start Muay Boran Today" section:

> **Located at 817 S MacArthur Blvd #100, Coppell, TX 75019**, we're just a step
> away. **Ring us up at 469-972-7800** or shoot an email to
> info@sixthsensemma.com

Name, address and phone, in the body, in text, on a blog post. That is what a
local landing page is supposed to do and it is the first time any post on this
site has done it. Three of the other four mentions are woven into the copy
naturally — "right here in Coppell", "We're right in Coppell easy to reach",
"Shopping around for a muay boran spot in Coppell?" — rather than bolted on.

**Two notes on it.** The displayed phone number is the **correct** one,
469-972-7800, even though the site-wide tap-to-call link on the same page still
carries the wrong area code (issue 2) — so the right number is in the copy and
the wrong one is in the link, on the same page. And the address is not marked up
as structured data, so the block reads to a human but not to a crawler; adding
`LocalBusiness` schema to it costs nothing.

**This is the model.** Whichever pages survive the consolidations in issues 7,
50 and 57 should carry this block.

**Thirty tags on `/top-ten-martial-arts-for-self-defense/` — the largest set on
the site, and the most local.** Twenty-four of the thirty name Coppell:

> adult self defense Coppell · best martial arts for self defense · BJJ classes
> Coppell · Brazilian Jiu Jitsu Coppell · community martial arts Coppell ·
> confidence building martial arts · discipline and focus martial arts · ground
> fighting Coppell · **judo Coppell TX** · **karate Coppell TX** · **kickboxing
> Coppell TX** · kids self defense Coppell · **krav maga Coppell TX** · martial
> arts Coppell TX · martial arts for beginners Coppell · mixed martial arts
> Coppell TX · MMA training Coppell · Muay Thai Coppell · personal safety
> training Coppell · self defense against bullying · self defense classes near
> me · self defense Coppell TX · self defense for fitness · self defense
> techniques Coppell · Sixth Sense Martial Arts Coppell · stress relief martial
> arts Coppell · striking martial arts Coppell · teens self defense Coppell ·
> women's self defense Coppell · **wrestling Coppell TX**

**Mechanically it is clean** — no zero-width spaces, no section titles used as
tags, no misspellings, no duplicates. Compared with the twenty-two
heading-titles on `/muay-chaiya/`, this is a different standard of work.

**Five of them advertise disciplines the gym does not teach**: judo, karate,
kickboxing, krav maga and wrestling, each paired with "Coppell TX" so it reads
as a local service page for that art. Anyone who searches "judo Coppell TX" and
lands here finds a page that mentions judo twice in passing and offers BJJ and
Muay Thai. That is five more entries for the service-claims list at issue 39,
and on the same page whose FAQ says "we teach" all five.

**Thirty is also too many to be useful.** Tags create an archive page each; thirty
archive pages generated from one post, most of them with a single entry, is thin
content the site does not need indexed. Fifteen strong ones would do more.

**What to do:** delete the five that name untaught disciplines, cut the rest to
about fifteen, and keep the Coppell-plus-discipline pattern for the ones that
survive — it is the right instinct, applied too many times.

**A clean set that still advertises the wrong thing, on `/best-self-defense/`.**
Nine tags, no zero-width spaces, no section titles, no misspellings, none of the
twenty-two-tag sprawl logged below:

> best self defense · bjj for self defense · brazilian jiu jitsu self defense ·
> **krav maga self defense** · martial arts for self defense · mixed martial
> arts training · mma for self defense · muay thai self defense · self defense
> martial arts

Mechanically this is one of the better sets on the site. Substantively it has
the problem logged at issue 39: **"krav maga self defense" targets an art the
gym does not teach.** It is also a set with no local signal at all — nine tags,
not one naming Coppell or Texas, on a page whose entire purpose is to bring
local people to a single-location gym. Set beside the fifteen-tag Coppell set
on the post published thirty-six minutes earlier, the two pages look like the
work of two different people who never spoke.

**On the body copy, the same near miss as the page before it.** `/best-self-defense/`
does contain the word "Coppell" — exactly once, in Ben Holland's customer
review: *"So excited to have a jiu jitsu gym in our neighborhood! This is what
Coppell needed!"*

That is a real local signal and it is worth having, but it is a **customer's
sentence, not the gym's**. Across 1,858 words the article itself never names the
town, the state, the neighbourhood or the address. Nor does the meta
description, which on this page drops the "in Coppell, TX" the previous post's
carries. So of the three places a local page can say where it is — body, meta,
tags — this one says it in none of them, and gets there only because a customer
said it for them.

**And the post three days later does it properly, which settles the point.**
`/top-ten-martial-arts-for-self-defense/` names Coppell **three times**, and
twice in the article's own voice rather than in a customer's quotation:

> Our academy **in Coppell, TX**, brings together people from all walks of life.
> Beginners mix with experienced folks in a welcoming space.

> Sixth Sense Martial Arts waits for you **in Coppell, TX**. Right now feels like
> the perfect time to start.

The first is in the second paragraph, above the fold. The second closes the
"Contact Us" section. The third is Ben Holland's review, as on the other pages.

**This is the first page in the whole self-defence cluster to get it right**, and
it is worth stating plainly as a positive: body copy, meta-adjacent tags and
reviews all carrying the town, on a page targeting a national-sounding phrase.
It is also evidence the near miss on the two 17 September posts was an oversight
rather than a policy — someone clearly knows to do this.

**What it costs to copy:** one sentence. That is the whole difference between
this page and `/best-self-defense/`.

**Two posts, thirty-six minutes apart, and the pattern was the same both times:**
the local intent lives in the tags or in the reviews, never in the prose. The
September batch is genuinely more local-minded than the fifty posts before it —
that much is real and worth the credit. But "Coppell" appearing in a quotation
is not the same as the page saying where the gym is. **One sentence in the
opening paragraph fixes it on both pages**, and it is the single cheapest SEO
change available anywhere in this document.

**And the most local set yet, on `/best-fighting-style-for-self-defense/` —
though the article does not live up to it.** Fifteen tags, **eleven naming
Coppell or local intent**:

> best fighting styles for self defense · **best martial arts near me** ·
> **BJJ for self defense Coppell** · **Brazilian Jiu Jitsu Coppell** ·
> **Learn self defense Coppell TX** · Martial Arts for Confidence · martial arts
> for self defense · **MMA gym in Coppell** · **MMA training Coppell** ·
> MMA vs Kickboxing for self defense · **Muay Thai Coppell TX** ·
> **Muay Thai for beginners Coppell** · **self defense classes Coppell** ·
> Self defense techniques for women · **women's self defense Coppell**

Eight of the fifteen contain the word "Coppell". Set against the twenty-two
heading-titles two posts earlier, this is a different person's work or a
different instruction, and it is the right one.

**But the page behind them does not mention Coppell at all.** Its meta
description says "Sixth Sense MMA in **Coppell, TX**", its tags say Coppell
eight times — and the article's own 2,392 words never use the word. The single
occurrence anywhere on the page is inside a customer review, Ben Holland's
"This is what Coppell needed!", which is quoted text rather than the site's
copy. No Texas, no Dallas, no address, no mention of the neighbourhood.

That is a near miss rather than a success. Tags and meta descriptions carry some
weight; **body copy carries more**, and a local landing page that never names its
town is relying entirely on the parts a reader does not see. The fix is one
sentence in the opening paragraph.

**The best tag set on the site, on `/womens-self-defense-class/`.** Fifteen
tags, and **seven of them name Coppell or the local intent**:

> Advanced self defense for women · **Beginner women's self defense Coppell** ·
> Brazilian Jiu Jitsu self defense for women · **Fitness and self defense
> classes Coppell** · **Learn self defense Coppell TX** · MMA women's self
> defense training · Personal safety training for women · Self defense
> techniques for women · Self defense training for women · Situational awareness
> for women · Sixth Sense MMA self defense · Women's empowerment through self
> defense · **Women's martial arts Coppell** · **Women's self defense classes
> near me** · **Women's self defense Coppell TX**

Every one is a phrase a person might actually type, none repeats a section
heading, and the local ones are exactly what a single-location business needs.
Set against the twenty-two heading-titles on
`/mma-vs-kickboxing-for-self-defense/` and the fifteen unfocused ones on
`/self-defense-classes-near-me/`, this is what the rest of the site should look
like. Two small things: fifteen is still more than the three-to-five a post
needs, and six of them use a curly apostrophe, which produces `womens` in the
slug and is how duplicate tags get created later (issue 19).

**This is the second post to use Coppell tags**, after `/teens-bjj-near-me/`.
Both are September posts. Whatever changed in September, the tagging is the part
that improved most.

**And fifteen tags on one post.** `/self-defense-classes-near-me/` carries the
largest tag set on the site:

> adult self defense · anti bullying training · confidence building · fitness and
> self defense · jiu jitsu classes · kids self defense · Martial Arts Classes ·
> mma training · muay thai classes · real life self defense · self defense
> classes · self defense near me · self defense training · teen self defense ·
> women's self defense

Five of the fifteen are "self defense" plus a word. Unlike the near-me posts
above these are at least distinct concepts rather than spelling variants, but
fifteen tags on one post means fifteen new indexable archive pages, each holding
one post. **The site now has well over a hundred tag archives**, most with a
single entry, all thinner than the post they point at.

Two smaller things: "**Martial Arts Classes**" is the only tag on the page in
title case, where the other fourteen are lower case, so WordPress will treat it
as distinct from the lower-case form if that exists elsewhere; and
"**women's self defense**" uses a curly apostrophe, which becomes `womens` in
the slug and is exactly the sort of character that generates a duplicate tag
later (issue 19).

**Sixteen on `/teens-bjj-near-me/`, a new record — but two of them are the best
tags on the site.** The post carries sixteen tags, beating the fifteen above:

> best bjj classes near me · bjj for teens · bjj self defense for teens ·
> **bjj trial classes coppell** · **brazilian jiu jitsu classes coppell tx** ·
> *gracie barra jiu jitsu teens* · jiu jitsu training near me · martial arts
> classes for teens · self defense for teenagers · teen bjj classes · teen
> fitness and martial arts · teen martial arts training · teen mma training ·
> teens bjj near me · teens brazilian jiu jitsu · youth brazilian jiu jitsu

One of them is a competitor's brand and has its own entry: see **issue 61**.

**The genuinely good news, and it is the first of its kind in sixty-seven
posts.** Two of these tags name the town:

- **bjj trial classes coppell**
- **brazilian jiu jitsu classes coppell tx**

Every other tag on the site — across all sixty-seven posts and several hundred
tags — targets a national term. "Coppell" has appeared in a tag **exactly
twice**, both on this post, both in September. For a single-location business
whose entire commercial problem is local visibility (issues 14, 50, 53), this is
the direction the tagging should have taken from the start. It is worth saying
plainly: **whoever added those two got it right, and the rest of the site should
copy them.**

That makes the September posts a mixed but improving picture — better asset
naming (issue 26), real Google reviews (issue 32), a program-page link, local
tags — alongside the same old habits of over-tagging and competitor targeting.

**Twenty-two on `/mma-vs-kickboxing-for-self-defense/`, and most of them are the
article's own headings.** A new record, and a different failure from the ones
above: these are not keyword-tool fragments, they are the post's section titles
copied into the tag field.

| Tag | Where it comes from |
|---|---|
| What Is MMA · What Is Kickboxing · Origins and History · Evolution of MMA · Roots of Kickboxing · How Muay Thai Influences Kickboxing · Techniques and Fighting Styles Compared · Striking in Kickboxing vs MMA · Differences Between MMA and Kickboxing · MMA vs Kickboxing Differences · Ground Game Why MMA Stands Out · Striking and Grappling MMA's Versatility | **Verbatim H2s and H3s from the article** |
| Superiority · Skill Mastery · Unique Core Strength · Technique Range · Fight Dynamics · Key Techniques · Self-Defense Relevance · Training and Rules · Comparison to Kickboxing | Abstract phrases that are **not search terms at all** |
| **MMA vs Kickboxing for self defense** | The only real query in the set |

**A tag is a search term, not a section title.** "Origins and History" is a
heading; nobody types it into Google expecting a Coppell gym. "Superiority" and
"Unique Core Strength" are not phrases in any language a customer would use.
Twenty-two tags generate twenty-two indexable archive pages, twenty-one of which
answer no query, and two of them ("MMA vs Kickboxing Differences" and
"Differences Between MMA and Kickboxing") duplicate each other as well as
duplicating the post's two near-identical H2s (issue 15).

This is the clearest instance yet of tags being filled in mechanically rather
than chosen. Across the last four posts the tag counts run 15, 16, 22 — rising,
and getting further from anything a reader would type.

**What to do:** retype those eleven tag names, delete the duplicates left
behind, and watch for the same character when pasting keywords into titles and
headings as well. Pasting into a plain-text editor first strips it. On
`/mma-gyms-near-me/` keep "mma gyms near me" and on
`/mixed-martial-arts-near-me/` keep "mixed martial arts near me"; delete the
other nine, and check whether their archive pages are indexed and remove them if
so. Delete the two "mix martial arts" tags first — they are misspellings of the
sport's name. Then set a cap — three to five tags per post — and audit the tag
archives as a whole: most of them should not be indexable. **When you cut
`/teens-bjj-near-me/` down to five, keep the two Coppell tags; on
`/mma-vs-kickboxing-for-self-defense/` keep only "MMA vs Kickboxing for self
defense" and add local variants.** And add a rule for whoever writes these: if
the tag is also a heading on the page, it is not a tag.

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
| `/japanese-martial-arts-sign/` | "Martial Arts Kali Sticks: Techniques, History, and Benefits" | `/martial-arts-kali-sticks/` | `/martial-arts-kali-stick-2/` |
| `/is-wrestling-a-martial-art/` | "wrestling" | `/martial-arts-kali-stick-2/` | a post about wrestling — there isn't one, so the link should not be there |
| `/is-tai-chi-a-martial-art/` | "CONTACT US" (the red call-to-action button) | `/what-martial-art-destroys-boxers/` | the contact page |
| `/mma-fighting-styles/` | "Muay Thai" | `/wp-admin/post.php?post=3729&action=edit` — **the WordPress editor**, not a page at all | the Muay Thai post |
| `/kickboxing-techniques/` | "Mixed Martial Arts Training Gloves: Types, Use & Top Brands" | `/wp-admin/post.php?post=3385&action=edit` — the editor again, a different post id | `/mixed-martial-arts-training-gloves/` |
| `/neck-bridges/` | "MMA " | `/wp-admin/post.php?post=4145&action=edit` | the MMA post |
| `/neck-bridges/` | " tech" + "niqu" + "e" — **one word split across three separate links** | `/wp-admin/post.php?post=4138&action=edit` ×3 | one link, to the technique post |

On the Japanese post, the Boxers post becomes unreachable from that page, and
both links on it lead to the same place.

**A published link into the WordPress admin.** On `/mma-fighting-styles/`, the
words "Muay Thai" in the second section link to
`https://sixthsensemma.com/wp-admin/post.php?post=3729&action=edit`. That is the
editing screen for post 3729 — someone linked to the page they had open in
another tab instead of to the published URL. For a visitor the link is broken:
it bounces them to a WordPress login screen. It also publishes the admin path
and an internal post ID, which is information a public page has no reason to
carry. **It is on at least three posts, and `/neck-bridges/` has four of them.** One
wraps the word "MMA", and the other three wrap **fragments of a single word**:
the word "technique" is published as ` tech` + `niqu` + `e`, three consecutive
anchors all pointing at `/wp-admin/post.php?post=4138&action=edit`. That is what
it looks like when someone selects text in the editor three times and pastes the
same wrong URL each time. Six admin links across three posts now.

`/kickboxing-techniques/` does the same thing with a
different post id: the words "Mixed Martial Arts Training Gloves: Types, Use &
Top Brands" link to `/wp-admin/post.php?post=3385&action=edit` instead of to the
post whose title they quote. Two posts, two admin links, and both were found
simply by reading the pages — so **grep the whole site for `wp-admin`** rather
than fixing these two and assuming that is all of them.

**The Tai Chi one is the worst of these**, because it is not a text link inside a
paragraph but the page's main call-to-action button. A reader who has read to
the end and wants to get in touch presses a button marked CONTACT US and lands
on an article titled "What Martial Art Destroys Boxers?". Every other post on
the site points that button at the homepage. Whatever else is on the fix list,
this one costs enquiries.

So **three** posts use the `-2` post's exact title as link text and send the
reader to the other Kali post instead. The result is that
`/martial-arts-kali-stick-2/` — the post whose title they are quoting — is
linked from nowhere on the site.

**In the rebuild:** the three links point where the live site points them, at
`martial-arts-kali-sticks.html`, because the brief is a faithful replica. Fixing
the link text (or the target) is the client's call, and it should be settled at
the same time as the merge in issue 6, which would make the question moot.

### 6. Two separate Kali Sticks posts — SEO — High

Two different posts cover the same topic, and one has a leftover `-2` in its URL.

- `/martial-arts-kali-sticks/` — "Martial Arts Kali Sticks Training for Real Defense"
- `/martial-arts-kali-stick-2/` — "Martial Arts Kali Sticks Master the Techniques History and Powerful Benefits"

They compete for the same searches. As issue 5 shows, the site's own links
already confuse them.

**Now confirmed by reading both posts in full.** They are not two angles on one
subject: both open by defining Kali and Filipino stick fighting, both list the
drills (Sinawali and the rest), both cover benefits, who should train, and both
close with a Sixth Sense MMA sales section. The newer one even links to itself
in its own closing paragraph. This is the **fourth confirmed duplicate pair** on
the site, alongside the two Martial Arts Classes posts (issue 24), the two Muay
Thai stance posts and the Best Martial Arts pair, and it carries the same
**HIGH** priority.

**What to do:** merge them into one post and redirect the other URL to it with
a 301. `/martial-arts-kali-sticks/` is the better survivor — it is the URL the
site's own three internal links already point at, and the `-2` suffix on the
other is a WordPress artefact that should not be a public URL in any case.

### 7. Near-duplicate posts competing for the same searches: seven on one question, six on Muay Boran, four on belt ranks, three on Sambo, two on gear — SEO — **CRITICAL**

Several posts target the same keywords as each other, or as a program page.
Google then has to pick one and ranks all of them weaker.

| Topic | Competing pages |
|---|---|
| **Best martial art for self-defence (confirmed, SEVEN pages — the largest cluster in this document)** | `/best-martial-arts/` · `/best-martial-arts-for-self-defense/` · `/which-martial-art-is-best-for-self-defence/` · `/best-fighting-style-for-self-defense/` · `/best-self-defense/` · `/top-ten-martial-arts-for-self-defense/` · `/martial-arts-for-self-defense/` — see below |
| **BJJ belts and rank progression (confirmed, FOUR pages)** | `/bjj-belt-ranks-in-coppell/` · `/brazilian-jiu-jitsu-belts/` · `/brazilian-jiu-jitsu-belt-ranks/` · `/martial-arts-belt-levels/` — see below |
| **Kali sticks** (confirmed, fourth pair) | `/martial-arts-kali-sticks/` · `/martial-arts-kali-stick-2/` (see issue 6) |
| BJJ classes | `/brazilian-jiu-jitsu-classes/` · `/adult-bjj-classes/` (program page) · `/martial-arts-classes/` · `/martial-arts-classes-2/` (see issue 24) |
| Kickboxing / Muay Thai classes | `/kick-boxing-classes/` · `/adult-muay-thai-classes/` · `/teen-muay-thai-classes/` (program pages) |
| **Martial arts for kids (confirmed, two posts plus a program page)** | `/martial-arts-for-kids/` · `/martial-arts-for-kids-strenght/` · `/kids-bjj-classes/` (program page) — see below |
| **"Martial arts near me" (confirmed, three pages)** | `/martial-arts-near-me/` · `/martial-arts-gyms-near-me/` · `/martial-arts-near-me-classes/` — see issue 50 |
| Martial arts for adults | `/martial-arts-for-adults/` · `/adult-bjj-classes/` · `/adult-muay-thai-classes/` (program pages) |
| **Muay Thai gear (confirmed, two pages on one keyword)** | `/muay-thai-gear/` · `/muay-thai-gear-for-safety/` — see below |
| **Sambo (confirmed, THREE pages for a discipline with no programme — one pair duplicates a whole section)** | `/sambo-martial-art/` · `/sambo-techniques/` · `/types-of-sambo/` — see below |
| Gloves (partial overlap) | `/kick-boxing-gloves/` · `/muay-thai-gloves/` |
| **Kickboxing "versus" comparisons (confirmed, three posts)** | `/muay-thai-vs-kickboxing/` · `/muay-thai-vs-mma/` · `/mma-vs-kickboxing-for-self-defense/` — see below |

#### The comparison-post group

Three posts now compare the same three disciplines in rotating pairs:

| URL | Pair | Words | Published |
|---|---|---|---|
| `/muay-thai-vs-kickboxing/` | Muay Thai vs Kickboxing | 2,586 | 2025-05 |
| `/muay-thai-vs-mma/` | Muay Thai vs MMA | 2,262 | 2025-07 |
| `/mma-vs-kickboxing-for-self-defense/` | MMA vs Kickboxing | **6,785** | 2025-09 |

Between them they cover all three pairings of Muay Thai, MMA and kickboxing, and
each repeats the others' ground: what each art is, where it came from, how the
striking differs, which is better for self-defence. The newest is nearly three
times the length of either of the others and covers both of their topics inside
itself — it has sections on Muay Thai's influence on kickboxing and on MMA's
ground game, which are the subjects of the other two posts.

**It also joins the self-defence cluster.** Its title, its primary keyword and
five of its seventeen sections are about self-defence, so it competes with
`/best-martial-arts/`, `/best-martial-arts-for-self-defense/` and
`/which-martial-art-is-best-for-self-defence/` (the CRITICAL trio above) as well
as with the two comparison posts. It links two of those three itself.

**What to do:** the newest post is long enough and complete enough to absorb
both of the older comparisons. Merge `/muay-thai-vs-kickboxing/` and
`/muay-thai-vs-mma/` into it and 301 them, or — if the client wants separate
short comparison pages — cut the newest one down so it stops covering their
topics. The current arrangement has one 6,785-word page competing with two
2,500-word pages that it already contains.

#### The self-defence septet, and a spelling that makes it worse — **CRITICAL**

Seven posts now answer the same question:

| URL | Title | Published |
|---|---|---|
| `/best-martial-arts/` | "Best Martial Arts for Self-Defense: Which Style Suits You?" | 2025-01-21 |
| `/best-martial-arts-for-self-defense/` | "Best Martial Arts for Self-Defense: Top Disciplines Ranked" | 2025-02-18 |
| `/which-martial-art-is-best-for-self-defence/` | "Which Martial Art is Best for Self-Defence?" | 2025-09-08 |
| `/best-fighting-style-for-self-defense/` | "Best Fighting Style for Self Defense" | 2025-09-17, 10:26 |
| `/best-self-defense/` | "Best Self Defense Martial Arts for Protection" | 2025-09-17, 11:02 |
| `/top-ten-martial-arts-for-self-defense/` | "Top Ten Martial Arts for Self defense at Sixth Sense Martial Arts" | 2025-09-20 |
| `/martial-arts-for-self-defense/` | "Best Martial Arts for Self Defense" | 2025-10-18 |

The first two were already logged as a pair. The third, published seven months
later, asks the identical question in a different grammatical shape. **The
fourth, nine days after the third, asks it again** — "best fighting style" is
"best martial art" with one noun swapped, and its own FAQ opens with the
question "**What is the best martial art for self defense?**", which is the
second post's exact title.

**The fifth was published thirty-six minutes after the fourth.** Not thirty-six
days — thirty-six minutes. `/best-fighting-style-for-self-defense/` went live at
10:26 on 17 September 2025 and `/best-self-defense/` at 11:02 the same morning.
Its H1 is "Best Self Defense **Martial Arts** for Protection", so it is not even
a different noun this time; it is the same three words in a different order.

The two are near-identical in construction as well as subject. Both open on
choosing a martial art for protection, both run one section each on Brazilian
Jiu Jitsu, Muay Thai and MMA, both carry a "Why Choose Sixth Sense MMA" section,
a numbered benefits list, the same Google reviews and the same Facebook-only
social block. Where the fourth runs to 2,392 words, the fifth runs to 1,858 —
the shorter, thinner version of the page published half an hour earlier.

And the only thing distinguishing the third URL from the second is **British
spelling**:

```
/best-martial-arts-for-self-defense/     ← American "defense"
/which-martial-art-is-best-for-self-defence/  ← British "defence"
```

**That is the worst possible way to differentiate two pages.** Google treats
"defense" and "defence" as the same query for a US searcher, so the two pages
compete directly; but a person who types the British spelling and a person who
types the American one are the same customer in Coppell, Texas, where nobody
writes "defence". The site has produced two URLs for one question and
distinguished them by a spelling its own audience does not use.

**The fourth page links two of the other three.** `/best-fighting-style-for-self-defense/`
links "best martial art for self defense" to `/best-martial-arts-for-self-defense/`
and "Best mart[ial] art for self defense" to `/best-martial-arts/`. As with the
BJJ cluster (issue 57), the newest page cites its own direct competitors as
sources — which is the clearest possible demonstration that these should be one
page.

**The fifth links none of them**, which is arguably worse: it sits in the middle
of a five-page cluster and points instead at `/womens-self-defense-class/`,
`/self-defense-classes-near-me/` and `/different-types-of-martial-arts/`. Nothing
on the site tells a reader or a crawler which of the five pages is the answer.

**The sixth, three days later, links three of the other five.**
`/top-ten-martial-arts-for-self-defense/` (20 September) points at
`/best-martial-arts/`, `/best-martial-arts-for-self-defense/` and
`/best-self-defense/` — the three pages it is competing with most directly. At
3,465 words it is also the longest of the six, and its subject is stated in its
own H2: "**Top ten martial arts for self defense**". That is the cluster's
question with a number in front of it.

It is the strongest page of the six on local signal (Coppell three times in the
body, thirty local tags) and the weakest on substance: its "top ten" is five
disciplines counted twice (issue 65) and its conclusion is keyword salad
(issue 67).

**And a seventh, four weeks later, whose H1 is the second post's title.**
`/martial-arts-for-self-defense/` (18 October) has the H1 "**Best Martial Arts
for Self Defense**" — which is, word for word, the first half of
`/best-martial-arts-for-self-defense/`'s title, published eight months earlier.
The slug differs by two words; the H1 does not differ at all.

**It links two of the six it is competing with**, including that one:
`/best-martial-arts/` and `/best-martial-arts-for-self-defense/`. So the page
whose H1 duplicates another page's title also links to it.

Structurally it is the most conventional of the seven — six disciplines with a
heading each, three "how to choose" steps, four programme sections — and it is
the only one of the seven that names all three real kids programmes (issue 73).
It also names **four disciplines the gym does not teach** and its FAQ recommends
three of them (issue 39).

This is the **largest cannibalisation cluster in this document**: **seven pages,
one question**, spread across two spellings of "defence" and five phrasings of
"martial art". Between them they run to roughly **19,500 words** answering
something a single page should answer once — four published inside four days in
September, the seventh four weeks later.

Set against the BJJ near-me cluster (issue 57, seven pages) it is the same size
but worse, because the near-me pages at least target different disciplines. All
seven of these target one question for one reader.

**What to do: consolidate all seven into one page with six 301 redirects.**

Check Search Console first, but on the evidence `/best-martial-arts-for-self-defense/`
is the strongest candidate to keep: it is the plainest phrasing of the query, it
already uses the American spelling, and it is the page the other two link to as
the authority. Merge the best sections of the other three into it and redirect
them.

If the client would rather keep the newest,
`/best-fighting-style-for-self-defense/` has two advantages worth noting — it
carries the site's best tag set (eleven of fifteen name Coppell, issue 30) and
its meta description targets the town. Whichever survives, **the URL must use
the American spelling**, which means `/which-martial-art-is-best-for-self-defence/`
cannot be the keeper without a slug change. See issue 58 for the site-wide
spelling problem this is part of.

**This is now the largest duplication group on the site after the near-me
cluster**, and unlike that one it needs no judgement about audience: all five
pages answer one question for one reader.

**The September pages should be merged first, and today.** Whatever the client
decides about the older three, publishing two articles on the same subject
thirty-six minutes apart — and a third three days later — is not a strategy that
anyone chose; it reads like several drafts of one brief all going live.
`/best-self-defense/` is the shortest and weakest and is the obvious one to fold
in first.

**On which to keep, now that there are seven.** `/best-martial-arts-for-self-defense/`
remains the recommendation below: plainest phrasing, American spelling, eight
months of history, and the page the others cite. The seventh page's H1 is
already that page's title, which makes the merge unusually clean — the surviving
page keeps its own title and absorbs the newer page's structure.

**A note on which of the September three to keep.** The strongest candidate is
`/top-ten-martial-arts-for-self-defense/`, but only after issues 65 and 67 are
fixed: it is the only one of the six whose body copy names Coppell (twice), it
has the most complete structure, and its comparison table and step-by-step
section are content the others do not have. Fixed, it is the page. Unfixed, it
is the one with a padded list and a machine-written conclusion, and one of the
others should carry the cluster instead.
| Boxing vs martial arts (partial overlap) | `/what-martial-art-destroys-boxers/` · `/is-boxing-a-martial-art/` |
| **Muay Thai stance** | `/muay-thai-stance/` · `/muay-thai-fighting-stance/` |
| Muay Thai compared with another striking art (partial overlap) | `/muay-thai-vs-mma/` · `/muay-thai-vs-kickboxing/` |
| **Muay Boran (SIX posts, confirmed)** | `/muay-boran/` · `/muay-thai-muay-boran/` · `/are-there-multiple-styles-of-muay-boran/` · `/10-muay-boran-techniques/` · `/muay-chaiya/` · `/mae-mai-muay-thai-what-is-it/` — see below |

**There are now three Muay Boran posts, and the overlap has become a cluster —
raised to MEDIUM.** When this entry was written there were two. The third,
`/10-muay-boran-techniques/`, repeats what both of the others already cover:

| Covered by | `/muay-thai-muay-boran/` | `/are-there-multiple-styles-of-muay-boran/` | `/10-muay-boran-techniques/` |
|---|---|---|---|
| What Muay Boran is | ✓ | ✓ | ✓ |
| Muay Boran vs Muay Thai | ✓ | ✓ | ✓ (its own H2 **and** a comparison table) |
| The four regional styles | mentions them | ✓ (a section each) | ✓ (a section each **and** a table) |
| Named techniques | some | some | the Top 10 list |

So all three answer "what is Muay Boran and how does it differ from Muay Thai",
and two of the three run the regional styles at length. Only the Top 10
technique list is genuinely unique to the newest post. Three URLs competing for
"muay boran" on a site this size means none of them accumulates the authority,
and the gym's internal links are already split across them.

#### The Sambo cluster: three posts, zero programme, and two of them answer the same question — **CRITICAL**

`/sambo-martial-art/` (20 May 2025), `/sambo-techniques/` (21 October 2025) and
`/types-of-sambo/` (11 November 2025) all target Sambo. Each of the two newer
posts links `/sambo-martial-art/`: `/sambo-techniques/` with the anchor text
"martial arts sambo's combat", `/types-of-sambo/` with "Combat sambo resembles".

As duplication this started as the ordinary pattern: two long posts on one
discipline, competing with each other, the newer one broader. At 5,271 words
`/sambo-techniques/` is the **second-longest post in the project**.

**The third post makes one pair worse than duplication.**
`/sambo-martial-art/` and `/types-of-sambo/` do not merely overlap — they
answer the same question with the same structure:

| | `/sambo-martial-art/` | `/types-of-sambo/` |
|---|---|---|
| Section heading | H2 "Types of Sambo and What Makes Each One Special" | H2 "Main Types of Sambo" |
| Subheadings | Combat Sambo · Sports Sambo · Special Sambo · Freestyle Sambo · Self-Defence Sambo | Sport Sambo · Combat Sambo · Freestyle Sambo · Self-Defense Sambo · Special Military Sambo |
| Count | five types | five types |

Same five types, as five H3s, under an H2 that asks the same thing — reordered,
and with the names re-spelled ("Sports" against "Sport", "Self-Defence" against
"Self-Defense", which is issue 58 again). `/sambo-techniques/` carries an H2
"Types of Sambo" as well, so **all three posts explain the types of Sambo**, and
the newest one is built entirely around the keyword the oldest one already had a
section for. For "types of sambo" the site now competes against itself three
ways, and the page Google is most likely to have already indexed for it is the
one that is not called that.

**This pair is the priority of the three.** `/types-of-sambo/` has no subject of
its own that `/sambo-martial-art/` does not already cover; it is a section of an
existing post, re-published as a post. It is also the page carrying issue 0, so
it needs a decision anyway.

**But consolidation is not the first question here.** Neither page should exist
in its current form, because the gym does not teach Sambo (issue 39) and the
newer one advertises a full academy for it. Merging two pages that both describe
a service the business may not offer would just produce one longer page with the
same problem.

**The order of operations matters:**

1. **Answer the Sambo question** (issue 39). Does the gym teach it or not?
2. **Decide issue 0** — `/types-of-sambo/` cannot be published either way until
   the head-injury claim is dealt with.
3. **If the gym does not teach Sambo:** rewrite **one** of the three as a purely
   informational article on Sambo — the technique content on
   `/sambo-techniques/` is the best-written instructional material on the site —
   strip every ownership claim, and 301 the other two into it. `/types-of-sambo/`
   is the clearest candidate to be redirected rather than rewritten: its one
   subject is already a section of `/sambo-martial-art/`. One informational page
   on a discipline the gym admires is defensible; three pages advertising an
   academy that does not exist is not.
4. **If the gym does teach Sambo:** the pages stay, but they need a programme page
   behind them, and the duplication is then worth fixing on its own merits —
   starting by merging `/types-of-sambo/` into the section it duplicates.

#### The gear pair: two posts, one primary keyword, and they disagree about the business — **CRITICAL**

`/muay-thai-gear/` and `/muay-thai-gear-for-safety/` both target **"muay thai
gear"** as their primary keyword. The slugs differ by three words; the subject
does not.

**The newer one links the older one with its own keyword as the anchor text.**
`/muay-thai-gear-for-safety/`'s very first internal link is "muay thai gear like
Fairtex shorts" pointing at `/muay-thai-gear/` — the exact phrase both pages are
trying to rank for, handed from one to the other.

**And the two pages contradict each other about what the business does.** The
older says the gym offers "**personalized gear advice**"; the newer says "**We
stock Fairtex and Yokkao pieces**" and runs eight product sections in the first
person. That is issue 74, and it makes this pair different from every other
cluster in this document: the duplication is not just wasteful, it is
*inconsistent*.

**The wider gear cluster.** Beyond the pair, the site also has
`/muay-thai-gloves/`, `/muay-thai-clothing/`, `/muay-thai-gym-bag/` and
`/muay-thai-backpack/`, plus `/kick-boxing-gloves/` and
`/mixed-martial-arts-training-gloves/`. Six of those eight pages are about an
item of equipment, and the two "gear" pages are general enough to overlap all of
them — the newer one has a Gloves section, a Shorts section and an eight-item
product list.

**What to do: 301 `/muay-thai-gear-for-safety/` into `/muay-thai-gear/`.** The
older URL is shorter, is the exact keyword, has eight months of history, and is
the page the newer one links to. Merge the newer page's eight product sections
into it **rewritten in the third person** (issue 74), and keep the four
item-specific posts as the deeper pages they already are, each linked from the
surviving hub.

Do issue 74 first either way. Consolidating two pages that disagree about whether
the gym sells equipment would just pick one answer at random.

#### The belt quartet: four posts on one sequence of seven colours — **CRITICAL**

Four pages now explain BJJ belt progression:

| Page | Published | Slug carries a local term? |
|---|---|---|
| `/martial-arts-belt-levels/` | 2025-02-22 | no |
| `/brazilian-jiu-jitsu-belts/` | 2025-03-06 | no |
| `/brazilian-jiu-jitsu-belt-ranks/` | 2025-03-28 | no |
| `/bjj-belt-ranks-in-coppell/` | 2025-10-18 | **yes** |

**There is one belt system and it has not changed.** White, blue, purple, brown,
black, coral, red is the same sequence on all four pages. Unlike the self-defence
sextet, where the pages at least ask the question in different words, these
cover an identical, finite, factual subject four times.

**The newest page links one of the other three twice.** `/bjj-belt-ranks-in-coppell/`
points at `/brazilian-jiu-jitsu-belts/` from two separate anchors — once in the
opening section and once from inside a customer review (issue 64). Two of its
nine internal links go to a page it is competing with.

**This one is the natural keeper, with one condition.** It is the only one of the
four with a local slug, and local intent is the only commercial reason this gym
needs a belt page at all: "bjj belt ranks" is an informational query answered
better by larger sites, while "bjj belt ranks in Coppell" is a query only this
business can win. But as published the page does not earn the slug — **its H1 and
all six of its tags omit Coppell entirely** (issue 71), and its only mention of
the town is the address in the contact block.

**What to do: fix the H1, then 301 the other three into it.**

1. Change the H1 to include Coppell — one edit, logged at issue 71.
2. Merge anything unique from the other three. `/martial-arts-belt-levels/` covers
   belts beyond BJJ, so if the client wants a general martial-arts belt page that
   is the one to keep as a second page; otherwise it folds in too.
3. 301 the retired URLs. They carry between them eight months of history, which
   is why redirecting beats deleting.
4. Check the belt timeframes on the survivor against issue 72 before it becomes
   the canonical answer.

#### The kids pair: two posts, one keyword, one audience — **CRITICAL**

`/martial-arts-for-kids/` (16 February 2025) and
`/martial-arts-for-kids-strenght/` (18 October 2025) target the same phrase for
the same reader: a parent deciding whether to enrol their child. This is not
partial overlap or a different angle. The second is the first, rewritten eight
months later and 3,379 words long.

**The newer page links the older one**, with the anchor text "martial art for
kids" — so the site itself tells Google the two are about the same thing,
without saying which should rank.

**The newer one is the stronger page** on structure (14 H2s, 31 H3s, a full NAP
block, Coppell four times) and the **weaker** on accuracy: its URL misspells
"strength" (issue 68), it states a minimum age two years above the real one
(issue 69), it spells the head coach's name wrong (issue 33), and it describes
four disciplines the gym does not teach (issue 39).

**What to do: consolidate into one page and keep the correctly spelled slug.**
`/martial-arts-for-kids/` already has the clean URL and eight months of history,
so it is the natural survivor. Merge the newer page's structure and its NAP
block into it, fix the age and the coach's name on the way in, and **301
`/martial-arts-for-kids-strenght/` into it** — which resolves issue 68 at the
same time.

Whichever survives must link `/kids-bjj-classes/`, which neither currently does.
A parent who reads either post and wants to book has no route to the booking
page from it.

#### And now a sixth, with the slug the whole cluster should have had — raised to **CRITICAL**

`/muay-boran/` was published on 17 October 2025, three months after the fifth.
It is 3,242 words, it has the cleanest slug on the site, and it covers **every
subject the other five cover**:

| Covered by | `/muay-boran/` | the other five |
|---|---|---|
| What Muay Boran is | H2 "What Is Muay Boran?" | all five |
| History and origins | two H2s and four H3s | `/muay-thai-muay-boran/`, `/are-there-multiple-styles-of-muay-boran/` |
| Muay Boran vs Muay Thai | H2 plus two H3s | three of the five |
| The regional styles | H2 "Styles Within Muay Boran", with Chaiya and Korat sections | `/are-there-multiple-styles-of-muay-boran/`, `/muay-chaiya/` |
| Named techniques | two numbered lists | `/10-muay-boran-techniques/`, `/mae-mai-muay-thai-what-is-it/` |

**It links three of the five it is competing with** — `/muay-thai-muay-boran/`,
`/are-there-multiple-styles-of-muay-boran/` and `/10-muay-boran-techniques/` —
which is the same pattern as the self-defence cluster above and the BJJ cluster
at issue 57: the newest page cites its own rivals as sources.

**Six URLs for one query on a site this size is the clearest cannibalisation
case in this document.** "Muay boran" is not a high-volume search; splitting it
six ways guarantees none of them accumulates authority, and the gym's internal
links are now scattered across all six.

**What to do: keep `/muay-boran/` and 301 the other five into it.**

The slug is the exact keyword and the shortest on the site. The scope is the
broadest. The structure is the best — thirteen H2s covering the full subject
where the others each take one slice. Before it can be the keeper it needs three
fixes, all logged elsewhere: the two leaked editorial instructions in its
headings (issue 22), the named-competitor table (issue 52), and the five
sentences missing the word "Whether" (issue 17).

Merge in what is genuinely unique from the others first: the **fifteen Mae Mai
techniques** from `/mae-mai-muay-thai-what-is-it/` and the **depth on Chaiya**
from `/muay-chaiya/`. Everything in the remaining three is already here.

That takes six URLs to one. It supersedes the "five become three" plan below,
which was written before this page existed.

**A fifth: `/mae-mai-muay-thai-what-is-it/`.** Mae Mai already has a section of
its own on `/10-muay-boran-techniques/` — the H3 "Mae Mai : Basic, powerful
strikes and defenses" — and is named again on `/muay-chaiya/` under "Look Mai /
Mae Mai". The new post is a dedicated article on the same concept, and it
repeats the cluster's shared material a fifth time: what the techniques are, why
they matter, and how they differ from Luk Mai.

It does bring something the others do not: a complete list of the **fifteen**
named Mae Mai techniques, where `/10-muay-boran-techniques/` gives ten and
neither of the others enumerates them at all. That list is worth keeping. The
introduction wrapped around it is the fifth copy.

**And now a fourth: `/muay-chaiya/`.** Muay Chaiya is one of the four regional
Muay Boran styles, and it already has a section of its own on
`/are-there-multiple-styles-of-muay-boran/` and another on
`/10-muay-boran-techniques/`. The new post is a 3,000-word article on the same
style, and it repeats the cluster's shared material again: what Muay Boran is,
how it differs from modern Muay Thai (its own H2 **and** a comparison table), the
Wai Khru rituals and the traditional gear.

A dedicated post on one regional style is defensible in itself — it is the
deepest treatment of Chaiya on the site. The problem is that it arrives as the
fourth page competing for overlapping Muay Boran queries, and the third to run a
"Muay Boran vs Muay Thai" comparison.

**What to do:** keep `/muay-chaiya/` as the deep dive on that style and
`/mae-mai-muay-thai-what-is-it/` as the techniques reference, since its list of
fifteen is the fullest on the site; merge `/muay-thai-muay-boran/` and
`/are-there-multiple-styles-of-muay-boran/` into a single "what is Muay Boran"
hub with the regional styles in it, and fold `/10-muay-boran-techniques/` into
the Mae Mai post, whose list supersedes it. That takes five URLs down to three.
301 the two retired URLs, cut the duplicated introductions from the survivors,
and have them all link up to the hub. **Medium priority** — below the stance, Kali, Martial Arts Classes and Best
Martial Arts pairs, which are the same article written twice, but above the
partial overlaps.

**The Muay Thai stance pair is the clearest case on the site, alongside the two
Martial Arts Classes posts (issue 24), and carries the same HIGH priority.**
`/muay-thai-stance/` ("Master the Perfect Muay Thai Stance for Victory") and
`/muay-thai-fighting-stance/` ("Muay Thai Fighting Stance Training Easy Drills
to Improve Your Form") are not two angles on a topic; they are the same article
written twice. Both open by defining the stance, both cover foot placement,
weight distribution, guard position, orthodox versus southpaw, common mistakes
and drills. Someone searching "muay thai stance" and someone searching "muay
thai fighting stance" want the same page, and Google has to choose between two
of them.

The newer post even links to the older one — "specialize in Muay Thai" points at
`/muay-thai-stance/` — which tells Google the two are related without telling it
which one to rank.

**What to do about this pair:** keep one URL, merge anything unique from the
other into it, and 301-redirect the retired URL to the survivor. `/muay-thai-
stance/` is the shorter, cleaner URL and the older post, so it is the natural
survivor unless the analytics say otherwise. Do not simply delete the loser: a
301 keeps whatever links and ranking history it has.

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

The twenty-six newer posts each have their own FAQ, so the fix is to do the same for
these thirteen.

### 10. Outbound links to unrelated, weak or foreign-language sources, one to an American-football article — SEO, CONTENT — **High**

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
· `/muay-thai-muay-boran/` "energy" → *Energy*, the physics article; the sentence is about a fighter's energy, not joules
· `/muay-thai-gym-bag/` "passion" → *Passion*, a Wikipedia disambiguation page listing films, albums and the Passion of Jesus
· `/muay-thai-thai-boxing/` "discipline" → *Discipline*, the **same disambiguation page** already linked from `/muay-thai-training/`. A second word now joins "strength" in being linked twice to the same list
· `/is-wrestling-a-martial-art/` "strength" → *Strength*, the **same disambiguation page** already linked from `/kick-boxing-bag/` and `/muay-thai-vs-mma/`. Three posts now send readers to one disambiguation list from the same single word
· `/martial-blade-concepts/` "reliability" (FAQ: "built for real situations where speed and **reliability** matter most") → *Reliability*, a Wikipedia disambiguation page covering engineering, statistics, psychometrics and computer networking. The link also swallows the leading space, so the underline starts before the word
· `/muay-thai-vs-mma/` "strength" (Conclusion: "if you want to build **strength**, discipline…") → *Strength*, a Wikipedia disambiguation page listing physical strength, strength of materials, statistics, chess and several songs. The site now links three different words — "Strength", "strength" and "stronger" — to three Wikipedia disambiguation pages
· `/muay-thai-backpack/` "efficiency" (Conclusion: "a quality backpack improves your efficiency, comfort, and confidence") → *Efficiency*, the general article on the ratio of useful output to input. Not a disambiguation page this time, but the physics-and-economics sense has nothing to do with packing a gym bag, and it is the post's only outbound link

**A link to the Italian Wikipedia, from an English-language US site.**
`/mae-mai-muay-thai-what-is-it/` links the phrase "Mae Mai Muay Thai " to
`it.wikipedia.org/wiki/Mae_Mai_Muay_Thai` — the **Italian** article. A reader in
Texas clicks a link in an English sentence and lands on a page written in
Italian. There is an English Wikipedia article on Muay Boran that covers the same
ground, and the site links English Wikipedia correctly on five other posts, so
this is a slip rather than a policy.

It is the only outbound link on the page, so it is also the only place that page
sends a reader, and it sends them somewhere most of them cannot read.

**An outbound link to a Quora thread.** `/kickboxing-techniques/` links the words
"side kick" to `quora.com/Is-the-back-kick-and-the-spinning-side-kick-the-same` —
a user-generated Q&A thread, cited as the authority on the difference between two
kicks, from a page whose own headline calls the gym's coaching professional. If
the distinction is worth explaining, the gym's own coaches can explain it; if it
needs a citation, it should not be an anonymous forum answer.

**Six posts get it right.** `/10-muay-boran-techniques/` links " Muay Boran " to
Wikipedia's *Muay boran* article — anchor and destination matching, though the
link swallows a space on each side of the phrase, so the underline extends past
both ends. `/kickboxing-techniques/` links the word
"kickboxing." to Wikipedia's *Kickboxing* article — anchor and destination
matching exactly, though the link swallows the full stop after the word, so the
underline runs one character past the end of the sentence.
`/muay-thai-vs-kickboxing/` links "kickboxing" to
Wikipedia's *Kickboxing* article, `/sambo-martial-art/` links "martial arts" to
*Martial arts*, `/muay-thai-weight-classes/` links "ONE Championship" to
*ONE Championship*, and `/muay-thai-fighting-stance/` links "Muay Thai" to
*Muay Thai*. In each the anchor text and the destination match, and the target is
a real article rather than a disambiguation list. Six out of the thirty
across 57 posts, which shows the rest could have been done the same way rather
than needing to be removed.

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

**A link to the Wikipedia article on the concept of purpose, on
`/mma-gyms-near-me/`.** The page's closing paragraph reads:

> …it's about how you feel in the space, the connection you build, and the way
> it all comes together with sense and [**purpose**](https://en.wikipedia.org/wiki/Purpose).

The word "purpose" is linked to `en.wikipedia.org/wiki/Purpose`, the philosophy
article on teleology. It is the only outbound link on the page. A reader clicking
it leaves a gym's conversion page for an encyclopaedia entry on the meaning of
intention — and, as with the links above, it passes ranking signal off the site
for nothing in return. This is a link placed because a word could be linked, not
because a reader needed it.

#### The worst link on the site: "rushing" → American football

`/mixed-martial-arts-near-me/` links the word **rushing** to
`en.wikipedia.org/wiki/Rushing`. That article is about **rushing in American
football** — the act of advancing the ball by running with it, gridiron
statistics, career rushing yards. It has nothing to do with martial arts, and
nothing to do with the sense in which the page uses the word.

The sentence it sits in is about not hurrying a beginner:

> …you'll grow confident, move with purpose, and feel safe and supported as you
> improve. It's all about building confidence—not [**rushing**](https://en.wikipedia.org/wiki/Rushing)
> to prove yourself.

"Rushing" there means *hurrying*. The link goes to a page about a football
statistic. It is also inside a **FAQ answer**, so it is part of the page's
`FAQPage` structured data — the one block of content Google is most likely to
lift into a rich result.

**This beats the previous worst case.** The Nogi post's link to the Japanese town
of Tochigi was at least a real place name that appeared in the text. This one
takes a common English verb, matches it to an unrelated sport's jargon article,
and ships it. No human read the sentence and thought the reader wanted gridiron
statistics; something matched the string "rushing" to a Wikipedia title.

Taken with the "purpose" link on `/mma-gyms-near-me/` — published the same
evening, three minutes apart — the pattern is clear: abstract words in closing
paragraphs are being auto-linked to whatever Wikipedia article shares their name.
Both pages leak ranking signal to Wikipedia and send readers away at the exact
moment the page is asking them to book a class.

**Why this issue moves from Medium to High.** Thirty-two pages now carry weak or
wrong outbound links, and two of them are actively misleading rather than merely
unhelpful. Every one is `target="_blank"` and passes authority off the site for
nothing in return.

**What to do:** remove the four clearly wrong links, the Wikipedia "purpose"
link, and the Wikipedia "rushing" link; replace or remove the generic ones. Then
find whatever is auto-linking single words and turn it off.

### 11. Blurry, upscaled featured images — SEO — Medium

The page stretches a small image to a much larger size, so it looks soft, and
the large declared size misleads the browser.

| Post | File actually served | Displayed at |
|---|---|---|
| `/muay-thai-stance/` | 300×188 thumbnail | 999×624 |
| `/kick-boxing-classes/` | 800×500 | 1020×638 |

A full 800×500 version of the Muay Thai Stance image exists on the server; the
page just isn't using it.

**And at last a post where every image matches — `/muay-thai-gear-for-safety/`.**
All three of its images are **1200×680**: same width, same height, same aspect
ratio, same full-width rendering. It is the first post in the project where that
is true. The three before it ran 1200×628 / 1280×720 / 1024×536, then
1200×628 / 1024×536 / 1200×628, then 1200×680 / 1024×580 / 1024×536.

Worth recording as the target: one size, applied to every image in a post. The
only note against them is weight — 94 KB to 101 KB each, where the 1024px
derivatives elsewhere on the site run 55 KB to 80 KB — so serving the 1024
version to narrower screens via `srcset` would keep the consistency and cut the
page weight.

**The opposite problem on `/muay-boran/`: three different sizes on one page.**
Its three images are **1200×628**, **1280×720** and **1024×536** — three widths
and two different aspect ratios, in one article. The first two are uploaded with
no size suffix at all, so the theme serves the full-resolution file and renders
it at the container width; the third uses WordPress's 1024px derivative like
every other post on the site.

Nothing is blurry here — if anything the first two are larger than they need to
be, at 112 KB and 150 KB — but the page steps between three shapes as a reader
scrolls, and the 1280×720 one is the only 16:9 image in the project. The fix is
to settle on one size, 1024×536, and re-crop the other two to match.

### 15. Duplicated and near-identical headings — SEO, CONTENT — Medium

**A caption that repeats its own alt text, on `/sambo-techniques/`.** The third
image carries both:

```html
<img alt="Experienced Instructors Of Sambo Techniques" …>
<figcaption>Experienced Instructors Of Sambo Techniques</figcaption>
```

Identical strings. A screen reader announces the alt and then reads the caption,
so the phrase is spoken twice, and a sighted reader sees the caption restate the
heading two lines below it ("Experienced Instructors and Custom Plans"). Alt text
and captions do different jobs — the alt describes the picture for someone who
cannot see it, the caption adds something the picture does not say — and here
neither does either.

It is also the only captioned image in the post, so the caption is not part of a
pattern; it looks like the alt field was filled and then pasted into the caption
field as well.

**Two H2s differing by one preposition, three sections apart, on
`/muay-thai-gear-for-safety/`:**

> ## Benefits **of** Choosing Sixth Sense MMA
> ## Benefits **to** Choosing Sixth Sense MMA

Both are in the table of contents, where they sit four entries apart and read as
the same link twice. "Benefits to Choosing" is also not idiomatic English — the
preposition is wrong as well as duplicated.

The two sections do contain different material: the first is a prose paragraph
about community and confidence, the second a five-item bulleted list. So this is
a naming failure rather than duplicated content — but a reader scanning the
contents has no way to tell which one they want, and Google is offered two
near-identical jump targets.

**Why this raises the issue from Low to Medium.** It is now the eighth instance,
and the pattern has widened from exact repeats to *near* repeats, which are
harder to catch with a search. Together with the duplicated H3 on
`/best-fighting-style-for-self-defense/` and the two back-to-back H2s on
`/mma-vs-kickboxing-for-self-defense/`, this is a systematic absence of any
check that a page's own headings are distinct.

**What to do:** rename the second one after what it contains — "What You Get as a
Member", or similar — and add a heading-uniqueness check to the pre-publish
read-through recommended at issue 22. A single pass comparing each page's
headings against each other catches all eight instances.

**The same H3 published twice on `/best-fighting-style-for-self-defense/`:**

> ### Why Choose Sixth Sense MMA for Self Defense Training?

It appears once under "Training at Sixth Sense MMA: A Gateway to Effective Self
Defense" and again under "How to Start Your Self Defense Journey at Sixth Sense
MMA", roughly 5,000 characters apart, with different text beneath each. Unlike
the duplicated section on `/self-defense-classes-near-me/` (issue 29) the
content differs, so this is a heading problem rather than a content one — but
two identical H3s on one page produce two identical anchor targets and tell a
reader the same section has arrived twice.

**Two H2s saying the same thing, back to back, on `/mma-vs-kickboxing-for-self-defense/`:**

> ## MMA vs Kickboxing Differences
> …
> ## Differences Between MMA and Kickboxing

They are adjacent, separated only by one paragraph, an image and an H3. The
second is followed by the 22-row comparison table, so the section that actually
delivers the differences is the second one; the first is a short preamble under
a heading that promises the same thing. A reader who clicks "MMA vs Kickboxing
Differences" in the table of contents lands above a section that does not
contain the comparison.

Both are also published as tags (issue 30), so the same phrase now exists as two
headings and two tag archives on one post.

**What to do:** merge them, or retitle the first to what it actually covers —
it is an introduction to the comparison rather than the comparison itself.

The same heading text is repeated inside a single post.

**`/martial-arts-belt-levels/`** — three repeats:
- "Common Belt Colors and Their Meanings" appears twice
- "Variations in Belt Systems Across Martial Arts Disciplines" appears as a main
  heading and again as a sub-heading inside its own section
- "Requirements for Advancing Through Belt Levels" appears the same way

**`/kick-boxing-gloves/`** — "Factors to Consider When Choosing Kick boxing
Gloves" appears twice.

**`/muay-thai-vs-mma/`** — "New Skills to Learn" appears twice in a row, the
second time as "New Skills to Learn (Bullet Points)" (see issue 22).

**`/muay-chaiya/`** — "How long does it take to learn?" is published **twice on
the same page**: once as an H2 section, and again as an H3 about four screens
lower, each with its own answer. The page's FAQ accordion then asks it a third
time, as "How long does it take to learn Muay Chaiya?". Three answers to one
question on one URL. In the rebuild the two headings keep their levels and the
second takes a suffixed id, `how-long-does-it-take-to-learn-2`, so both anchors
still resolve.

**`/muay-thai-thai-boxing/`** — both of its in-article images carry a visible
caption that simply repeats the heading immediately above the image, word for
word: "Mental Toughness and Muay Thai: Strengthening Your Mind" and "Getting
Started with Muay Thai Building Confidence from Day One". A caption should say
something about the picture; these are the only image captions anywhere on the
site, and both are duplicates. Either write a caption that describes the image
or delete the caption.

**In the rebuild:** both captions are reproduced, using the caption markup the
project already uses for the captioned tables on `/martial-arts-for-kids/`, so
no new CSS was needed.

### 16. Empty headings — SEO — Low

Heading tags with no text in them.

**Affected — 3 headings on 3 posts:**
- `/best-martial-arts-for-self-defense/` — an empty sub-heading (H3) between
  Taekwondo's "Training Focus" and "Jeet Kune Do"
- `/best-martial-arts/` — a main heading (H2) holding only an image, with no text
- `/teens-bjj-near-me/` — an empty H3 between "How BJJ Compares to Other Martial
  Arts" and the comparison table

The newest one is the most instructive, because its markup shows how it
happened:

```html
<h3 class="wp-block-heading"><strong>How BJJ Compares to Other Martial Arts</strong></h3>
<h3 class="wp-block-heading"><strong>&nbsp;</strong></h3>
<figure class="wp-block-table">…
```

The second H3 contains a `<strong>` holding a single no-break space — not an
empty tag, a tag with invisible content, which is why it survives WordPress's own
empty-block cleanup. Somebody pressed Return after the heading, the editor
created a second heading block, and a stray space kept it alive. It sits directly
above the comparison table, so the page's outline reads: heading, **blank
heading**, table.

**What it costs:** an empty heading is announced by a screen reader as a heading
with no name, which is a dead end for anyone navigating by headings; and it
breaks the document outline for the section that follows it, so the comparison
table appears to belong to a heading that says nothing.

**What to do:** delete the three empty headings. Then, because this one is a
`<strong>` with a space rather than a truly empty tag, search the site for
`<h2>`, `<h3>` and `<h4>` elements whose text is only whitespace — a plain
"empty heading" check will miss them.

**In the rebuild:** all three are **skipped rather than reproduced**, which is
the one place the rebuild deliberately departs from the live markup, because an
empty heading is an accessibility fault rather than content. The build asserts
that exactly one heading was skipped on this post.

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

### 18. Image alt text typos and scrambled descriptions — SEO — Low

**A no-break space inside a sentence, not at the end of it.**
`/types-of-sambo/` publishes the alt text `Who Can Practice Sambo by Sixth
Sense MMA` with a **U+00A0 no-break space between "Practice" and "Sambo"**. Every
earlier instance in this issue was trailing whitespace, which is invisible and
harmless; this one sits mid-phrase, so it survives copy-and-paste into a CMS
field, a spreadsheet or a sitemap and reappears as a stray character or a
`&nbsp;` wherever the alt text is reused. It is the same editor paste that
produced the double gaps in the headings on `/is-wrestling-a-martial-art/`
(issue 17). The rebuilt page reproduces it rather than normalising it, so the
live and rebuilt pages still match byte for byte.

**Trailing whitespace inside alt text, on `/muay-thai-gear-for-safety/`.** The
third image's alt is:

```
Muay Thai Products<U+00A0>
```

A **no-break space** sits between the final "s" and the closing quote. It is
invisible, it does no harm to a screen reader, and it is worth recording only
because of what it indicates: the alt text was not typed into the field, it was
pasted from the heading, and the heading's own trailing whitespace came with it.
The same fault appears as a trailing no-break space inside a heading on
`/martial-arts-for-self-defense/` (issue 17).

**And the brand run together in lower case, on `/bjj-belt-ranks-in-coppell/`.**
Two of its three images append the business name to the alt text like this:

```
bjj belt ranks by sixthsense mma
Kids BJJ Belt System by sixthsense mma
```

"**sixthsense mma**" — run together and entirely lower case. It is an eleventh
spelling of the brand (issue 33) and the first to appear in alt text, which is
what a screen reader announces and what Google reads for image search. The third
image on the same page gets it right, "BJJ Classes at Sixth Sense MMA", so the
page is inconsistent with itself.

Appending the business name to alt text adds nothing in the first place — the
image is already on the business's own site — so the fix is to delete the suffix
rather than correct it.

**The clearest example yet, on `/muay-boran/`.** The second image's alt text is:

```
MuMuay Thai and Muay Boran Differencesay Thai and Muay Boran Differences
```

The intended text, "Muay Thai and Muay Boran Differences", has been pasted into
the middle of itself after the first two characters. A screen reader announces
the whole string. It is the kind of slip that happens when text is
double-pasted into a field without looking at it, and it sits on the newest post
on the site.

Three images are described as "**marble** arts for kids" instead of "martial
arts for kids". Alt text is read by screen readers and used by image search.

**Affected:** `/martial-arts-for-kids/`, on 3 of its 4 images.

**A description that begins with an underscore.** The featured image of
`/jiu-jitsu-near-me/` has the alt text "**_**Jiu jitsu near me with caring
coaches and budget friendly by sixthsensemma.com" — a stray underscore before the
first word, on the image used for social sharing of the site's main local-intent
page.

**A description with the brand name spliced into the middle of it.** The third
image on `/kidney-punch/` has the alt text:

> "KIdeny Punch In Modern **by sixth sense mma**Fighting"

The word "Fighting" belongs after "Modern"; the brand has been pasted in front
of it, with no space on either side of the join. The same page's second image
reads "by **sixths** sense mma". So of three images on one post, one has the
brand misspelt and one has its description cut in half by it. The filename of
the third is misspelt too (issue 26).

**A stray letter on another:** the featured image of `/martial-arts-kali-sticks/`
has the alt text "**z**Martial Arts Kali Sticks" — a keystroke left at the front
of the description. It is the first image on the page and the one used for
social sharing.

**In the rebuild:** reproduced exactly, stray "z" included.

**Two more on `/fight-training-near-me/`.** The featured image's alt text is:

> "Fight Training Near Me**by** sixthsensemma.com"

— the space before "by" is missing, so a screen reader announces "near meby".
The second image's alt is worse:

> "Types of Fight Training Available at SixthSense MMA**Available at SixthSense
> MMA**.com"

The phrase "Available at SixthSense MMA" appears twice, run together with no
space, and the whole thing ends in a bare ".com" belonging to a domain name that
is not there. This is alt text generated from the filename, which carries the
same duplication (issue 26), rather than written for the image.

**Two more on `/bjj-classes-near-me/`.** The featured image's alt is
"BJJ Classes Near Me **SIXTHSENSEMMA.**" — the domain in block capitals with a
full stop and no ".com", which a screen reader will read out letter by letter or
as a shout. The third image's alt begins with a stray underscore:
"**_**bjj Coaching Method by sixthsensemma.com". Neither describes the picture;
both are the filename with the domain bolted on, which is the pattern across the
whole site.

**And on `/martial-arts-gyms-near-me/`,** the second image's alt carries the
filename's own typo straight through: "**type ofmartial arts** BJJ MMA Muay Thai
by sixthsensemma.com" — "of" and "martial" run together, exactly as in the
upload name (issue 26). The featured image's alt is "martial arts gyms near me
sixthsensemma", which is the page's keyword plus the brand and says nothing
about the picture.

**A misspelt domain in alt text, on `/mma-gyms-near-me/`.** The second image's
alt is "**_**Hyper Local Training Environments by **sixthsensemma.cm**" — a
leading underscore, and the domain written ".cm" instead of ".com". `.cm` is
Cameroon's real country code, long used for typosquatting, so the alt text of
an image on the client's own site names a domain the client does not own. It is
alt text rather than a link, so nothing is clickable, but it is the client's
brand misspelt in the one place a screen reader will read it aloud.

**Two alts shouting the domain in block capitals, on
`/brazilian-jiu-jitsu-near-me/`.** The featured image's alt is "Brazilian Jiu
Jitsu NEAR ME **BY SIXTHSENSEMMA.COM**" and the third image's is " Brazilian Jiu
Jitsu NEAR ME WITH CERTIFIED COACHES **BY SIXTHSENSEMMA.COM**" — the second
beginning with a stray leading space. Some screen readers spell out all-caps
strings letter by letter, so a blind visitor hears the domain read out character
by character twice on one page. Neither alt describes what is in the picture.

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

`/martial-arts-near-me/` disagrees with itself on both dates in the same way
`/muay-thai-gym-bag/` does — the times match to the second, the dates do not:

| | Social tags (`article:*`) | Structured data |
|---|---|---|
| Published | 2025-08-03 21:34:26 | 2025-08-02 09:34:26 |
| Modified | 2025-08-11 09:59:29 | 2025-08-02 09:59:29 |

Two sources, two answers, on the newest post on the site. The rebuild uses the
social-tag dates, which are the later and the internally consistent pair.

**Observed on:** `/martial-arts-kali-stick-2/`,
`/best-martial-arts-for-self-defense/`, `/martial-arts-weapons/`,
`/different-types-of-martial-arts/`, `/martial-arts-belt-levels/`,
`/kick-boxing-gloves/`, `/muay-thai-stance/`, `/what-is-muay-thai/`

`/what-is-muay-thai/` is the clearest case: it was published 2025-05-08, but its
modified date read `2026-09-18T03:01:08` — the same day it was fetched, and hours
ahead of the fetch in UTC terms.

Separately, `/best-martial-arts/` gives two different modified dates in two
places: `2025-06-09` in its social tags and `2025-02-05` in its structured data.

`/muay-thai-gym-bag/` disagrees with itself on **both** dates:

| | Social tags (`article:*`) | Structured data |
|---|---|---|
| Published | 2025-06-11 10:12:13 | 2025-06-10 10:12:13 |
| Modified | 2025-07-04 06:10:57 | 2025-06-10 06:10:57 |

The times match to the second while the dates differ, which points at something
rewriting one of the two rather than at a genuine edit. Google reads both, so
the two sources should agree.

**What to do:** check whether an SEO or caching plugin is setting the modified
date automatically. Treat this one as a question for whoever manages the plugins
rather than a confirmed fault.

---

## GEOGRAPHIC TARGETING

### 14. Content that points readers at the wrong place on the map — GEOGRAPHIC TARGETING — **CRITICAL**

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

**A published review that puts the gym in Pakistan.** The first of the four
testimonials on `/muay-thai-thai-boxing/` reads:

> "I trained at Sixth Sense MMA during my **3-month stay in Pakistan** —
> honestly, it's better than many gyms back home. The trainers are world-class!"
> — Jessica M. (Australia)

Sixth Sense MMA is in Coppell, Texas. The other three reviews on the same page
are signed from the UK, France and Canada, and none of them mentions Texas or
Coppell. For a business whose customers all live within driving distance, a
review section that names four other countries and locates the gym in a fifth is
worse than having none: a local reader learns nothing about whether people near
them train there, and a search engine trying to confirm where this business
operates is handed Pakistan.

**What to do:** remove or rewrite that review. If these are real people who
trained at the Coppell gym, say so plainly; if they are placeholder copy, delete
them. Replace them with reviews from Dallas–Fort Worth students, ideally
collected on Google Business Profile and linked to (see issue 32).

**Ten reviews from ten cities the gym is not in, on a "near me" page.**
`/fight-training-near-me/` carries ten testimonials, and every one of them is
attributed to a different city:

| Review | City given |
|---|---|
| Amanda R. | Phoenix, AZ |
| Jason M. | Dallas, TX |
| Nina W. | San Diego, CA |
| Luis T. | Miami, FL |
| Rachel K. | Portland, OR |
| Tyrone B. | Atlanta, GA |
| Kim L. | Chicago, IL |
| Brian C. | Denver, CO |
| Jasmine D. | Los Angeles, CA |
| Noah S. | Brooklyn, NY |

Nine of the ten are hundreds or thousands of miles from Coppell, and the tenth,
Dallas, is the metro area rather than the town. This is the page whose entire
purpose is to rank for "near me" — the one page where every signal should say
Coppell. Instead it reads as a national chain.

The detail that makes it worse: **Kim L. from Chicago, IL** says "I joined after
moving into the area and looking for something close." A review that is
explicitly about training locally, labelled with a city 900 miles away.

One of these names also appears on another post's review block — Rachel K. is on
`/martial-arts-near-me/` too — which is the pattern already logged as issue 32.

**What to do:** if these are real reviews, the cities are wrong and should be
removed or corrected to where the person actually trains. If they are not real,
they should come down — see issue 32. Either way, a local landing page should
not attribute its social proof to ten other metros.

**And again the next day, this time stated as a claim rather than implied.**
`/bjj-classes-near-me/` carries seven reviews under the H2 "Real Reviews from
Our BJJ Students **Across the USA**", with the line "From coast to coast" in the
paragraph beneath it. The reviewers are Lisa M. (NYC), Marcus R. (LA), Sara K.
(Austin), David L. (Chicago), Nina P. (San Diego), Josh T. (Miami) and Amber S.
(Seattle). Six of the seven are in cities on the other side of the country, and
Austin is 200 miles from Coppell.

This one is severe enough to be logged separately as **issue 53**, because
unlike the pages above it does not merely label reviews with distant cities — it
puts the nationwide claim in a heading.

**And once more the following day.** `/martial-arts-gyms-near-me/` carries nine
testimonials introduced with "Here's what real members **from across the U.S.**
have to say" — Jordan M. (Phoenix, AZ), Ashley L. (Houston, TX), Chris D.
(Sacramento, CA), Monica K. (Orlando, FL), Daniel P. (Brooklyn, NY), Rebecca S.
(Chicago, IL), Eric J. (Denver, CO), Tina R. (Atlanta, GA) and Brian T. (San
Diego, CA). Houston is the only Texas city and it is 240 miles away. That is
four consecutive "near me" pages carrying twenty-six testimonials between them,
and **not one names Coppell, Irving, Lewisville, Grapevine or any town in the
gym's actual catchment**. Also logged under issue 53.

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

**A misspelt filename: "KIdeny".** The third image on `/kidney-punch/` is
uploaded as `KIdeny-Punch-In-Modern-Fighting-1024x536.jpg` — the subject of the
post, and the page's primary keyword, misspelt in the filename with a capital
"I" in the middle. Filenames cannot be corrected after upload without breaking
the link, so this one is baked in unless the image is re-uploaded.

**A Muay Korat photograph filed under Tai Chi.** The third image on
`/are-there-multiple-styles-of-muay-boran/` is served from
`Tai-Chi-used-for-self-defence-1-1024x536.jpg`. The picture itself is correct —
it shows a fighter kicking a wooden post in a traditional Thai training area,
with "Muay Korat" printed across it, and it sits under the "Muay Korat" heading
with the alt text "muay korat by sixthsensemma.com" — so this is a filename
problem, not a wrong image. It was uploaded in the same batch as the Tai Chi
post's images and kept that post's name. An image search engine reading only the
filename is told this Muay Boran photograph is about Tai Chi. The featured image
on the same post also carries a **double hyphen** before its dimensions,
`Multiple-Styles-of-Muay-Boran--1024x536.jpg`, which is what WordPress produces
when the uploaded name already ended in a hyphen.

**Three WhatsApp exports uploaded straight to the media library.** Every image
on `/is-tai-chi-a-martial-art/` is a WhatsApp file, uploaded with the name
WhatsApp gave it:

- `WhatsApp-Image-2025-06-23-at-2.22.26-PM-1-1024x536.jpeg`
- `WhatsApp-Image-2025-06-23-at-2.22.26-PM-1024x536.jpeg`
- `WhatsApp-Image-2025-06-23-at-2.25.48-PM-1024x536.jpeg`

Two problems beyond the naming. **Quality:** WhatsApp re-compresses every photo
it sends, so what reached the site is a copy of a copy — these three are 53 KB,
60 KB and 71 KB at 1024×536, roughly half the weight of the site's other images
at the same size, and that difference is lost detail, not saved bandwidth.
**Workflow:** the filenames publish the date and the minute the picture was sent
in a private chat, which is more than a public page needs to say about how it
was made. The first two differ only by a `-1` suffix because they were sent in
the same second; they are different pictures (checked byte for byte), but
nothing in the names says so.

**A filename that repeats itself, on `/fight-training-near-me/`.** The second
image is uploaded as:

```
Types-of-Fight-Training-Available-at-SixthSense-MMAAvailable-at-SixthSense-MMA-1024x536.jpg
```

"Available-at-SixthSense-MMA" appears twice, joined with no separator, which is
what happens when a name is pasted into a field that already contains it. At 90
characters it is the longest filename on the site, and the page's alt text is
generated from it, so the duplication is published twice over (issue 18). The
other two images on the same post are named sensibly, so this is one slip rather
than a pattern — but it is the kind that survives forever, because a media
library filename is never revisited.

**Three filenames each ending in a double hyphen, on `/bjj-classes-near-me/`.**
All three uploads are named `…--1024x536.jpg`:
`BJJ-Classes-Near-Me--1024x536.jpg`, `BJJ-Is-Ideal-for-All-Ages--1024x536.jpg`
and `bjj-Coaching-Method--1024x536.jpg`. The doubled hyphen means each source
file was saved with a trailing hyphen or space before WordPress appended the
size suffix. It is cosmetic on its own, but it is three for three on one post,
so it is how the files are being exported rather than a slip — and it is the
same kind of unreviewed-pipeline tell as the duplicated phrase above.

**A missing space inside a filename, on `/martial-arts-gyms-near-me/`.** The
second image is uploaded as `type-ofmartial-arts-BJJ-MMA-Muay-Thai-1024x536.jpg`
— "of" and "martial" run together with no hyphen between them, so a search
engine reads the token "ofmartial". The alt text is generated from the filename
and inherits the same typo (issue 18).

**Two uploads differing only by a "-1" suffix, on `/brazilian-jiu-jitsu-near-me/`.**
The featured image is `Brazilian-Jiu-Jitsu-NEAR-ME-1024x536.jpg` and the third
image is `Brazilian-Jiu-Jitsu-NEAR-ME-**1**-1024x536.jpg`. They are genuinely
different pictures — checked byte for byte, 70,780 and 77,786 bytes — but the
"-1" is what WordPress appends when a file is uploaded under a name already in
the library, so the filename records a collision rather than describing the
image. The second one is the coaches photograph; nothing in its name says so,
and its alt text has to carry the whole description on its own (issue 18).

**What to do:** get the original files from whoever took them, not the WhatsApp
copies, and upload those under descriptive names. Re-upload the duplicated-phrase
file under a short name and fix its alt text at the same time, trim the trailing
hyphen in whatever export step is adding it, fix "ofmartial", and rename the
"-1" file after what it shows.

**And straight back to WhatsApp exports on the very next post.** All three
images on `/self-defense-classes-near-me/`, published eight days after the post
below, are named:

```
WhatsApp-Image-2025-09-16-at-4.17.58-PM-1024x536.jpeg
WhatsApp-Image-2025-09-16-at-4.17.59-PM-1024x536.jpeg
WhatsApp-Image-2025-09-16-at-4.17.58-PM-1-1024x536.jpeg
```

Two of the three were sent in the **same second** (4.17.58 PM) and are
distinguished only by the `-1` suffix WordPress adds on a name collision — the
same pattern already logged on `/brazilian-jiu-jitsu-near-me/`. They are
genuinely different pictures, checked byte for byte at 68,458 and 71,740 bytes.

So the improvement noted below did not hold for even one post. The filenames
publish the date and minute the photographs were sent in a private chat, and say
nothing about martial arts, self defense or Coppell. The alt text has to carry
the entire description on its own.

**And a third post, one day later than the improvement noted below.** All three
images on `/best-self-defense/` are WhatsApp exports again:

```
WhatsApp-Image-2025-09-17-at-3.22.08-PM-1024x536.jpeg
WhatsApp-Image-2025-09-17-at-3.22.07-PM-1-1024x536.jpeg
WhatsApp-Image-2025-09-17-at-3.22.07-PM-1024x536.jpeg
```

The same pattern for the third time: two of the three sent in the same second
(3.22.07 PM), separated only by the `-1` suffix WordPress adds on a name
collision. They are different photographs — verified byte for byte at 40,889 and
101,003 bytes — but nothing in the filenames says so.

**The three-times-in-a-row part is the finding.** `/is-tai-chi-a-martial-art/`
in June, `/self-defense-classes-near-me/` in September, and this one the next
day. The filenames publish the date and the minute a photograph was sent in a
private chat, and say nothing about martial arts, self defense or Coppell.

**Quality, not just naming.** WhatsApp re-compresses every image it sends. These
three are 40 KB to 101 KB at 1024×536 — the 40 KB file is roughly a third the
weight of the 101 KB one at identical dimensions, which is what heavy
re-compression looks like. Whoever took these photographs has better originals.

**What to do:** stop routing photographs through WhatsApp on the way to the
media library. Get the original files, upload them under descriptive names —
`brazilian-jiu-jitsu-self-defense-coppell.jpg` rather than a timestamp — and
the alt text stops having to carry the whole description on its own (issue 18).

**The newest uploads are noticeably better, which is worth saying.** The three
images on `/which-martial-art-is-best-for-self-defence/` — the most recently
published post, uploaded in **September 2025** rather than August — are named:

```
Which-Martial-Art-is-Best-for-Self-Defence-by-sixthsensemma.com_-1024x536.jpg
Muay-Thai-for-Self-Defence-by-sixthsensemma.com_-1024x536.jpg
Brazilian-Jiu-Jitsu-for-Self-Defence-by-sixthsensemma.com_-1024x536.jpg
```

Each one describes the section it appears in, each matches its heading, and none
is reused from another post. After the WhatsApp exports, the Canva placeholders,
the bare numbers and the duplicated phrases catalogued above, this is the first
batch in the project that gets asset naming right. Whatever changed between the
August and September uploads should be kept.

Two small things remain: every filename ends in `by-sixthsensemma.com_` with a
**trailing underscore**, which is WordPress replacing the final full stop of
".com"; and appending the domain to every filename adds length without adding
information, since the file is already on that domain. Neither is worth
retrofitting.

**Three images still carrying Canva's default name.** All three images on
`/muay-thai-fighting-stance/` are uploaded as `Add-a-subheading`:
`Add-a-subheading-2-1024x536.png` (the featured image),
`Add-a-subheading-4-1-1024x536.png` and `Add-a-subheading-1024x536.png`. That is
Canva's placeholder design name, saved and uploaded unchanged. The numbering
also runs out of order — the featured image is "-2", the second is "-4-1" and
the third has no number at all — which suggests more files in the same series
exist in the media library under the same name. A filename is one of the few
parts of an image a search engine can read, and "Add a subheading" says nothing
about Muay Thai.

**The Kali series stretched across a third post.** All three images on
`/martial-blade-concepts/` are `Martial-Arts-Kali-Sticks-3`, `-4` and `-5` —
the same upload series used by `/martial-arts-kali-sticks/`, now serving a post
about knife defence. The pictures themselves are different files (checked byte
for byte), but every filename tells a search engine "Kali sticks" on a page
about blades, and the numbering implies the two posts share one batch of
uploads.

**A whole post built from another post's uploads.** Every image on
`/muay-thai-backpack/` — the featured image and both in-article images — is
served from the `Muay-Thai-Gym-Bag` series: `Muay-Thai-Gym-Bag-5`,
`Muay-Thai-Gym-Bag-3` and `Muay-Thai-Gym-Bag-4`. The three files are genuinely
different pictures (checked byte for byte against the three used on
`/muay-thai-gym-bag/` — no two are the same file), so this is a naming problem
rather than duplicated content. But the filename is one of the few parts of an
image a search engine can read, and all three tell it "gym bag" on a post about
backpacks — two posts that already sit close enough together in search to be
worth keeping distinct.

**What to do:** a housekeeping item. Name each upload after the post and the
section it belongs to; re-upload the Orlando, Muay Thai Clothing, MMA Brands,
Sambo and Muay Thai Backpack images with descriptive names; avoid two files that
differ only by extension, and never leave an upload named as a bare number.

### 50. Eleven "near me" pages competing for the same local searches, three of them on one phrase — SEO — **CRITICAL**

**An eleventh page, and it makes "martial arts near me" a three-way split.**
`/martial-arts-near-me-classes/` was published on 18 October 2025, ten weeks
after the August batch, and it targets the same phrase as two pages already in
this cluster:

| Page | Published | Primary phrase |
|---|---|---|
| `/martial-arts-near-me/` | 2025-08-03 | martial arts near me |
| `/martial-arts-gyms-near-me/` | 2025-08-05 | martial arts gyms near me |
| `/martial-arts-near-me-classes/` | 2025-10-18 | **martial arts near me** |

The newest one uses the phrase **four times in its own body copy** and **links
`/martial-arts-near-me/` directly**, with the anchor text "martial arts near
me" — pointing the exact keyword at the page it is competing with.

**It is also the best of the three**, which is what makes it worth keeping. It
is the only page in the whole eleven-page cluster that names the gym's **real
programmes** — "Intro to Jiu Jitsu", "Little Champions", the free open mat days,
Brazilian Jiu-Jitsu as the actual focus — rather than inventing a service list.
That is logged as a positive at issue 39, with the caveat that it also names two
arts the gym does not teach.

**What to do:** keep `/martial-arts-near-me-classes/` and 301
`/martial-arts-near-me/` and `/martial-arts-gyms-near-me/` into it, after
removing its Karate and Krav Maga claims (issue 39) and its leaked generation
timestamp (issue 70). That resolves three of the eleven in one move and leaves
the plan below unchanged for the rest.

Eight of the nine — `/martial-arts-near-me/`, `/jiu-jitsu-near-me/`,
`/fight-training-near-me/`, `/bjj-classes-near-me/`,
`/martial-arts-gyms-near-me/`, `/mma-gyms-near-me/`,
`/mixed-martial-arts-near-me/` and `/brazilian-jiu-jitsu-near-me/` — were
published within five days of each other and are built to the same plan. The
ninth, `/self-defense-classes-near-me/`, followed six weeks later and is
different enough to be worth describing separately: a local-intent H1, a programs section, a "why choose
us" section, a pricing section, a Coppell map embed and an FAQ.
They target overlapping queries — someone typing "jiu jitsu near me" and someone
typing "martial arts near me" in Coppell are the same prospective member, and
both pages are written to convert them. Their opening H2s are the same sentence
with one term swapped.

| | `/mixed-martial-arts-near-me/` | `/mma-gyms-near-me/` | `/martial-arts-gyms-near-me/` | `/bjj-classes-near-me/` | `/fight-training-near-me/` | `/martial-arts-near-me/` | `/jiu-jitsu-near-me/` |
|---|---|---|---|---|---|---|---|
| Published | 2025-08-05 18:10 | 2025-08-05 18:07 | 2025-08-05 13:25 | 2025-08-04 11:06 | 2025-08-04 08:58 | 2025-08-03 | 2025-08-02 |
| Words in the article body | 2,129 | 2,713 | 3,749 | 2,988 | 3,203 | 2,531 | 2,790 |
| Opening H2 | "Looking for Mixed Martial Arts Near Me? SixthSense mma has you covered" | "Looking for MMA Gyms Near Me? SixthSense MMA Has You Covered" | "Looking for a Martial Arts Gym Near You?" | "Looking for BJJ classes Near Me? SixthSense MMA Has You Covered" | "Looking for "Fight Training Near Me"? Sixth sense mma has covered" | "Looking for Martial Arts Near Me? SixthSense MMA Has You Covered" | "Looking for Jiu Jitsu Near Me? SixthSense MMA Has You Covered" |
| Programs section | none; MMA throughout, and MMA has no program page | none; MMA throughout, and MMA has no program page | 5 disciplines, 2 with no program page | 4 disciplines, 2 with no program page | 4 disciplines, 2 with no program page | 4 programs, 2 with no program page | 6 offers, 5 with nothing elsewhere |
| Pricing section | **none at all** (issue 56) | 3 headings, no prices, "budget" in the title | 3 headings, no prices | 2 headings, no prices, "Transparent Pricing" | 1 heading, no prices, promise in the title | 2 headings, no prices | 2 headings, no prices |
| Subheadings | 2 H3s in 7 sections; 16 published as bold paragraphs (issue 54) | 12 H3s | 26 H3s | 18 H3s | 16 H3s + 4 H4s | 16 H3s | 17 H3s |
| Customer reviews | 8, all from other cities (issues 14, 53) | 9 in 3 groups, no locations given | 9, all from other cities (issues 14, 53) | 7, all from other cities (issues 14, 53) | 10, all from other cities (issue 14) | 7 | none |
| Coppell map embed | Yes | Yes | Yes | Yes | Yes | Yes | Yes — the same markup on all seven, same three faults (issue 49) |
| Local business schema | No | No | No | No | No | No | No |

Note the opening-H2 row: six of the seven are the same sentence with one phrase
swapped, and the seventh is the same question shortened. They were written from a
template, four days running — and the last two were published **three minutes
apart**, at 18:07 and 18:10 on 5 August.

**`/bjj-classes-near-me/` and `/jiu-jitsu-near-me/` are the same page.** BJJ *is*
jiu jitsu — "BJJ" is the abbreviation of "Brazilian Jiu Jitsu", and the newer
page says so in its own first sentence: "BJJ (Brazilian Jiu-Jitsu) classes near
me…". These are not two overlapping topics. They are one topic under two names,
each with its own URL, its own reviews, its own pricing section and its own map
of the same building. A searcher typing "bjj classes near me" and one typing
"jiu jitsu near me" in Coppell are looking for the identical class at the
identical address.

Google resolves this by picking one and suppressing the other, and it will not
necessarily pick the better page. Every internal link, every share and every
review that lands on the losing URL is wasted.

**And `/martial-arts-gyms-near-me/` all but duplicates `/martial-arts-near-me/`.**
"Martial arts near me" and "martial arts gyms near me" differ by one word that
adds nothing: a person searching for martial arts near them is searching for a
gym. That is a second near-exact pair inside the same cluster, published two days
apart, and at 3,749 words the newer one is the longest post on the entire site —
the client's biggest single piece of writing is competing with its own page from
Sunday.

**`/mma-gyms-near-me/` makes a third pair, and it is the closest after the BJJ
one.** It and `/martial-arts-gyms-near-me/` were published **five hours apart on
the same afternoon**, both about choosing a gym, both with a pricing section,
both with three groups of testimonials, both with the same Coppell map. The only
difference is whether the page says "martial arts" or "MMA" — and this gym
teaches BJJ and Muay Thai, so neither phrase describes a distinct offering. Two
pages, one subject, one afternoon.

So the cluster contains three near-exact pairs:

| Group | Why they are the same page |
|---|---|
| `/bjj-classes-near-me/` + `/jiu-jitsu-near-me/` + `/brazilian-jiu-jitsu-near-me/` | **Three** names for one discipline — see **issue 57** |
| `/mma-gyms-near-me/` + `/mixed-martial-arts-near-me/` | MMA **is** mixed martial arts; published **three minutes apart** |
| `/martial-arts-gyms-near-me/` + `/martial-arts-near-me/` | "gyms" adds nothing to "martial arts near me" |
| `/martial-arts-gyms-near-me/` + `/mma-gyms-near-me/` | Same subject, same structure, five hours apart |

**The BJJ group is now three pages, not two,** which is severe enough to have its
own entry: see issue 57.

**A tenth followed the next day: `/teens-bjj-near-me/`.** It is the fourth page
targeting BJJ local search and belongs with the other three under issue 57 —
but, like the self-defence page above, it earns its place. It is the only page
in the cluster written for **one audience** (parents of teenagers), it carries
the site's only two **local** tags (issue 30), and it is the only post in the
whole batch that **links its own program page**, `/teen-bjj-classes/`. That is
the behaviour the other nine should have copied.

**The ninth page, `/self-defense-classes-near-me/`, is the one that should have
been the template.** Published 16 September, six weeks after the August batch, it
is structurally the best of the nine: twelve real H2 sections covering kids, teen,
adult and women's programmes, twenty-two real H3s, genuine Google reviews (issue
32), and — alone among the nine — **it actually describes the classes the gym
runs**, by age group, matching the five program pages.

It also targets a phrase none of the other eight does. "Self defense classes near
me" is a different search from "BJJ near me" or "MMA gyms near me": it is the
query a parent or a woman new to martial arts types, and it is the one commercial
term on this site with no competitor page inside the cluster.

**So this one is a keeper, and that changes the recommendation below.** The
problem is not that a ninth page exists; it is that eight near-identical ones sit
around it, diluting the exact local authority it needs.

**The MMA pair is as exact as the BJJ pair, and the timestamps prove it was not
considered.** "MMA" is the abbreviation of "mixed martial arts" — the newer
page's own first section is headed "What is Mixed Martial Arts (**MMA**)?" — and
`/mma-gyms-near-me/` was published at 18:07, `/mixed-martial-arts-near-me/` at
18:10. Three minutes. Nobody writing the second page paused to ask whether the
first one already covered it, because the first one had barely finished
publishing.

This is keyword cannibalisation with a local-SEO twist. Google will pick one page
for the local pack and the other nine will usually rank for nothing, but which
one it picks is not the client's choice, and the link equity and reviews are
split ten ways. "Fight training near me" and "martial arts near me" are likewise
the same intent expressed two ways; there is no searcher for whom more than one
of these pages is the right answer.

**Why this is CRITICAL.** Nine pages, including a three-page group for one
discipline and an exact-synonym pair for another, is not an overlap — it is a
duplicate-content problem on the site's only local-intent conversion pages. Eight
of the nine carry the pricing gap (issue 48), eight carry unbacked program claims
(issue 39), eight carry the same broken map (issue 49), and between them they
hold **sixty testimonials**, only ten of which — the genuine Google set on the
newest page — name anyone in the gym's catchment (issues 14, 53). Roughly 26,000
words were written to compete with each other. This is the single largest
self-inflicted SEO cost on the site, and the synonym groups — BJJ/jiu
jitsu/Brazilian jiu jitsu and MMA/mixed martial arts — are the part of it that
can be fixed in an afternoon with three redirects.

**What to do: consolidate five pages into two.**

**Start with the synonym groups, which need no judgement at all.**
`/bjj-classes-near-me/`, `/jiu-jitsu-near-me/` and `/brazilian-jiu-jitsu-near-me/`
are one page under three names (issue 57); `/mma-gyms-near-me/` and
`/mixed-martial-arts-near-me/` are one page under two. Pick the strongest URL in
each group and 301 the rest into it. That is three redirects and it removes three
duplicates immediately.

**Then, one general martial arts page.** Merge `/martial-arts-near-me/`,
`/martial-arts-gyms-near-me/`, `/fight-training-near-me/` and whichever MMA URL
survived into a single page covering everything the gym teaches.
`/martial-arts-near-me/` is the cleanest URL and the broadest term, so it is the
likely keeper; the others 301 into it, and their best sections and testimonials
move across. The MMA page is the one to fold in first, because MMA is the
discipline the gym has no program page for at all (issue 39), so two whole URLs
are currently ranking for a class the site cannot evidence.

**And keep `/self-defense-classes-near-me/` as a third page, not a fourth
casualty.** It targets a distinct query, it is the best-structured page in the
cluster, and it is the only one whose content maps onto the programmes the gym
actually runs. Fix its duplicated section (issue 29) and its self-contradiction
about the women's class (issue 60), and it becomes the page the other eight were
trying to be.

**Keep `/teens-bjj-near-me/` as a fourth.** Of the four BJJ pages it is the only
one with a distinct audience rather than a synonym of the others' keyword, and
"BJJ for teens" is a search a parent makes deliberately. It should be the one
that survives the BJJ consolidation in issue 57 alongside a single general BJJ
page — and it should keep pointing at `/teen-bjj-classes/`, which is the model
for how all of these pages should treat the program pages.

**So the ten become four:** one general martial arts page, one general BJJ page,
one self-defence page, one teens BJJ page. Each with a distinct audience, each
linking the program page that books the class.

**One BJJ page.** Merge `/bjj-classes-near-me/` and `/jiu-jitsu-near-me/`. These
are the same subject under two names — the BJJ page says so in its own first
sentence, "BJJ (Brazilian Jiu-Jitsu) classes near me…". "BJJ classes near me" is
the higher-volume phrasing, so `/bjj-classes-near-me/` is the likely keeper.

Check Search Console before choosing any keeper rather than guessing: keep
whichever URL already has impressions and redirect the rest into it. All four
survivors need the prices (issue 48) and LocalBusiness structured data, which
none of the ten has. Consolidating also concentrates seventy-one testimonials and
every internal link onto four pages instead of scattering them across ten.

This makes the fourth cannibalisation cluster on the site, after the two Kali
Sticks posts (issue 6), the three Muay Boran posts (issue 7) and the two
kick-boxing URL spellings (issue 44) — and it is larger than the other three
combined.

**In the rebuild:** all ten pages are reproduced as published; the rebuild does
not merge or redirect pages on its own. All ten do carry
`SportsActivityLocation` structured data, which the live pages lack.

### 51. Tags aimed at firefighting and at street violence, on a school that teaches children — SEO, CONTENT (reputation) — **High**

`/fight-training-near-me/` carries four tags. One is on topic. The other three
should not be on this site at all.

| Tag | What it targets |
|---|---|
| "fight training near me" | The page's own subject. Fine |
| "**fire fighting** training near me" | **Firefighting.** A different industry entirely — fire service recruitment and certification |
| "**knife fighting** training near me" | Armed combat with a blade |
| "**street fight** training near me" | Unregulated violence outside a ring |

**"fire fighting training near me" is not a martial-arts term.** Someone typing
it is looking for a fire academy, a fire-service entrance course or a workplace
fire-safety certification. It has landed here because "fight" is a substring of
"firefighting" and a keyword tool returned it — the same pasted-from-a-tool habit
already logged as issue 30, but this one is not a misspelling or a fragment. It
is a real, high-volume search term from an unrelated regulated industry. Anyone
who arrives from it bounces instantly, and the tag archive page it generates
tells search engines this site is about fire services.

**The other two are a reputation problem, not an SEO one.** "Street fight
training" and "knife fighting training" describe intent to fight outside a
sanctioned setting. This is a school whose five program pages are Adult BJJ,
Adult Muay Thai, **Kids BJJ, Teen BJJ and Teen Muay Thai** — three of the five
are for minors — and whose own copy sells discipline, respect and confidence.
Publishing tag archives at `/tag/street-fight-training-near-me/` and
`/tag/knife-fighting-training-near-me/` puts the school's name against street
violence and blade combat in search results that parents will see.

It also cuts against the site's own liability position. Issue 31 already flags
self-defence and weapon content published with no disclaimer; tagging a page
"knife fighting training" is the school affirmatively marketing itself for that
search, which is a harder thing to explain than an unlabelled article.

**What to do:** delete all three. "fire fighting training near me" has no defence
at all — it is the wrong industry. The other two should go on the same grounds
the school's own marketing already implies: it does not teach people to win
street fights, and it should not be findable by people looking for that. Keep
"fight training near me" and add local variants ("fight training Coppell", "MMA
classes Coppell") in their place.

**In the rebuild:** no tag section is published on any post, so none of the three
appears anywhere in the rebuilt site.

### 52. Comparison tables against competitors, one of which names two real local businesses and publishes their prices — CONTENT (accuracy), LEGAL — **CRITICAL**

`/fight-training-near-me/` publishes a ten-row table headed "Comparison Table:
SixthSense MMA vs. Typical Gyms". Every row makes a claim about the client and a
matching negative claim about everyone else:

| Feature | SixthSense MMA | Typical Gym |
|---|---|---|
| Training Approach | Personalized, strategy-based | Generic, one-size-fits-all plans |
| Coach Experience | Certified, skilled, experienced | Often basic or group-led trainers |
| Focus | Real results, mental and physical growth | Mostly physical appearance |
| Programs | Tailored for weight loss, self-defense, or competition | General workout programs |
| Environment | Close-knit, supportive community | Crowded, individual-focused |
| Learning Curve | Learn with wisdom, insight, and correction | Minimal instruction or feedback |
| Motivation & Confidence | Builds real confidence, inner motivation | Often self-guided |
| Lifestyle Fit | Flexible plans suitable for real lifestyles | Rigid timing, no personalization |
| Mindset & Strategy | Strong focus on strategy, mental discipline | Not usually part of training |
| Self-Defense Skills | Core part of all martial arts programs | Rare or unavailable |

**The competitor is not named, which helps but does not settle it.** Comparative
advertising is legal and normal; what it has to be is *substantiated*. Two rows
here are not opinion:

- "**Coach Experience** — Certified, skilled, experienced" versus "Often basic or
  group-led trainers". This asserts a credential the site never names (issue 39)
  and denies it of competitors as a class.
- "**Self-Defense Skills** — Core part of all martial arts programs" versus
  "Rare or unavailable". Stated as fact about other gyms in the area, and it is
  straightforwardly untrue of any BJJ, Muay Thai or Krav Maga gym nearby.

The rest ("Mostly physical appearance", "Minimal instruction or feedback",
"Crowded") are characterisations a local competitor could reasonably object to,
and "Typical Gym" is narrow enough in a town the size of Coppell that the
competitors are identifiable in practice even though none is named.

There is also an internal contradiction: the "Lifestyle Fit" row promises
"Flexible plans suitable for real lifestyles" on a page that publishes no plans
and no prices (issue 48).

#### A fifth comparison, unnamed again, but now making a pricing claim

`/martial-arts-near-me-classes/` has an H2 "Sixth Sense MMA vs Other Local
Martial Arts Providers" with **no table and no names**:

> While **many gyms** push generic fitness we zero in on what really counts...
> **No massive crowds or rushed sessions**... it's the little things like our
> emphasis on discipline and self-control that make a difference over **the
> usual chain operations**.

> **Other providers might skim the surface with basic karate** but we teach
> ground work and escapes.

> **Competitors often charge extra for basics like open mats or family spots**
> but we bundle it all.

The first two are the acceptable register — vague, unnamed, unfalsifiable
puffery. **The third is not.** "Competitors often charge extra for open mats or
family spots" is a factual claim about local businesses' pricing, made on a page
that publishes no price of its own (issue 48). It is the same claim the
`/muay-boran/` table makes with names and figures attached, restated without
them.

There is also an irony worth noting: the page criticises other providers for
"basic karate" two paragraphs after saying **"we mix in karate"** itself
(issue 39).

**Five comparison sections now**, across five posts in three months. This has
become a standard section in the template, and the drafting quality of it varies
from "unnamed puffery" to "named competitor price list". The template needs one
rule: **claims about Sixth Sense only.**

#### A fourth comparison, and this one gets it right — worth reading alongside

`/martial-arts-for-kids-strenght/` has an H2 called "**How We Compare to Other
Gyms**" and **no table at all** — just prose and two sub-sections. More
importantly, **it names nobody**:

> Sixth Sense MMA holds its own against **the usual suspects** in Coppell and
> beyond… that personal touch you won't find in **every strip mall dojo**. Sure
> **big chains** might flash flashy ads…

> **Bigger gyms** often pack in 20 plus kids per session leaving little room for
> one on one tweaks. At Sixth Sense MMA we cap groups at 10 or so…

> **Many spots** stick to one style like basic karate drills but we mix in bjj
> grappling with open mats…

"The usual suspects", "strip mall dojo", "big chains", "many spots". It still
asserts things about competitors as a class — 20-plus children per session, one
style only — which remain unsubstantiated, and "strip mall dojo" is a sneer the
client may not want in their own voice. But **no business is named, no
competitor's price is published, and nothing is sourced to hearsay.**

Published the day after `/muay-boran/`, it is the same section written the
careful way. **When the three tables below are rewritten, this is the register
to rewrite them into** — and the two specific numeric claims ("20 plus kids",
"one style") should come out even here.

#### The third table names the competitors. Read this one first. — **CRITICAL**

The two tables described below hedge behind "Typical Gym" and "Other Providers".
`/muay-boran/`, published 17 October 2025, does not. Its columns are:

| Feature | Sixth Sense MMA | **Championship Martial Arts** | **FUEL MMA** |
|---|---|---|---|
| Muay Boran Focus | Strong emphasis on traditional techniques like chaiya style | **Mostly taekwondo and karate light on striking arts** | **Broad MMA with some muay thai no specific boran** |
| Class Sizes | Small groups 8-12 per session | **Larger up to 20 students** | **Mid-sized 10-15 typical** |
| Weekly Schedule | Daily options mornings to evenings | **Weekday evenings mostly** | **Evenings and weekends focused** |
| Facility Highlights | Clean L-shaped mats privacy areas next to coffee shop | **Spacious with showers family-oriented setup** | **Basic mats and bags self-defense emphasis** |
| Pricing Starting Point | $120/month unlimited | **$130/month for kids/adults** | **$110/month entry level** |

**Two named, identifiable local businesses**, and the page publishes what it
says are their curricula, their class sizes, their timetables, their facilities
and **their monthly prices**. Both are named again in the paragraph above the
table: "Other spots like **Championship Martial Arts** or **FUEL MMA** have
their strengths but they lean heavier on taekwondo or general MMA."

**The page states its own source, and the source is hearsay.** The sentence
introducing the table reads:

> Here's a quick side-by-side on key stuff **pulled from what folks say online
> and around town**.

That is the site telling its readers, in writing, that the factual claims it is
about to make about two named competitors' prices and class sizes are
second-hand talk. If either business disputes any cell, that sentence is the
first thing they will quote back.

**Why this is CRITICAL where the other two tables are not.**

- **Named comparative advertising has to be substantiated**, claim by claim, by
  the advertiser. "Typical Gym" is rhetoric. "Championship Martial Arts charges
  $130/month and puts 20 students in a class" is a statement of fact about a
  named business, and the burden of proving it sits here.
- **Prices change.** Even if all three figures were right the day they were
  written, they will not stay right, and an out-of-date price published about a
  competitor is a straightforward accuracy problem with a named party attached.
- **The table undercuts its own argument.** FUEL MMA is listed at **$110/month
  against Sixth Sense's $120**. The one row a price-sensitive reader scans puts
  the client second. Whatever the legal position, this row does not sell.
- **It is the only page on the site with a price at all** (issue 48), and the
  price arrives inside a competitor comparison rather than on a programme page.

**What to do, in order and quickly:**

1. **Remove the two competitor names and the two competitor price cells today.**
   The rest can wait; these cannot.
2. **Delete the "pulled from what folks say online and around town" sentence.**
   It converts an ordinary marketing table into an admission.
3. Rebuild the table as a description of Sixth Sense only — the left column is
   strong on its own, and "Small groups 8-12 per session, $120/month unlimited,
   daily options mornings to evenings" is a better advert than any comparison.
4. Then apply the same treatment to the two tables below.

**In the rebuild:** every cell is reproduced exactly as published, competitor
names and prices included, because softening a live legal exposure would hide
it. The build fails if any cell is altered.

**A second table, thirteen rows, and it names the competitor type more
specifically.** `/top-ten-martial-arts-for-self-defense/` publishes a table
headed "Sixth Sense Martial Arts vs. **Other Providers**" — thirteen comparison
rows against ten on the earlier page. The claims about other providers:

| Topic | What it says about "Other Providers" |
|---|---|
| Martial Arts Approach | "Might stick to traditional martial arts forms **for show**. Some focus on one style, like **karate or judo alone**." |
| Personalized Classes | "Might push generic plans." |
| Rates | "May have **higher rates** or less competitive pricing." |
| Community & Events | "May not offer the same community engagement." |
| Flexibility | "Some might demand long commitments or lack flexibility." |
| Trial Classes | "Might not offer trials." |
| Group Size | "**Big chains cram people in.**" |
| Progress | "May not provide the same level of consistent progress." |
| Instructor Experience | "**Some places hire part-timers.**" |
| Age-Specific Classes | "Might lump everyone together." |
| Privacy | "Big gyms can feel exposed." |
| Student Input | "Others stick to set curriculums." |
| Commitment to Results | "May focus more on **marketing than actual results**." |

**Three of these are materially different from the first table's claims.**

- **"Rates beat many competitors"** versus "May have higher rates" is a **price
  claim**, and it is published on a page that states no price at all (issue 48).
  A price comparison with no price on either side is not substantiable in
  principle, let alone in fact.
- **"Some places hire part-timers"** is an assertion about named-by-implication
  local businesses' employment practices. Unlike "generic plans", this is a
  statement of fact about how a competitor staffs its gym.
- **"Some focus on one style, like karate or judo alone"** singles out two
  disciplines by name. In a town the size of Coppell, "the karate school" and
  "the judo club" identify specific businesses to any local reader.

The hedging ("might", "may", "some") helps legally but not commercially: a
reader who trains at the karate school down the road recognises the description,
and the page is arguing against them rather than for Sixth Sense.

**Why this moves from Medium to High.** Two pages now, twenty-three rows
between them, and the second escalates from characterisation to price and
employment claims. It is also now a **template** — the same table with different
rows on two posts three weeks apart — so the third one is coming unless the
pattern is stopped.

**What to do:** keep the tables, but make every row a claim about Sixth Sense
rather than a claim about everyone else — the left column is strong enough on its
own. If the comparison stays, name the certification in the Coach Experience row
and drop the "Rare or unavailable" self-defence row, which is the one a
competitor would challenge first.

**In the rebuild:** the table is reproduced cell for cell, with its header row
promoted to a real `<thead>` and the feature column to row headers for screen
readers. No claim was softened, added or adjusted.

### 53. A single-location gym advertising students across the country — GEOGRAPHIC TARGETING, CONTENT — **High**

`/bjj-classes-near-me/` heads its testimonial section:

> ## Real Reviews from Our BJJ Students **Across the USA**

and opens it with:

> Our students are the heart of SixthSense MMA. **From coast to coast**, people
> who once searched for "BJJ classes near me" are now part of a community that
> supports, teaches, and grows together.

**Sixth Sense Martial Arts is one room in Coppell, Texas.** One address, one
phone number, one set of opening hours, five programs. It has no second
location, no franchise, no online programme and nothing on the site that would
put a student anywhere but Coppell. The seven reviews underneath are labelled
NYC, LA, Austin, Chicago, San Diego, Miami and Seattle.

**Two separate problems, and the second is the expensive one.**

**It is a claim that is not true.** "Students across the USA" and "from coast to
coast" describe a national student body. Either these are not really the gym's
students, or they are and the cities are invented. There is no third reading. A
prospective member who walks in and finds a single mat room has been told
something inaccurate before they arrived, and a competitor or a review platform
could make the same observation.

**It works directly against the page it is on.** This is a "near me" page. Its
entire job is to persuade Google and a Coppell parent that this gym is *local*.
The strongest section on the page — the social proof — instead says the gym's
community is national. A parent comparing three Coppell gyms reads "Across the
USA" as "this is a chain", which is the opposite of what a neighbourhood martial
arts school wants to be. And Google's local ranking signals reward
location-specific relevance; a page whose testimonials name seven other metros
is diluting the one signal it exists to send.

Compare the same section on `/fight-training-near-me/` (issue 14): ten reviews,
ten cities, but no heading claiming a national reach. This page states it
outright, which is why it is logged separately.

#### The same claim the next day, on `/martial-arts-gyms-near-me/`

> Here's what real members **from across the U.S.** have to say about their
> experience at SixthSense MMA. These aren't scripted lines just honest reviews
> from people who've trained, grown, and seen real change.

Nine testimonials follow, from Phoenix, Houston, Sacramento, Orlando, Brooklyn,
Chicago, Denver, Atlanta and San Diego. Houston is the only one in Texas, 240
miles away.

The sentence "These aren't scripted lines just honest reviews" is doing something
the BJJ page's did not: it pre-empts the objection. A reader who has just been
told the gym has members across the country, and is then assured the reviews are
not scripted, has been given both halves of the problem in one paragraph.

**Two of these nine also cut across other issues.** Ashley L. says "I started in
the **women-only sessions**" — a class the homepage lists as "Coming Soon"
(issue 39). Monica K. says "I brought my teenage son to their **kids' program**"
from Orlando, Florida.

#### A third page, three minutes later: `/mixed-martial-arts-near-me/`

> Here's what some of our **U.S.-based** members have to say:

Eight numbered reviews follow: Emily R. (Chicago, IL), James L. (Dallas, TX),
Marcus D. (San Diego, CA), Heather S. (Miami, FL), Andre T. (Brooklyn, NY),
Lisa M. (Seattle, WA), Kevin B. (Phoenix, AZ), Rachel A. (Denver, CO). Dallas is
the only one in the metroplex, and it is not Coppell.

"U.S.-based" is the softest phrasing of the three, but it is doing the same job:
telling a reader that this gym's community is national. On a page whose whole
purpose is the phrase "near me".

**Across all four pages that carry located reviews**, the count is now
**thirty-four testimonials naming twenty different cities, and not one naming
Coppell**, Irving, Lewisville, Grapevine or anywhere in the gym's catchment. Four
pages, four days, the same decision each time.

#### And now the wrong country: `/brazilian-jiu-jitsu-near-me/`

The newest post carries seven customer reviews. **Every single one is from the
United Kingdom.**

| Review | City given |
|---|---|
| Adam W. | Manchester |
| Leah P. | London |
| Dan R. | Birmingham |
| Rachel M. | Glasgow |
| Tom H. | Leeds |
| Sophie D. | Bristol |
| Imran K. | Sheffield |

Sixth Sense Martial Arts is at 817 S MacArthur Blvd, **Coppell, Texas**. The
nearest of these cities is roughly 4,500 miles away, across an ocean. Leah P.
says "I've trained at a few places in **London**, but SixthSense MMA has
something special" — a sentence that places the gym in London.

**Why this escalates the issue from High to CRITICAL.** The previous pages
labelled reviews with distant American cities, which reads as sloppy. This one
puts the gym in a different country, on a page whose entire purpose is to rank
for "near me". The seven names are a clean sweep of British cities — Manchester,
London, Birmingham, Glasgow, Leeds, Bristol, Sheffield — which is not a mistake
anyone makes by accident about their own customers. It is a block of text
written for, or lifted from, a British gym.

That matters beyond tone. If these reviews are not the client's customers, then
publishing them as customer reviews is a misrepresentation, and the earlier
American ones on four other pages have to be re-examined in the same light
(issue 32). A Coppell parent who notices that every reviewer is British will not
read the rest of the page charitably.

**Across all five pages with located reviews**: **41 testimonials naming 27
cities**, twenty in the United States and seven in the United Kingdom, and **not
one in Texas outside Dallas and Houston** — neither of which is Coppell.

**What to do, and treat the UK set as urgent:** delete or replace the seven
British reviews immediately; they are the clearest single credibility risk on
the site. On the other pages, drop the nationwide framing — "Across the USA",
"From coast to coast", "from across the U.S.", "U.S.-based" — and change the
headings to "Real Reviews from Our Students", "Hear from Our Members" and
"Student Reviews". If the reviews are real, relabel them with Coppell, Irving,
Lewisville, Grapevine and the surrounding towns; local names are worth far more
on these pages than distant ones. If they are not real, they come down; see
issue 32. This is a ten-minute edit on each page with a disproportionate payoff,
because it is the section a visitor reads most carefully.

### 54. Subheadings published as bold paragraphs instead of headings — SEO, ACCESSIBILITY — Medium

`/martial-arts-gyms-near-me/` is 3,749 words long and contains **no list markup
at all** — no `<ul>`, no `<ol>`, not one `<li>`. What it has instead is
**seventeen bullet characters (•) typed into the text**, in two different places.

**Four are inside H3 headings:**

| Heading as published |
|---|
| `•Personalized Coaching That Meets You Where You Are` |
| `• A Safe and Sustainable Training Environment` |
| `• Real Progress, Not Just Hype` |
| `• Community Support Without Judgment` |

Note the first: **no space after the bullet**, where the other three have one.
Four consecutive headings in the same section, typed by hand, and one of them
differs.

**Thirteen more open bold paragraphs that stand in for list items** — "• Unclear
Pricing", "• Unclear Goals", "• Too Intense Training", "• Hidden Costs",
"• A Powerful New Hobby", and so on. These are two genuine lists, of eight and
five items, written as a run of `<p><strong>• Item</strong></p>` followed by an
explanatory paragraph each.

And one of those thirteen has the bullet **outside** its bold tag —
`<p>•<strong> Bad Vibes or Weak Community</strong></p>` — where the other twelve
have it inside. Invisible to a reader, but it is the tell that these were typed
one at a time rather than produced by a list tool.

**Why this is worth fixing rather than shrugging at.**

- **Screen readers.** A real list is announced as "list, 8 items", and a user can
  skip it or step through it. Eight separate bold paragraphs are announced as
  eight unrelated paragraphs, and the "•" is read aloud as "bullet" or, in some
  configurations, "black small circle" — before every single item.
- **Headings that start with punctuation.** The four H3s are the section's
  structure. A heading reading "•Personalized Coaching…" is what Google shows in
  a featured snippet and what a screen reader announces when a user lists the
  page's headings. It also breaks the document outline's readability for no gain,
  since the bullet conveys nothing a heading level does not.
- **Nothing is gained.** The bullets are decorative. The same content as a real
  `<ul>` would look better, read better and be navigable.

This is the same category of problem as the "Table" placeholder text (issue 13)
and the bullet-in-heading habit is new, but it is on the longest page on the
site, so it affects the page with the most content to navigate.

**What to do:** delete the four bullet characters from the H3s — the headings
read correctly without them. Convert the two runs of bold paragraphs into real
`<ul>` lists, keeping each item's explanatory paragraph beneath it, or make each
item a small heading if the explanations are long enough to warrant it.

**In the rebuild:** all seventeen bullets are reproduced exactly as published,
including the missing space on the first heading and the one bullet sitting
outside its `<strong>`. The build fails if any of them is converted into list
markup or silently tidied.

#### The same habit with numbers, on `/mixed-martial-arts-near-me/`

That post looks, from its heading outline, like the flattest page on the site:
**2,375 words across seven H2 sections with only three H3s**, where the other
"near me" pages average fifteen or more. Its H2 sections run 300 to 500 words
with no subheading to break them.

Except the subheadings exist. There are **sixteen** of them, and every one is a
bold paragraph instead of a heading:

| Section | Numbered bold paragraphs inside it |
|---|---|
| What You Can Expect at SixthSense MMA | 1. Respectful Culture Without Ego or Intimidation → 5. A Learning Culture That Encourages Real Growth |
| What Makes a Great MMA Near You? | 1. Qualified Coaches Who Teach with Honesty and Care → 3. A Clean, Safe, and Respectful Training Space |
| How Our MMA Training Works | 1. Structured Programs That Fit Your Life → 4. Focused Sparring and Drills That Build Strong Fighters |
| Why More Locals Are Choosing SixthSense MMA | 1. Honest Coaching With No Hidden Games → 4. Real Results Without the Pressure to Chase Hype |

Four numbered runs, restarting at 1 each time, all written as
`<p><strong>1. Heading text</strong></p>`.

**The cost is the same as the bullets above, and here it is larger.** A screen
reader user, or anyone using a browser's heading navigation, sees a page with
three subheadings in 2,375 words and no way to jump between the sixteen sections
that actually exist. Google's outline sees the same thing. And the page's own
table of contents — if one were generated from its headings — would list almost
nothing.

It is also invisible to fix wrongly: the content is well organised. Only the
markup is wrong. Sixteen `<p><strong>` become sixteen `<h3>`, and the page goes
from the flattest on the site to one of the better-structured ones.

**What to do:** convert all sixteen to `<h3>` and drop the numbers, or keep the
numbers if the sequence matters. Same on the bullet post above. Then check
whether the editor being used makes bold-paragraph-as-heading the path of least
resistance, because two consecutive posts did it two different ways.

**In the rebuild:** all sixteen are reproduced as bold paragraphs, exactly as
published, and the build fails if any is promoted to a heading. The page's flat
outline is preserved as-is.

### 55. Two pages advertising two different discount schemes — CONTENT (accuracy), TRUST — **High, the client must confirm**

The site offers discounts on two of its six local landing pages. The two pages
do not agree on who gets one.

| Page | Heading | Groups named |
|---|---|---|
| `/jiu-jitsu-near-me/` | "Discounts for Families, Students, and Military" | Families · Students · **Military** |
| `/mma-gyms-near-me/` | "Discounts for Students, Families & First Responders" | Students · Families · **First Responders** |

Families and students appear on both. The third group does not: one page offers
a **military** discount, the other a **first responder** discount, and neither
page mentions the other's group. There is no page anywhere on the site that
lists both.

**Military and first responders are not the same people.** A serving soldier is
not a first responder; a paramedic, firefighter or police officer is not
military. Each page tells one of those groups it has a discount and tells the
other, by omission, that it does not.

**The failure mode is concrete.** A firefighter finds `/jiu-jitsu-near-me/`,
reads "Families, Students, and Military", and does not enquire. A veteran finds
`/mma-gyms-near-me/`, reads "Students, Families & First Responders", and does not
enquire. Both may be entitled to a discount that exists; both have just been told
they are not. And if someone arrives citing the page they read and the gym does
not honour it, an advertised discount has been refused at the counter — the
consumer-trust problem already described under issue 48, with the added
difficulty that the client cannot point to a single consistent published policy.

**What the wording actually commits to.** `/mma-gyms-near-me/` says:

> Whether you're a college student, a parent with children, or one of our first
> responders on the front lines, **we offer a special plan** that respects your
> role and protects your wallet.

"A special plan", singular, for three different groups — so it is not even clear
whether these are three discounts or one. No percentage, no eligibility test, no
proof required, no expiry. Same on the jiu jitsu page.

**What the client must confirm, one by one:** do military discounts exist? Do
first responder discounts exist? Are they the same rate? Do student and family
discounts exist, at what rate, and what counts as a family? Is proof required?

**What to do:** decide the actual policy, then publish the identical list on
every page that mentions discounts, with the rate and the eligibility rule
beside it. If the answer is that discounts are handled case by case, say that
instead — it is honest and it commits to nothing the gym cannot deliver. What
cannot stand is two pages naming two different groups.

Add "No Long Term Contracts" (`/mma-gyms-near-me/`: "our month to month
flexibility gives you the freedom to train at your own pace") to the same
verification list. It is a statement about the membership agreement's term, and
it is the other claim on these pages that a customer could hold the gym to.

### 56. A nine-page local set that is inconsistent with itself — CONTENT, SEO — Medium

The nine "near me" pages — eight written from one template in five days, plus one
six weeks later (issue 50) — should be the most consistent group on the site.
They are not. A visitor who reads two of them gets two different answers about
what this gym is and how it works.

| | Pricing section | Reviews | Real subheadings | Programs section |
|---|---|---|---|---|
| `/jiu-jitsu-near-me/` | 2 headings | none | 17 H3s | 6 offers |
| `/martial-arts-near-me/` | 2 headings | 7, other cities | 16 H3s | 4 programs |
| `/fight-training-near-me/` | 1 heading | 10, other cities | 16 H3s + 4 H4s | 4 disciplines |
| `/bjj-classes-near-me/` | 2 headings | 7, other cities | 18 H3s | 4 disciplines |
| `/martial-arts-gyms-near-me/` | 3 headings | 9, other cities | 26 H3s | 5 disciplines |
| `/mma-gyms-near-me/` | 3 headings | 9, no locations | 12 H3s | none |
| `/mixed-martial-arts-near-me/` | **none** | 8, other cities | **2 H3s** | none |
| `/brazilian-jiu-jitsu-near-me/` | none; promise in the H1 | 7, **UK cities** | 13 H3s | none |
| `/self-defense-classes-near-me/` | **none at all** | 10, **genuine Google set** | 22 H3s | 4 age groups, matching the program pages |

**The pricing column is the one that matters most.** Six pages have a pricing
section and state no price (issue 48). The last three have no pricing section at
all, and one of those puts "Flexible Pricing" in its H1 instead — so the set
manages to be both price-free *and* inconsistent about whether pricing is even a
topic. The newest page is the only one that neither promises pricing nor
discusses it, which is at least honest. A visitor who lands on
`/mixed-martial-arts-near-me/` first has no section to scan for cost; one who
lands on `/martial-arts-gyms-near-me/` finds three headings promising
transparency and no figure. Neither learns anything, but they fail differently,
which makes the gap look accidental rather than deliberate.

**Three other columns disagree just as sharply:**

- **Reviews.** One page has none, five have seven to ten attributed to other
  American cities, one has nine with no location at all, and one has seven from
  **British** cities (issue 14). The same gym, the same week, four different
  approaches to social proof and two different countries.
- **Structure.** 26 real subheadings on one page, 2 on another of similar length
  (issue 54). A reader who found the long page easy to scan will find the short
  one a wall of text.
- **Programs.** Two pages have no programs section; the other five list four to
  six, and no two lists match. `/jiu-jitsu-near-me/` offers private coaching and
  competition prep; `/martial-arts-gyms-near-me/` offers women-only and kids;
  `/mma-gyms-near-me/` offers discounts for first responders;
  `/jiu-jitsu-near-me/` offers discounts for military (issue 55). Read together,
  they describe several different businesses.

**Why this compounds the other issues rather than duplicating them.** Issues 48,
50, 54 and 55 each describe one fault repeated across the set. This entry is
about the *variance*: the pages are similar enough to compete with each other
(issue 50) but different enough that fixing one does not fix the others, and a
customer comparing two of them finds contradictions rather than reinforcement.
Consistency is what makes a template worth using; this set got the duplication
without the consistency.

**What to do:** this resolves itself if the set is consolidated to three pages as
issue 50 recommends. If the client keeps them all, then at minimum: the same
pricing section on every page, the same review policy, the same programs list,
and real headings throughout — and the newest page is the model to copy, because
it is the only one whose programs section matches what the gym actually offers.

### 57. Four blog pages and three program pages chasing the same BJJ local search — SEO — **CRITICAL**

Brazilian Jiu Jitsu, jiu jitsu and BJJ are three names for one martial art. The
site now has **four blog pages** targeting local search for it:

| URL | Published | Words | Reviews | Distinct audience? |
|---|---|---|---|---|
| `/jiu-jitsu-near-me/` | 2025-08-02 | 2,790 | none | No |
| `/bjj-classes-near-me/` | 2025-08-04 | 2,988 | 7, US cities | No |
| `/brazilian-jiu-jitsu-near-me/` | 2025-08-06 | 3,065 | 7, **UK cities** | No |
| `/teens-bjj-near-me/` | 2025-09-17 | 2,140 | 11, genuine Google set | **Yes — teens** |

**The fourth is the one to keep.** The first three are the same page under three
names. The teens post is not: it is written for parents of 7-to-15-year-olds, it
has age-banded programme tables, and "BJJ for teens near me" is a query a parent
types on purpose. It also does the one thing none of the other three does —
**it links `/teen-bjj-classes/`**, the program page that actually books the
class.

Four days, three pages, one discipline, one gym, one address. And the pages know
about each other: `/brazilian-jiu-jitsu-near-me/` links the phrase "BJJ classes
offer" **to `/bjj-classes-near-me/`** — so the newest page cites one of its own
competitors as a source, which is as clear a demonstration as one could ask for
that these should be a single page.

**And they do not only compete with each other.** The gym already has three
program pages for the same discipline:

- `/adult-bjj-classes/`
- `/teen-bjj-classes/`
- `/kids-bjj-classes/`

Those are the pages that should rank for someone searching "BJJ near me" in
Coppell, because those are the pages that convert: they list the class, the age
group and the free trial. Instead they now compete with three long blog posts
that repeat the same pitch without the booking path. **Six pages on one site
chasing one local intent.**

**Why this is CRITICAL rather than part of issue 50.** Issue 50 describes eight
pages spread across four keyword themes. This is different in kind: it is one
discipline, the gym's *primary* discipline, split six ways, with the three pages
that actually sell the class competing against three that do not. The blog posts
are longer and more recently published, so they are the ones likely to be picked
— which means a searcher looking for a BJJ class in Coppell lands on an article
about BJJ rather than on the page that would book them in.

It also concentrates every other problem in one place. All three blog pages carry
the pricing gap (issue 48); two carry fabricated-looking reviews, one American
and one British (issue 14); all three make the unnamed "certified coaches" claim
(issue 39); all three carry the broken map (issue 49). A client fixing those
issues has to fix each of them three times.

**What to do, in order:**

1. **Pick one general blog page and 301 the other two into it, and keep the teens
   page separate.** Check Search Console first; on volume alone "bjj classes near
   me" and "brazilian jiu jitsu near me" are the stronger phrasings, so
   `/bjj-classes-near-me/` or `/brazilian-jiu-jitsu-near-me/` is the likely
   keeper. Move the best sections and any genuine reviews across.
   `/teens-bjj-near-me/` stays: it is a different audience, not a synonym.
2. **Make the survivor point at the program pages.** Its job is to answer "what
   is BJJ and is it for me", then send the reader to `/adult-bjj-classes/`,
   `/teen-bjj-classes/` or `/kids-bjj-classes/` to book. None of the three
   currently links to a single program page.
3. **Let the program pages own the commercial query.** They should carry the
   Coppell LocalBusiness data, the prices and the trial booking; the blog page
   supports them rather than competing with them.

That takes six pages down to four with a clear job each, and it is the single
highest-value SEO change available on this site.

**In the rebuild:** all four pages are reproduced as published, including the
link from `/brazilian-jiu-jitsu-near-me/` to `/bjj-classes-near-me/` and the one
from `/teens-bjj-near-me/` to `/teen-bjj-classes/`; the rebuild does not merge or
redirect pages on its own. Three of the four link no program page on the live
site, so none was added to those three.

### 58. British and American spellings of "defence" used across the site, inside one page, and inside one tag list — CONTENT, SEO — Medium

**The split now happens inside a single five-tag list.** `/martial-arts-for-self-defense/`
is tagged:

> **best martial art for self defence** · best martial arts for self defense ·
> best self defense martial art · ranking martial arts for self defense · top
> self defense martial arts

One British spelling, four American, on one page, in one list, written in one
sitting. Four of the five are also near-identical rephrasings of each other —
"best martial art for self defence", "best martial arts for self defense", "best
self defense martial art" — which is the tag-level version of the seven-page
cannibalisation at issue 7.

The page's own URL, title, H1 and body all use "defense", so the British tag
matches nothing else on the page. **It should simply be deleted**; "best martial
arts for self defense" already covers it.

Sixth Sense Martial Arts is a business in Coppell, **Texas**, writing for
customers in Dallas–Fort Worth. Its site spells the word two ways.

| Spelling | Where |
|---|---|
| **"defense"** (American) | 52 posts, both program-page sets, the homepage — the overwhelming majority |
| **"defence"** (British) | `/which-martial-art-is-best-for-self-defence/` and `/sambo-martial-art/` |

The newest post is the problem case. It uses British "Defence" **45 times**,
including in its H1, its `<title>`, its URL and five of its thirteen headings —
and American "defense" **12 times** in the same article, including in its own
meta description, which manages both spellings in one sentence:

> "Learn which martial art is best for self-**defence**. Compare various martial
> arts for self-**defense**, including most effective techniques for personal
> protection."

Its "Follow Us on Social Media" paragraph says "our self **defense** community"
four paragraphs below a heading that says "Self **Defence**". Several of its
customer reviews say "self defense" while the headings above them say
"defence" (issue 32).

**Three separate costs.**

**1. It splits the URL.** `/which-martial-art-is-best-for-self-defence/` and
`/best-martial-arts-for-self-defense/` differ only by this letter, which is how
two pages ended up competing for one query (issue 7).

**2. It reads as foreign to the local customer.** A parent in Coppell searching
for self-defense classes does not write "defence", and a page that does reads as
though it was written somewhere else — which, given the British reviews on
`/brazilian-jiu-jitsu-near-me/` (issue 14), is a pattern rather than a
coincidence. For a business whose entire SEO strategy is "near me", looking
non-local is the specific thing to avoid.

**3. Search volume is not symmetrical.** In the US market, "self defense"
massively outweighs "self defence". Google will usually serve the American
spelling for a US searcher regardless, but titles and H1s are shown as written,
so the visible result carries a spelling the searcher did not type.

**What to do:** standardise on **American "self-defense"** across the site —
body copy, headings, titles, meta descriptions and URLs. On
`/which-martial-art-is-best-for-self-defence/` that means changing the slug and
301-ing the old one, which should be done at the same time as the consolidation
in issue 7 so the URL only changes once. `/sambo-martial-art/` needs the same
pass. Add "defence → defense" to whatever style note the writers work from,
alongside the brand-spelling rule (issue 33).

**In the rebuild:** both spellings are reproduced exactly as published, including
the meta description that uses both, and the build fails if either count changes.

### 59. A "Follow Us on Social Media" section linking one platform — CONTENT — Low

**Now on fifteen pages.** `/sambo-techniques/` carries the fifteenth,
identical again.

`/muay-thai-gear-for-safety/` carries the
fourteenth, identical again.

`/martial-arts-for-self-defense/` carries the
thirteenth, identical again.

`/bjj-belt-ranks-in-coppell/` carries the twelfth,
identical again.

`/martial-arts-near-me-classes/` carries the eleventh,
identical again.

`/martial-arts-for-kids-strenght/` carries the tenth copy,
word for word identical to the ninth including the internal link inside it.

And `/muay-boran/` carries the same
heading, the same paragraph and the same single Facebook button as the eight
before it — with the same internal link inside it as the eighth. The copies have
stopped drifting and simply propagate now.

And `/top-ten-martial-arts-for-self-defense/`,
where the block's single paragraph has picked up an internal link the other seven
do not have — "a closer look at our [self defense](…/different-types-of-martial-arts/)
community". So the copies have started to drift after all, which is the argument
for the footer rather than against it.

`/self-defense-classes-near-me/`, `/teens-bjj-near-me/`,
`/mma-vs-kickboxing-for-self-defense/`, `/womens-self-defense-class/`,
`/best-fighting-style-for-self-defense/` and `/best-self-defense/` all carry the
identical section — same heading, same paragraph, same single Facebook button —
alongside the original. Seven copies of a hand-placed social block on seven
posts out of seventy-one, all from September, is exactly the case for putting
the links in the footer where all seventy-one would get them.

The seventh copy is **word-for-word identical** to the six before it, paragraph
and heading alike — checked character by character. That is the argument for the
footer in one line: seven copies of a block nobody has edited since the first
one, each of which has to be found and changed by hand the day the gym opens an
Instagram account.

`/which-martial-art-is-best-for-self-defence/` is the **first post in the
project with a social media section**, which is a good idea. It reads:

> ### Follow Us on Social Media
> Stay connected with Sixth Sense MMA through our social media **channels**.
> Follow us for class updates, training tips, and a closer look at our self
> defense community.
> **[Facebook]**

"Channels", plural, followed by one button. **Facebook is the only platform
linked** — there is no Instagram, YouTube, TikTok, X or LinkedIn link anywhere in
the page's source, and no social links in the site footer either.

For a martial arts gym that is a real gap rather than a nitpick: **Instagram is
where this business would live**. Training clips, belt promotions, class photos,
kids' gradings — the content a gym produces naturally is exactly what Instagram
rewards, and it is where a parent checks whether a gym looks like somewhere they
would send their child. A single Facebook link on one blog post out of
sixty-five is not a social presence.

**On the Facebook link itself:** `facebook.com/sixthsensemartialarts/` returns
HTTP 400 to an automated request. Facebook does that routinely to anything that
is not a logged-in browser, so **this does not establish that the page is dead** —
but it does mean I could not confirm from here that the profile exists, is
active, or belongs to this business. The client should open it and check, because
a "Follow Us" button pointing at an empty or abandoned page is worse than no
button.

**What to do:** confirm the Facebook page is live and maintained. If there is an
Instagram account, link it here and in the site footer; if there is not, that is
the highest-value marketing gap on this list after the pricing. And put the
social links in the footer so they appear on all sixty-five posts rather than
one.

### 60. A whole page advertising a class the homepage says has not launched — CONTENT (accuracy) — **CRITICAL, the client must confirm**

`/self-defense-classes-near-me/` says the women's self-defence programme is
running, and then, in the very next section, says it is being prepared.

**Section one — it exists, present tense:**

> ## Women's Self Defense Classes
> Women often search for self defense classes near me that feel practical and
> safe. **Sixth Sense MMA offers women's self defense programs** designed to
> build confidence while teaching easy to use self defense techniques. Sessions
> focus on staying calm, reacting fast handling real world situations without
> fear.

**The next H3 on the same page — it does not exist yet, future tense:**

> ### Upcoming Self Defense for Women Program
> **Sixth Sense MMA is preparing a new women's self defense program** that blends
> martial arts with real world scenarios. **It will include** lessons on personal
> safety, situational awareness how to react under stress.

"Offers… Sessions focus on" and "is preparing… It will include" are two
statements about the same class, 250 words apart, in the same article. A visitor
cannot tell from this page whether she can book a women's class today.

**And the homepage agrees with neither reading cleanly.** It lists
"**Self-Defense for Women (Coming Soon)**" — which matches the second section and
contradicts the first.

So the site now says three things:

| Where | What it says |
|---|---|
| Homepage | Self-Defense for Women **(Coming Soon)** |
| `/self-defense-classes-near-me/`, H2 | Sixth Sense MMA **offers** women's self defense programs |
| `/self-defense-classes-near-me/`, next H3 | Sixth Sense MMA **is preparing** a new women's self defense program |

**This is the fourth page to assert the women's class as current**, after
`/martial-arts-near-me/` ("Women's Self-Defense Programs"),
`/martial-arts-gyms-near-me/` ("Women Only Classes") and `/mma-gyms-near-me/`
(its FAQ asks "What is unique about the women's-only program"). The difference
here is that the contradiction is **inside one page**, which makes it the easiest
of the four to see and the hardest to explain away.

**Why this one matters more than the other service claims (issue 39).** Women's
self-defence is the offering most likely to be searched for by someone acting on
a specific worry, and the least likely to be forgiven if she turns up and it does
not exist. It is also the claim the gym has been making, in four places, for six
weeks, while its own homepage says the class has not launched.

**What the client must confirm, and this is now overdue:** has the women's
programme launched or not? Then:

- If **yes** — remove "(Coming Soon)" from the homepage and delete the "Upcoming
  Self Defense for Women Program" section, or rewrite it as what is new about an
  existing class.
- If **no** — remove the present-tense claim from this page and from the three
  others, and leave only the "upcoming" section, which is honest and still useful
  as a sign-up prompt.

Either way the four pages and the homepage have to say the same thing. This is a
half-hour edit and it removes the single clearest accuracy problem on the site.

**In the rebuild:** both contradictory passages are reproduced word for word, and
the build fails if either is quietly harmonised with the other.

#### And now a whole page devoted to it: `/womens-self-defense-class/`

The site has published a **dedicated page** for the women's programme. It is
1,728 words, has its own URL, its own nine-section structure, its own three
images and its own FAQ, and it advertises the class **entirely in the present
tense with no hedge of any kind anywhere on it**:

> At Sixth Sense MMA, **we offer** comprehensive self-defense classes tailored
> specifically for women. These classes **are designed** to teach women of all
> ages and skill levels how to defend themselves in real-world situations.

> At Sixth Sense MMA, **we offer** different types of self-defense classes
> designed to suit a range of experience levels.

> At Sixth Sense MMA, **our women's self-defense classes teach** a wide range of
> essential skills.

> If you're ready to take control of your personal safety and **join our
> women's self-defense classes**, getting in touch with us is easy.

I searched the whole page: there is **no "coming soon", no "upcoming", no
"launching", no future tense** — unlike `/self-defense-classes-near-me/`, which
at least contradicted itself and so contained a grain of the truth.

**It goes further and describes two tiers as running.** The page has H3s for
"**Beginner Self-Defense Classes**" and "**Advanced Self-Defense Classes**",
tells the reader what each covers, and states that "most sessions last between
**45 minutes to an hour**". Its FAQ asks "**Do you offer advanced self-defense
training?**" — a question only worth asking if the beginner class already exists.
A prospective student is given a class length, two levels and a syllabus.

**This is the fifth page asserting the programme, and by far the strongest.**

| Page | What it says |
|---|---|
| **Homepage** | Self-Defense for Women **(Coming Soon)** |
| `/martial-arts-near-me/` | "Women's Self-Defense Programs" listed among current programmes |
| `/martial-arts-gyms-near-me/` | "Women Only Classes" listed among current programmes |
| `/mma-gyms-near-me/` | FAQ: "What is unique about the **women's-only program**…" |
| `/self-defense-classes-near-me/` | "offers women's self defense programs" **and** "is preparing a new" — contradicts itself |
| **`/womens-self-defense-class/`** | **A whole page. Two tiers, a syllabus, a class length, no hedge** |

**Why this moves from High to CRITICAL.** Four mentions inside other articles
could be described as loose wording. A dedicated landing page with a syllabus
and a class length cannot: it is the page a woman searching "women's self
defense class Coppell" will land on, and it tells her to get in touch and join.
Its fifteen tags include "Women's self defense classes near me", "Women's self
defense Coppell TX" and "Beginner women's self defense Coppell" — it is built to
be found by exactly the person most likely to turn up.

**If the class is not running, this is the single most consequential inaccuracy
on the site.** Women's self-defence is sought out by people acting on a specific
worry, often after an incident. Someone who books on this page and is told at
the door that the class does not exist yet has been let down in a way that no
amount of good instruction afterwards repairs — and she is the customer least
likely to try a second time.

**What the client must confirm, today:** has the women's programme launched?

- **If yes** — remove "(Coming Soon)" from the homepage immediately. It is
  costing bookings on the one page built to convert them.
- **If no** — this page must not stay live as written. Rewrite it in the future
  tense with a waiting-list sign-up, which is honest and still captures the
  search traffic, and fix the four other pages at the same time.

Either way, six places on this site now say three different things about one
class, and the newest and most persuasive of them is the one with no
qualification at all.

### 61. A competitor's brand name published as a tag — SEO, LEGAL (trademark) — **High**

`/teens-bjj-near-me/` is tagged:

> **gracie barra jiu jitsu teens**

**Gracie Barra is not a generic term.** It is one of the largest Brazilian Jiu
Jitsu organisations in the world — founded by Carlos Gracie Jr, several hundred
schools across dozens of countries, and a registered trademark with its own
uniform, curriculum and certification system. There are Gracie Barra academies in
the Dallas–Fort Worth area. It is a **direct competitor**, named on this gym's
own site.

**What the tag does.** WordPress publishes an archive page at
`/tag/gracie-barra-jiu-jitsu-teens/` containing this post, so the site now hosts
a URL built around a competitor's brand. Anyone searching "Gracie Barra jiu jitsu
teens" is looking for **Gracie Barra**, not Sixth Sense MMA.

**Three reasons to remove it, in order of seriousness.**

**1. Trademark.** Using a competitor's registered mark as a keyword to attract
their customers is the kind of thing that draws a cease-and-desist. It is not
automatically unlawful — nominative use, honest comparison and the like are
defensible — but a bare tag makes no comparison and offers no commentary. It
exists only to intercept searches for the other brand. That is the least
defensible version of the practice, and a franchise the size of Gracie Barra has
the resources and the habit of policing its name.

**2. It will not work anyway.** Google has been demoting competitor-brand
keyword pages for years, and someone searching a specific academy by name is
looking for that academy. The realistic outcome is a thin archive page that
ranks for nothing.

**3. It sends the wrong signal on the page that least needs it.** This is the
post aimed at parents choosing a teenager's first martial arts school —
precisely the audience most likely to be comparing Sixth Sense with Gracie Barra
and most likely to notice.

**This is the second competitor reference found on the site.** The first was
worse and quieter: an **invisible** link to `jpboxinggym.com`, a competing gym,
hidden in `/are-there-multiple-styles-of-muay-boran/` (issue 40, CRITICAL). That
one passed link equity to a rival; this one targets a rival's search traffic.
Different mechanisms, same underlying habit — competitor names finding their way
into this site's SEO without anyone deciding they should.

**What to do:** delete the tag, and delete its archive page if it has been
indexed. Then check the other tag archives and the remaining posts for other
brand names — Gracie, Alliance, Atos, 10th Planet, Renzo and the like are all
plausible keyword-tool suggestions and none of them belongs on this site. If the
client does want to compete with Gracie Barra on search, the way to do it is a
page that honestly compares the two, not a tag.

**In the rebuild:** no tag section is published on any post, so the tag does not
appear anywhere in the rebuilt site. It is recorded here because it is live on
the client's WordPress.

### 62. Unnamed "experts" cited as authority, sourceless attributions, and unspecified "studies" credited to a federation — CONTENT (accuracy), SEO — **High**

**A new form: an unnamed belt rank presented as a staff credential.** Under the
H3 "Experienced Coaches with Real Fight and Competition Background",
`/types-of-sambo/` publishes:

> SixthSenseMMA coaches fought cages. Mma pros corner here. Kickboxing champs
> teach stand. **Sambo black belts roll.** Sambo is a russian martial expert
> guide. Combat sport scars show. Mma fighter ufc path. Punch ring tested.
> Grapple tourney won. **Submission belt black.**

Three claims there are credentials: coaches who have fought professionally, UFC
experience, and **Sambo black belts on staff**. Not one person is named, no
federation is named, and no rank is dated. Sambo ranking is awarded by national
and international federations, so "Sambo black belts" is a verifiable claim about
identifiable people — which makes it a stronger claim than the vague "experts"
logged below, and a riskier one, because it is checkable and the site says
nowhere else that the gym has any Sambo coach at all (issue 39). The page also
lower-cases the federation it does name, writing "American sambo association"
five times as ordinary prose rather than as the organisation's name.

**What to do:** name the coaches and their ranks, with the awarding body, or
delete the claim. If the gym has no Sambo-ranked coach, this sentence and the
academy copy in issue 39 are the same problem and need the same answer.

**A research claim attributed to a governing body, on `/sambo-techniques/`:**

> **Studies from sambo federations like the World Combat Sambo Federation show
> practitioners gain lean muscle and better stamina.**

No study is named, no date, no link. The World Combat Sambo Federation is a real
organisation, which makes this more exposed than the unnamed "experts" logged
below: the page credits a specific named body with research it does not cite.

The claim itself is unremarkable — martial arts training does build muscle and
stamina — which is what makes citing a federation for it unnecessary. **Either
link the study or drop the attribution** and say "sambo training builds lean
muscle and stamina", which nobody would challenge.



**`/martial-arts-near-me-classes/` says "certified instructors" eight times in
3,279 words** and never says certified by whom. It is the page's main
reassurance, repeated in the programmes section, the kids section, the "why
choose us" section, the comparison section and the FAQ:

> our **certified instructors** make it happen
> a gentle start to a martial arts journey with **certified instructors** guiding every step
> **Certified instructors** guide you through ensuring it's safe and effective for all ages
> solid hands-on time with **certified instructors** who adapt to you
> **Certified instructors** guide you every step of the way *(in the FAQ, inside `FAQPage` structured data)*

Eight assertions of a verifiable credential with no issuing body named anywhere
on the page or the site. This is the same problem as the "Certifications and
Recognition" section logged at issue 39 — "we hold creds from respected bodies"
— but repeated more often and placed where it does the most work: right before
each call to action.

**The fix already exists elsewhere on the site.** `/muay-boran/` names **Matheus
Galvao** and **Anthony Wikstrom** with their specialisms, and
`/martial-arts-for-kids-strenght/` names **Coach Milly**. Replace "our certified
instructors" with the coaches' names and what they actually hold — a BJJ black
belt under a named professor is a stronger credential than the word "certified",
and it is true.

`/mma-vs-kickboxing-for-self-defense/` has an H2 reading:

> ## Expert Opinions on MMA vs Kickboxing

**There is no prose under it at all.** The heading is followed immediately by a
table — the largest on the site, 49 rows — whose two columns are headed "Expert
Opinions on MMA" and "Expert Opinions on Kickboxing", and whose cells contain
assertions like:

| Aspect | Expert Opinions on MMA | Expert Opinions on Kickboxing |
|---|---|---|
| Self-Defense Preference | Tilt towards MMA for versatility | Praised for striking but limited without ground |
| Trainer Recommendations | Recommend MMA for diverse skills | Focus on speed and striking proficiency |

**Not one expert is named.** I searched the whole page: no person, no coach, no
fighter, no academy, no publication, no study, no date, no external link. The
only individuals named anywhere on the page are the gym's own customers in the
reviews. "Experts" is the subject of forty-nine rows of assertions and the word
is never attached to anybody.

**Three problems, and the first is the one that matters.**

**1. It is an unverifiable appeal to authority.** "Experts tilt towards MMA" is
a factual claim about what a body of people believes. Presented without a single
name or source it is indistinguishable from the site's own opinion wearing a
borrowed hat. A reader deciding which class to book is being told the experts
agree with the gym that sells both classes.

**2. Google treats this exactly as it sounds.** Unsourced expert attribution is
a textbook E-E-A-T failure — the "expertise" and "trustworthiness" halves of
what Google's quality raters are told to assess. A section literally headed
"Expert Opinions" with no expert is the version of this that is easiest for an
automated system to spot.

**3. It is a wasted opportunity, and the material exists.** This gym has a head
coach who taught BJJ in Brazil (issues 32, 39). "Coach Matheus, who taught BJJ
in São Paulo for X years, says…" would be a genuine expert opinion, would be
verifiable, and would be worth more than forty-nine rows of anonymous assertion.
The site keeps having real credentials and not using them.

**What to do:** either name real people — the gym's own coaches count, with
their ranks and backgrounds — or rename the section to what it actually is, a
comparison summary. "Expert Opinions" with no expert should not survive either
way. If the client wants outside authority, cite named fighters, coaches or
governing bodies with links, which is also how the section would earn any SEO
value.

**In the rebuild:** the heading and the table are reproduced exactly as
published, no expert or source was invented, and the build fails if anything is
inserted between the heading and its table.

**A second, smaller instance on `/womens-self-defense-class/`,** under the H3
"Experienced Instructors":

> Our instructors are skilled martial artists and **self-defense experts**. They
> bring years of experience and ensure that you learn proper techniques and
> strategies to stay safe.

"Self-defense experts" is a credential claim, and as with "fully certified"
elsewhere (issue 39) nobody is named, no qualification is given and no
certifying body is mentioned. On a page about protecting oneself from assault,
the reader is being asked to trust unnamed expertise with her personal safety.

The same sentence also carries the page's strongest promise — see the
"ensure" wording noted under issue 39 — so one sentence makes an unverifiable
credential claim and an outcome assurance at the same time.

**The fix is the same one the site keeps needing:** name the coach, give the
rank, say who awarded it. The material exists (issues 32, 39).

### 63. A 7,000-word article with three images and five wall-of-text tables — CONTENT, UX — Medium

`/mma-vs-kickboxing-for-self-defense/` is **6,785 words**, nearly twice the
length of the next-longest post on the site and roughly a 34-minute read. That
is not a fault in itself. What it carries is:

| | Count |
|---|---|
| Words | 6,785 |
| Content images | **3** |
| Tables | 5, of 22, 22, 21, 29 and **49** rows |
| Table cells | 66, 66, 63, 87 and **147** |
| List items | 148 across 44 lists |

**Three images across 6,785 words is one picture every 2,260 words.** The site's
other posts average one per 700–900. Two of the three sit in the first fifth of
the article; **the last 5,300 words carry no image at all** — including the five
tables, the street-fight section and the reviews.

**The tables are the harder problem.** A 49-row, three-column table of prose
assertions is not a table in any useful sense: nothing in it is scannable, no
column is sortable or comparable at a glance, and on a phone it becomes a
429-cell horizontal scroll. Four of the five run past 20 rows. Together the five
tables hold **429 cells**, most containing a full clause.

Combined with 148 list items, the page's structure is: a short paragraph, a
long table, a short paragraph, a long list, repeated seventeen times. There is
very little connected prose for a 7,000-word article, which is why it reads as
assembled rather than written.

**Why it is worth flagging rather than admiring the word count.** Long-form does
rank, but it ranks when readers stay on the page. This one gives a reader almost
no visual rest across half an hour of reading, and the sections most likely to be
read — the self-defence comparison and the street-fight limitations — are the
two biggest tables.

**What to do:** three things, in order of value. Break the two 22-row tables and
the 29-row one into three or four smaller tables each, grouped by theme. Convert
the 49-row "Expert Opinions" table to prose, which it should have been anyway
(issue 62). And add four or five images through the second half — the gym has a
camera and the sections name exactly what to photograph: gear, gloves, a ground
position, a class.

**In the rebuild:** the article is reproduced in full at its published length,
all five tables wrapped in the shared `overflow-x: auto` container so the wide
ones scroll rather than breaking the layout on a phone. The sticky table of
contents scrolls internally, which it needs to at 17 entries, and the reading
progress bar tracks correctly across the full length.

### 64. An auto-linking plugin that cuts words in half, and wraps whole clauses, to place internal links — SEO, CONTENT — Medium

`/best-fighting-style-for-self-defense/` contains two internal links whose
anchor text **ends in the middle of a word**:

```html
<a href="…/different-types-of-martial-arts/" data-wpil-monitor-id="70">self defense mart</a>ial art can boost your confidence…
<a href="…/best-martial-arts/" data-wpil-monitor-id="72">Best mart</a>ial art for self defense is the one that…
```

On the page these render as **"self defense mart"** and **"Best mart"** —
underlined, clickable, and cut off mid-word — with the orphaned "ial art"
trailing outside the link in plain text.

**The cause is identifiable from the markup.** The `data-wpil-monitor-id`
attribute belongs to **Link Whisper** (WP Internal Linking), a plugin that
inserts internal links automatically by matching target phrases in the text.
Here it has matched on a character offset rather than a word boundary and closed
the anchor four characters early, twice on one page.

**Three consequences.**

- **It reads as broken.** A reader sees a link that stops mid-word. It is the
  kind of fault that makes a page look unmaintained regardless of how good the
  writing is.
- **The anchor text is meaningless to Google.** Anchor text is one of the
  strongest signals about what the destination page covers. "Best mart" tells a
  search engine nothing, and it is pointing at `/best-martial-arts/` — the page
  that most needs the signal.
- **It is almost certainly not confined to this page.** The plugin runs across
  the site, and this is the page I happened to check character by character. The
  same off-by-a-few-characters bug could be sitting in any post the plugin has
  touched.

**A sixth page.** `/martial-arts-near-me-classes/` carries five auto-inserted
links, and one of them is the cannibalisation problem in miniature: the anchor
text "**martial arts near me**" — the page's own primary keyword — points at
`/martial-arts-near-me/`, one of the two pages it is competing with for that
exact phrase (issue 50). The plugin has taken the page's target keyword and
handed it to a rival page.

Another runs long in the usual way: "effective blending self-defense techniques
with real personal" begins mid-phrase and ends mid-noun.

**A fifth page, and the heaviest yet.** `/martial-arts-for-kids-strenght/`
carries **ten** auto-inserted internal links in 3,379 words, and the anchor text
runs long on most of them — "Brazilian jiu jitsu or bjj is all about ground
fighting", "Martial arts training brings self defense skills and builds",
"martial arts for kids Sixth Sense MMA in Coppell". The last of those swallows
the brand name and the town.

Two of the ten matter beyond the anchor text. One points at
**`/martial-arts-for-kids/`**, this page's own near-duplicate (issue 7), which
is the plugin reinforcing a cannibalisation pair. Another wraps "martial arts
styles like **karate** or bjj" — putting a link on a discipline the gym does not
teach, in a page section that is otherwise carefully left unlinked.

**A fourth page.** `/muay-boran/` carries five `data-wpil-monitor-id` links and
three of them run long again — "Muay thai boran faded as a battlefield art",
"styles shape martial art skills but muay boran", "know muay boran isn't just
one style". Each swallows most of a clause. And **three of the five point at the
other posts in this page's own duplication cluster** (issue 7), which is the
plugin actively reinforcing the cannibalisation rather than resolving it.

**A tenth page, and the same review link is now on six of them.**
`/sambo-techniques/` carries Stacie Arce's testimonial with the same three words
linked and the same `data-wpil-monitor-id="118"`.

Six pages, one customer, one inserted advertisement. The count tracks the review
set exactly (issue 32), which confirms the mechanism: the plugin matches "jiu
jitsu master" wherever that paragraph appears, so **every future page carrying
these reviews will carry the link too**. Stopping it means either excluding
`<blockquote>` from the plugin's scope or stopping the copy-paste.

**A ninth page, and the same review link is now on five of them.**
`/muay-thai-gear-for-safety/` carries Stacie Arce's testimonial with the same
three words linked and the same `data-wpil-monitor-id="118"`.

That makes five pages publishing the same customer's words with the same
inserted advertisement. It is not drifting or varying — the plugin matches the
phrase wherever the block appears, so **every page that republishes these five
reviews will carry it**, and the review set is spreading (issue 32). The fix has
to be in one of two places: stop the plugin matching inside `<blockquote>`, or
stop copying the reviews.

**An eighth page, and it has now linked the same review on two consecutive
posts.** `/martial-arts-for-self-defense/` carries Stacie Arce's testimonial with
the identical three words turned into a link:

```html
"Coach Matheus is a <a href="…/brazilian-jiu-jitsu-belts/"
data-wpil-monitor-id="118">jiu jitsu master</a> from Brazil…"
```

Same anchor text, same destination, same `data-wpil-monitor-id` — **118** on both
pages. The plugin is matching the phrase wherever the review block appears, so
every page that republishes this testimonial gets the link. With the review set
now on four pages (issue 32), this will keep spreading as long as both the
plugin and the copy-pasted reviews stay as they are.

No split word on this page, and its three other clause-length anchors are the
usual over-long kind: "Learning martial arts also builds confidence and keeps you
fit", "self defense skills for street fights or just to stay fit", "master ground
fighting with brazilian jiu-jitsu".

**A seventh page, and it does both of the plugin's worst tricks at once.** On
`/bjj-belt-ranks-in-coppell/`:

**It cuts a word in half again.** The Conclusion reads:

```html
<a href="…/kick-boxing-bag/" data-wpil-monitor-id="113">kick off your own story
in this awesome mart</a>ial art
```

The anchor ends on "**mart**", leaving "ial art" outside the link — the identical
failure logged at the top of this issue, eight months later and still happening.
The destination is also wrong in the way issue 10 describes: an article about
**kickboxing bags**, linked from a sentence about starting Brazilian Jiu-Jitsu,
apparently matched on the words "kick off".

**And it has linked a second customer's review.** Stacie Arce's testimonial is
published with three of its words turned into an advertisement:

```html
"My son has been coming since December and grown so much. Coach Matheus is a
<a href="…/brazilian-jiu-jitsu-belts/" data-wpil-monitor-id="118">jiu jitsu
master</a> from Brazil but more important than that, he is a skilled coach."
```

That is the second named customer whose words now carry a link they did not
write, after FunDadMo below. **Two reviews, two pages, same plugin.** It is also
pointing at one of the three belt posts this page duplicates (issue 7), so the
plugin is simultaneously editing a testimonial and reinforcing a cannibalisation
cluster.

**A third page, and the plugin has now linked a customer's review.** On
`/top-ten-martial-arts-for-self-defense/`, FunDadMo's Google review is published
with the second half of it wrapped in an advertisement link:

```html
<strong>FunDadMo</strong>
"Great hidden jiu jitsu gym for all ages, perfect for learning
<a href="…/best-martial-arts-for-self-defense/" data-wpil-monitor-id="87">Self-defense
techniques." The teacher is great and really knows the art."</a>
```

On the page, a named customer's words are underlined and clickable, and clicking
them takes the reader to another of the gym's articles. **The link text includes
the closing quotation mark and the whole of the second sentence.**

This is worse than the split words and the long clauses below, for a reason that
has nothing to do with SEO: **it edits a real person's testimonial into an
advertisement.** A reader cannot tell whether FunDadMo linked to that page, and
the review no longer reads as a quotation. Of everything the plugin has done,
this is the instance to fix first.

The same page carries three more clause-length anchors — "belts in martial art
styles like karate", "BJJ and MMA offering mixed martial arts", "combat sport
energy with striking techniques" — and, per issue 66, **two links to WordPress
placeholder pages**, both under the anchor text "Sixth Sense Martial Arts". That
last one shows the plugin is matching the brand name against a target list that
still contains scaffolding pages.

**Raised to High.** Three pages, four distinct failure modes, and one of them
alters a customer's published words.

**A second page, with the opposite failure: whole clauses as anchor text.**
`/best-self-defense/`, published the same morning, carries the same
`data-wpil-monitor-id` attributes and five internal links. None of them splits a
word, but three of them swallow most of a sentence:

| Anchor text as published | Destination |
|---|---|
| "martial arts for personal security in a variety of self defense" | `/different-types-of-martial-arts/` |
| "Muay Thai's striking techniques are highly effective" | `/what-martial-art-destroys-boxers/` |
| "self defense training at Sixth Sense MMA and start building" | `/self-defense-classes-near-me/` |

Each one begins or ends mid-clause. The third is the clearest: it links eight
words that end on "and start building", leaving "the skills you need" outside
the link. A reader sees most of a sentence underlined for no apparent reason.

This is the same tool failing the same way — matching a target phrase in the
text and then extending or truncating the anchor by a fixed span rather than to
a sensible boundary. On the first page it cut words in half; here it runs long.
Both make the anchor text useless as a signal, which is the whole point of an
internal link.

**Worth noting alongside this:** the same plugin is the most likely source of
the auto-linked oddities already logged elsewhere — the Wikipedia "purpose" link
on `/mma-gyms-near-me/` and the "rushing" link to an American-football article
on `/mixed-martial-arts-near-me/` (issue 10). All of them have the signature of
a tool matching words without reading the sentence.

**What to do, in order:**

1. Fix the two broken anchors on this page by hand — the link should wrap
   "martial art", not "mart".
2. **Audit every post for the same fault.** In the WordPress database, search
   the post content for `data-wpil-monitor-id` and check each anchor's text ends
   on a word boundary. It is a quick scripted check and the plugin has been
   running long enough to have done this elsewhere.
3. Consider turning the plugin's automatic insertion off and using its
   suggestions manually. Internal linking is worth doing, but the anchor text is
   the whole value of it, and a tool that cannot be trusted to end a link at the
   end of a word should not be choosing it.

**In the rebuild:** both broken anchors are reproduced exactly as published,
split words and all, with the URLs mapped to their local files and the plugin's
`data-wpil-monitor-id` attributes stripped as ordinary editor markup. The build
fails if either anchor is tidied up.

### 65. A "Top Ten Martial Arts" list that is five disciplines counted twice — CONTENT (accuracy), SEO — **High**

`/top-ten-martial-arts-for-self-defense/` is built around a numbered list of ten
martial arts. It contains **five**.

| # | Heading as published | Discipline |
|---|---|---|
| 1 | Brazilian Jiu Jitsu (BJJ) for Effective Self-defense | **BJJ** |
| 2 | Muay Thai for Street Fight Readiness | **Muay Thai** |
| 3 | Kickboxing for Versatile Self defense Skills | **Kickboxing** |
| 4 | Teen BJJ for Building Confidence | BJJ again |
| 5 | Teen Muay Thai for Strength and Agility | Muay Thai again |
| 6 | Kids BJJ for Anti Bullying Protection | BJJ again |
| 7 | Adult BJJ for Advanced Techniques | BJJ again |
| 8 | Adult Muay Thai for Striking Power | Muay Thai again |
| 9 | Wrestling | **Wrestling** |
| 10 | Kickboxing for Fitness and Defense | Kickboxing again |

**Brazilian Jiu Jitsu is four of the ten. Muay Thai is three. Kickboxing is
two.** Items 4 to 8 are not martial arts at all — they are the gym's own
age-group timetable, and items 1, 4, 6 and 7 describe the same art to four
different audiences.

**Why this is worse than a padded listicle.** The audience for "top ten martial
arts for self defense" is people comparing disciplines — and the one thing that
reader knows for certain is that Teen BJJ and Adult BJJ are the same martial
art. A list that counts them separately tells them, in the first thirty seconds,
that the page was written to hit a number rather than to answer the question.
For a school whose entire proposition is expertise, that is an expensive first
impression.

**Two smaller faults inside the same list.** Item 9 is the bare word
"**Wrestling**", with no descriptor, where the other nine all carry one
("...for Striking Power", "...for Building Confidence"). And item 9's two
paragraphs are written in a completely different register from the rest —
encyclopaedic and third-person ("The sport is divided into different styles,
such as freestyle, Greco-Roman, and folk style") where every other item is
first-person sales copy ("Our sessions include pad work and sparring"). It reads
as pasted from somewhere else.

**This is the same class of error as issue 45**, the "Top 9 Kickboxing
Techniques" post that lists the hook twice — but at a different scale. There,
one item of nine was a duplicate. Here, five of ten are.

**What to do, either of two ways:**

1. **Make it a genuine ten.** The article already names Judo, Karate, Krav Maga,
   MMA and Boxing in its own prose. Promoting five of those to numbered items,
   and moving the age-group programmes into the "Services We Offer" section where
   they belong, produces an honest top ten and a better page.
2. **Retitle to the real count.** "Five Martial Arts for Self Defense, and the
   Programmes That Teach Them" is accurate, and a five-item list that is right
   beats a ten-item list that is padded.

Option 1 is the stronger page; option 2 is a ten-minute fix. Either is better
than what is published.

---

### 66. Two WordPress placeholder pages, live and indexable, linked from a published article — SEO, CONTENT — **High**

`/top-ten-martial-arts-for-self-defense/` contains two internal links whose
anchor text is the business's own name, **"Sixth Sense Martial Arts"**. They
point at:

```
https://sixthsensemma.com/landing-page/
https://sixthsensemma.com/dummy-page/
```

Both are live. Both return **HTTP 200**. Both are titled exactly what they
sound like — "Landing Page - Sixth Sense Martial Arts" and "Dummy Page - Sixth
Sense Martial Arts" — and both are left-over scaffolding from the site build
that was never deleted.

**`/landing-page/` has no content at all.** Its body is empty apart from the
site header and footer. A visitor who clicks the gym's own name in the middle of
the article lands on a blank page.

**`/dummy-page/` has 111 words**, all of it boilerplate lifted from the
homepage, including a "LIMITED TIME OFFER — See This Month's Amazing Deal Before
It's Gone" banner advertising a deal that is not described anywhere on it.

**Both are set to `index, follow` with self-referencing canonicals.** They are
not hidden drafts; Rank Math is actively telling Google to index them. Two empty
pages carrying the brand name, indexable, and now linked from a real article —
which is precisely the signal that tells a crawler they are worth indexing.

**Three consequences:**

- **A reader who clicks the gym's name gets nothing.** It happens twice on one
  page, in the "How Sixth Sense Martial Arts Works" and "Common Challenges"
  sections, exactly where someone deciding whether to trust the school would
  click.
- **Thin indexable pages drag on the whole domain.** Google assesses site
  quality across all indexed URLs. A blank page and a boilerplate page, both
  branded, both linked, are the cheapest possible quality problem to fix.
- **The internal link equity goes nowhere.** Two of this article's seventeen
  internal links point at dead ends.

**The likely cause is the same auto-linking plugin logged at issue 64.** Both
links carry `data-wpil-monitor-id` attributes, so the plugin matched the phrase
"Sixth Sense Martial Arts" in the text and linked it to whatever page it had in
its index — including the two placeholders nobody removed. That means **this is
unlikely to be confined to one article**.

**What to do, in order:**

1. **Delete `/landing-page/` and `/dummy-page/`**, or at minimum set them to
   `noindex` and remove them from the sitemap. Deleting is better; there is
   nothing on either worth keeping.
2. **Search the whole site for links to both URLs** before deleting, so nothing
   is left pointing at a 404. The two on this article are the ones found so far.
3. **Check the auto-linker's target list** for any other placeholder, draft or
   test page it is allowed to link to.

**In the rebuild:** both links are reproduced exactly as published, pointing at
the live absolute URLs, because mapping them to a local page would change where
the link goes and hide the fault. The build fails if either is quietly
redirected somewhere sensible.

---

### 67. A conclusion written as keyword salad rather than English — CONTENT, SEO — **High**

The four closing paragraphs of `/top-ten-martial-arts-for-self-defense/` are not
written in sentences. They are a list of search phrases joined with conjunctions.
This is the second paragraph, quoted in full and unedited:

> Martial art styles like Wrestling and **Box** add depth, while **Kick** and
> Krav Maga bring street fight readiness. Karate and **Punch** techniques build
> confidence, with BJJ and MMA offering mixed martial arts excitement. Effective
> martial art training at **martial arts in the world level** happens daily.
> Brazilian Jiu Jitsu and effective martial moves stand out, alongside **art for
> Self-defense** that fits all.

"Box", "Kick" and "Punch" are presented as the names of martial arts, alongside
Krav Maga and Karate. "Martial arts in the world level" is not a phrase in
English. And it continues for two more paragraphs:

> Traditional martial roots meet traditional martial arts flair, exploring
> **style of martial arts** diversity. Many martial arts ground fighting options
> emerge, **each style of martial** adding unique flavor.

> Dig into **martial art to learn** paths like Self-defense situations that prep
> you for action. Effective martial arts for Self-defense, including **deadly
> martial art skills**, shape fighting style instincts.

**What this is.** Every bolded fragment is a keyword someone wanted on the page —
"style of martial arts", "martial art to learn", "best martial arts to learn",
"Chinese martial art" — dropped into sentences that were then built around them.
The truncations ("each style of martial", "art for Self-defense") are what
happens when a phrase list is pasted in without reading it back.

**Why this is High rather than a style note.** Three reasons:

- **It is the last thing a reader sees.** The conclusion is where someone who
  read the article decides whether to book a trial. This one reads as machine
  output.
- **It is the part of the page Google reads most sceptically.** Keyword stuffing
  in a closing paragraph is one of the oldest patterns spam detection looks for,
  and the site is already carrying an injected-spam problem (issue 1). The page
  does not need a second reason to be distrusted.
- **The rest of the article is fine.** The ten sections, the comparison table and
  the FAQ are all readable, specific and in the gym's own voice. The conclusion is
  the only part like this, which makes it both conspicuous and easy to fix.

**What to do:** delete all four paragraphs and write three sentences saying what
the article said — pick a discipline, book a free trial, the gym is in Coppell.
Nothing of value is lost. Then **check the other posts' conclusions for the same
pattern**, because a phrase list pasted into a closing section is a process, not
a one-off.

### 68. A published URL that misspells its own keyword — SEO — Medium

The post "Martial Arts for Kids Building Strength and Confidence" is published at:

```
https://sixthsensemma.com/martial-arts-for-kids-strenght/
```

**"strenght"** — the H and T transposed. The page's own H1, title tag and body
copy all spell "Strength" correctly; only the URL is wrong.

**Why it matters more than a typo normally would.**

- **The URL is visible in search results.** Google shows the breadcrumb path
  under the title. A misspelling there is the one kind of error a reader
  attributes to the business rather than to a machine.
- **It is permanent once indexed.** Changing a URL after it has accumulated
  links and history costs you those signals unless the redirect is done
  properly, which is why this needs deciding now rather than later.
- **It is not a keyword the page can use.** "strenght" has no search volume. The
  slug therefore carries "martial-arts-for-kids" and then a dead word, where it
  could have carried "strength", which the page is genuinely about.
- **It suggests nothing checks slugs.** This is the second URL-level fault
  logged, after the two kick-boxing spellings at issue 44 and the `-2` suffix at
  issue 24. Slugs are auto-generated from the title and then edited by hand, and
  nobody is reading them back.

**What to do:** create the correctly spelled slug
`/martial-arts-for-kids-strength/`, **301 the misspelt one to it**, and update
any internal links. Do it before the page accumulates external links. Then add
a slug check to whatever pre-publish routine exists — the same read-through that
would catch issue 22.

**In the rebuild:** the misspelt slug is kept exactly, in the filename, the
canonical, the Open Graph URL and the sitemap, because correcting it would stop
the page being a replica of what is live. The build fails if it is silently
fixed.

---

### 69. A minimum age that contradicts the gym's own programme, its own page and its own tags — CONTENT (accuracy) — **High**

`/martial-arts-for-kids-strenght/` is written for parents choosing a first
class for their child. It states a minimum age of **seven**, three times.

**In an H3 of its own:**

> ### Starting at Ages 7 and Up
> **Starting martial arts at ages 7 is a great time to jump in.** Kids this age
> are ready to learn self control and concentration without it feeling
> overwhelming.

**Again in the comparison section:**

> ours layers in family sessions and skill tweaks **for ages 7 up**

**And a third time in the FAQ, inside `FAQPage` structured data**, where Google
may surface it as a rich result:

> **Q: What age can my child start martial arts training at Sixth Sense MMA?**
> A: **Children can begin training as early as age 7.**

**The gym takes children from four.** The homepage's own programme list, which
is the only place on the site that publishes ages, says so plainly:

> Kids Program — Intro To Jiu Jitsu, Self-Defense & Anti-Bullying —
> **Intro to Jiu Jitsu, Ages (4 - 12)**
> **Little Champions**, Kids Brazilian Jiu-Jitsu, **Ages (4 - 7)**
> **Rising Champions**, Brazilian Jiu-Jitsu Advanced Techniques, **Ages (8 - 12)**

**The page contradicts itself three times over, without leaving the page.**

1. **Its own three class headings are those three programmes**, in that order:
   "Intro to Jiu Jitsu for Beginners", "**Little Champions Level**", "Rising
   Champions Advanced". Whoever wrote this post had the homepage's programme
   list in front of them — the names match exactly — and that list says "Ages
   (4 - 12)" on the line above. The page reproduces the structure and drops the
   ages.
2. **"Little Champions" is the 4-to-7 group.** The post describes it three
   sections below the heading that tells parents the minimum is seven.
3. **Three of its six tags target exactly the children it turns away:**
   "**martial arts for 5 year olds**", "**martial arts for 6 year olds**" and
   "**toddler bjj**".

So the page is optimised to be found by the parent of a five-year-old, and then
tells that parent their child is two years too young. Whoever wrote the tags and
whoever wrote the copy were working from different information.

**Why this is High and not Medium.** Every other accuracy issue in this document
costs the client credibility. This one costs them **enrolments, individually and
silently**. A parent who reads "ages 7 and up" does not ring up to check — they
close the tab. The gym never learns it happened, and the four-to-six age band is
the one most likely to stay for years.

**What to do:** change all three instances to the real range — **"from age 4"** —
and name the two groups with their ages, Little Champions (4 to 7) and Rising
Champions (8 to 12), which this page already describes without them. The FAQ
answer matters most, because it is the one Google may quote.

**A related gap found while checking this.** The ages are published **only on
the homepage**. `/kids-bjj-classes/` and `/teen-bjj-classes/` — the two pages a
parent lands on from a search, and the two that take the booking — state **no
age range at all**. So the one place the correct information exists is the page
a searching parent is least likely to see, and the programme pages leave the
question open. Put "Ages 4-12" on the Kids BJJ page and the equivalent on Teen
BJJ; it is a one-line change on each and it closes both halves of this issue.

### 70. An AI generation timestamp published in the article body — CONTENT — **High**

`/martial-arts-near-me-classes/` contains this sentence, in the middle of
"Current Trends in Martial Arts Schools":

> With more families jumping in schools are adapting to fit busy schedules and
> different fitness levels. **Even late at night like right now at 11:29 PM on
> this Friday October 17 2025** folks are chatting online about these changes.

**That is the moment the text was generated, written into the article as if it
were the moment the reader is reading it.** The page was published at 06:32 on
18 October, about seven hours later, and the sentence has been live ever since.

**Why it is the most conclusive finding in this document.** Every other entry
here describes something a hurried human might plausibly have written: a padded
list, a vague price, a wrong age. This one could not have been written by a
person. Nobody drafting marketing copy types the current time to the minute and
tells the reader it is "right now". It is a language model being told what time
it is and putting that in the output, and it reaching the live site means **no
human read this paragraph before it was published.**

That matters beyond this sentence, because it changes what the rest of this
document means. Issues 22, 65, 66 and 67 all inferred "content briefs are being
published without an editing pass"; this is the first item that **proves** it.

**Three practical consequences:**

- **It is visibly wrong to every reader, forever.** "Right now at 11:29 PM on
  this Friday October 17 2025" is false on every day except one, and it is
  stated with a confidence that makes the rest of the page read as machine
  output too.
- **It is the kind of thing that gets screenshotted.** A named local competitor
  is being criticised two sections further down (issue 52's family of claims);
  a competitor who reads this page has an easy thing to point at.
- **Search engines are increasingly explicit about unreviewed mass-generated
  content.** The issue is not that AI wrote it — it is the published evidence
  that nothing was checked.

**What to do:**

1. **Delete the sentence today.** It is one sentence and nothing depends on it.
2. **Search every post for the same pattern**: the strings "right now", "as of",
   "today is", "this Friday", "2025 folks", and any bare clock time
   (`\d{1,2}:\d{2}\s?(AM|PM)`) in body copy. A timestamp that leaked once has
   very likely leaked elsewhere.
3. **Add one human read-through before publishing.** Every finding in this
   document that involves leaked scaffolding — the "(Use table format)" heading,
   the "Call to Action" labels, the keyword-salad conclusion, the price deleted
   mid-sentence, and now this — is caught by one person reading the page once.

**In the rebuild:** the sentence is reproduced exactly, timestamp and all, and
the build fails if it is quietly removed or updated.

### 71. A local-intent page whose H1 and tags omit the city entirely, and a city name lower-cased in the title — SEO — Medium

`/bjj-belt-ranks-in-coppell/` is built to rank for a local phrase. The slug says
so, the `<title>` says so, the meta description says so. Then the page itself
drops the town.

| Element | What it says | Coppell? |
|---|---|---|
| Slug | `/bjj-belt-ranks-in-coppell/` | **yes** |
| `<title>` | "Choosing the right class based on bjj belt ranks in **coppell**" | yes, lower case |
| Meta description | "bjj belt ranks in Coppell and how progression works" | **yes** |
| **H1** | "BJJ Belt Ranks: A Look at the Brazilian Jiu-Jitsu Ranking System" | **no** |
| **All six tags** | belt ranking system in bjj · bjj belt levels · bjj ranks · brazilian jiu jitsu belt order · brazilian jiu jitsu belt rankings · brazilian jiu jitsu belts | **none** |
| Body copy | one mention, in the Contact Us address block | once, in the footer-style block |

**The H1 is the problem.** After the title tag it is the strongest on-page
signal about what a page is for, and this one reads as a general reference
article on the BJJ ranking system — which is what it is. A reader who searched
"bjj belt ranks in coppell" lands on a page that never tells them it is about
Coppell until the contact details at the bottom.

**The lower-case "coppell" in the title is a separate, smaller fault.** The
`<title>` is the blue link in the search result. "bjj belt ranks in coppell",
all lower case including the proper noun, reads as unfinished. It is the second
title-case fault logged, after the lower-case brand on
`/best-fighting-style-for-self-defense/` (issue 33).

**And the meta description runs two words together.** The live tag reads:

> Learn everything about bjj belt ranks in **coppelland** how progression works

"Coppell" and "and" with the space deleted — the same class of error as the
"stronger.By" and "attentionOur" run-ons at issue 17, but in the one element
Google quotes verbatim under the title.

**What to do, in order of value:**

1. **Put the town in the H1**: "BJJ Belt Ranks in Coppell: A Look at the
   Brazilian Jiu-Jitsu Ranking System". One edit, and it is the edit that makes
   the slug honest.
2. **Fix "coppelland"** in the meta description and capitalise "Coppell" in the
   title.
3. **Add two local tags** — "bjj belt ranks Coppell", "bjj classes Coppell TX" —
   and work one Coppell mention into the opening paragraph, as issue 30
   recommends for the whole site.

The pattern across the recent posts is now clear and inconsistent: `/muay-boran/`
names Coppell five times in its own copy, `/martial-arts-for-kids-strenght/`
four, and the two newest — `/martial-arts-near-me-classes/` and this one — once
each, in the contact block only. The local signal is being applied by whoever
happens to write the post rather than by rule.

---

### 72. Belt-rank timeframes that describe years of training where the real criteria are age-based — CONTENT (accuracy) — Medium, to verify

`/bjj-belt-ranks-in-coppell/` publishes seven timeframes. They are the whole
point of the page: a reader researching belt ranks is researching how long it
takes.

| Rank | What the page says |
|---|---|
| White → blue | "might take **2-3 years** depending on practice" |
| Purple | "often follows after another **2-4 years**" |
| Brown | "could be **5-6 years from blue**" |
| Black | "takes around **10 years total**" / "comes after about **10 years** for most" |
| **Coral** | "given to those with **50 years or more of training**" |
| **Red** | "awarded after **60-70 years**" |

**The first four are sound.** 2-3 years to blue, roughly a decade to black, and
the intermediate steps are consistent with each other and with how the belt
system actually works. Nothing here needs changing, and it is worth saying so —
this is the most accurate set of figures published anywhere on the site.

**The coral and red figures need checking, because they measure the wrong
thing.** Under the IBJJF graduation system, the senior ranks are gated primarily
by **age**, not by years on the mat:

- **7th degree (coral)** requires the practitioner to be **50 years old**, after
  a set period at black belt.
- **9th degree (red)** requires the practitioner to be **67 years old**.

The page converts those into training durations — "50 years or more **of
training**", "awarded after **60-70 years**" — which is a different and much
larger claim. Someone who began at 20 and has trained 50 years is 70, well past
the coral threshold. Read literally, the page tells a 50-year-old black belt
they have another two decades to go when the real criterion may already be met.

**Why Medium rather than High.** Almost nobody reading this page is close to a
coral belt, so the practical harm is small. But it is a page whose entire
purpose is to state these numbers, and the FAQ repeats the coral figure inside
`FAQPage` structured data, where Google may surface it as a direct answer:

> The coral belt is a special rank awarded to lifelong practitioners with **over
> 50 years of training**.

A knowledgeable reader — which, on a belt-ranks page, is much of the audience —
will spot it, and it is the kind of error that costs a school credibility with
exactly the people it wants to recruit.

**What to do:** have the head coach check all seven figures, then restate the
coral and red lines in terms of **age plus time at black belt**, which is how
the IBJJF defines them. Keep the first four as they are. And correct the FAQ
answer, since that is the version most likely to be quoted.

**One structural note on the same page.** It runs 3,024 words on a subject that
is a sequence of seven ranks and contains **no list markup at all** — not one
`<ul>`, `<ol>` or `<li>`. A belt-order page without a belt-order list is a
missed opportunity both for the reader skimming for the sequence and for the
structured data a ranked list can carry.

### 73. Private coaching advertised on three pages, in three different forms, and confirmed by no programme page — CONTENT (accuracy) — **High, the client must confirm**

One-to-one coaching is advertised on **three** blog posts, each describing it
differently. I checked all 77 posts, the five programme pages and the homepage
for every phrasing — "one-on-one", "one on one", "private lesson", "private
coaching", "private session", "personal coaching":

| Page | How it appears |
|---|---|
| `/jiu-jitsu-near-me/` | H3 "**Private Coaching Sessions**" — "our private coaching sessions offer **one-on-one and small group** training tailored to your pace" |
| `/bjj-classes-near-me/` | No heading of its own, but "From **one-on-one coaching** to well-maintained mats", an H3 "Small Class Sizes, Big Impact: One on One Attention", and "whether it's group classes, **private sessions**, or flexible memberships" |
| `/martial-arts-for-self-defense/` | H3 "**One-on-One Coaching**" |

**No programme page mentions it, and neither does the homepage.** All five —
Adult BJJ, Adult Muay Thai, Kids BJJ, Teen BJJ, Teen Muay Thai — are silent on
private coaching, as is the homepage's programme list. So the only places a
prospective customer learns it exists are three blog posts, and the pages that
take the booking do not list it.

**On the newest page the section contradicts its own heading.** Under the H3
"One-on-One Coaching", `/martial-arts-for-self-defense/` says:

> Want personal tweaks? **Small group sessions** give you close instructor eyes
> on your form. They spot what fits your style maybe more muay thai elbows or
> wrestling pins and guide you toward goals like handling multiple attackers.
> It's empowering with coaches who cheer every win big or small. **That
> one-on-one vibe** turns weak spots into strengths fast.

The heading promises private coaching, the first sentence describes **small
group** sessions, and the last calls that a "one-on-one **vibe**". A reader who
books expecting a private lesson and arrives at a small group has been misled by
the heading, and the copy half-concedes it.

**`/jiu-jitsu-near-me/` already gets this right**, which is the useful
comparison: it says "one-on-one **and** small group", so the reader knows both
are on offer. The newest page takes the same underlying service and puts only
the premium half in the heading.

**Why this is High.** Private coaching is the highest-priced thing a martial
arts school sells. Advertising it on three pages with no price, no booking route
and no programme page is issue 48 applied to the most expensive item on the
menu — and unlike a vague "better value" claim, this is one a customer will ring
up and ask for by name.

**It also offers two disciplines inside the pitch, one of which is not taught**:
"maybe more muay thai elbows or **wrestling** pins". Muay Thai is real;
wrestling has no programme page (issue 39).

**What to do — one of two things, and the client has to choose:**

1. **If private coaching exists:** put it on the programme pages with a price
   and a way to book, and make the three posts describe the same thing in the
   same words. Copy `/jiu-jitsu-near-me/`'s phrasing, which is the accurate one.
2. **If it does not:** delete the heading from `/martial-arts-for-self-defense/`
   and the "private sessions" line from `/bjj-classes-near-me/`. "Small group
   sessions" and "small class sizes" are real and attractive; they just are not
   one-to-one coaching.

**Three genuine positives in the same section of the newest page, worth
recording.** Of its four programme-shaped H3s, three are accurate:

- "**Open Mat Gatherings**" describes "**Free open mat days**", which matches the
  homepage's offer exactly.
- "**Adult Jiu-Jitsu Sessions**" describes "unlimited 60-minute sessions from
  beginner to advanced", which matches the homepage's adult programme.
- "**Programs for Kids**" names all three real kids tiers — **Intro to Jiu Jitsu,
  Little Champions and Rising Champions** — which only two other posts on the
  site do.

So on this page the service descriptions are right three times out of four. The
fourth is the one logged here.

### 74. A post that sells eight products the site has no shop for, and contradicts its own twin — CONTENT (accuracy), TRUST — **CRITICAL, the client must confirm**

`/muay-thai-gear-for-safety/` is not written as a buying guide. It is written as
a **product catalogue for Sixth Sense MMA**. Its "Muay Thai Products" H2 opens:

> **We've got your muay thai gear covered with top picks. Our selection** brings
> authentic quality to every fighter from newbies to seasoned pros. Check out
> our gloves shorts and more each piece is designed for the gym or ring.
> **Let's look at what we offer.**

Then eight H3s, one per product, each in the first person with a purchase
instruction at the end:

| Section | Claim | Call to action |
|---|---|---|
| Gloves | "**Our gloves at Sixth Sense MMA** are built for action. Made with durable leather…" | "**Pick a pair** and feel the difference!" |
| Shorts | "**Our muay thai shorts at Sixth Sense MMA** are a game-changer… The designs come **straight from Bangkok**" | "**Pick your favorite color**… and hit the gym" |
| Shin Guards | "**ours at Sixth Sense MMA** don't disappoint. Made with tough padding…" | "**Grab a pair** and train worry-free!" |
| Headgear | "**Headgear from Sixth Sense MMA** keeps you safe in the ring" | "Try it out and feel the difference!" |
| Hand Wraps | "**ours at Sixth Sense MMA** deliver. Made from soft yet sturdy fabric…" | "**Get a set** of muay thai gloves and protect your hands today!" |
| Ankle Supports | "**Ankle supports at Sixth Sense MMA** keep you steady" | "Slip them on and move with ease!" |
| Mouthguards | "**Our mouthguards at Sixth Sense MMA** are a smart pick. Crafted from premium material…" | "**Grab one** and train with confidence!" |
| Groin Protectors | "**Groin protectors from Sixth Sense MMA** offer vital protection" | "Add this to your gear and stay safe!" |

**It names two brands as stocked**, under its own H2 "Why Pick Sixth Sense MMA
for Authentic Gear":

> **We stock Fairtex and Yokkao pieces** that pros swear by… **It's not just
> buying stuff**; it's grabbing tools like muay thai gloves that match the
> discipline we teach.

And the FAQ repeats it inside `FAQPage` structured data, where Google may quote
it as a direct answer:

> **Sixth Sense MMA offers authentic Muay Thai equipment from trusted brands
> like Fairtex and Yokkao.**

**There is no shop.** I searched the whole build and the live page: no shop,
store, product, cart or checkout page exists, no WooCommerce or add-to-cart
markup appears anywhere, and **the page states no price for any of the eight
items and gives no way to buy them.** Eight product sections, nine purchase
imperatives, zero prices, zero purchase routes.

**And the gym's other page on the same keyword says something different.**
`/muay-thai-gear/` — which targets "muay thai gear" as its primary keyword too
(issue 7) — describes the offering as **advice**, not retail:

> We offer **personalized gear advice** and professional training sessions at our
> physical gym

So two pages on one keyword disagree about whether the business sells equipment.
I checked the other gear posts — `/muay-thai-gloves/`, `/muay-thai-clothing/`,
`/muay-thai-gym-bag/`, `/muay-thai-backpack/`,
`/mixed-martial-arts-training-gloves/` — and none of them claims to stock or sell
anything; they are all generic advice. **This is the only page on the site that
claims to retail equipment.**

**Why this is CRITICAL rather than High.** Every other accuracy issue in this
document misdescribes a *service*. This one invents a **revenue line**. There are
only two possibilities and both need action today:

1. **The gym does not sell gear.** Then eight sections, two named brands and nine
   "grab one" instructions are advertising a shop that does not exist. A customer
   who walks in asking to buy the Fairtex shorts gets an awkward conversation,
   and "We stock Fairtex and Yokkao" is a straightforwardly false statement about
   the business.
2. **The gym does sell gear.** Then this is a real revenue line that appears on
   **one page out of seventy-eight**, with no prices, no product list, no shop
   page and no mention on the homepage or any programme page — and the page
   written to rank for the same keyword contradicts it. That is a commercial
   problem rather than an accuracy one, and a bigger missed opportunity than
   anything else in this document.

**What to do:**

- **If there is no retail:** rewrite all eight sections as "what to look for in
  gloves" rather than "our gloves", delete "We stock Fairtex and Yokkao", and fix
  the FAQ answer. The content is genuinely useful as a buying guide; it just
  cannot be written in the first person.
- **If there is retail:** build a shop page, put prices on it, link it from the
  homepage and the programme pages, and make `/muay-thai-gear/` agree with this
  page instead of contradicting it.

**In the rebuild:** every ownership claim, brand name and purchase imperative is
reproduced exactly as published, and the build fails if a price or a purchase
route is invented, or if "add to cart", "shop now" or similar appears anywhere.

---

### 75. Six tags about gym bags on a post about protective gear — SEO — **High**

`/muay-thai-gear-for-safety/` covers gloves, shorts, shin guards, headgear, hand
wraps, ankle supports, mouthguards and groin protectors. Its six tags are:

> best muay thai gym bag · muay thai equipment bag · Muay Thai gear backpack ·
> muay thai gear bag · Muay Thai Gym Bag · muay thai sports bag

**Every one is about bags and backpacks. The post contains no bag section at
all.** Not one of the six matches any heading, and the words "bag", "backpack"
and "storage" appear nowhere in its eight product sections.

**They belong to a different post — and two candidates already exist.**
`/muay-thai-gym-bag/` and `/muay-thai-backpack/` are both live and both are
actually about bags. The tag set reads as a copy-paste from one of them that
nobody looked at afterwards.

**What it costs.** A tag is an entry point: it exists so that someone searching
"best muay thai gym bag" finds this page. What they find is a page about
mouthguards and groin protectors, with no bag on it. That is a bounce, and it is
a bounce Google can see. It also means the two posts that *are* about bags are
now competing with this one for their own tag archives.

**One of the six carries a trailing zero-width space**, "muay thai gear bag" plus
U+200B — the same invisible character logged at issue 30, which creates a second
archive page distinct from the clean version of the same phrase.

**What to do:** delete all six and replace them with terms the post is actually
about — "muay thai gloves", "shin guards", "muay thai mouthguard", "muay thai
protective gear", "muay thai gear for beginners". Then check in WordPress whether
`/muay-thai-gym-bag/` and `/muay-thai-backpack/` still carry these terms themselves — if the
set was moved rather than copied, one of those posts may have been left without
its own tags.

**This is the clearest case yet for the tag audit recommended at issue 30.** Tags
on this site have been wrong in several ways — invisible characters, section
titles used as tags, arts the gym does not teach, a competitor's brand name — but
this is the first time an entire set belongs to a different article.

### 76. A whole article written as two- and three-word fragments rather than sentences — CONTENT, SEO — **CRITICAL**

Issue 67 logs four closing paragraphs of keyword salad on one post.
`/types-of-sambo/` is the same failure applied to **the entire article**: all
3,449 words of it, every section, from the opening line to the conclusion. This
is the post's first paragraph, quoted in full and unedited:

> Types of sambo start every journey at SixthSenseMMA. Sambo mixes old folk
> wrestling styles with judo throws. Sambo is a russian martial born for red
> army needs.

"Sambo is a russian martial" is not a phrase. It is the keyword "sambo is a
russian martial art" with its last word cut off, and the same truncation runs
through the whole post — "Sambo is a martial pro watch", "Sambo is a russian
martial expert guide", "Sambo is a martial full tool". The body of the Sport
Sambo section:

> Sport sambo bans strikes. Sport sambo focuses grapple. Sport sambo uses
> submission. Sport sambo loves throws. Wrestling style heavy. Freestyle
> wrestling close kin. Judo throws mix. Leg locks allowed. Types of leg locks
> heel hooks.

And the section on the gym's own training environment:

> SixthSenseMMA mats clean safe. Mma touch spar. Kickboxing pad flow. Sambo roll
> controlled. [...] Shin meet pad. Elbow graze check. Head strikes helmet on.

**What this is.** Every paragraph is a keyword followed by two or three words,
repeated until the paragraph is long enough, with a full stop after each. There
are 35 paragraphs on the page and they are all built this way. Nothing in the
article explains anything: a reader who wants to know what Sport Sambo is learns
that it "bans strikes", "focuses grapple" and "uses submission", in that
telegraphic register, and never gets a sentence.

**Why this is CRITICAL rather than a style note.**

- **It is unreadable, and it is a top-of-funnel page.** Someone searching "types
  of sambo" is at the research stage. This page answers nothing they asked, so
  it cannot convert them, and it is the first impression the gym makes.
- **It is the clearest machine-generated text on the site.** Issue 67's
  conclusion looks like a phrase list pasted into prose. This looks like output
  from a tool that was given a keyword list and a word count. The site is
  already carrying injected spam (issue 1) and an AI timestamp published in body
  copy (issue 70); a 3,449-word page of this is the kind of thing that moves a
  domain from "thin content" to "scaled content abuse" in Google's terms, which
  is a site-wide risk, not a page-level one.
- **It is also where issue 0 lives.** The four-sentence head-injury claim reads
  as just more of the same fragments, which is exactly why it got published and
  why nobody caught it. The format hides the content.

**What to do:** this page cannot be fixed by editing. Decide first whether it
should exist at all — its one subject is already a section of
`/sambo-martial-art/` (issue 7). If it stays, it needs rewriting from scratch,
in sentences, by someone who knows Sambo, and then it needs issue 0 resolved.
Then check how it was produced, because the same process is behind issue 67,
issue 70 and the keyword-crammed headings in issue 17.

---

### 77. An eight-question FAQ where six questions are about boxing — SEO, CONTENT — **High**

`/types-of-sambo/` ends with an eight-question accordion. Two questions are
about its subject. The other six are not:

| # | Question | On topic? |
|---|---|---|
| 1 | "What are the different types of Sambo?" | Yes — the page's own subject |
| 2 | "What are the big 4 martial arts?" | No |
| 3 | "What is the no. 1 martial art?" | No |
| 4 | "Is Khabib a wrestler or Sambo?" | Yes — Sambo-related |
| 5 | "What are the 4 styles of boxing?" | No — boxing |
| 6 | "What is the hardest fighting style?" | No |
| 7 | "What is the 7 punch in boxing?" | No — boxing |
| 8 | "What is the hardest boxing style?" | No — boxing |

Three of the eight are about **boxing**, which the gym does not teach and this
post does not discuss. Questions 2, 3 and 6 are generic "best martial art"
queries, which belong to the seven-page cluster in issue 7 and pull this page
into competition with all of them.

**Why it matters:** these questions are marked up as an FAQ, so they are
eligible for rich results. If Google shows this page for "what is the 7 punch in
boxing", the click goes to a Sambo article from a gym that teaches neither
boxing nor Sambo, and bounces. It also dilutes what the page is about: five of
the eight questions tell Google this is a page about martial arts in general or
boxing in particular. This is a different fault from issue 9 (one generic FAQ
reused on 13 posts) and issue 42 (FAQ questions published as section headings) —
here the questions are unique to the page and simply belong to other subjects.

**What to do:** keep questions 1 and 4, delete the six that are off-topic, and
write four more about Sambo — which type suits a beginner, whether striking is
allowed, what a kurtka is, how Sambo compares with Judo and BJJ. Those are
questions the article's own sections already have answers for.

---

### 78. A local-intent post that publishes no address — SEO (local), CONTENT — Medium

`/types-of-sambo/` names Coppell four times in its own copy, including in a
"Contact Us" section that asks the reader to get in touch:

> SixthSenseMMA in Coppell, TX opens its doors for anyone ready to learn sambo.
> [...] Contact us at info@sixthsensemma.com or call **469-972-7800** to start.

There is no street address anywhere on the page. Every other recent post ends
with the full NAP block — "Located at 817 S MacArthur Blvd #100, Coppell, TX
75019" — and that block is how a local business page tells both a reader and a
search engine where it is. This one gives a city, an email and a phone number
and stops. The email address is also published as plain text rather than a
`mailto:` link, so a reader on a phone has to retype it.

**Why it matters:** the page asks for contact and then withholds the one detail
that lets someone visit. For local search, a page with city-level intent and no
address is weaker than the same page with one, and inconsistency across the blog
makes the address harder for Google to associate confidently with the brand. It
is a small fix with a direct effect.

**What to do:** add the standard NAP block to the Contact Us section, matching
the wording on the other posts exactly, and make the email address a
`mailto:` link. The rebuilt page reproduces the omission rather than silently
adding an address, so the two sides still match.

---

## How these were checked

- **Spam, phone number, empty headings:** scanned the raw HTML of all 86 pages.
- **FAQ comparisons:** extracted every question and answer from each page and
  compared them word for word.
- **Links:** followed each one and compared its link text with its target.
- **Image sizes:** compared each file's real pixel size with the size the page
  declares.
- **Counts** (placeholders, duplicated headings, typos): taken from the live
  page source, not estimated.
