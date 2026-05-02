# inventist.io

Marketing site for **Inventist LLC** (Florida), publisher of native iOS apps. First app: **Whereabouts**.

Static HTML / CSS / vanilla JS — no build step, no dependencies, no trackers.

---

## What's here

```
.
├── index.html              Studio landing + logo picker
├── 404.html                "You're off the map" page
├── whereabouts/
│   └── index.html          Whereabouts product page (dark theme)
├── privacy/
│   └── index.html          Privacy policy (Apple App Store required)
├── support/
│   └── index.html          Support page + FAQ (Apple App Store required)
├── terms/
│   └── index.html          Terms of service
└── assets/
    ├── css/style.css       Single stylesheet, two themes
    ├── js/main.js          Footer year + logo picker (localStorage)
    └── img/
        ├── logos/          5 SVG logo concepts (currentColor)
        ├── whereabouts/    4 SVG screen mockups
        └── og/             (drop social share images here when you have them)
```

## Apple App Store requirements — coverage

| Requirement | Where it lives |
|---|---|
| **Privacy Policy URL** (required for every app) | `https://inventist.io/privacy/` |
| **Support URL** (required for every app) | `https://inventist.io/support/` |
| **Marketing URL** (optional, recommended) | `https://inventist.io/whereabouts/` |
| **Publisher contact** | `hello@inventist.io` (footer of every page) |
| **Privacy contact** | `privacy@inventist.io` (privacy page) |
| **Company / jurisdiction** | "Inventist LLC · Florida, USA" (footer) |

The privacy policy mirrors the App Store Connect privacy nutrition label from `ios-setup.md` — *Data Not Collected* across every category.

## Identifiable info — minimized

By design, the site reveals only:
- Company name (legally required: **Inventist LLC**)
- State of incorporation (Florida — required for an LLC; no street address)
- Two contact emails (`hello@`, `privacy@`)

No founder name, no street address, no phone number, no team page.

## Logo concepts

Five marks live in `assets/img/logos/`. The picker on the landing page swaps the header mark and saves your choice to `localStorage`. Once you settle on one:

1. Pick the favorite from the landing page.
2. Set its filename as the default in `assets/js/main.js` (`DEFAULT_LOGO`).
3. Replace the inline `<svg>` fallback in each header (`data-brand-mark` block).
4. Update `<link rel="icon">` and `apple-touch-icon` in every `<head>`.
5. Delete the picker section from `index.html` and the unused logo files.

Concepts:
| Slug | Direction | Reads as |
|---|---|---|
| `01-compass-star` | Discovery / wayfinding | Confident, geographic, premium |
| `02-spark` | Invention / idea | Energetic, nerdy, friendly |
| `03-stack` | Studio / many apps | Architectural, app-store-native |
| `04-monogram` | Identity / type-led | Owned letterform, distinctive |
| `05-aperture` | Focus / observation | Optical, scientific, calm |

All marks use `currentColor`, so they retint with the surrounding text colour automatically.

## Whereabouts screenshots

The `assets/img/whereabouts/screen-*.svg` files are stylised mockups — they read like the real app but are not export PNGs. Replace them with real App Store screenshots when ready (just keep the filenames).

## Local preview

No build step. Any static server works:

```sh
# Python (built-in)
python3 -m http.server 4000

# Node (one-liner)
npx serve .

# Bun (one-liner)
bunx serve .
```

Then open <http://localhost:4000>.

## Deployment options (pick one)

All three are free for a project this size, support `inventist.io` custom domain, and serve the `404.html` automatically.

### Cloudflare Pages (recommended — fastest CDN, generous free tier)
```sh
# Install the wrangler CLI once
npm install -g wrangler
wrangler pages deploy . --project-name=inventist-io
```
Then add the custom domain in the Cloudflare dashboard.

### Netlify
```sh
npm install -g netlify-cli
netlify deploy --prod --dir=.
```
Or drag-drop the folder onto <https://app.netlify.com/drop>.

### GitHub Pages
1. Push this folder to a repo named `inventist.github.io` (or any repo with Pages enabled).
2. Settings → Pages → Source: `main` branch, `/` (root).
3. Add a `CNAME` file with `inventist.io` and configure DNS at the registrar.

## DNS (any host)

At your registrar (where you bought `inventist.io`):
- `A` record → host's apex IPs (each provider lists these)
- `CNAME` record → `www` → `<your-host>.pages.dev` (or equivalent)

## Things to do before App Store submission

- [ ] Pick a logo and lock it in (see "Logo concepts" above)
- [ ] Replace SVG screen mockups with real App Store screenshots
- [ ] Verify the Whereabouts in-app purchase prices match `Whereabouts.storekit`
- [ ] Test all the email links open the user's mail client
- [ ] Confirm `https://inventist.io/privacy/` and `/support/` resolve (Apple validates these URLs)
- [ ] Drop a real social share image into `assets/img/og/` and add `og:image` meta to each page
- [ ] Add `robots.txt` and `sitemap.xml` if you want search indexing

## Ownership

© Inventist LLC. All rights reserved.
