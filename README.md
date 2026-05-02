# inventist.io

Marketing site for **Inventist LLC**, the Florida holding company for our iOS apps. Whereabouts is our first one — more to come.

## Stack

Plain HTML, one CSS file, one SVG favicon. No framework, no build step, no JavaScript. The FAQ uses the native `<details>` element. All animation is CSS.

## File map

```
.
├── index.html              ← single-page studio site (Hero · Marquee · Whereabouts · Studio · Contact)
├── 404.html
├── privacy/index.html      ← App-Store-compliant privacy policy ("Data Not Collected")
├── support/index.html      ← Email + 12-question FAQ (App Store Support URL)
├── terms/index.html        ← Florida governing law
├── assets/
│   ├── css/style.css       ← full design system (one file)
│   └── img/favicon.svg
├── options/                ← archived earlier design explorations (not used by the live site)
└── README.md
```

## Design system

- **Type:** DM Sans (display + UI, weights 400/500/700/900) + Recoleta italic (accent), loaded via Google Fonts.
- **Palette:** warm cream `#faf6f0` paper, ink `#1a1530`, grape `#6c4dff`, berry `#ff3d8a`, tang `#ff7a3d`, lime `#b9f266`, sky `#6dd6ff`, bubble `#ffd1ed`, cream `#fff3d6`.
- **Look:** neo-brutalist "toybox" — 3 px ink borders, hard `8px 8px 0 var(--ink)` drop shadows, generous radii, rotated chunky elements, subtle floating decorations, a scrolling marquee, soft radial-gradient background.
- **Tokens:** all colors and shadows are CSS custom properties on `:root` in [assets/css/style.css](assets/css/style.css).

## Apple App Store compliance

Every footer carries the four URLs an iOS developer needs:

| Requirement | URL |
|---|---|
| Marketing URL | `/` (single-page, anchors at `#whereabouts`, `#about`, `#contact`) |
| Privacy Policy URL | `/privacy/` |
| Support URL | `/support/` |
| Terms of Use | `/terms/` |

Identifying info exposed: **Inventist LLC · Apopka, Florida, USA** · `hello@inventist.io` · `support@inventist.io` · `privacy@inventist.io`. No founder names, no phone, no street address.

The privacy nutrition label declares **None** across every category, matching the App Store Connect declaration.

## Run locally

The site uses **fully relative paths**, so the simplest way to view it is to just **double-click `index.html`** — it opens in your default browser via `file://` and everything (CSS, favicon, sub-pages) loads correctly.

If you'd rather run a local server (closer to a production environment, and the only way to test redirects):

```sh
# from this directory
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Drop the entire directory on any static host (Netlify, Cloudflare Pages, Vercel, S3 + CloudFront, GitHub Pages). No build step. Set the 404 file to `/404.html`.

## Browser support

Anything modern. Uses `backdrop-filter`, CSS custom properties, `clamp()`, and CSS `background-clip: text`. Honors `prefers-reduced-motion`.
