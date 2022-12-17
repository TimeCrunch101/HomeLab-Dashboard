<script setup>

</script>

<template>
    <table class="table">
        <thead class="table-head">
            <tr class="table-head-row">
                <td class="br-tl-1">Name</td>
                <td>Service</td>
                <td>Date Created</td>
                <td>Created By</td>
                <td class="br-tr-1">Actions</td>
            </tr>
        </thead>
        <tbody class="table-body">
            <tr class="table-body-row">
                <td class="table-body-cell action"> <router-link to="/document">How to log in</router-link></td>
                <td class="table-body-cell">ProxMox</td>
                <td class="table-body-cell">11/24/2022</td>
                <td class="table-body-cell">Aaron Allen</td>
                <td class="table-body-cell pl-1">
                    <div class="flex f-gap-1">
                        <i class="fa-regular fa-pen-to-square action"></i>
                        <i class="fa-solid fa-trash action"></i>
                    </div>                    
                </td>
            </tr>
            <tr class="table-body-row">             
                <td class="table-body-cell action">Updating Proxmox</td>
                <td class="table-body-cell">ProxMox</td>
                <td class="table-body-cell">11/24/2022</td>
                <td class="table-body-cell">Aaron Allen</td>
                <td class="table-body-cell pl-1">
                    <div class="flex f-gap-1">
                        <i class="fa-regular fa-pen-to-square action"></i>
                        <i class="fa-solid fa-trash action"></i>
                    </div>                    
                </td>
            </tr>
            <tr class="table-body-row">             
                <td class="table-body-cell action">Backup Schedule</td>
                <td class="table-body-cell">ProxMox</td>
                <td class="table-body-cell">11/24/2022</td>
                <td class="table-body-cell">Aaron Allen</td>
                <td class="table-body-cell pl-1">
                    <div class="flex f-gap-1">
                        <i class="fa-regular fa-pen-to-square action"></i>
                        <i class="fa-solid fa-trash action"></i>
                    </div>
                </td>
            </tr>
            <tr class="table-body-row">             
                <td class="table-body-cell action">How to log in</td>
                <td class="table-body-cell">ProxMox</td>
                <td class="table-body-cell">11/24/2022</td>
                <td class="table-body-cell">Aaron Allen</td>
                <td class="table-body-cell pl-1">
                    <div class="flex f-gap-1">
                        <i class="fa-regular fa-pen-to-square action"></i>
                        <i class="fa-solid fa-trash action"></i>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>