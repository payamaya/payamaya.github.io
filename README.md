# 🌟 Paul Yashouh - Portfolio Website

# 🌟 Paul Yashouh — Portfolio Website

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

Notes on deployment:

- The repository is intended to be published via GitHub Pages. For user/organization pages, push to the `main` branch of a repo named `payamaya.github.io` (as this repo is).
- The `_config.yml` baseurl is empty which is correct for a root user page.

## Project Structure

Top-level (important files and folders):

- `_config.yml` — Jekyll site configuration
- `Gemfile` — Ruby dependencies (jekyll, github-pages)
- `_includes/` — HTML fragments included in layouts
- `_layouts/` — Page layouts
- `_data/` — YAML data (projects, experience, navigation, etc.)
- `assets/` — CSS, JS, images used by the site
- `_site/` — Generated site output (build artefact)
- Markdown pages: `index.md`, `about.md`, `projects.md`, `contact.md`, etc.

For a full listing, see the repository tree or inspect the folders above.

## Key Features

- Jekyll-based static site optimized for GitHub Pages
- Structured content for projects, experience, education, and contact
- Reusable includes and data-driven templates (`_data/*.yml`)
- CSS structure separated into base, components, layout, pages, and themes under `assets/css`
- Lightweight JavaScript (menu handling) under `assets/js`

## Development Workflow

- Branching and CI: This repo contains a `.github/workflows/` folder — you can add CI workflows (build, link-check, lint) there. No explicit branching strategy file was found; a common approach is feature branches merged via PRs into `main`.
- Local dev: use `bundle exec jekyll serve` to preview changes. Commit source files (Markdown, HTML, CSS) and push to `main` to publish.

## Coding Standards

There is no `Coding_Standards` document present in `.github/copilot` (that directory was not found). Inferred/Recommended conventions for this project:

- HTML/CSS: Keep presentational CSS in `assets/css`, follow semantic HTML, and use BEM-like naming or clear component-based class names.
- Markdown: Keep front matter (YAML) consistent across pages (title, layout, permalink when needed).
- Templates: Keep reusable markup in `_includes/` and avoid duplicated code in layouts.
- Commits: Use clear, imperative commit messages (e.g., "Add project: X", "Fix responsive layout for header").

If you have a preferred styleguide, add a `CODING_STANDARDS.md` or place it under `.github/copilot/`.

## Testing

No unit tests or a `Unit_Tests` document were found. For static sites, consider the following test/lint tools:

- HTML/CSS linters (html-proofer, stylelint)
- Link checking (html-proofer or github action for checking dead links)
- Accessibility checks (axe, pa11y)

Example: run HTMLProofer against the built `_site/` directory as part of CI.

## Contributing

No `copilot-instructions.md` or `Code_Exemplars` were found in `.github/`. General contributing guidelines:

1. Fork the repo and create a feature branch: `git checkout -b feat/your-feature`
2. Make changes to Markdown, templates, or assets.
3. Run the site locally (`bundle exec jekyll serve`) and verify changes.
4. Commit with clear messages and open a pull request into `main`.

If you maintain code exemplars or linter/prettier configs, include them under `.github/copilot/` or reference them in `CONTRIBUTING.md`.

## License

- No top-level `LICENSE` file was found in the repository. The previous README referenced an MIT badge, but the actual license file is missing. If you intend to license the project, add a `LICENSE` file (e.g., MIT) at the repository root.

## Links and References

- Live site: https://payamaya.github.io/
- Configuration: `_config.yml`
- Dependencies: `Gemfile`
- Template includes: `_includes/`

## Next steps / Suggestions

- Add a `LICENSE` file if you want an explicit license.
- Add `CONTRIBUTING.md` and `CODING_STANDARDS.md` (or place them under `.github/copilot/`) to capture project conventions and copilot guidance.
- Add CI checks in `.github/workflows/` for link-checking, HTML proofing, and stylelint.

---

If you'd like, I can:

- add a `CONTRIBUTING.md` draft,
- create a `CODING_STANDARDS.md` scaffold,
- or add a simple GitHub Actions workflow to run HTMLProofer on merged PRs.

New files added in this run

- `.github/copilot/` — documentation for Copilot and contributors (Architecture.md, Code_Exemplars.md, Coding_Standards.md, Project_Folder_Structure.md, Technology_Stack.md, Unit_Tests.md, Workflow_Analysis.md)
- `.github/copilot-instructions.md` — Copilot guidance
- `CONTRIBUTING.md` — contribution steps and local dev instructions
- `CODING_STANDARDS.md` — top-level coding standards
- `LICENSE` — MIT license
- `.github/workflows/htmlproofer.yml` — basic CI to run html-proofer on pushes/PRs to `main`

These files were created to provide the missing documentation and a minimal CI check recommended by the README. If you'd like changes to the content or different CI tooling (stylelint, markdownlint), I can add them next.
