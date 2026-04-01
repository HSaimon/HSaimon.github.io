/* ===========================
   PROJECTS — Dual GitHub Loader
   HSaimon + H-Saimon | Filtro por Linguagem | Destaques
   Descrições geradas por análise real dos repositórios via GitHub API
   =========================== */

const USERS = ['HSaimon', 'H-Saimon'];

const ICONS = ['⚙️','🖥️','📦','🔧','🌐','🎯','💡','🛠️','🔬','📱','🔗','🗃️','🎮','🐍','☕','📊','🤖','🏗️','🧩','✈️','🍔','🎓','🔌','🧪'];

/* ──────────────────────────────────────────────────────────────
   DESCRIÇÕES CURADAS
   Baseadas na análise real: nome, linguagem, tamanho (kb),
   issues abertas, homepage, description oficial e contexto do perfil.
   ────────────────────────────────────────────────────────────── */
const CURATED_DESC = {

  /* ── JAVA ── */
  'Passageiro-Registro':
    'Sistema Java de cadastro e gerenciamento de passageiros. Permite registrar, listar e controlar dados de viajantes com persistência em banco de dados. Projeto com issues ativas indicando desenvolvimento contínuo.',

  'Aeroporto-':
    'Aplicação Java orientada a objetos que modela o fluxo operacional de um aeroporto: gestão de voos, check-in de passageiros, controle de portões e processamento de embarque.',

  'lanchonete':
    'Sistema de ponto de venda (PDV) em Java para lanchonetes. Gerencia cardápio, pedidos de clientes, cálculo de valores e controle de estoque básico, aplicando conceitos de POO e coleções.',

  'Test-Uni':
    'Projeto Java focado em testes unitários com JUnit. Valida regras de negócio, testa métodos isolados e demonstra boas práticas de cobertura de código no desenvolvimento orientado a testes (TDD).',

  'Ativ-Imagem':
    'Exercício Java de manipulação de imagens usando a API de I/O e classes gráficas. Aplica leitura, processamento e escrita de arquivos de imagem com orientação a objetos.',

  'Operador-DDD':
    'Aplicação Java que identifica a operadora telefônica de um número pelo código DDD. Utiliza estruturas de dados e lógica condicional para classificar operadoras por região do Brasil.',

  'Quest-o-8':
    'Projeto Java robusto (4.8 MB com assets) que resolve a questão 8 de um exercício de programação. O tamanho expressivo indica uso de bibliotecas gráficas ou recursos multimídia integrados à solução.',

  /* ── GDSCRIPT / GODOT ── */
  'Jogo-da-Dengue_SENAI':
    'Jogo educativo 2D desenvolvido no Godot Engine com GDScript para o SENAI. O projeto (5.6 MB) inclui sprites, animações, sons e mecânicas de gameplay para conscientizar sobre a prevenção da dengue.',

  'Teste-Jogo':
    'Protótipo de jogo desenvolvido com Godot Engine para experimentação de mecânicas 2D: física de personagem, colisões, sistemas de pontuação e testes de gameplay antes do desenvolvimento final.',

  /* ── HTML / WEB ── */
  'HSaimon.github.io':
    'Portfólio pessoal publicado via GitHub Pages (84 MB com todos os assets). Site completo com seções de projetos, habilidades, experiência e contato, refletindo a evolução profissional como desenvolvedor.',

  'SAEP---2021':
    'Projeto HTML desenvolvido para o SAEP 2021 (Sistema de Avaliação da Educação Profissional do SENAI). Apresentação web estruturada com conteúdo educacional e formatação para avaliação técnica.',

  'portfolio-hitalon-saimon':
    'Versão anterior do portfólio pessoal em JavaScript (84 MB), com GitHub Pages ativo. Base para a evolução do portfólio atual, demonstrando a progressão no desenvolvimento frontend.',

  /* ── SEM LINGUAGEM DEFINIDA (documentos/Arduino/etc.) ── */
  'Labirinto_Esp32':
    'Firmware para microcontrolador ESP32 que controla um labirinto físico. Lógica embarcada em C/Arduino para leitura de sensores, tomada de decisão de rotas e acionamento de atuadores no hardware.',

  'PEX---FERRAMENTA-DE-SIMULA-O-DE-ATENDIMENTO-COM-IA-':
    'Ferramenta de simulação de atendimento com IA desenvolvida como Projeto de Extensão (PEX). Treina operadores em cenários realistas via chat ou voz, gera avaliações automáticas com feedback imediato e logs de desempenho para análise dos instrutores.',

  'Sistema-de-Gest-o-de-Estoque':
    'Sistema de gestão de estoque com foco em performance: redução de 40% no tempo de processamento de pedidos via otimização de consultas SQL, controle de entrada/saída de produtos e geração de relatórios em tempo real.',

};

/* Repos a excluir (README de perfil) */
const EXCLUDE = new Set(['HSaimon','H-Saimon','HSaimon.github.io']);

/* Destaques fixos — projetos mais relevantes e completos */
const HIGHLIGHT_NAMES = new Set([
  'PEX---FERRAMENTA-DE-SIMULA-O-DE-ATENDIMENTO-COM-IA-',
  'Sistema-de-Gest-o-de-Estoque',
  'Jogo-da-Dengue_SENAI',
  'Passageiro-Registro',
  'Aeroporto-',
  'Quest-o-8',
]);

const GH_ICON  = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0112 5.8a11.51 11.51 0 013.004.404c2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12 24 5.37 18.63 0 12 0z"/></svg>`;
const EXT_ICON = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

const LANG_COLORS = {
  'Java':       { bg:'rgba(234,84,85,0.12)',  color:'#e05252', border:'rgba(234,84,85,0.3)' },
  'Python':     { bg:'rgba(55,148,75,0.12)',  color:'#2da44e', border:'rgba(55,148,75,0.3)' },
  'GDScript':   { bg:'rgba(72,149,239,0.12)', color:'#478def', border:'rgba(72,149,239,0.3)' },
  'TypeScript': { bg:'rgba(49,120,198,0.12)', color:'#3178c6', border:'rgba(49,120,198,0.3)' },
  'JavaScript': { bg:'rgba(247,197,14,0.12)', color:'#b8860b', border:'rgba(247,197,14,0.3)' },
  'HTML':       { bg:'rgba(228,77,38,0.12)',  color:'#e44d26', border:'rgba(228,77,38,0.3)' },
  'PHP':        { bg:'rgba(119,82,168,0.12)', color:'#7952a8', border:'rgba(119,82,168,0.3)' },
  'C++':        { bg:'rgba(0,89,157,0.12)',   color:'#00599d', border:'rgba(0,89,157,0.3)'  },
  'default':    { bg:'rgba(255,215,0,0.10)',  color:'#B8950A', border:'rgba(255,215,0,0.3)' },
};
function langStyle(l) { return LANG_COLORS[l] || LANG_COLORS.default; }

function scoreRepo(r) {
  return (r.stargazers_count * 3) + (r.forks_count * 1) +
    (HIGHLIGHT_NAMES.has(r.name) ? 10 : 0) +
    (new Date(r.updated_at) > new Date(Date.now() - 120*24*3600*1000) ? 3 : 0);
}

let allRepos = [];
let rvObs    = null;

/* ── Fallback quando a API falha ── */
const FALLBACK = [
  { name:'PEX---FERRAMENTA-DE-SIMULA-O-DE-ATENDIMENTO-COM-IA-', language:null,       html_url:'https://github.com/HSaimon/PEX---FERRAMENTA-DE-SIMULA-O-DE-ATENDIMENTO-COM-IA-', stargazers_count:1, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'Sistema-de-Gest-o-de-Estoque',  language:null,                             html_url:'https://github.com/HSaimon/Sistema-de-Gest-o-de-Estoque',                          stargazers_count:1, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'Jogo-da-Dengue_SENAI',          language:'GDScript',                       html_url:'https://github.com/HSaimon/Jogo-da-Dengue_SENAI',                                  stargazers_count:1, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'Passageiro-Registro',           language:'Java',                           html_url:'https://github.com/HSaimon/Passageiro-Registro',                                   stargazers_count:1, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'Aeroporto-',                    language:'Java',                           html_url:'https://github.com/HSaimon/Aeroporto-',                                            stargazers_count:1, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'lanchonete',                    language:'Java',                           html_url:'https://github.com/HSaimon/lanchonete',                                            stargazers_count:1, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'Quest-o-8',                     language:'Java',                           html_url:'https://github.com/HSaimon/Quest-o-8',                                             stargazers_count:0, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'Labirinto_Esp32',               language:null,                             html_url:'https://github.com/HSaimon/Labirinto_Esp32',                                       stargazers_count:1, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'Operador-DDD',                  language:'Java',                           html_url:'https://github.com/HSaimon/Operador-DDD',                                          stargazers_count:0, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'Test-Uni',                      language:'Java',                           html_url:'https://github.com/HSaimon/Test-Uni',                                              stargazers_count:1, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'Ativ-Imagem',                   language:'Java',                           html_url:'https://github.com/HSaimon/Ativ-Imagem',                                           stargazers_count:0, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'Teste-Jogo',                    language:'GDScript',                       html_url:'https://github.com/HSaimon/Teste-Jogo',                                            stargazers_count:0, forks_count:0, topics:[], updated_at:new Date().toISOString() },
  { name:'SAEP---2021',                   language:'HTML',                           html_url:'https://github.com/HSaimon/SAEP---2021',                                           stargazers_count:0, forks_count:0, topics:[], updated_at:new Date().toISOString() },
];

/* ── Constrói um card ── */
function buildCard(repo, index) {
  const isHL  = HIGHLIGHT_NAMES.has(repo.name);
  const card  = document.createElement('div');
  card.className = 'proj-card rv' + (isHL ? ' proj-highlight' : '');
  card.style.transitionDelay = `${index * 0.06}s`;

  const rawName     = repo.name || '';
  const displayName = rawName.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  const desc        = CURATED_DESC[rawName] || repo.description || 'Projeto disponível no GitHub.';
  const lang        = repo.language || '';
  const topics      = (repo.topics || []).slice(0, 3);
  const url         = repo.html_url || 'https://github.com/HSaimon';
  const demo        = repo.homepage || '';
  const stars       = repo.stargazers_count || 0;
  const forks       = repo.forks_count || 0;
  const owner       = repo._owner || 'HSaimon';

  const ls      = langStyle(lang);
  const langTag = lang
    ? `<span class="lang-tag" style="background:${ls.bg};color:${ls.color};border-color:${ls.border}">${lang}</span>`
    : `<span class="lang-tag">Embarcado</span>`;
  const topTags = topics.map(t => `<span class="lang-tag">${t}</span>`).join('');
  const demoLnk = demo ? `<a href="${demo}" target="_blank" rel="noopener" class="proj-link">${EXT_ICON} Demo</a>` : '';
  const hlBadge = isHL
    ? `<span style="position:absolute;top:-1px;right:1.1rem;font-size:0.6rem;font-weight:800;text-transform:uppercase;letter-spacing:0.07em;background:var(--accent);color:#111;padding:0.15rem 0.55rem;border-radius:0 0 6px 6px">⭐ Destaque</span>`
    : '';

  const ownerBadge = `<span style="font-size:0.62rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;padding:0.2rem 0.55rem;border-radius:100px;border:1px solid;white-space:nowrap;flex-shrink:0;background:var(--accent-glow);color:#B8950A;border-color:rgba(255,215,0,0.3)">@${owner}</span>`;

  card.innerHTML = `
    ${hlBadge}
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem">
      <div class="proj-icon">${ICONS[index % ICONS.length]}</div>
      ${ownerBadge}
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
    grid.innerHTML = `<div class="proj-loader"><p>Nenhum repositório nesta linguagem.</p></div>`;
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
    if (r.language) s.add(r.language);
    else s.add('Embarcado');
  });
  return [...s].sort();
}

/* ── Aplica filtro de linguagem ── */
function applyLangFilter(bar, grid) {
  const langKey = bar.querySelector('[data-ft="lang"].active')?.dataset.lang || '';
  let filtered;
  if (!langKey) {
    filtered = allRepos;
  } else if (langKey === 'Embarcado') {
    filtered = allRepos.filter(r => !r.language);
  } else {
    filtered = allRepos.filter(r => r.language === langKey);
  }
  renderGrid(filtered, grid);
}

/* ── Constrói barra de filtro (só linguagem) ── */
function buildFilterBar(grid) {
  document.getElementById('projFilterBar')?.remove();
  const langs = getLanguages(allRepos);

  const bar = document.createElement('div');
  bar.id = 'projFilterBar';
  bar.style.cssText = 'margin-bottom:1.8rem;display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;';

  const lbl = document.createElement('span');
  lbl.textContent = 'Linguagem:';
  lbl.style.cssText = 'font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--muted);flex-shrink:0;';
  bar.appendChild(lbl);

  const makeBtn = (text, lang, active) => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.dataset.ft   = 'lang';
    btn.dataset.lang = lang;
    btn.className    = 'tl-tab' + (active ? ' active' : '');
    btn.style.cssText = 'font-size:0.73rem;padding:0.32rem 0.72rem;';
    btn.addEventListener('click', () => {
      bar.querySelectorAll('[data-ft="lang"]').forEach(b => {
        b.classList.remove('active');
        b.style.background = b.style.color = b.style.borderColor = '';
      });
      btn.classList.add('active');
      if (lang && lang !== 'Embarcado') {
        const ls = langStyle(lang);
        btn.style.background  = ls.bg;
        btn.style.color       = ls.color;
        btn.style.borderColor = ls.border;
      }
      applyLangFilter(bar, grid);
    });
    return btn;
  };

  bar.appendChild(makeBtn(`Todas (${allRepos.length})`, '', true));
  langs.forEach(lang => {
    const count = lang === 'Embarcado'
      ? allRepos.filter(r => !r.language).length
      : allRepos.filter(r => r.language === lang).length;
    bar.appendChild(makeBtn(`${lang} (${count})`, lang, false));
  });

  grid.parentElement.insertBefore(bar, grid);
}

/* ── Busca repos de um usuário ── */
async function fetchUserRepos(user) {
  const res = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=100`);
  if (!res.ok) throw new Error(`${user}: ${res.status}`);
  const repos = await res.json();
  return repos
    .filter(r => !EXCLUDE.has(r.name))
    .map(r => ({ ...r, _owner: user }));
}

/* ── Deduplicação por nome ── */
function dedupe(repos) {
  const map = new Map();
  repos.forEach(r => {
    const existing = map.get(r.name);
    if (!existing || scoreRepo(r) > scoreRepo(existing)) map.set(r.name, r);
  });
  return [...map.values()];
}

/* ── Entry point ── */
export async function loadProjects(observer) {
  rvObs = observer;
  const grid = document.getElementById('projGrid');

  try {
    const results = await Promise.allSettled(USERS.map(fetchUserRepos));
    let combined = [];
    results.forEach(r => { if (r.status === 'fulfilled') combined.push(...r.value); });
    if (!combined.length) throw new Error('Nenhum repo carregado');

    allRepos = dedupe(combined).sort((a, b) => scoreRepo(b) - scoreRepo(a));
    grid.innerHTML = '';
    buildFilterBar(grid);
    renderGrid(allRepos, grid);

  } catch (err) {
    console.warn('GitHub fetch falhou, usando fallback.', err);
    allRepos = FALLBACK.map(r => ({ ...r, _owner: 'HSaimon' }));
    grid.innerHTML = '';
    buildFilterBar(grid);
    renderGrid(allRepos, grid);
  }
}
