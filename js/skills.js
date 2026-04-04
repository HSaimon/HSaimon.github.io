/* ===========================
   SKILLS SECTION - Ícones Transparentes (Devicon + Externos)
   =========================== */

// URL base da CDN do Devicon para as linguagens suportadas
const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

const SKILLS = [
  { name: 'Java',        icon: 'java/java-original.svg',     lv: 'Avançado',      cls: 'av',  pct: 85 },
  { name: 'Python',      icon: 'python/python-original.svg', lv: 'Avançado',      cls: 'av',  pct: 85 },
  { name: 'GDScript',    icon: 'godot/godot-original.svg',   lv: 'Avançado',      cls: 'av',  pct: 80 },
  { name: 'MySQL',       icon: 'mysql/mysql-original.svg',   lv: 'Avançado',      cls: 'av',  pct: 85 },
  { name: 'Excel',       icon: 'https://api.iconify.design/vscode-icons/file-type-excel.svg', lv: 'Avançado', cls: 'av', pct: 80 },
  { name: 'Power BI',    icon: 'https://api.iconify.design/logos:microsoft-power-bi.svg', lv: 'Intermediário', cls: 'in', pct: 70 },
  { name: 'Spring Boot', icon: 'spring/spring-original.svg', lv: 'Intermediário', cls: 'in',  pct: 60 },
  { name: 'Angular',     icon: 'angular/angular-original.svg', lv: 'Intermediário', cls: 'in',  pct: 55 },
  { name: 'React',       icon: 'react/react-original.svg',   lv: 'Intermediário', cls: 'in',  pct: 50 },
  { name: 'Flutter',     icon: 'flutter/flutter-original.svg', lv: 'Intermediário', cls: 'in',  pct: 50 },
  { name: 'Node.js',     icon: 'nodejs/nodejs-original.svg', lv: 'Intermediário', cls: 'in',  pct: 55 },
  { name: 'Next.js',     icon: 'nextjs/nextjs-original.svg', lv: 'Intermediário', cls: 'in',  pct: 55, invertDark: true },
  { name: 'AWS',         icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg', lv: 'Intermediário', cls: 'in',  pct: 50, invertDark: true },
  { name: 'PHP',         icon: 'php/php-original.svg',       lv: 'Intermediário', cls: 'in',  pct: 55 },
  { name: 'Astro',       icon: 'astro/astro-original.svg',   lv: 'Iniciante',     cls: 'ini', pct: 25, invertDark: true },
];

const style = document.createElement('style');
style.textContent = `
  [data-theme="dark"] .invert-on-dark {
    filter: invert(1) brightness(2);
  }
`;
document.head.appendChild(style);


export function renderSkills(rvObserver) {
  const grid = document.getElementById('skGrid');

  SKILLS.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'sk-card rv';
    card.style.transitionDelay = `${i * 0}s`;

    const isExternal = skill.icon && skill.icon.startsWith('http');
    const imgSrc = isExternal ? skill.icon : `${DEVICON_BASE}${skill.icon}`;

    const iconHTML = skill.icon 
      ? `<img src="${imgSrc}" alt="${skill.name}" class="${skill.invertDark ? 'invert-on-dark' : ''}" style="width: 44px; height: 44px; display: block; object-fit: contain;" />` 
      : `<span style="font-size: 2rem;">${skill.emoji}</span>`;

    card.innerHTML = `
      <div class="sk-emoji" style="display: flex; align-items: center; justify-content: flex-start; min-height: 44px; margin-bottom: 0.2rem;">
        ${iconHTML}
      </div>
      <div class="sk-name">${skill.name}</div>
      <div class="sk-lv ${skill.cls}">${skill.lv}</div>
      <div class="sk-bar">
        <div class="sk-fill" style="width:0" data-w="${skill.pct}%"></div>
      </div>`;

    grid.appendChild(card);
    rvObserver.observe(card);
  });

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