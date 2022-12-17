<template>
    
<div class="sidenav">
    <div class="sidenav-header">
        <p>HOMELAB</p>
    </div>
    <div class="sidenav-body">
        <ul>
            <li><router-link class="active" to="/">HOME</router-link></li>
            <li><router-link to="/documentation">DOCUMENTATION</router-link></li>
            <li><router-link to="/asset_man">ASSET MANAGEMENT</router-link></li>
            <li><router-link to="/cost_overview">COST OVERVIEW</router-link></li>
            <li><router-link to="/change_log">CHANGE LOG</router-link></li>
            <li><router-link to="/buttons">Design Assets</router-link></li>
        </ul>
    </div>
    <div class="sidenav-foot">
        <p>LOGOUT <i class="fa-solid fa-right-from-bracket"></i></p>
    </div>
</div>

</template>

<style scoped>
.active::before {
    content: "|";
    color: rgb(0, 255, 229);
    margin-right: 10px;
}
</style>