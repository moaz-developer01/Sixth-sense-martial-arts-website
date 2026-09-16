# Sixth Sense Martial Arts website

A static rebuild of [sixthsensemma.com](https://sixthsensemma.com/), the site for
Sixth Sense Martial Arts in Coppell, Texas. It's plain HTML, CSS and a little
JavaScript: no framework, no CMS, no build step for the pages themselves.

## Folder structure

```
dist/            Everything that gets deployed: HTML, CSS, JS, images
project-docs/    Notes, content planning, the blog manifest and build script
memory/          Reusable project notes (no secrets)
router.php       Optional PHP preview router
.htaccess        Server config: HTTPS redirect, security headers, compression
```

`dist/` holds deployed files only. Notes and drafts go in `project-docs/`.

## What's in dist/

| Files | What they are |
|---|---|
| `index.html` | Homepage |
| `adult-bjj-classes.html`, `adult-muay-thai-classes.html`, `kids-bjj-classes.html`, `teen-bjj-classes.html`, `teen-muay-thai-classes.html` | The five program pages, each with its own `.css` and `.js` |
| `blogs.html`, `blogs-2.html`, `blogs-3.html` | Blog listing, 9 posts per page (generated, see below) |
| 26 post pages, e.g. `muay-thai-punching-bag.html` | Blog posts, all sharing one article design |
| `blogs-template.html` | Template the listing pages are generated from |
| `blog.html`, `coach.html`, `privacy-policy.html`, `terms-of-service.html` | "Coming soon" placeholder pages |
| `styles.css`, `main.js` | Shared stylesheet and script (homepage, blog, footer) |
| `sitemap.xml` | Generated sitemap |
| `images/` | All images |

## Preview locally

Internal links use the `.html` form, so the simplest preview is to open
`dist/index.html` directly in a browser. Every page and link works from the
filesystem.

To preview over HTTP instead, serve the `dist/` folder with any static server:

```sh
npx --yes http-server dist -p 8000
# or
python -m http.server 8000 --directory dist
```

Then open <http://localhost:8000>.

(`php -S localhost:8000 router.php` also works for the homepage, but the router
serves from the repo root, not from `dist/`.)

## Adding a blog post

1. Add the post's `.html` file to `dist/`. Copy an existing post's structure so
   the header, footer and article layout stay identical.
2. Add an entry to `project-docs/posts.json`:
   ```json
   {
     "slug": "your-post-slug",
     "title": "The post's H1",
     "image": "images/your-featured-image.png",
     "date": "2025-04-14T17:34:07+00:00",
     "category": "Martial Arts"
   }
   ```
   `slug` must match the filename without `.html`. `date` sets the order: use the
   full ISO timestamp from the post's `article:published_time`.
3. Rebuild the listing and sitemap:
   ```sh
   node project-docs/build-blog.js
   ```

Never edit `blogs.html`, `blogs-2.html`, `blogs-3.html` or `sitemap.xml` by hand;
the script overwrites them. It adds more listing pages automatically as posts are
added.

## Deployment note: clean URLs

Internal links currently use the `.html` form (`adult-bjj-classes.html`,
`blogs-2.html`, …) so the site can be previewed straight from the filesystem.
The live site uses clean URLs (`/adult-bjj-classes/`, `/blogs/page/2/`, …), and
every page's canonical tag already points at the clean URL.

**At deploy time, internal links need switching to clean URLs**, with server
rewrites (or redirects) so each clean URL serves its `.html` file. The full
mapping, including the listing pages and the `terms-of-service` /
`terms-and-conditions` mismatch, is in
[`project-docs/build-notes.md`](project-docs/build-notes.md).

## Problems found on the live site

While rebuilding, a number of problems were found on the current WordPress site.
They include injected casino spam links on every page, a wrong phone number in
every tap-to-call link, broken page titles, duplicate posts and bad outbound
links. They're documented with priorities and fixes in
[`project-docs/client-site-issues.md`](project-docs/client-site-issues.md).
The rebuilt site already avoids them; the live site still needs fixing.
