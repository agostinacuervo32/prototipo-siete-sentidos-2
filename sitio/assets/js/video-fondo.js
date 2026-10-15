/* ==========================================================================
   VIDEO DE FONDO — videos decorativos sin controles ni sonido
   Se reproducen solo mientras están en pantalla y se pausan con
   prefers-reduced-motion. Se aplica a todos los <video> con autoplay.
   ========================================================================== */

(function () {
  const videos = document.querySelectorAll('video[autoplay]');
  if (!videos.length) return;

  const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)');

  videos.forEach(video => {
    video.muted = true;
    video.controls = false;
    video.addEventListener('contextmenu', e => e.preventDefault());
  });

  const reproducir = video => {
    if (movimientoReducido.matches) return;
    const promesa = video.play();
    if (promesa) promesa.catch(() => {});
  };

  if (movimientoReducido.matches) {
    videos.forEach(video => video.pause());
  }

  if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver(entradas => {
      entradas.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) reproducir(target);
        else target.pause();
      });
    }, { rootMargin: '100px' });

    videos.forEach(video => observador.observe(video));
  }

  movimientoReducido.addEventListener('change', () => {
    videos.forEach(video => (movimientoReducido.matches ? video.pause() : reproducir(video)));
  });
})();
