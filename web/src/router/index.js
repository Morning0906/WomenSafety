import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/index.vue"
import Login from "@/views/Login/index.vue"
import Community from "@/views/Community/index.vue"
import Advice from "@/views/Advice/index.vue"
import Article from "@/views/Article/index.vue"
import Post from "@/views/Post/index.vue"


const routes = [
    {
        path: '/',
        redirect: '/home',
    },
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
    },
    {
        path: '/article',
        name: 'Article',
        component: Article,
    },
    {
        path: '/post',
        name: 'Post',
        component: Post,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})