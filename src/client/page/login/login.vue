<template>
    <div class="page--login">
        <h1>
            {{ $t('page.login.h1') }}
        </h1>
        <div class="notice notice--error" v-if="error">
            <p>{{ $t(`page.login.error.${error}`) }}</p>
        </div>
        <form class="form" @submit="login($event)">
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
                    {{ $t('page.login.submit') }}
                </button>
            </div>
        </form>
        <div class="container">
            <router-link :to="{ name: 'register' }">
                {{ $t('page.login.register') }}
            </router-link>
        </div>
    </div>
</template>

<script src="./login.js"></script>

<style lang="scss">
   @import './login.scss';
</style>
