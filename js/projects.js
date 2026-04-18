/* ===========================
   PROJECTS - VERSÃO COM CORES AMPLIADAS
   =========================== */

const USERS = ['HSaimon', 'H-Saimon'];
const EXCLUDE = new Set(['HSaimon', 'H-Saimon']);

/* ── Top 10 do ranking definitivo ── */
const HIGHLIGHT_RANKING = {
  'SistemaDeVendas':         100, 
  'SENAI-SITE':               95, 
  'PUSHON-BackEnd':           90, 
  'Labirinto_Esp32':          85, 
  'PUSHON-FrontEnd':          80, 
  'FrontAppFitness':          75, 
  'Jogo-da-Dengue_SENAI':    70, 
  'HSaimon.github.io':        65, 
  'Oficina-Análise-de-Dados': 60, 
  'Cadastro_de_produto':      55, 
};

const CURATED_DESC = {
  'SistemaDeVendas': 'API REST completa em Java 17 + Spring Boot 3.4. Sistema de vendas com 10 entidades, fidelidade em 5 categorias calculadas automaticamente, controle de estoque, pedidos, pagamentos e autenticação Spring Security.',
  'SENAI-SITE': 'Projeto de maior peso técnico do portfólio. TypeScript com framework web moderno. Participação em código tipado e colaborativo, elevando o nível para padrões de mercado.',
  'PUSHON-BackEnd': 'Backend robusto em Java + Spring Boot com JWT multi-role. Sistema de apostas fitness com ranking automático por check-ins e premiação automática para os 3 primeiros colocados.',
  'Labirinto_Esp32': 'O projeto mais inovador. Firmware em C/C++ para ESP32 controlando hardware físico. Um diferencial raro que demonstra domínio em IoT e sistemas embarcados.',
  'PUSHON-FrontEnd': 'App mobile cross-platform em React Native/Expo com 14 telas, autenticação JWT, upload via Cloudinary, geolocalização e sistema completo de grupos e desafios fitness.',
  'FrontAppFitness': 'Aplicativo de produto real com usuário final. Frontend JavaScript desenvolvido em colaboração, focado em fitness, com contexto altamente profissional.',
  'Jogo-da-Dengue_SENAI': 'Jogo educativo 2D com Godot Engine e GDScript. Temática de saúde pública que demonstra aprendizado autodirigido além do currículo web tradicional.',
  'HSaimon.github.io': 'A vitrine profissional. Portfólio focado em estruturação HTML/CSS limpa, sinalizando alta consciência sobre posicionamento de mercado.',
  'Oficina-Análise-de-Dados': 'Exploração de Análise de Dados com Python. Demonstra flexibilidade e exposição a ferramentas de altíssima demanda, além da programação web.',
  'Cadastro_de_produto': 'CRUD clássico em PHP. A base fundamental do backend, demonstrando a compreensão perfeita do ciclo: formulário → servidor → banco de dados.',
  'Demo': 'Exercícios fundamentais de Java. Documenta a base sólida em Programação Orientada a Objetos (POO), paradigma central de arquiteturas modernas.',
  'Proj3': 'O ponto de partida no ecossistema web com HTML e CSS. Um marco histórico da base de criação de layouts e estruturação de páginas.',
  'Calculo_Area': 'Primeiríssimos experimentos lógicos e matemáticos em Java. Seu maior valor é narrativo: ilustra perfeitamente a evolução técnica até as stacks atuais.',
  'Teste': 'Repositório inicial para testes de lógica de programação.'
};

/* Repositórios externos garantidos */
const EXTERNAL_REPOS = [
  { name: 'SistemaDeVendas', language: 'Java', html_url: 'https://github.com/msantt/SistemaDeVendas', stargazers_count: 1, forks_count: 0, topics: ['spring-boot', 'java', 'api-rest'], updated_at: new Date().toISOString() },
  { name: 'SENAI-SITE', language: 'TypeScript', html_url: 'https://github.com/dudurtg2/SENAI-SITE', stargazers_count: 0, forks_count: 0, topics: ['colaboração', 'typescript'], updated_at: new Date().toISOString() },
  { name: 'PUSHON-BackEnd', language: 'Java', html_url: 'https://github.com/msantt/PUSHON-BackEnd', stargazers_count: 1, forks_count: 0, topics: ['spring-boot', 'jwt', 'api-rest'], updated_at: new Date().toISOString() },
  { name: 'PUSHON-FrontEnd', language: 'JavaScript', html_url: 'https://github.com/msantt/PUSHON-FrontEnd', stargazers_count: 1, forks_count: 0, topics: ['react-native', 'expo', 'mobile'], updated_at: new Date().toISOString() },
  { name: 'FrontAppFitness', language: 'JavaScript', html_url: 'https://github.com/msantt/FrontAppFitness', stargazers_count: 0, forks_count: 0, topics: ['produto-real'], updated_at: new Date().toISOString() },
  { name: 'Oficina-Análise-de-Dados', language: 'Python', html_url: 'https://github.com/H-Saimon/Oficina-An-lise-de-Dados', stargazers_count: 0, forks_count: 0, topics: ['dados', 'python'], updated_at: new Date().toISOString() },
  { name: 'Cadastro_de_produto', language: 'PHP', html_url: 'https://github.com/H-Saimon/Cadastro_de_produto', stargazers_count: 0, forks_count: 0, topics: ['crud', 'php'], updated_at: new Date().toISOString() },
  { name: 'Demo', language: 'Java', html_url: 'https://github.com/H-Saimon/Demo', stargazers_count: 0, forks_count: 0, topics: ['poo', 'java'], updated_at: new Date().toISOString() },
  { name: 'Proj3', language: 'HTML', html_url: 'https://github.com/H-Saimon/Proj3', stargazers_count: 0, forks_count: 0, topics: [], updated_at: new Date().toISOString() },
  { name: 'Calculo_Area', language: 'Java', html_url: 'https://github.com/H-Saimon/Calculo_Area', stargazers_count: 0, forks_count: 0, topics: [], updated_at: new Date().toISOString() }
];

const GH_ICON  = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0112 5.8a11.51 11.51 0 013.004.404c2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12 24 5.37 18.63 0 12 0z"/></svg>`;
const EXT_ICON = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

/* ── Cores Únicas e Distintas para cada Linguagem ── */
const LANG_COLORS = {
  'Java':       { bg:'rgba(239, 68, 68, 0.15)',   color:'#ef4444', border:'rgba(239, 68, 68, 0.4)' },
  'Python':     { bg:'rgba(34, 197, 94, 0.15)',   color:'#22c55e', border:'rgba(34, 197, 94, 0.4)' },
  'C#':         { bg:'rgba(217, 70, 239, 0.15)',  color:'#d946ef', border:'rgba(217, 70, 239, 0.4)' },
  'GDScript':   { bg:'rgba(6, 182, 212, 0.15)',   color:'#06b6d4', border:'rgba(6, 182, 212, 0.4)' },
  'TypeScript': { bg:'rgba(59, 130, 246, 0.15)',  color:'#3b82f6', border:'rgba(59, 130, 246, 0.4)' },
  'JavaScript': { bg:'rgba(234, 179, 8, 0.15)',   color:'#eab308', border:'rgba(234, 179, 8, 0.4)' },
  'HTML':       { bg:'rgba(249, 115, 22, 0.15)',  color:'#f97316', border:'rgba(249, 115, 22, 0.4)' },
  'CSS':        { bg:'rgba(37, 99, 235, 0.15)',   color:'#2563eb', border:'rgba(37, 99, 235, 0.4)' },
  'PHP':        { bg:'rgba(139, 92, 246, 0.15)',  color:'#8b5cf6', border:'rgba(139, 92, 246, 0.4)' },
  'C++':        { bg:'rgba(100, 116, 139, 0.15)', color:'#64748b', border:'rgba(100, 116, 139, 0.4)' },
  'IOT':        { bg:'rgba(79, 70, 229, 0.15)',   color:'#4f46e5', border:'rgba(79, 70, 229, 0.4)' },
  'default':    { bg:'rgba(168, 162, 158, 0.15)', color:'#a8a29e', border:'rgba(168, 162, 158, 0.4)' },
};
function langStyle(l) { return LANG_COLORS[l] || LANG_COLORS.default; }

const TOPIC_COLORS = {
  'spring-boot': { bg:'rgba(132, 204, 22, 0.15)', color:'#84cc16', border:'rgba(132, 204, 22, 0.4)' },
  'api-rest':    { bg:'rgba(14, 165, 233, 0.15)', color:'#0ea5e9', border:'rgba(14, 165, 233, 0.4)' },
  'jwt':         { bg:'rgba(236, 72, 153, 0.15)', color:'#ec4899', border:'rgba(236, 72, 153, 0.4)' },
  'react-native':{ bg:'rgba(45, 212, 191, 0.15)', color:'#2dd4bf', border:'rgba(45, 212, 191, 0.4)' },
  'expo':        { bg:'rgba(248, 113, 113, 0.15)',color:'#f87171', border:'rgba(248, 113, 113, 0.4)' },
  'mobile':      { bg:'rgba(168, 162, 158, 0.15)',color:'#a8a29e', border:'rgba(168, 162, 158, 0.4)' },
  'colaboração': { bg:'rgba(251, 146, 60, 0.15)', color:'#fb923c', border:'rgba(251, 146, 60, 0.4)' },
  'dados':       { bg:'rgba(16, 185, 129, 0.15)', color:'#10b981', border:'rgba(16, 185, 129, 0.4)' },
  'crud':        { bg:'rgba(244, 63, 94, 0.15)',  color:'#f43f5e', border:'rgba(244, 63, 94, 0.4)' },
  'poo':         { bg:'rgba(168, 85, 247, 0.15)', color:'#a855f7', border:'rgba(168, 85, 247, 0.4)' },
  'produto-real':{ bg:'rgba(20, 184, 166, 0.15)', color:'#14b8a6', border:'rgba(20, 184, 166, 0.4)' }
};
function getTopicStyle(t) { return TOPIC_COLORS[t.toLowerCase()] || LANG_COLORS.default; }

/* ── Pontuação ── */
function scoreRepo(r) {
  if (HIGHLIGHT_RANKING[r.name] !== undefined) return 1000 + HIGHLIGHT_RANKING[r.name];
  return (r.stargazers_count * 3) + (r.forks_count * 1) +
    (new Date(r.updated_at) > new Date(Date.now() - 120*24*3600*1000) ? 3 : 0);
}

let allRepos = [];
let rvObs    = null;
let activeFilters = new Set(['destaques']); 

/* ── Constrói um card ── */
function buildCard(repo, index) {
  const isHL  = HIGHLIGHT_RANKING[repo.name] !== undefined;
  const card  = document.createElement('div');
  card.className = 'proj-card rv' + (isHL ? ' proj-highlight' : '');
  card.style.transitionDelay = `${(index % 10) * 0.06}s`;

  const rawName     = repo.name || '';
  const displayName = rawName.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  const desc        = CURATED_DESC[rawName] || repo.description || 'Projeto disponível no GitHub.';

  let lang = repo.language || '';
  if (rawName === 'Labirinto_Esp32') lang = 'C++';

  const topics = (repo.topics || [])
    .filter(t => t.toLowerCase() !== lang.toLowerCase())
    .slice(0, 3);

  const url   = repo.html_url || 'https://github.com/HSaimon';
  const demo  = repo.homepage || '';
  const stars = repo.stargazers_count || 0;
  const forks = repo.forks_count || 0;

  function createTag(text, originalStyle) {
    return `<span class="lang-tag" style="background:${originalStyle.bg};color:${originalStyle.color};border-color:${originalStyle.border}; transition: all 0.4s ease;">${text}</span>`;
  }

  const ls = langStyle(lang);
  // ALTERAÇÃO: Aplica a cor do IOT caso a linguagem não esteja definida
  const langTag = lang ? createTag(lang, ls) : createTag('IOT', langStyle('IOT'));
    
  const topTags = topics.map(t => {
    const ts = getTopicStyle(t);
    const formattedT = t.replace(/-/g, ' ');
    return createTag(formattedT, ts); 
  }).join('');
  
  const demoLnk = demo ? `<a href="${demo}" target="_blank" rel="noopener" class="proj-link">${EXT_ICON} Demo</a>` : '';
  const hlBadge = isHL
    ? `<span style="position:absolute;top:-1px;right:1.1rem;font-size:0.6rem;font-weight:800;text-transform:uppercase;letter-spacing:0.07em;background:var(--accent);color:#111;padding:0.15rem 0.55rem;border-radius:0 0 6px 6px">Destaque</span>`
    : '';

  card.innerHTML = `
    ${hlBadge}
    <div class="proj-name">${displayName}</div>
    <div class="proj-desc">${desc}</div>
    <div class="proj-langs">${langTag}${topTags}</div>
    <div class="proj-links">
      <a href="${url}" target="_blank" rel="noopener" class="proj-link">${GH_ICON} Repositório</a>
      ${demoLnk}
      <span style="margin-left:auto;display:flex;align-items:center;gap:0.8rem">
        <span style="display:flex;align-items:center;gap:0.25rem;font-size:0.7rem;color:var(--muted)">${stars}</span>
        <span style="display:flex;align-items:center;gap:0.25rem;font-size:0.7rem;color:var(--muted)">🍴 ${forks}</span>
      </span>
    </div>`;

  card.style.cursor = 'pointer';
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.proj-link')) window.open(url, '_blank', 'noopener,noreferrer');
  });

  return card;
}

/* ── Renderiza o grid ── */
function renderGrid(repos, grid) {
  grid.innerHTML = '';
  if (!repos.length) {
    grid.innerHTML = `<div class="proj-loader"><p>Nenhum repositório encontrado.</p></div>`;
    return;
  }
  repos.forEach((repo, i) => {
    const card = buildCard(repo, i);
    grid.appendChild(card);
    if (rvObs) rvObs.observe(card);
  });
}

function getLanguages(repos) {
  const s = new Set();
  repos.forEach(r => {
    let l = r.language;
    if (r.name === 'Labirinto_Esp32') l = 'C++';
    if (l) s.add(l);
  });
  return [...s].sort();
}

function applyFilter(bar, grid) {
  let filtered;
  if (activeFilters.has('destaques')) {
    filtered = allRepos.filter(r => HIGHLIGHT_RANKING[r.name] !== undefined);
    filtered.sort((a, b) => HIGHLIGHT_RANKING[b.name] - HIGHLIGHT_RANKING[a.name]);
  } else if (activeFilters.has('todos')) {
    filtered = allRepos;
  } else {
    filtered = allRepos.filter(r => {
      let l = r.language;
      if (r.name === 'Labirinto_Esp32') l = 'C++';
      return activeFilters.has(l);
    });
  }
  renderGrid(filtered, grid);
}

function buildFilterBar(grid) {
  document.getElementById('projFilterBar')?.remove();
  const langs = getLanguages(allRepos);
  const hlCount = Object.keys(HIGHLIGHT_RANKING).length;

  const bar = document.createElement('div');
  bar.id = 'projFilterBar';
  bar.style.cssText = 'margin-bottom:1.8rem;display:flex;gap:0.6rem;flex-wrap:wrap;align-items:center;';

  const makeBtn = (text, key) => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.dataset.ft   = 'lang';
    btn.dataset.lang = key;
    btn.className    = 'tl-tab' + (activeFilters.has(key) ? ' active' : '');
    btn.style.cssText = 'font-size:0.75rem;padding:0.35rem 0.8rem; border-radius: 100px; transition: all 0.3s ease;';
    
    const ls = langStyle(key);

    btn.addEventListener('mouseenter', () => {
      if (!activeFilters.has(key) && key !== 'destaques' && key !== 'todos') {
        btn.style.background = ls.bg;
        btn.style.color = ls.color;
        btn.style.borderColor = ls.color;
      }
    });

    btn.addEventListener('mouseleave', () => {
      if (!activeFilters.has(key) && key !== 'destaques' && key !== 'todos') {
        btn.style.background = '';
        btn.style.color = '';
        btn.style.borderColor = '';
      }
    });

    btn.addEventListener('click', () => {
      if (key === 'destaques' || key === 'todos') {
        activeFilters.clear();
        activeFilters.add(key);
      } else {
        activeFilters.delete('destaques');
        activeFilters.delete('todos');
        if (activeFilters.has(key)) activeFilters.delete(key);
        else activeFilters.add(key);
        if (activeFilters.size === 0) activeFilters.add('todos');
      }

      bar.querySelectorAll('[data-ft="lang"]').forEach(b => {
        const bKey = b.dataset.lang;
        if (activeFilters.has(bKey)) {
          b.classList.add('active');
          if (bKey !== 'destaques' && bKey !== 'todos') {
            const bLs = langStyle(bKey);
            b.style.background  = bLs.bg;
            b.style.color       = bLs.color;
            b.style.borderColor = bLs.color;
          }
        } else {
          b.classList.remove('active');
          b.style.background = b.style.color = b.style.borderColor = '';
        }
      });
      applyFilter(bar, grid);
    });

    if (activeFilters.has(key) && key !== 'destaques' && key !== 'todos') {
      btn.style.background  = ls.bg;
      btn.style.color       = ls.color;
      btn.style.borderColor = ls.color;
    }
    return btn;
  };

  bar.appendChild(makeBtn(`Destaques (${hlCount})`, 'destaques'));
  langs.forEach(lang => {
    const count = allRepos.filter(r => {
      let l = r.language;
      if (r.name === 'Labirinto_Esp32') l = 'C++';
      return l === lang;
    }).length;
    if (count > 0) bar.appendChild(makeBtn(`${lang} (${count})`, lang));
  });

  grid.parentElement.insertBefore(bar, grid);
}

async function fetchUserRepos(user) {
  const res = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=100`);
  if (!res.ok) throw new Error(`${user}: ${res.status}`);
  const repos = await res.json();
  return repos.filter(r => !EXCLUDE.has(r.name));
}

function dedupe(repos) {
  const map = new Map();
  repos.forEach(r => {
    const existing = map.get(r.name);
    if (!existing || scoreRepo(r) > scoreRepo(existing)) map.set(r.name, r);
  });
  return [...map.values()];
}

export async function loadProjects(observer) {
  rvObs = observer;
  const grid = document.getElementById('projGrid');
  const verTodosLink = document.querySelector('.proj-head .btn-secondary');
  if (verTodosLink) {
    verTodosLink.addEventListener('click', (e) => {
      e.preventDefault(); 
      activeFilters.clear();
      activeFilters.add('todos'); 
      const bar = document.getElementById('projFilterBar');
      if (bar) {
        bar.querySelectorAll('[data-ft="lang"]').forEach(b => {
          b.classList.remove('active');
          b.style.background = b.style.color = b.style.borderColor = '';
        });
      }
      applyFilter(bar, grid); 
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); 
    });
  }

  try {
    const results = await Promise.allSettled(USERS.map(fetchUserRepos));
    let combined = [...EXTERNAL_REPOS];
    results.forEach(r => { if (r.status === 'fulfilled') combined.push(...r.value); });
    if (!combined.length) throw new Error('Nenhum repo carregado');
    allRepos = dedupe(combined).sort((a, b) => scoreRepo(b) - scoreRepo(a));
    grid.innerHTML = '';
    buildFilterBar(grid);
    applyFilter(document.getElementById('projFilterBar'), grid);
  } catch (err) {
    allRepos = [...EXTERNAL_REPOS];
    grid.innerHTML = '';
    buildFilterBar(grid);
    applyFilter(document.getElementById('projFilterBar'), grid);
  }
}