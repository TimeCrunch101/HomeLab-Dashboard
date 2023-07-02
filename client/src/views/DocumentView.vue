<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted, ref } from 'vue'
const route = useRoute()

const documentDraft = ref({})

axios.get(`/api/get/draft/${route.params.draft_id}`).then((res) => {
    documentDraft.value = res.data.draft
    document.getElementById('doc-body').innerHTML = documentDraft.value.draft_html
}).catch((err) => {
    console.error(err.response.data)
})
onMounted(() => {
})

</script>

<template>

<h1>{{documentDraft.draft_title}}</h1>
<p>Related Service: {{documentDraft.related_service}}</p>
<p>Created: {{documentDraft.timestamp}}</p>


<div class="contain">
    <section id="doc-body" class="mt-2">
        
    </section>
</div>


</template>

<style scoped>

</style>