import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Posts from '../views/Posts.vue'
import Addpost from '../components/Addpost.vue'
// import Profile from '../views/Profile.vue'
import SinglePost from '../views/SinglePost.vue'
import Navbar from '../views/Navbar.vue'
import Auth from  '../views/Auth.vue'
import Profileinfo from '../views/profile/ProfilePage'
import { auth } from '../firebase/config'
import Random from '../components/Random'
const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  console.log('current user in auth guard: ', user)
  if (!user) {
    next({ name: 'auth' })
  } else {
    next()
  }
}

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
    name: 'auth',
    component: Auth,
  
},

    {
    path: '/profile',
    name: 'profile',
    component: Profileinfo
  },
   {
    path: '/addpost',
    name: 'addpost',
    component:Addpost,
 beforeEnter: requireAuth
  
   
   
  },
    {
    path: '/posts/10',
    name: 'individualpost',
    component:SinglePost
  },
  {
    path:'/navbar',
    name:'navbar',
    component:Navbar
  },
  {
    path:'/random',
    name:'random',
    component:Random,
    
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth=to.matched.some(record=>record.meta.requiresAuth);
//   const isAuthenticated=auth.currentUser
// //  console.log(isAuthenticated);
//  console.log("isauthenticated", isAuthenticated);
//   if(requiresAuth && !isAuthenticated){
//    next({name:'auth'})
//  }
//  else{
//    next()
//  }
//  if(!requiresAuth && isAuthenticated){
//    next({name:'Posts'})
//    console.log("user is authenticated");
//  }
//   });







export default router
