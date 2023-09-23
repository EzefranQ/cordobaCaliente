<template>
    <main class="bg-black w-full h-full">
        <header>
            <NavbarServices></NavbarServices>
        </header>
        <section class="w-10/12 m-auto">
            <header class="text-white py-16 xl:text-start text-center">
                <h1 class="text-4xl">¡Elige sin <span class="text-[#b70d4b]">compromiso</span>!</h1>
                <p class="text-lg mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quae dicta totam repellat eaque minima debitis, consequatur placeat hic excepturi doloribus animi ad molestiae, alias, repudiandae fuga rem cum dolores.</p>
            </header>

            <section>
                <Transition name="slide-fade">
                    <RouterView></RouterView>
                </Transition>
            </section>

        </section>
    </main>
    <footer>
        <FooterView></FooterView>
    </footer>
</template>

<script>
    import NavbarServices from '../components/NavbarServices.vue';
    import FooterView from '../components/FooterView.vue';
    import Condiciones from '../components/Condiciones.vue';
    export default {
        components:{
            NavbarServices,
            FooterView,
            Condiciones
        },
    }
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>