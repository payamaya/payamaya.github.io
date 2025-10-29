# Coding Standards — suggested conventions for this repository

This file collects lightweight, practical conventions contributors should follow.

HTML / Liquid
- Prefer semantic HTML (header, main, nav, footer, section, article).
- Keep layout wrappers in `_layouts/*.html` and reusable fragments in `_includes/*.html`.
- Limit logic in templates; prefer data in `_data/*.yml` and simple loops/filters in Liquid.

CSS
- Organize styles under `assets/css/` (base, components, layout, pages, themes).
- Use clear, component-focused class names (BEM-like or descriptive tokens).
- Keep utility and layout rules separated from component CSS.
- Keep selectors specific but not deeply nested.

JavaScript
- Keep behavior small and unobtrusive in `assets/js`.
- Use feature detection and avoid global pollution (wrap modules in IIFE or use ES modules if supported).

Markdown
- Include consistent front matter (title, layout, permalink when needed).
- Use relative links where appropriate and check links after building.

Commits & PRs
- Use short, imperative commit messages: "Add: new project entry" or "Fix: header responsive layout".
- Open pull requests against `main` (feature branches for larger work). Include a short description and testing steps.

Formatting / Linting
- Consider adding `stylelint` for CSS and `markdownlint` for Markdown in CI.

If you prefer a stricter standard, add a repo-level formatter/linter and update this file accordingly.
