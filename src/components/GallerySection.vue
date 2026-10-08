<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { galleryImages } from '../data/gallery'

const batchSize = 16
const visibleCount = ref(batchSize)
const activeIndex = ref<number | null>(null)
const dialogRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
const openerRef = ref<HTMLButtonElement | null>(null)
const activeImage = computed(() => activeIndex.value === null ? null : galleryImages[activeIndex.value])
const visibleImages = computed(() => galleryImages.slice(0, visibleCount.value))
let touchStartX = 0
let touchStartY = 0

function openLightbox(index: number, event: MouseEvent) {
  openerRef.value = event.currentTarget as HTMLButtonElement
  activeIndex.value = index
  nextTick(() => closeButtonRef.value?.focus())
}

function closeLightbox() {
  if (activeIndex.value === null) return
  activeIndex.value = null
  nextTick(() => openerRef.value?.focus())
}

function moveLightbox(direction: number) {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + direction + galleryImages.length) % galleryImages.length
}

function handleDialogKeydown(event: KeyboardEvent) {
  if (activeIndex.value === null) return

  if (event.key === 'Escape') {
    event.preventDefault()
    closeLightbox()
    return
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    moveLightbox(-1)
    return
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    moveLightbox(1)
    return
  }
  if (event.key !== 'Tab' || !dialogRef.value) return

  const controls = Array.from(dialogRef.value.querySelectorAll<HTMLButtonElement>('button:not([disabled])'))
  const first = controls[0]
  const last = controls[controls.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last?.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first?.focus()
  }
}

function loadMore() {
  visibleCount.value = Math.min(visibleCount.value + batchSize, galleryImages.length)
}

function startTouch(event: TouchEvent) {
  touchStartX = event.changedTouches[0]?.clientX ?? 0
  touchStartY = event.changedTouches[0]?.clientY ?? 0
}

function endTouch(event: TouchEvent) {
  const endX = event.changedTouches[0]?.clientX ?? touchStartX
  const endY = event.changedTouches[0]?.clientY ?? touchStartY
  const deltaX = endX - touchStartX
  const deltaY = endY - touchStartY
  if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return
  moveLightbox(deltaX < 0 ? 1 : -1)
}
</script>

<template>
  <section id="galeria" class="gallery section-pad" aria-labelledby="gallery-title">
    <div class="wrap">
      <div class="section-heading section-heading-row reveal">
        <div>
          <p class="eyebrow">04 / ARCHIVO CAMU</p>
          <h2 id="gallery-title">RECUERDOS<span>.</span></h2>
        </div>
        <p class="heading-note">Momentos guardados en el camino.<br />Un recuerdo a la vez.</p>
      </div>

      <div class="gallery-grid">
        <button
          v-for="(photo, index) in visibleImages"
          :key="photo.file"
          class="gallery-item"
          type="button"
          :aria-label="`Abrir ${photo.label.toLowerCase()}: ${photo.alt}`"
          aria-haspopup="dialog"
          @click="openLightbox(index, $event)"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            :loading="index < 2 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'auto'"
            decoding="async"
          />
          <span class="gallery-caption">
            <small>{{ photo.label }}</small>
            <span class="gallery-open-indicator" aria-hidden="true">↗</span>
          </span>
        </button>
      </div>

      <div class="gallery-footer">
        <p aria-live="polite">{{ visibleImages.length }} / {{ galleryImages.length }} FOTOGRAFÍAS</p>
        <button v-if="visibleCount < galleryImages.length" class="gallery-more" type="button" @click="loadMore">
          VER MÁS RECUERDOS <span aria-hidden="true">↓</span>
        </button>
      </div>
    </div>

    <Transition name="lightbox">
      <div
        v-if="activeImage"
        ref="dialogRef"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`Visor de fotografías: ${activeImage.label}`"
        tabindex="-1"
        @keydown="handleDialogKeydown"
        @click.self="closeLightbox"
      >
        <button ref="closeButtonRef" class="lightbox-close" type="button" aria-label="Cerrar visor" @click="closeLightbox">
          <span aria-hidden="true">×</span>
        </button>
        <button class="lightbox-control lightbox-control-prev" type="button" aria-label="Fotografía anterior" @click="moveLightbox(-1)">
          <span aria-hidden="true">←</span>
        </button>
        <figure class="lightbox-figure" @touchstart.passive="startTouch" @touchend.passive="endTouch">
          <img :src="activeImage.src" :alt="activeImage.alt" decoding="async" />
          <figcaption id="lightbox-caption">
            <span>{{ activeImage.alt }}</span>
            <small>{{ activeImage.label }} · {{ String((activeIndex ?? 0) + 1).padStart(2, '0') }} / {{ galleryImages.length }}</small>
          </figcaption>
        </figure>
        <button class="lightbox-control lightbox-control-next" type="button" aria-label="Fotografía siguiente" @click="moveLightbox(1)">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </Transition>
  </section>
</template>
