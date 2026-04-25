/*
 * SPDX-License-Identifier: MIT
 * Copyright (c) 2025 PayaMaya
 */

/* ==============================
   HAMBURGER MENU TOGGLE LOGIC
=============================== */
document.addEventListener('DOMContentLoaded', () => {
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
