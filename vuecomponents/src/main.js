import { createApp } from 'vue'
import App from './App.vue'

import './index.css'
import './assets/tailwind.css'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



const app=createApp(App);

app.use(router).mount('#app')
library.add(fas);
app.component('fa', FontAwesomeIcon)
