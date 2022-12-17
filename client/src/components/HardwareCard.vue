<script setup>
const props = defineProps({
    deviceName: String,
    hostname: String,
    management: String,
    ram: String,
    storage: String,
    nics: String,
    cost: String,
    serialNumber: String,
})

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
    </div>
</div>

</template>

<style scoped>

</style>