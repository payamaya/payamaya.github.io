# Project Folder Structure

This file documents the on-disk layout and the purpose of top-level folders/files.

Repository root

- `_config.yml` — Jekyll configuration
- `Gemfile` — Ruby dependencies for Jekyll/GitHub Pages
- `index.md`, `about.md`, `projects.md`, `contact.md`, etc. — site pages
- `README.md`, `CONTRIBUTING.md`, `LICENSE` — repository metadata and contribution docs

Top-level folders

- `_includes/` — reusable HTML fragments included by layouts
- `_layouts/` — page layout templates
- `_data/` — YAML data files used by templates (projects.yml, experience.yml, etc.)
- `assets/` — CSS, JS, and images organized into subfolders
  - `assets/css/` — base, components, layout, pages, themes
  - `assets/js/` — small scripts (menu.js)
- `_site/` — generated site output (ignored by source control in general; included here as a build artifact)

Notes

- Keep source content (Markdown and data) separate from presentation (layouts and assets).
- Add new components as small include files and corresponding CSS under `assets/css/components`.
