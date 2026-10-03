```vue
<script setup lang="ts">

const whatsappNumber = '593992548774'

const whatsappMessage = encodeURIComponent(
    'Hola, quisiera información sobre las clases de Taekwondo UCE. Vi las sedes y horarios en la página y quisiera saber cómo puedo asistir a una primera clase.'
)

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

</script>

<template>
    <section id="contacto" class="contact section-pad">

        <div class="wrap contact-layout">

            <!-- CONTENIDO PRINCIPAL -->
            <div class="contact-copy reveal">

                <p class="eyebrow">07 / TU PRIMER PASO</p>

                <h2>
                    EMPIEZA<br />
                    <em>HOY.</em>
                </h2>

                <p class="contact-intro">
                    Tu primera clase puede cambiar la forma en que te mueves.
                    Escríbenos y conoce cómo empezar tu camino en Taekwondo.
                </p>

                <a
                    class="contact-demo"
                    :href="whatsappUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CONSULTAR POR WHATSAPP
                    <span>↗</span>
                </a>

            </div>


            <!-- INFORMACIÓN DE CONTACTO -->
            <div class="contact-info reveal">

                <div class="contact-info-header">
                    <p class="form-kicker">
                        HABLEMOS
                    </p>

                    <p class="contact-info-description">
                        ¿Tienes alguna pregunta sobre las clases,
                        los grupos o el proceso de inscripción?
                        Estamos para ayudarte.
                    </p>
                </div>


                <div class="contact-details">

                    <div class="contact-detail">
                        <span>WHATSAPP</span>
                        <p>Escríbenos directamente</p>
                    </div>

                    <div class="contact-detail">
                        <span>EMAIL</span>
                        <p>[POR DEFINIR]</p>
                    </div>

                    <div class="contact-detail">
                        <span>UBICACIÓN</span>
                        <p>Universidad Central del Ecuador</p>
                    </div>

                </div>


                <div class="contact-message">
                    <span>+</span>
                    <p>
                        Da el primer paso. Entrena, aprende y forma parte
                        del Club de Taekwondo UCE.
                    </p>
                </div>

            </div>

        </div>

    </section>
</template>
```
