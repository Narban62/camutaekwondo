<script setup lang="ts">
import { ref } from 'vue'
import { media } from '../data/media'

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
        <div class="wrap about-layout">
            <div class="about-visual reveal"><img class="about-photo" :src="media.about"
                    alt="Atleta preparándose para entrenar" loading="lazy" /><span class="image-index">CAMU /
                    001</span><span class="about-vertical">DISCIPLINA EN MOVIMIENTO</span><span
                    class="about-ring">CAMU</span></div>
            <div class="about-copy reveal">
                <p class="eyebrow">02 / IDENTIDAD</p>
                <h2>¿QUÉ ES<br /><em>CAMU?</em></h2>
                <p class="about-lead">[Descripción institucional por definir.]</p>
                <p class="placeholder-note">Texto institucional pendiente de validar con el PDF.</p>
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
            <div v-if="activeCard !== null" class="about-modal" @click.self="closeCard">
                <div class="about-modal-box">

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
                                    NOMBRE DEL FUNDADOR
                                </h4>

                                <p>
                                    Aquí puedes colocar la historia del fundador,
                                    explicando cómo nació la iniciativa, cuáles fueron
                                    sus motivaciones y cómo comenzó el desarrollo del
                                    club dentro de la Universidad Central del Ecuador.
                                </p>

                                <p>
                                    Desde sus primeros pasos, el proyecto buscó utilizar
                                    las artes marciales como una herramienta de formación,
                                    disciplina y desarrollo integral para la comunidad
                                    universitaria.
                                </p>

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
                                    <img src="/about/director.jpeg" alt="Nombre de la primera persona" />
                                </div>

                                <div class="person-info">

                                    <span>
                                        CARGO / FUNCIÓN
                                    </span>

                                    <h4>
                                        NOMBRE DE LA PERSONA
                                    </h4>

                                    <p>
                                        Breve descripción de su trayectoria,
                                        función o aporte al club.
                                    </p>

                                </div>

                            </article>


                            <article class="person-card">

                                <div class="person-photo">
                                    <img src="/about/subdirector.jpeg" alt="Nombre de la segunda persona" />
                                </div>

                                <div class="person-info">

                                    <span>
                                        CARGO / FUNCIÓN
                                    </span>

                                    <h4>
                                        NOMBRE DE LA PERSONA
                                    </h4>

                                    <p>
                                        Breve descripción de su trayectoria,
                                        función o aporte al club.
                                    </p>

                                </div>

                            </article>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
