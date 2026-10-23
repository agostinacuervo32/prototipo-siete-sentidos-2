# Estructura de la página Apoyo Escolar (Fundación Siete Sentidos — Sitio institucional)

*Este documento define la "receta" de secciones de la página **Apoyo Escolar** (`sitio/apoyo-escolar/index.html`, URL `/apoyo-escolar/`). La página sigue el orden de las preguntas de una familia que ya sabe que la fundación existe y quiere decidir: qué es el apoyo escolar, cómo trabajan y cuándo, qué incluye, cuánto cuesta, qué pasa si su hijo necesita algo más y cómo inscribirse. Se debe respetar este flujo de arriba hacia abajo, sin agregar, quitar ni reordenar secciones.*

*El tono, el vocabulario y los textos aprobados están en `contexto.md`. Lo visual sale de `style.md`. Esta página **no tiene wireframe en Figma**: las distribuciones de escritorio y móvil de este documento son una propuesta a validar.*

**Cómo leer este documento**
- **APROBADO:** texto que ya está aprobado en `contexto.md` o `structure.md` (Inicio) y se copia tal cual.
- **PROPUESTA — a validar:** texto o recurso armado a partir de `brief.md` y `contexto.md`. No se usa en el código hasta que se apruebe.
- **PENDIENTE:** dato que falta. No se completa con supuestos.
- **REUTILIZA:** componente que ya existe en el Inicio (mismo marcado, mismas clases y mismo JS).

---

0. **Header y Footer (comunes)**
   - **REQUERIMIENTO OBLIGATORIO:** el header y el footer son exactamente iguales en todos los `.html` del proyecto, sin modificaciones. Se copian del Inicio (`<!-- HEADER -->` … `<!-- /HEADER -->` y `<!-- FOOTER -->` … `<!-- /FOOTER -->`).
   - No se marca el link de la página actual ni se cambia ningún texto, link o clase.
   - **EN STAND BY (rutas):** con las rutas relativas, el header y el footer de las subpáginas necesitan `../` en las rutas internas (logo y links entre páginas) para funcionar. Es la única diferencia permitida y es temporal. Cuando haya acceso al dominio se pasan todas las rutas a rutas que empiezan con `/`, y el header y el footer quedan idénticos en todas las páginas.

1. **Hero con video (Introducción)**
   - **Escritorio:** video de fondo a lo ancho del contenido, con bordes redondeados y una capa de color para que el texto se lea. El texto va alineado a la izquierda, sobre el video.
   - **Móvil:** el video arriba, recortado en los bordes laterales de la pantalla, y el texto debajo (no sobre el video, para que se lea bien en pantallas chicas).
   - **Contenido:**
     - Antetítulo en mayúsculas: "APOYO ESCOLAR". *PROPUESTA — a validar.*
     - H1: *PROPUESTA — a validar.* Opciones:
       - "Apoyo escolar en Yofre Norte, desde nivel inicial hasta secundario" (suma la keyword local "apoyo escolar" + barrio).
       - "Cada estudiante gana confianza y autonomía".
     - Bajada: "Acompañamos todas las materias, desde nivel inicial hasta secundario, en turnos de mañana y tarde."
     - Doble CTA: "Inscribite al apoyo escolar" (principal, al formulario de la sección 6) y "Ver precios y horarios" (secundario, ancla). *PROPUESTA — a validar* ("Inscribite al apoyo escolar" sale de la lista de CTAs del `brief.md`).
   - **Interacción:**
     - El video se reproduce sin sonido y en loop solo mientras está en pantalla (**REUTILIZA** `video-fondo.js`).
     - Botón de pausa/reproducción visible (ícono lineal dentro de una pill), porque un video en movimiento de más de 5 segundos tiene que poder pausarse (accesibilidad).
     - Con `prefers-reduced-motion`, el video arranca pausado.
   - **PENDIENTE:** qué video de `sitio/assets/videos/` se usa (no se repite ninguno de los del Inicio, salvo que lo indiques).
   - **REQUERIMIENTO OBLIGATORIO:** en el primer vistazo tiene que quedar claro qué es el servicio, para quién es (nivel inicial hasta secundario) y cómo inscribirse.

2. **Cómo trabajamos + Agenda de apoyo escolar**
   - Título de la sección: "Cómo trabajamos". *PROPUESTA — a validar.*
   - **Escritorio:** dos columnas. Izquierda: "Cómo trabajamos". Derecha: la agenda.
   - **Móvil:** se apilan el bloque "Cómo trabajamos" (con antetítulo en mayúsculas) y debajo el bloque "Agenda" (con antetítulo en mayúsculas), como en la sección de horarios del Inicio.
   - **Cómo trabajamos — acordeón de paneles (REUTILIZA `acordeon-paneles.js`, el mismo de Misión, visión y valores):**
     - **Escritorio:** acordeón horizontal; los paneles cerrados muestran el título en vertical y el abierto, el título y el texto. Siempre hay un panel abierto (por defecto, el primero).
     - **Móvil:** acordeón vertical, con el primer panel abierto.
     - Cada panel lleva un color pastel distinto de la paleta y, si hay, una foto o ilustración.
     - **Paneles (PROPUESTA — a validar, armados con datos del `brief.md`):**
       1. **Todas las materias:** Desde nivel inicial (motricidad, letras, números y nombre propio) hasta secundario. Lengua y Matemática son las materias que más reforzamos.
       2. **En la fundación:** Las clases son en la fundación, de manera presencial, con docentes que conocen a cada estudiante.
       3. **Aprender jugando:** Usamos juegos como el UNO, el Jenga, el dominó, la lotería, las damas, el ajedrez y los encastres para trabajar los contenidos.
       4. **El oficio de estudiante:** Acompañamos a cada estudiante para que gane autonomía, valores y pensamiento crítico.
   - **Agenda (REUTILIZA el componente de agenda del Inicio y `agenda.js`):**
     - Muestra solo **Apoyo escolar** e **Inglés**, con el desplegable reducido a esas dos opciones.
     - Datos, según `informacion/horarios.md`:
       - **Apoyo escolar** (Andrea Novero y Ana Rinaldi): lunes de 17:00 a 21:00; martes a viernes de 9:00 a 12:30 y de 16:00 a 21:00.
       - **Inglés** (Jaquelina Gutiérrez): martes y viernes de 18:00 a 19:00.
   - Cierre de la sección con doble CTA: "Consultá por un turno" (principal, a WhatsApp) y "Ver precios" (secundario, ancla a la sección 4). *PROPUESTA — a validar.*
   - **REQUERIMIENTO OBLIGATORIO:** la agenda tiene que poder actualizarse con facilidad (los horarios se escriben en el HTML, igual que en el Inicio).
   - **REQUERIMIENTO OBLIGATORIO:** los horarios salen de `informacion/horarios.md`, no de `brief.md` (los del brief están desactualizados).

3. **Servicios incluidos (sin costo adicional)**
   - Título: *PROPUESTA — a validar:* "Qué incluye el apoyo escolar".
   - Bajada (**APROBADO** con un ajuste a validar): "Miramos a cada niño de manera integral. Por eso, junto con cada clase, incluimos estos servicios sin costo adicional". En el Inicio dice "junto con cada clase o consulta"; acá se propone quitar "o consulta" porque la página es solo de apoyo escolar.
   - **REQUERIMIENTO OBLIGATORIO:** las mismas 5 cards del Inicio, con los textos **APROBADOS**, en este orden:
     1. **Área protegida:** Cobertura de emergencias médicas dentro de la fundación, para que cada niño esté atendido ante cualquier imprevisto.
     2. **Merienda:** Mate cocido y galletitas para todos los niños durante su turno.
     3. **Seguimiento con la escuela:** Nos reunimos con la escuela de cada niño para trabajar en conjunto y acompañar su trayectoria.
     4. **Revisión pediátrica:** Si el equipo detecta alguna dificultad, por ejemplo visual, la pediatra realiza una revisión preventiva sin costo.
     5. **Mesa de juegos:** Un espacio de juego para los turnos de apoyo escolar de 2 horas o más.
   - **Escritorio (PROPUESTA — a validar):** fila de 5 cards que se expanden y achican, con la misma mecánica que las cards de Apoyo escolar y Especialidades del Inicio: en reposo todas iguales, con ilustración y título; al pasar el cursor (o con foco de teclado) la elegida crece y muestra el texto, y las demás se achican mostrando solo la ilustración.
   - **Móvil (REUTILIZA `card-giro.js`):** grilla de 2 columnas con la quinta card a ancho completo, como en el Inicio. Cada card muestra ilustración, título y "Ver más", que la da vuelta y muestra el texto.
   - Cierre con CTA: "Hacé tu consulta" (principal, al formulario). *APROBADO en el Inicio; a validar si se repite acá.*
   - **REQUERIMIENTO OBLIGATORIO:** "área protegida" se explica siempre en el texto.
   - **REQUERIMIENTO OBLIGATORIO:** la revisión pediátrica no se comunica como consulta médica sin costo a pedido.
   - **REQUERIMIENTO OBLIGATORIO:** ilustraciones personalizadas, con animación al pasar el cursor o al entrar en pantalla (las mismas del Inicio).

4. **Precios y descuentos**
   - Título: *PROPUESTA — a validar:* "Precios y formas de pago".
   - Bajada: *PROPUESTA — a validar:* "Podés pagar por hora, por semana o por mes, con un 10% de descuento en el plan mensual." (frase **APROBADA** en la card del Inicio).
   - **Tres cards de plan**, con la misma estructura (componente repetible):
     1. **Por hora:** PENDIENTE valor actual. *(El brief da $9.500 como referencia, pero dice que faltan los valores actualizados.)*
     2. **Por semana:** PENDIENTE valor y cantidad de horas que incluye.
     3. **Plan mensual:** PENDIENTE valor. Etiqueta "10% de descuento" y aclaración "abonando del 1 al 10 de cada mes". Es la card destacada (otro relleno de la paleta + etiqueta), porque es el plan con beneficio.
   - Sin notas debajo de las cards: no se aclara que la merienda y el área protegida están incluidas ni que los servicios son arancelados (eso se entiende por los precios).
   - Card "Apoyo escolar y especialidad": "Combiná el apoyo escolar con psicopedagogía, fonoaudiología, psicología, pediatría o nutrición."
   - **Escritorio:** 3 cards en fila, con la del plan mensual destacada. Hover según `style.md` (el relleno sube un tono).
   - **Móvil (PROPUESTA — a validar):** selector tipo píldora con tres opciones ("Por hora", "Por semana", "Por mes") que cambia la card visible; también se puede deslizar entre cards. Por defecto queda elegido el plan mensual.
   - Cada card lleva su CTA: "Consultá por este plan" (principal). *PROPUESTA — a validar.* A DEFINIR si lleva al formulario o a WhatsApp con el plan en el mensaje.
   - Cierre con un link a la sección 5: "¿Necesitás combinar apoyo escolar con una especialidad?" *PROPUESTA — a validar.*
   - **ID de ancla:** `#precios`.
   - **REQUERIMIENTO OBLIGATORIO:** no usar "accesible" para hablar de precios; la flexibilidad se muestra con datos (por hora, semana o mes; 10% de descuento en el plan mensual).
   - **REQUERIMIENTO OBLIGATORIO:** los precios se escriben en el HTML, en un único lugar por plan, para poder actualizarlos con facilidad.

5. **Acompañamiento integral**
   - Título: "Acompañamiento integral".
   - Bajada: *PROPUESTA — a validar:* "Si durante el apoyo escolar aparece una dificultad que va más allá de lo escolar, no hace falta buscar otro lugar. Psicopedagogía, fonoaudiología, psicología y pediatría trabajan en conjunto con el apoyo escolar. Cuando combinás servicios, tenés un descuento especial: consultanos por tu combinación."
   - **Bloques por especialidad (PROPUESTA — a validar):** Psicopedagogía, Fonoaudiología, Psicología y Pediatría, cada uno con imagen o video, nombre, una línea de qué aborda y el link "Conocé [especialidad]" a la página Especialidades.
     - **Escritorio:** fila de 4 bloques que se expanden y achican (misma mecánica de las cards de servicios del Inicio): el elegido crece y muestra su texto y su link; los demás se achican mostrando solo la imagen y el nombre.
     - **Móvil:** acordeón de paneles vertical (**REUTILIZA** `acordeon-paneles.js`), con un panel siempre abierto.
     - Textos por especialidad: PENDIENTE (dependen del copy de la página Especialidades, que todavía no existe). Como base se puede usar lo del `brief.md`: psicopedagogía (abordaje pedagógico-cognitivo), fonoaudiología (desarrollo del habla y del lenguaje oral), psicología (lo emocional y lo conductual), pediatría (fichas médicas y controles).
   - **"Armá tu combinación" (PROPUESTA — a validar):** chips seleccionables (Apoyo escolar, que viene marcado, más las 4 especialidades). El botón "Consultá por el acompañamiento integral" abre WhatsApp con un mensaje prearmado que nombra los servicios elegidos. El contenido de los chips vive en el HTML y la lógica va en su propio JS.
   - CTA principal: "Consultá por el acompañamiento integral" (del `brief.md`, a WhatsApp) · CTA secundario: "Conocé las especialidades" (**APROBADO** en el Inicio, a `/especialidades/`).
   - **ID de ancla:** `#acompanamiento-integral`.
   - **REQUERIMIENTO OBLIGATORIO:** no se promete un porcentaje de descuento; se invita a consultar por WhatsApp, porque depende de la combinación.
   - **REQUERIMIENTO OBLIGATORIO:** pediatría se comunica como revisión y controles, no como atención pediátrica general (ver nota de `keywords.md`).

6. **Contacto (Formulario)**
   - **REUTILIZA** el formulario del Inicio: mismo contenedor (tarjeta sobre franja con bordes inclinados), mismos campos, misma distribución en escritorio y móvil, mismos textos de error y mismo envío a WhatsApp (`formulario-whatsapp.js`, `campo-telefono.js`).
   - Título: "Contacto" (**APROBADO**) o *PROPUESTA — a validar:* "Consultá por un lugar en apoyo escolar".
   - **Servicio de interés:** llega preseleccionado en "Apoyo escolar". Si se llega desde un CTA de la sección 5, se preselecciona "Acompañamiento integral". Siempre se puede cambiar a mano en el desplegable (`style.md`, Formularios).
   - Botón "Enviar" (principal).
   - **ID de ancla:** `#contacto`.
   - **REQUERIMIENTO OBLIGATORIO:** formulario 100% en código. Nombre, teléfono y servicio son obligatorios. Al enviarlo abre WhatsApp (3516095374) con el mensaje prearmado.
   - **REQUERIMIENTO OBLIGATORIO:** los CTA "Inscribite al apoyo escolar" y "Hacé tu consulta" de esta página llevan a este formulario.

---

## CTAs constantes

Cada sección cierra con al menos un CTA, para que la familia nunca tenga que volver arriba para contactar.

| Sección | CTA principal | CTA secundario | Destino |
|---|---|---|---|
| Header | — | Contactate | WhatsApp |
| 1. Hero | Inscribite al apoyo escolar | Ver precios y horarios | Formulario · `#precios` |
| 2. Cómo trabajamos + Agenda | Consultá por un turno | Ver precios | WhatsApp · `#precios` |
| 3. Servicios incluidos | Hacé tu consulta | — | Formulario |
| 4. Precios | Consultá por este plan (en cada card) | ¿Necesitás combinar…? (link) | A DEFINIR · `#acompanamiento-integral` |
| 5. Acompañamiento integral | Consultá por el acompañamiento integral | Conocé las especialidades | WhatsApp · `/especialidades/` |
| 6. Contacto | Enviar | — | WhatsApp |

*Todos los textos marcados como propuesta en la tabla siguen pendientes de validación. Regla de `contexto.md`: voseo imperativo, nunca primera persona.*

**A DEFINIR:** si se suma un botón flotante de WhatsApp siempre visible en móvil (el `brief.md` pide WhatsApp "visible y de acceso inmediato en todo el sitio"). Si se agrega, tendría que estar también en el Inicio y en el resto de las páginas.

## Elementos interactivos de la página

| Elemento | Sección | Componente |
|---|---|---|
| Video de fondo con pausa | 1 | REUTILIZA `video-fondo.js` + botón de pausa nuevo |
| Acordeón de paneles (horizontal en escritorio, vertical en móvil) | 2 y 5 (móvil) | REUTILIZA `acordeon-paneles.js` |
| Agenda con desplegable | 2 | REUTILIZA `agenda.js` |
| Cards que se expanden y achican | 3 (escritorio) y 5 (escritorio) | Misma mecánica de `servicios.css` del Inicio, generalizada a N cards |
| Cards que giran con "Ver más" | 3 (móvil) | REUTILIZA `card-giro.js` |
| Selector de plan deslizable | 4 (móvil) | Nuevo |
| Chips "Armá tu combinación" → WhatsApp | 5 | Nuevo |
| Formulario → WhatsApp | 6 | REUTILIZA `formulario-whatsapp.js` y `campo-telefono.js` |

*Todos respetan `prefers-reduced-motion`, funcionan con teclado y tienen área táctil mínima de 44px.*

## SEO (PROPUESTA — a validar)

- **`<title>`:** "Apoyo escolar en Yofre Norte, Córdoba | Siete Sentidos"
- **Meta description:** "Apoyo escolar en todas las materias, desde nivel inicial hasta secundario, en Yofre Norte, Córdoba. Pagás por hora, semana o mes, con 10% de descuento mensual."
- **Keywords de referencia (`keywords.md`, área 1):** apoyo escolar, apoyo escolar Córdoba, clases particulares, precio apoyo escolar, apoyo escolar primaria / secundaria, acompañamiento integral.
- Un solo H1 (hero); cada sección con su H2.

## Requerimientos globales

- Aplican todos los del `structure.md` del Inicio (íconos, botones, interacción, retícula, imágenes, tipografía, copy y prioridad móvil).
- Las transiciones entre secciones son curvas o con líneas a mano alzada (`style.md`).
- Los componentes reutilizados mantienen el mismo marcado y las mismas clases que en el Inicio (pensando en la migración a WordPress). Si una sección necesita una variante, se agrega un modificador BEM, no una estructura nueva.
- CSS y JS en sus propios archivos dentro de `sitio/assets/`; los nuevos se nombran por funcionalidad (ej. `selector-plan.js`, `combinacion-whatsapp.js`).

## Pendientes

- **Ancla `#precios-y-horarios`:** el Inicio enlaza a `apoyo-escolar/#precios-y-horarios`, pero en esta página los horarios (sección 2) y los precios (sección 4) quedan separados. Hay que decidir a cuál apunta (o cambiar el link del Inicio).
- **"Conocé las materias"** del Inicio enlaza a `apoyo-escolar/`: definir si apunta a `#como-trabajamos`.
- Valores actualizados por hora, por semana y por mes (y cuántas horas incluye el pago semanal).
- Precio de Inglés y si entra en el plan mensual.
- Si el seguimiento con la escuela aplica a cualquier forma de pago o solo al plan mensual.
- Si el 10% del plan mensual aplica también cuando se combinan apoyo escolar y especialidades.
- Si se mencionan las becas parciales (el `brief.md` dice que se contemplan caso por caso).
- Video del hero.
- Fotos o ilustraciones de los paneles de "Cómo trabajamos" y de los bloques de especialidades.
- Todos los textos marcados como PROPUESTA.
- Si se hace un wireframe en Figma de esta página antes de pasarla a código.
