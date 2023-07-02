<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted, ref } from 'vue'
const route = useRoute()

const documentDraft = ref({})

onMounted(() => {
    axios.get(`/api/get/published/doc/${route.params.doc_id}`).then((res) => {
        documentDraft.value = res.data.docs
        document.getElementById('doc-body').innerHTML = documentDraft.value.doc_html
    }).catch((err) => {
        console.error(err.response.data)
    })
})

</script>

<template>

<h1>{{documentDraft.doc_title}}</h1>
<p>Related Service: {{documentDraft.related_service}}</p>
<p>Created: {{documentDraft.timestamp}}</p>



<div class="contain">
    <section id="doc-body" class="mt-2">
        
    </section>
</div>


</template>

<style scoped>

</style>