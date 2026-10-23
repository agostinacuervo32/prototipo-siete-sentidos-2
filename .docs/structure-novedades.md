# Estructura de la página Novedades (Fundación Siete Sentidos — Sitio institucional)

*Este documento define la "receta" de secciones de la página **Novedades** (`sitio/novedades/index.html`, URL `/novedades/`). Según `brief.md`, el sitio concentra lo institucional y eventual (talleres, campañas, búsquedas) e Instagram sigue para el contenido cotidiano. La página sigue ese recorrido: qué hay de nuevo en la fundación, qué talleres se pueden hacer ahora, qué noticias hay y dónde seguir a la fundación día a día. Se respeta este flujo de arriba hacia abajo, sin agregar, quitar ni reordenar secciones.*

*El tono, el vocabulario y las reglas de copy están en `contexto.md`. Lo visual sale de `style.md`. La distribución de escritorio y móvil de cada sección sale de las **capturas de Figma** que se van a enviar; hasta tenerlas, queda PENDIENTE.*

**Cómo leer este documento**
- **APROBADO:** texto que ya está aprobado en `contexto.md` o en otra página y se copia tal cual.
- **PROVISORIO:** texto armado a partir de `contexto.md`, `brief.md` y `keywords.md` para poder armar la página. Se usa en el código, pero **se va a corregir**: no tomarlo como definitivo.
- **PENDIENTE:** dato que falta. No se completa con supuestos.
- **A DEFINIR:** decisión de diseño o de contenido que todavía no está tomada.
- **REUTILIZA:** componente que ya existe (mismo marcado, mismas clases y mismo JS).

---

0. **Header y Footer (comunes)**
   - **REQUERIMIENTO OBLIGATORIO:** el header y el footer son exactamente iguales en todas las páginas (Inicio y páginas internas), sin modificaciones. Se copian del Inicio (`<!-- HEADER -->` … `<!-- /HEADER -->` y `<!-- FOOTER -->` … `<!-- /FOOTER -->`).
   - No se marca el link de la página actual ni se cambia ningún texto, link o clase. Las rutas empiezan con `/`, así que el bloque es idéntico en cualquier carpeta.
   - Si cambia algo del header o del footer, se actualiza en todos los `index.html`.

1. **Hero introductorio**
   - **Distribución (captura `imagenes de referencia/Captura de pantalla 2026-10-16 110515.png`):** solo texto, centrado, sin composición de fotos (`hero hero--pagina hero--centrado`). Debajo, pegadas, las dos cards de talleres (sección 2).
   - **Contenido (PROVISORIO):**
     - Antetítulo en mayúsculas: "NOVEDADES".
     - H1: "Talleres y novedades de Siete Sentidos".
     - Bajada: "Enterate de los talleres para chicos y adultos, las campañas y lo que pasa en la fundación."
     - Doble CTA (de la captura): "Ver galería de talleres" (principal, ancla a `#galeria-talleres`, una galería más abajo en la página; PENDIENTE de capturas) y "Ver noticias" (secundario, ancla a `#noticias`).
   - **REQUERIMIENTO OBLIGATORIO:** en el primer vistazo tiene que quedar claro que acá están los talleres vigentes y las novedades de la fundación.

2. **Talleres vigentes (jóvenes y adultos)**
   - **Separación por público (captura):** dos cards, "Talleres para jóvenes" y "Talleres para adultos". **REUTILIZA** las cards con video del Inicio (`servicios`, `card-servicio`), con la misma altura: en escritorio con cursor, la card elegida crece y se despega la ventana con la info; en móvil, la info visible y el video abajo.
   - **Medios:** jóvenes, video `sitio/assets/videos/WhatsApp Video 2026-10-14 at 19.35.57.mp4`; adultos, foto PROVISORIA `sitio/assets/imagenes/novedades/taller-arte-adultos.jpg` hasta tener su video.
   - **Contenido de cada card:** una línea de presentación (PROVISORIO), la aclaración "Todos los talleres incluyen lo necesario para hacerlos: no hace falta llevar nada." y la **lista de los talleres** (`card-servicio__talleres`): solo los nombres, en una lista simple sin color ni padding ni desplegables, para que la navegación no se haga larga. El día y lo que incluye cada taller están en las cards de "Talleres disponibles".
   - **REQUERIMIENTO OBLIGATORIO:** todos los talleres (los actuales y los que se sumen) incluyen todo lo necesario; en ninguno hay que llevar nada.
   - **Talleres para jóvenes:**
     1. **Taller de arte (pintura):** sábados a la mañana, una vez por mes. Incluye los materiales de pintura y el cuadro. Precio: **PENDIENTE** (en `brief.md`, $30.000).
     2. **Taller de cocina:** $25.000. Incluye todos los ingredientes. Días y horario: **PENDIENTE**.
     3. **Orientación vocacional:** para 4.° y 5.° año, a cargo de las psicólogas, desde octubre. Incluye todos los materiales. Días, horario y precio: **PENDIENTE**.
   - **Talleres para adultos:**
     1. **Taller de arte (pintura):** sábados a la tarde, una vez por mes. $50.000. Incluye los materiales de pintura y el cuadro.
     2. **Taller de nutrición y alimentación saludable:** domingos y miércoles. Incluye todos los materiales. Horario y precio: **PENDIENTE**.
     3. **Habitar el cuidado (solo en octubre):** por el mes de la lucha contra el cáncer de mama; trabaja alimentación protectora y antiinflamatoria, emociones y autocuidado. Incluye todos los materiales. Días, horario y precio: **PENDIENTE**.
   - **CTA de cada card:** "Reservar mi lugar", a WhatsApp (3516095374) con el público en el mensaje prearmado. Sin botón "Ver talleres": los talleres se listan en la misma card.
   - **ID de ancla:** `#talleres`.
   - **REQUERIMIENTO OBLIGATORIO:** los días, lo que incluye y los precios se escriben en el HTML, en un único lugar por taller, para poder actualizarlos.
   - **Talleres disponibles (captura `imagenes de referencia/Captura de pantalla 2026-10-16 115414.png`):** debajo de las dos cards y antes de la galería, con ancla `#talleres-disponibles`.
     - Título "Talleres disponibles" con las flechas al lado (`carrusel-encabezado`, compartido con la galería).
     - Carrusel de cards (**REUTILIZA** `carrusel.js`): pasa solo y, al tocar una flecha, se frena y avanza card por card. Se ven 4 cards en pantallas grandes, 3 en escritorio, 2 en tablet y 1 y un poco en móvil (`talleres.css`).
     - **Card de taller (`card-taller`):** fondo pastel de una familia de color, foto enmarcada, nombre, descripción (PROVISORIO), a quién está dirigido ("Para jóvenes" o "Para adultos", solo texto, sin recuadro) y botón "Reservar mi lugar" a WhatsApp con el taller en el mensaje. Todas usan el mismo marcado (en WordPress, un bloque o tipo de entrada).
     - **Etiquetas opcionales:** pill inclinada sobre la card (`card-taller__etiqueta`, ej. "Octubre rosa") y franja "Nuevo" cruzando la foto, que corre en loop (`card-taller__nuevo`; quieta con `prefers-reduced-motion`).
     - **Cards (6):** Taller de arte (jóvenes), Habitar el cuidado (adultos; "Octubre rosa" + "Nuevo"), Taller de cocina (jóvenes), Taller de arte (adultos), Orientación vocacional (jóvenes; "Nuevo"), Nutrición y alimentación saludable (adultos). El taller de arte va en dos cards, una por público.
     - **PENDIENTE:** fotos de Habitar el cuidado, Orientación vocacional y Nutrición (por ahora, un ícono de Phosphor sobre blanco).
   - **Galería de fotos (captura `imagenes de referencia/Captura de pantalla 2026-10-16 110530.png`):** debajo de las dos cards, con ancla `#galeria-talleres` (a donde lleva "Ver galería de talleres" del hero).
     - Título "Galería de fotos" con las flechas al lado.
     - Mosaico de fotos de distintos tamaños con las medidas exactas del wireframe (separación 22; filas de 88 y 136; anchos 130, 172, 194 y 236), que encajan sin dejar huecos y se repiten en loop (`galeria.css`).
     - **REUTILIZA** el carrusel de las reseñas del Inicio (`carrusel.js`, `carrusel.css`): pasa solo como un marquee, se puede arrastrar y, al tocar una flecha, se frena y avanza de a una columna.
     - Al tocar una foto se abre en un visor (`<dialog>`, `galeria.js`) con un recuadro blanco y 70vh de alto como máximo. Debajo de la foto, centradas, dos flechas (con la misma separación que las del título) pasan a la foto anterior o siguiente, en loop; también con las flechas del teclado. Se cierra con la X, con Escape o tocando afuera.
     - **PROVISORIO:** las 9 fotos se eligieron entre las de la fundación (cocina, arte niños, arte adultos, actividades grupales y merienda). A confirmar cuáles son de talleres.
   - **REQUERIMIENTO OBLIGATORIO:** no usar "accesible" para hablar de precios.

3. **Noticias**
   - **Distribución (captura `imagenes de referencia/Captura de pantalla 2026-10-16 110541.png`):** título "Noticias" a la izquierda y "Ordenar por" (Más recientes / Más antiguas) a la derecha; grilla de cards cuadradas con la foto de fondo y el texto encima; paginación con flechas y números debajo.
   - **De a 6 por página** (pedido tuyo, en lugar de las 9 del wireframe): 3 columnas × 2 filas en escritorio y 2 columnas en tablet. **En móvil, de a 3** (1 columna), para que no se haga muy largo (`noticias.css`, `noticias.js`). Sin JS se ven todas.
   - **Entrada de noticia:** todas usan el mismo marcado y las mismas clases (`card-noticia`, `card-noticia__imagen`, `card-noticia__titulo`, `card-noticia__extracto`, `card-noticia__boton`), con la fecha en `<time datetime="…">` (oculta a la vista, como en el wireframe; se usa para ordenar). En WordPress serían entradas (posts).
   - **Legibilidad:** degradado oscuro de abajo hacia arriba detrás del texto blanco; botón "Seguir leyendo" en la variante para fondos oscuros (`btn--oscuro`).
   - **PROVISORIO:** 12 noticias con título y descripción en lorem ipsum, fechas de ejemplo y la misma foto en todas (`sitio/assets/imagenes/novedades/noticia-provisoria.jpg`).
   - **PENDIENTE:** las noticias reales (las pasás vos) y a dónde lleva "Seguir leyendo" (una página por nota).
   - **ID de ancla:** `#noticias`.

4. **Redes sociales (solo los links)**
   - **Distribución (captura `imagenes de referencia/Captura de pantalla 2026-10-16 110556.png`):** en escritorio, el texto a la izquierda y una tarjeta tipo perfil a la derecha, centrados; en móvil, el texto arriba (centrado) y la tarjeta debajo (`redes.css`).
   - **Texto (de la captura):** título "¿Querés conocer más?" y bajada "Te invitamos a seguirnos en Instagram para que te enteres de las últimas novedades." ("Instagram" con mayúscula por ser nombre propio).
   - **Tarjeta de perfil (`perfil-red`):** el logo de Siete Sentidos en un círculo blanco, como foto de perfil; "FUNDACIÓN SIETE SENTIDOS"; "@sietesentidos2023"; botón "Ver en Instagram" a `https://www.instagram.com/sietesentidos2023/` (pestaña nueva, con texto accesible).
   - Por ahora solo Instagram. Si se suma otra red, se repite la tarjeta `perfil-red` con el mismo marcado.
   - **REQUERIMIENTO OBLIGATORIO:** solo links. No se embebe el feed de Instagram ni se usan widgets externos.

---

## CTAs

| Sección | CTA principal | CTA secundario | Destino |
|---|---|---|---|
| Header | — | Contactate | WhatsApp |
| 1. Hero | Ver talleres | — | `#talleres` |
| 2. Talleres | Reservar mi lugar (en cada card) | — | WhatsApp |
| 3. Noticias | Seguir leyendo (en cada card) | — | PENDIENTE (página de cada nota) |
| 4. Redes | Ver en Instagram | — | Instagram |

*Regla de `contexto.md`: voseo imperativo, nunca primera persona.*

## Elementos interactivos

**PENDIENTE:** se definen con las capturas de Figma. Si se reutiliza algún componente existente (video de fondo, carrusel, cards que giran), se mantiene su JS. Todos respetan `prefers-reduced-motion`, funcionan con teclado y tienen área táctil mínima de 44px.

## SEO (PROVISORIO)

- **`<title>`:** "Talleres para chicos y adultos en Córdoba | Siete Sentidos"
- **Meta description:** "Talleres de arte, cocina, orientación vocacional y nutrición en Yofre Norte, Córdoba. Conocé los talleres vigentes y las novedades de la fundación."
- **Keywords de referencia (`brief.md`):** taller de arte para niños Córdoba.
- Un solo H1 (hero); cada sección con su H2.

## Requerimientos globales

- Aplican todos los del `structure.md` del Inicio (íconos, botones, interacción, retícula, imágenes, tipografía, copy y prioridad móvil).
- Los componentes reutilizados mantienen el mismo marcado y las mismas clases (pensando en la migración a WordPress). Si una sección necesita una variante, se agrega un modificador BEM.
- CSS y JS en sus propios archivos dentro de `sitio/assets/`.

## Pendientes

- Capturas de Figma de las cuatro secciones (escritorio y móvil).
- Todos los textos marcados como PROVISORIO.
- Precio del taller de arte para niños (¿sigue en $30.000?) y qué incluye el de adultos.
- Días y horario del taller de cocina para chicos.
- Días, horario y precio del taller de orientación vocacional.
- Horario y precio del taller de nutrición para adultos.
- Las noticias (contenido, fechas e imágenes).
- Fotos de los talleres para el hero y las cards.
