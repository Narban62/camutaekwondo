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

La sección “¿Por qué TKD?” presenta los cinco principios del Taekwondo indicados por el usuario, atribuidos al General Choi Hong Hi, con su nombre romanizado y significado:

1. **Cortesía (Ye Ui):** respeto al instructor, compañeros y oponentes, demostrado en saludo, lenguaje y actitud.
2. **Integridad (Yom Chi):** actuar con honestidad, justicia y corrección dentro y fuera del dojang.
3. **Perseverancia (In Nae):** continuar entrenando ante dolor, cansancio o miedo.
4. **Autocontrol (Guk Gi):** dominar emociones, fuerza e impulsos y discernir cuándo aplicar la técnica.
5. **Espíritu Indomable (Baekjul Boolgool):** defender lo justo con coraje y determinación ante circunstancias adversas.

`src/data/principles.ts` centraliza estos cinco valores y cinco valores complementarios: Disciplina, Respeto, Humildad, Lealtad y Trabajo en equipo, cada uno con la explicación proporcionada. El componente mantiene los principios en filas editoriales numeradas y los complementarios en una lista secundaria; no son tarjetas. La atribución histórica y romanizaciones proceden del contenido entregado para esta actualización y no se han cotejado independientemente con CAMU.

## Institucional / modal

El componente actual ofrece cinco tarjetas:

- **Misión:** formar deportistas líderes integrales por medio de artes marciales; el modal añade disciplina atlética, valores universitarios, salud, autodefensa, comunidad y proyección competitiva.
- **Visión:** meta textual de ser referente regional para 2030, con excelencia técnica y métodos científicos; añade desarrollo de profesionales líderes.
- **Pilares estratégicos:** formación y valores; ciencia del deporte; proyección institucional; comunidad y red de apoyo; soft skills; representación de alto nivel. Las descripciones están en `AboutCamuSection.vue`.
- **Fundación:** el contenido añadido identifica al fundador como Arquitecto Medardo Salazar Veloz, indica 1971 como año de fundación y menciona el 55 aniversario celebrado en marzo de 2026, con reconocimiento de la Federación Ecuatoriana de Taekwondo. Incluye además la descripción del CAMU como club pionero en Pichincha y una referencia a su actividad en el dojang, tatami, pista y graderíos. Se presenta en párrafos, ficha de datos y destacado cronológico. Hay foto local `public/about/fundador.jpeg`.
- **Contemporáneo:** el contenido identifica al Dr. Anthony Rendón Morales como director y presidente, con título PhD y 5.º DAN; la atribución del grado se conserva como “Word Taekwondo Federation”, tal como fue escrita en el contenido recibido, y requiere confirmar su denominación oficial. También identifica a Lic. Luis Wladimir Moreta Sevillano como subdirector; su trayectoria y credenciales siguen pendientes. Hay fotos locales de director y subdirector.
- **Labor e importancia:** se describen formación técnica desde niveles iniciales hasta cinturón negro y competencia; formación en valores; participación en torneos universitarios, provinciales, nacionales e internacionales; representación de la UCE; y cuatro aportes: historia, semillero, salud integral y comunidad universitaria. El lema aparece como cita destacada.

Los datos históricos, nombres, cargos, grados y afirmaciones institucionales/deportivas de esta ampliación fueron añadidos al componente y aún deben cotejarse con una fuente de CAMU antes de publicarlos como información oficial. Los textos de misión, visión y pilares también contienen referencias explícitas a la Universidad Central del Ecuador que requieren confirmación.

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
