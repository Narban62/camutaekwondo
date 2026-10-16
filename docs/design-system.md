# Sistema visual actual

Este documento refleja los valores definidos hoy en `src/styles/variables.css` y `src/styles/globals.css`, no una paleta propuesta.

## Colores

- Fondo: `#101110`.
- Fondo secundario: `#171918`.
- Panel: `#1d201e`.
- Texto principal token: `#f2f1ec`.
- Texto tenue: `#a3a6a1`.
- Color raíz del texto (`color`): `#8b72e7`.
- Acento actual: rojo `#cc1717`.
- Líneas: `rgba(60, 32, 187, 0.17)`.

Los tokens de color raíz, acento y líneas no coinciden con el sistema lima/blanco descrito por documentación antigua. Al ajustar el diseño, decidir y actualizar en conjunto; no asumir que lima sigue siendo el acento vigente.

## Tipografía

- Display: Barlow Condensed con fallback Arial Narrow; pesos usados entre 500 y 900.
- Texto: DM Sans con fallback Arial; pesos entre 400 y 700.
- Google Fonts se carga desde `index.html`; requiere red.
- Titulares en mayúsculas y tamaños fluidos con `clamp()`.

## Layout y tamaños

- Ancho máximo: `1240px`.
- Gutter: `clamp(22px, 6.1vw, 96px)`; en mobile baja a 22px (18px hasta 380px).
- Separación de secciones: `clamp(88px, 11vw, 156px)`; en mobile 92px.
- Breakpoints presentes: `900px`, `800px`, `700px`, `600px`, `380px`.
- Tarjetas y botones son mayormente cuadrados; líneas finas y fondos de carbón.
- No hay un sistema único de sombras documentado; verificar CSS puntual antes de añadir.

## Elementos característicos

- Header fijo/sticky, wordmark gráfico basado en `src/assets/images/logo.png`, menú hamburguesa en móvil.
- Hero a viewport completo con fotografía de fondo, filtros/overlays, grano y titular grande.
- Principios como lista editorial con número, nombre, romanización y significado; valores complementarios en una lista secundaria con divisores, sin tarjetas.
- En móvil las filas de principios pasan a dos líneas y las descripciones quedan bajo el nombre; los valores complementarios se reordenan para lectura en una columna en pantallas estrechas.
- Sedes en tarjetas oscuras; galería `RECUERDOS` en mosaico responsive de 12 columnas en desktop, 8 en tablet y 4 en móvil. Las tarjetas móviles abarcan dos columnas para mantener un área cómoda de lectura y toque.
- Institucional con tarjetas y modal oscuro. Un solo logo local se amplía como imagen de fondo de toda About, centrado y completo con `object-fit: contain` para evitar recortes y zoom excesivo; se desatura, desenfoca levemente y atenúa con overlay carbón para conservar el contraste. No se usa otra fotografía en esa sección. La introducción se organiza en dos columnas y las cinco tarjetas en una retícula editorial de tres tarjetas arriba y dos más anchas abajo; en tablet pasan a dos columnas y en móvil a filas compactas. El contenido permanece visible sin depender de la animación de revelado. Los modales de Fundación y Contemporáneo usan un ancho mayor para el contenido editorial, ficha histórica, perfiles en dos columnas y bloques de labor/importancia que se apilan en móvil.
- Los datos históricos usan una ficha de dos columnas y un hito con borde de acento; las tareas del club aparecen como lista editorial con divisores y la importancia como lista numerada. Las credenciales se muestran como etiquetas discretas con los colores y líneas existentes.
- Botones en mayúsculas con flecha; la apariencia final depende del token rojo actual. El botón de carga conserva borde/foco visible.
- Hover de galería: zoom leve, saturación y overlay con indicador de apertura; las transiciones respetan `prefers-reduced-motion`.
- Lightbox: fondo oscuro, imagen contenida en viewport, controles circulares anterior/siguiente y cierre superior; en móvil los controles se sitúan a los lados y el gesto horizontal navega.
- Galería usa fotos locales de `public/images/gallery/`; miniaturas usan lazy loading salvo las dos iniciales. Hero/training e instructores siguen remotos; About usa el logo y las fotos institucionales son locales.
- `animations.css` anima entrada y hover, y reduce animación bajo `prefers-reduced-motion`.

## Pendientes de identidad visual

Confirmar la paleta oficial con el diseño de referencia: el código actual usa raíz violeta y acento rojo, mientras que documentación anterior indicaba lima. Revisar también el favicon presente (`src/assets/icons/camu.ico`) y el responsive en navegador.
