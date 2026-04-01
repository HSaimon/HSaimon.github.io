/* ===========================
   SKILLS SECTION
   =========================== */

const SKILLS = [
  { name: 'Java',        emoji: '☕', lv: 'Avançado',      cls: 'av',  pct: 85 },
  { name: 'Python',      emoji: '🐍', lv: 'Avançado',      cls: 'av',  pct: 85 },
  { name: 'Power BI',    emoji: '📊', lv: 'Avançado',      cls: 'av',  pct: 85 },
  { name: 'GDScript',    emoji: '🎮', lv: 'Avançado',      cls: 'av',  pct: 80 },
  { name: 'MySQL',       emoji: '🐬', lv: 'Avançado',      cls: 'av',  pct: 85 },
  { name: 'Spring Boot', emoji: '🍃', lv: 'Intermediário', cls: 'in',  pct: 60 },
  { name: 'Angular',     emoji: '🅰️', lv: 'Intermediário', cls: 'in',  pct: 55 },
  { name: 'Node.js',     emoji: '🟩', lv: 'Intermediário', cls: 'in',  pct: 55 },
  { name: 'Next.js',     emoji: '▲',  lv: 'Intermediário', cls: 'in',  pct: 55 },
  { name: 'AWS',         emoji: '☁️', lv: 'Intermediário', cls: 'in',  pct: 50 },
  { name: 'PHP',         emoji: '🐘', lv: 'Intermediário', cls: 'in',  pct: 55 },
  { name: 'Flash / AS3', emoji: '⚡', lv: 'Intermediário', cls: 'in',  pct: 50 },
  { name: 'Astro',       emoji: '🚀', lv: 'Iniciante',     cls: 'ini', pct: 25 },
];

/**
 * Builds and inserts all skill cards into #skGrid.
 * @param {IntersectionObserver} rvObserver – the shared reveal observer
 */
export function renderSkills(rvObserver) {
  const grid = document.getElementById('skGrid');

  SKILLS.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'sk-card rv';
    card.style.transitionDelay = `${i * 0.05}s`;

    card.innerHTML = `
      <div class="sk-emoji">${skill.emoji}</div>
      <div class="sk-name">${skill.name}</div>
      <div class="sk-lv ${skill.cls}">${skill.lv}</div>
      <div class="sk-bar">
        <div class="sk-fill" style="width:0" data-w="${skill.pct}%"></div>
      </div>`;

    grid.appendChild(card);
    rvObserver.observe(card);
  });

  // Animate bars when cards enter viewport
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.sk-fill').forEach(bar => {
          setTimeout(() => { bar.style.width = bar.dataset.w; }, 200);
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.sk-card').forEach(card => barObserver.observe(card));
}
