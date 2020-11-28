<template>
    <div class="page--logout">
        <div class="form">
            <div class="form-field form-field--submit">
                <button v-on:click="logout()">logout</button>
            </div>
        </div>
    </div>
</template>

<script src="./logout.js"></script>

<style lang="scss">
   @import './logout.scss';
</style>
