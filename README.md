# CAMU Taekwondo Landing Page

## Descripción

Landing page en español para presentar CAMU Taekwondo, sus principios, sedes, horarios e instructores, y facilitar consultas sobre una primera clase.

## Stack

- Vue 3 con Composition API
- TypeScript
- Vite
- CSS

No se usa Vue Router; la navegación se realiza dentro de la página mediante anclas.

## Instalación y desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

- `src/components/`: header, footer y secciones.
- `src/data/`: principios, sedes, instructores, galería y URLs de imagen.
- `src/composables/`: lógica reutilizable de revelado en scroll.
- `src/styles/`: tokens, estilos globales y animaciones.
- `src/assets/`: logo e icono locales.
- `public/about/`: fotografías locales usadas en los modales institucionales.
- `docs/`: contexto persistente y documentación del proyecto.
- `Pagina.pdf`: referencia del diseño/contenido.

## Gestión de contenido e imágenes

Los horarios, principios, instructores y galería están en `src/data/`. El contenido del modal institucional y el contacto de WhatsApp siguen inline en sus componentes; consulta `docs/content.md` antes de editar o publicar esos datos. Hay fotografías remotas de Unsplash y Google Fonts; el logo y algunas fotos institucionales son locales. Los datos personales e institucionales pendientes necesitan confirmación de CAMU.

## Contexto para Codex

Las instrucciones principales para Codex se encuentran en:

`AGENTS.md`

La documentación persistente del proyecto se encuentra en:

`docs/`

Antes de realizar cambios importantes, consultar los documentos relevantes dentro de `docs/`. `AGENTS.md` indica cuál leer según la tarea; no es necesario leerlos todos en cada cambio.

## Estado y tareas futuras

La implementación y los pendientes vigentes están en `docs/continuation.md`. Los textos institucionales, el número de WhatsApp y algunas imágenes requieren verificación/autorización antes de publicarse.
