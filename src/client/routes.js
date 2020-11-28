import Login from './page/login/login.vue'
import Logout from './page/logout/logout.vue'
import Register from './page/register/register.vue'

export default [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/logout',
        component: Logout,
        name: 'logout'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    }
]
