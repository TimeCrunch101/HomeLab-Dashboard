<script setup>
import router from '../router';


const props = defineProps({
    title: String,
    service_id: Number,
    service_icon: String
})

const openServicePage = (service_id) => {
    router.push(`/view/service/${service_id}`)
}

const url = "/services/"

</script>

<template>

<div @click="openServicePage(service_id)" class="service-card">
    <div class="service-img">
        <img v-if="service_icon !== null" :src="url + service_icon" alt="">
        <img v-else src="/services/placeholder.png" alt="">
    </div>
    <div class="service-name">
        <p>{{title}}</p>
    </div>
</div>

</template>

