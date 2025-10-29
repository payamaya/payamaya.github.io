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
