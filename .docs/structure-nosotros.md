# Estructura de la página Nosotros (Fundación Siete Sentidos — Sitio institucional)

*Este documento define la "receta" de secciones de la página **Nosotros** (`sitio/nosotros/index.html`, URL `/nosotros/`). A esta página lleva el botón "Conocé al equipo" del Inicio. La distribución sale de las capturas de Figma y las fotos, de `sitio/assets/imagenes/equipo/`. Se respeta este flujo de arriba hacia abajo, sin agregar, quitar ni reordenar secciones.*

*El tono, el vocabulario y las reglas de copy están en `contexto.md`. Lo visual sale de `style.md`.*

**Cómo leer este documento**
- **APROBADO:** texto que ya está aprobado y se copia tal cual.
- **PROVISORIO:** texto armado para poder construir la página. Se usa en el código, pero **se va a corregir**.
- **PENDIENTE:** dato que falta. No se completa con supuestos.
- **A DEFINIR:** decisión de diseño o de contenido que todavía no está tomada.
- **REUTILIZA:** componente que ya existe (mismo marcado, mismas clases y mismo JS).

---

0. **Header y Footer (comunes)**
   - **REQUERIMIENTO OBLIGATORIO:** el header y el footer son exactamente iguales en todas las páginas, sin modificaciones. Se copian del Inicio (`<!-- HEADER -->` … `<!-- /HEADER -->` y `<!-- FOOTER -->` … `<!-- /FOOTER -->`).

1. **Hero**
   - **Distribución (captura `imagenes de referencia/Captura de pantalla 2026-10-16 134614.png`):** texto a la izquierda y composición a la derecha, con el video grande, tres fotos y el globo con la cola hacia la derecha. **REUTILIZA** `hero hero--pagina` y `hero__composicion--pagina` de Apoyo escolar, y `video-fondo.js`. Sin botones, como en el wireframe.
   - **Video:** `equipo/WhatsApp Video 2026-10-16 at 13.59.50.mp4`.
   - **Fotos (PROVISORIO):** `novedades/galeria-cocina-docentes.jpg` arriba a la izquierda; el abrazo de Ana y Edith (`equipo/… 13.58.12 (4).jpeg`) en el medio; `apoyo-escolar/hero-mesa-juegos.jpg` abajo a la derecha (ya se usa en el hero de Apoyo escolar). Van en color, como en el resto de los heros.
   - **Contenido (PROVISORIO):** el wireframe tiene los textos del Inicio como relleno. Textos armados con `brief.md`:
     - Antetítulo en mayúsculas: "NOSOTROS".
     - H1: "Educación y salud de la mano".
     - Bajada: "Siete Sentidos nació en 2023 como un espacio de apoyo escolar en la casa de Ana Rinaldi y fue sumando especialidades a pedido de las familias. Hoy docentes y profesionales trabajan juntos para acompañar a cada niño."

2. **¡Conocé al equipo!**
   - **Distribución (captura `imagenes de referencia/Captura de pantalla 2026-10-16 134626.png`):** H2 y debajo la grilla con todas las integrantes, sin paginar. Son 11. Escritorio: 3 por fila (cards de ~498 × 520px, 56px entre columnas y 60px entre filas). Tablet: 3 por fila. Móvil: 2 por fila con 6px de separación. Estilos en `equipo.css` (`integrantes`, `card-integrante`).
   - **Card:** foto en blanco y negro (`style.md`) con `rounded.DEFAULT`; nombre (Lexend 500) y cargo (Lexend 400, mayúsculas) abajo a la izquierda, dentro de una etiqueta pastel para que se lean sobre cualquier foto. Los pasteles se alternan con modificadores (`card-integrante--rosa`, `--verde`, `--naranja`, `--amarillo`). El color no indica nada.
   - **Integrantes (en este orden; nombres y áreas de `informacion/horarios.md`):**

     | # | Foto (`equipo/WhatsApp Image 2026-10-16 at …`) | Nombre | Cargo |
     |---|---|---|---|
     | 1 | `13.58.12 (2)` | Ana Rinaldi | Fundadora y maestra de apoyo escolar nivel inicial |
     | 2 | `13.58.12` | Jaquelina Gutiérrez | Profesora de inglés |
     | 3 | `13.56.23 (1)` | Mariela Agüero | Auxiliar (ayuda en todas las áreas) |
     | 4 | `13.57.14` | Rocío Godoy | Psicóloga |
     | 5 | `13.56.22` | Evelin Márquez | Nutricionista |
     | 6 | `13.56.23` | Melisa Riera | Psicopedagoga |
     | 7 | `13.58.11 (1)` | Julieta Zeballos | Fonoaudióloga |
     | 8 | `13.58.11` | Andrea Novero | Maestra de apoyo escolar secundario |
     | 9 | `13.58.12 (3)` | Edith Pintos | Psicóloga |
     | 10 | `13.58.12 (1)` | Candelaria Gaitán | Psicopedagoga |
     | 11 | **PROVISORIO:** `especialidades/hero-encastre.jpg` | Gabriela Cumpian | Pediatra |

   - **PENDIENTE:** foto de Gabriela Cumpian. Hasta tenerla, va la del encastre de Especialidades.
   - **ID de ancla:** `#equipo`.

3. **Gracias a nuestro equipo**
   - **Distribución (misma captura):** escritorio, dos columnas alineadas arriba: texto a la izquierda (785px) y foto grupal a la derecha (775 × 300px). Móvil: el texto y debajo la foto.
   - **Foto:** `equipo/… 13.56.23 (2).jpeg`, en blanco y negro, con la forma "apretada" arriba y abajo (**REUTILIZA** `--mascara-apretada`, la de la foto del equipo del Inicio).
   - **Texto (de la captura; solo se corrigió "a traves" → "a través"):**
     - H2: "Gracias a nuestro equipo".
     - "Esta fundación no es solamente mía: siempre dije que es un proyecto de amor que se irradia hacia alrededor. Todos los que van llegando se suman a través de sus valores, su predisposición y su conocimiento, y así se va formando esta red y esta comunidad que conformamos para cumplir con la gran misión que llevamos adelante."
     - "Por eso, todo mi reconocimiento y mi agradecimiento sincero por los momentos compartidos, por el compromiso puesto de manifiesto y por todo lo que viene por delante: seguir aunando esfuerzos para hacernos grandes entre todas."
     - Firma: "**Ana Rinaldi**, Fundadora de Siete Sentidos."
   - **ID de ancla:** `#agradecimiento`.

---

## SEO (PROVISORIO)
- `<title>`: "Quiénes somos: el equipo de la fundación | Siete Sentidos".
- Meta description: "Conocé al equipo de la Fundación Siete Sentidos, en Yofre Norte, Córdoba: docentes de apoyo escolar, psicólogas, psicopedagogas, fonoaudióloga, nutricionista y pediatra que trabajan juntas."

## Pendientes
- Foto de Gabriela Cumpian (pediatra).
- Textos definitivos del hero.
- Fotos del hero: confirmar la selección (la de la mesa de juegos se repite con Apoyo escolar).
- Agradecimiento: confirmar si se corrige "se irradia hacia alrededor".
