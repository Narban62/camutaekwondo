<script setup lang="ts">
import '../styles/globals.css'

const whatsappNumber = '593998053126'

const whatsappMessage = encodeURIComponent(
    '¡Hola! Me interesa conocer más sobre las disciplina de Brazilian Jiu-Jitsu. ¿Podrían darme más información?'
)

const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const features = [
    {
        number: '01',
        title: 'TÉCNICA',
        description:
            'Aprende posiciones, controles, escapes y transiciones mediante la práctica progresiva.',
    },
    {
        number: '02',
        title: 'ESTRATEGIA',
        description:
            'Desarrolla la lectura del oponente, la toma de decisiones y el uso eficiente de la energía.',
    },
    {
        number: '03',
        title: 'DISCIPLINA',
        description:
            'Fortalece la paciencia, la constancia y el respeto dentro y fuera del tatami.',
    },
]
</script>

<template>
    <section id="bjj" class="bjj section-pad">
        <div class="wrap">

            <!-- PRESENTACIÓN -->
            <div class="bjj-hero reveal">
                <img
                    class="bjj-hero-image"
                    src="/src/assets/images/bjj/bjj.jpg"
                    alt="Entrenamiento de Brazilian Jiu-Jitsu"
                    loading="lazy"
                />

                <div class="bjj-hero-overlay"></div>

                <div class="bjj-hero-content">
                    <p class="eyebrow">04 / OTRA FORMA DE COMBATIR</p>

                    <h2>
                        BRAZILIAN<br />
                        <em>JIU-JITSU.</em>
                    </h2>

                    <p class="bjj-hero-description">
                        Técnica, estrategia y control.
                        Una disciplina para aprender, superarte
                        y crecer junto a la comunidad CAMU.
                    </p>

                    <a href="#bjj-disciplina" class="bjj-link">
                        DESCUBRE EL BJJ
                        <span>↓</span>
                    </a>
                </div>

                <span class="bjj-hero-index">CAMU / BJJ 001</span>
            </div>

            <!-- INTRODUCCIÓN -->
            <div
                id="bjj-disciplina"
                class="bjj-intro reveal"
            >
                <div class="bjj-intro-heading">
                    <p class="eyebrow">5.1 / LA DISCIPLINA</p>

                    <h3>
                        EL COMBATE<br />
                        <em>EVOLUCIONA.</em>
                    </h3>
                </div>

                <div class="bjj-intro-copy">
                    <p>
                        El Brazilian Jiu-Jitsu es un arte marcial
                        centrado en el control, los desplazamientos
                        y las técnicas de combate en el suelo.
                    </p>

                    <p>
                        En CAMU, el BJJ complementa nuestra formación
                        marcial y abre nuevas oportunidades para que
                        la comunidad universitaria aprenda, entrene
                        y desarrolle sus capacidades.
                    </p>
                </div>
            </div>

            <!-- CARACTERÍSTICAS -->
            <div class="bjj-features">
                <article
                    v-for="feature in features"
                    :key="feature.number"
                    class="bjj-feature reveal"
                >
                    <span class="bjj-feature-number">
                        {{ feature.number }}
                    </span>

                    <div>
                        <h4>{{ feature.title }}</h4>
                        <p>{{ feature.description }}</p>
                    </div>

                    <span class="bjj-feature-plus">+</span>
                </article>
            </div>

            <!-- COMUNIDAD -->
            <div class="bjj-community reveal">
                <div class="bjj-community-image">
                    <img
                        src="/src/assets/images/bjj/bjj.jpg"
                        alt="Compañeros practicando artes marciales"
                        loading="lazy"
                    />
                </div>

                <div class="bjj-community-copy">
                    <p class="eyebrow">5.2 / COMUNIDAD CAMU</p>

                    <h3>
                        DOS DISCIPLINAS.<br />
                        <em>UN MISMO ESPÍRITU.</em>
                    </h3>

                    <p>
                        Taekwondo y Brazilian Jiu-Jitsu forman parte
                        de un mismo proyecto: una comunidad que
                        promueve el aprendizaje, la disciplina y
                        el desarrollo deportivo universitario.
                    </p>

                    <a :href="whatsappUrl" class="bjj-link bjj-link-dark" target="_blank" rel="noopener noreferrer">
                        CONOCE CAMU BJJ
                        <span>↗</span>
                  
</a>
                </div>
            </div>

            <!-- CIERRE -->
            <div class="bjj-footer reveal">
                <p>CAMU / ARTES MARCIALES</p>
                <span>EL SIGUIENTE PASO EMPIEZA EN EL TATAMI.</span>
            </div>

        </div>
    </section>
</template>