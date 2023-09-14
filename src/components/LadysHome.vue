<template>
    <div class="flex flex-wrap md:justify-center justify-between md:gap-20 gap-10 -translate-y-14 z-50 relative sm:px-10 px-4">
        <article v-for="lady in ladysArr" :id="lady.id" class="m-auto border-2 border-black border-opacity-10">
            <div class="sm:w-[300px] h-[400px] md:w-[250px] m-auto">
                <img :src="lady.src" alt="" class="w-full h-full object-cover" width="100%" height="100%">
            </div>
            <div class="text-center p-4">
                <p class="text-xl">{{ lady.name }}</p>
                <p class="text-lg">{{ lady.ubication }}</p>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ladysArr:[
                    {name: 'Mamasita hot argentina', ubication: 'Córdoba', src: 'src/assets/img/lady.jpg'},
                    {name: 'Mamasita hot argentina', ubication: 'Córdoba', src: 'src/assets/img/lady2.jpg'},
                    {name: 'Mamasita hot argentina', ubication: 'Córdoba', src: 'src/assets/img/lady.jpg'},
                    {name: 'Mamasita hot argentina', ubication: 'Córdoba', src: 'src/assets/img/lady2.jpg'}
                ]
            }
        },
    }
</script>

<style scoped>

</style>