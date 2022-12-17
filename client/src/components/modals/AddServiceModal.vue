<script setup>
import { ref } from 'vue';
import {utilStore} from '../../stores/utilStore'
import axios from "axios"
const util = utilStore()

const form = ref({
    title: null,
    homepage: null,
    service_username: null,
    service_password: null,
    
})

const hideModal = () => {
    util.closeModal()
}

const logit = () => {
    axios.post('/add/service', {
        title: form.value.title,
        homepage: form.value.homepage,
        service_username: form.value.service_username,
        service_password: form.value.service_password
    }).catch((err) => {
        console.log(err)
    })
    util.closeModal()
}

</script>

<template>
<div v-if="(util.isOpen === true)" class="modal">
    <div class="modal-title">
        <h2>NEW SERVICE</h2>
        <button type="button" @click="hideModal()" class="btn btn-secondary modal-close-icon"><i class="fa-solid fa-xmark fa-xl"></i></button>
    </div>
    <div class="modal-body">
        <form @submit.prevent="logit()" class="modal-form">

            <label for="title">Title</label>
            <input type="text" name="title" id="title" v-model="form.title">

            <label for="homepage">Service Homepage</label>
            <input type="text" name="homepage" id="homepage" v-model="form.homepage">

            <label for="service_username">Service Username</label>
            <input type="text" name="service_username" id="service_username" v-model="form.service_username">

            <label for="service_password">Service Password</label>
            <input type="password" name="service_password" id="service_password" v-model="form.service_password">

            <button type="submit" class="btn btn-primary mt-1">Add Service</button>
            
        </form>
        
    </div>
</div>
</template>

<style scoped>
/* form * {
    display: block;

} */

.hover:hover {
    cursor: pointer;
}
</style>