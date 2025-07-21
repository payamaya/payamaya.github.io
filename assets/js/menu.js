document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger')
  const navMenu = document.getElementById('nav-menu')
  const themeToggle = document.getElementById('themeToggle')

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent event bubbling
      navMenu.classList.toggle('show')
      hamburger.innerHTML = navMenu.classList.contains('show') ? '✕' : '☰'
    })

    // Close menu when clicking anywhere outside
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && e.target !== hamburger) {
        navMenu.classList.remove('show')
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
})
