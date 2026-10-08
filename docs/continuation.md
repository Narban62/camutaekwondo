# Continuación del proyecto

## Estado actual

Landing de una página en Vue 3, TypeScript y Vite. Incluye header, hero, principios, modal institucional, sedes, galería local `RECUERDOS` con lightbox, entrenamiento, instructores, contacto por WhatsApp y footer. La galería usa 24 fotos de `public/images/gallery/` y no crea ni modifica los originales.

El build de producción se ejecutó correctamente con `npm.cmd run build` (Vue TypeScript check y Vite 6.4.3). Se confirmó que las 24 imágenes referenciadas existen en `public/images/gallery/`. El directorio contiene 136 JPEG y 2 MP4. No se pudo realizar una comprobación interactiva en navegador durante esta tarea.

## Trabajo realizado

- Creado el sistema persistente de contexto en `AGENTS.md` y `docs/`; `.agents/` no forma parte del sistema nuevo.
- Reutilizados y consolidados contenidos de las instrucciones, README y documentos previos.
- Documentados el stack, arquitectura, diseño y contenido que actualmente existe en el código.
- Actualizados README y documentos anteriores para remitir a los cinco archivos canónicos sin conservar instrucciones obsoletas.
- Integrada una selección de 24 fotografías locales en `RECUERDOS`, con carga progresiva, lightbox accesible, teclado y swipe.
- Actualizados los documentos de arquitectura, diseño, contenido y continuidad para describir la galería.

## Trabajo pendiente

- Cotejar textos institucionales y claims con `Pagina.pdf`/CAMU.
- Confirmar si el número de WhatsApp configurado es oficial y autorizado.
- Revisar la paleta: tokens actuales de CSS no coinciden con la paleta lima documentada antes.
- Corregir los caracteres mal codificados si se confirman en los archivos fuente.
- Reemplazar las fotografías remotas de Unsplash por material CAMU autorizado y optimizado.
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
