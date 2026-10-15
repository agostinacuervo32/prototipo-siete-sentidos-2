/* ==========================================================================
   CARRUSEL — loop infinito de cards
   En reposo avanza solo y se puede arrastrar. Al tocar una flecha se frena
   y pasa card por card, dejando cada card completa a la vista.
   Las flechas se vinculan con aria-controls="<id de la pista>".
   Se aplica a todos los elementos con la clase .carrusel.
   ========================================================================== */

(function () {
  const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const VELOCIDAD = 35;        // px por segundo en modo automático
  const DURACION_PASO = 450;   // ms de la animación de cada flecha

  const suavizar = t => 1 - Math.pow(1 - t, 3);

  document.querySelectorAll('.carrusel').forEach(carrusel => {
    const pista = carrusel.querySelector('.carrusel__pista');
    const originales = [...pista.children];
    if (!pista.id || originales.length < 2) return;

    const anterior = document.querySelector(`.carrusel__flecha--anterior[aria-controls="${pista.id}"]`);
    const siguiente = document.querySelector(`.carrusel__flecha--siguiente[aria-controls="${pista.id}"]`);

    // Copias antes y después del set original para que el loop no tenga cortes
    const copiar = card => {
      const copia = card.cloneNode(true);
      copia.setAttribute('aria-hidden', 'true');
      copia.inert = true;
      return copia;
    };
    pista.prepend(...originales.map(copiar));
    pista.append(...originales.map(copiar));

    let paso = 0;          // ancho de una card + separación
    let anchoSet = 0;      // ancho de todas las cards originales
    let offset = 0;
    let modo = movimientoReducido ? 'manual' : 'auto';
    let animacion = null;  // { desde, hasta, inicio }
    let arrastre = null;   // { x, offset }
    let enPantalla = true, conCursor = false, conFoco = false;
    let ultimo = performance.now();

    function medir() {
      const cards = pista.children;
      const pasoAnterior = paso;
      paso = cards[1].offsetLeft - cards[0].offsetLeft;
      anchoSet = paso * originales.length;
      offset = pasoAnterior ? (offset / pasoAnterior) * paso : -anchoSet;
      normalizar();
      aplicar();
    }

    // Mantiene el offset dentro del set del medio (los saltos son invisibles)
    function normalizar() {
      if (!anchoSet) return 0;
      let corrimiento = 0;
      while (offset > -anchoSet * 0.5) { offset -= anchoSet; corrimiento -= anchoSet; }
      while (offset < -anchoSet * 1.5) { offset += anchoSet; corrimiento += anchoSet; }
      return corrimiento;
    }

    function aplicar() {
      pista.style.transform = `translate3d(${offset}px, 0, 0)`;
    }

    function animarHasta(destino) {
      animacion = { desde: offset, hasta: destino, inicio: performance.now() };
    }

    function irA(direccion) {
      modo = 'manual';
      const base = animacion ? animacion.hasta : Math.round(offset / paso) * paso;
      animarHasta(base - direccion * paso);
    }

    function cuadro(ahora) {
      const dt = Math.min((ahora - ultimo) / 1000, 0.1);
      ultimo = ahora;

      if (animacion) {
        // El tiempo del cuadro puede ser apenas anterior al clic: se acota a 0–1
        const t = Math.min(Math.max((ahora - animacion.inicio) / DURACION_PASO, 0), 1);
        offset = animacion.desde + (animacion.hasta - animacion.desde) * suavizar(t);
        if (t === 1) {
          animacion = null;
          normalizar();
        }
        aplicar();
      } else if (modo === 'auto' && !arrastre && enPantalla && !conCursor && !conFoco) {
        offset -= VELOCIDAD * dt;
        normalizar();
        aplicar();
      }

      requestAnimationFrame(cuadro);
    }

    /* ---------- Flechas: frenan el modo automático ---------- */
    if (anterior) anterior.addEventListener('click', () => irA(-1));
    if (siguiente) siguiente.addEventListener('click', () => irA(1));

    /* ---------- Arrastre (mouse y táctil) ---------- */
    carrusel.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      animacion = null;
      arrastre = { x: e.clientX, offset };
      carrusel.setPointerCapture(e.pointerId);
    });

    carrusel.addEventListener('pointermove', e => {
      if (!arrastre) return;
      offset = arrastre.offset + (e.clientX - arrastre.x);
      arrastre.offset += normalizar();
      aplicar();
    });

    const soltar = () => {
      if (!arrastre) return;
      arrastre = null;
      // En modo manual se acomoda para dejar una card completa a la vista
      if (modo === 'manual') animarHasta(Math.round(offset / paso) * paso);
    };
    carrusel.addEventListener('pointerup', soltar);
    carrusel.addEventListener('pointercancel', soltar);

    /* ---------- Pausas: cursor encima, foco por teclado o fuera de pantalla ---------- */
    carrusel.addEventListener('mouseenter', () => { conCursor = true; });
    carrusel.addEventListener('mouseleave', () => { conCursor = false; });
    carrusel.addEventListener('focusin', () => { conFoco = true; });
    carrusel.addEventListener('focusout', () => { conFoco = false; });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entrada]) => { enPantalla = entrada.isIntersecting; })
        .observe(carrusel);
    }

    window.addEventListener('resize', medir);
    medir();
    requestAnimationFrame(cuadro);
  });
})();
