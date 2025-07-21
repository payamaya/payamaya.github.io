// Theme Toggle
const themeToggle = document.getElementById('themeToggle')
const lightIcon = themeToggle.querySelector('.light-icon')
const darkIcon = themeToggle.querySelector('.dark-icon')

// Check for saved preference or use system preference
const savedTheme =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark')
  lightIcon.style.display = 'none'
  darkIcon.style.display = 'inline'
}

// Toggle function
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme')

  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('theme', 'light')
    lightIcon.style.display = 'inline'
    darkIcon.style.display = 'none'
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    lightIcon.style.display = 'none'
    darkIcon.style.display = 'inline'
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger')
  const navMenu = document.getElementById('nav-menu')

  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('show')

    // Change hamburger icon to X when menu is open
    if (navMenu.classList.contains('show')) {
      hamburger.innerHTML = '✕'
    } else {
      hamburger.innerHTML = '☰'
    }
  })

  // Close menu when a link is clicked (for single page applications)
  const navLinks = document.querySelectorAll('#nav-menu a')
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('show')
      hamburger.innerHTML = '☰'
    })
  })
})
