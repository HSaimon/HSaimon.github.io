/* ===========================
   SCROLL REVEAL UTILITY
   =========================== */

/**
 * Creates an IntersectionObserver that adds the "vis" class
 * to any element with class "rv" when it enters the viewport.
 * Returns the observer so other modules can reuse it.
 */
export function createRevealObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('vis');
    });
  }, { threshold: 0.08 });

  // Observe all pre-existing .rv elements
  document.querySelectorAll('.rv').forEach(el => observer.observe(el));

  return observer;
}
