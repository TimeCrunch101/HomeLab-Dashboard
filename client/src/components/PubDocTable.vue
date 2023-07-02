<script setup>
import axios from 'axios';
import { ref } from 'vue';
import SuccessAlert from './alerts/SuccessAlert.vue';


const props = defineProps({
    documentArray: Array
})

const displaySuccessAlert = ref(false)

const deletePublishedDocument = (draft_id) => {
    axios.delete(`/api/delete/published/document/${draft_id}`).then((res) => {
        displaySuccessAlert.value = true
    }).catch((err) => {
        console.error(err.response.data)
    })
}

const link = `/published/document/`

</script>

<template>
    <SuccessAlert v-if="displaySuccessAlert" successMessage="Document Deleted Successfully"/>
    <table class="table">
        <thead class="table-head">
            <tr class="table-head-row">
                <td class="br-tl-1">Title</td>
                <td>Related Service</td>
                <td>TimeStamp</td>
                <td class="actions br-tr-1">Actions</td>
            </tr>
        </thead>
        <tbody class="table-body">
            <tr v-for="document in props.documentArray" class="table-body-row">
                <td class="table-body-cell action"> <router-link :to='link+document.doc_id'>{{document.doc_title}}</router-link></td>
                <td class="table-body-cell">{{document.related_service}}</td>
                <td class="table-body-cell">{{document.timestamp}}</td>
                <td class="table-body-cell buttons-cell pl-1">
                    <div class="flex f-gap-1">
                        <button class="btn btn-success">
                            <i class="fa-regular fa-pen-to-square action"></i>
                        </button>
                        <button @click="deletePublishedDocument(document.doc_id)" class="btn btn-danger">
                            <i class="fa-solid fa-trash action"></i>
                        </button>
                    </div>                    
                </td>
            </tr>
            
        </tbody>
    </table>
</template>

<style scoped>

</style>