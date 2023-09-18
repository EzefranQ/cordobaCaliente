<template>
            <div class="">
            <main class="flex justify-center z-20">

                <section class="w-[100%] z-50 relative text-white h-[100%] flex flex-col items-center gap-20 py-10 m-5 rounded-lg">

                    <section class="text-center flex flex-col gap-20 w-[85%]">

                        <section class="">
                            <header class="mb-20">
                                <h1 class="text-3xl border-b w-64 m-auto pb-4">Cargar Datos</h1>
                            </header>
                            <article  class="grid grid-cols-12 gap-6">
                                <div class="col-span-12 sm:col-span-6 text-start">
                                    <label for="DNI" class="block mb-2 text-sm font-medium">Nombre</label>
                                    <input type="text" id="Nombre" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                </div>
                                <div class="col-span-12 sm:col-span-6 text-start">
                                    <label for="DNI" class="block mb-2 text-sm font-medium">Apellido</label>
                                    <input type="text" id="Nombre" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                </div>
                                <div class="col-span-12 sm:col-span-3 text-start">
                                    <label for="DNI" class="block mb-2 text-sm font-medium">DNI</label>
                                    <input type="text" id="DNI" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                </div>
                                <div class="col-span-12 sm:col-span-4 text-start">
                                    <label for="DNI" class="block mb-2 text-sm font-medium">Celular</label>
                                    <input type="text" id="Celular" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                </div>
                                <div class="col-span-12 sm:col-span-10 text-start">
                                    <label for="DNI" class="block mb-2 text-sm font-medium">Dirección</label>
                                    <input type="text" id="Nombre" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                </div>
                            </article>
                        </section>

                        <section class="m-auto">
                            <header class="mb-10">
                                <div>
                                    <header class="mb-8">
                                        <h1 class="text-3xl border-b w-64 m-auto pb-4">Cargar Imágenes</h1>
                                    </header>
                                    <br>
                                    <label for="file" class="text-center py-2 px-6 rounded-lg bg-white text-black cursor-pointer">Seleccione una imagen</label>
                                    <input hidden id="file" type="file" placeholder="" />
                                </div>
                            </header>
                            <div class="flex flex-wrap gap-4 justify-center">
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="w-40 h-40">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                        </div>
                        </section>

                    </section>
                    
                </section>

            </main>
        </div>
</template>

<script>
export default {

};
</script>

<style scoped>
input[type="file"]::-webkit-file-upload-button {
    font-size: 0;
    line-height: 0;
    padding: 0;
    background: none;
    border: none;
    color: transparent;
    outline: none;
    }
.bg-hero{
    background-image: url('../assets/img/hero-banner.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}
.bg-hero::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.6);
}
.bg-hero > section{
    border: 1px solid rgba(255, 255, 255, 0.6)
}
</style>