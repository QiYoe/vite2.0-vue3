import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
// import '/@/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import store from './store'

createApp(App).use(routes).use(ElementPlus).use(store).mount('#app')
