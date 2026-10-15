# Stack Tecnológico Premium (No-Build)

*Este archivo especifica el ecosistema tecnológico estricto que el agente debe utilizar para construir landing pages de calidad superlativa y premium. El objetivo central es lograr interfaces modernas, fluidas y de alto rendimiento, **sin requerir ningún paso de compilación (no build step)**.*

## Regla de Oro: Cero Compilación
Todo el código debe funcionar directamente en el navegador.
- **NO** uses NPM, Webpack, Vite, Parcel, ni frameworks abstractos (React, Vue, Svelte).
- Todo debe ser Vanilla HTML, CSS y JS, integrando librerías exclusivamente mediante etiquetas `<script>` o `<link>` desde un CDN rápido (ej. unpkg, cdnjs o jsdelivr).
- La generación en la carpeta landing es la que se verá reflejada en el despliegue a cloud

## 1. Animaciones y Microinteracciones (Fundamental)
Las páginas deben sentirse "vivas". Se requiere el uso intensivo pero sutil de animaciones para elevar la percepción de calidad.
- **GSAP (GreenSock):** Es la librería **obligatoria** para todas las animaciones críticas, timelíneas complejas y transiciones de entrada. Su rendimiento es insuperable.
- **Microinteracciones:** Todo elemento interactivo (botones, tarjetas, enlaces) debe tener estados `hover` fluidos (usando CSS `transition` o GSAP). Cambios suaves de color, escala, o posición son obligatorios.

## 2. Scroll Animations y Fluidez
El scroll no debe ser aburrido; debe guiar la narrativa.
- **GSAP ScrollTrigger:** Utiliza este plugin de GSAP para revelar elementos a medida que el usuario hace scroll (Fade-ins, paralaje sutil, revelado de texto). Que ningún bloque de contenido aparezca estático.

## 3. Carruseles y Sliders
- **Exclusivamente con CSS, JS y HTML:** Si necesitas un carrusel (para testimonios, logos de clientes, o galerías de productos). Debe ser táctil y moderna. En todos los carruseles *DEBE* ser arrastrable y mostrarse en loop para que simule que no tiene fin.

## 4. Reproductores de Video
- **Plyr:** Si necesitas integrar video interactivo (nativo HTML5, YouTube o Vimeo), usa **Plyr**. Es extremadamente ligero, responsivo y ofrece una UI muchísimo más limpia y premium que los controles nativos del navegador.

## 5. Imágenes (Placeholder Dinámicos) y Microinteracciones Clave
Las imágenes nunca deben verse estáticas, aburridas o provenir de fuentes genéricas lentas.
- **Fuente Obligatoria (static.photos):** Cuando no haya activos finales provistos en el `brief.md`, **DEBES** utilizar imágenes de `https://static.photos`.
- **Formato URL:** `https://static.photos/[category]/[width]x[height]/[seed]`
- **Categorías permitidas:** `nature, office, people, technology, minimal, abstract, aerial, blurred, bokeh, gradient, monochrome, vintage, white, black, blue, red, green, yellow, cityscape, workspace, food, travel, textures, industry, indoor, outdoor, studio, finance, medical, season, holiday, event, sport, science, legal, estate, restaurant, retail, wellness, agriculture, construction, craft, cosmetic, automotive, gaming, education`.
- **Dimensiones Restringidas (CRÍTICO):** SOLO están permitidas las siguientes dimensiones preestablecidas: `200x200`, `320x240`, `640x360`, `1024x576`, y `1200x630`. Usa resoluciones altas (`1200x630`) para Heroes y resoluciones medias (`640x360`) para tarjetas de beneficios/servicios.
- **Seeds Mayores a 1 (CRÍTICO):** ¡NUNCA uses `1` como seed! Usa números aleatorios o específicos más altos (ej. 15, 42, 99) para evitar fotos genéricas repetidas.
  1. Un efecto revelado de entrada (ej. un contenedor con `overflow: hidden` y la imagen escalando de `1.2` a `1` usando `ScrollTrigger`).
  2. Un suave efecto `hover` (CSS o GSAP) que modifique muy sutilmente la escala (`scale: 1.03`) o el brillo.

## 6. Logotipos y Carruseles (Marquee)
- **Repositorio Global `ipsums` (CRÍTICO):** Todos los placeholders de logotipos y favicons (ej. `logoipsum-1.png` a `logoipsum-8.png`, `favipsum.png`) se almacenan de forma permanente en la carpeta raíz del proyecto, es decir: `ipsums/` (no dentro de landing).
- **Regla de Copiado:** Al generar o reconstruir una landing page nueva (cuando la carpeta `landing/assets/images/` se borra o está vacía), es OBLIGATORIO que copies los archivos desde `ipsums/` hacia `landing/assets/images/` usando comandos de terminal (`cp ipsums/* landing/assets/images/`). **Nunca** enlaces imágenes directamente desde la carpeta `ipsums`, siempre cópialas a `landing/assets/images/` para mantener la encapsulación del build de la landing.
- **Carruseles de Logos (Marquee Premium):** Siempre que integres un banner de empresas/clientes (Social Proof), **DEBE ser un carrusel en bucle (loop) interactivo**.
  - Utiliza CSS, JS y HTML para hacer un marquee en modo continuo/autoplay en loop.
  - Debe permitir a los usuarios **arrastrarlo (drag)**.
  - El contenedor principal **debe** tener máscaras de difuminado (blur/fade) en los bordillos izquierdo y derecho usando CSS (ej. `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`), para que los logos desaparezcan suavemente al salir de pantalla.
  - El efecto de arrastre **debe** dejar el carrusel en donde se dejó de arrastrar y continuar el movimiento hacia la izquierda desde donde se suelta.

## 7. Formularios
- Todos los formularios del sitio se hacen **puramente con código** (HTML, CSS y JS propios).
- **No** se usan servicios ni widgets externos de formularios o chat (sin WPForms, Google Forms, GoHighLevel ni servicios pagos).
- Las respuestas llegan por mail a la fundación. Si para el envío hace falta definir algo técnico que no está en los `.md`, preguntar antes de elegir una solución.

## 8. Iconografía Vectorial
- **SVG Exclusivamente:** Utilizá los iconos svg cargados en C:\dev\bigtelligent\landing.bigtelligent.eon.ar\assets\bootstrap-icons-1.13.1

## 9. Rendimiento y Responsividad (No Negociables)
- **Mobile-First:** El CSS debe estructurarse pensando primero en dispositivos móviles, escalando hacia escritorio (`@media (min-width)`).
- **Tipografía Fluida (Fluid Typography):** Utiliza la función `clamp()` de CSS para que los tamaños de fuente (especialmente los H1 y H2) escalen perfectamente en ratios arbitrarios de pantalla.
- **Carga Diferida (Lazy Loading):** Todas las imágenes y videos que no estén en el viewport inicial (Hero section) deben llevar el atributo `loading="lazy"`. Usa formatos modernos (WebP) si es posible asumirlos.
- Toda la maquetación principal debe basarse en **CSS Grid** y **Flexbox**.

## 10. SEO y Accesibilidad (Technical SEO)
Una landing premium no solo se ve bien, también indexa bien.
- **Etiquetas Meta:** Asegúrate de incluir `<title>`, `<meta name="description">`, y optimización Open Graph (`<meta property="og:title">`, etc.) en el `index.html`.
- **Estructura Semántica:** Usa adecuadamente `<header>`, `<main>`, `<section>`, `<article>`, `<nav>` y `<footer>`.
- **Jerarquía de Encabezados (H1-H6):** Solo debe existir un único `<h1>` por página, y los demás deben seguir un orden estricto (no saltar de un H2 a un H4).
- **Accesibilidad (a11y):** Añade atributos `alt` descriptivos a todas las imágenes, usa `aria-labels` en botones que solo contengan iconos (ej. botón de menú móvil), y asegura un contraste adecuado para la lectura.

## 11. Backgrounds con shaders
Exclusivamente cuando se te indique que hay que integrar un background shader, deberás solicitarlo para poner el background que corresponde para desktop y el que corresponde a mobile. Debes solicitar siempre los 2 para maximizar la adaptación a la pantalla correspondiente. Se te cargarán los códigos que debes ubicar y adaptar con un @media a cada tamaño.


---
*Tu trabajo es integrar con maestría estas piezas. El simple uso de las librerías no garantiza un diseño premium; la magia está en las físicas de la animación (easing properties), la armonía de los espacios vacíos (white space), y la consistencia matemática de la tipografía y los colores de la marca.*
