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
