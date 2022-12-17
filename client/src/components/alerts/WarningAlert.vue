<script setup>
const props = defineProps({
    alertMessage: String
})

const dismissAlert = () => {
    const alertDiv = document.getElementById("alert1")
    alertDiv.classList.add('hidden')
}



</script>

<template>
    <div id="alert1" class="alert alert-warning">
        <!-- <p>This is a <span class="warning">warning</span> alert</p> -->
        <p>{{alertMessage}}</p>
        <div @click="dismissAlert" class="alert-action">
            <i class="fa-solid fa-xmark fa-lg"></i>
        </div>
    </div>
</template>

<style scoped>
.alert {
    position: absolute;
    top: 10px;
    left: 50%;
}
.alert-action:hover {
    cursor: pointer;
}

.hidden {
    display: none;
}

</style>