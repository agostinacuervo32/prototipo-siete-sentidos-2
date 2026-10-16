/* ==========================================================================
   NOTICIAS — orden y paginación de las entradas
   Las noticias viven en el HTML (.card-noticia con su <time datetime>).
   Este script solo las ordena según el desplegable y muestra de a
   NOTICIAS_POR_PAGINA, armando los números de la paginación.
   Sin JS se ven todas.
   ========================================================================== */

(function () {
  const NOTICIAS_POR_PAGINA = 6;

  document.querySelectorAll('[data-noticias]').forEach(seccion => {
    const lista = seccion.querySelector('.noticias__lista');
    const desplegable = seccion.querySelector('.noticias__desplegable');
    const paginacion = seccion.querySelector('.paginacion');
    const numeros = paginacion.querySelector('.paginacion__numeros');
    const anterior = paginacion.querySelector('.paginacion__anterior');
    const siguiente = paginacion.querySelector('.paginacion__siguiente');
    const noticias = [...lista.querySelectorAll('.card-noticia')];
    const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)');

    const fecha = noticia => noticia.querySelector('time').getAttribute('datetime');
    const totalPaginas = Math.ceil(noticias.length / NOTICIAS_POR_PAGINA);
    let pagina = 1;

    // 1 … 4 5 6 … 12: siempre la primera, la última y las vecinas de la actual
    function paginasVisibles() {
      if (totalPaginas <= 7) return Array.from({ length: totalPaginas }, (_, i) => i + 1);
      const visibles = new Set([1, totalPaginas, pagina - 1, pagina, pagina + 1]);
      if (pagina <= 3) [2, 3, 4].forEach(n => visibles.add(n));
      if (pagina >= totalPaginas - 2) [totalPaginas - 3, totalPaginas - 2, totalPaginas - 1].forEach(n => visibles.add(n));
      return [...visibles].filter(n => n >= 1 && n <= totalPaginas).sort((a, b) => a - b);
    }

    function dibujarNumeros() {
      numeros.replaceChildren();
      let previa = 0;
      paginasVisibles().forEach(n => {
        if (n - previa > 1) {
          const puntos = document.createElement('li');
          puntos.className = 'paginacion__puntos';
          puntos.setAttribute('aria-hidden', 'true');
          puntos.textContent = '…';
          numeros.append(puntos);
        }
        const item = document.createElement('li');
        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'paginacion__numero';
        boton.textContent = n;
        boton.setAttribute('aria-label', `Página ${n}`);
        if (n === pagina) boton.setAttribute('aria-current', 'page');
        boton.addEventListener('click', () => irA(n));
        item.append(boton);
        numeros.append(item);
        previa = n;
      });
    }

    function mostrar() {
      const desde = (pagina - 1) * NOTICIAS_POR_PAGINA;
      [...lista.children].forEach((noticia, i) => {
        noticia.hidden = i < desde || i >= desde + NOTICIAS_POR_PAGINA;
      });
      anterior.disabled = pagina === 1;
      siguiente.disabled = pagina === totalPaginas;
      dibujarNumeros();
    }

    function irA(n) {
      pagina = Math.min(Math.max(n, 1), totalPaginas);
      mostrar();
      seccion.scrollIntoView({ behavior: movimientoReducido.matches ? 'auto' : 'smooth', block: 'start' });
    }

    function ordenar() {
      const recientesPrimero = desplegable.value === 'recientes';
      noticias
        .sort((a, b) => (recientesPrimero ? fecha(b).localeCompare(fecha(a)) : fecha(a).localeCompare(fecha(b))))
        .forEach(noticia => lista.append(noticia));
      pagina = 1;
      mostrar();
    }

    paginacion.hidden = totalPaginas < 2;
    anterior.addEventListener('click', () => irA(pagina - 1));
    siguiente.addEventListener('click', () => irA(pagina + 1));
    desplegable.addEventListener('change', ordenar);
    ordenar();
  });
})();
