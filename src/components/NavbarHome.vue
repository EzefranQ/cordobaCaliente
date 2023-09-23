<template>
    <header class="bg-red">
        <header class="text-center py-3 flex justify-between md:justify-center items-center px-8 md:px-0 ">
            <div class="md:w-28 w-28">
                <img src="../assets/img/logow.webp" alt="">
            </div>
            <button class="hamburguesa md:hidden flex" @click="activeNavFunc()">
                <div></div>
                <div></div>
                <div></div>
            </button>
        </header>
        <nav class="py-4 w-auto border-y-2 duration-300" v-bind:class="[activeNavbar ? 'block' : 'hidden']">
            <ul class="flex flex-col items-center gap-4 justify-center duration-300" v-bind:class="[activeAnim ? 'translate-y-0' : 'translate-y-96']">
               <li v-for="link in navbar" :key="link.id">
                    <a :href="link.link" class="duration-300 border-bottom text-lg opacity-80">
                        {{ link.name }}
                    </a>
               </li>
            </ul>   
        </nav>
        <nav class="text-white border-top w-[90%] m-auto py-4 hidden md:block  duration-300">
            <ul class="flex gap-10 justify-center">
               <li v-for="link in navbar" :key="link.id" >
                    <a :href="link.link" class="duration-300 border-bottom text-lg">
                        {{ link.name }}
                    </a>
               </li>
            </ul>
        </nav>
    </header>
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
.bg-red{
        background: #5f001b;
}
.border-top{
    border-top: 1px solid rgba(255, 255, 255, 0.6);
}
.border-bottom:hover{
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}
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
    background: #000;
    height: 2px;
    width: 100%;
    border-radius: 5px;
    transform-origin: left;
    transition: .5s all;
}
</style>