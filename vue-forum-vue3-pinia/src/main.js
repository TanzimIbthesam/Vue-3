import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import { createPinia } from 'pinia'
import { onAuthStateChanged } from 'firebase/auth'

 const app=createApp(App);

app.use(createPinia())

app.use(router);


app.mount('#app')
// let app

// onAuthStateChanged(() => {
//   if (!app) {
//     app = createApp(App)
//       .use(router)
//       .mount('#app')
//   }
// })