import openSocket from 'socket.io-client'
import axios from 'axios'
import Vue from 'vue'
export default {
    name: 'Login',
    mounted() {
        this.$socket.on(400, (data) => {
            const { error } = data
            this.error = error
        })
    },
    data() {
        return {
            email: this.$store.getters['user/get']().email,
            error: null,
            password: null
        }
    },
    methods: {
        login(e) {
            event.preventDefault()
            this.error = false
            const { email, password } = this
            this.$socket.emit('login', { email, password })
        }
    }
}
