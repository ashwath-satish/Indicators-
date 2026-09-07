# Indicators−

A searchable static reference for DECA performance indicators.

2,201 indicators across 22 instructional areas — each with its code, area, and a
plain-language explanation. No build step, no framework, no server logic, no tracking.

## Run locally

    python -m http.server 8080

Then open <http://localhost:8080>.

## Deploy

Static deploy from the repository root. Importing the repo into Vercel needs no
configuration — no framework preset, no build command, no output directory.

## Layout

    index.html          markup and view templates
    styles.css          design system, self-hosted @font-face
    app.js              hash router, search, rendering
    data/indicators.json    indicator records (id, code, title, text, area)
    data/areas.json         area metadata and cluster mapping
    fonts/              IBM Plex Sans / Mono subsets

Made by Ashwath Satish. Inspired by indicators-plus.vercel.app.
Performance indicators are published by DECA Inc. This is an unofficial study aid and
is not affiliated with or endorsed by DECA.
