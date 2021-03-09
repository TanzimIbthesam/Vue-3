import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Posts from '../views/Posts.vue'
import Addpost from '../components/Addpost.vue'


import Navbar from '../views/Navbar.vue'
import Auth from  '../views/Auth.vue'
import Profileinfo from '../views/profile/ProfilePage'
import { auth } from '../firebase/config'

import updatePost from '../components/updatePost.vue'
import fullPost from '../views/fullPost.vue'
const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  console.log('current user in auth guard: ', user)

  if (!user) {
    next({ name: 'auth' })
  } else {
    next()
  }
}
const redirectToHomePage = (to, from, next) => {
  let user = auth.currentUser
  
  if (to.name == 'auth' && user) next({ name: 'Posts' })
  else  next()
  
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
   beforeEnter: redirectToHomePage

    
    
    
    
  
},

    {
    path: '/profile',
    name: 'profile',
    component: Profileinfo,
    beforeEnter: requireAuth
  },
   {
    path: '/addpost',
    name: 'addpost',
    component:Addpost,
 beforeEnter: requireAuth
  
   
   
  },
   
  {
    path: '/post/:title',
    name: 'fullpost',
    component:fullPost,
     props:true,
    // beforeEnter: requireAuth
  },
  
    {
      path: '/edit/:id',
      name: 'updatepost',
      component:updatePost,
      props:true,
      beforeEnter: requireAuth
    },

  
  
  {
    path:'/navbar',
    name:'navbar',
    component:Navbar
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})







export default router
