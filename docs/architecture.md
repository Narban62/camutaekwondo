# Arquitectura actual

## Estructura

```text
src/
  App.vue                 # Composición de la página y scroll suave
  main.ts                 # Montaje Vue e importación de estilos
  components/             # Header, footer y secciones de la landing
  composables/useReveal.ts# Aparición de elementos con IntersectionObserver
  data/                   # Principios, sedes, perfiles, galería e imágenes remotas
  assets/images/logo.png  # Logo local usado por header y footer
  assets/icons/camu.ico   # Icono presente; su uso como favicon está pendiente
  styles/                 # variables.css, globals.css, animations.css
public/about/             # Fotos locales para los modales de Fundación/Contemporáneo
docs/                     # Documentación y continuidad del proyecto
```

Vite, TypeScript, configuración y dependencias se describen en `vite.config.ts`, `tsconfig*.json` y `package.json`.

## Componentes y secciones

- `AppHeader.vue`: marca, navegación por anclas y menú móvil.
- `HeroSection.vue`: hero y CTA.
- `PrinciplesSection.vue`: lista desde `data/principles.ts`.
- `AboutCamuSection.vue`: tarjetas y modal para misión, visión, pilares, fundación y contemporáneo. El copy está inline en el componente; aún no se separó a `src/data/`.
- `LocationsSection.vue`: tarjetas desde `data/locations.ts`.
- `GallerySection.vue`: sección `RECUERDOS`, grid de imágenes, carga progresiva de miniaturas y lightbox con foco administrado, teclado y gesto horizontal.
- `TrainingSection.vue`: bloque visual de combate/entrenamiento.
- `InstructorsSection.vue`: perfiles desde `data/instructors.ts`.
- `ContactSection.vue`: mensaje y CTA externo de WhatsApp. No hay formulario ni backend de envío.
- `AppFooter.vue`: marca, texto de cierre y redes pendientes.

## Flujo de datos y recursos

`App.vue` compone los componentes, instala `useReveal()` y escucha clics en anclas para scroll suave. Los datos repetidos de principios, ubicaciones, instructores, galería y medios viven en `src/data/`. Excepciones actuales: el contenido institucional y el número/mensaje de WhatsApp permanecen en los componentes.

Los archivos `src/assets/images/logo.png` y `public/about/{fundador,director,subdirector}.jpeg` son locales. Las fotos seleccionadas para recuerdos están en `public/images/gallery/`; el inventario tiene 136 JPEG y 2 MP4, y `src/data/gallery.ts` configura 24 JPEG por nombre de archivo y construye rutas `/images/gallery/...` compatibles con Vite. No se mueve ni copia el archivo original. El resto de imágenes de hero, about principal, training e instructores mantiene URLs de Unsplash en `src/data/`.

## Galería y lightbox

`src/data/gallery.ts` mantiene el listado y textos alternativos. `GallerySection.vue` muestra un primer lote de 16 miniaturas con `loading="lazy"` para el resto; el botón “Ver más recuerdos” añade hasta 16 por interacción. La primera foto tiene prioridad de carga. Al abrir una foto, el modal permite anterior/siguiente con botones y flechas, Escape para cerrar, encierra el foco con Tab y restaura el foco al botón de origen. En touch, un swipe horizontal cambia la foto. No se añadió dependencia.

## Estilos y responsive

`variables.css` define tokens; `globals.css` contiene estilos de layout/componentes y media queries; `animations.css` contiene reveals y respeto a `prefers-reduced-motion`. Los breakpoints observados incluyen 900, 800, 700, 600 y 380 px. La navegación y las grillas cambian en móvil.

## Convenciones y límites

Componentes en PascalCase, composable `useReveal`, datos en módulos de `src/data/`, clases CSS kebab-case. No hay router. Antes de mover el copy inline a datos, conservar el texto existente y verificar datos reales con la fuente correspondiente.
