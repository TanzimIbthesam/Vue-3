import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import LandingPage from '@/views/LandingPage.vue'
import AddPost from '@/components/AddPost.vue'
import Posts from '@/views/Posts.vue'
  import  { auth } from '@/firebase/config.js'
import { getAuth,onAuthStateChanged } from 'firebase/auth';


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
         
          
          
        },
        {
          path: '/addpost',
          name: 'addpost',
          component:AddPost,
          meta: {
            requiresAuth: true
          }
          
         
          
          
        },
];

 const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });
  
 
 
  
  const getCurrentUser = () => {
    return new Promise(( resolve, reject ) =>{
      const removeListener = onAuthStateChanged(
        auth,
        (user) => {
          removeListener();
          resolve(user)
        },
        reject
      )
    })
  }
  router.beforeEach( async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)){
      if (await getCurrentUser()){
        next();
      } else {
        
        next('/login');
      }
    } else {
      next();
    }
  });
export default router;
