<script setup lang="ts">
import { media } from '../data/media'
</script>
<template>
    <section id="inicio" class="hero">
        <div class="hero-image" :style="{ backgroundImage: `url('${media.hero}')` }" role="img"
            aria-label="Atleta practicando taekwondo"></div>
        <div class="hero-grain"></div>
        <div class="hero-content wrap">
            <p class="eyebrow hero-eyebrow"><span class="eyebrow-line"></span> DISCIPLINA · CONTROL · SUPERACIÓN</p>
            <h1><span class="hero-word">CAMU</span><span class="hero-subtitle">TAEKWONDO</span></h1>
            <div class="hero-bottom">
                <p class="hero-quote">SI TE RINDES ANTE EL DOLOR<br />O EL MIEDO NUNCA ALCANZARAS<br /><em>LA
                        GLORIA</em></p>
                <div class="hero-actions"><a class="button" href="#contacto">QUIERO UNA CLASE DEMO <span>↗</span></a><a
                        class="text-link" href="#about">CONOCE CAMU <span>↓</span></a></div>
            </div>
        </div>
        <div class="hero-index"><span>01</span><i></i> QUITO · ECUADOR</div>
    </section>
</template>
