import './assets/main.css'

import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'
import ElementPlus
    from 'element-plus'
import 'element-plus/dist/index.css'

import App
    from './App.vue'
import router
    from './router'


// 引入axios
import axios
    from "@/axios/axios";



const app = createApp(App)


app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
