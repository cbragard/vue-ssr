<template>
    <div class="page--register">
        <h1>
            {{ $t('page.register.h1') }}
        </h1>
        <div class="notice notice--error" v-if="error">
            <p>{{ $t(`page.register.error.${error}`) }}</p>
        </div>
        <form class="form" @submit="register($event)">
            <div class="form-field">
                <input
                    type="email"
                    v-bind:placeholder="$t('page.login.form.email-placeholder')"
                    v-model="email" />
            </div>
            <div class="form-field">
                <input
                    v-bind:placeholder="$t('page.login.form.pwd-placeholder')"
                    type="password"
                    v-model="password" />
            </div>
            <div class="form-field form-field--submit">
                <button>
                    {{ $t('page.register.submit') }}
                </button>
            </div>
        </form>
        <div class="container">
            <router-link :to="{ name: 'login' }">
                {{ $t('page.register.login') }}
            </router-link>
        </div>
    </div>
</template>

<script src="./register.js"></script>

<style lang="scss">
   @import './register.scss';
</style>
