<script setup>

</script>

<template>
    <div class="buttons-display p-1">

        <h1>Buttons</h1>
        <p>btn btn-primary</p>
        <button class="btn btn-primary">Primary</button>
        <p>btn btn-danger</p>
        <button class="btn btn-danger">Danger</button>
        <p>btn btn-warning</p>
        <button class="btn btn-warning">Warning</button>
        <p>btn btn-success</p>
        <button class="btn btn-success">Success</button>
        <p>btn btn-secondary</p>
        <button class="btn btn-secondary">Secondary</button>

        <h1>Alerts</h1>
        <div class="alert alert-primary">
            <p>Lorem <span class="primary">ipsum</span> dolor sit amet, consectetur adipisicing elit. Voluptate, quisquam vel.</p>
            <div class="alert-action">
                <i class="fa-solid fa-xmark fa-lg"></i>
            </div>
        </div>
        <div class="alert alert-danger">
            <p>This is a <span class="danger">danger</span> alert</p>
            <div class="alert-action">
                <i class="fa-solid fa-xmark fa-lg"></i>
            </div>
        </div>
        <div class="alert alert-warning">
            <p>This is a <span class="warning">warning</span> alert</p>
            <div class="alert-action">
                <i class="fa-solid fa-xmark fa-lg"></i>
            </div>
        </div>
        <div class="alert alert-success">
            <p>This is a <span class="success">success</span> alert</p>
            <div class="alert-action">
                <i class="fa-solid fa-xmark fa-lg"></i>
            </div>
        </div>

        <h1>Tags</h1>

        <div class="tag">
            SERVER
        </div>
        <div class="tag">
            CLOUD
        </div>
        <div class="tag">
            SWITCH
        </div>
    </div>
</template>

<style scoped>

.buttons-display {
    display: flex;
    flex-direction: column;
    gap: 1em;
}


</style>