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

    </main>
</template>

<script>
    import NavbarHome from '../components/NavbarHome.vue';
    import LadysHome from '../components/LadysHome.vue';
    export default {
        components:{
            NavbarHome,
            LadysHome
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
    background: rgba(0, 0, 0, 0.6);
}
</style>