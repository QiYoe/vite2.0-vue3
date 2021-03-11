import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import element3 from './plugins/element3'
import store from './store'
import 'styles/index.scss'

createApp(App).use(router).use(store).use(element3).mount('#app')
