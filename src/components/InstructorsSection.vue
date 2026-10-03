<script setup lang="ts">
import { instructors } from '../data/instructors'
</script>
<template>
    <section id="instructores" class="instructors section-pad">
        <div class="wrap">
            <div class="section-heading section-heading-row reveal">
                <div>
                    <p class="eyebrow">06 / QUIENES GUÍAN</p>
                    <h2>INSTRUCTORES<span>.</span></h2>
                </div>
                <p class="heading-note">Experiencia y compromiso<br />en cada entrenamiento.</p>
            </div>
            <div class="instructor-grid">
                <article v-for="(coach, index) in instructors" :key="coach.name" class="instructor-card reveal">
                    <div class="instructor-image"><img :src="coach.image" :alt="coach.alt"
                            loading="lazy" /><span>0{{ index + 1 }}</span></div>
                    <div class="instructor-meta">
                        <div>
                            <p>{{ coach.role }}</p>
                            <h3>{{ coach.name }}</h3>
                        </div><span class="dan-badge">DAN<br /><b>{{ coach.dan }}</b></span>
                    </div>
                    <dl>
                        <div>
                            <dt>TÍTULO</dt>
                            <dd>{{ coach.title }}</dd>
                        </div>
                        <div>
                            <dt>EXPERIENCIA</dt>
                            <dd>{{ coach.experience }}</dd>
                        </div>
                    </dl>
                </article>
            </div>
        </div>
    </section>
</template>
