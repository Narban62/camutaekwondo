<script setup lang="ts">
import { ref } from 'vue'
import camuLogo from '../assets/images/fondoabout.jpeg'

const activeCard = ref<number | null>(null)

function openCard(index: number) {
    activeCard.value = index
}

function closeCard() {
    activeCard.value = null
}
</script>
<template>
    <section id="about" class="about section-pad">
        <img class="about-background-mark" :src="camuLogo" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div class="wrap about-layout">
            <div class="about-copy">
                <div class="about-heading">
                    <p class="eyebrow">02 / IDENTIDAD</p>
                    <h2>¿QUÉ ES<br /><em>CAMU?</em></h2>
                </div>
                <div class="about-intro">
                    <p class="about-lead">El Club de Artes Marciales Universitario reúne formación deportiva, práctica del Taekwondo e identidad universitaria.</p>
                    <p class="about-intro-note">Fundado en 1971, CAMU mantiene una trayectoria de más de cinco décadas en el deporte universitario ecuatoriano.</p>
                </div>
                <div class="about-facts">

                    <article class="about-card">
                        <span>01</span>

                        <div class="about-card-content">
                            <h3>MISIÓN</h3>
                            <p>
                                Formar deportistas líderes integrales a través de la práctica
                                sistemática de las artes marciales.
                            </p>

                            <button type="button" class="about-read" @click="openCard(1)">
                                LEER MÁS <span>↗</span>
                            </button>
                        </div>
                    </article>


                    <article class="about-card">
                        <span>02</span>

                        <div class="about-card-content">
                            <h3>VISIÓN</h3>
                            <p>
                                Ser reconocidos para el 2030 como el club de artes marciales
                                universitario referente a nivel regional.
                            </p>

                            <button type="button" class="about-read" @click="openCard(2)">
                                LEER MÁS <span>↗</span>
                            </button>
                        </div>
                    </article>


                    <article class="about-card">
                        <span>03</span>

                        <div class="about-card-content">
                            <h3>PILARES ESTRATÉGICOS</h3>
                            <p>
                                Formación, ciencia del deporte, proyección institucional
                                y desarrollo integral del estudiante.
                            </p>

                            <button type="button" class="about-read" @click="openCard(3)">
                                LEER MÁS <span>↗</span>
                            </button>
                        </div>
                    </article>

                    <article class="about-card">
                        <span>04</span>

                        <div class="about-card-content">
                            <h3>FUNDACIÓN</h3>

                            <p>
                                Conoce el origen del club y la persona que impulsó
                                su creación y desarrollo.
                            </p>

                            <button type="button" class="about-read" @click="openCard(4)">
                                CONOCER MÁS <span>↗</span>
                            </button>
                        </div>
                    </article>


                    <article class="about-card">
                        <span>05</span>

                        <div class="about-card-content">
                            <h3>CONTEMPORÁNEO</h3>

                            <p>
                                Conoce a las personas que actualmente representan
                                y continúan desarrollando el proyecto.
                            </p>

                            <button type="button" class="about-read" @click="openCard(5)">
                                CONOCER MÁS <span>↗</span>
                            </button>
                        </div>
                    </article>

                </div>
            </div>

            <!-- MODAL DE INFORMACIÓN -->
            <Teleport to="body">
            <div v-if="activeCard !== null" class="about-modal" @click.self="closeCard">
                <div class="about-modal-box" :class="{ 'about-modal-box--wide': activeCard >= 4 }">

                    <button type="button" class="about-modal-close" aria-label="Cerrar" @click="closeCard">
                        ×
                    </button>

                    <!-- MISIÓN -->
                    <div v-if="activeCard === 1" class="about-modal-content">
                        <span class="eyebrow">01 / IDENTIDAD</span>
                        <h3>MISIÓN</h3>

                        <p>
                            Formar deportistas líderes integrales a través de la práctica
                            sistemática de las artes marciales, integrando la disciplina
                            atlética con los valores académicos y éticos de la Universidad
                            Central del Ecuador.
                        </p>

                        <p>
                            Nos dedicamos a impulsar la salud, la autodefensa responsable
                            y la cohesión comunitaria, proyectando el talento universitario
                            hacia el podio nacional e internacional.
                        </p>
                    </div>


                    <!-- VISIÓN -->
                    <div v-if="activeCard === 2" class="about-modal-content">
                        <span class="eyebrow">02 / IDENTIDAD</span>
                        <h3>VISIÓN</h3>

                        <p>
                            Ser reconocidos para el 2030 como el club de artes marciales
                            universitario referente a nivel regional, destacado por la
                            excelencia técnica de sus atletas y la innovación en
                            metodologías de entrenamiento científico.
                        </p>

                        <p>
                            Ser una cuna de profesionales líderes caracterizados por su
                            carácter, resiliencia y compromiso social.
                        </p>
                    </div>


                    <!-- PILARES -->
                    <div v-if="activeCard === 3" class="about-modal-content">
                        <span class="eyebrow">03 / IDENTIDAD</span>
                        <h3>PILARES ESTRATÉGICOS</h3>

                        <div class="pillar-list">

                            <div class="pillar-item">
                                <strong>Formación y Valores</strong>
                                <p>
                                    Desarrollo de la resiliencia, el respeto, el autocontrol
                                    y el rendimiento académico como requisito indispensable
                                    para la representación institucional.
                                </p>
                            </div>

                            <div class="pillar-item">
                                <strong>Ciencia del Deporte</strong>
                                <p>
                                    Aplicación de metodologías modernas para optimizar el
                                    rendimiento de los atletas.
                                </p>
                            </div>

                            <div class="pillar-item">
                                <strong>Proyección Institucional</strong>
                                <p>
                                    Posicionamiento de la marca del club mediante
                                    intercambios deportivos, torneos universitarios
                                    interinstitucionales y alianzas con federaciones
                                    nacionales.
                                </p>
                            </div>

                            <div class="pillar-item">
                                <strong>Comunidad y Red de Apoyo</strong>
                                <p>
                                    Un entorno seguro de pertenencia que equilibra las
                                    exigencias académicas con la descarga de estrés y
                                    la salud mental.
                                </p>
                            </div>

                            <div class="pillar-item">
                                <strong>Desarrollo de Soft Skills</strong>
                                <p>
                                    Fortalecimiento del liderazgo, la toma de decisiones
                                    bajo presión y el trabajo en equipo, habilidades
                                    altamente valoradas en el mercado laboral.
                                </p>
                            </div>

                            <div class="pillar-item">
                                <strong>Representación de Alto Nivel</strong>
                                <p>
                                    Oportunidad de escalar en el deporte federado y
                                    universitario llevando los colores de la institución.
                                </p>
                            </div>

                        </div>
                    </div>

                    <!-- FUNDACIÓN -->
                    <div v-if="activeCard === 4" class="about-modal-content">

                        <span class="eyebrow">04 / HISTORIA</span>

                        <h3>FUNDACIÓN</h3>

                        <div class="founder-profile">

                            <div class="founder-photo">
                                <img src="/about/fundador.jpeg" alt="Fundador del Club de Taekwondo UCE" />
                            </div>

                            <div class="founder-info">

                                <p class="profile-role">
                                    FUNDADOR
                                </p>

                                <h4>
                                    Arquitecto Medardo Salazar Veloz
                                </h4>

                                <div class="founder-story">
                                    <p>
                                        El Club de Artes Marciales Universitario, conocido como CAMU, es una organización
                                        deportiva y formativa de la Universidad Central del Ecuador, dedicada principalmente
                                        a la práctica y difusión del Taekwondo.
                                    </p>
                                    <p>
                                        Es considerado un club pionero del Taekwondo en Pichincha y uno de los espacios con
                                        más tradición dentro del deporte universitario ecuatoriano.
                                    </p>
                                    <dl class="history-facts">
                                        <div>
                                            <dt>FUNDACIÓN:</dt>
                                            <dd>1971</dd>
                                        </div>
                                        <div>
                                            <dt>FUNDADOR:</dt>
                                            <dd>Arq. Medardo Salazar Veloz</dd>
                                        </div>
                                    </dl>
                                    <p class="history-milestone">
                                        <span>55 AÑOS · MARZO 2026</span>
                                        En marzo de 2026 celebró su 55 aniversario, con un reconocimiento de la
                                        Federación Ecuatoriana de Taekwondo a sus atletas y dirigentes.
                                    </p>
                                    <p>
                                        Durante más de medio siglo, CAMU ha sido testigo de innumerables horas de esfuerzo,
                                        compañerismo y competencia en su dojang, tatami, pista atlética y graderíos.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <!-- CONTEMPORÁNEO -->
                    <div v-if="activeCard === 5" class="about-modal-content">

                        <span class="eyebrow">05 / ACTUALIDAD</span>

                        <h3>CONTEMPORÁNEO</h3>

                        <p class="contemporary-intro">
                            Personas que continúan construyendo y representando
                            el proyecto en su etapa actual.
                        </p>

                        <div class="contemporary-people">

                            <article class="person-card">

                                <div class="person-photo">
                                    <img src="/about/director.jpeg" alt="Dr. Anthony Rendón Morales, PhD." />
                                </div>

                                <div class="person-info">

                                    <span>
                                        Director y Presidente
                                    </span>

                                    <h4>
                                        Dr. Anthony Rendón Morales, PhD.
                                    </h4>

                                    <p>Actualmente, dirige y preside el club.</p>
                                    <span class="person-credential">PhD · 5.º DAN</span>
                                    <p class="person-credential-source">Grado DAN atribuido en el contenido recibido a Word Taekwondo Federation.</p>
                                </div>

                            </article>


                            <article class="person-card">

                                <div class="person-photo">
                                    <img src="/about/subdirector.jpeg" alt="Lic. Luis Wladimir Moreta Sevillano" />
                                </div>

                                <div class="person-info">

                                    <span>
                                        Subdirector
                                    </span>

                                    <h4>
                                        Lic. Luis Wladimir Moreta Sevillano
                                    </h4>

                                    <p class="person-pending">[Trayectoria y credenciales por definir.]</p>

                                </div>

                            </article>
                        </div>

                        <div class="contemporary-details">
                            <article class="contemporary-detail">
                                <p class="detail-index">01 / LABOR DEL CLUB</p>
                                <h4>¿QUÉ HACE CAMU?</h4>
                                <p>El CAMU forma deportistas y promueve el desarrollo integral a través de:</p>
                                <ul class="camu-work-list">
                                    <li><strong>Formación técnica</strong><span>Taekwondo desde niveles iniciales hasta cinturones negros y competencia.</span></li>
                                    <li><strong>Formación en valores</strong><span>Disciplina, respeto, perseverancia, autocontrol y trabajo en equipo.</span></li>
                                    <li><strong>Competencia</strong><span>Participación en torneos universitarios, provinciales, nacionales e internacionales.</span></li>
                                    <li><strong>Identidad universitaria</strong><span>Representación de la Universidad Central del Ecuador.</span></li>
                                </ul>
                                <blockquote class="camu-motto">“Si te rindes ante el dolor y el miedo, jamás alcanzarás la gloria.”</blockquote>
                            </article>

                            <article class="contemporary-detail contemporary-importance">
                                <p class="detail-index">02 / IMPORTANCIA</p>
                                <h4>UN CLUB, MUCHAS HUELLAS</h4>
                                <ol class="importance-list">
                                    <li><span>01</span><p><strong>Historia</strong> Más de cinco décadas de artes marciales universitarias.</p></li>
                                    <li><span>02</span><p><strong>Semillero</strong> Formación de generaciones de deportistas y entrenadores.</p></li>
                                    <li><span>03</span><p><strong>Salud integral</strong> Desarrollo físico, mental y emocional.</p></li>
                                    <li><span>04</span><p><strong>Comunidad</strong> Un espacio de encuentro, pertenencia y orgullo centralino.</p></li>
                                </ol>
                            </article>
                        </div>

                    </div>

                </div>
            </div>
            </Teleport>
        </div>
    </section>
</template>
