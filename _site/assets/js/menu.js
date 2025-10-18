document.addEventListener('DOMContentLoaded', () => {
  /* ==============================
     THEME TOGGLE LOGIC
  =============================== */
  const themeToggle = document.getElementById('themeToggle')
  const lightIcon = themeToggle?.querySelector('.light-icon')
  const darkIcon = themeToggle?.querySelector('.dark-icon')

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

  applyTheme(savedTheme)

  themeToggle?.addEventListener('click', () => {
    const currentTheme =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'dark'
        : 'light'
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark')
  })

  /* ==============================
     HAMBURGER MENU TOGGLE LOGIC
  =============================== */
  const hamburger = document.getElementById('hamburger')
  const navMenu = document.getElementById('nav-menu')

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show')
    })

    // Close menu when a nav link is clicked
    document.querySelectorAll('#nav-menu a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show')
      })
    })

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('show')
      }
    })
  } else {
    console.warn('Hamburger menu elements not found.')
  }
})
