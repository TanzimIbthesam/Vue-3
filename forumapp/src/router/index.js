import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Posts from '../views/Posts.vue'
import Addpost from '../components/Addpost.vue'
import Profile from '../views/Profile.vue'
import SinglePost from '../views/SinglePost.vue'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

    {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
   {
    path: '/addpost',
    name: 'addpost',
    component:Addpost
  },
    {
    path: '/posts/10',
    name: 'individualpost',
    component:SinglePost
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
