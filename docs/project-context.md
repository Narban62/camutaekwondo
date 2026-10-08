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

Header con navegación; hero; principios; sección institucional con tarjetas y modal; sedes y horarios; sección `RECUERDOS` con 24 fotografías locales y lightbox; combate/entrenamientos; instructores; contacto que abre una conversación de WhatsApp; footer. La galería presenta parte del archivo fotográfico sin añadir nombres, fechas ni eventos.

## Contexto importante para cambios

- Mantener las cuatro sedes y los perfiles conocidos sin añadir datos no verificados.
- El código contiene actualmente un número de WhatsApp y textos institucionales específicos. Su procedencia/autorización no está documentada; ver `docs/content.md`.
- Las fotos de hero, galería y perfiles principales apuntan a Unsplash. El logo y las fotos del modal institucional son locales.
- El contenido institucional y el enlace de WhatsApp están escritos directamente en componentes; no todo el contenido está separado en `src/data/`.
- `docs/continuation.md` registra los problemas que requieren atención antes de afirmar que el estado está validado.
