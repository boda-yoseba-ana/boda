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
window.addEventListener('scroll', () => {
    const body = document.body;
    // Si el usuario se ha desplazado más de 100 píxeles
    if (window.scrollY > 100) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});