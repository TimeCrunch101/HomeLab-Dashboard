<script setup>
import { onMounted } from "vue";
import HardwareCard from "../components/HardwareCard.vue";
import CredentialCard from "../components/CredentialCard.vue"
import TagItem from "../components/TagItem.vue";
import { useRoute } from 'vue-router';
import axios from "axios";
import { ref } from "vue";
import { utilStore } from "../stores/utilStore";

const route = useRoute()

const serviceData = ref({
    title: null,
})
const hardwareData = ref([])
const serviceTotalCost = ref()
const creds = ref([])
const documents = ref([])

const url = '/published/document/'

const formatter = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
})

const showAddHardwareModal = () => {
    utilStore().openHardwareModal()
}
const showAddCredModal = () => {
    utilStore().openCredModal()
}

const sumArray = (array) => {
  let sum = 0;
  array.forEach(item => {
    sum += item.cost;
  });
  const formatSum = formatter.format(sum)
  return formatSum;
}

onMounted(() => {
    axios.get(`/api/get/service/${route.params.service_id}`).then((res) => {
        serviceTotalCost.value = sumArray(res.data.hardwareData)
        serviceData.value.title = res.data.service_data.title
        hardwareData.value = res.data.hardwareData
        documents.value = res.data.documents
        creds.value = res.data.creds
        hardwareData.value.forEach(e => {
            e.cost = formatter.format(e.cost)
        });
    }).catch((err) => {
        console.error(err)
    })
})



</script>

<template>
<div class="page-title mb-1">
    <h1>{{serviceData.title}}</h1>
    <p v-if="serviceTotalCost !== undefined" >Total Cost for Service: <strong>{{serviceTotalCost}}</strong></p>
    <p v-else>Total Cost for Service: <strong>$0.00</strong></p>
</div>

<div class="tags flex f-gap">
    <div class="tags-title flex f-just-center f-align-center">
        <p>Tags</p>
    </div>
    <div class="tags-list flex f-gap f-align-center">
        <TagItem tag="Virtual"/>
        <div class="tags-item tags-item-add">
            +
        </div>
    </div>
</div>

<div class="mt-1 mb-2 section-container">
    <div class="section-title">
        <h2>Hardware</h2>
    </div>
    <div class="section">
        <div class="card-list-wrapper mt-1">
            <div v-for="hardware in hardwareData">
                <HardwareCard
                :deviceName="hardware.make_model" 
                :hostname="hardware.hostname" 
                :management="hardware.ipmi" 
                :ram="hardware.ram" 
                :storage="hardware.storage" 
                :nics="hardware.nics" 
                :cost="hardware.cost"
                :serialNumber="hardware.serial_number"/>
            </div>
            <div @click="showAddHardwareModal()" class="add-item">
                <p>+</p>
            </div>
        </div>
    </div>
</div>

<div class="section-container">
    <div class="section-title">
        <h2>Credentials</h2>
    </div>
    <div class="section">
        <div class="mt-1 flex f-gap-2 f-align-center">
            <div v-for="cred in creds">
                <CredentialCard
                :cred_id="cred.cred_id"
                :title="cred.title"
                :username="cred.username"
                password="Copy Password"
                :link="cred.link"/>
            </div>
            <div @click="showAddCredModal()" class="add-cred">
                <p>+</p>
            </div>
        </div>
    </div>
</div>


<div class="section-container">
    <div class="section-title">
        <h2>Documentation</h2>
    </div>
    <div class="section">
        <div class="mt-1 flex f-gap-2 f-align-center">
            <div id="document-link" >
                <router-link v-for="document in documents" :to="url + document.doc_id">{{ document.doc_title }}</router-link>
            </div>
            <p class="testing" v-for="document in documents">{{ document.doc_timestamp }}</p>
        </div>
    </div>
</div>

</template>

<style scoped>

.testing {
    margin-left: auto;
    margin-right: 1em;
    color: lightblue;
}

</style>





























<!-- <div class="mt-1">
            <table class="table">
                <thead class="table-head">
                    <tr class="table-head-row">
                        <td class="br-tl-1">Name</td>
                        <td>Version</td>
                        <td>Vender</td>
                        <td class="br-tr-1">Support</td>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr class="table-body-row">
                        <td class="table-body-cell">ProxMox</td>
                        <td class="table-body-cell">7.2.7</td>
                        <td class="table-body-cell"><a href="https://www.proxmox.com/en/proxmox-ve"
                                target="_blank">ProxMox PVE</a></td>
                        <td class="table-body-cell">false</td>
                    </tr>
                </tbody>
            </table>
        </div> -->