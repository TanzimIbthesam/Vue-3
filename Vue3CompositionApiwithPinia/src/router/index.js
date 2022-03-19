import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestRoute from '../components/TestRoute.vue'
import Posts from '../components/Posts.vue'
import SinglePost from '../components/SinglePost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testroutess',
      name: 'testroute',
      component: TestRoute
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/post/:id',
      name: 'singlepost',
      component: SinglePost
    },

    
  ]
})

export default router
