/* ===========================
   TIMELINE TABS
   =========================== */

export function initTimelineTabs() {
  document.querySelectorAll('.tl-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tl-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tl-items').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
}
