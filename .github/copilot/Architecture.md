# Architecture — Jekyll portfolio site

This document summarizes the high-level architecture of the project (a Jekyll-based static site for GitHub Pages).

Overview

- Source content (Markdown, YAML data) is compiled by Jekyll into static HTML/CSS/JS under `_site/`.
- Templates and reusable partials are defined in `_layouts/` and `_includes/`.
- Structured data used by templates lives in `_data/` (projects.yml, experience.yml, etc.).
- Presentation assets are organized in `assets/` (CSS/JS/images) and componentized under `assets/css`.

Request flow (authoring -> publish)

1. Developer edits Markdown, HTML includes, or CSS in the repo.
2. Locally: `bundle exec jekyll serve` builds the site and serves at http://127.0.0.1:4000.
3. CI (optional): workflow builds the site and runs linters/link checks.
4. Deploy: push to `main` on the `payamaya.github.io` repository — GitHub Pages serves the generated site.

Components

- Content: `*.md` pages at root (index.md, projects.md, about.md)
- Data: `_data/*.yml` — feeds project lists and experience sections
- Includes: `_includes/*.html` — header, footer, sections
- Layouts: `_layouts/*.html` — page wrappers
- Assets: `assets/css` (base, components, layout, pages, themes), `assets/js` (menu, minimal scripts)

Deployment model

- User/organization GitHub Pages site (no baseurl). The repository name indicates a user-page deployment: `payamaya.github.io`.

Simple diagram (ASCII)

Author files (Markdown, CSS, JS)
|
v
Jekyll build
|
v
Static files in `_site/` ---> GitHub Pages serves at https://payamaya.github.io

Notes

- No server-side code; everything is static and suitable for CDN caching.
