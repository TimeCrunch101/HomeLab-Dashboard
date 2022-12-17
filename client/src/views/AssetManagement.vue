<script setup>
import axios from "axios";
import { ref } from "vue"

const assets = ref([])

const formatter = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
})

const totalCost = ref()
const sumArray = (array) => {
  let sum = 0;
  array.forEach(item => {
    sum += item.cost;
  });
  const formatSum = formatter.format(sum)
  return formatSum;
}

axios.get('/api/asset/list').then((res) => {
    totalCost.value = sumArray(res.data.assets)
    assets.value = res.data.assets
}).then(() => {
    assets.value.forEach(e => {
        e.cost = formatter.format(e.cost)
    });
}).catch((err) => {
    console.error(err)
})




</script>

<template>
<h1>Asset Management</h1>

<p v-if="totalCost !== undefined" >Total Cost: <strong>{{totalCost}}</strong></p>
<p v-else>Total Cost: <strong>$0.00</strong></p>


<div class="mt-5">
    <table class="table">
        <thead class="table-head">
            <tr class="table-head-row">
                <td class="br-tl-1">Make / Model</td>
                <td>Hostname</td>
                <td>IPMI / Management</td>
                <td>RAM</td>
                <td>Storage</td>
                <td>NICs</td>
                <td>Cost</td>
                <td class="br-tr-1">Serial Number</td>
            </tr>
        </thead>
        <tbody class="table-body">
            <tr v-for="asset in assets" class="table-body-row">
                <td class="table-body-cell">{{asset.make_model}}</td>
                <td class="table-body-cell">{{asset.hostname}}</td>
                <td class="table-body-cell">{{asset.ipmi}}</td>
                <td v-if="asset.ram === '0'" class="table-body-cell">N/A</td>
                <td v-else class="table-body-cell">{{asset.ram}}</td>
                <td v-if="asset.storage === 'nullx nullnull null'" class="table-body-cell">N/A</td>
                <td v-else class="table-body-cell">{{asset.storage}}</td>
                <td class="table-body-cell">{{asset.nics}}</td>
                <td class="table-body-cell">{{asset.cost}}</td>
                <td class="table-body-cell">{{asset.serial_number}}</td>
            </tr>
        </tbody>
    </table>
</div>



</template>

<style scoped>

strong {
    color: rgb(138, 204, 201);
}

</style>