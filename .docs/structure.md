# Estructura de la Página de Inicio (Fundación Siete Sentidos — Sitio institucional)

*Este documento define la "receta" de secciones del Inicio del sitio de Fundación Siete Sentidos, tomada de los wireframes en baja fidelidad (Figma: "Home – Escritorio" 1920 px y "iPhone 16" 393 px). El Inicio funciona como resumen del sitio y sigue el orden de las preguntas que se hace una familia que llega por primera vez: qué hace la fundación, por qué elegirla, qué opinan otras familias, quiénes son, cuándo y dónde atiende, y cómo contactarla. Se debe respetar este flujo de arriba hacia abajo, sin agregar, quitar ni reordenar secciones.*

*El tono, el vocabulario y los textos aprobados están en `contexto.md`.*

---

1. **Barra de Navegación (Header / Navbar)**
   - **Menú flotante:** contenedor tipo píldora con bordes redondeados que no toca los bordes de la pantalla (separado del borde superior y de los laterales).
   - **Escritorio:** logo de Siete Sentidos a la izquierda · enlaces al centro: Apoyo escolar, Especialidades, Nosotros, Novedades, Sumate · botón "Contactate" (variante con borde) a la derecha.
   - **Móvil:** logo a la izquierda y botón de menú hamburguesa circular a la derecha.
   - El logo funciona como enlace al Inicio (no hay ítem "Inicio" en el menú).
   - **REQUERIMIENTO OBLIGATORIO:** "Sumate" se diferencia del resto de los ítems con otro color, porque está dirigida a profesionales y voluntarios y no a familias.

2. **Hero (Primera vista)**
   - **Escritorio:** dos columnas. Izquierda: texto alineado a la izquierda. Derecha: composición de imágenes de distintos tamaños con bordes redondeados, combinadas con dos formas tipo globo de diálogo.
   - **Móvil:** una columna. Primero el texto centrado y debajo la composición de imágenes, que se recorta en los bordes laterales de la pantalla.
   - **Contenido:**
     - H1: "Bajo un mismo techo: apoyo escolar y especialidades". En móvil, "Bajo el mismo techo:" va como antetítulo en mayúsculas y "Apoyo escolar y especialidades" como título.
     - Bajada: "Acompañamos el aprendizaje de niños y estudiantes, desde nivel inicial hasta secundario, con docentes, psicopedagogas, fonoaudiólogas y psicólogas que trabajan en equipo."
     - Doble CTA: "Contactate" (principal, relleno) y "Conocé nuestros servicios" en escritorio / "Ver servicios" en móvil (secundario, con borde).
   - **REQUERIMIENTO OBLIGATORIO:** el H1 tiene que comunicar de un vistazo que apoyo escolar y especialidades conviven en un mismo lugar, porque es el diferencial de la fundación y la mayoría de las familias desconoce espacios que los combinen.
   - **REQUERIMIENTO OBLIGATORIO:** el concepto gráfico "Abrir y abrazar" se aplica en la gráfica, no se nombra en el texto.

3. **Nuestros Servicios (Apoyo escolar y Especialidades)**
   - **Escritorio:** dos cards de igual tamaño, una al lado de la otra, con imagen de fondo y el nombre del servicio centrado ("Apoyo escolar" / "Especialidades").
   - **Móvil:** cada servicio se apila en este orden: título, texto, CTA principal, CTA secundario e imagen.
   - **Contenido por servicio:**
     - **Apoyo escolar:** "Reforzamos lo que se trabaja en la escuela para que cada estudiante gane confianza y autonomía. Acompañamos todas las materias, desde nivel inicial hasta secundario, en turnos de mañana y tarde. Podés pagar por hora, por semana o por mes, con un 10% de descuento en el plan mensual." · CTA: "Ver precios y horarios" (principal) · "Conocé las materias" (secundario) · Etiqueta "10% OFF" junto al título.
     - **Especialidades:** "Cuando una dificultad va más allá de lo escolar, contamos con profesionales que la abordan desde su área. Psicopedagogía, fonoaudiología, psicología, pediatría y nutrición trabajan en conjunto con el apoyo escolar para acompañar a cada niño de manera integral, y también se pueden hacer por separado." · "Algunas, como psicología y nutrición, están disponibles para toda la familia, también para adultos. Atendemos de forma particular y por obra social." · CTA: "Ver precios y horarios" (principal) · "Conocé las especialidades" (secundario).
     - **Videos de las cards:** Apoyo escolar, `sitio/assets/videos/WhatsApp Video 2026-10-15 at 20.14.20.mp4` · Especialidades, `sitio/assets/videos/WhatsApp Video 2026-10-14 at 19.38.23.mp4`.
   - **REQUERIMIENTO OBLIGATORIO:** cada CTA lleva a la página del servicio correspondiente (Apoyo Escolar o Especialidades). "Ver precios y horarios" ancla a la sección de precios y agenda de esa página.
   - **A DEFINIR:** en escritorio el wireframe muestra solo imagen y título. Falta resolver cómo aparecen el texto, la etiqueta "10% OFF" y los CTA (por ejemplo, al pasar el cursor o debajo de cada card).

4. **¿Por qué elegir Siete Sentidos? (Propuesta de valor)**
   - Título centrado y bajada: "Miramos a cada niño de manera integral. Por eso, junto con cada clase o consulta, incluimos estos servicios sin costo adicional".
   - **REQUERIMIENTO OBLIGATORIO:** 5 cards fijas, en este orden:
     1. **Área protegida:** Cobertura de emergencias médicas dentro de la fundación, para que cada niño esté atendido ante cualquier imprevisto.
     2. **Merienda:** Mate cocido y galletitas para todos los niños durante su turno.
     3. **Seguimiento con la escuela:** Nos reunimos con la escuela de cada niño para trabajar en conjunto y acompañar su trayectoria.
     4. **Revisión pediátrica:** Si el equipo detecta alguna dificultad, por ejemplo visual, la pediatra realiza una revisión preventiva sin costo.
     5. **Mesa de juegos:** Un espacio de juego para los turnos de apoyo escolar de 2 horas o más.
   - **Escritorio:** 5 columnas iguales. Cada card tiene una ilustración arriba, el título y el texto centrados debajo.
   - **Móvil:** grilla de 2 columnas, con la quinta card ocupando el ancho completo (título a la izquierda, ilustración a la derecha). Cada card muestra solo ilustración, título y botón "Ver más", que despliega el texto en una ventana emergente.
   - Cierre de la sección con doble CTA centrado: "Hacé tu consulta" (principal) y "¿Te quedaron dudas?" (secundario, que ancla a Preguntas frecuentes).
   - **REQUERIMIENTO OBLIGATORIO:** el término "área protegida" se explica siempre en el texto, porque no todas las familias lo conocen.
   - **REQUERIMIENTO OBLIGATORIO:** la revisión pediátrica no se comunica como consulta médica gratuita a pedido. Es una revisión puntual cuando el equipo detecta algo.
   - **REQUERIMIENTO OBLIGATORIO:** ilustraciones personalizadas de estética limpia y estilo infantil, con animación al pasar el cursor o al entrar en pantalla.

5. **Opiniones de las familias (Prueba social)**
   - **Escritorio:** título "Opiniones de las familias" a la izquierda y carrusel de reseñas a la derecha, con flechas de navegación a los costados y difuminado en el borde derecho.
   - **Móvil:** título a la izquierda con las flechas a la derecha, y el carrusel debajo, que se recorta en los bordes de la pantalla.
   - Cada card de reseña tiene una franja superior con 5 estrellas y el texto de la reseña debajo.
   - **REQUERIMIENTO OBLIGATORIO:** usar reseñas reales de Google Maps de la fundación, citadas textualmente y sin inventar testimonios.

6. **Lo que nos guía (Misión, visión y valores + equipo)**
   - **Escritorio:** dos columnas.
     - **Izquierda:** acordeón horizontal con tres paneles, Valores, Visión y Misión. Los paneles cerrados muestran el título en vertical. El panel abierto (por defecto, Misión) muestra el título y el texto.
     - **Derecha:** imagen del equipo arriba; debajo, el título "Docentes y profesionales que trabajan juntos" y el doble CTA "Conocé al equipo" (principal) y "Contactate" (secundario).
   - **Móvil:** acordeón vertical (Valores, Visión, Misión, con Misión abierta), luego el título del equipo con su doble CTA y la imagen del equipo debajo.
   - **Contenido oficial de la fundación:**
     - **Misión:** Somos una organización que persigue el mejoramiento del desempeño escolar de los niños, potenciando su capacidad intelectual, sembrando en ellos valores y la búsqueda de la excelencia; conjuntamente con actividades que estimulen sus capacidades y habilidades artísticas.
     - **Visión:** Educar en valores y desarrollar juntos el oficio de ser estudiantes, brindando la mejor calidad educativa.
     - **Valores:** Sabiduría, libertad y felicidad para que los niños puedan volar al encuentro de sus sueños.
   - **REQUERIMIENTO OBLIGATORIO:** fotos del equipo en blanco y negro.
   - **REQUERIMIENTO OBLIGATORIO:** "Conocé al equipo" lleva a la página Nosotros.

7. **Días, horarios y dudas frecuentes (Agenda + FAQ + ubicación)**
   - Título centrado: "Días, horarios y dudas frecuentes".
   - **Escritorio:** dos columnas. Izquierda: agenda por especialidad. Derecha: acordeón de preguntas frecuentes y, debajo, el mapa de ubicación.
   - **Móvil:** se apilan el bloque "Agenda" (con antetítulo en mayúsculas), el bloque "Preguntas frecuentes" (con antetítulo en mayúsculas) y el botón "Ver ubicación en el mapa", que abre Google Maps. En móvil no se muestra el mapa incrustado.
   - **Agenda:** días y horarios de Apoyo escolar, Fonoaudiología, Psicopedagogía, Psicología, Pediatría e Inglés.
   - **Preguntas frecuentes (acordeón con todas las preguntas cerradas; se abren al tocarlas y de a una por vez):**
     - ¿La revisión con la pediatra tiene costo? → No. Cuando el equipo detecta alguna dificultad durante la atención, la pediatra realiza una revisión preventiva sin costo. No reemplaza una consulta pediátrica a pedido.
     - ¿La atención es gratuita? → No. Siete Sentidos es una fundación, pero sus servicios son arancelados. Incluyen sin costo adicional los servicios detallados arriba.
     - ¿Trabajan con obra social? → Sí. Las especialidades se atienden de forma particular y por obra social. Consultanos por la tuya.
     - Se pueden sumar: ¿Qué incluye el servicio?, ¿Cada cuánto se paga?, ¿Se pueden combinar servicios?, ¿Hasta qué nivel dan apoyo escolar? (textos en `contexto.md`).
   - **REQUERIMIENTO OBLIGATORIO:** la agenda tiene que poder actualizarse con facilidad, porque los horarios de los profesionales cambian con frecuencia.
   - **REQUERIMIENTO OBLIGATORIO:** la FAQ "¿La atención es gratuita?" va siempre, porque muchas familias asocian "fundación" con un servicio gratuito y abandonan la consulta al conocer el costo.

8. **Contacto (Formulario)**
   - Contenedor diferenciado: tarjeta centrada con fondo propio, apoyada sobre una franja de fondo con bordes inclinados que ocupa todo el ancho.
   - Título: "Contacto".
   - **Campos:**
     - Nombre y apellido.
     - Teléfono, con selector de prefijo de país y bandera argentina por defecto.
     - Servicio de interés, en un desplegable: Apoyo escolar / Psicopedagogía / Fonoaudiología / Psicología / Pediatría / Acompañamiento integral.
     - Mensaje.
   - **Escritorio:** Nombre y Teléfono en una misma fila; Servicio de interés y Mensaje a ancho completo.
   - **Móvil:** todos los campos a ancho completo.
   - Botón "Enviar" (principal).
   - **REQUERIMIENTO OBLIGATORIO:** formulario 100% en código, sin herramientas externas (sin WPForms ni Google Forms). Al enviarlo, abre WhatsApp (3516095374) con un mensaje prearmado a partir de lo que se completó (nombre, servicio, mensaje y teléfono). Nombre, teléfono y servicio son obligatorios.
   - **REQUERIMIENTO OBLIGATORIO:** los CTA "Contactate" y "Hacé tu consulta" del Inicio llevan a este formulario.

9. **Pie de Página (Footer)**
   - **Escritorio:** logo grande a la izquierda y, a la derecha, tres columnas separadas por líneas verticales:
     - Dirección (Julio de Vedia 2554) y horario (Lunes a Viernes, 09:00 a 21:00), con íconos de ubicación y reloj.
     - Instagram (sietesentidos2023) y WhatsApp (3516095374), con sus íconos.
     - Botones "Quiero donar" (principal) y "Trabajá con nosotros" (secundario).
   - **Móvil:** logo centrado; debajo, los dos botones en una fila y los datos de contacto en una grilla de 2 columnas.
   - Franja inferior de ancho completo: "Todos los derechos reservados © 2026 Fundación Siete Sentidos".
   - **REQUERIMIENTO OBLIGATORIO:** "Quiero donar" es el punto de acceso para el público donante y "Trabajá con nosotros" lleva a Sumate.

---

## Requerimientos globales (aplican a todas las secciones)

- **Íconos:** iconografía lineal, sin relleno, discreta y de apoyo (ni muy fina ni muy gruesa).
- **Botones:** tres variantes, de fondo claro, de fondo oscuro y secundaria con borde, con formas orgánicas. Siempre con estado visual al pasar el cursor (hover).
- **Interacción:** ventanas emergentes para la información complementaria, con íconos que indiquen la acción; animaciones de íconos e ilustraciones al pasar el cursor o al hacer scroll; scroll suave.
- **Retícula de escritorio:** 39 columnas, con 1600 px de espacio de contenido y 160 px de margen por lado.
- **Imágenes:** todas las fotos van con esquinas redondeadas, según el wireframe.
- **Tipografía:** títulos en Bricolage Grotesque; subtítulos, bajadas, botones y menú en Lexend; texto en Atkinson Hyperlegible Next. Todas son de Google Fonts. Pesos y tamaños en `style.md`.
- **Copy:** tono profesional y cercano, con voseo; se dice "niño", "estudiante" o "familia", nunca "chico" (ver `contexto.md`).
- **Prioridad móvil:** casi la totalidad del público busca desde el celular, así que la versión móvil no es una adaptación secundaria.

## Pendientes

- Cómo se muestran el texto y los CTA de las cards de servicios en escritorio.
- A dónde lleva cada "Contactate": al formulario o a WhatsApp.
- El CTA secundario del hero dice distinto en escritorio ("Conocé nuestros servicios") y en móvil ("Ver servicios"). Hay que unificarlo.
- El antetítulo del hero móvil dice "Bajo el mismo techo" y el H1 de escritorio dice "Bajo un mismo techo". Hay que unificarlo.
- Contenido de la agenda (horarios actualizados y horario de pediatría), a validar con la fundadora.
- Si el seguimiento con la escuela aplica a cualquier forma de pago, y si la mesa de juegos es solo de apoyo escolar.
