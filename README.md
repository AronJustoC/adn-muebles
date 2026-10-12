# ADN Muebles

One-page store for handmade industrial furniture made in Cusco, Peru. Sales are closed on WhatsApp, so every
button opens a chat with the question already written.

Live site: https://aronjustoc.github.io/adn-muebles/

## Stack

- [Astro](https://astro.build) (static output, no framework components)
- Barlow and Barlow Condensed, self-hosted through `@fontsource`
- [Phosphor](https://phosphoricons.com) icons (`@phosphor-icons/core`, MIT)
- Real product photos only, optimized by `astro:assets`

## Run it

```sh
npm install
npm run dev      # http://localhost:4321/adn-muebles/
npm run build    # static site in dist/
npm run preview  # serve the built site
```

## Add or change a product

All the copy and product facts live in `src/data/store.json`.

- Photos go in `src/assets/escritorio/` (optimized) and `public/img/`.
- Prices, sizes and the WhatsApp number are in `store.json`; the page reads them from there.
- Colors and type tokens are CSS variables at the top of `src/styles/global.css`
  (plywood orange `--wood`, powder-coat black `--ink`, warm paper `--paper`). The design rules are in `DESIGN.md`.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages through
`.github/workflows/deploy.yml`.

The site is served from the `/adn-muebles` sub-path (see `base` in `astro.config.mjs`). If you move it to its own
domain, set `site` to that domain and `base` to `/`.
