/* ===========================
   MAIN — Entry Point
   Imports and initialises all modules.
   =========================== */

import { createRevealObserver } from './reveal.js';
import { initTimelineTabs }     from './timeline.js';
import { renderSkills }         from './skills.js';
import { loadProjects }         from './projects.js';
import { initContactForm }      from './contact.js';
import { initThemeToggle }      from './theme.js';

// nav.js is loaded separately (no export needed for event listeners)

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();

  const rvObserver = createRevealObserver();

  initTimelineTabs();
  renderSkills(rvObserver);
  loadProjects(rvObserver);
  initContactForm();
});
