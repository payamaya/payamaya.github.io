# Code Exemplars — small, copy-ready snippets

Use these exemplars as quick references when authoring pages, includes, and styles.

1. Page front-matter (Markdown)

```yaml
---
layout: default
title: 'Project Name'
permalink: /projects/project-name/
---
Write your content here in Markdown.
```

2. Include usage (in a layout or page)

```liquid
{% raw %}{% include profile.html person=site.data.profile %}{% endraw %}
```

3. BEM-like CSS component (example)

```css
.card {
  /* block */
}
.card__title {
  /* element */
}
.card--highlight {
  /* modifier */
}
```

4. Minimal menu toggle (assets/js/menu.js)

```javascript
document.querySelector('#menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('is-open')
})
```

5. Example data entry for `_data/projects.yml`

```yaml
- id: project-1
  title: 'My Project'
  description: 'Short description'
  url: '/projects/project-1/'
```

Guidance

- Keep examples small and descriptive. Add new exemplars to this file as the project grows.
