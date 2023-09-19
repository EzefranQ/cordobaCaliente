<template>
    <nav class="bg-black">
        <ul class="border-[#64470b] border-b-2 text-white md:px-6 md:py-4 py-6 md:flex flex- justify-center gap-10 ">

            <div class="flex justify-around">
                <h1 class="text-[#eebd22] text-xl uppercase border-2 border-transparent font-bold tracking-widest">Córdoba Caliente</h1>
                <button class="hamburguesa md:hidden flex" @click="activeNavFunc()">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
           <ul class="flex md:flex md:flex-row flex-col gap-4 md:gap-10 items-center md:mt-0 mt-6" v-bind:class="[activeAnim ? 'flex' : 'hidden']">
                <li class="text-base border-2 border-[#eebd22] text-[#eebd22] flex items-center justify-center px-2 uppercase hover:bg-[#eebd22] hover:text-black duration-300">
                    <a href="#">Escorts</a>
                </li>
                <li class="hover:text-[#eebd22] duration-300 text-lg border-2 border-transparent">
                    <a href="#">Mujeres</a>
                </li>
                <li class="hover:text-[#eebd22] duration-300 text-lg border-2 border-transparent">
                    <a href="#">Maduras</a>
                </li>
                <li class="hover:text-[#eebd22] duration-300 text-lg border-2 border-transparent">
                    <a href="#">Masaje</a>
                </li>
                <li class="hover:text-[#eebd22] duration-300 text-lg border-2 border-transparent">
                    <a href="#">Hombres</a>
                </li>
                <li class="hover:text-[#eebd22] duration-300 text-lg border-2 border-transparent">
                    <a href="#">Trans</a>
                </li>
           </ul>
        </ul>
    </nav>
</template>

<script>
    export default {
      data() {
        return {
            navbar: [
                { link: '#', name: 'Home'},
                { link: '#', name: 'Mujeres'},
                { link: '#', name: 'Maduras'},
                { link: '#', name: 'Hombres'},
                { link: '#', name: 'Trans'}
            ],
            activeNavbar: false,
            activeAnim: false,
        }
      },  
      methods:{
        activeNavFunc(){
            this.activeNavbar = !this.activeNavbar;

            setTimeout(() => {
                this.activeAnim = !this.activeAnim;
            }, 200)
        }
      }
    }
</script>

<style scoped>
.hamburguesa{
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    width: 1.8rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
}
.hamburguesa > div{
    background: #fff;
    height: 2px;
    width: 100%;
    border-radius: 5px;
    transform-origin: left;
    transition: .5s all;
}
</style>