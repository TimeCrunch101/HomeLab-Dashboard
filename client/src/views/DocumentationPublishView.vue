<script setup>
import PbuDocTable from '../components/PubDocTable.vue'
import {useRouter} from 'vue-router'
import axios from 'axios';
import { onMounted, ref } from 'vue';

const router = useRouter()

const newDocument = () => {
    router.push('/create/document')
}

const goToDraftsView = () => {
    router.push('/documents/drafts')
}

const draftsCount = ref()

const publishedDocs = ref([])

onMounted(() => {
    axios.get("/api/get/published/documents").then((res) => {
        publishedDocs.value = res.data.docs
    }).catch((err) => {
        console.error(err.response.data)
    })
    axios.get("/api/get/document/draft-ids").then((res) => {
        if (res.data.status === 'success') {
            draftsCount.value = res.data.documentDrafts.length
        } else {
            if (res.data.status === 'failed') {
                console.error(res.data.message)
            }
        }
    }).catch((err) => {
        console.error(err.response.data)
    })
})

</script>

<template>
<h1>Documentation</h1>

<div class="button-div mt-1">
    <button @click="newDocument" class="btn btn-secondary ">
        <i class="fa-solid fa-file-circle-plus fa-2x"></i>
    </button>
    <button @click="goToDraftsView" id="draftsbtn" class="btn btn-secondary">
        Drafts
        ({{draftsCount}})
        <i class="fa-regular fa-folder-open fa-2x"></i>
    </button>
</div>

<div class="container mt-5">
    <PbuDocTable :documentArray="publishedDocs"/>
</div>

</template>

<style scoped>

#draftsbtn {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: .5em;
}


</style>