<template>
    <footer class="w-full  bg-black z-10 text-white">
        <div class="bg-footer z-50 w-full h-full py-8 px-6">
            <section class="flex flex-col">
                <article class="flex flex-col md:flex-row gap-6 justify-around items-center md:items-start">
                    <article class="flex flex-col gap-4 justify-center md:items-start md:text-start items-center text-center">
                    <header>
                        <p class="text-3xl">Cordoba Caliente</p>
                    </header>
                    <div>
                        <p class="w-full md:w-5/6">Disfruta tu momento único el mejor Relax. Las Modelos Cordobesas más lindas están aquí.</p>
                    </div>
                    <div>
                        <img src="../assets/img/logow.webp" alt="" class="w-28">
                    </div>
                    </article>
                    <div>
                        <header>
                            <p class="text-3xl">Escorts</p>
                        </header>
                        <div class="flex flex-col gap-2 md:pl-4 pl-0 md:text-start text-center">
                            <a href="#">Mujeres</a>
                            <a href="#">Hombres</a>
                            <a href="#">Maduras</a>
                            <a href="#">Trans</a>
                        </div>
                    </div>
                    <div>
                        <header>
                            <p class="text-3xl">Contacto</p>
                        </header>
                        <div class="flex flex-col gap-2 md:pl-4 pl-0 md:text-start text-center">
                            <a href="#">Instagram</a>
                            <a href="#">WhatsApp</a>
                            <a href="#">Facebook</a>
                        </div>
                    </div>
                </article>
                <article class="m-auto flex gap-2 py-4 mt-8 flex-wrap justify-center text-center">
                    <p>@ 2023 Derechos de autor reservado |</p>
                    <p> +00 000000 |  </p>
                    <p>Cordoba Argentina</p>
                </article>
            </section>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.bg-footer{
    background: url('../assets/img/bg-footer.jpg');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: right;
}
@media screen and (max-width: 500px) {
    .bg-footer{
        background: url('../assets/img/bg-footer.jpg');
        background-position: 50%;
    }
}
</style>