import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import { createPinia } from 'pinia'
 import { onAuthStateChanged } from 'firebase/auth'
 import {auth} from '@/firebase/config.js'
 import {ref} from 'vue'
 const app=createApp(App);

app.use(createPinia())

app.use(router);


app.mount('#app')




