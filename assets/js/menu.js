// Only proceed if theme toggle exists (safe check)
if (themeToggle) {
  const lightIcon = themeToggle.querySelector('.light-icon')
  const darkIcon = themeToggle.querySelector('.dark-icon')

  // Check saved preference or system preference
  const savedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')

  // Apply saved theme
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    if (lightIcon) lightIcon.style.display = 'none'
    if (darkIcon) darkIcon.style.display = 'inline'
  } else {
    document.documentElement.removeAttribute('data-theme')
    if (lightIcon) lightIcon.style.display = 'inline'
    if (darkIcon) darkIcon.style.display = 'none'
  }

  // Toggle on click
  themeToggle.addEventListener('click', () => {
    const isDark =
      document.documentElement.getAttribute('data-theme') === 'dark'

    if (isDark) {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
      if (lightIcon) lightIcon.style.display = 'inline'
      if (darkIcon) darkIcon.style.display = 'none'
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      if (lightIcon) lightIcon.style.display = 'none'
      if (darkIcon) darkIcon.style.display = 'inline'
    }
  })
}
