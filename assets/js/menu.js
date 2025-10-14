document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle')
  if (!themeToggle) {
    console.warn('Theme toggle button not found')
    return
  }

  const lightIcon = themeToggle.querySelector('.light-icon')
  const darkIcon = themeToggle.querySelector('.dark-icon')

  const savedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      if (lightIcon) lightIcon.style.display = 'none'
      if (darkIcon) darkIcon.style.display = 'inline'
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
      if (lightIcon) lightIcon.style.display = 'inline'
      if (darkIcon) darkIcon.style.display = 'none'
    }
  }

  // Apply theme on load
  applyTheme(savedTheme)

  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    const currentTheme =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'dark'
        : 'light'
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark')
  })
})
