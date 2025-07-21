document.addEventListener('DOMContentLoaded', function () {
  // ===== Theme Toggle Functionality =====
  const themeToggle = document.getElementById('themeToggle')

  // Only proceed if theme toggle exists (safe check)
  if (themeToggle) {
    const lightIcon = themeToggle.querySelector('.light-icon')
    const darkIcon = themeToggle.querySelector('.dark-icon')

    // Check for saved preference or use system preference
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
    }

    // Toggle function
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme')

      if (currentTheme === 'dark') {
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

  // ===== Hamburger Menu Functionality =====
  const hamburger = document.getElementById('hamburger')
  const navMenu = document.getElementById('nav-menu')

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('show')

      // Change hamburger icon to X when menu is open
      if (navMenu.classList.contains('show')) {
        hamburger.innerHTML = '✕'
      } else {
        hamburger.innerHTML = '☰'
      }
    })

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('#nav-menu a')
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        navMenu.classList.remove('show')
        hamburger.innerHTML = '☰'
      })
    })
  }
})
