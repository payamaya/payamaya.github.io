# Coding Standards

This file is a repository-level copy of the coding standards and conventions. It mirrors the recommendations in `.github/copilot/Coding_Standards.md` and is intended for contributors who look for project rules at the repo root.

Key points

- Prefer semantic HTML and keep layout in `_layouts/` and reusable fragments in `_includes/`.
- Store styles under `assets/css/` and keep components small and focused.
- JavaScript should be minimal and unobtrusive (use `assets/js/`).
- Keep Markdown front-matter consistent across pages.
- Use clear, imperative commit messages.

Linting and tooling

- Consider adding `stylelint` and `markdownlint` in CI for automated enforcement.

License header examples

Include a short header in source files to make the license explicit at the file level. Keep these minimal and point back to the top-level `LICENSE` file.

CSS / JS / other C-style comment example:

```css
/*
 * SPDX-License-Identifier: MIT
 * Copyright (c) 2025 PayaMaya
 */
```

HTML / Liquid / Markdown comment example:

```html
<!--
	SPDX-License-Identifier: MIT
	Copyright (c) 2025 PayaMaya
	See: /LICENSE
-->
```
