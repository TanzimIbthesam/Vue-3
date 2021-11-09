 import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Coaches from '../views/coach/Coaches'
import Requests from '../views/requests/Requests'
import CoachRegister from '../views/coach/CoachRegister'
 import CoachDetails from '../views/coach/CoachDetails'
 import ContactCoach from '../views/coach/ContactCoach'
import ForZeroFour from '../FourZeroFour'
const routes = [
    {
      path: '/',
      redirect:'/coaches'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/coaches',
        name: 'Coaches',
        component: Coaches
      },
      {
        path: '/coaches/:id',
        name: 'CoachDeatils',
        component: CoachDetails,
        children:[
            {
                path:'contact',component:ContactCoach
            }
           
        ]
      },
      {
        path: '/requests',
        name: 'Requests',
        component:Requests
      },
      {
        path: '/register',
        name: 'CoachRegister',
        component:CoachRegister
      },
   
    
      { path: '/:catchAll(.*)',name:ForZeroFour,component:ForZeroFour},
   
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router