import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Form from '@/components/Form.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
