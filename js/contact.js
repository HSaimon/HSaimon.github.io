/* ===========================
   CONTACT FORM
   =========================== */

const SUCCESS_DURATION_MS = 3000;

export function initContactForm() {
  const form = document.getElementById('ctForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const btn = form.querySelector('.f-submit');
    const originalText = btn.textContent;

    btn.textContent = '✓ Mensagem enviada!';
    btn.style.background = '#16a34a';
    btn.style.color = '#ffffff';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      form.reset();
    }, SUCCESS_DURATION_MS);
  });
}
