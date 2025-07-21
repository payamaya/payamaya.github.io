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
