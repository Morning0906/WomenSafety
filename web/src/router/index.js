import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/index.vue"
import Community from "@/views/Community/index.vue"
import Test from "@/views/Test/index.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'Test',
        component: Test,
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