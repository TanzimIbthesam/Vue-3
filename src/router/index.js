import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddEmployee from '../components/AddEmployee.vue'
import EditEmployee from '../components/EditEmployee.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/addemployee',
    name: 'addemployee',
    component: AddEmployee
  },
  {
    path: '/employee/:id',
    name: 'EditEmployee',
    component: EditEmployee,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
