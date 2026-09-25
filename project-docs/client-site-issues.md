# Issues found on the live site — sixthsensemma.com

Compiled 2026-09-15 while rebuilding the site. Every issue below was checked
against the live pages, not taken from notes. Counts come from scanning the
live HTML of **69 pages**: the homepage, the 5 program pages and all 63 blog
posts.

Each issue is tagged:

- **SECURITY** — the site or its visitors are at risk
- **SEO** — hurts how the site ranks or appears in search results
- **CONTENT** — wrong, broken or confusing for a visitor
- **GEOGRAPHIC TARGETING** — content aimed at the wrong location for a local business

The rebuilt site already fixes or works around every issue here. The client
still needs to act on the live WordPress site, most urgently the first two and
issue 40, which is now sending link equity to a competing gym.

---

## Summary

| # | Issue | Tag | Pages affected | Priority |
|---|---|---|---|---|
| 1 | Hidden casino spam links injected into every page | SECURITY | all 69 | Urgent |
| 2 | Wrong phone number on every tap-to-call link | CONTENT | all 69 | Urgent |
| 3 | Kids FAQ copied onto adult and teen BJJ pages | CONTENT | 2 | High |
| 4 | Broken `%…%` page title (template bug, recurring) | SEO | 2 | High |
| 5 | Internal links pointing at the wrong post, six at wp-admin screens | SEO | 8 | High |
| 6 | Two separate Kali Sticks posts | SEO | 2 | High |
| 7 | Near-duplicate posts competing for the same searches | SEO | 26 | High |
| 8 | "Contact us" links that go to the Teen BJJ page | CONTENT | 2 | Medium |
| 9 | Same generic FAQ reused on 13 posts | SEO, CONTENT | 13 | Medium |
| 10 | Outbound links to unrelated, weak or foreign-language sources, one to an American-football article | SEO, CONTENT | 32 | **High** |
| 11 | Blurry, upscaled featured images | SEO | 2 | Medium |
| 12 | AI-tool markup pasted into posts: ChatGPT, and now DeepSeek | CONTENT | 4 | Medium |
| 13 | "Table" placeholder text left above tables | CONTENT | 4 | Medium |
| 14 | Orlando post targets a city 1,100 miles away; reviews and headings placing a one-location gym across the USA | GEOGRAPHIC TARGETING | 7 | High |
| 15 | Duplicated headings and captions | SEO, CONTENT | 5 | Low |
| 16 | Empty headings | SEO | 2 | Low |
| 17 | Spelling errors, garbled headings and one untranslated Hindi/Urdu word | CONTENT | 27 | Medium |
| 18 | Image alt text typos and scrambled descriptions | SEO | 8 | Low |
| 19 | Duplicate WordPress tags | SEO | 2 | Low |
| 20 | Published and modified dates that disagree | SEO | 11 | Low — to confirm |
| 21 | Numbered list skips a number | CONTENT | 1 | Low |
| 22 | Editing notes and level markers left inside visible headings | CONTENT, SEO | 3 | Medium |
| 23 | Heading level skipped (H4 with no H3 above it) | SEO | 1 | Low |
| 24 | Two "Martial Arts Classes" posts, one with a `-2` URL | SEO | 2 | High |
| 25 | YouTube video that never loads, bare link shown instead | CONTENT | 1 | Medium |
| 26 | Poor image filenames: reused, WhatsApp exports, misspelt, duplicated, or a bare number | CONTENT (asset management) | 19 | Low |
| 27 | Gi sizing chart has overlapping height ranges | CONTENT | 1 | Medium |
| 28 | A post with no H2 headings at all | SEO | 1 | Medium |
| 29 | A whole second article duplicated inside another post | CONTENT, SEO | 1 | High |
| 30 | Bad tags: zero-width spaces, keyword-tool fragments, misspellings, and up to six phrasings of one phrase | SEO | 9 | Medium |
| 31 | Self-defence, weapon-law and injury-risk content with no disclaimer | CONTENT | 5 | **High — liability** |
| 32 | Testimonials that cannot be verified | CONTENT | 23 | Low — for the client to decide |
| 33 | The brand name written six different ways, three of them on one page | CONTENT, SEO | 12 | Medium |
| 34 | WordPress editor markup published in a page heading | SEO, CONTENT | 1 | Medium |
| 35 | Weight chart figures that disagree with each other | CONTENT | 1 | Medium — to verify |
| 36 | A four-letter acronym that spells nothing | CONTENT | 1 | Low |
| 37 | Two paragraphs run together, and a Muay Thai post that closes about MMA | CONTENT | 1 | Low |
| 38 | Document outline breaks: half a post sits under a heading it has nothing to do with | SEO, CONTENT | 1 | Medium |
| 39 | Posts advertising classes, perks and certified instructors the gym may not have | CONTENT (accuracy, trademark) | 12 | **High — client must confirm** |
| 40 | Invisible ChatGPT citation links, one to a competing gym | SEO, ACCESSIBILITY, CONTENT | 6 posts, 19 links | **CRITICAL** |
| 41 | A page whose title promises techniques and whose content is about confidence | SEO | 1 | Medium |
| 42 | FAQ questions published as section headings, competing with the page's own FAQ | SEO, CONTENT | 5 | Medium |
| 43 | A broken image: the page links a file that is not in the media library | CONTENT | 1 | Medium |
| 44 | The same topic published under two URL spellings, kick-boxing and kickboxing | SEO | 4 | Medium |
| 45 | A "Top 9" list that contains the same technique twice | CONTENT | 1 | Medium |
| 46 | A whole article section published inside a table caption | CONTENT, SEO, ACCESSIBILITY | 1 | Medium |
| 47 | Step-by-step instruction for a strike banned in every combat sport | CONTENT | 1 | **High — liability and reputation** |
| 48 | Pricing sections that name no price, and programs advertised nowhere else | CONTENT (accuracy), TRUST | 7 | **CRITICAL** |
| 49 | A map embed that overflows on a phone | CONTENT, ACCESSIBILITY | 7 | Low |
| 50 | Seven "near me" pages competing for the same local searches, four near-exact pairs | SEO | 7 | **CRITICAL** |
| 51 | Tags aimed at firefighting and at street violence, on a school that teaches children | SEO, CONTENT (reputation) | 1 | **High** |
| 52 | A comparison table advertising against unnamed competitors | CONTENT (accuracy) | 1 | Medium |
| 53 | A single-location gym advertising students "Across the USA" | GEOGRAPHIC TARGETING, CONTENT | 2 | **High** |
| 54 | Subheadings published as bold paragraphs: bullets on one post, numbers on another | SEO, ACCESSIBILITY | 2 | Medium |
| 55 | Two pages advertising two different discount schemes | CONTENT (accuracy), TRUST | 2 | **High — client must confirm** |
| 56 | A seven-page local set that is inconsistent with itself, one page missing the pricing section the other six have | CONTENT, SEO | 7 | Medium |

**56 issues in total.**

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

**What to do:** this is the point to stop fixing individual typos and put a
proofreading step in front of publication. Whoever is drafting should have a
native English reader check each post before it goes live. Then correct these
headings, starting with "BJ Classes", the two missing words, the missing "W" in
the FAQ question, "contractsjust", and the lower-case words in all three H1s.

### 33. The brand name written six different ways — CONTENT, SEO — Medium

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

### 22. Editing notes and level markers left inside visible headings — CONTENT, SEO — Medium

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

**What to do:** delete "(Bullet Points)" and merge the two sections, or give the
second one a heading that says what it actually covers.

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

### 39. Posts advertising classes and certified instructors the gym may not have — CONTENT (accuracy) — High, the client must confirm before this goes live

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

**What to do, in priority order:** (1) publish a price, even a "from" figure, on
all seven pages — the pay-as-you-go rate is the single most useful number and the
easiest to state; (2) if the client will not publish prices, delete the pricing
sections and the pricing promises from the titles and H1s — a page can decline
to state a price, but it cannot advertise transparency and then decline, and
"Transparent Pricing No Hidden Fees" above no prices is the heading that would
be quoted back first; (3) verify the "no hidden costs", "no fine print", "no
extra charges", "pause anytime", "no long term contracts", "all gear provided"
and every discount claim against the actual membership agreement.

### 49. A map embed that overflows on a phone — CONTENT, ACCESSIBILITY — Low

All seven "near me" pages — `/jiu-jitsu-near-me/`, `/martial-arts-near-me/`,
`/fight-training-near-me/`, `/bjj-classes-near-me/`,
`/martial-arts-gyms-near-me/`, `/mma-gyms-near-me/` and
`/mixed-martial-arts-near-me/` — embed a Google Map of the Coppell studio, which
is exactly right for a "near me" page. The markup is not: every one of them
carries the same iframe, copied from one to the next:

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

All three faults are on all seven pages, in the same order, with the same
attributes and the same missing ones. On `/bjj-classes-near-me/` the embed sits
high in the page, inside "Local, Safe & Clean Environment", so the sideways
scroll it causes on a phone is the first thing a visitor meets. Only the embed's coordinates differ, and
on `/fight-training-near-me/` the map sits inside the "Location Convenience"
section, which is the part of the page most likely to be read on a phone while
someone is standing outside.

**What to do:** give all seven iframes `width="100%"`, a `title`, and `loading="lazy"`,
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

### 31. Legal and injury-risk content published with no disclaimer — CONTENT — **High, liability**

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

### 30. Bad tags: zero-width spaces, keyword-tool fragments, misspellings, and five phrasings of one phrase — SEO — Medium

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

**What to do:** retype those eleven tag names, delete the duplicates left
behind, and watch for the same character when pasting keywords into titles and
headings as well. Pasting into a plain-text editor first strips it. On
`/mma-gyms-near-me/` keep "mma gyms near me" and on
`/mixed-martial-arts-near-me/` keep "mixed martial arts near me"; delete the
other nine, and check whether their archive pages are indexed and remove them if
so. Delete the two "mix martial arts" tags first — they are misspellings of the
sport's name.

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

### 7. Near-duplicate posts competing for the same searches — SEO — High

Several posts target the same keywords as each other, or as a program page.
Google then has to pick one and ranks all of them weaker.

| Topic | Competing pages |
|---|---|
| Best martial arts for self-defense | `/best-martial-arts/` · `/best-martial-arts-for-self-defense/` |
| BJJ belts and rank progression | `/brazilian-jiu-jitsu-belts/` · `/brazilian-jiu-jitsu-belt-ranks/` · `/martial-arts-belt-levels/` |
| **Kali sticks** (confirmed, fourth pair) | `/martial-arts-kali-sticks/` · `/martial-arts-kali-stick-2/` (see issue 6) |
| BJJ classes | `/brazilian-jiu-jitsu-classes/` · `/adult-bjj-classes/` (program page) · `/martial-arts-classes/` · `/martial-arts-classes-2/` (see issue 24) |
| Kickboxing / Muay Thai classes | `/kick-boxing-classes/` · `/adult-muay-thai-classes/` · `/teen-muay-thai-classes/` (program pages) |
| Martial arts for kids | `/martial-arts-for-kids/` · `/kids-bjj-classes/` (program page) |
| Martial arts for adults | `/martial-arts-for-adults/` · `/adult-bjj-classes/` · `/adult-muay-thai-classes/` (program pages) |
| Gloves (partial overlap) | `/kick-boxing-gloves/` · `/muay-thai-gloves/` |
| Boxing vs martial arts (partial overlap) | `/what-martial-art-destroys-boxers/` · `/is-boxing-a-martial-art/` |
| **Muay Thai stance** | `/muay-thai-stance/` · `/muay-thai-fighting-stance/` |
| Muay Thai compared with another striking art (partial overlap) | `/muay-thai-vs-mma/` · `/muay-thai-vs-kickboxing/` |
| **Muay Boran (five posts)** | `/muay-thai-muay-boran/` · `/are-there-multiple-styles-of-muay-boran/` · `/10-muay-boran-techniques/` · `/muay-chaiya/` · `/mae-mai-muay-thai-what-is-it/` |

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

### 15. Duplicated headings — SEO, CONTENT — Low

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

### 18. Image alt text typos and scrambled descriptions — SEO — Low

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

### 14. Content that points readers at the wrong place on the map — GEOGRAPHIC TARGETING — High

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

**What to do:** get the original files from whoever took them, not the WhatsApp
copies, and upload those under descriptive names. Re-upload the duplicated-phrase
file under a short name and fix its alt text at the same time, trim the trailing
hyphen in whatever export step is adding it, and fix "ofmartial".

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

### 50. Seven "near me" pages competing for the same local searches, four near-exact pairs — SEO — **CRITICAL**

`/martial-arts-near-me/`, `/jiu-jitsu-near-me/`, `/fight-training-near-me/`,
`/bjj-classes-near-me/`, `/martial-arts-gyms-near-me/`, `/mma-gyms-near-me/` and
`/mixed-martial-arts-near-me/` were published within four days of each other and
are built to the same plan: a local-intent H1, a programs section, a "why choose
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

| Pair | Why they are the same page |
|---|---|
| `/bjj-classes-near-me/` + `/jiu-jitsu-near-me/` | BJJ **is** jiu jitsu; the newer page says so in its first sentence |
| `/mma-gyms-near-me/` + `/mixed-martial-arts-near-me/` | MMA **is** mixed martial arts; published **three minutes apart** |
| `/martial-arts-gyms-near-me/` + `/martial-arts-near-me/` | "gyms" adds nothing to "martial arts near me" |
| `/martial-arts-gyms-near-me/` + `/mma-gyms-near-me/` | Same subject, same structure, five hours apart |

**The MMA pair is as exact as the BJJ pair, and the timestamps prove it was not
considered.** "MMA" is the abbreviation of "mixed martial arts" — the newer
page's own first section is headed "What is Mixed Martial Arts (**MMA**)?" — and
`/mma-gyms-near-me/` was published at 18:07, `/mixed-martial-arts-near-me/` at
18:10. Three minutes. Nobody writing the second page paused to ask whether the
first one already covered it, because the first one had barely finished
publishing.

This is keyword cannibalisation with a local-SEO twist. Google will pick one page
for the local pack and the other six will usually rank for nothing, but which
one it picks is not the client's choice, and the link equity and reviews are
split seven ways. "Fight training near me" and "martial arts near me" are likewise
the same intent expressed two ways; there is no searcher for whom more than one
of these pages is the right answer.

**Why this is CRITICAL.** Seven pages, containing **four** near-exact pairs and
**two** exact-synonym pairs, is not an overlap — it is a duplicate-content
problem on the site's only local-intent conversion pages. All seven carry the
pricing gap (issue 48), all seven carry unbacked program claims (issue 39), all
seven carry the same broken map (issue 49), and between them they hold **fifty
testimonials**, not one of which names a town in the gym's catchment (issues 14,
53). Roughly 20,000 words were written in four days to compete with each other.
This is the single largest self-inflicted SEO cost on the site, and the two
synonym pairs — BJJ/jiu jitsu and MMA/mixed martial arts — are the part of it
that can be fixed in an afternoon with two redirects.

**What to do: consolidate five pages into two.**

**Start with the two synonym pairs, which need no judgement at all.**
`/bjj-classes-near-me/` and `/jiu-jitsu-near-me/` are one page under two names;
so are `/mma-gyms-near-me/` and `/mixed-martial-arts-near-me/`. Pick the stronger
URL in each pair and 301 the other into it. That is two redirects and it removes
two duplicates immediately.

**Then, one general martial arts page.** Merge `/martial-arts-near-me/`,
`/martial-arts-gyms-near-me/`, `/fight-training-near-me/` and whichever MMA URL
survived into a single page covering everything the gym teaches.
`/martial-arts-near-me/` is the cleanest URL and the broadest term, so it is the
likely keeper; the others 301 into it, and their best sections and testimonials
move across. The MMA page is the one to fold in first, because MMA is the
discipline the gym has no program page for at all (issue 39), so two whole URLs
are currently ranking for a class the site cannot evidence.

**One BJJ page.** Merge `/bjj-classes-near-me/` and `/jiu-jitsu-near-me/`. These
are the same subject under two names — the BJJ page says so in its own first
sentence, "BJJ (Brazilian Jiu-Jitsu) classes near me…". "BJJ classes near me" is
the higher-volume phrasing, so `/bjj-classes-near-me/` is the likely keeper.

Check Search Console before choosing any keeper rather than guessing: keep
whichever URL already has impressions and redirect the rest into it. Both
survivors need the prices (issue 48) and LocalBusiness structured data, which
none of the seven has. Consolidating also concentrates fifty testimonials and
every internal link onto two pages instead of scattering them across seven.

This makes the fourth cannibalisation cluster on the site, after the two Kali
Sticks posts (issue 6), the three Muay Boran posts (issue 7) and the two
kick-boxing URL spellings (issue 44) — and it is larger than the other three
combined.

**In the rebuild:** all seven pages are reproduced as published; the rebuild does
not merge or redirect pages on its own. All seven do carry
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

### 52. A comparison table advertising against unnamed competitors — CONTENT (accuracy) — Medium

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

**What to do:** keep the table, but make every row a claim about Sixth Sense
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

**What to do:** on all three pages, drop the nationwide framing — "Across the
USA", "From coast to coast", "from across the U.S.", "U.S.-based" — and change
the headings to "Real Reviews from Our Students", "Hear from Our Members" and
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

### 56. A seven-page local set that is inconsistent with itself — CONTENT, SEO — Medium

The seven "near me" pages were written from one template in four days (issue 50),
which should make them the most consistent group on the site. They are not. A
visitor who reads two of them gets two different answers about what this gym is
and how it works.

| | Pricing section | Reviews | Real subheadings | Programs section |
|---|---|---|---|---|
| `/jiu-jitsu-near-me/` | 2 headings | none | 17 H3s | 6 offers |
| `/martial-arts-near-me/` | 2 headings | 7, other cities | 16 H3s | 4 programs |
| `/fight-training-near-me/` | 1 heading | 10, other cities | 16 H3s + 4 H4s | 4 disciplines |
| `/bjj-classes-near-me/` | 2 headings | 7, other cities | 18 H3s | 4 disciplines |
| `/martial-arts-gyms-near-me/` | 3 headings | 9, other cities | 26 H3s | 5 disciplines |
| `/mma-gyms-near-me/` | 3 headings | 9, no locations | 12 H3s | none |
| `/mixed-martial-arts-near-me/` | **none** | 8, other cities | **2 H3s** | none |

**The pricing column is the one that matters most.** Six pages have a pricing
section and state no price (issue 48). The seventh has no pricing section at
all — so the set manages to be both price-free *and* inconsistent about whether
pricing is even a topic. A visitor who lands on
`/mixed-martial-arts-near-me/` first has no section to scan for cost; one who
lands on `/martial-arts-gyms-near-me/` finds three headings promising
transparency and no figure. Neither learns anything, but they fail differently,
which makes the gap look accidental rather than deliberate.

**Three other columns disagree just as sharply:**

- **Reviews.** One page has none, five have seven to ten attributed to other
  cities, one has nine with no location at all. The same gym, the same week,
  four different approaches to social proof.
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

**What to do:** this resolves itself if the set is consolidated to two pages as
issue 50 recommends — two pages cannot contradict each other in seven ways. If
the client keeps them all, then at minimum: the same pricing section on every
page, the same review policy, the same programs list, and real headings
throughout.

---

## How these were checked

- **Spam, phone number, empty headings:** scanned the raw HTML of all 69 pages.
- **FAQ comparisons:** extracted every question and answer from each page and
  compared them word for word.
- **Links:** followed each one and compared its link text with its target.
- **Image sizes:** compared each file's real pixel size with the size the page
  declares.
- **Counts** (placeholders, duplicated headings, typos): taken from the live
  page source, not estimated.
