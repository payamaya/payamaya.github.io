# Copilot instructions (recommended)

This file provides guidance for GitHub Copilot (or maintainers referencing these suggestions) about how to assist with changes in this repository.

Suggested behavior

- When suggesting code, favor small, incremental changes that preserve Jekyll conventions and Liquid templating.
- Prefer examples that use semantic HTML and small, isolated CSS rules in `assets/css/components`.
- For JavaScript, prefer vanilla, unobtrusive snippets unless a larger framework is explicitly added.

When creating new pages

- Include consistent front-matter (title, layout, permalink when necessary).
- Add corresponding `_data` entries if the page should be listed on projects/experience sections.

Commit messages & PR titles

- Use imperative-style verbs and short prefixes, e.g., `Add:`, `Fix:`, `Docs:`.

Safety

- Avoid generating secrets or external API keys in repository files.

If you want to extend this guidance, add more examples under `.github/copilot/Code_Exemplars.md`.
