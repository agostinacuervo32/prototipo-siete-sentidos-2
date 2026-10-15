---
name: Siete Sentidos — Sistema visual del sitio
mode: light
colors:
  # --- Paleta de marca (fuente de verdad: lámina "Propuesta de paleta" de la tesis) ---
  # Cuatro tonos, cada uno con versión oscura, media y pastel, más negro suave y blanco.
  rosa-oscuro: '#3A2220'
  rosa: '#955450'
  rosa-pastel: '#F2BFBA'
  verde-oscuro: '#1F3328'
  verde: '#355241'
  verde-pastel: '#BCE0C7'
  naranja-oscuro: '#3D2312'
  naranja: '#F08A4B'          # mandarina
  naranja-pastel: '#FFD4B0'   # durazno
  amarillo-oscuro: '#3A2C0C'
  amarillo: '#F5C84C'         # girasol
  amarillo-pastel: '#FFF0B8'  # manteca
  negro: '#2B2522'            # reemplaza al negro puro: nunca usar #000000
  blanco: '#FFFFFF'
  # --- Roles (propuesta: confirmar con el programa de diseño) ---
  principal: '#355241'        # verde
  secundario: '#955450'       # rosa
  terciario-1: '#F08A4B'      # naranja
  terciario-2: '#F5C84C'      # amarillo
  contraste: '#2B2522'        # negro suave
  background: '#FFFFFF'
  on-background: '#2B2522'
  # --- Superficies planas (fondos de sección y contenedores) ---
  surface-rosa: '#F2BFBA'
  surface-verde: '#BCE0C7'
  surface-naranja: '#FFD4B0'
  surface-amarillo: '#FFF0B8'
  surface-inversa: '#355241'
  on-surface-rosa: '#3A2220'
  on-surface-verde: '#1F3328'
  on-surface-naranja: '#3D2312'
  on-surface-amarillo: '#3A2C0C'
  on-surface-inversa: '#FFFFFF'
gradients:
  # Propuesta: la premisa pide 3 degradados; siempre entre pasteles, nunca en texto
  abrazo: 'linear-gradient(135deg, #F2BFBA 0%, #FFD4B0 100%)'       # rosa pastel → durazno
  calma: 'linear-gradient(135deg, #BCE0C7 0%, #FFF0B8 100%)'        # menta → manteca
  sol: 'linear-gradient(135deg, #FFD4B0 0%, #FFF0B8 100%)'          # durazno → manteca
typography:
  # Tamaños: escritorio medido en Figma sobre lienzo 1920px; móvil sobre iPhone 16 (393px).
  # Los clamp() interpolan entre ambos.
  h1:
    fontFamily: Bricolage Grotesque
    fontWeight: '800'
    fontSize: clamp(35px, 31.1px + 0.98vw, 50px)   # 35 móvil / 50 escritorio
    lineHeight: '1.05'
    letterSpacing: '-0.02em'
  h2:
    fontFamily: Bricolage Grotesque
    fontWeight: '800'
    fontSize: clamp(30px, 26.1px + 0.98vw, 45px)   # 30 móvil / 45 escritorio
    lineHeight: '1.1'
    letterSpacing: '-0.015em'
  h2-lateral:
    # Variante para títulos que acompañan un carrusel al costado (ej. "Opiniones de las familias")
    fontFamily: Bricolage Grotesque
    fontWeight: '800'
    fontSize: clamp(30px, 22.3px + 1.96vw, 60px)   # 60 escritorio
    lineHeight: '1.05'
    letterSpacing: '-0.02em'
  subtitulo:
    fontFamily: Lexend
    fontWeight: '500'
    fontSize: clamp(24px, 21.9px + 0.52vw, 32px)   # 32 escritorio / 24 móvil (móvil a confirmar)
    lineHeight: '1.2'
  bajada:
    fontFamily: Lexend
    fontWeight: '300'
    fontSize: clamp(16px, 15px + 0.26vw, 20px)     # 16 móvil / 20 escritorio
    lineHeight: '1.35'
  texto:
    fontFamily: Atkinson Hyperlegible Next
    fontWeight: '400'
    fontSize: clamp(16px, 15px + 0.26vw, 20px)     # 20 escritorio / 16 móvil (móvil a confirmar)
    lineHeight: '1.5'
  aclaracion:
    fontFamily: Atkinson Hyperlegible Next
    fontWeight: '300'
    fontStyle: italic
    fontSize: clamp(14px, 13.5px + 0.13vw, 16px)   # 16 escritorio / 14 móvil (móvil a confirmar)
    lineHeight: '1.4'
  boton:
    fontFamily: Lexend           # en el wireframe figura Inter como placeholder (ver Buttons)
    fontWeight: '400'
    fontSize: clamp(16px, 15.5px + 0.13vw, 18px)   # 18 escritorio (Figma) / 16 móvil (a confirmar)
    lineHeight: normal
  menu-link:
    fontFamily: Lexend
    fontWeight: '400'
    fontSize: 18px
    lineHeight: '1'
fonts:
  google: >-
    https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Lexend:wght@300;400;500&family=Atkinson+Hyperlegible+Next:ital,wght@0,400;0,600;1,300&display=swap
rounded:
  sm: 12px        # inputs chicos, chips de formulario
  DEFAULT: 20px   # cards, acordeones, testimonios, imágenes (medido en Figma)
  lg: 32px        # contenedores grandes, bloques de sección con fondo
  full: 9999px    # botones, menú, burbujas, ítems de navegación
borders:
  boton: 1px      # botones y menú (medido en Figma)
  linea: 2px      # íconos, ilustraciones lineales, inputs
buttons:
  # Medidas del wireframe de Figma (componentes "principal button" y "secondary button")
  padding: '9px 21px 9px 22px'
  height-escritorio: 42px
  height-movil: 39px
  radius: 9999px                # en Figma 22px sobre 42px de alto = pill completa
  border: 1px solid
  principal: relleno + borde del mismo color
  secundario: solo borde, sin fondo
layout:
  escritorio:
    lienzo: 1920px
    contenido: 1600px
    margen: 160px            # por lado, fuera de los 1600
    columnas: 39
  movil:
    lienzo: 393px            # iPhone 16
    contenido: 357px
    margen: 18px             # equivale a los 50px sobre 985px de la tesis (escala ×2,76)
    columnas: 12
spacing:
  unit: 8px
  section-padding: 120px          # escritorio (en Figma las secciones están separadas entre 90 y 180px)
  section-padding-mobile: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 60px
  gap-cards-escritorio: 44px      # fila de 5 cards de 285px
  gap-cards-movil: 6px            # fila de 2 cards de 175px
  header-top-escritorio: 51px
  header-top-movil: 23px
motion:
  ease: 'cubic-bezier(.2,.8,.2,1)'
  ease-rebote: 'cubic-bezier(.3,1.4,.4,1)'
  duracion: 250ms-450ms
libraries:
  base: [Vanilla HTML, CSS, JS]
  opcional: [GSAP, ScrollTrigger]
---

## Marca y estilo

El sitio de la Fundación Siete Sentidos traduce el concepto gráfico **"Abrir y abrazar"**. La fundación funciona como una casa de **puertas abiertas** que recibe a toda la comunidad, y como un **abrazo**: el acompañamiento integral y afectivo que cada niño y cada familia encuentran al llegar. Primero se *abre* para recibir y después se *abraza* para contener.

Esto se aplica con dos tipos de forma, que conviven en todo el sitio:

- **Abrir → formas abiertas y lineales, con borde y sin fondo.** Son los elementos que **invitan a avanzar**: el botón secundario, íconos, ilustraciones lineales, flechas, links, subrayados y transiciones entre secciones con líneas a mano alzada.
- **Abrazar → formas cerradas, plenas y redondeadas, como figuras planas rellenas.** Son los elementos que **contienen la información**: cards, acordeones, testimonios, el menú flotante, bloques de sección con fondo, el botón principal y el blob que aparece en los botones.

El lenguaje es **actual, plano y luminoso**: colores claros con su versión oscura para dar contraste, todo redondeado, sin sombras, vidrios ni texturas. Tiene que transmitir **calma y profesionalismo** sin perder la calidez que pide un público de familias con niños. El proyecto busca demostrar que un lenguaje visual contemporáneo puede aplicarse a un sitio institucional vinculado a la infancia, y que la fundación sea recordada y distinguida de otras organizaciones.

**Tono de los textos:** profesional y cercano, sin el tono "amoroso de maestra". Se escribe **niño, estudiante o familia** según corresponda; nunca "chico".

## Colors

La paleta conserva los colores actuales de la fundación (el rosa y el verde del logo, y el naranja y el amarillo de su comunicación reciente) y los ajusta para que convivan. El naranja y el amarillo se desaturaron, se sumó la versión oscura de cada color y el amarillo pastel, y el negro puro se reemplazó por un negro suave para evitar un contraste excesivo.

| Familia | Oscuro | Medio | Pastel |
|---|---|---|---|
| Rosa | `#3A2220` | `#955450` | `#F2BFBA` |
| Verde | `#1F3328` | `#355241` | `#BCE0C7` |
| Naranja | `#3D2312` | `#F08A4B` | `#FFD4B0` |
| Amarillo | `#3A2C0C` | `#F5C84C` | `#FFF0B8` |
| Neutros | `#2B2522` negro suave | | `#FFFFFF` blanco |

**Roles (propuesta):**

- **Verde `#355241` → principal.** Botón principal, títulos sobre fondos claros, sección inversa (fondo oscuro) y footer. Es el color que transmite calma y confianza.
- **Rosa `#955450` → secundario.** Títulos sobre rosa pastel, botón secundario sobre fondos claros, acentos de marca.
- **Naranja `#F08A4B` y amarillo `#F5C84C` → terciarios.** Acentos de energía: ilustraciones, detalles, el destacado de "Sumate" en el menú. **Nunca llevan texto blanco.**
- **Negro suave `#2B2522` → contraste.** Todo el texto corrido sobre blanco y sobre pasteles.
- **Pasteles → fondos.** Fondos de sección, cards y acordeones.
- **Oscuros de cada familia → texto sobre su propio pastel** (por ejemplo, verde oscuro sobre menta). Sirven para que el texto se vea de la familia sin perder contraste.

**Combinaciones de texto aprobadas (WCAG 2.1 AA, 4,5:1):**

| Texto | Fondo | Contraste |
|---|---|---|
| Negro suave | Blanco | 15,1:1 |
| Negro suave | Cualquier pastel | 9,3 a 13,2:1 |
| Negro suave | Naranja `#F08A4B` | 6,1:1 |
| Negro suave | Amarillo `#F5C84C` | 9,5:1 |
| Oscuro de cada familia | Su pastel | 9,1 a 11,9:1 |
| Blanco | Verde | 8,6:1 |
| Blanco | Rosa | 5,7:1 |
| Rosa pastel | Verde | 5,3:1 |
| Amarillo pastel | Rosa | 5,0:1 |
| Verde | Menta / manteca | 6,0 / 7,6:1 |
| Amarillo | Verde | 5,4:1 |

**Combinaciones prohibidas para texto:** blanco sobre naranja (2,5:1) o sobre amarillo, naranja sobre verde (3,5:1) y rosa sobre rosa pastel (3,5:1). Esta última solo se admite en títulos de 24px o más.

**Reglas de uso:**

- **Máximo un tono terciario fuerte por pantalla** (naranja o amarillo medio). Los pasteles pueden convivir.
- Los **degradados** van siempre entre pasteles (ver `gradients`) y nunca en texto, bordes ni botones.
- **Daltonismo:** el par rosa–verde se confunde con protanopia y deuteranopia. El color **nunca es el único indicador** de algo (criterio 1.4.1 de WCAG): cada servicio o sección lleva además su título, ícono o ilustración, y "Sumate" se distingue también por la forma (pill rellena), no solo por el color. Cuando el rosa y el verde van juntos, uno es claro y el otro oscuro.

## Typography

Tres familias, cada una con una función delimitada. Las tres son gratuitas, de Google Fonts.

- **Bricolage Grotesque (títulos) — ExtraBold 800.** Tiene personalidad marcada y es fácil de recordar. El trazo se afina en las uniones, con un contraste de grosores similar al del logo. Traslada los rasgos de la tipografía del logo (bold, minúsculas, descontracturada), que no se puede usar en el sitio. Se usa en H1 y H2, siempre en minúsculas con mayúscula inicial y con tracking negativo en tamaños grandes.
- **Lexend (subtítulos, bajadas, botones y menú) — 300, 400 y 500.** Es geométrica y simple, y conserva terminales como el logo. Se usa en Medium 500 para subtítulos, Light 300 para bajadas y preguntas de acordeón, y Regular 400 para botones y links del menú.
- **Atkinson Hyperlegible Next (texto) — 400 y Light Italic 300.** Es levemente condensada, con aperturas amplias y alta legibilidad en móvil. Se usa en todo el texto corrido, en las descripciones de cards y en las respuestas de acordeón. La Light Italic queda para las aclaraciones.

**Jerarquía (medida en el wireframe de Figma):**

| Nivel | Familia | Peso | Escritorio | Móvil |
|---|---|---|---|---|
| H1 | Bricolage Grotesque | 800 | 50px | 35px |
| H2 | Bricolage Grotesque | 800 | 45px (60px en título lateral) | 30px |
| Subtítulo | Lexend | 500 | 32px | 24px* |
| Bajada | Lexend | 300 | 20px | 16px |
| Texto | Atkinson Hyperlegible Next | 400 | 20px | 16px* |
| Aclaración | Atkinson Hyperlegible Next | 300 itálica | 16px | 14px* |
| Botón | Lexend | 400 | 18px | 16px |

\* Valores móviles inferidos de los tamaños de caja del wireframe; confirmar en Figma.

- H1 **solo** en el hero de cada página.
- Texto corrido con un ancho máximo de ~65 caracteres.
- Tipografía fluida con `clamp()` en todos los niveles (ya está en los tokens).
- El wireframe usa Inter en botones y menú como placeholder: en el diseño final van en Lexend.

## Layout & Spacing

Las retículas son las definidas en la tesis y en el wireframe de Figma. El contenido queda centrado para que el recorrido de lectura sea simple y vaya hacia el centro.

**Escritorio (lienzo 1920px):**

- Área de contenido de **1600px** con **160px de margen por lado**. Los márgenes no están incluidos en los 1600px.
- Retícula de **39 columnas**, elegida porque permite distribuir 2, 4 o 5 cards por fila.
- Distribuciones medidas en Figma: 5 cards de 285px con 44px de separación; 2 bloques de 800px; dos columnas de ~785px con 32px de separación (imagen + acordeón); testimonios de 411px con 20px de separación.

**Móvil (iPhone 16, 393px):**

- Área de contenido de **357px** con **18px de margen por lado**. Es la misma proporción de los 985px + 50px de margen de la lámina de la tesis, que está dibujada a escala ×2,76.
- Retícula de **12 columnas**.
- Distribuciones: 2 cards por fila (175px, 6px de separación) o una card ancha centrada.

**Implementación:**

```css
.container {
  max-width: calc(1600px + 2 * var(--margen));
  margin-inline: auto;
  padding-inline: var(--margen);
}
:root { --margen: 18px; }
@media (min-width: 768px)  { :root { --margen: clamp(18px, 8.333vw, 160px); } }
.grid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); }
@media (min-width: 1024px) { .grid { grid-template-columns: repeat(39, minmax(0, 1fr)); } }
```

Entre 768 y 1024px (tablet) no hay diseño todavía: el margen se interpola y se mantiene la retícula de 12 columnas.

**Ritmo vertical:** cada sección se separa con `section-padding` (120px escritorio, 64px móvil). Dentro de una sección, título y bajada van juntos (6px), y entre el encabezado y el contenido hay 31 a 60px, como en el wireframe.

## Elevation & Depth

**Todo es plano.** La profundidad se resuelve con color, no con sombras.

- **Sin sombras, sin glassmorphism, sin blur, sin grano.**
- Un elemento se separa del fondo cambiando de tono: card pastel sobre blanco, card blanca sobre pastel, o sección inversa en verde.
- El menú flotante también es plano: se despega del contenido por su relleno y por no tocar los bordes de la pantalla.

## Shapes

**Todo lleva borde redondeado.** No existen esquinas rectas en el sitio.

- **`rounded.full` (pill / completamente redondo):** botones, menú flotante, ítems del menú, botón de WhatsApp y cualquier elemento accionable de una sola línea.
- **`rounded.DEFAULT` (20px):** cards, acordeones (pregunta y respuesta por separado), testimonios, imágenes y placeholders de imagen. Es el valor usado en el wireframe.
- **`rounded.lg` (32px):** bloques grandes con fondo, como la sección de contacto o un formulario contenido.
- **`rounded.sm` (12px):** inputs y elementos chicos de formulario.
- Las formas orgánicas (blobs, ilustraciones a mano alzada, transiciones curvas entre secciones) acompañan este lenguaje.
- Cuando un contenedor se divide en partes (testimonio con cabecera y cuerpo, acordeón abierto), cada parte lleva sus propias esquinas redondeadas con 3px de separación entre ellas, como en Figma.

**Abierto o cerrado:** antes de diseñar un elemento, decidir si invita a avanzar (borde sin fondo, "abrir") o contiene información (figura plana rellena, "abrazar").

## Components

### Buttons

El **estilo** del botón sale del wireframe de Figma y los **colores**, de la paleta. Del archivo `boton-blob-triangulo.html` se toma **solo la animación**; sus estilos (borde de 2px, tamaños de letra, colores, fondo y tipografías del hero) no se usan.

**Estilo (componentes "principal button" y "secondary button" de Figma):**

- Pill completamente redonda (`rounded.full`). En Figma el radio es de 22px sobre 42px de alto.
- **Borde de 1px**, padding de `9px 21px 9px 22px` y alto de **42px en escritorio** y **39px en móvil**.
- Texto de 18px Regular, sin mayúsculas sostenidas. En el wireframe figura Inter como placeholder; en el sitio va en **Lexend 400** para respetar las tres familias de la premisa.
- **Principal:** relleno y borde del mismo color.
- **Secundario:** solo borde, sin fondo.
- En móvil el alto visual queda en 39px, pero el área táctil se amplía a 44px con un pseudo-elemento invisible.

**Variantes y colores:**

| Variante | Uso | Reposo | Color del blob | Texto y borde dentro del blob / al presionar |
|---|---|---|---|---|
| Principal — fondo claro | CTA principal sobre blanco o pasteles | Relleno y borde verde `#355241`, texto blanco | Rosa pastel `#F2BFBA` | Verde `#355241` |
| Principal — fondo oscuro | CTA sobre la sección verde o el footer | Relleno y borde rosa pastel `#F2BFBA`, texto verde `#355241` | Amarillo pastel `#FFF0B8` | Verde `#355241` |
| Secundario | Acción de menor jerarquía, al lado del principal (ej. "¿Te quedaron dudas?", "Contactate") | Sin fondo, borde y texto verde `#355241` | Verde `#355241` | Rosa pastel `#F2BFBA` |

Sobre fondo oscuro, el secundario invierte sus colores: borde y texto rosa pastel, blob rosa pastel y texto verde dentro del blob.

Todas las combinaciones pasan AA: blanco sobre verde 8,6:1; verde sobre rosa pastel 5,3:1; verde sobre amarillo pastel 7,6:1. Nunca se hacen botones con texto blanco sobre naranja o amarillo.

**Animación (lo único que se toma del HTML de referencia; copiar la lógica del JS tal cual):**

1. **Hover:**
   - El texto crece **+3pt**, con la transición `font-size .45s cubic-bezier(.3,1.4,.4,1)`.
   - **Efecto magnético:** el botón se desplaza un 15% en X y un 20% en Y hacia el cursor (`transform .4s cubic-bezier(.2,.8,.2,1)`).
   - El cursor desaparece (`cursor: none`) y su lugar lo ocupa un **blob** relleno de radio 34px en el color del blob de la variante. El blob sigue al cursor con retraso (seguimiento 0,045), se estira con un resorte (rigidez 0,09, amortiguación 0,8) y rebota al soltarse. Fuera del botón sigue al cursor de cerca (0,35) sin verse, para aparecer justo debajo de la flecha al entrar.
   - Dentro del blob se ve una **copia del botón con el texto y el borde en el color inverso**, recortada con la forma del blob (`clip-path: path()`). El texto cambia de color solo donde pasa el blob.
2. **Presionado:** el botón se rellena por completo con el color del blob y el texto pasa al color inverso. El blob se va de golpe y vuelve el cursor.
3. **Al soltar o salir:** todo vuelve a reposo.
4. **Foco por teclado:** se aplica el estado presionado, con un anillo de foco de 3px en el color del borde y 3px de separación.
5. **Dispositivos táctiles (`hover: none`):** no hay blob. El tap muestra el estado presionado.
6. **`prefers-reduced-motion`:** sin blob ni efecto magnético. El hover pasa al estado presionado con una transición de color.

### Cursor

Se usa el **cursor minimalista** de la tesis: el botón ya tiene una animación compleja y el usuario no debe dividir su atención entre dos elementos en movimiento.

- La forma sale de la exploración de cursores de la tesis. El triángulo del HTML de referencia era una prueba y no se toma.
- Va en el color principal (verde) sobre fondos claros y en rosa pastel sobre fondo verde.
- Lo único que se toma del HTML es su relación con el botón: **sobre los botones desaparece y lo reemplaza el blob**, y vuelve al presionar.
- Sobre campos de texto vuelve el cursor de texto del sistema.

### Menú (navbar flotante)

Es una **forma cerrada ("abrazar")**: una pill completamente redonda que flota sin tocar los bordes de la pantalla.

- **Escritorio:**
  - Ocupa el ancho del contenido (1600px), separado 51px del borde superior, con 93px de alto y padding de `16px 41px`.
  - El logo va a la izquierda; los links (Apoyo escolar, Especialidades, Nosotros, Novedades, Sumate) en el centro; y el botón secundario "Contactate" a la derecha.
- **Móvil:** pill de 357 × 55px, separada 23px del borde superior, con el logo a la izquierda y el ícono de menú hamburguesa (38px) a la derecha. El menú desplegado es un panel con `rounded.lg`.
- **Relleno (propuesta):** blanco sobre secciones de color y rosa pastel sobre secciones blancas, plano y sin sombra. Al hacer scroll el menú queda fijo (`position: sticky`, `top: max(51px, env(safe-area-inset-top))`).
- **Links:** Lexend 400 de 18px con padding de 10px y 5px de separación. En hover, una pill pastel aparece detrás del link (forma cerrada). El link activo lleva subrayado lineal de 2px (forma abierta).
- **"Sumate"** se diferencia en otro color (naranja) **y además en la forma**, como pill rellena naranja con texto negro suave, para no depender solo del color.

### Cards

Son **formas cerradas** con `rounded.DEFAULT`, de relleno plano y sin borde ni sombra.

- **Card de servicio incluido** (fila de 5 en escritorio): ilustración o imagen arriba (285 × 356px, 20px de radio), subtítulo centrado, texto centrado y 15px de separación entre ellos.
- **Card de testimonio:** una cabecera (65px, con estrellas) y un cuerpo con el texto de la reseña, cada uno con su radio y 3px de separación. Van en un carrusel con flechas de íconos lineales y un fundido en el borde derecho. Los testimonios salen de las reseñas reales de Google Maps de la fundación, nunca inventadas.
- **Hover (las cards accionables):** el relleno sube un tono dentro de su familia y el ícono o ilustración se anima. No hay elevación ni sombra.

### Acordeón (preguntas frecuentes)

- La pregunta va en una pill de 56px de alto con `rounded.DEFAULT`, en Lexend 300 de 20px, con un chevron lineal a la derecha.
- La respuesta va en un bloque aparte de 20px de radio, separado 3px de la pregunta, en Atkinson de 20px.
- Entre preguntas hay 9px de separación.
- **Relleno:** el pastel de la sección. La pregunta abierta usa el tono oscuro de la familia para el texto.
- **Animación:** el chevron rota 180° y la altura se abre con `grid-template-rows: 0fr → 1fr`.

### Formularios

Contacto de familias y postulación de profesionales.

- Son **100% código**, sin WPForms, Google Forms ni servicios pagos.
- Los inputs van con borde lineal de 2px y `rounded.sm`, sin fondo (forma abierta). En foco se rellenan con el pastel de la sección (forma cerrada) y el borde pasa al verde.
- El label va siempre arriba del campo, en Lexend 400 de 16px; nunca se usa solo el placeholder.
- Los errores van en rosa `#955450` con un ícono y un texto que explica cómo corregirlo. El color nunca es la única señal.
- El formulario de cada página llega con el servicio preseleccionado según el botón que se tocó, y también se puede cambiar a mano en un desplegable.

### Iconografía

- Son **íconos lineales abiertos**: la línea no se cierra en algún punto, o hay elementos que no se apoyan en ninguna parte. Trazo de 2px, puntas redondeadas y sin relleno.
- Deben **pasar desapercibidos**: solo se usan donde hacen falta (menú hamburguesa, flechas de carrusel, chevrons, redes sociales, WhatsApp).
- Llamar la atención es tarea de los botones, las imágenes y las ilustraciones.

### Imágenes e ilustraciones

- Las **ilustraciones son personalizadas**, de estética limpia y estilo infantil, para lo más importante. Son lineales y a mano alzada ("abrir"), y pueden apoyarse sobre formas planas rellenas de la paleta ("abrazar"), como el óvalo detrás del logo.
- Las **fotos del equipo van en blanco y negro**, con `rounded.DEFAULT`.
- Las transiciones entre secciones son **curvas o con líneas a mano alzada**, no cortes rectos.

### Motion

- **Scroll suave** y **animaciones de entrada envolventes** por sección: fade más un desplazamiento corto. El contenido es visible en reposo; nunca queda con `opacity: 0` esperando el scroll.
- Íconos e ilustraciones se animan en hover o atados al scroll.
- Hay **loops en puntos clave** que no interrumpen la lectura, como una ilustración que respira en el hero.
- Duraciones de 250 a 450ms en microinteracciones, con easing `cubic-bezier(.2,.8,.2,1)`.
- GSAP + ScrollTrigger es opcional, solo si hace falta para las animaciones atadas al scroll. El botón y el cursor funcionan en vanilla JS.
- Se respeta `prefers-reduced-motion` en todo el sitio.

### Ventanas emergentes

Despliegan información complementaria a la que se está leyendo.

- Son un panel con `rounded.lg` y relleno blanco o pastel. El fondo se oscurece con negro suave al 40%.
- El botón de cerrar es un ícono lineal dentro de una pill.
- El ícono que abre la ventana tiene que ser visible e indicar la acción.

## Accesibilidad

- El texto cumple **AA** en todas las combinaciones (ver tabla de Colors).
- Todo elemento interactivo tiene **estados distintos de hover, foco, activo y deshabilitado**. El foco por teclado siempre es visible.
- El color **nunca es el único indicador** (criterio 1.4.1 de WCAG), algo clave por el par rosa–verde.
- El área táctil mínima es de 44px en móvil.
- El cursor personalizado y el blob no reemplazan ninguna información: si fallan, el sitio funciona igual.

## Restricciones explícitas

1. **Nunca usar negro puro `#000000`.** El texto oscuro va en negro suave `#2B2522` o en el oscuro de cada familia.
2. **Nunca texto blanco sobre naranja o amarillo.**
3. **Todo redondeado:** no hay esquinas rectas. Los botones y el menú son completamente redondos (`rounded.full`).
4. **Sin sombras, glassmorphism, blur ni grano:** el sistema es plano.
5. **Abrir y abrazar:** lo que invita a avanzar es lineal con borde y sin fondo; lo que contiene información es una figura plana rellena.
6. **Máximo un terciario fuerte** (naranja o amarillo medio) por pantalla.
7. **Los degradados solo van entre pasteles**, nunca en texto, bordes ni botones.
8. **Sitio independiente de WordPress:** HTML, CSS y JS propios, con formularios 100% código y sin servicios pagos.
9. **Testimonios solo reales**, tomados de las reseñas de Google Maps.
10. **Lenguaje:** niño, estudiante o familia; nunca "chico".

## Referencias tomadas

- **Tesis (Prototipado):** paleta, moodboard y prueba tipográfica, iconografía, exploración de cursores, bocetado y digitalización de botones (opción A/E elegida), y retículas de escritorio y móvil.
- **Wireframe de baja del Inicio (Figma):** estilo de los botones (principal relleno, secundario con borde, borde de 1px, padding y alto), tamaños tipográficos, radios (botones y menú en pill, cards y acordeones con 20px), medidas del menú flotante, márgenes y distribuciones de cards. Los colores del wireframe no se toman en cuenta, porque está en escala de grises.
- **`boton-blob-triangulo.html`:** solo la animación del botón (blob con resorte, copia en color inverso, efecto magnético, crecimiento del texto y relleno al presionar). Sus estilos no se toman.
- **Sitios analizados (Arun, Wealthsimple, Edra, Augen Pro, Timeless):** cursor reactivo, botón que convierte el cursor en su relleno, menú flotante, animaciones de entrada, scroll suave, ilustraciones a mano alzada, transiciones curvas y fotos del equipo en blanco y negro.
