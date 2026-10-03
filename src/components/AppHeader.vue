<script setup
    lang="ts">    
    import { ref } from 'vue'; 
    import logo from '../assets/images/logo.png';
    const open = ref(false); 
    const links = [{ label: '¿Qué es CAMU?', href: '#about' }, 
                    { label: 'Sedes', href: '#sedes' }, 
                    { label: 'Galería', href: '#galeria' }, 
                    { label: 'Instructores', href: '#instructores' }, 
                    { label: 'Contacto', href: '#contacto' }]; 
    function closeMenu() { open.value = false }</script>
<template>
     <header class="site-header">
        <a class="brand" href="#inicio" aria-label="CAMU, inicio">
            <img class="brand-logo" :src="logo" alt="CAMU Taekwondo">
            <span>CAMU<small>TAEKWONDO</small></span>
            </a><button class="menu-toggle" type="button" :aria-expanded="open" :aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
            @click="open = !open"><span></span><span></span></button>
        <nav :class="['main-nav', { 'is-open': open }]" aria-label="Navegación principal"><a v-for="link in links"
                :key="link.href" :href="link.href" @click="closeMenu">{{ link.label }}</a><a class="button button-small"
                href="#contacto" @click="closeMenu">CLASE DEMO <span>↗</span></a></nav>
    </header>
</template>
