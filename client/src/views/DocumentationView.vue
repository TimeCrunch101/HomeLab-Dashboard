<script setup>
import DocumentTable from '../components/DocumentTable.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const newDocument = () => {
    router.push('/create/document')
}

</script>

<template>
<h1>Documentation</h1>


<div class="button-div mt-1">
    <button @click="newDocument" class="btn btn-secondary ">
        <i class="fa-solid fa-file-circle-plus fa-2x"></i>
    </button>
    <button id="draftsbtn" class="btn btn-secondary">
        Drafts
        (2)
        <i class="fa-regular fa-folder-open fa-2x"></i>
    </button>
</div>


<div class="container mt-5">
    <DocumentTable/>
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