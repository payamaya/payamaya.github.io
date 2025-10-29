# Workflow Analysis

This document captures a recommended development workflow for the repository.

Branches

- `main` — production branch. Pushes to `main` publish the site (GitHub Pages). Keep `main` deployable.
- Feature branches: `feat/xxx`, `fix/xxx`, `chore/xxx` for PR-based development.

Pull Requests

- Open a PR from your feature branch into `main`.
- Include a short summary of changes and testing steps (how to preview locally).
- Use code review and at least one approver for non-trivial changes.

Local development

- `bundle install` to install gems
- `bundle exec jekyll serve --livereload` to preview

CI / Checks (recommended)

- Build: `bundle exec jekyll build`
- HTML/link checks: html-proofer or similar
- Lint: stylelint (CSS), markdownlint (Markdown)

Deployment

- User/Organization pages: repository named `payamaya.github.io` and `main` branch used for publishing.

Notes

- Add a simple GitHub Action to run html-proofer on PRs to catch broken links before merging.
