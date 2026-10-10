<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PrinciplesSection from './components/PrinciplesSection.vue'
import AboutCamuSection from './components/AboutCamuSection.vue'
import LocationsSection from './components/LocationsSection.vue'
import GallerySection from './components/GallerySection.vue'
import TrainingSection from './components/TrainingSection.vue'
import InstructorsSection from './components/InstructorsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import { useReveal } from './composables/useReveal'
import BJJ from './components/BJJ.vue'
useReveal()
function smoothScroll(event: Event) {
  const link = (event.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
  if (!link) return
  const target = document.querySelector(link.getAttribute('href')!)
  if (target) {
    event.preventDefault()
    target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }
}
onMounted(() => document.addEventListener('click', smoothScroll))
onUnmounted(() => document.removeEventListener('click', smoothScroll))
</script>
<template>
  <AppHeader />
  <main>
    <HeroSection />
    <AboutCamuSection />
    <PrinciplesSection />
    <BJJ />
    <LocationsSection />
    <GallerySection />
    <TrainingSection />
    <InstructorsSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
