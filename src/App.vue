<template>

  <main>
    <RouterView></RouterView>
  </main>

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

<style></style>
