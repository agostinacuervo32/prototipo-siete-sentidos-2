# Estructura de la página Especialidades (Fundación Siete Sentidos — Sitio institucional)

*Este documento define la "receta" de secciones de la página **Especialidades** (`sitio/especialidades/index.html`, URL `/especialidades/`). La página sigue el orden de las preguntas de una familia que sospecha que su hijo necesita algo más que apoyo escolar: qué especialidades hay y para qué sirve cada una, qué gana si las combina con el apoyo escolar, qué incluye sin costo adicional, cuánto cuesta cada una y cómo pedir un turno. Se respeta este flujo de arriba hacia abajo, sin agregar, quitar ni reordenar secciones.*

*El tono, el vocabulario y las reglas de copy están en `contexto.md`. Lo visual sale de `style.md`. Esta página **no tiene wireframe en Figma**: las distribuciones de escritorio y móvil son una propuesta a validar y reutilizan los componentes ya armados en Inicio y Apoyo Escolar.*

**Cómo leer este documento**
- **APROBADO:** texto que ya está aprobado en `contexto.md` o en el Inicio y se copia tal cual.
- **PROVISORIO:** texto inventado a partir de `contexto.md`, `brief.md` y `keywords.md` para poder armar la página. Se usa en el código, pero **se va a corregir**: no tomarlo como definitivo.
- **PENDIENTE:** dato que falta. No se completa con supuestos.
- **A DEFINIR:** decisión de diseño o de contenido que todavía no está tomada.
- **REUTILIZA:** componente que ya existe (mismo marcado, mismas clases y mismo JS).

---

0. **Header y Footer (comunes)**
   - **REQUERIMIENTO OBLIGATORIO:** el header y el footer son exactamente iguales en todas las páginas (Inicio y páginas internas), sin modificaciones. Se copian del Inicio (`<!-- HEADER -->` … `<!-- /HEADER -->` y `<!-- FOOTER -->` … `<!-- /FOOTER -->`).
   - No se marca el link de la página actual ni se cambia ningún texto, link o clase. Las rutas empiezan con `/`, así que el bloque es idéntico en cualquier carpeta.
   - Si cambia algo del header o del footer, se actualiza en todos los `index.html`.

1. **Hero con video (Introducción)**
   - **REUTILIZA** el hero de las páginas internas de Apoyo Escolar (`hero hero--pagina` + `hero__composicion--pagina`), con una distribución propia (`hero__composicion--especialidades`, según la referencia en `imagenes de referencia/Captura de pantalla 2026-10-16 001341.png`): a la derecha, el video vertical, que es la pieza más grande; a la izquierda, una foto chica arriba, una foto más grande abajo y debajo el globo de diálogo (`hero__globo--lateral`) con la cola hacia el video.
   - **Escritorio:** dos columnas (texto + composición), como en Apoyo Escolar.
   - **Móvil:** el texto arriba y la composición debajo, recortada en los bordes laterales de la pantalla.
   - **Contenido (PROVISORIO):**
     - Antetítulo en mayúsculas: "ESPECIALIDADES".
     - H1: "Psicopedagogía, fonoaudiología y psicología infantil en Córdoba" (suma las keywords del área 2 de `keywords.md` con la variante local).
     - Bajada (basada en el texto **APROBADO** de la card de Especialidades del Inicio): "Cuando una dificultad va más allá de lo escolar, contamos con profesionales que la abordan desde su área y trabajan en conjunto con el apoyo escolar. Atendemos de forma particular y por obra social."
     - Doble CTA: "Pedí un turno" (principal, al formulario `#contacto`) y "Ver precios" (secundario, ancla a `#precios`).
   - **Recursos:**
     - Video: `sitio/assets/videos/WhatsApp Video 2026-10-14 at 19.38.23.mp4` (indicado por vos).
     - Fotos (elegidas entre las de la fundación que no se usan en Inicio ni en Apoyo Escolar), en `sitio/assets/imagenes/especialidades/`:
       - `hero-encastre.jpg` (foto chica de arriba): encastre de cilindros de colores.
       - `hero-consultorio.jpg` (foto grande de la izquierda): dos niños trabajando en una sala de la fundación.
   - **Interacción:** el video se reproduce sin sonido y en loop solo mientras está en pantalla, y con `prefers-reduced-motion` arranca pausado (**REUTILIZA** `video-fondo.js`).
   - **PENDIENTE:** botón de pausa del video. `video-fondo.js` ya lo soporta (`data-video-pausa`), pero Apoyo Escolar todavía no lo tiene en el HTML; se suma en las dos páginas a la vez para que queden iguales.
   - **REQUERIMIENTO OBLIGATORIO:** en el primer vistazo tiene que quedar claro qué especialidades hay, que trabajan junto con el apoyo escolar y cómo pedir un turno.

2. **Acompañamiento integral (descuentos) + Servicios incluidos**
   - Dos bloques seguidos (en el HTML, dos `<section>` dentro del mismo tramo): primero el descuento por combinar servicios, después lo que se incluye sin costo adicional.
   - **ID de ancla:** `#acompanamiento-integral` (2a) y `#servicios-incluidos` (2b).

   **2a. Acompañamiento integral**
   - Antetítulo: "ACOMPAÑAMIENTO INTEGRAL" · Título: "Combiná especialidades con apoyo escolar" (PROVISORIO).
   - Bajada (PROVISORIO): "Cuando un niño hace apoyo escolar y una o más especialidades en la fundación, docentes y profesionales comparten lo que observan y trabajan sobre los mismos objetivos. Además, combinar servicios tiene un descuento especial."
   - **Bloques por especialidad (PROVISORIO):** Psicopedagogía, Fonoaudiología, Psicología y Pediatría, cada panel con nombre y una línea de qué aborda, sin imagen:
     - **Psicopedagogía:** Acompaña las dificultades de aprendizaje: lectura, escritura, cálculo, atención y organización del estudio.
     - **Fonoaudiología:** Trabaja el desarrollo del habla y del lenguaje oral, la pronunciación y la comprensión.
     - **Psicología:** Acompaña lo emocional y lo conductual del niño, en diálogo con su familia y su escuela.
     - **Pediatría:** Revisiones preventivas, controles y fichas médicas, en coordinación con el resto del equipo.
   - **Escritorio:** dos columnas de la misma altura. Izquierda (media página): acordeón de paneles horizontal (**REUTILIZA** `acordeon-paneles.js`, el de Cómo trabajamos), con el primer panel abierto. Derecha (la otra mitad): una imagen horizontal (3:2), para que no ocupe tanto alto; el acordeón se estira hasta el alto de la imagen.
   - **Imagen (provisoria):** `sitio/assets/imagenes/especialidades/acompanamiento-integral.jpg` (juegos didácticos de madera junto a la ventana). PENDIENTE la imagen definitiva.
   - **Móvil:** acordeón de paneles vertical, con un panel siempre abierto, y la imagen horizontal (3:2) debajo.
   - CTA principal: "Consultá por el acompañamiento integral" (WhatsApp con mensaje prearmado).
   - **REQUERIMIENTO OBLIGATORIO:** no se promete un porcentaje de descuento: depende de la combinación y se invita a consultar por WhatsApp (`contexto.md`, sección 7).
   - **REQUERIMIENTO OBLIGATORIO:** pediatría se comunica como revisión y controles, no como atención pediátrica general (nota de `keywords.md`).

   **2b. Servicios incluidos (sin costo adicional)**
   - Título (PROVISORIO): "Qué incluye cada consulta".
   - Bajada (**APROBADO**, Inicio): "Miramos a cada niño de manera integral. Por eso, junto con cada clase o consulta, incluimos estos servicios sin costo adicional".
   - **REUTILIZA** las cards de beneficios (`card-beneficio`, `card-giro.js`) con las 5 cards del Inicio en el mismo orden (Área protegida, Merienda, Seguimiento con la escuela, Revisión pediátrica y Mesa de juegos). Los textos son los **APROBADOS**, salvo Mesa de juegos.
   - **Mesa de juegos (PROVISORIO):** en Especialidades la mesa de juegos se usa durante la consulta para trabajar con los pacientes. Texto: "Juegos y materiales que los profesionales usan durante la consulta para trabajar con cada niño."
   - CTA de cierre: "Hacé tu consulta" (**APROBADO**, al formulario).

3. **Precios**
   - **REUTILIZA** la sección de precios de Apoyo Escolar (`precios`, `card-plan`, `precios.css`): misma estructura, mismas clases y misma distribución (escritorio desde 1440px: las 5 cards en fila; tablet: de a dos; móvil: apiladas).
   - Título (PROVISORIO): "Precios de las especialidades".
   - Bajada (PROVISORIO, con datos de `contexto.md`): "Cada especialidad tiene un precio fijo por hora y se abona el día del turno."
   - **Cinco cards**, con los valores de `informacion/precios-por-area.md` (octubre 2026). Solo llevan precio, salvo Servicios adicionales, que suma una descripción (`card-plan__detalle`):
     1. **Psicopedagogía:** $36.000 por hora.
     2. **Fonoaudiología:** $35.000 por hora.
     3. **Psicología:** $35.000 por hora.
     4. **Nutrición:** $40.000 por hora.
     5. **Servicios adicionales:** $25.000. Descripción: "Pediatría, fichas médicas, planillas ANSES y fichas para viajes de estudio."
   - Cada card lleva el CTA "Consultar" a WhatsApp con el servicio en el mensaje (mismo criterio que Apoyo Escolar).
   - Notas debajo de las cards: "Si combinás una especialidad con apoyo escolar, tenés un descuento especial." (PROVISORIO) · "Siete Sentidos es una fundación, pero sus servicios son arancelados." (**APROBADO**, FAQ del Inicio).
   - **ID de ancla:** `#precios`.
   - **REQUERIMIENTO OBLIGATORIO:** los precios se escriben en el HTML, en un único lugar por card, para poder actualizarlos.
   - **REQUERIMIENTO OBLIGATORIO:** no usar "accesible" para hablar de precios.
   - **PENDIENTE:** si "por hora" es la unidad correcta en cada especialidad (o si es por sesión) y cuál es la unidad de Servicios adicionales (por consulta o por trámite).
   - **PENDIENTE:** qué obras sociales se aceptan y si los precios cambian con obra social.

4. **Contacto (Formulario)**
   - **REUTILIZA** el formulario del Inicio y de Apoyo Escolar: mismo contenedor, mismos campos, mismos textos de error y mismo envío a WhatsApp (`formulario-whatsapp.js`, `campo-telefono.js`).
   - Título: "Contacto" (**APROBADO**).
   - **Servicio de interés:** sin preselección (hay cuatro especialidades posibles). **A DEFINIR:** si los CTA de cada especialidad preseleccionan su opción.
   - **ID de ancla:** `#contacto`.
   - **REQUERIMIENTO OBLIGATORIO:** formulario 100% en código. Nombre, teléfono y servicio son obligatorios. Al enviarlo abre WhatsApp (3516095374) con el mensaje prearmado.

---

## CTAs

| Sección | CTA principal | CTA secundario | Destino |
|---|---|---|---|
| Header | — | Contactate | WhatsApp |
| 1. Hero | Pedí un turno | Ver precios | `#contacto` · `#precios` |
| 2. Acompañamiento integral + incluidos | Consultá por el acompañamiento integral · Hacé tu consulta | — | WhatsApp · `#contacto` |
| 3. Precios | Consultar (en cada card) | — | WhatsApp |
| 4. Contacto | Enviar | — | WhatsApp |

*Regla de `contexto.md`: voseo imperativo, nunca primera persona.*

## Elementos interactivos

| Elemento | Sección | Componente |
|---|---|---|
| Video de fondo | 1 | REUTILIZA `video-fondo.js` |
| Acordeón de paneles (horizontal en escritorio, vertical en móvil) | 2a | REUTILIZA `acordeon-paneles.js` |
| Cards que giran con "Ver más" | 2b (móvil) | REUTILIZA `card-giro.js` |
| Cards de precio | 3 | REUTILIZA `precios.css` |
| Formulario → WhatsApp | 4 | REUTILIZA `formulario-whatsapp.js` y `campo-telefono.js` |

*Todos respetan `prefers-reduced-motion`, funcionan con teclado y tienen área táctil mínima de 44px.*

## SEO (PROVISORIO)

- **`<title>`:** "Psicopedagogía, fonoaudiología y psicología infantil en Córdoba | Siete Sentidos"
- **Meta description:** "Psicopedagogía, fonoaudiología, psicología y pediatría en Yofre Norte, Córdoba, en conjunto con el apoyo escolar. Consultá precios y pedí un turno."
- **Keywords de referencia (`keywords.md`, área 2):** psicopedagoga Córdoba, psicóloga infantil Córdoba, fonoaudióloga infantil Córdoba, dificultades de aprendizaje, acompañamiento integral.
- Un solo H1 (hero); cada sección con su H2.

## Requerimientos globales

- Aplican todos los del `structure.md` del Inicio (íconos, botones, interacción, retícula, imágenes, tipografía, copy y prioridad móvil).
- Los componentes reutilizados mantienen el mismo marcado y las mismas clases (pensando en la migración a WordPress). Si una sección necesita una variante, se agrega un modificador BEM.
- CSS y JS en sus propios archivos dentro de `sitio/assets/`.

## Pendientes

- Todos los textos marcados como PROVISORIO.
- Botón de pausa del video del hero (en esta página y en Apoyo Escolar).
- Unidad de cobro de cada especialidad (por hora o por sesión).
- Si Nutrición se suma también como especialidad en el hero y en la sección 2 (por ahora solo figura en Precios).
- Obras sociales aceptadas.
- Imagen definitiva de la sección 2a.
- Si se hace un wireframe en Figma de esta página antes de pasarla a código.
