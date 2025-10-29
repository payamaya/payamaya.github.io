# 🌟 Paul Yashouh - Portfolio Website

[![GitHub Pages](https://img.shields.io/badge/View-Live%20Site-brightgreen)](https://payamaya.github.io/)

This repository is a personal portfolio website for Paul Yashouh. It's a Jekyll-based static site configured for GitHub Pages and contains content, layouts, and assets for a responsive developer portfolio showcasing projects, experience, and contact information.

## Project Name and Description

- Project: Paul Yashouh — Portfolio Website
- Purpose: A personal portfolio site built with Jekyll to present projects, work experience, skills, and contact information. The site is intended to be deployed to GitHub Pages at https://payamaya.github.io.

## Technology Stack

Primary technologies (inferred from `Gemfile` and `_config.yml`):

- Static site generator: Jekyll
- GitHub Pages (via the `github-pages` gem)
- RubyGems (Bundler) for dependency management
- Markup: Markdown and HTML
- Styling: CSS (project contains a structured `assets/css` tree)
- JavaScript: small site scripts in `assets/js` (e.g., `menu.js`)

Notes:

- `_config.yml` uses the `minima` theme and includes `jekyll-feed` and `jekyll-seo-tag` plugins.
- Exact Ruby version is not specified in the repository; use a recent stable Ruby (2.7+ or 3.x) when installing locally.

## Project Architecture (high-level)

This is a conventional Jekyll/GitHub Pages site with the following responsibilities:

- Content: Markdown files at the repo root (e.g., `index.md`, `about.md`, `projects.md`, etc.) and `_includes` fragments.
- Layouts: `_layouts/default.html` defines the HTML skeleton for pages.
- Includes: Reusable HTML snippets live under `_includes/` (header, footer, project lists, profile sections, etc.).
- Assets: `assets/` and `assets/css` hold stylesheets, component CSS, and JavaScript files. Compiled site output is available under `_site/` when built locally.
- Data: `_data/` contains YAML data used by templates (projects, experience, navigation, etc.).

There is no compiled application server — the site is rendered by Jekyll into static HTML/CSS/JS.

## Getting Started

Prerequisites:

- Ruby (recommended 2.7+ or 3.x)
- Bundler (`gem install bundler`)
- Git

Local development (bash)

```bash
# Install dependencies
gem install bundler --no-document
bundle install

# Build and serve locally
bundle exec jekyll serve --livereload

# Open http://127.0.0.1:4000 in your browser
```

# 🌟 Paul Yashouh — Portfolio Website

[![View site](https://img.shields.io/badge/View-Live%20Site-brightgreen)](https://payamaya.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

This repository contains the source for Paul Yashouh's personal portfolio website. It's a Jekyll-based static site designed for GitHub Pages and organized with layouts, includes, and data-driven templates.

## Project at a glance

- Purpose: Present projects, work experience, skills, and contact information.
- Live: https://payamaya.github.io/
- Static site generator: Jekyll (published via GitHub Pages)

## Technology stack

- Jekyll (via `github-pages` gem)
- Ruby & Bundler for local builds
- Markup: Markdown + Liquid templates
- Styling: CSS (assets under `assets/css/`)
- Small vanilla JavaScript in `assets/js/`

See `.github/copilot/Technology_Stack.md` for more details.

## Quick start

Prerequisites: Ruby (recommended 2.7+ or 3.x), Bundler, Git.

```bash
# Install dependencies
gem install bundler --no-document
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Open http://127.0.0.1:4000
```

Push to the `main` branch of this repository to publish to GitHub Pages (this repo is a user page: `payamaya.github.io`).

## Project structure (high level)

- `_config.yml` — site configuration
- `Gemfile` — Ruby dependencies
- `_layouts/`, `_includes/` — HTML templates and fragments
- `_data/` — YAML data (projects, experience, navigation)
- `assets/` — CSS, JS, images
- Markdown pages at the repo root (index.md, about.md, projects.md, contact.md)
- `_site/` — generated site output (build artifact)

See `.github/copilot/Project_Folder_Structure.md` for details and guidance.

## Key features

- Data-driven templates for projects and experience (`_data/*.yml`).
- Componentized CSS under `assets/css/` (base, components, layout, pages, themes).
- Simple, unobtrusive JS for site behavior (menu, toggles).

## Development workflow

- Branching: use feature branches (e.g., `feat/…`, `fix/…`) and open PRs into `main`.
- Local preview: `bundle exec jekyll serve --livereload`.
- CI: a basic GitHub Action runs `jekyll build` and `html-proofer` on PRs to `main`.

See `.github/copilot/Workflow_Analysis.md` for recommendations.

## Coding standards and examples

Coding conventions and small code exemplars live under:

- `.github/copilot/Coding_Standards.md` and `CODING_STANDARDS.md` (root)
- `.github/copilot/Code_Exemplars.md` — small snippets for front-matter, includes, CSS patterns, and JS

Follow semantic HTML, consistent front-matter, and small, focused CSS components.

## Testing and validation

This repository uses a validation-first approach rather than runtime unit tests. See `.github/copilot/Unit_Tests.md` for recommended checks.

- CI runs HTMLProofer to catch broken links and common HTML issues. Consider adding `stylelint` and `markdownlint` to CI for CSS and Markdown checks.

## Contributing

Please read `CONTRIBUTING.md` for contribution steps and local development instructions.

Basic flow:

1. Create a feature branch: `git checkout -b feat/your-change`
2. Run and verify locally: `bundle exec jekyll serve --livereload`
3. Commit with a clear message and open a PR into `main`.

## License

This project is licensed under the MIT License — see `LICENSE`.

Copyright (c) 2025 PayaMaya

Full license text is in the `LICENSE` file at the repo root.

## Useful links

- Live site: https://payamaya.github.io/
- Repo config: `_config.yml`
- Templates/includes: `_layouts/`, `_includes/`
- Contributor docs: `.github/copilot/` (Architecture, Workflow, Technology Stack, Project structure, Unit Tests, Code exemplars)

---
