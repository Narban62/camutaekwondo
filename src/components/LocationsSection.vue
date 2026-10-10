<script setup lang="ts">
import { computed, ref } from 'vue'
import { locations } from '../data/locations'
import { instructors } from '../data/instructors'

const selectedLocation = ref<(typeof locations)[number] | null>(null)

const selectedInstructor = computed(() => {
    if (!selectedLocation.value) return null

    return instructors.find(
        instructor => instructor.id === selectedLocation.value?.instructorId
    ) ?? null
})

const whatsappUrl = computed(() => {
    if (!selectedLocation.value) return '#'

    const message = encodeURIComponent(
        `Hola, quisiera información sobre ${selectedLocation.value.name} y sus clases de ${selectedLocation.value.discipline}.`
    )

    return `https://wa.me/${selectedLocation.value.whatsappNumber}?text=${message}`
})

function openLocation(place: (typeof locations)[number]) {
    selectedLocation.value = place
}

function closeLocation() {
    selectedLocation.value = null
}
</script>

<template>
    <section id="sedes" class="locations section-pad">
        <div class="wrap">
            <div class="section-heading section-heading-row reveal">
                <div>
                    <p class="eyebrow">03 / ENCUENTRA TU DOJANG</p>
                    <h2>SEDES Y<br /><span>HORARIOS</span></h2>
                </div>

                <p class="heading-note">
                    El primer paso empieza<br />
                    más cerca de lo que crees.
                </p>
            </div>

            <!-- TARJETAS DE SEDES -->
            <div class="location-grid">
                <article
                    v-for="(place, index) in locations"
                    :key="place.name"
                    class="location-card reveal"
                    :class="{
                        'location-card-bjj':
                            place.discipline === 'BRAZILIAN JIU-JITSU'
                    }"
                >
                    <div class="location-top">
                        <span>
                            {{ String(index + 1).padStart(2, '0') }} / SEDE
                        </span>
                        <span class="location-cross">＋</span>
                    </div>

                    <span class="location-discipline">
                        {{ place.discipline }}
                    </span>

                    <h3>{{ place.name }}</h3>

                    <p class="location-address">
                        {{ place.address }}
                    </p>

                    <div class="schedule">
                        <p v-for="time in place.schedule" :key="time">
                            <span>{{ place.days }}</span>
                            <strong>{{ time }}</strong>
                        </p>
                    </div>

                    <button
                        class="text-link location-open"
                        type="button"
                        @click="openLocation(place)"
                    >
                        VER INFORMACIÓN <span>↗</span>
                    </button>
                </article>
            </div>
        </div>

        <!-- VENTANA EMERGENTE -->
        <Transition name="location-modal">
            <div
                v-if="selectedLocation"
                class="location-modal"
                role="dialog"
                aria-modal="true"
                :aria-label="`Información de ${selectedLocation.name}`"
                @click.self="closeLocation"
                @keydown.esc="closeLocation"
            >
                <div class="location-modal-box">
                    <button
                        class="location-modal-close"
                        type="button"
                        aria-label="Cerrar ventana"
                        @click="closeLocation"
                    >
                        ×
                    </button>

                    <div class="location-modal-heading">
                        <p class="eyebrow">CAMU / INFORMACIÓN DE SEDE</p>

                        <span class="location-modal-discipline">
                            {{ selectedLocation.discipline }}
                        </span>

                        <h3>{{ selectedLocation.name }}</h3>

                        <p class="location-modal-address">
                            {{ selectedLocation.address }}
                        </p>
                    </div>

                    <!-- HORARIOS -->
                    <div class="location-modal-schedule">
                        <h4>HORARIOS DE ENTRENAMIENTO</h4>

                        <div
                            v-for="(item, index) in selectedLocation.fullSchedule"
                            :key="`${item.days}-${index}`"
                            class="location-modal-schedule-row"
                        >
                            <span>{{ item.days }}</span>
                            <strong>{{ item.time }}</strong>
                        </div>
                    </div>

                    <!-- INSTRUCTOR -->
                    <div class="location-modal-instructor">
                        <h4>INSTRUCTOR A CARGO</h4>

                        <div v-if="selectedInstructor" class="instructor-profile">
                            <div class="instructor-profile-image">
                                <img
                                    :src="selectedInstructor.image"
                                    :alt="selectedInstructor.alt"
                                />
                            </div>

                            <div class="instructor-profile-info">
                                <span class="instructor-profile-role">
                                    {{ selectedInstructor.role }}
                                </span>

                                <h5>{{ selectedInstructor.name }}</h5>

                                <p>
                                    <strong>Formación:</strong>
                                    {{ selectedInstructor.title }}
                                </p>

                                <p>
                                    <strong>Grado:</strong>
                                    {{ selectedInstructor.dan }}
                                </p>

                                <p>
                                    <strong>Experiencia:</strong>
                                    {{ selectedInstructor.experience }}
                                </p>
                            </div>
                        </div>

                        <p v-else class="location-modal-pending">
                            La información del instructor está pendiente de actualización.
                        </p>
                    </div>

                    <!-- CONTACTO -->
                    <a
                        class="location-modal-contact"
                        :href="whatsappUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CONTACTAR POR WHATSAPP
                        <span>↗</span>
                    </a>
                </div>
            </div>
        </Transition>
    </section>
</template>


