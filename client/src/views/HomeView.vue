<script setup>
import ServiceCard from "../components/ServiceCard.vue"
import {utilStore} from "../stores/utilStore"
import axios from "axios";
import { ref } from "vue";

axios.get('/api/services').then((res) => {
    data.value = res.data.services
}).catch((err) => {
    console.error(err)
})

const data = ref([])

const openModal = () => {
    utilStore().openModal()
}

</script>

<template>

<h1>Home Page</h1>

<button @click="openModal()" class="btn btn-primary mt-1">Add Service</button>

<div class="service-wrapper">
    <div v-for="service in data">
        <ServiceCard :service_id="service.service_id" :title="service.title" :service_icon="service.service_icon"/>
    </div>
</div>

</template>

<style scoped>

</style>
