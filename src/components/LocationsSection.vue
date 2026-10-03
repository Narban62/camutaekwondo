<script setup lang="ts">
import { locations } from '../data/locations'
</script>
<template>
    <section id="sedes" class="locations section-pad">
        <div class="wrap">
            <div class="section-heading section-heading-row reveal">
                <div>
                    <p class="eyebrow">03 / ENCUENTRA TU DOJANG</p>
                    <h2>SEDES Y<br /><span>HORARIOS</span></h2>
                </div>
                <p class="heading-note">El primer paso empieza<br />más cerca de lo que crees.</p>
            </div>
            <div class="location-grid">
                <article v-for="(place, index) in locations" :key="place.name" class="location-card reveal">
                    <div class="location-top"><span>0{{ index + 1 }} / SEDE</span><span class="location-cross">＋</span>
                    </div>
                    <h3>{{ place.name }}</h3>
                    <p class="location-address">{{ place.address }}</p>
                    <div class="schedule">
                        <p v-for="time in place.schedule" :key="time">
                            <span>{{ place.days }}</span><strong>{{ time }}</strong></p>
                    </div><a class="text-link" href="#contacto">VER INFORMACIÓN <span>↗</span></a>
                </article>
            </div>
        </div>
    </section>
</template>
