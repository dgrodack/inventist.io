# Option B — Tactile Workshop

A warm, characterful indie-studio direction for Inventist. The site should feel like walking into an actual workshop: cream paper underfoot, soft amber lighting, three different logo sketches still pinned to the wall, the smell of pencil shavings. Craft over churn.

## Personality

The Tactile Workshop team is the studio that takes Mailchimp's friendliness, Mercury's confident type, Cron's relaxed scale, and Pretzel Labs' colour playfulness, and arranges them in a quieter Florida-indie register. We're not a SaaS. We're a maker. The site should announce that within two seconds: warm cream background, hand-drawn underline accents, a real friendly mark in the nav, generous rounded radii, oversized soft shadows that look more like furniture than UI.

## Palette

Inventist's palette is intentionally **multi-color** — a workshop should have range.

- **Warm cream** `#FBF4E6` (background) with paper `#FFFBF1` for cards
- **Tangerine** `#E87B3A` (primary, the warm hand) → deep `#C85B1F`
- **Sun gold** `#F2B84B` (accent for highlights and gradients)
- **Sage** `#6E9B7B` (the "trust / privacy" complement)
- **Lavender** `#9B8AC9` and **teal** `#2F7B82` (secondary accents that prevent monotony)
- **Tomato** `#D9482E` and **rose** `#E8AFA6` (used sparingly for decoration)
- **Ink** `#1F1A14` (warm near-black, never pure black)

The Whereabouts product page swaps to the **dark warm app palette** — bg `#1C1512`, surf `#2A1F1A`, accent `#E87B3A`, gold `#F2B84B`, text `#F9EDD9` — so the page feels like an extension of the app itself.

A subtle SVG grain overlay sits on top of the entire site at low opacity (multiply blend on light pages, screen blend on dark). It's the difference between a digital mock and something printed and held.

## Typography

- **Bricolage Grotesque** for display — a contemporary geometric sans with a tiny bit of personality in the curves; mixes weight 700 for the big headlines and is paired with…
- **Instrument Serif (italic)** as a swash accent — used for the "feel like play," "in three minutes," and "don't bully you" moments. It plays the role of a handwritten margin note.
- **Geist** for body text — clean, technical, and quiet so the display can sing.
- **JetBrains Mono** only for code-like tokens (`UserDefaults`, domain names).

The hierarchy mixes weights and styles aggressively rather than relying on size alone. Headlines almost always have one swash word.

## Logos — three concepts, three stories

All three are in `assets/img/logos/`. Each has a **real concept** rather than a geometric primitive.

1. **The Dropped Pin** (`wordmark-pin.svg`) — A custom Bricolage wordmark whose dot of the "i" is replaced by a real teardrop map pin in tangerine→gold gradient. The "e" has a tiny mountain trail tucked inside it. The act of guessing — drop a pin in the right place — *becomes* the letterform. Most direct connection to Whereabouts.

2. **Finch the Courier** (`finch.svg`) — A friendly mascot mark: a small orange-and-gold finch perched on a twig, carrying a sealed letter under its wing and a tiny gold pin in its beak. The studio as a small messenger that delivers curious things to your home screen. Tagline beneath: *"small studio · big curiosity."* This is the most personable, most Pretzel-Labs-leaning concept.

3. **The Workbench** (`workbench.svg`) — A circular badge mark depicting a top-down view of an inventor's workbench: half a globe sitting on a sage-green table, a pencil resting across the top, a magnifying glass, a small twinkle. Reads at small sizes as "studio = workshop." Tagline beneath: *"a workshop for curious apps."* The most editorial, badge-like option.

Plus `mark-nav.svg` (the simplified pin-on-horizon used in the nav and as favicon) and `whereabouts-icon.svg` (the app icon with the dark warm palette).

## Whereabouts screen mockups

Four scene-driven phone screens in `assets/img/whereabouts/` (270×585 viewBox, faithful 9:19.5):

- `screen-globe.svg` — a round in progress: prompt card, streak chip, the real 3D globe with subtle continents, a guess pin and a target hint, and the "Drop pin" CTA.
- `screen-result.svg` — the celebration moment: confetti, "Very close!", +862 XP, and a mini globe showing the great-circle line between guess and target.
- `screen-streak.svg` — the daily ritual: a hand-drawn flame card, week grid with completed/today/locked states, badge collection.
- `screen-packs.svg` — themed map packs gallery with Cascade Peaks (free), Ring of Fire (Pro), World Lighthouses (Pro), tab bar at the bottom.
- `screen-summary.svg` — the shareable daily card with all five rounds scored.

Phones are tilted slightly in the hero and arranged in scenes with floating chips, soft glow halos, and gentle bobbing animations to suggest motion without being noisy.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Inventist studio landing — hero, workshop shelf (Whereabouts featured + 2 coming-soon cards), three values, the three-logo gallery, "small studio big detail" stats band, contact card, footer |
| `whereabouts/index.html` | Whereabouts product page in the dark warm app palette — hero with three-phone scene, daily ritual band, three feature blocks, four modes, three map packs, privacy strip, three-tier pricing, download CTA |
| `privacy/index.html` | Privacy policy with prominent "Data Not Collected" nutrition label |
| `support/index.html` | Three contact cards + 12-question FAQ (smooth-close one-at-a-time) |
| `terms/index.html` | Terms of service, Florida governing law |
| `404.html` | Lost page with rotating dashed circle inside the giant zero |

## App Store / compliance

- Privacy policy linked from every footer (`/privacy/`)
- Support linked from every footer (`/support/`)
- `hello@inventist.io` and `privacy@inventist.io` on every page
- Footer badge "Privacy: Data Not Collected" on every page
- Florida LLC mention on every page (no street address)

## Files

```
options/b-tactile/
├── index.html
├── 404.html
├── README.md
├── whereabouts/index.html
├── privacy/index.html
├── support/index.html
├── terms/index.html
└── assets/
    ├── css/style.css                     ← single design-system stylesheet
    ├── js/main.js                        ← ~20 lines, FAQ accordion only
    └── img/
        ├── logos/
        │   ├── wordmark-pin.svg          ← Concept 1: The Dropped Pin
        │   ├── finch.svg                 ← Concept 2: Finch the Courier
        │   ├── workbench.svg             ← Concept 3: The Workbench
        │   ├── mark-nav.svg              ← simplified nav/favicon
        │   └── whereabouts-icon.svg      ← app icon
        ├── whereabouts/
        │   ├── screen-globe.svg
        │   ├── screen-result.svg
        │   ├── screen-streak.svg
        │   ├── screen-packs.svg
        │   └── screen-summary.svg
        └── decor/
            ├── appstore.svg
            ├── squiggle.svg
            └── arrow-hand.svg
```

No build step. No frameworks. Open `index.html` in a browser. Works opened standalone (relative paths) and links cleanly back to a parent site.
