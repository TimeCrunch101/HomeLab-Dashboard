<script setup>
import { ref } from 'vue';
import {utilStore} from '../../stores/utilStore'
import { useRoute } from "vue-router"
import axios from "axios"

const util = utilStore()

const route = useRoute()

const form = ref({
    title: null,
    username: null,
    password: null,
    link: null,
    
})

const hideModal = () => {
    util.closeCredModal()
}

const logit = () => {
    axios.post('/api/create/credential', {
        title: form.value.title,
        username: form.value.username,
        password: form.value.password,
        link: form.value.link,
        related_service: route.params.service_id
    }).catch((err) => {
        console.log(err)
    })
    util.closeCredModal()
}

</script>

<template>
<div v-if="(util.isCredModalOpen === true)" class="modal">
    <div class="modal-title">
        <h2>NEW CREDENTIAL</h2>
        <button type="button" @click="hideModal()" class="btn btn-secondary modal-close-icon"><i class="fa-solid fa-xmark fa-xl"></i></button>
    </div>
    <div class="modal-body">
        <form @submit.prevent="logit()" class="modal-form">

            <label for="title">Title</label>
            <input type="text" name="title" id="title" v-model="form.title">

            <label for="username">username</label>
            <input type="text" name="username" id="username" v-model="form.username">

            <label for="password">password</label>
            <input type="password" name="password" id="password" v-model="form.password">

            <label for="link">link</label>
            <input type="text" name="link" id="link" v-model="form.link">

            <button type="submit" class="btn btn-primary mt-1">Save</button>
            
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