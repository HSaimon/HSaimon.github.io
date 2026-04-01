/* ===========================
   THEME TOGGLE
   =========================== */

const STORAGE_KEY = 'hs-theme';
const DARK  = 'dark';
const LIGHT = 'light';

/** Returns the current active theme. */
function getTheme() {
  return document.documentElement.getAttribute('data-theme') || LIGHT;
}

/** Applies a theme and persists it. */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
  updateToggleIcon(theme);
}

/** Updates the button icon/label to reflect current state. */
function updateToggleIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const isDark = theme === DARK;
  btn.setAttribute('aria-label', isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro');
  btn.innerHTML = isDark ? ICON_SUN : ICON_MOON;
}

const ICON_SUN = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
</svg>`;

const ICON_MOON = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
</svg>`;

export function initThemeToggle() {
  // Restore saved preference (or system preference)
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? DARK : LIGHT);
  applyTheme(initial);

  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    applyTheme(getTheme() === DARK ? LIGHT : DARK);
  });
}
