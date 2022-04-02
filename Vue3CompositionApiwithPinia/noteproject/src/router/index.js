import { createRouter, createWebHistory } from 'vue-router';
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import EditNote from '@/views/EditNote.vue'
const routes=[
    {
      path: '/',
      name: 'viewnotes',
      component: ViewNotes
    },
    {
      path: '/stats',
      name: 'viewstats',
      component:ViewStats
    },
    {
      path: '/editNote/:id',
      name: 'EditNote',
      component:EditNote,
      props: true
    },
    
   
  ];
 export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

  // export default router;
 
  
