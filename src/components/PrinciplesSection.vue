<script setup lang="ts">
import { additionalValues, principles } from '../data/principles'
import camuLogo from '../assets/images/logo.png'
</script>
<template>
    <section id="principios" class="principles section-pad">
        <div class="wrap">
            <img class="principle-background-mark" :src="camuLogo" alt="" aria-hidden="true" loading="lazy"
                decoding="async" />
            <div class="section-heading reveal">
                <p class="eyebrow">03 / EL CAMINO</p>
                <h2>¿POR QUÉ <span>TKD?</span></h2>
                <p class="heading-note">Cinco principios del Taekwondo moderno, establecidos por el General Choi Hong
                    Hi.</p>
            </div>
            <div class="principle-list">
                <article v-for="item in principles" :key="item.number" class="principle-row reveal">
                    <span class="principle-number">{{ item.number }}</span>
                    <div class="principle-label">
                        <h3>{{ item.title }}</h3>
                        <span class="principle-korean">{{ item.koreanName }}</span>
                    </div>
                    <p>{{ item.description }}</p>
                    <span class="principle-arrow" aria-hidden="true">↗</span>
                </article>
            </div>
            <div class="supporting-values">
                <div class="supporting-values-heading">
                    <p class="eyebrow">VALORES EN PRÁCTICA</p>
                    <h3>TAMBIÉN<br />SE ENTRENA.</h3>
                </div>
                <ul class="supporting-values-list">
                    <li v-for="value in additionalValues" :key="value.title">
                        <h4>{{ value.title }}</h4>
                        <p>{{ value.description }}</p>
                    </li>
                </ul>
            </div>
            <!-- <div class="principle-stamp" aria-hidden="true">CAMU<br />TKD</div> -->
        </div>
    </section>
</template>
