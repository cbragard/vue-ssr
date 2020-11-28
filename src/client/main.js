import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import store from './store/store'
import routes from './routes'
import VueI18n from 'vue-i18n'
import io from 'socket.io-client'
import moment from 'moment'
import messages from './messages.json'

__webpack_public_path__ = process.env.NODE_HOST

Vue.prototype.moment = moment
Vue.prototype.$socket = io('http://localhost')
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.filter("formatNumber", function (val) {
  return new Intl.NumberFormat().format(val)
})

const router = new VueRouter({
    mode: 'history',
    routes
})
const i18n = new VueI18n({
    locale: 'en',
    messages
})

new Vue({
    el: '#app',
    store,
    router,
    i18n,
    render (r) { return r(App) }
})
