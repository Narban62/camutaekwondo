<script setup lang="ts">
import { ref } from 'vue'
import { blackBeltProfiles, instructors } from '../data/instructors'

const activeTab = ref<'team' | 'black-belts'>('team')

function handleTabKeydown(event: KeyboardEvent) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    activeTab.value = activeTab.value === 'team' ? 'black-belts' : 'team'
    document.getElementById(`instructors-tab-${activeTab.value}`)?.focus()
}
</script>

<template>
    <section id="instructores" class="instructors section-pad">
        <div class="wrap">
            <div class="section-heading section-heading-row reveal">
                <div>
                    <p class="eyebrow">09 / QUIENES GUÍAN</p>
                    <h2>INSTRUCTORES<span>.</span></h2>
                </div>
                <p class="heading-note">Experiencia y compromiso<br />en cada entrenamiento.</p>
            </div>

            <div class="instructors-tabs" role="tablist" aria-label="Perfiles del club" @keydown="handleTabKeydown">
                <button id="instructors-tab-team" class="instructors-tab" :class="{ 'is-active': activeTab === 'team' }"
                    type="button" role="tab" aria-controls="instructors-panel" :aria-selected="activeTab === 'team'"
                    @click="activeTab = 'team'">
                    INSTRUCTORES
                </button>
                <button id="instructors-tab-black-belts" class="instructors-tab"
                    :class="{ 'is-active': activeTab === 'black-belts' }" type="button" role="tab"
                    aria-controls="instructors-panel" :aria-selected="activeTab === 'black-belts'"
                    @click="activeTab = 'black-belts'">
                    CINTURONES NEGROS
                </button>
            </div>

            <div id="instructors-panel" role="tabpanel"
                :aria-labelledby="activeTab === 'team' ? 'instructors-tab-team' : 'instructors-tab-black-belts'">
                <div v-show="activeTab === 'team'" class="instructor-grid">
                    <article v-for="(coach, index) in instructors" :key="coach.name" class="instructor-card reveal">
                        <div class="instructor-image">
                            <img :src="coach.image" :alt="coach.alt" loading="lazy" decoding="async" />
                            <span>0{{ index + 1 }}</span>
                        </div>
                        <div class="instructor-meta">
                            <div>
                                <p>{{ coach.role }}</p>
                                <h3>{{ coach.name }}</h3>
                            </div>
                            <span class="dan-badge">DAN<br /><b>{{ coach.dan }}</b></span>
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

                <div v-show="activeTab === 'black-belts'" class="black-belt-panel">
                    <div class="black-belt-grid">
                        <article v-for="(profile, index) in blackBeltProfiles" :key="profile.id" class="black-belt-card">
                            <div class="black-belt-image">
                                <img :src="profile.image" :alt="profile.alt" loading="lazy" decoding="async" />
                                <span>0{{ index + 1 }}</span>
                            </div>
                            <div class="black-belt-caption">
                                <div>
                                    <p class="eyebrow">CAMU / DAN</p>
                                    <h3>{{ profile.name }}</h3>
                                </div>
                                <span class="black-belt-rank">{{ profile.dan }} DAN</span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
