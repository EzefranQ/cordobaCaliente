<template>
    <header>
        <NavbarServices></NavbarServices>
    </header>
    <div class="bg-[#440218] text-[#eebd22]">
        <main class="py-6 w-10/12 m-auto">
            <header class="flex justify-between items-center md:items-start md:flex-row flex-col gap-8">
                <div class="flex flex-col text-center md:text-left">
                    <h1 class="text-xl md:text-2xl uppercase tracking-wider text-white">Ingrid Betancourd</h1>
                    <p class="text-lg md:text-xl">Escort en Cordoba, Calle 23</p>
                </div>
                <div class="flex flex-col text-center md:text-right">
                    <a href="#" class="text-xl md:text-2xl uppercase tracking-wider text-white">
                        642340353431
                    </a>
                    <a href="#" class="text-lg md:text-xl">
                        Betancourd_ingrid@hotmail
                    </a>
                </div>
            </header>
        </main>
        <div>
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <article class="bg-[#4f1f2f] h-[380px] flex justify-center items-center overflow-hidden gap-4">
                <div class="w-[280px] h-[350px]">
                    <img src="../assets/img/lady.jpg" alt="" class="w-full h-full object-cover">
                </div>
                <div class="w-[280px] h-[350px]">
                    <img src="../assets/img/lady2.jpg" alt="" class="w-full h-full object-cover">
                </div>
                <div class="w-[280px] h-[350px]">
                    <img src="../assets/img/bg-footer.jpg" alt="" class="w-full h-full object-cover">
                </div>
                <div class="w-[280px] h-[350px]">
                    <img src="../assets/img/hero-banner.jpg" alt="" class="w-full h-full object-cover">
                </div>            
            </article>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
        <section class="py-6 w-10/12 m-auto flex flex-col xl:flex-row gap-8 text-center md:text-left">
            <article class="bg-[#111] px-6 py-8 xl:w-[70%] w-full">
                <header>
                    <h1 class="text-2xl uppercase tracking-wider text-[#f26d7d]">Sobre mi</h1>
                </header>
                <section class="mt-6">
                    <p class="text-white leading-7 md:leading-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod voluptas accusantium id facilis omnis. Cupiditate labore dolore error illo animi atque voluptas natus quibusdam voluptate, accusamus sequi consectetur doloribus ullam molestias provident blanditiis cum? Alias quisquam impedit, at velit, porro facilis quo, sed architecto consequatur quidem autem repudiandae? Unde, libero.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quisquam laudantium, ducimus hic eaque dolore ullam laborum maiores impedit corporis! Rerum recusandae dignissimos alias exercitationem voluptates deserunt rem commodi consequuntur magni nisi officia fuga aut ab doloribus sunt, dolorem reiciendis sint in eaque maiores quod quisquam enim consectetur voluptatum! Velit quidem perspiciatis dignissimos, nulla, officiis veniam dolores expedita porro harum vitae numquam, voluptatibus perferendis quibusdam quae consequuntur totam! Iste nostrum reiciendis consequuntur expedita temporibus sint harum necessitatibus, beatae officiis totam.
                    </p>
                </section>
            </article>
            <aside class="flex flex-col gap-6 xl:w-[30%] w-full text-left">
                <div class="bg-[#111] px-6 py-8">
                    <h1 class="text-2xl uppercase tracking-wider text-[#f26d7d]">Mis Detalles</h1>
                    <ul class="mt-6 flex xl:flex-col flex-row xl:gap-4 gap-14 flex-wrap">
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Gender:</b> Female
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Age:</b> Over 35
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Ethnicity:</b> Caucasian
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Hair Color:</b> Blonde
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Eye Color:</b> Blue
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Height:</b> 5'8"
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Weight:</b> 115 Lb
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Measurements:</b> 36dd - 23" - 34"
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Affiliation:</b> Independent
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Available To:</b> Couples, Groups, Men, Trans, Women
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Availability:</b> Incall / Outcall
                        </li>
                        <li class="text-white text-[15px] font-light">
                            <b class="text-[rgba(200,200,200,0.7)]">Languages Spoken:</b> English
                        </li>
                    </ul>
                </div>
                <article class="bg-[#111] px-6 py-8">
                    <h1 class="mb-4 text-xl uppercase tracking-wider text-[#f26d7d]">Información de contacto</h1>
                   <div class="flex gap-4">
                        <a href="#" class="text-base uppercase tracking-wider text-white">
                            <div class="w-[40px]">
                                <img src="../assets/img/whatsapp.png" alt="">
                            </div>
                        </a>
                        <a href="#" class="text-base text-white">
                            <div class="w-[40px]">
                                <img src="../assets/img/email.png" alt="">
                            </div>
                        </a>
                   </div>
                </article>
            </aside>
        </section>
    </div>
    <footer>
        <FooterView></FooterView>
    </footer>
</template>

<script>
    import NavbarServices from '../components/NavbarServices.vue';
    import FooterView from '../components/FooterView.vue';
    export default {
        components:{
            NavbarServices,
            FooterView
        },
    }
</script>

<style>

</style>