import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/css/index.scss'
import router from './router'
import { store } from './store'
import 'weui' 


 const app= createApp(App)
 app.config.devtools = true
 app.use(router)
 app.use(store)
 app.mount('#app')
