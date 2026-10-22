<script setup lang="ts">
import logo from '../assets/images/logo.png'

const facebookUrl = 'https://www.facebook.com/share/1L1ThAW5n5/?mibextid=wwXIfr'
</script>

<template>
  <footer class="site-footer">
    <div class="wrap footer-main">
      <a class="brand footer-brand" href="#inicio">
        <img class="brand-logo" :src="logo" alt="CAMU Taekwondo" />
        <span>CAMU<small>TAEKWONDO</small></span>
      </a>
      <p>ENTRENA CON PROPÓSITO.<br /><span>AVANZA CON CONFIANZA.</span></p>
      <a href="#inicio" class="back-top">VOLVER ARRIBA ↑</a>
    </div>
    <div class="wrap footer-bottom">
      <span>© CAMU TAEKWONDO</span>
      <span>DISCIPLINA · FUERZA · GLORIA</span>
      <div class="footer-socials" aria-label="Redes sociales">
        <span class="footer-social-pending">IG · [POR DEFINIR]</span>
        <a class="footer-social-link" :href="facebookUrl" target="_blank" rel="noopener noreferrer"
          aria-label="Visitar CAMU Taekwondo en Facebook (se abre en una pestaña nueva)">
          <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
            <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
          </svg>
          <span>FACEBOOK</span>
        </a>
      </div>
    </div>
  </footer>
</template>
