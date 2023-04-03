import {
    createApp
} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from "@/store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const forumApp = createApp(App)
forumApp.use(router)
    .use(store)
    .mount('#app')

forumApp.use(ElementPlus)