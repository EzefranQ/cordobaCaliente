<template>

  <div class="bg-black">

    <main class="">
      <Transition name="slide-fade">
        <RouterView></RouterView>
      </Transition>
    </main>
    
  </div>

</template>

<script>
import Home from '../src/components/Home.vue'

export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      visible: false
    }
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
