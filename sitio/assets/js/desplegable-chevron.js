/* ==========================================================================
   DESPLEGABLE CHEVRON — chevron-up mientras la lista del select está abierta
   Los navegadores con :open (CSS) lo resuelven solos. En los que no lo tienen
   (por ejemplo, Safari en iPhone) se marca la caja con .is-desplegado al tocar
   el select y se quita al elegir, al salir del campo o al tocar fuera.
   Se aplica a todos los select que tengan un .icono-chevron como hermano.
   ========================================================================== */

(function () {
  if (window.CSS && CSS.supports('selector(:open)')) return;

  const selects = [...document.querySelectorAll('select')]
    .filter(select => select.parentElement.querySelector(':scope > .icono-chevron'));

  function marcar(select, abierto) {
    select.parentElement.classList.toggle('is-desplegado', abierto);
  }

  selects.forEach(select => {
    select.addEventListener('pointerdown', () => {
      marcar(select, !select.parentElement.classList.contains('is-desplegado'));
    });
    select.addEventListener('change', () => marcar(select, false));
    select.addEventListener('blur', () => marcar(select, false));
    select.addEventListener('keydown', evento => {
      if (evento.key === 'Escape' || evento.key === 'Enter' || evento.key === 'Tab') marcar(select, false);
    });
  });

  // Tocar fuera del select cierra la lista sin elegir
  document.addEventListener('pointerdown', evento => {
    selects.forEach(select => {
      if (evento.target !== select) marcar(select, false);
    });
  });
})();
