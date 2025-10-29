# Technology Stack

This project is a Jekyll-based static site intended for GitHub Pages. The following stack items are in use or recommended.

Primary

- Jekyll — static site generator (via the `jekyll` gem)
- GitHub Pages — hosting (via `github-pages` gem)
- Ruby & Bundler — dependency management and local tooling

Languages

- Markdown / HTML
- CSS
- JavaScript (vanilla; minimal)

Gems & Plugins (inferred from `Gemfile` and `_config.yml`)

- `jekyll`
- `github-pages` (bundles a compatible set of Jekyll and plugin versions)
- `_config.yml` lists: `jekyll-feed`, `jekyll-seo-tag`

Recommended local versions

- Ruby: 2.7+ or 3.x (test and pin if your environment requires a specific point release)
- Bundler: latest compatible with your Ruby version

Optional tools for development/CI

- html-proofer (link and HTML validation)
- stylelint (CSS linting)
- markdownlint (Markdown linting)

Notes

- Because the repo uses `github-pages` gem, local builds should use the same Bundler/Gemfile stack for parity with GitHub Pages.
