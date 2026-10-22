# Continuación del proyecto

## Estado actual

Landing de una página en Vue 3, TypeScript y Vite. Incluye header, hero, principios, modal institucional, sedes, galería local `RECUERDOS` con lightbox, entrenamiento, instructores, contacto por WhatsApp y footer. La galería usa 24 fotos de `public/images/gallery/` y no crea ni modifica los originales.

El build de producción se ejecutó correctamente con `npm.cmd run build` (Vue TypeScript check y Vite 6.4.3), incluyendo la reorganización institucional, la actualización de principios y el logo único ampliado como fondo de About. Esa sección no depende de `reveal` para mostrar el contenido. Se confirmó que las 24 imágenes referenciadas existen en `public/images/gallery/`. El directorio contiene 136 JPEG y 2 MP4. No se pudo realizar una comprobación interactiva en navegador durante esta tarea.

## Trabajo realizado

- Creado el sistema persistente de contexto en `AGENTS.md` y `docs/`; `.agents/` no forma parte del sistema nuevo.
- Reutilizados y consolidados contenidos de las instrucciones, README y documentos previos.
- Documentados el stack, arquitectura, diseño y contenido que actualmente existe en el código.
- Actualizados README y documentos anteriores para remitir a los cinco archivos canónicos sin conservar instrucciones obsoletas.
- Integrada una selección de 24 fotografías locales en `RECUERDOS`, con carga progresiva, lightbox accesible, teclado y swipe.
- Actualizados los documentos de arquitectura, diseño, contenido y continuidad para describir la galería.
- Revisada la coherencia entre el código de galería y los documentos canónicos; corregida la referencia obsoleta a imágenes externas en `docs/project-context.md`.
- Reorganizado el contenido agregado a Fundación y Contemporáneo en bloques editoriales, perfiles, listas y destacados para ajustarlo al sistema visual existente.
- Actualizados los documentos de contenido, arquitectura, diseño, contexto y continuidad con la información institucional añadida y sus datos pendientes de verificación.
- Validado el build de producción después de los cambios de About; no se añadieron dependencias.
- Reemplazados los principios por los cinco valores de Taekwondo enviados por el usuario y añadidos los cinco valores complementarios en `src/data/principles.ts`.
- Actualizada la composición responsive de principios y documentado el contenido en `docs/content.md` y `docs/design-system.md`; build final aprobado.
- Retirada la fotografía remota de About y configurado `src/assets/images/logo.png` como pieza visual estilizada sobre fondo carbón, sin otra fotografía en ese bloque.
- Quitadas las clases `reveal` de los bloques principales de About para evitar que la sección dependa del observador de animación para ser visible.
- Build de producción aprobado tras retirar la foto y mantener el logo local.
- Ampliado el logo a fondo de toda la sección About, siguiendo la capa de fondo/overlay de HeroSection; documentación visual y técnica ajustada.
- Build final completado correctamente tras extender el fondo del logo.
- Reequilibrada la jerarquía de About: retirado el espacio visual vacío, reemplazado el patrón repetido por un logo único completo y reorganizadas las tarjetas a tres columnas desktop, dos tablet y una móvil. Los modales se teletransportan a `body` para conservar su capa sobre el header.
- Build aprobado tras la revisión de proporciones y breakpoints de About.

## Trabajo pendiente

- Cotejar textos institucionales y claims con `Pagina.pdf`/CAMU.
- Confirmar si el número de WhatsApp configurado es oficial y autorizado.
- Confirmar con CAMU los datos históricos y del equipo añadidos en Fundación/Contemporáneo, incluida la atribución del 5.º DAN y la trayectoria del subdirector.
- Si se requiere publicación institucional, cotejar con CAMU la atribución de los principios al General Choi Hong Hi y sus romanizaciones.
- Revisar la paleta: tokens actuales de CSS no coinciden con la paleta lima documentada antes.
- Corregir los caracteres mal codificados si se confirman en los archivos fuente.
- Evaluar el reemplazo de las imágenes remotas de Unsplash que permanecen en hero, sección institucional, entrenamiento e instructores con material CAMU autorizado y optimizado; la galería ya utiliza fotografías locales.
- Centralizar en datos el copy institucional/contacto en una tarea separada y controlada.
- Revisar el favicon y probar responsive, menú, modales y lightbox en navegador.
- Confirmar los textos alternativos frente a las fotografías seleccionadas.

## Problemas conocidos

- Los archivos fuente muestran secuencias como `energÃ­a`, señal de posible mojibake en el contenido español.
- Contacto contiene un número de WhatsApp sin referencia de procedencia en la documentación.
- Los textos institucionales incluyen datos/afirmaciones que requieren fuente y aprobación.
- Imágenes de otras secciones y Google Fonts remotos dependen de conexión externa; la galería ya usa solo archivos locales.
- La galería usa 24 de las 136 fotos disponibles; la selección es editorial y puede ampliarse desde `src/data/gallery.ts`.

## Decisiones tomadas

- `AGENTS.md` es la instrucción principal; `docs/` contiene el contexto persistente.
- No leer todos los documentos por rutina: consultar solo los relevantes a cada tarea.
- No crear ni modificar archivos dentro de `.agents/`.
- No inventar datos reales; registrar incertidumbres y conservar placeholders.
- Mantener navegación por anclas; no se requiere Vue Router.

## Próximo paso recomendado

Revisar la landing en navegador en desktop y móvil, especialmente el menú y el lightbox (cierre, flechas, foco y swipe), y confirmar los textos alternativos frente a cada foto seleccionada.

## Recent update (2026-10-22)

- Harmonized BJJ typography, content width, spacing and responsive sizing with the rest of the landing.
- Added a tab in `RECUERDOS` to switch to a three-photo local BJJ album; both albums share the existing lightbox.
- Added tabs in Instructors to switch between the instructor list and four local profiles with a defined DAN grade. The remote placeholder is excluded.
- `npm.cmd run build` passed with Vue TypeScript check and Vite 6.4.5. A browser-based visual review is still pending; grades should be confirmed by CAMU before official publication.

## Latest update (2026-10-22)

Corrected the BJJ composition after review: removed the distracting full-section photo layer, fixed the hero copy positioning so it remains anchored inside the image panel, improved overlay contrast and brought feature cards and responsive spacing into line with the shared CAMU tokens. Removed duplicate BJJ overrides from the appended global rules. The final `npm.cmd run build` passed (vue-tsc and Vite 6.4.5).

## BJJ background images

Configured both local BJJ photos as full-bleed backgrounds for their corresponding hero and community panels. The community image now covers the entire panel with a dark text overlay, and both image panels clip their content to the panel bounds. Responsive image positioning is adjusted for narrow screens. The final `npm.cmd run build` passed with vue-tsc and Vite 6.4.5.

## BJJ HeroSection background alignment (2026-10-22)

Corrected the BJJ hero markup (its background element had been incomplete) and changed both BJJ photo panels to CSS `background-image`, `background-size: cover`, dark gradient overlays and the shared grain texture pattern used by `HeroSection.vue`. The community background spans the complete panel behind its content. The final `npm.cmd run build` passed with vue-tsc and Vite 6.4.5.

## Instructor archive tab moved

Moved `CINTURONES NEGROS` out of `TrainingSection.vue` and into `InstructorsSection.vue`. The training section is back to its original combat hero. Instructor tabs now switch between the existing coach profiles and the local black-belt profile gallery; arrow-key navigation remains available. The final `npm.cmd run build` passed with vue-tsc and Vite 6.4.5.

## Galería BJJ y archivo completo de cinturones (2026-10-22)

- Se corrigió la cascada responsive de `GallerySection.vue`: el mosaico CAMU ya no sobrescribe la retícula ni reduce la altura de las filas del álbum BJJ. BJJ muestra 3 columnas en escritorio, 2 hasta 600px y 1 hasta 380px, con todas sus fotografías visibles.
- El archivo de cinturones negros ahora incluye todas las fotografías locales de `blackBelt`, también los perfiles cuyo grado figura como `Por definir`; se excluye únicamente el perfil remoto. Se normalizaron IDs repetidos de David para evitar claves duplicadas en Vue.
- El build de producción se debe validar después de estos cambios. La revisión visual interactiva queda pendiente; confirmar con CAMU nombres y grados antes de publicarlos como datos oficiales.

Validación final para los ajustes de galería BJJ y cinturones negros: `npm.cmd run build` terminó correctamente (vue-tsc + Vite 6.4.5). El primer intento dentro del sandbox falló al iniciar esbuild con `spawn EPERM`; el reintento autorizado fuera del sandbox completó el build. El archivo `dist/` se generó correctamente.

## Facebook en el footer (2026-10-22)

Se conectó el enlace Facebook ya configurado en `AppFooter.vue` al bloque de redes del footer. Abre en pestaña nueva con protección `noopener noreferrer`, tiene nombre accesible y usa un icono SVG inline. Instagram permanece indicado como pendiente. Build pendiente de validar para este cambio.

Validación del enlace de Facebook: `npm.cmd run build` terminó correctamente con vue-tsc y Vite 6.4.5.
