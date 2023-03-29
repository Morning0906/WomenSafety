import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/index.vue"
import Community from "@/views/Community/index.vue"
import Advice from "@/views/Advice/index.vue"
import Login from "@/views/Login/index.vue"

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/advice',
        name: 'Advice',
        component: Advice,
    },
    {
        path: '/community',
        name: 'Community',
        component: Community,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})