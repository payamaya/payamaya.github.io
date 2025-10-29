# Unit Tests / Validation

This repository currently has no automated unit tests. For static sites, the focus is usually on validation and quality checks rather than unit tests. Below are recommended checks you can add to CI.

Suggested checks

- HTML / link validation: html-proofer (validates internal/external links, images, alt text)
- Accessibility checks: axe or pa11y run against the built `_site/`
- CSS linting: stylelint with a small rule set for the project's style conventions
- Markdown linting: markdownlint for readability and front-matter consistency

Example (local) — build and run html-proofer

```bash
bundle exec jekyll build
gem install html-proofer
htmlproofer ./_site --assume-extension
```

Notes

- Add these checks into `.github/workflows/` to run on PRs and push to `main`.
- Start with HTMLProofer and a link-checking workflow; add stylelint/markdownlint later if desired.
