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



const app = createApp(App)


app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
app.config.globalProperties.$axios = axios;  //配置axios的全局引用
