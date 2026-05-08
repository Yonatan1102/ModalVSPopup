// ── MODAL ──
function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('liveModal')) {
    document.getElementById('liveModal').classList.remove('open');
  }
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('liveModal').classList.remove('open');
    document.getElementById('livePopup').classList.remove('open');
  }
});

// ── POPUP ──
function togglePopup(e) {
  e.stopPropagation();
  document.getElementById('livePopup').classList.toggle('open');
}
document.addEventListener('click', function() {
  document.getElementById('livePopup').classList.remove('open');
});

// ── CODE TABS ──
function showTab(id) {
  document.querySelectorAll('.code-block').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

// ── COPY CODE ──
function copyCode(blockId) {
  const pre = document.getElementById(blockId).querySelector('pre');
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(blockId).querySelector('.copy-btn');
    btn.textContent = '¡Copiado!';
    setTimeout(() => btn.textContent = 'Copiar', 2000);
  });
}

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));
