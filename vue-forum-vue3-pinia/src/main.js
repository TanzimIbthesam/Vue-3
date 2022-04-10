import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import { createPinia } from 'pinia'
const app=createApp(App);
app.use(router);
app.use(createPinia())
const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router)
});
app.use(router)
app.mount('#app')
