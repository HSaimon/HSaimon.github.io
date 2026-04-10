/* ===========================
   PROJECTS
   =========================== */

const USERS = ['HSaimon', 'H-Saimon'];

const EXCLUDE = new Set(['HSaimon', 'H-Saimon']);

const ICONS = ['⚙️','🖥️','📦','🔧','🌐','🎯','💡','🛠️','🔬','📱','🔗','🗃️','🎮','🐍','☕','📊','🤖','🏗️','🧩','✈️'];

/* Ícone específico por projeto — substitui o fallback genérico por índice */
const PROJECT_ICONS = {
  'SistemaDeVendas':         '🛒',
  'SENAI-SITE':              '🌐',
  'PUSHON-BackEnd':          '⚙️',
  'Labirinto_Esp32':         '🤖',
  'PUSHON-FrontEnd':         '📱',
  'FrontAppFitness':         '💪',
  'Jogo-da-Dengue_SENAI':   '🎮',
  'HSaimon.github.io':       '🖥️',
  'Oficina-Análise-de-Dados':'📊',
  'Cadastro_de_produto':     '📦',
  'Demo':                    '☕',
  'Proj3':                   '🌐',
  'Calculo_Area':            '🧮',
  'Teste':                   '🔬',
};

/* ── Top 10 do ranking definitivo (notas de 8.7 a 4.8) ──
   Valor maior = aparece primeiro nos Destaques.           */
const HIGHLIGHT_RANKING = {
  'SistemaDeVendas':         100, // 1º — nota 8.7
  'SENAI-SITE':               95, // 2º — nota 8.5
  'PUSHON-BackEnd':           90, // 3º — nota 8.3
  'Labirinto_Esp32':          85, // 4º — nota 8.1
  'PUSHON-FrontEnd':          80, // 5º — nota 7.9
  'FrontAppFitness':          75, // 6º — nota 7.6
  'Jogo-da-Dengue_SENAI':    70, // 7º — nota 7.2
  'HSaimon.github.io':        65, // 8º — nota 6.5
  'Oficina-Análise-de-Dados': 60, // 9º — nota 5.8
  'Cadastro_de_produto':      55, // 10º — nota 4.8
};

const CURATED_DESC = {
  'SistemaDeVendas':
    'API REST completa em Java 17 + Spring Boot 3.4. Sistema de vendas com 10 entidades, fidelidade em 5 categorias calculadas automaticamente, controle de estoque, pedidos, pagamentos e autenticação Spring Security.',
  'SENAI-SITE':
    'Projeto de maior peso técnico do portfólio. TypeScript com framework web moderno. Participação em código tipado e colaborativo, elevando o nível para padrões de mercado.',
  'PUSHON-BackEnd':
    'Backend robusto em Java + Spring Boot com JWT multi-role. Sistema de apostas fitness com ranking automático por check-ins e premiação automática para os 3 primeiros colocados.',
  'Labirinto_Esp32':
    'O projeto mais inovador. Firmware em C/C++ para ESP32 controlando hardware físico. Um diferencial raro que demonstra domínio em IoT e sistemas embarcados.',
  'PUSHON-FrontEnd':
    'App mobile cross-platform em React Native/Expo com 14 telas, autenticação JWT, upload via Cloudinary, geolocalização e sistema completo de grupos e desafios fitness.',
  'FrontAppFitness':
    'Aplicativo de produto real com usuário final. Frontend JavaScript desenvolvido em colaboração, focado em fitness, com contexto altamente profissional.',
  'Jogo-da-Dengue_SENAI':
    'Jogo educativo 2D com Godot Engine e GDScript. Temática de saúde pública que demonstra aprendizado autodirigido além do currículo web tradicional.',
  'HSaimon.github.io':
    'A vitrine profissional. Portfólio focado em estruturação HTML/CSS limpa, sinalizando alta consciência sobre posicionamento de mercado.',
  'Oficina-Análise-de-Dados':
    'Exploração de Análise de Dados com Python. Demonstra flexibilidade e exposição a ferramentas de altíssima demanda, além da programação web.',
  'Cadastro_de_produto':
    'CRUD clássico em PHP. A base fundamental do backend, demonstrando a compreensão perfeita do ciclo: formulário → servidor → banco de dados.',
  'Demo':
    'Exercícios fundamentais de Java. Documenta a base sólida em Programação Orientada a Objetos (POO), paradigma central de arquiteturas modernas.',
  'Proj3':
    'O ponto de partida no ecossistema web com HTML e CSS. Um marco histórico da base de criação de layouts e estruturação de páginas.',
  'Calculo_Area':
    'Primeiríssimos experimentos lógicos e matemáticos em Java. Seu maior valor é narrativo: ilustra perfeitamente a evolução técnica até as stacks atuais.',
  'Teste':
    'Repositório inicial para testes de lógica de programação.',
};

/* Repositórios externos/colaborativos garantidos no pool.
   Incluem os top-10 que não aparecem nas contas HSaimon / H-Saimon. */
const EXTERNAL_REPOS = [
  {
    name: 'SistemaDeVendas', language: 'Java',
    html_url: 'https://github.com/msantt/SistemaDeVendas',
    stargazers_count: 1, forks_count: 0,
    topics: ['spring-boot', 'java', 'api-rest'],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'SENAI-SITE', language: 'TypeScript',
    html_url: 'https://github.com/dudurtg2/SENAI-SITE',
    stargazers_count: 0, forks_count: 0,
    topics: ['colaboração', 'typescript'],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'PUSHON-BackEnd', language: 'Java',
    html_url: 'https://github.com/msantt/PUSHON-BackEnd',
    stargazers_count: 1, forks_count: 0,
    topics: ['spring-boot', 'jwt', 'api-rest'],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'PUSHON-FrontEnd', language: 'JavaScript',
    html_url: 'https://github.com/msantt/PUSHON-FrontEnd',
    stargazers_count: 1, forks_count: 0,
    topics: ['react-native', 'expo', 'mobile'],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'FrontAppFitness', language: 'JavaScript',
    html_url: 'https://github.com/msantt/FrontAppFitness',
    stargazers_count: 0, forks_count: 0,
    topics: ['produto-real'],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'Oficina-Análise-de-Dados', language: 'Python',
    html_url: 'https://github.com/H-Saimon/Oficina-An-lise-de-Dados',
    stargazers_count: 0, forks_count: 0,
    topics: ['dados', 'python'],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'Cadastro_de_produto', language: 'PHP',
    html_url: 'https://github.com/H-Saimon/Cadastro_de_produto',
    stargazers_count: 0, forks_count: 0,
    topics: ['crud', 'php'],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'Demo', language: 'Java',
    html_url: 'https://github.com/H-Saimon/Demo',
    stargazers_count: 0, forks_count: 0,
    topics: ['poo', 'java'],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'Proj3', language: 'HTML',
    html_url: 'https://github.com/H-Saimon/Proj3',
    stargazers_count: 0, forks_count: 0,
    topics: [],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'Calculo_Area', language: 'Java',
    html_url: 'https://github.com/H-Saimon/Calculo_Area',
    stargazers_count: 0, forks_count: 0,
    topics: [],
    updated_at: new Date().toISOString(),
  },
];

const GH_ICON  = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0112 5.8a11.51 11.51 0 013.004.404c2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12 24 5.37 18.63 0 12 0z"/></svg>`;
const EXT_ICON = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

const LANG_COLORS = {
  'Java':       { bg:'rgba(234,84,85,0.12)',  color:'#e05252', border:'rgba(234,84,85,0.3)' },
  'Python':     { bg:'rgba(55,148,75,0.12)',  color:'#2da44e', border:'rgba(55,148,75,0.3)' },
  'C#':         { bg:'rgba(155,79,150,0.12)', color:'#9b4f96', border:'rgba(155,79,150,0.3)' },
  'GDScript':   { bg:'rgba(72,149,239,0.12)', color:'#478def', border:'rgba(72,149,239,0.3)' },
  'TypeScript': { bg:'rgba(49,120,198,0.12)', color:'#3178c6', border:'rgba(49,120,198,0.3)' },
  'JavaScript': { bg:'rgba(247,197,14,0.12)', color:'#b8860b', border:'rgba(247,197,14,0.3)' },
  'HTML':       { bg:'rgba(228,77,38,0.12)',  color:'#e44d26', border:'rgba(228,77,38,0.3)' },
  'PHP':        { bg:'rgba(119,82,168,0.12)', color:'#7952a8', border:'rgba(119,82,168,0.3)' },
  'C++':        { bg:'rgba(0,89,157,0.12)',   color:'#00599d', border:'rgba(0,89,157,0.3)'  },
  'default':    { bg:'rgba(255,215,0,0.10)',  color:'#B8950A', border:'rgba(255,215,0,0.3)' },
};
function langStyle(l) { return LANG_COLORS[l] || LANG_COLORS.default; }

/* ── Sistema de Pontuação ── */
function scoreRepo(r) {
  if (HIGHLIGHT_RANKING[r.name] !== undefined) {
    return 1000 + HIGHLIGHT_RANKING[r.name];
  }
  return (r.stargazers_count * 3) + (r.forks_count * 1) +
    (new Date(r.updated_at) > new Date(Date.now() - 120*24*3600*1000) ? 3 : 0);
}

let allRepos = [];
let rvObs    = null;

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

  const topics      = (repo.topics || []).slice(0, 3);
  const url         = repo.html_url || 'https://github.com/HSaimon';
  const demo        = repo.homepage || '';
  const stars       = repo.stargazers_count || 0;
  const forks       = repo.forks_count || 0;

  /* Ícone: usa mapeamento específico quando disponível */
  const icon = PROJECT_ICONS[rawName] || ICONS[index % ICONS.length];

  const ls      = langStyle(lang);
  const langTag = lang
    ? `<span class="lang-tag" style="background:${ls.bg};color:${ls.color};border-color:${ls.border}">${lang}</span>`
    : `<span class="lang-tag">Embarcado</span>`;
  const topTags = topics.map(t => `<span class="lang-tag">${t}</span>`).join('');
  const demoLnk = demo ? `<a href="${demo}" target="_blank" rel="noopener" class="proj-link">${EXT_ICON} Demo</a>` : '';
  const hlBadge = isHL
    ? `<span style="position:absolute;top:-1px;right:1.1rem;font-size:0.6rem;font-weight:800;text-transform:uppercase;letter-spacing:0.07em;background:var(--accent);color:#111;padding:0.15rem 0.55rem;border-radius:0 0 6px 6px">⭐</span>`
    : '';

  card.innerHTML = `
    ${hlBadge}
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem">
      <div class="proj-icon">${icon}</div>
    </div>
    <div class="proj-name">${displayName}</div>
    <div class="proj-desc">${desc}</div>
    <div class="proj-langs">${langTag}${topTags}</div>
    <div class="proj-links">
      <a href="${url}" target="_blank" rel="noopener" class="proj-link">${GH_ICON} Repositório</a>
      ${demoLnk}
      <span style="margin-left:auto;display:flex;align-items:center;gap:0.8rem">
        <span style="display:flex;align-items:center;gap:0.25rem;font-size:0.7rem;color:var(--muted)">⭐ ${stars}</span>
        <span style="display:flex;align-items:center;gap:0.25rem;font-size:0.7rem;color:var(--muted)">🍴 ${forks}</span>
      </span>
    </div>`;
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

/* ── Linguagens únicas ── */
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
  const filterKey = bar.querySelector('[data-ft="lang"].active')?.dataset.lang || 'destaques';
  let filtered;

  if (filterKey === 'destaques') {
    filtered = allRepos.filter(r => HIGHLIGHT_RANKING[r.name] !== undefined);
    filtered.sort((a, b) => HIGHLIGHT_RANKING[b.name] - HIGHLIGHT_RANKING[a.name]);
  } else if (filterKey === 'todos') {
    filtered = allRepos;
  } else {
    filtered = allRepos.filter(r => {
      let l = r.language;
      if (r.name === 'Labirinto_Esp32') l = 'C++';
      return l === filterKey;
    });
  }
  renderGrid(filtered, grid);
}

/* ── Barra de filtro ── */
function buildFilterBar(grid) {
  document.getElementById('projFilterBar')?.remove();
  const langs = getLanguages(allRepos);
  const hlCount = Object.keys(HIGHLIGHT_RANKING).length;

  const bar = document.createElement('div');
  bar.id = 'projFilterBar';
  bar.style.cssText = 'margin-bottom:1.8rem;display:flex;gap:0.6rem;flex-wrap:wrap;align-items:center;';

  const makeBtn = (text, key, active) => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.dataset.ft   = 'lang';
    btn.dataset.lang = key;
    btn.className    = 'tl-tab' + (active ? ' active' : '');
    btn.style.cssText = 'font-size:0.75rem;padding:0.35rem 0.8rem;';
    btn.addEventListener('click', () => {
      bar.querySelectorAll('[data-ft="lang"]').forEach(b => {
        b.classList.remove('active');
        b.style.background = b.style.color = b.style.borderColor = '';
      });
      btn.classList.add('active');

      if (key !== 'destaques' && key !== 'todos') {
        const ls = langStyle(key);
        btn.style.background  = ls.bg;
        btn.style.color       = ls.color;
        btn.style.borderColor = ls.color;
      }
      applyFilter(bar, grid);
    });
    return btn;
  };

  bar.appendChild(makeBtn(`⭐ Destaques (${hlCount})`, 'destaques', true));
  bar.appendChild(makeBtn(`Todos (${allRepos.length})`, 'todos', false));

  langs.forEach(lang => {
    const count = allRepos.filter(r => {
      let l = r.language;
      if (r.name === 'Labirinto_Esp32') l = 'C++';
      return l === lang;
    }).length;
    if (count > 0) bar.appendChild(makeBtn(`${lang} (${count})`, lang, false));
  });

  grid.parentElement.insertBefore(bar, grid);
}

/* ── Busca repos das contas via API GitHub ── */
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
    console.warn('GitHub fetch falhou, usando apenas os projetos fixos.', err);
    allRepos = [...EXTERNAL_REPOS];
    grid.innerHTML = '';

    buildFilterBar(grid);
    applyFilter(document.getElementById('projFilterBar'), grid);
  }
}