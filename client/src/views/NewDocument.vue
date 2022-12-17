<script setup>
import Quill from "quill/dist/quill.js"
import { onMounted, ref } from "vue";
import {useRouter} from "vue-router"
import axios from "axios";
const router = useRouter()

const form = ref({
    title: null,
    body: null,
})

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

const discard = () => {
    router.push('/documentation')
}

const publishDocument = () => {

}
const saveDraft = async () => {
    form.value.body = document.getElementsByClassName('ql-editor')[0].innerHTML
    await axios.post('/create/document/draft', {
        text: form.value.body,
        title: form.value.title
    }).catch((err) => {
        console.error(err)
    })
    router.push('/documentation')
    
}

onMounted(() => {
    new Quill("#editor", {
        modules: {
            toolbar: toolbarOptions
        },
        placeholder: 'Document Body...',
        theme: 'snow'
    })
})
</script>

<template>
   
        <div class="document-form-wrapper">
            <form @submit.prevent="publishDocument()">
                <div class="flex f-gap-1 mb-2">
                    <button type="submit" class="btn btn-success">Publish</button>
                    <button type="button" @click="saveDraft()" class="btn btn-secondary">Save Draft</button>
                    <button type="button" @click="discard()" class="btn btn-danger">Discard</button>
                </div>
                <!-- <h1 class="mb-1">New Document</h1> -->
                <input type="text" name="title" id="title" class="new-document-title" placeholder="Document Title..." v-model="form.title">
                <div id="editor"></div>
                <input style="display:none;" type="text" name="comment_post_value" id="comment_post_value" v-model="form.body">
            </form>
        </div>
        
</template>

<style scoped>

#editor{
    height: calc(100vh - 16em);
}


</style>