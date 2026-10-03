<script setup lang="ts">
import { principles } from '../data/principles'
</script>
<template>
    <section id="principios" class="principles section-pad">
        <div class="wrap">
            <div class="section-heading reveal">
                <p class="eyebrow">01 / EL CAMINO</p>
                <h2>¿POR QUÉ <span>TKD?</span></h2>
                <p class="heading-note">Más que una práctica. Una forma de avanzar.</p>
            </div>
            <div class="principle-list">
                <article v-for="item in principles" :key="item.number" class="principle-row reveal"><span
                        class="principle-number">{{ item.number }}</span>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p><span class="principle-arrow">↗</span>
                </article>
            </div>
            <div class="principle-stamp" aria-hidden="true">CAMU<br />TKD</div>
        </div>
    </section>
</template>
