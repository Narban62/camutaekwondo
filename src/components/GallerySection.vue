<script setup lang="ts">
import { ref } from 'vue'
import { gallery } from '../data/gallery'
const selected = ref<(typeof gallery)[number] | null>(null)
</script>
<template>
    <section id="galeria" class="gallery section-pad">
        <div class="wrap">
            <div class="section-heading section-heading-row reveal">
                <div>
                    <p class="eyebrow">04 / INSTANTES CAMU</p>
                    <h2>EL CAMINO<br /><span>SE ENTRENA.</span></h2>
                </div>
                <p class="heading-note">Cada repetición deja una marca.<br />Cada paso cuenta.</p>
            </div>
            <div class="gallery-grid"><button v-for="(item, index) in gallery" :key="item.title"
                    class="gallery-item reveal" :class="`gallery-item-${index + 1}`" type="button"
                    :aria-label="`Ampliar imagen: ${item.title}`" @click="selected = item"><img :src="item.image"
                        :alt="item.alt" loading="lazy" /><span
                        class="gallery-caption"><small>{{ item.category }}</small><strong>{{ item.title }}</strong><i>↗</i></span></button>
            </div>
        </div>
        <Transition name="lightbox">
            <div v-if="selected" class="lightbox" role="dialog" aria-modal="true" :aria-label="selected.title"
                @click.self="selected = null" @keydown.esc="selected = null"><button class="lightbox-close"
                    aria-label="Cerrar imagen" @click="selected = null">×</button><img :src="selected.image"
                    :alt="selected.alt" />
                <p>{{ selected.category }} / {{ selected.title }}</p>
            </div>
        </Transition>
    </section>
</template>
