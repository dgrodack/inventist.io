# Option C — Quiet Studio

A minimal, type-led, monochrome marketing site for **Inventist LLC** and its flagship app **Whereabouts**. Designed to read like a piece of printed matter that happens to live on the web — closer to a small Pentagram poster, a Studio Mast identity manual, or a Vercel docs page than to a SaaS template.

## The team

We are Quiet Studio. Our reference shelf includes Vercel, Linear's app UI, Stripe's pricing pages, Apple's product pages, Frank Chimero, Studio Mast, and Pentagram's small-format work. We make sites that look better the longer you stare at them, never the other way around. Our rule: every element earns its place — no decoration that isn't load-bearing.

## What makes this option feel like *us*

- **Type-led, top to bottom.** Inter Tight at display sizes (clamped, tight letter-spacing, italic-as-accent) does almost all of the heavy lifting. JetBrains Mono is the captioning voice — eyebrows, indices, technical asides. There are no decorative serifs and no script flourishes. The hierarchy is strict and short: display, lede, body, mono caption.
- **Monochrome with one signal.** Inventist claims an almost-black `#0B0B0C` on a warm paper `#F6F4EE`, with a single ultramarine accent `#1840FF` — used as the period in the wordmark, the dot in the eyebrow, the italicised emphasis in the display heads, and never as decoration. The Whereabouts product page swaps to the warm dark app palette (`#1C1512` / `#E87B3A` / `#F2B84B` / `#F9EDD9`) so it feels like the app itself.
- **A 12-column grid with rules instead of cards.** Almost no shadows, almost no rounded corners (`4px` max), no gradients used decoratively. We use horizontal rules, mono row indices and column dividers to organise the page — the way a book or a price list would.
- **Numbers, indices, ledgers.** Sections are numbered. App modes are a ledger. The privacy nutrition label is a literal ledger. The studio's apps are a manifest, not a card grid. The site reads as a small archive — confident, calm, dense where it counts.

## The Whereabouts page

Treated as a flagship product page, not a marketing landing. Apple-tier minimalism: a giant `A real globe. Five pins a day.` headline anchors the page; below it sits a single hero phone with a surgical caption row; then big numbers, a four-step ritual gallery, the four-mode ledger, themed packs, the privacy callout, three pricing plans (with the annual marked *Best value*), and a specifications ledger. The warm dark palette ties the page to the app's visual world, but the typography and grid stay strictly Quiet Studio.

## Logo concepts (with real typographic premises)

All four marks are wordmarks set in Inter Tight, each carrying one — and only one — typographic move. They live in `assets/img/logos/`.

1. **`01-cut-i.svg` — "Cut-I."** The leading `i` of *inventist* is split with a horizontal incision, the gap signed in ultramarine. To invent is to cut and rearrange. The first letter does the work the rest of the wordmark only describes.
2. **`02-period-dot.svg` — "Period · Pin."** The final period of the wordmark is enlarged into a square ultramarine pin. It reads simultaneously as the full stop of a sentence ("inventist.") and as a map pin — our subject matter, signed at the end of our name. Quietly perfect for a studio that publishes Whereabouts.
3. **`03-vt-ligature.svg` — "VT Ligature."** The right diagonal of the V continues uninterrupted into the stem of the T, fusing two letters into a single shared stroke. Two letters, one move — the studio's economy in a single glyph. Custom-drawn as paths so it reads as a true ligature, not as adjacent letters.
4. **`04-mono-stack.svg` — "Mono Stack" (compact lockup).** A two-line monospace lockup — `INVENT / IST.` — with the period-as-pin reused as the signature dot. Built for tight contexts: favicons, app-icon studies, footer marks. A natural sibling to logo 02.

## Phone screen mockups

Five screens in `assets/img/whereabouts/`, every one composed at the real device aspect (270×585 viewBox, 9:19.5). They sell the *feeling* of the app — warm sphere on warm paper, mono captions, no chrome wasted:

- **`01-globe.svg`** — Round 3 of 5. The 3D globe rendered with meridians, parallels and warm-ochre continents; a guess pin already dropped near Iceland; live coords readout in mono; the streak chip and round-pip row sitting calmly above. The hero shot.
- **`02-result.svg`** — The reveal. A surgical mini-map with two pins and a dashed arc between them; the distance set in 46px display type; a points pill in gold; speed, bonus and distance broken out as a small ledger.
- **`03-streak.svg`** — A 5×7 calendar grid that warms from `#2A1F1A` to `#E87B3A` to gold for the active day — the streak as data visualisation. Below it: four badge tiles and the level/XP bar.
- **`04-packs.svg`** — The themed map packs library. A featured Cascade Peaks card with stylized mountain silhouettes, then a numbered ledger of the rest, with PRO badges set as small mono outlines.
- **`05-summary.svg`** — End-of-day summary. A 96px points readout, the five rounds tallied as a single ledger, the streak day and XP earned set side-by-side at display size. Designed to look like a Polaroid worth screenshotting.

## File map

```
options/c-quiet/
├── index.html              Inventist studio landing
├── whereabouts/index.html  Whereabouts product page (warm dark theme)
├── privacy/index.html      Privacy policy — Data Not Collected, Apple-compliant
├── support/index.html      Support + 12-entry FAQ
├── terms/index.html        Terms of service — FL governing law
├── 404.html                "A pin in the wrong ocean."
├── README.md               this file
└── assets/
    ├── css/style.css       single stylesheet, full design system
    ├── js/main.js          ~12 lines: one-open-at-a-time FAQ accordion
    └── img/
        ├── logos/          01-cut-i · 02-period-dot · 03-vt-ligature · 04-mono-stack
        └── whereabouts/    01-globe · 02-result · 03-streak · 04-packs · 05-summary
```

## Compliance

Every page footer carries the Inventist LLC + Florida mention, links to `/privacy/`, `/support/` and `/terms/`, and exposes both `hello@inventist.io` and `privacy@inventist.io`. The privacy page presents the App Store nutrition label as a ledger — Data Used to Track You, Data Linked to You, Data Not Linked to You, Third-party SDKs — all reading **None**. Terms specify Florida governing law and exclusive Florida venue.

## Build notes

No build step. Pure HTML + one CSS file + ~12 lines of JS. Google Fonts loaded via `<link>`. All asset paths relative to `options/c-quiet/`. Viewable standalone (open `index.html` directly) or served from any static host.
