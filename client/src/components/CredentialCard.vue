<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute()

const props = defineProps({
    cred_id: Number,
    title: String,
    username: String,
    password: String,
    link: String
})


function setClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

const copyPassword = (cred_id) => {
    axios.get(`/api/copyPassword/${props.cred_id}`).then((res) => {
        const pass = res.data.password.password
        setClipboard(pass)
        // navigator.clipboard.writeText(pass)
    }).catch((err) => {
        console.error(err)
    })
}

</script>

<template>

<div class="card">
    <div class="card-title">
        <h3>{{title}}</h3>
    </div>
    <div class="card-body">
        <p v-if="username !== null">Username: {{username}}</p>
        <br>
        <button @click="copyPassword(cred_id)" class="btn btn-secondary">{{password}}</button>
    </div>
    <div class="card-footer">
        <a :href="link" target="_blank">LOGIN</a>
    </div>
</div>

</template>

<style scoped>

strong {
    border: 1px solid red;
    padding: .3em;
    border-radius: .5em;
    font-weight: 400;
    background-color: gray;
    color: whitesmoke;
}

</style>