<script setup lang="ts">
import { media } from '../data/media'
</script>

<template>
    <section id="entrenamientos" class="training">
        <div class="training-image" :style="{ backgroundImage: `url('${media.training}')` }" role="img"
            aria-label="Entrenamiento intenso de artes marciales"></div>
        <div class="training-overlay"></div>
        <div class="wrap training-content reveal">
            <p class="eyebrow">08 / ENTRENA CON PROPÓSITO</p>
            <p class="training-kicker">EL RETO ES</p>
            <h2>COMBATE<span>.</span></h2>
            <div class="training-bottom">
                <p>ENTRENAMIENTOS<br /><span>CUERPO · TÉCNICA · MENTE</span></p>
                <a class="button button-light" href="#contacto">RESERVA TU CLASE DEMO <span>↗</span></a>
            </div>
        </div>
        <span class="training-side">CAMU TAEKWONDO / QUITO</span>
    </section>
</template>
