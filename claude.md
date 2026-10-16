# CLAUDE.md — Sitio web Fundación Siete Sentidos

## IMPORTANTE
- **Trabajás de a una sección por vez.** Creás solo la sección que yo te indique y esperás a que la confirme como correcta antes de pasar a la siguiente. Así controlo qué se crea, qué está bien, qué se mantiene y qué se cambia.
- **No podés crear más de una sección sin que yo te autorice primero**, salvo que yo te indique explícitamente lo contrario en ese pedido.
- **No asumas datos que no tenés.** Si falta un texto, un precio, un horario, una imagen, una reseña o cualquier dato de la fundación, no lo inventes ni lo completes con supuestos: marcalo como pendiente y preguntame.
- Siempre que no estés seguro de qué hacer, qué efecto aplicar o qué archivo manda, preguntame hasta estar 99 % seguro.

## Qué es este proyecto
Sitio web institucional de la **Fundación Siete Sentidos** (Barrio Yofre Norte, Córdoba Capital), que ofrece apoyo escolar y especialidades (psicopedagogía, fonoaudiología, psicología y pediatría) en un mismo lugar. Es el prototipo de mi Trabajo Final de Grado de Diseño Gráfico.

Objetivos del sitio:
1. Centralizar la información que una familia necesita antes de contactar a la fundación (servicios, precios, horarios, ubicación, referencias).
2. Comunicar el diferencial: apoyo escolar y especialidades bajo un mismo techo, con mirada integral.
3. Facilitar el contacto inmediato (formulario y WhatsApp).
4. Sumar profesionales, voluntarios y donantes.

El sitio tiene seis páginas: Inicio, Apoyo Escolar, Especialidades, Nosotros, Novedades y Sumate. **Por ahora se trabaja solo el Inicio.**

### No es una landing
Este proyecto **no es una landing page**: es el **sitio web institucional de la Fundación Siete Sentidos**, multipágina. Algunos `.md` (por ejemplo `stack.md`) vienen de una plantilla de landings y usan esa palabra. Donde diga "landing", leelo como "sitio institucional" y aplicá el criterio de un sitio de varias páginas: navegación compartida entre páginas, header y footer comunes y recursos (`css`, `js`, imágenes) reutilizables.

### HTML estático
Por ahora, el sitio se hace en **HTML estático**: HTML, CSS y JS propios, sin frameworks, sin paso de compilación y sin CMS.

#### Estructura de páginas
Cada página va en **su propia carpeta con un `index.html`**, para que las URLs queden limpias (ej. `fundacionsietesentidos.com.ar/nosotros/`):

```
sitio/                    ← raíz del sitio
├── index.html            ← Inicio
├── apoyo-escolar/index.html
├── especialidades/index.html
├── nosotros/index.html
├── novedades/index.html
├── sumate/index.html
└── assets/
    ├── css/
    ├── js/
    ├── imagenes/
    ├── logos/
    ├── videos/
    └── phosphor-icons (2)/
```

- Los links entre páginas apuntan a la carpeta: `<a href="/nosotros/">Nosotros</a>`. El Inicio es `/`.
- **Rutas desde la raíz:** las rutas a recursos y entre páginas empiezan con `/` (`/assets/css/variables.css`, `/nosotros/`), en todas las páginas por igual. Funcionan porque el deploy sirve `sitio/` como raíz del dominio. No volver a rutas relativas.
- El header y el footer se repiten en cada página (copiados en cada `index.html`, no cargados por JS). Si cambia algo en uno, se actualiza en todas las páginas.
- Los nombres de carpeta van en minúscula, sin tildes ni espacios, con guiones.

#### Posible migración a WordPress
Una vez terminado el sitio se está evaluando **pasarlo a WordPress**. Todavía no está decidido, así que se sigue construyendo en estático, pero el código tiene que facilitar ese paso:

- **Slugs iguales a los de WordPress:** las carpetas (`/nosotros/`, `/apoyo-escolar/`, etc.) son las URLs que tendrían las páginas en WordPress. No cambiarlas sin consultarme, para no romper links ni el posicionamiento.
- **Partes comunes bien delimitadas:** header, footer y cada sección van en bloques claros del HTML, marcados con comentarios de inicio y fin (`<!-- HEADER -->` … `<!-- /HEADER -->`), porque en WordPress pasarían a ser partes de la plantilla.
- **Componentes repetibles con el mismo marcado:** cards, testimonios, acordeones, botones y entradas de Novedades usan siempre la misma estructura y las mismas clases, para poder convertirlos en bloques o plantillas. Las entradas de Novedades se arman pensando en que después serían entradas (posts).
- **Estilos centralizados:** todos los colores, tipografías, radios y espaciados de `style.md` van como variables CSS (`:root`) en un solo archivo. Nada de estilos en línea ni valores sueltos repetidos.
- **Clases con nombres consistentes y descriptivos** (ej. BEM: `card-servicio__titulo`), sin depender del orden de los elementos.
- **El contenido vive en el HTML**, no generado desde JavaScript, para que después se pueda pasar a contenido editable.
- **JavaScript por funcionalidad** (menú, botones, acordeón, carrusel, formulario), en archivos separados que no dependan de la estructura de carpetas.
- **Formularios:** por ahora son 100 % código. El marcado del formulario y su lógica de envío van separados, porque en WordPress el envío podría resolverse de otra forma.
- Si alguna decisión de código complica la migración, avisame antes de aplicarla.

## Repositorio y deploy
- **Repositorio de GitHub:** https://github.com/agostinacuervo32/sietesentidos
- **Vista previa actual (Vercel):** https://sietesentidos.vercel.app/. Vercel toma el repositorio de GitHub y despliega solo cada push a `main`, sirviendo `sitio/` como raíz.
- **Dominio:** `fundacionsietesentidos.com.ar`, todavía **no está activo**. Está en trámite el pago y la vinculación con **Hostinger**. Cuando el dominio esté habilitado, probablemente el sitio pase de Vercel a Hostinger; todavía no está decidido cómo. Al hacer ese cambio, el contenido de `sitio/` tiene que quedar en la raíz del dominio para que las rutas con `/` sigan funcionando.
- El código se sube al repositorio y desde ahí se hace el deploy (por ahora, a Vercel).
- No hagas commits, push ni configures el deploy sin que yo lo pida. Si algo del deploy no está definido en los `.md` (por ejemplo, cómo se conecta GitHub con Hostinger), preguntame antes de asumirlo.

## Fuente de verdad
Toda la información del proyecto vive en los `.md` de abajo. No inventar datos que no estén ahí: si falta información, marcarla como pendiente y preguntar antes de asumir.

## Antes de realizar cualquier tarea
Leé `.docs/instructions.md` para saber cómo accionar.

## Qué es cada archivo y cuándo usarlo

| Archivo | Qué contiene | Cuándo usarlo |
|---|---|---|
| `.docs/instructions.md` | Flujo de trabajo y política de seguridad de dependencias. | **Siempre**, antes de cualquier tarea. |
| `.docs/brief.md` | Contexto general de la fundación: perfil, público objetivo, servicios, precios, fortalezas, CTAs, prueba social, SEO y pendientes. | Para entender el negocio y el público. Es contexto de fondo: **no es la fuente de los textos ni del diseño**. |
| `.docs/structure.md` | La "receta" del Inicio: qué secciones lleva, en qué orden, su distribución en escritorio y móvil, su contenido y los requerimientos obligatorios. | **Cada vez que construyas una sección.** Se respeta el orden sin agregar, quitar ni reordenar secciones. |
| `.docs/style.md` | Sistema visual: paleta y roles de color, tipografías y tamaños, retícula, espaciados, radios, botones (con su animación), cursor, menú, cards, acordeón, formularios, iconografía, motion y restricciones. | **Cada vez que construyas una sección**, junto con `structure.md`. Es la fuente de verdad para todo lo visual. |
| `.docs/contexto.md` | Tono comunicacional, vocabulario permitido y prohibido, copy aprobado de cada sección, CTAs, textos de accesibilidad y pendientes a validar con la fundadora. | **Cada vez que escribas o revises un texto** (títulos, bajadas, botones, FAQ, `alt`, mensajes de error). |
| `.docs/keywords.md` | Keywords medidas en Google Trends y propuestas nuevas, agrupadas por área. | Solo para SEO: `<title>`, meta description, Open Graph, encabezados y `alt`. **No modifica el copy aprobado de `contexto.md`**; si una keyword no entra en un texto aprobado, preguntame. |
| `.docs/stack.md` | Tecnologías y convenciones de código (vanilla HTML/CSS/JS, sin build, mobile first, `clamp()`, SEO técnico, accesibilidad). | **Antes de escribir código.** Ver las excepciones de abajo. |

### Excepciones de `stack.md` para este proyecto
`stack.md` es una plantilla de otro proyecto. Estos puntos **no aplican** a Siete Sentidos:
- **No usar la carpeta de Bootstrap Icons de BigTelligent.** Mientras no estén los íconos lineales propios, se usa la librería Phosphor Icons (variante `regular`) de `sitio/assets/phosphor-icons (2)/SVGs/regular/`.
- **No usar `static.photos` ni los logos de `ipsums/`** sin preguntarme primero. Las imágenes del sitio son de la fundación; si no las tengo, se dejan como placeholder marcado y lo aviso.
- **GSAP y ScrollTrigger son opcionales** (`style.md`): solo si hacen falta para animaciones atadas al scroll. El botón y el cursor van en vanilla JS.
- **No hay shaders** en este proyecto.

### Si dos archivos se contradicen
No elijas por tu cuenta: avisame cuál es la contradicción y esperá que te diga cuál manda.

## Wireframes de Figma (capturas)
Los diseños están en Figma (el Inicio, en un **wireframe de baja fidelidad** con los frames "Home – Escritorio" de 1920 px e "iPhone 16" de 393 px), pero **no se usa el MCP de Figma** (requiere un plan pago). En su lugar, **te guiás por las capturas de pantalla que te envío desde Figma**.

Cómo usarlas:
1. Para cada sección, trabajá con las capturas que te mande de esa sección (escritorio y móvil). Si falta alguna, o no se lee una medida o un texto, preguntame en vez de suponerlo.
2. De las capturas se copia: **estructura, distribución, orden de los elementos, medidas, radios, espaciados y textos**.
3. De las capturas **no** se copia:
   - **Colores:** el wireframe está en escala de grises. Los colores salen de `style.md`.
   - **Tipografía Inter:** es un placeholder. Botones y menú van en Lexend, según `style.md`.
   - Imágenes grises de placeholder: no se reemplazan por imágenes inventadas.
4. Las instrucciones para traducir el wireframe están repartidas entre `structure.md` (qué va en cada sección y cómo se distribuye) y `style.md` (cómo se ve). Si el wireframe y estos archivos no coinciden, o algo del wireframe no está resuelto (ver "A definir" y "Pendientes" en `structure.md`), preguntame antes de decidir.

## Cómo trabajamos
- Una sección por vez, en el orden de `structure.md`, y solo cuando yo la pida.
- Para cada sección: leé su apartado en `structure.md`, los componentes que use en `style.md`, sus textos en `contexto.md` y las capturas de Figma que te envíe. Recién después escribí código.
- No crear ni modificar archivos sin que yo lo pida explícitamente.
- Ante cualquier dato de negocio que falte (precios, horarios, reseñas, fotos, obras sociales, números), preguntar en vez de completar.
- Los textos se copian tal cual de `structure.md` y `contexto.md`. No reescribirlos ni "mejorarlos" sin que yo lo pida.
- Las reseñas son solo reales, de Google Maps. Nunca inventar testimonios.
- Los formularios se hacen puramente con código, sin servicios ni widgets externos.

## Reglas de salida
- Todo el código va **estrictamente** dentro de `sitio/`, que es la raíz del sitio (ver "Estructura de páginas"):
  - `sitio/index.html`: el Inicio.
  - `sitio/<pagina>/index.html`: el resto de las páginas.
  - `sitio/assets/`: `css/`, `js/`, `imagenes/`, `logos/`, `videos/` y demás recursos. Todo lo que pertenezca al sitio va acá; el resto del repositorio es configuración.
- **El CSS y el JS no van dentro del HTML.** Siempre en sus propios archivos.
- Mobile first: casi la totalidad del público busca desde el celular, así que la versión móvil no es una adaptación secundaria.

Antes que nada, hace preguntas hasta estar 99% seguro de lo que tenés que hacer. Antes que nada, hace preguntas hasta estar 99% seguro de lo que tenés que hacer.
## Decisiones confirmadas
- **No hay skills locales** (`.agents/skills/` no existe): se ignora ese paso de `instructions.md`.
- **Cursor:** mientras no se defina el de la tesis, se usa el triángulo de `boton-blob-triangulo.html`, con los colores de `style.md`.
- **"Contactate" del header** lleva a WhatsApp (3516095374).
- **Menú móvil desplegado:** muestra los 5 links y el botón "Contactate".
- **Carrusel de reseñas:** en reposo gira en loop infinito y se puede arrastrar; al tocar las flechas se detiene y avanza card por card, mostrando cada card completa.
- **Tipografías:** se cargan desde Google Fonts con `<link>` (no hace falta instalarlas).
- **Vista del sitio:** se revisa en la vista previa de Vercel (https://sietesentidos.vercel.app/). Con las rutas desde la raíz, el sitio ya no se ve bien con doble clic ni abriendo `/sitio/index.html` en Live Server (no cargan estilos ni recursos).
