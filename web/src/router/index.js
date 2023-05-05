import { createRouter, createWebHistory } from 'vue-router'
import Store from "@/store";
import Home from "@/views/Home/index.vue"
import Login from "@/views/Login/index.vue"
import Register from "@/views/Register/index.vue"
import Community from "@/views/Community/index.vue"
import Advice from "@/views/Advice/index.vue"
import Article from "@/views/Article/index.vue"
import NewDetail from "@/views/NewDetail/index.vue"
import Post from "@/views/Post/index.vue"
import User from "@/views/User/index.vue"
import Center from "@/views/Center/index.vue"

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/advice',
        name: 'Advice',
        component: Advice,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/community',
        name: 'Community',
        component: Community,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/article',
        name: 'Article',
        component: Article,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/post',
        name: 'Post',
        component: Post,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/center',
        name: 'Center',
        component: Center,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/newdetail',
        name: 'NewDetail',
        component: NewDetail,
        meta: {
            requiresAuth: false,
        },
        props: true
    },
]

const Router = createRouter({
    history: createWebHistory(),
    routes,
});

// 路由前置守卫
Router.beforeEach(async (to, from, next) => {
    // 登录后, 会设置的 userId
    let token = Store.state.user.token;
    // 页面需要登录
    if(to.matched.some(item => item.meta.requiresAuth)) {
        console.log("------------");
        console.log(token);
        // 用户登录
        if(token) {
            return next();
        }
        // 用户未登录
        return next({ name: "Login" })
    }
    // 页面不需要登录,就可以进
    return next();
});

export default Router;