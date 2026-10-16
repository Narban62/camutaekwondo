# Contexto del proyecto

## Identidad y objetivo

**CAMU Taekwondo Landing Page** es una aplicación web de una sola página para presentar el club CAMU y facilitar que una persona interesada consulte cómo participar o asistir a una primera clase.

La dirección visual actual es deportiva y editorial, con contraste alto, tipografía display y fotografías de entrenamiento. El sitio está en español.

## Tipo de aplicación y stack

- Landing page SPA, sin rutas internas.
- Vue 3 y Composition API.
- TypeScript.
- Vite.
- CSS global organizado en variables, reglas globales y animaciones.
- No usa Vue Router. El desplazamiento entre secciones se realiza con anclas.

## Público

Personas que consultan Taekwondo, sedes, horarios e instructores de CAMU. El contenido menciona UCE/Universidad Central del Ecuador, pero no define de forma completa el público objetivo; validar la audiencia oficial con el club.

## Referencia

`Pagina.pdf`, ubicado en la raíz, es la referencia visual y de contenido. La solicitud original también transcribió los nombres de secciones, horarios y perfiles incluidos en el sitio. Los textos institucionales que hoy aparecen en el componente deben cotejarse contra el PDF o confirmarse con CAMU antes de considerarlos definitivos.

## Estructura de página actual

Header con navegación; hero; principios; sección institucional con tarjetas y modales; sedes y horarios; sección `RECUERDOS` con 24 fotografías locales y lightbox; combate/entrenamientos; instructores; contacto que abre una conversación de WhatsApp; footer. La sección institucional incluye historia del fundador y contenido sobre el equipo, la labor y la importancia del club. La galería presenta parte del archivo fotográfico sin añadir nombres, fechas ni eventos.

## Contexto importante para cambios

- Mantener las cuatro sedes y los perfiles conocidos sin añadir datos no verificados.
- El código contiene actualmente un número de WhatsApp y textos institucionales específicos. Su procedencia/autorización no está documentada; ver `docs/content.md`.
- La galería `RECUERDOS` usa 24 fotografías locales de `public/images/gallery/`; su listado y textos alternativos están en `src/data/gallery.ts`. Hero, entrenamiento y perfiles de instructores todavía usan imágenes remotas de Unsplash. About usa el logo local como fondo estilizado de toda la sección, sin fotografía adicional; las fotos de los modales institucionales también son locales.
- La galería carga 16 fotografías inicialmente y permite ampliar el listado en lotes. Su lightbox admite cierre, anterior/siguiente, teclas Escape y flechas, foco contenido/restaurado y navegación horizontal táctil.
- El contenido institucional y el enlace de WhatsApp están escritos directamente en componentes; no todo el contenido está separado en `src/data/`.
- `docs/continuation.md` registra los problemas que requieren atención antes de afirmar que el estado está validado.
