<script setup>
import { ref } from 'vue';
import { utilStore } from '../../stores/utilStore'
import { useRoute, useRouter } from "vue-router"
import axios from "axios"

const util = utilStore()
const route = useRoute()
const router = useRouter()

const form = ref({
    make_model: null,
    hostname: null,
    IPMI: null,
    RAM: null,
    RAM_byte_amount: null,
    storage_amount: null,
    storage: null,
    storage_byte_amount: null,
    storage_type: null,
    NICS: null,
    NIC_amount: null,
    nic_type: null,
    nic_ethOrFib: null,
    cost: null,
    SN: null,
})

const hideModal = () => {
    util.closeHardwareModal()
}

const addHardware = () => {

    const device_ram = form.value.RAM + form.value.RAM_byte_amount
    const device_storage = form.value.storage_amount + "x" + " " + form.value.storage + form.value.storage_byte_amount + " " + form.value.storage_type
    const device_nics = form.value.NICS + "x" + " " + form.value.NIC_amount + form.value.nic_type + " " + form.value.nic_ethOrFib
    
    axios.post('/api/add/hardware', {
        make_model: form.value.make_model,
        hostname: form.value.hostname,
        IPMI: form.value.IPMI,
        RAM: device_ram,
        storage: device_storage,
        NICS: device_nics,
        cost: form.value.cost,
        SN: form.value.SN,
        related_service: route.params.service_id
    }).then((res) => {
        util.closeHardwareModal()
        location.reload()
    }).catch((err) => {
        console.error(err.response.data)
    })
}

</script>

<template>
<div v-if="(util.hardwareModalIsOpen === true)" class="modal">
    <div class="modal-title">
        <h2>ADD HARDWARE</h2>
        <button type="button" @click="hideModal()" class="btn btn-secondary modal-close-icon"><i class="fa-solid fa-xmark fa-xl"></i></button>
    </div>
    <div class="modal-body">
        <form @submit.prevent="addHardware()" class="modal-form">

            <label for="make_model">Make / Model</label>
            <input type="text" name="make_model" id="make_model" v-model="form.make_model">

            <label for="hostname">hostname</label>
            <input type="text" name="hostname" id="hostname" v-model="form.hostname">

            <label for="IPMI">IPMI</label>
            <input type="text" name="IPMI" id="IPMI" v-model="form.IPMI">

            <label for="RAM">RAM</label>
            <div class="input-group">
                <input type="number" name="RAM" id="RAM" v-model="form.RAM">

                <select class="select_input" name="RAM_byte_amount" id="RAM_byte_amount" v-model="form.RAM_byte_amount">
                    <option value="MB">MB</option>
                    <option value="GB">GB</option>
                    <option value="TB">TB</option>
                </select>
            </div>

            <label for="storage">DISKS</label>
            <div class="input-group">
                <input type="number" name="storage_amount" id="storage_amount" v-model="form.storage_amount">
                <h3>X</h3>
                <input type="number" inputmode="numeric" name="storage" id="storage" v-model="form.storage">
                <select class="select_input" name="storage_byte_amount" id="storage_byte_amount" v-model="form.storage_byte_amount">
                    <option value="MB">MB</option>
                    <option value="GB">GB</option>
                    <option value="TB">TB</option>
                    <option value="PB">PB</option>
                </select>
                <select class="select_input" name="storage_type" id="storage_type" v-model="form.storage_type">
                    <option value="SATA" selected>SATA</option>
                    <option value="SAS">SAS</option>
                    <option value="SSD">SSD</option>
                    <option value="NVMe">NVMe</option>
                    <option value="eMMC">eMMC</option>
                </select>
            </div>

            <label for="NICS">Network Interfaces</label>
            <div class="input-group">
                <input type="number" name="NICS" id="NICS" v-model="form.NICS">
                <h3>X</h3>
                <input type="number" name="NIC_amount" id="NIC_amount" v-model="form.NIC_amount">
                <select class="select_input" name="nic_type" id="nic_type" v-model="form.nic_type">
                    <option value="MB">MB</option>
                    <option value="GB">GB</option>
                    <option value="TB">TB</option>
                </select>
                <h3> /S</h3>
                <select class="select_input" name="nic_ethOrFib" id="nic_ethOrFib" v-model="form.nic_ethOrFib">
                    <option value="Ethernet">Ethernet</option>
                    <option value="Fiber">Fiber</option>
                </select>
            </div>

            <label for="cost">Cost</label>
            <input type="number" name="cost" id="cost" v-model="form.cost">
            

            <label for="SN">Serial Number</label>
            <input type="text" name="SN" id="SN" v-model="form.SN">

            <button type="submit" class="btn btn-primary mt-1">Add Hardware</button>
        </form>
    </div>
</div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

</style>