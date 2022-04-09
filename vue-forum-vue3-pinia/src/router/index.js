import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import LandingPage from '@/views/LandingPage.vue'
import AddPost from '@/components/AddPost.vue'
import Posts from '@/views/Posts.vue'

const routes=[
    {
        path: '/',
        name: 'posts',
        component:Posts
      },
      {
          path: '/login',
          name: 'login',
          component:LandingPage
        },
        {
          path: '/addpost',
          name: 'addpost',
          component:AddPost
        },
];
export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });
