# Editorial Atlas — Option A

A pitch for **Inventist LLC** and **Whereabouts**, designed by the *Editorial Atlas* studio.

## Who we are

We're a type-led, magazine-grade design practice. Our reference shelf includes
Stripe Press, The Browser Company, Linear's marketing pages, Anthropic's
publications, Mercury, and Frank Chimero's writing on the form of the web.
We start every project with type and grid; we add color and ornament only when
the type can't carry the meaning alone. The result reads like a quarterly you'd
actually keep on the shelf — that just happens to be a website.

## The typographic premise

The display family is **Newsreader**, an opsz-aware contemporary serif with a
real italic. Body and UI sit in **Inter Tight**, used at 17px with a 1.55
leading and the `ss01`/`ss02` stylistic sets enabled. We exploit weight and
italic contrast aggressively (380 italic display next to 540 sans eyebrows)
and lean on optical-size variation so the same family feels right at 11px and
at 168px. Drop caps, pull quotes, hairlines, footnote-style asides, captioned
plates, section numerals (§ 01, i., ii.), and a printer's-mark dot are used
throughout to give every page the rhythm of a printed periodical.

## The palette

Inventist's site lives in **cream and ink** — `#FAF6EE` paper, `#F5EFE2` and
`#ECE3CC` for plates, `#1A1410` for ink — with a single restrained editorial
accent in burnt sienna `#B0431D`. The Whereabouts product page switches to the
warm dark **app palette** — `#1C1512` background, `#2A1F1A` surfaces, `#E87B3A`
accent, `#F2B84B` gold, `#F9EDD9` text — so the page itself feels like the app
it is announcing. The two palettes share the same type system, so the brand
holds across the switch.

## The layout philosophy

Asymmetric 12-column editorial grid with generous left-rail space for
section numbers and small captions, large bottom margins, and a strong
horizontal rule language. The Whereabouts hero uses a **layered editorial
spread** of three phones — one tilted left, one centered and tall, one tilted
right and dropped — to evoke a magazine center spread rather than a SaaS
hero. The pricing, modes, and pack sections all break out into bordered
plates so they read like figures with captions.

## What's in the build

- `index.html` — Inventist studio landing (Issue No. 04 framing, manifesto, catalog of apps, principles, identity plate, correspondence)
- `whereabouts/index.html` — Whereabouts product launch (warm dark, layered spread, drop-cap prose, 4 modes catalog, 4 alternating features, numbers row, themed packs gallery, leaderboard spread, privacy callout, three pricing tiers, fin)
- `privacy/index.html` — Florida-LLC privacy policy with table of contents, asides and the *Data Not Collected* headline; covers what's stored on-device (UserDefaults), StoreKit purchases, third parties (none), children, your rights, contact
- `support/index.html` — A short contact rail and ten editorial FAQ items in `<details>` accordions
- `terms/index.html` — Florida governing law, eleven sections, the same editorial typography
- `404.html` — A typographic 404 ("You're *somewhere* — just not here.")
- `assets/css/style.css` — One cohesive design system; CSS custom properties for tokens; cream and dark variants of the masthead, footer, and components live in the same file
- `assets/js/main.js` — Reveal-on-scroll, live date in the masthead, computed volume number; no framework

## Logo concepts (in `assets/img/logos/`)

We delivered **three real concepts**, each a typographic study rather than a
generic primitive. Every one uses custom type treatment.

1. **Plate I — Incipit** (`01-incipit.svg`)
   Named after the opening "Here begins…" line of a manuscript. The capital
   "I" is set heavier and slightly larger to act as a drop initial; the rest
   of the wordmark continues in italic Newsreader on the same baseline. A
   single burnt-sienna printer's-mark dot acts as the colophon. This is the
   primary wordmark and the most pure form of the studio's voice.

2. **Plate II — Colophon** (`02-colophon.svg`)
   A masthead-style stack — volume/issue metadata above, "In*vent*ist."
   wordmark in the middle (with a custom italic 'vent' run rendered in the
   accent color), studio metadata below. A small hand-drawn flourish sits
   between the lines like a printer's ornament. This is for headed
   correspondence, the about page, and any place the brand needs to feel
   like a statement of provenance.

3. **Plate III — Ligature** (`03-ligature.svg`)
   A custom-drawn slab "I" whose lower right serif flows directly into the
   diagonal of a "v" — read as one stroke, one mark. The accent dot sits in
   the angle of the v as a tittle. This is the compact, standalone studio
   mark — the thing that can shrink to favicon scale without losing its
   identity. The fragment of the I·v also lives as the masthead glyph
   (`assets/img/marks/glyph.svg`).

## Screen mockups (in `assets/img/whereabouts/`)

Five custom 270×585 SVG phone mockups, each at the correct 9:19.5 aspect
ratio, designed to capture the *feeling* of the warm dark app rather than
just the function:

- `01-globe.svg` — The daily puzzle, mid-pin. A real-feeling globe with
  warm earth-tone continents, latitude/longitude grid, atmospheric glow,
  and an orange pin dropped near Iceland with the live distance.
- `02-today.svg` — The morning briefing. *"Good morning, explorer."* in
  big italic display, a featured pack card with a sun glow, and a streak/XP/badges trio.
- `03-result.svg` — The reveal. *Reykjavík, Iceland.* in a serif headline,
  a small map vignette with a dashed arc from the guess to the answer,
  and a footnote-style "Did you know" block.
- `04-packs.svg` — The Library, four themed pack tiles (Cascade Peaks,
  Ring of Fire, World Lighthouses, Old World Capitals) with custom glyphs.
- `05-leaderboard.svg` — Weekly leaderboard with podium, ranked list, the
  user's row highlighted in accent, and a stat rail at the bottom.

These aren't generic phone frames — every screen is set in the same
typography as the marketing page, so the spread reads as a continuous
editorial system.

## Compliance

Every page footer carries: Privacy Policy URL (`/privacy/`), Support URL
(`/support/`), `hello@inventist.io`, the *Inventist LLC · Florida, USA*
mark, and the *Privacy: Data Not Collected* line. No founder names,
addresses, team pages, or social handles were invented.
