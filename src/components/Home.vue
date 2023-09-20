<template>
    <main>
        <header>
            <NavbarHome></NavbarHome>
        </header>

        <section class="bg-hero w-full h-[80vh] bg-cover bg-no-repeat">
           <div class="z-30 relative text-white grid place-content-center text-center h-full sm:w-[80%] w-[90%] m-auto">
                <article class=" -mt-[80px]">
                    <h2 class=" duration-300 text-sm sm:text-base">INGRESA A LA WEB SI SOS MAYOR DE 18 AÑOS, SI SOS MENOS NO ENTRES</h2>
                    <p class=" duration-300 sm:text-4xl sm:mt-0 mt-4 text-3xl">Córdoba Caliente es una agencia de alto standing con un abanico de Escorts disponibles</p>
                </article>
                <div class="flex sm:gap-8 justify-center mt-8 sm:flex-row flex-col items-center gap-3">
                    <a href="#" class="btn-red-color py-2.5 px-6 duration-300">
                        Acepto las condiciones
                    </a>    
                    <a href="#" class="btn-red-color py-2.5 px-6 duration-300">
                        Ingresar Escort guía
                    </a>    
                </div>
           </div>
        </section>

        <section class="">
            <LadysHome></LadysHome>
        </section>

        <section class="md:px-20 sm:px-10 px-4 py-16">
            <header class="text-center">
                <h1 class="text-2xl md:text-4xl">Córdoba Caliente</h1>
                <p class="mt-2 text-base md:text-lg">Portal Online, sobre Acompañantes Escorts organizados</p>
            </header>

            <article class="mt-14 text-center grid md:grid-cols-2 grid-cols-1 gap-6">
                <div class="">
                    <img src="../assets/img/hero-banner.jpg" alt="" class="w-full h-full object-cover">
                </div>
                <div class="">
                    <p>
                        En el Sitio las publicaciones anunciadas son todas mayores de edad, libres con autodeterminación y su propia elección, ademas tienen exclusiva responsabilidad acorde a las leyes del país ejercen su actividad.
                        Este portal esta en contra de cualquier forma de Trata de Personas. El sitio se limita a publicar Anuncios que entre sus opciones, ofrecen entretenimiento, amistad o posibles relaciones casuales, Sierras Calientes no promoverá, facilitara ni fomentara explotación sexual de sus anunciantes.
                    </p>
                </div>
            </article>

        </section>

        <section class="md:px-20 sm:px-10 px-4 py-16">
            <div class="">
                <header class="text-center">
                    <h1 class="text-2xl md:text-4xl">DISFRUTA APROVECHANDO ESTOS BENEFICIOS</h1>
                    <p class="mt-2 text-base md:text-lg">Se aporta la plataforma destacados Anuncios Online Escort Putas Cordoba</p>
                </header>
                <section class="grid md:grid-cols-2 grid-cols-1 place-content-center place-items-start gap-x-16 gap-y-8 mt-10 text-center py-6">
                    <article class="md:w-10/12 w-full border-t-2 py-2 mt-0 m-auto">
                        <h1 class="text-lg font-semibold">
                            <span class="text-2xl">
                                1.
                            </span>
                            Experiencia privacidad
                        </h1>
                        <p class="pt-2 text-base">Ofrecemos una plataforma exclusiva que te brinda estos beneficios.</p>
                    </article>
                    <article class="md:w-10/12 w-full border-t-2 py-2 mt-0 m-auto ">
                        <h1 class="text-lg font-semibold">
                            <span class="text-2xl">
                                2.
                            </span>
                            Variados Anuncios
                        </h1>
                        <p class="pt-2 text-base">Acompañantes para todos los gustos, imposible aburrirte!</p>
                    </article>
                    <article class="md:w-10/12 w-full border-t-2 py-2 mt-0 m-auto ">
                        <h1 class="text-lg font-semibold">
                            <span class="text-2xl">
                                3.
                            </span>
                            Buscador
                        </h1>
                        <p class="pt-2 text-base">Escort facilitará tu búsqueda personal.</p>
                    </article>
                    <article class="md:w-10/12 w-full border-t-2 py-2 mt-0 m-auto ">
                        <h1 class="text-lg font-semibold">
                            <span class="text-2xl">
                                4.
                            </span>
                            Contacto Directo 
                        </h1>
                        <p class="pt-2 text-base">Sin intermediarios llama directamente por los anunciantes.</p>
                    </article>
                    <article class="md:w-10/12 w-full border-t-2 py-2 mt-0 m-auto ">
                        <h1 class="text-lg font-semibold">
                            <span class="text-2xl">
                                5.
                            </span>
                            Comentarios
                        </h1>
                        <p class="pt-2 text-base">Podes dejar tus experiencias, destacando lo positivo sobre lo negativo con tu experiencia Escort.</p>
                    </article>
                    <article class="md:w-10/12 w-full border-t-2 py-2 mt-0 m-auto ">
                        <h1 class="text-lg font-semibold">
                            <span class="text-2xl">
                                6.
                            </span>
                            Solos / Solas
                        </h1>
                        <p class="pt-2 text-base">Ahora podes disfrutar. Dale una oportunidad, disfruta la soledad!.</p>
                    </article>
                </section>
            </div>
        </section>

    </main>

    <footer>
        <FooterView></FooterView>
    </footer>

</template>

<script>
    import NavbarHome from '../components/NavbarHome.vue';
    import LadysHome from '../components/LadysHome.vue';
    import FooterView from '../components/FooterView.vue';
    export default {
        components:{
            NavbarHome,
            LadysHome,
            FooterView
        },

    }
</script>

<style scoped>
.bg-hero{
    background-image: url('../assets/img/hero-banner.jpg');
    position: relative;
    z-index: 1;
}
.bg-hero::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    z-index: 9;
    background: rgba(95, 0, 27, 0.3);
}
section > article{
    border-color: #7e1629;
}
</style>