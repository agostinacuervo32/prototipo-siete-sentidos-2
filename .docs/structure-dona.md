# Estructura de la página Doná (Fundación Siete Sentidos — Sitio institucional)

*Este documento define la "receta" de secciones de la página **Doná** (`sitio/dona/index.html`, URL `/dona/`). Según `brief.md`, la página tiene que comunicar pedidos concretos y la posibilidad de que empresas y personas aporten deduciendo de Ganancias. La información sale de `informacion/donaciones.md` y la distribución, de las capturas de Figma. Se respeta este flujo de arriba hacia abajo, sin agregar, quitar ni reordenar secciones.*

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

1. **Hero introductorio**
   - **Distribución (captura `imagenes de referencia/Captura de pantalla 2026-10-16 131800.png`):** solo texto, centrado (**REUTILIZA** `hero hero--pagina hero--centrado` de Novedades).
   - **Contenido (PROVISORIO):** el wireframe tiene los textos de Novedades como relleno.
     - Antetítulo en mayúsculas: "DONÁ".
     - H1: "Tu donación sostiene el acompañamiento de cada niño".
     - Bajada: "Además de lo que aportan las familias, la fundación se sostiene con donaciones. Podés donar dinero, con beneficio en Ganancias, o los materiales que usamos todos los días."
     - Doble CTA: "Quiero donar" (principal, a WhatsApp con mensaje prearmado) y "Ver qué necesitamos" (secundario, ancla a `#que-necesitamos`).

2. **Por qué donar (beneficio en Ganancias)**
   - **Distribución (misma captura):** escritorio, dos columnas: texto a la izquierda y card "¿Cómo hacerlo?" a la derecha (860 / 772 de 1600, separación 48). Móvil: el texto, los botones y debajo la card. Estilos en `donar.css`.
   - **Texto (captura y `donaciones.md`):**
     - H2: "Ayudar también puede beneficiarte" (de la captura; en `donaciones.md`, "Tu donación también es un beneficio para vos"). **A DEFINIR:** "ayudar" está en la lista de "No usar" de `contexto.md`.
     - Antetítulo debajo del H2: "DONACIONES PARA PERSONA JURÍDICA O PERSONA FÍSICA".
     - Dos párrafos de `donaciones.md` (ARCA, entidad exenta; hasta el 5% de la ganancia neta anual).
     - Botones: "Quiero donar" (principal) y "¿Te quedaron dudas?" (secundario), los dos a WhatsApp con mensaje prearmado.
   - **Card "¿Cómo hacerlo?" (`card-pasos`):** forma cerrada con relleno verde pastel y sin borde (el wireframe la muestra con borde; se aplica "abrir y abrazar" de `style.md`). Lista numerada con círculos verdes. Los 3 pasos salen de `donaciones.md` (en la captura, los pasos 2 y 3 eran relleno).
   - **PENDIENTE:** datos para donar dinero (CBU, alias o link de pago). Hasta tenerlos, los botones van a WhatsApp (3516095374).
   - **ID de ancla:** `#por-que-donar`.

3. **Qué donaciones necesitamos**
   - **Distribución (captura `imagenes de referencia/Captura de pantalla 2026-10-16 131815.png`):** título a la izquierda y botón "Doná ahora" a la derecha; debajo, 5 cards con imagen, título y texto.
   - **REUTILIZA** las cards de "Por qué elegirnos" del Inicio (`beneficios`, `card-beneficio`, `card-giro.js`) con el modificador `beneficios--encabezado-lateral`. Móvil: grilla de 2 columnas con la 5.ª a lo ancho; la card se da vuelta con "Ver más" para mostrar el texto.
   - **Imagen (PROVISORIO):** la ilustración de la taza del Inicio en todas las cards.
   - **Cards (textos de `donaciones.md`, mejorados, PROVISORIOS):**
     1. **Didácticos:** Juegos, material didáctico, hojas, lápices y cuadernos para las clases, y libros para el trabajo de los profesionales.
     2. **Mantenimiento:** Pintura: pintamos seguido para que los espacios de la fundación estén siempre cuidados.
     3. **Higiene y limpieza:** Papel higiénico, rollos de cocina, palos de piso y trapos. Limpiamos a la mañana y a la tarde, como en una escuela.
     4. **Merienda:** Té, azúcar, mate cocido y galletitas comunes para la merienda de todos los niños durante su turno.
     5. **Mobiliario:** Sillas, mesas y manteles de hule. Con el uso diario, los manteles se renuevan cada 5 o 6 meses.
   - **CTA:** "Doná ahora", a WhatsApp con mensaje prearmado para donar materiales.
   - **ID de ancla:** `#que-necesitamos`.

---

## SEO (PROVISORIO)
- `<title>`: "Donar a una fundación en Córdoba | Siete Sentidos" (keywords "donar a una fundación" y "donar Córdoba").
- Meta description: "Cómo donar a la Fundación Siete Sentidos, en Yofre Norte, Córdoba. Tu donación se puede deducir de Ganancias. Conocé también qué materiales necesitamos."

## Pendientes
- Datos para donar dinero (CBU, alias, link de pago).
- Ilustraciones propias de cada tipo de donación.
- Videos de Ana sobre cómo funciona la deducción (`donaciones.md`).
- "Quiero donar" en primera persona: `contexto.md` pide revisarlo ("Doná" / "Colaborá").
- Campañas de ropa y calzado, y libros que acercan las familias: no se incluyeron en las cards; a definir si suman.
