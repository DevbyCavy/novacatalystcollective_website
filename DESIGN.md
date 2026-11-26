---
name: Nova Catalyst Collective
description: Strategic growth and corporate advisory — clarity, credibility, impact.
colors:
  catalyst-plum: "#441e6b"
  catalyst-plum-soft: "#5a2c8a"
  blueprint-violet: "#5f3393"
  lilac-haze: "#cdbdf0"
  boardroom-ink: "#1d1428"
  slate-haze: "#5c5668"
  logo-grey: "#646369"
  lilac-paper: "#f7f5fa"
  card-white: "#ffffff"
  sunken-lilac: "#efeaf5"
  signal-red: "#b42323"
typography:
  display:
    fontFamily: "Outfit, Manrope, system-ui, sans-serif"
    fontSize: "6.2rem"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Outfit, Manrope, system-ui, sans-serif"
    fontSize: "3.4rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Outfit, Manrope, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-lead:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Outfit, Manrope, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
  eyebrow:
    fontFamily: "Outfit, Manrope, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  wordmark:
    fontFamily: "Montserrat, Manrope, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 800
    lineHeight: 1
rounded:
  hairline: "2px"
  sm: "4px"
  md: "6px"
  lg: "12px"
  xl: "16px"
  card: "24px"
  panel: "28px"
  band: "32px"
spacing:
  gutter-mobile: "20px"
  gutter-desktop: "32px"
  container: "76rem"
  section: "96px"
  section-lg: "128px"
  card-pad: "32px"
components:
  button-primary:
    backgroundColor: "{colors.boardroom-ink}"
    textColor: "{colors.lilac-paper}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.md}"
    padding: "14px 20px"
  button-primary-hover:
    backgroundColor: "{colors.catalyst-plum}"
    textColor: "{colors.card-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.boardroom-ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.md}"
    padding: "14px 20px"
  button-brand:
    backgroundColor: "{colors.catalyst-plum}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.md}"
    padding: "14px 20px"
  card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.boardroom-ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  panel-plum:
    backgroundColor: "{colors.catalyst-plum}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.panel}"
    padding: "48px"
  input:
    backgroundColor: "{colors.sunken-lilac}"
    textColor: "{colors.boardroom-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "14px 16px"
  nav-link:
    textColor: "{colors.slate-haze}"
    typography: "{typography.eyebrow}"
    padding: "8px 14px"
  nav-link-active:
    textColor: "{colors.boardroom-ink}"
---

# Design System: Nova Catalyst Collective

## Overview

**Creative North Star: "The Strategy Blueprint"**

Drafting-table precision: grids, hairlines and measured purple ink. The site should feel like strategy you can see the structure of. A faint 88px architectural grid sits behind heroes and dark-tone bands; headlines are set in a tight geometric sans; colour is spent sparingly, so that Catalyst Plum and Blueprint Violet read as decisions, not decoration. Surfaces are light, calm and lilac-tinted, with depth expressed through soft, plum-tinted shadows and a cursor-following glow on cards rather than heavy fills.

Density is spacious and editorial: large type, generous section rhythm (96–128px), and short, confident copy. Motion is quiet and purposeful: content rises 10–14px into place with a strong ease-out, headlines come into focus from a light blur, and interactive feedback is immediate (press scale 0.97). Nothing bounces, nothing loops for attention except the very slow logo ring in the hero, which is the homepage's one signature effect.

Confirmed rejections: the firm must never look like a social media agency (founder's direction). Gradient text is not used (removed on the Impeccable detector finding). Pill-shaped buttons, boxed labels and chip backgrounds were explicitly removed by the user.

**Key Characteristics:**
- Light lilac-paper canvas with white cards and a faint plum blueprint grid.
- Outfit geometric headlines (600, tight negative tracking) over Manrope body text.
- One accent family: Catalyst Plum for fills and panels, Blueprint Violet for emphasis text, links, underlines and focus.
- Squared controls (6px), soft card radii (24–32px), no pills.
- Labels stand out through type alone: colour, weight, uppercase tracking, slashes and hairlines.
- Subtle, interruptible motion with a strong ease-out and full reduced-motion support.

## Colors

A restrained plum-and-ink palette on a lilac-tinted paper, where colour is a signal of emphasis.

### Primary
- **Catalyst Plum** (catalyst-plum): the logo purple. Solid panels that carry white text (the vision card, the contact-details card), brand buttons, primary-button hover fill, the logo mark and watermarks. Use it as a surface, not as small text on light backgrounds.
- **Catalyst Plum Soft** (catalyst-plum-soft): hover state for plum fills only.

### Secondary
- **Blueprint Violet** (blueprint-violet): the working accent. Emphasis words inside headlines ("commercial impact."), eyebrows, uppercase labels, link text, the navbar underline, the action-bar progress line, tag-list slashes, result figures and focus rings. AA on lilac-paper.
- **Lilac Haze** (lilac-haze): decorative only. Background glows (blurred 110–160px), and accents inside plum panels. Never body text on light surfaces.

### Neutral
- **Boardroom Ink** (boardroom-ink): all primary text and headings, the solid primary button, hairlines and tints at low alpha.
- **Slate Haze** (slate-haze): secondary text, intros, inactive nav links, form helper text (AA on lilac-paper).
- **Logo Grey** (logo-grey): the "CATALYST" word in the logo lockup only.
- **Lilac Paper** (lilac-paper): the page background.
- **Card White** (card-white): raised surfaces: cards, the scrolled navbar, the action bar, the footer.
- **Sunken Lilac** (sunken-lilac): inputs and image placeholders.
- **Signal Red** (signal-red): form errors only.

### Named Rules
**The Inverted Name Rule.** The codebase was built dark and re-themed by remapping tokens, so the Tailwind names are semantic, not literal: `white` is Boardroom Ink (foreground), `night` / `night-2` / `night-3` are Lilac Paper / Card White / Sunken Lilac, `glow` is Blueprint Violet, and `snow` is true white. `text-white` means ink; `border-white/10` is an ink hairline. Inside a Catalyst Plum panel, re-scope `--color-white: #ffffff` (and lighten `--color-haze` and `--color-glow`) on the panel so the same classes render white.

**The Spent Accent Rule.** Blueprint Violet marks one idea per block: the emphasised phrase, the active state, the next step. If more than about a tenth of a viewport is violet, it has stopped meaning anything.

## Typography

**Display Font:** Outfit (with Manrope, system-ui)
**Body Font:** Manrope (with system-ui, Segoe UI)
**Wordmark Font:** Montserrat (logo lockup and the DIGITAL BAE sub-brand only)

**Character:** A geometric, tightly tracked display sans gives headlines an engineered, architectural confidence; Manrope keeps long-form copy open and readable. Montserrat's black weight is reserved for the Digital Bae sub-brand so it stays bolder than the firm.

### Hierarchy
- **Display** (600, 2.75rem → 6rem, line-height 1.02, tracking -0.04em): the homepage hero headline only.
- **Headline** (600, 2.25rem → 3.4rem, 1.05, -0.03em): section titles. Inner-page heroes 2.7rem → 4.6rem; closing call to action 2.5rem → 4.5rem; founder heading uses the headline token; the introduction's scroll-lit statement is the section heading at 2rem → 2.9rem.
- **Title** (600, 1.4rem → 2.1rem, 1.2, -0.02em): card and service titles, client names; mobile menu links 1.9rem.
- **Body** (400, 1rem → 1.125rem, line-height 1.625): paragraphs in Slate Haze; lead paragraphs at 1.125rem in ink at 80%. Keep measure around 65–75ch (max-w-xl to max-w-2xl).
- **Eyebrow** (500, 0.875rem): retired as a kicker above headings. `SectionHeading` ignores its `eyebrow` prop; headings stand alone. Small uppercase labels survive only as field or card labels (e.g. "Selected clients", a sector name), never directly above a heading.
- **Label** (600, 0.72rem, tracking 0.18em, uppercase): short standalone labels such as "NOVA CATALYST COLLECTIVE", "COMING SOON", sector names; Blueprint Violet.

### Named Rules
**The Type-Not-Boxes Rule.** Labels, tags and badges stand out through type alone: Blueprint Violet, weight, uppercase tracking, a leading hairline, or purple slash separators between items (`Strategic growth planning / Business development`). Never wrap them in chips, pills or tinted boxes.

**The One Display Rule.** Display size appears once per site, in the homepage hero. Everything else steps down to Headline.

## Layout

A centred container of 76rem max with 20px gutters on mobile and 32px from tablet up. Sections breathe on a 96px / 128px vertical rhythm (py-24 / py-32), with inner content on a 12-column grid that is used asymmetrically (5 + 7, or 6 + 5 offset) rather than in even halves.

Signature structures:
- **Hero:** centred composition (88svh) over the faint blueprint grid with one signature effect, the very slowly rotating logo ring. No kicker above the headline, no cursor spotlight, no rotating words.
- **Proof strip:** directly under the hero, a text-only band on Card White between hairlines: selected client names joined by violet slashes, and the one substantiated result (1.3M reported impressions, always static text, never a count-up). The base (Zimbabwe; Africa & international) lives in the hero subline.
- **Founder block:** "Led by Taffy L. Gotora" in display type with a violet name, role line, a short biography beside a hairline, and two text links (About the firm, Digital Bae). Heading on the headline token (never larger). Typographic until a licensed portrait exists.
- **Audience routes:** three hairline-divided columns (organisation, partner/investor, event organiser), each with one violet text link to its action. Never more than three.
- **Introduction:** the single positioning statement, lit word by word as it scrolls (0.5 → 1 opacity), is the section heading, with one supporting paragraph. Beside it a 4:5 photograph carries the plum frosted philosophy card.
- **Industries index:** two-column hairline rows, sector name in title type, focus areas joined by violet slashes, a corner arrow. No icons, no cards.
- **Work ledger:** one engagement per hairline row: client (title type) with project and sector, scope joined by violet slashes, arrow to its entry on Our Work. The result figure appears only in the proof strip.
- **Text links:** one style everywhere: violet Outfit 500 at 0.875rem with a 40% violet underline that strengthens on hover, plus the corner arrow.
- **One ending:** the CTA band ends the page; the footer opens with the strapline at body-display size, not a second display statement. Insights stays off the homepage and out of the main nav until an article is published.
- **Pinned services:** on desktop the services section is pinned for 2.5 screen-heights (50vh per service). The left index is a list of buttons that jump to each step, with a progress line and an `01 / 05` counter; a visually hidden list keeps all five services available to assistive technology. On mobile it becomes a stacked list of cards.
- **Inner-page hero:** left-aligned, breadcrumb then headline then intro, over the same grid with a soft cursor spotlight (`rgba(185,156,240,0.14)`, 480px radial).

Breakpoints follow Tailwind defaults (640 / 768 / 1024 / 1280px). Below 1280px the navbar collapses to a menu button and full-screen menu. Nothing scrolls sideways at 375px.

## Elevation & Depth

Depth is soft and plum-tinted: surfaces are flat at rest on the paper, and lift comes from long, low-opacity shadows tinted with ink or plum rather than neutral black. Cards add a second cue: a 1px border that glows Lilac where the cursor is (pointer devices only). Blur is used for glass: the scrolled navbar and action bar (backdrop blur over 85–90% white) and the plum frosted "Our philosophy" card over its photo.

### Shadow Vocabulary
- **Raised card** (`0 1px 2px rgb(29 20 40 / .04), 0 12px 32px -16px rgb(68 30 107 / .18)`): the `glass` surface: service card, philosophy tiles, form panels.
- **Floating bar** (`0 16px 40px -16px rgba(29,20,40,.28)`): the bottom action bar.
- **Plum glass** (`0 16px 40px -16px rgba(68,30,107,.6)`): purple frosted overlays on imagery.
- **Preview window** (`0 30px 60px -24px rgba(29,20,40,.45)`): the digitalbae.online browser-frame preview.

### Named Rules
**The Tinted Shadow Rule.** Shadows are tinted with ink or plum, never pure black, and always long and soft (negative spread). A hard, short shadow breaks the blueprint calm.

## Shapes

Two shape families with a clear split. **Controls are squared:** buttons, the navbar call to action, menu toggles and action-bar items use 6px corners, and the newsletter submit uses 4px. **Containers are soft:** inputs 12px, icon tiles 16px, cards 24px, feature panels 28px, banded sections 32px. The only true circles are dots, timeline nodes, decorative glows and the logo ring. Borders are 1px hairlines at 8–20% ink.

**The No-Pill Rule.** Nothing interactive is fully rounded. Pill buttons, pill tabs and pill chips were removed at the user's request and must not return.

## Components

### Buttons
Precise and composed.
- **Shape:** squared (6px).
- **Primary:** Boardroom Ink fill, Lilac Paper text, Outfit 500 at 0.95rem, 14px × 20px. Turns Catalyst Plum on hover (200ms colour transition).
- **Ghost:** transparent with a 1px ink border at 20%, ink text; border strengthens to 50% with a faint tint on hover.
- **Brand:** Catalyst Plum fill with white text; Catalyst Plum Soft on hover.
- **Button groups:** buttons that sit together are always equal width: sized to the widest label (no wider), stacked on phones and equal columns side by side from 640px.
- **One primary label:** the consultation action is always "Book a consultation" and always links to `/contact?type=consultation` (hero, navbar, mobile menu, action bar, closing band). The speaking action is always "Invite to speak".
- **Arrow cell:** only the hero's primary call to action ("Book a consultation") carries an arrow, set in its own cell behind a hairline divider (`[ Label │ → ]`); the arrow nudges 2px on hover. All other buttons are text only.
- **Press:** every pressable scales to 0.97 on `:active` (160ms ease-out).

### Labels and Tag Lists
- **Tag lists** (offerings, sector focus, work scope): inline Outfit 500 ink text separated by Blueprint Violet slashes; no background, border or radius.
- **Labels:** uppercase Outfit 600 at 0.72rem, tracking 0.18em, Blueprint Violet, optionally led by a 24px violet hairline or an icon.

### Cards / Containers
- **Corner Style:** 24px (cards), 28px (feature panels), 32px (bands).
- **Background:** Card White on Lilac Paper; Catalyst Plum for statement panels (with the Inverted Name Rule re-scope).
- **Shadow Strategy:** Raised card shadow, or the glow-border treatment.
- **Glow-border card:** a 1px gradient border that follows the cursor with a Lilac Haze radial (360px), set via CSS variables on the card itself; static on touch.
- **Internal Padding:** 28–40px.

### Inputs / Fields
- **Style:** Sunken Lilac fill, 1px ink border at 10%, 12px corners, 14px × 16px padding, 16px text on touch devices.
- **Focus:** border turns Blueprint Violet with a 4px violet ring at 15%.
- **Error:** Signal Red border and message directly below the field; the first invalid field receives focus on submit.
- **Choice chips (enquiry type):** squared 6px radio labels; selected state is solid ink with paper text.

### Navigation
- **Bar:** full width; transparent over the hero, then Card White at 85% with backdrop blur and a hairline once scrolled. Hides while scrolling down past 400px and returns on any upward scroll (drawer curve, 300ms); always returns on keyboard focus.
- **Links:** Outfit 0.9rem in Slate Haze, ink on hover and when active. A single 2px Blueprint Violet underline rests under the active page and glides (spring) to whichever link is hovered. No background shapes behind links.
- **Call to action:** squared ink "Book a consultation" button.
- **Mobile:** menu button opens a full-screen paper menu with large Outfit links, numbered, staggering in with a soft blur.

### Floating Action Bar (signature)
Bottom-centre glass bar (Card White 90%, 12px corners, backdrop blur) that appears after half a screen of scrolling (a fifth of a screen on phones, where the header has no room for the consultation button). Holds "Book a consultation" (solid ink) and icon buttons for speaking, WhatsApp, email and back-to-top (6px). Controls are 40px; icons carry aria-labels, with 150ms tooltips on pointer devices. No text labels beside icons, so the island stays compact on phones. It also has a 2px Blueprint Violet line along its base that tracks reading progress.

### Pinned Services Story (signature)
A five-step scroll story: left column lists services with a hairline that extends from 16px to 40px for the active one; the right card swaps with a blur crossfade (enter 400ms, exit 150ms).

## Do's and Don'ts

### Do:
- **Do** set emphasis words in Blueprint Violet as solid colour.
- **Do** keep controls squared at 6px and containers soft at 24–32px.
- **Do** let labels stand out through type: violet, weight, uppercase tracking, hairlines and slashes.
- **Do** tint shadows with ink or plum and keep them long and soft.
- **Do** use the strong ease-out (`cubic-bezier(0.23, 1, 0.32, 1)`), keep UI transitions under 300ms, make exits faster than entrances, and respect `prefers-reduced-motion`.
- **Do** re-scope `--color-white: #ffffff` inside Catalyst Plum panels instead of hard-coding white text.
- **Do** keep the Digital Bae sub-brand bolder (Montserrat black) than the firm.
- **Do** show only contact channels that exist; never print "to be confirmed". Fall back to the enquiry form and the confirmed base (Zimbabwe).
- **Do** keep the philosophy (Clarity · Credibility · Impact) to at most two appearances per page.

### Don't:
- **Don't** use gradient text.
- **Don't** use pill-shaped buttons, pill tabs, chips with backgrounds, or boxed badges.
- **Don't** add arrows to buttons other than the hero's primary call to action.
- **Don't** put a background shape behind navbar links; the underline is the only indicator.
- **Don't** place a kicker or eyebrow label above a heading.
- **Don't** show "Coming soon" content on the homepage; replace unpublished sections with a single subscribe line.
- **Don't** read `text-white` or `bg-white` literally; they are Boardroom Ink (the Inverted Name Rule).
- **Don't** use Lilac Haze for text on light surfaces.
- **Don't** make the firm look like a social media agency: no stickers, emoji, neon or playful bounce.
