<template>
    <div class="flex flex-wrap md:justify-center justify-between md:gap-20 gap-10 -translate-y-14 z-50 relative sm:px-10 px-4">
        <article class="m-auto border-red-color sm:w-[250px] h-[450px] md:w-[250px]">
            <div class="sm:w-full h-[350px] md:w-full w-[250px]">
                <img src="../assets/img/lady.jpg" alt="" class="w-full h-full object-cover" width="100%" height="100%">
            </div>
            <div class="text-center py-4 px-2.5 text-black">
                <p class="text-xl">Mamasita hot argentina</p>
                <p class="text-lg">Córdoba</p>
            </div>
        </article>
        <article class="m-auto border-red-color sm:w-[250px] h-[450px] md:w-[250px]">
            <div class="sm:w-full h-[350px] md:w-full w-[250px]">
                <img src="../assets/img/lady2.jpg" alt="" class="w-full h-full object-cover" width="100%" height="100%">
            </div>
            <div class="text-center py-4 px-2.5 text-black">
                <p class="text-xl">Mamasita hot argentina</p>
                <p class="text-lg">Córdoba</p>
            </div>
        </article>
        <article class="m-auto border-red-color sm:w-[250px] h-[450px] md:w-[250px]">
            <div class="sm:w-full h-[350px] md:w-full w-[250px]">
                <img src="../assets/img/lady.jpg" alt="" class="w-full h-full object-cover" width="100%" height="100%">
            </div>
            <div class="text-center py-4 px-2.5 text-black">
                <p class="text-xl">Mamasita hot argentina</p>
                <p class="text-lg">Córdoba</p>
            </div>
        </article>
        <article class="m-auto border-red-color sm:w-[250px] h-[450px] md:w-[250px]">
            <div class="sm:w-full h-[350px] md:w-full w-[250px]">
                <img src="../assets/img/lady2.jpg" alt="" class="w-full h-full object-cover" width="100%" height="100%">
            </div>
            <div class="text-center py-4 px-2.5 text-black">
                <p class="text-xl">Mamasita hot argentina</p>
                <p class="text-lg">Córdoba</p>
            </div>
        </article>
    </div>
    <img src="" alt="">
</template>

<script>
    export default {
        data() {
            return {
                ladysArr:[
                    {name: 'Mamasita hot argentina', ubication: 'Córdoba', src: 'public/lady2.jpg'},
                    {name: 'Mamasita hot argentina', ubication: 'Córdoba', src: 'public/lady.jpg'},
                    {name: 'Mamasita hot argentina', ubication: 'Córdoba', src: 'public/lady2.jpg'},
                    {name: 'Mamasita hot argentina', ubication: 'Córdoba', src: 'public/lady.jpg'}
                ]
            }
        },
    }
</script>

<style scoped>
.border-red-color{
    border: 2px solid #7e1629;
    background: #fff;
}

</style>