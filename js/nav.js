/* ===========================
   NAVIGATION BEHAVIOUR
   =========================== */

// Scroll shadow on nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger toggle
const hbg = document.getElementById('hbg');
const nl  = document.getElementById('navLinks');

hbg.addEventListener('click', () => nl.classList.toggle('open'));

// Close menu when any link is clicked
nl.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => nl.classList.remove('open'))
);
