import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import LandingPage from '@/views/LandingPage.vue'
import AddPost from '@/components/AddPost.vue'
import Posts from '@/views/Posts.vue'
  import  { auth } from '@/firebase/config.js'
import { getAuth,onAuthStateChanged } from 'firebase/auth';
const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  console.log('current user in auth guard: ', user)

  if (!user) {
    next({ name: 'login' })
  } else {
    next()
  }
}
const redirectToHomePage = (to, from, next) => {
  let user = auth.currentUser
  
  if (to.name == 'login' && user) {
    next({ name: 'posts' })
    
  }
  else  next()
  
}

const routes=[
    {
        path: '/',
        name: 'posts',
        component:Posts
      },
      {
          path: '/login',
          name: 'login',
           component:LandingPage,
            beforeEnter: redirectToHomePage
          
         
          
          
        },
        {
          path: '/addpost',
          name: 'addpost',
          component:AddPost,
          
          beforeEnter:requireAuth
          
         
          
          
        },
];

 const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });
  
  // router.beforeEach((to, from, next) => {
  //   if (to.path === '/login' && auth.currentUser) {
  //     next('/')
  //     return;
  //   }
  
  //   if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
  //     next('/login')
  //     return;
  //   }
  
  //   next();
  // });
  

export default router;
