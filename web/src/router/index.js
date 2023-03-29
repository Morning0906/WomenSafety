import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/index.vue"
import Community from "@/views/Community/index.vue"
import Advice from "@/views/Advice/index.vue"

const routes = [
    {
        path: '/',
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
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})