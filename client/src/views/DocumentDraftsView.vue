<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import DocumentTable from '../components/DocumentTable.vue';

const apiArray = ref([])

onMounted(() => {
    axios.get('/api/getall/document/drafts').then((res) => {
        if (res.data.status === 'success') {
            apiArray.value = res.data.documentDrafts
        }     
    }).catch((err) => {
        console.error(err.response.data)
    })
})


</script>

<template>
<h1>Drafts</h1>
<div class="mt-5">
    <DocumentTable :documentArray="apiArray"/>
</div>
</template>

<style scoped>

</style>