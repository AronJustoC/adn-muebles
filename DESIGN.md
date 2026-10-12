---
name: ADN Muebles
description: Handmade industrial furniture from a Cusco workshop, drawn in the furniture's own plywood orange and powder-coat black.
colors:
  paper: "#F1E7D6"
  paper-deep: "#E6D8C0"
  ink: "#19191B"
  wood: "#D9732E"
  wood-deep: "#A5430C"
  white: "#FFFFFF"
  ink-soft: "rgba(25, 25, 27, 0.82)"
  ink-faint: "rgba(25, 25, 27, 0.18)"
  paper-soft: "rgba(241, 231, 214, 0.78)"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.85rem, 12.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.75rem, 5vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  none: "0"
  button: "1px"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "clamp(3.5rem, 6vw, 5.5rem)"
  content: "1280px"
components:
  button-solid:
    backgroundColor: "{colors.wood}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0.8rem 1rem"
    height: "48px"
  button-solid-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0.8rem 1rem"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  spec-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0.8rem 1.25rem"
    height: "72px"
  spec-row-hover:
    backgroundColor: "{colors.paper-deep}"
  stamp-heading:
    textColor: "{colors.wood-deep}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.75rem"
  caption-tag:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.7rem"
  mobile-whatsapp:
    backgroundColor: "{colors.wood}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "56px"
  band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  field-wood:
    backgroundColor: "{colors.wood}"
    textColor: "{colors.ink}"
---

# Design System: ADN Muebles

## Overview

**Creative North Star: "The Workshop Bench"**

The page is made of the desk's own materials: plywood orange, powder-coat black, and the cream paper a workshop drawing is made on. Heavy condensed headlines, thick ink rules and square cuts read like a shop sign crossed with a bordered order form. Nothing floats; weight comes from rules and solid fills.

The product, its size and its price come first, and every action is a handoff to WhatsApp. Buttons, index rows and the phone bar are therefore the working parts of the system, and the rest is quiet: paper, ink, real photographs.

**Key Characteristics:**
- Three-material palette: paper, ink, plywood orange (with one deeper orange for text and rules).
- Heavy condensed display type over plain Barlow body text.
- 2-3px ink rules in place of shadows, cards or rounded containers.
- Square corners everywhere.
- Ornament limited to the plywood-edge stripe and the ADN logo.
- Real owner-supplied photographs only, tagged with white captions.

## Colors

A three-material palette taken from the furniture, measured for contrast.

### Primary
- **Plywood Orange** (`{colors.wood}`): fills for solid buttons, the sticky phone bar and the "Cómo se fabrica" field; selection highlight; numerals on dark bands. Text on it is always ink.

### Secondary
- **Burnt Plywood Edge** (`{colors.wood-deep}`): prices, the boxed stamp heading, focus rings on paper, the selected gallery thumbnail border, list markers and the dark stripe in the plywood divider. As text on paper only when large or bold.

### Neutral
- **Cut Paper** (`{colors.paper}`): page background, header, and text on the dark bands.
- **Kraft Shadow** (`{colors.paper-deep}`): image placeholders and row hover; the quiet second paper.
- **Powder-Coat Black** (`{colors.ink}`): all text, all rules and borders, and the dark "A tu medida" and contact bands.
- **Caption White** (`{colors.white}`): photo caption tags and the skip link only.
- **Ink Soft / Ink Faint / Paper Soft**: translucent ink (82%, 18%) for secondary text and the open-FAQ divider; translucent paper (78%) for secondary text on dark bands.

### Named Rules
**The Ink-On-Wood Rule.** Text on a wood fill is ink (5.39:1). White on wood is 3.26:1 and is not used.

**The Burnt Edge Rule.** wood-deep is text on paper only when large or bold (5.03:1). Paper on ink measures 14.3:1.

**The Own-Colors Rule.** The palette is the furniture's. New emphasis comes from wood, ink or paper, not a new hue.

## Typography

**Display Font:** Barlow Condensed (sans-serif fallback), weights 600/700/800, self-hosted via @fontsource
**Body Font:** Barlow (sans-serif fallback), weights 400/600/700, self-hosted via @fontsource
**Label Font:** Barlow Condensed 700, uppercase

**Character:** A signage-grade condensed face for everything that announces, a plain humanist companion for everything that explains. The only fallback is generic sans-serif.

### Hierarchy
- **Display** (800, clamp(2.85rem, 12.5vw, 6rem), 0.95, -0.03em): hero H1; narrowed to clamp(3.5rem, 5.7vw, 5.25rem) in the desktop split hero. Max width about 10.5-14ch.
- **Headline** (800, clamp(2.25rem, 5vw, 3.5rem), 0.95): section H2. Split-heading, custom and footer H2s step up to clamp(2.75rem, 8vw, 5rem). Prices run 3-5rem in wood-deep.
- **Title** (800, clamp(1.75rem, 5vw, 2.6rem), 1): H3 product and process titles.
- **Body** (Barlow 400/600, 1rem, 1.55): reading text capped at 62-66ch, secondary text in ink-soft.
- **Label** (Barlow Condensed 700, 0.9-1.1rem, uppercase, 0.01em): buttons, nav, table labels, captions.

### Named Rules
**The Condensed Voice Rule.** Barlow Condensed carries every heading, button, label and caption; Barlow is for reading text only.

## Layout

A single scrolling page in a centered shell (max 1280px, `{spacing.gutter}` side margins) with `{spacing.section}` vertical rhythm between sections. The hero is a two-column split on desktop (1.05fr copy, 0.95fr photo, up to 1440px) and stacks photo-first on phones. The catalog is a 1.6fr/0.75fr gallery-plus-copy split; the process is a 4-column strip on desktop and a numbered list on phones; the materials and about sections are 0.85fr/1.15fr splits. Breakpoints: 48rem, 64rem, 90rem, plus a narrow-phone rule at 30rem where the header button collapses to an icon. Header is sticky from 64rem. Below 64rem a fixed WhatsApp bar occupies the bottom, hiding while the hero button or contact band is visible. Tap targets are at least 44px.

## Elevation & Depth

Flat. There are no box-shadows anywhere. Depth comes from 2-3px ink rules, solid fills (paper, wood, ink bands), and a caption tag overlapping a photo edge. The only gradient is the plywood-edge stripe, which is hard-stopped lines, not a blend.

### Named Rules
**The Flat Slab Rule.** Surfaces are flat at rest and on hover; state change is a fill swap (wood to ink, transparent to ink, paper to kraft), never a lift.

## Shapes

Square cuts. Containers have no radius; buttons carry a 1px radius that reads as square. Borders are 3px for structural frames and section edges, 2px for buttons, table row dividers and process-step dividers, 1px for list rows. Photos are 4:3 (3:2 on phone hero, 16:9 on tablet hero). The ADN logo (four strokes drawn in the own SVG icon set: square caps, miter joins) is the logo, favicon, and a faint watermark (9% opacity) in the dark bands on desktop. Icons share one stroke style: 1.8 width, square caps, currentColor.

### Named Rules
**The Square Cut Rule.** No pills, no rounding, no blobs.

## Components

### Buttons
- **Shape:** Square (1px radius), 2px ink border, 48px min height (44px small, 56px in the desktop hero).
- **Solid:** Plywood Orange fill, ink text, condensed uppercase label with WhatsApp glyph and arrow. Hover inverts to ink fill with paper text; on dark bands the hover goes to paper fill.
- **Outline:** Transparent, ink text; hover fills ink with paper text.
- **Motion:** background, color and border change in 160ms ease-out. Focus: 3px wood-deep outline (wood on dark bands), 2px offset.

### Index Table
A 3px ink-bordered list of rows (label, value, "Preguntar" with arrow), 2px ink dividers, each row a full-width WhatsApp link with a prefilled message. Hover shifts to Kraft Shadow and nudges the arrow 0.3rem right (disabled under reduced motion).

### Stamp Heading
A section title boxed in a 3px wood-deep border with wood-deep text, condensed uppercase. Large text only.

### Caption Tag
White rectangle, ink condensed uppercase, 0.85-0.9rem, sitting on the lower edge of a photograph.

### Plywood Divider
A 14px stripe of repeating hard-stop wood / wood-deep lines evoking a plywood edge, used between major sections.

### Plywood Field and Dark Bands
"Cómo se fabrica" sits on a full Plywood Orange field with ink text, a 3px top rule and 2px ink step dividers; numerals are large 800-weight condensed. "A tu medida" and the contact footer are ink bands with paper text, wood numerals and the ADN logo watermark.

### Navigation
Header: paper, 3px ink bottom rule, brand in condensed caps with the ADN logo, desktop links in condensed uppercase; phones get a 44px bordered menu button opening a bordered paper panel with 48px rows. FAQ and care are native details and ruled lists with a rotating chevron.

### Sticky WhatsApp Bar
Phone-only fixed bar, 56px, wood fill, ink border and text, with the same hover inversion. It slides out of view while the hero button or the contact band is visible.

## Do's and Don'ts

### Do:
- **Do** set text on wood fills in ink (#19191B).
- **Do** separate sections and table rows with 2-3px ink rules.
- **Do** use Phosphor icons (`@phosphor-icons/core`, bold weight, MIT) for every UI action (arrow, WhatsApp, menu), filled with currentColor and wrapped in `.icon-ph`; keep one weight. The ADN logo (`src/assets/logo.svg`, vectorized from the owner's image, a filled shape wider than tall, ratio 1.109) is the only non-Phosphor mark: it takes currentColor, shows at 38px in the header and footer and as a faint watermark in the dark bands.
- **Do** keep the hero lined up with the header's shell on wide screens (from 90rem the copy starts at the shell edge and the photo bleeds to the right edge), and split it into two columns from 48rem so tablets are never empty.
- **Do** use real photographs with provenance, captioned in a white tag.
- **Do** keep tap targets at least 44px tall (48px for buttons, 56px for the sticky bar).

### Don't:
- **Don't** put white text on wood (3.26:1).
- **Don't** use wood-deep for small body text on paper.
- **Don't** add shadows, rounded corners, glassmorphism or gradient fills.
- **Don't** use stock or generated imagery.
- **Don't** introduce a third hue; new emphasis comes from wood, ink or paper.
