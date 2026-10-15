## Seguridad de dependencias
Antes de instalar dependencias o tocar configuración del ecosistema JavaScript:
- Identificá qué package manager usa el proyecto (`bun`, `pnpm`, `npm` o `yarn`).
- Verificá en la documentación actual la clave exacta antes de escribir cualquier configuración.
- Configurá una antigüedad mínima de publicación de **3 días** para nuevas instalaciones, con el objetivo de reducir el riesgo de ataques a la cadena de suministro.
- Exceptuá los scopes del workspace cuando el gestor lo permita.
- Referencias actuales verificadas en docs: `minimumReleaseAge` y `minimumReleaseAgeExcludes` en Bun, `minimumReleaseAge` y `minimumReleaseAgeExclude` en pnpm, `npmMinimalAgeGate` y `npmPreapprovedPackages` en Yarn, y `min-release-age` en npm. En npm, la documentación actual expone la clave de antigüedad mínima, pero no documenta en esa misma superficie una exclusión equivalente por scopes; si el proyecto usa npm, verificá la estrategia compatible antes de aplicar una excepción.
## Flujo de trabajo
1. No hay skills locales en este proyecto: este paso no aplica.
2. Revisá detenidamente `.docs/brief.md`, `.docs/structure.md`, `.docs/stack.md` y `.docs/style.md`.
3. Identificá el package manager del proyecto y aplicá la política de seguridad de dependencias indicada arriba, validando antes la clave exacta en la documentación vigente.
4. Generá un plan de acción si lo considerás necesario.
5. Escribí el HTML, el CSS y cualquier JavaScript requerido, siguiendo todas las instrucciones y directrices. Asegurate de lograr un diseño visualmente exquisito, premium y totalmente responsivo.
