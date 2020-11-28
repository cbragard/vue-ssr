import axios from 'axios'
import Vue from 'vue'
export default {
    name: 'Logout',
    data() {
        return {
        }
    },
    methods: {
        logout() {
            this.$socket.emit('logout')
        }
    }
}
