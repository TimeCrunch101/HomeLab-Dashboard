<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AddServiceModal from "./components/modals/AddServiceModal.vue"
import AddHardware from "./components/modals/AddHardware.vue"
import AddCredModal from "./components/modals/AddCredModal.vue"

</script>

<template>
<NavBar/>  
<div class="view">
  <RouterView />
</div>
<AddServiceModal/>
<AddHardware/>
<AddCredModal/>



</template>

<style scoped>

</style>
