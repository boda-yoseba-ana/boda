  const fechaBoda = new Date("2026-06-06T16:30:00");

  setInterval(() => {
    const ahora = new Date();
    const diff = fechaBoda - ahora;

    if (diff <= 0) return;

    document.getElementById("dias").textContent =
      Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("horas").textContent =
      Math.floor((diff / (1000 * 60 * 60)) % 24);

    document.getElementById("minutos").textContent =
      Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("segundos").textContent =
      Math.floor((diff / 1000) % 60);
  }, 1000);

  // Código para Navbar Retráctil al hacer scroll
  // Mantén tu código del contador igual arriba...

  // Código para Navbar Retráctil Inteligente
  window.addEventListener('scroll', () => {
      const body = document.body;
      const scrollActual = window.scrollY;

      // Detecta si el usuario ha bajado aunque sea un poco (más de 10px)
      // Esto asegura que en páginas cortas se esconda casi de inmediato al mover el scroll
      if (scrollActual > 10) {
          body.classList.add('scrolled');
      } else {
          body.classList.remove('scrolled');
      }
  });

  

