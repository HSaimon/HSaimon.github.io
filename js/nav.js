/* ===========================
   NAVIGATION BEHAVIOUR
   =========================== */

const nav = document.getElementById('nav');
const backToTopBtn = document.getElementById('backToTop');

// Evento disparado ao rolar a página
window.addEventListener('scroll', () => {
  // Sombra no nav ao rolar
  nav.classList.toggle('scrolled', window.scrollY > 40);
  
  // Mostra ou esconde o botão "Voltar ao Topo"
  if (backToTopBtn) {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }
});

// Ação de clique do botão "Voltar ao Topo"
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Alternar Hamburger e controlar rolagem
const hbg = document.getElementById('hbg');
const nl  = document.getElementById('navLinks');

hbg.addEventListener('click', () => {
  // Alterna a classe 'open' no menu
  nl.classList.toggle('open');
  
  // Verifica se o menu está aberto para desativar ou ativar a rolagem
  if (nl.classList.contains('open')) {
    document.body.style.overflow = 'hidden'; // Desativa a rolagem ao entrar
  } else {
    document.body.style.overflow = ''; // Reativa a rolagem ao sair
  }
});

// Fecha o menu e reativa a rolagem quando qualquer link for clicado
nl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nl.classList.remove('open');
    document.body.style.overflow = ''; // Garante que a rolagem volte ao navegar
  });
});