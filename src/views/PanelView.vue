<template>

    <SideBar></SideBar>
    <div class="p-4 sm:ml-64" :class="{'w-auto': visible}">
        <RouterView></RouterView>
    </div>

</template>

<script>
import SideBar from '../components/SideBar.vue';
export default {
    components: {
        SideBar,
    },
    data() {
    return {

    }
  },
};
</script>

<style scoped>

</style>