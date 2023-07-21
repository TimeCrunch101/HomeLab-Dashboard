<script setup>
import axios from 'axios';

const props = defineProps({
    deviceName: String,
    hostname: String,
    management: String,
    ram: String,
    storage: String,
    nics: String,
    cost: String,
    serialNumber: String,
    hardware_id: Number
})

const emit = defineEmits(["refresh-data"])

const deleteHardware = (id) => {
    axios.delete(`/api/delete/hardware/${id}`,).then((res) => {
        emit('refresh-data')
    }).catch((err) => {
        console.log(err.message.data)
    })
}

</script>

<template>

<div class="card">
    <div class="card-title">
        <h3>{{deviceName}}</h3>
    </div>
    <div class="card-body">
        <p v-if="hostname !== 'null'">Hostname: {{hostname}}</p>
        <p v-if="management !== 'null'">IPMI: {{management}}</p>
        <p v-if="ram !== '0'">RAM: {{ram}}</p>
        <p v-if="storage !== 'nullx nullnull null'">Storage: {{storage}}</p>
        <p v-if="nics !== 'null'">NICs: {{nics}}</p>
        <p v-if="cost !== 'null'">Cost: {{cost}}</p>
        <p v-if="serialNumber !== 'null'">SN: {{serialNumber}}</p>
    </div>
    <div class="card-footer">
        <a :href="management" target="_blank">MANAGE</a>
        <button @click="deleteHardware(hardware_id)" class="btn btn-danger">DELETE</button>
    </div>
</div>

</template>

<style scoped>

</style>