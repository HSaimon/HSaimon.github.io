/* ===========================
   SCROLL REVEAL UTILITY
   =========================== */

export function createRevealObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('vis');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.rv').forEach(el => observer.observe(el));

  return observer;
}
