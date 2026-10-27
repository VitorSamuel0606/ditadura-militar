function abrirPasta(id) {
  // Esconde a sala
  document.getElementById('sala').classList.remove('ativa');

  // Esconde todas as pastas
  document.querySelectorAll('.pasta-conteudo').forEach(el => {
    el.classList.remove('ativa');
  });

  // Mostra a pasta escolhida
  const pasta = document.getElementById(id);
  if (pasta) {
    pasta.classList.add('ativa');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function voltarSala() {
  // Esconde todas as pastas
  document.querySelectorAll('.pasta-conteudo').forEach(el => {
    el.classList.remove('ativa');
  });

  // Mostra a sala
  document.getElementById('sala').classList.add('ativa');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Atalho: tecla ESC volta para a sala
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    voltarSala();
  }
});
