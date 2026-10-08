# Contenido de la landing

## Fuente y estado de verificación

La referencia es `Pagina.pdf` y la información transcrita en la solicitud inicial. Este archivo registra tanto el contenido del código actual como su nivel de confirmación. No presentar los datos señalados como pendientes como información oficial. La redacción institucional añadida en el componente no está acreditada aquí contra el PDF.

## Navegación

- ¿Qué es CAMU?
- Sedes
- Galería
- Instructores
- Contacto
- CTA de header: `CLASE DEMO`

## Hero

- Marca/título: CAMU / TAEKWONDO.
- Frase que muestra el componente: `SI TE RINDES ANTE EL DOLOR O EL MIEDO NUNCA ALCANZARAS LA GLORIA` (sin tildes en el código actual).
- CTA: `QUIERO UNA CLASE DEMO` y `CONOCE CAMU`.
- Línea editorial: `DISCIPLINA · CONTROL · SUPERACIÓN`.

## Principios

RESPETO, CONTROL, DISCIPLINA, FUERZA y CONFIANZA. Cada principio tiene una descripción editorial en `src/data/principles.ts`; cotejar esas descripciones con CAMU antes de tratarlas como citas oficiales.

## Institucional / modal

El componente actual ofrece cinco tarjetas:

- **Misión:** formar deportistas líderes integrales por medio de artes marciales; el modal añade disciplina atlética, valores universitarios, salud, autodefensa, comunidad y proyección competitiva.
- **Visión:** meta textual de ser referente regional para 2030, con excelencia técnica y métodos científicos; añade desarrollo de profesionales líderes.
- **Pilares estratégicos:** formación y valores; ciencia del deporte; proyección institucional; comunidad y red de apoyo; soft skills; representación de alto nivel. Las descripciones están en `AboutCamuSection.vue`.
- **Fundación:** el nombre y la historia del fundador son placeholders de plantilla, no datos confirmados. Hay foto local `public/about/fundador.jpeg`.
- **Contemporáneo:** cargos, nombres y trayectorias están como placeholders. Hay fotos locales de director y subdirector.

Los textos de misión, visión y pilares contienen referencias explícitas a la Universidad Central del Ecuador y afirmaciones institucionales/deportivas. Confirmar con PDF/CAMU antes de publicarlas como oficiales.

## Sedes y horarios

En `src/data/locations.ts` se muestran CAMU UCE, CAMU NORTE, CAMU COMUNA y CAMU MONJAS. Para cada una: lunes a viernes, `12:00 — 13:30` y `13:30 — 15:00`. La dirección por sede figura como `[POR DEFINIR]`.

## Galería / RECUERDOS y entrenamiento

La sección utiliza el título `RECUERDOS`, rótulos neutros `RECUERDO 01` a `RECUERDO 24` y descripciones alternativas basadas en las fotografías visibles. No se asignan fechas, nombres de personas, campeonatos ni ubicaciones no confirmadas. Los 24 registros escogidos están en `src/data/gallery.ts` y apuntan únicamente a JPEG existentes en `public/images/gallery/`; el inventario total es de 136 JPEG y 2 videos, estos últimos no se presentan como fotos. La galería muestra 16 miniaturas inicialmente y permite cargar el resto en lotes.

Entrenamiento: `COMBATE`, `ENTRENAMIENTOS`, `EL RETO ES` y etiquetas editoriales `CUERPO · TÉCNICA · MENTE`.

## Instructores

En `src/data/instructors.ts`:

- Anthony — Director del Club — `PhD ...` — Dan `6TO` — experiencia `......`.
- Joel — Entrenador del Club — `LIC ...` — Dan `3RO` — experiencia `......`.

Credenciales incompletas y fotos genéricas/remotas: conservar como placeholders hasta recibir datos/fotos autorizados.

## Contacto y conversión

- CTA actual: `CONSULTAR POR WHATSAPP`, abre `wa.me` en pestaña nueva.
- El código contiene el número `593992548774`; confirmar que sea el número oficial y autorizado antes de publicación.
- El mensaje prellenado pregunta por las clases de Taekwondo UCE y una primera clase.
- Email: `[POR DEFINIR]`.
- Ubicación indicada en el componente: Universidad Central del Ecuador; validar alcance/dirección.
- Footer: Instagram y Facebook indicados como `[POR DEFINIR]`.
- No hay formulario de contacto ni integración backend actualmente.

## SEO

Title: `CAMU Taekwondo | Disciplina, Fuerza y Gloria`. Meta description y Open Graph están definidos en `index.html`.
