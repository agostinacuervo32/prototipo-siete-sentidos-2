# Conclusión de la propuesta: correcciones según lo aplicado en el sitio

Revisé cada afirmación del texto contra el código del sitio (`sitio/`). Abajo están las correcciones por tema y, al final, la versión corregida completa.

---

## 1. Uso del color: hay que corregirlo

**Qué dice el texto:** los tonos oscuros se reservan para los títulos y las acciones principales. El blanco y el negro quedan para fondos y textos.

**Qué está aplicado:**

- **Los títulos y los botones principales usan los tonos medios, no los oscuros.** El verde `#355241` es el color principal: botón principal, títulos sobre fondos claros, sección inversa y footer. El rosa `#955450` es el secundario: títulos sobre rosa pastel y acentos. Es el color más usado de todo el CSS.
- **Los tonos oscuros (`verde-oscuro`, `rosa-oscuro`, etc.) se usan para el texto sobre su propio pastel**, por ejemplo verde oscuro sobre verde pastel en acordeones, cards de talleres y paneles de la agenda. Así el texto se ve de la misma familia sin perder contraste.
- **Los pasteles son fondos de secciones, cards y acordeones.** Esto sí coincide con el texto.
- **No hay negro puro.** El texto va en un negro suave (`#2B2522`). Conviene nombrarlo así para no contradecir la regla de `style.md` ("nunca negro puro").
- **Además de los cuatro tonos, cada uno tiene tres versiones (oscura, media y pastel)**, no solo "claras y oscuras".

**Sobre "un color por servicio o por sección":** no está aplicado. Las cards de "Por qué elegir Siete Sentidos", los acordeones, los paneles de "Lo que nos guía", los precios, las cards del equipo, las cards de talleres y la agenda usan **familias de color** (rosa, verde, naranja, amarillo), pero **se alternan según el orden de las cards** para sumar variedad. No hay un color fijo por especialidad: una misma especialidad puede tener un color en la agenda y otro en el acordeón, los precios o las cards de Nosotros. Por eso el texto no debe hablar de un color por servicio, sino de pasteles que se alternan entre las cards.

## 2. Fotografía: está bien, con una precisión

- **Correcto:** las fotos del equipo (cards de integrantes y foto del agradecimiento en Nosotros, y foto del equipo en "Lo que nos guía" del Inicio) están en blanco y negro.
- **Precisión:** el blanco y negro se aplica por código (`filter: grayscale(1)`), no editando las fotos. Las originales quedan a color, así que cualquier foto nueva del equipo se convierte sola y la decisión se mantiene sin depender de la edición. Si querés, podés sumarlo como argumento de consistencia.
- **"Compartiendo una misma paleta cromática":** la idea se sostiene. Falta la referencia a la imagen: agregá "(ver Figura X)" donde corresponda.

## 3. Videos: está bien

Hay videos de la fundación en Inicio, Apoyo escolar, Especialidades, Nosotros y Novedades. La afirmación es correcta.

## 4. Menú: la descripción del efecto no coincide con lo aplicado

**Qué dice el texto:** al pasar el cursor, dos líneas se extienden a los lados de la palabra como brazos. Al cerrarse, las letras se aprietan.

**Qué está aplicado (`header.css`, variante `menu--trazo`):**

- Al pasar el cursor (o al llegar con el teclado), **se dibuja un borde de pill alrededor de la palabra**, del mismo estilo que el botón "Contactate" (línea verde de 1px).
- El borde **arranca a la izquierda y avanza hacia la derecha**: la mitad de arriba y la de abajo avanzan a la vez y **se cierran a la derecha**, envolviendo la palabra. No son dos líneas que salen hacia los costados.
- **Al mismo tiempo** que se traza el borde, el texto pasa a rosa y **las letras se aprietan** (el interletrado baja a −0,06 em). La pill, que toma el ancho del texto, se achica con ellas. No son dos pasos ("primero abre, después abraza"): ocurre en simultáneo.
- Al sacar el cursor, todo vuelve a su estado y las letras se sueltan más rápido de lo que se apretaron.

Lectura conceptual que sí sostiene el código: **la línea se abre y rodea la palabra hasta cerrarse sobre ella (abrir), mientras las letras se juntan adentro (abrazar).**

**El mismo efecto está en los links del footer** (`footer--trazo`), que envuelve el ícono y el texto. Conviene mencionarlo: refuerza que el gesto se repite en todo el recorrido.

## 5. Página activa: ya está resuelta

La observación de que "los links del menú no tenían ninguna marca de página activa" está desactualizada. Hoy, en cada página interna, **el link de la página actual queda fijo en el estado final del hover**: borde cerrado, texto rosa y letras apretadas. Es exactamente lo que proponía la nota: el mismo recurso cubre la premisa de "página activa".

Detalle a favor: la página activa no se marca solo con color (también con el borde y el interletrado), así que cumple el criterio de accesibilidad de no depender únicamente del color.

El Inicio no tiene link propio en el menú (se accede desde el logo), por eso ahí no se ve ningún link activo.

---

## Versión corregida

> **Conclusión de la propuesta**
>
> El sitio web de Siete Sentidos traslada el concepto "Abrir y abrazar" a cada nivel de la propuesta: la estructura, la identidad visual y la interacción.
>
> En cuanto al color, la paleta de cuatro tonos, cada uno con su versión oscura, media y pastel, organiza la lectura del sitio. Los pasteles se aplican como fondos de tarjetas, acordeones y secciones, donde funcionan como formas plenas que contienen la información, y se alternan entre las tarjetas para que el recorrido se perciba variado. Los tonos medios, con el verde como color principal y el rosa como secundario, se reservan para los títulos y las acciones principales, lo que garantiza el contraste necesario para identificarlos. Los tonos oscuros se usan para el texto sobre su propio pastel, de modo que cada bloque conserva su familia de color sin perder legibilidad. El blanco y un negro suave quedan destinados a fondos y textos, de modo que el color se concentra en los elementos que deben destacarse.
>
> La fotografía cumple dos funciones diferenciadas. Las imágenes de las actividades de la fundación se presentan a color, para transmitir la vitalidad del trabajo cotidiano con los niños. Las fotografías del equipo, tanto grupales como individuales, se presentan en blanco y negro. Esta decisión distingue la representación del trabajo de la del equipo y aporta una imagen más profesional a quienes integran la fundación. A su vez, al compartir una misma paleta cromática (ver Figura X), las fotografías se unifican y ningún integrante sobresale por el color de su vestimenta o de su entorno, lo que refuerza la idea de un equipo que trabaja en conjunto. A estas imágenes se suma el uso de videos, que aportan dinamismo al recorrido y muestran a la fundación en movimiento, tal como se vive en el día a día.
>
> La interacción también se construye a partir del concepto. Al pasar el cursor sobre los enlaces del menú de navegación, una línea se abre desde un lado de la palabra y la rodea hasta cerrarse sobre ella, mientras las letras se aprietan mediante la reducción del interletrado, como en un abrazo que contiene. El mismo gesto se repite en los enlaces del pie de página, y en el menú el enlace de la página en la que se encuentra el usuario queda abrazado, lo que indica en todo momento dónde está. De este modo, uno de los elementos más utilizados del sitio repite en cada interacción el gesto que da origen al concepto: se abre para recibir y se cierra para contener.
>
> En conclusión, la propuesta busca que el sitio no solo ordene la información que las familias necesitan antes de comunicarse con la fundación, sino que también transmita la calidez con la que la institución recibe a cada niño. Cada decisión, desde la paleta y la fotografía hasta las animaciones, responde a un mismo concepto, lo que permite que el sitio se perciba coherente, cercano y profesional.

### Pendientes para vos

- [ ] Reemplazar "Figura X" por el número real de la figura.
