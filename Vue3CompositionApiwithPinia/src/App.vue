

<template>
  <!-- <HomeView /> -->
<Router-link to="/">Home</Router-link>
    <!-- <Router-link to="/testroute">Testroute</Router-link> -->
  
    <!-- For named route -->
    <Router-link :to="{name:'testroute'}">Testroute</Router-link>
    <Router-link :to="{name:'posts'}">Posts</Router-link>
    <Router-link :to="{name:'modals'}">Modals</Router-link>
    Username-{{userData.name}}|email-{{userData.email}}|onlinestatus:{{online}}
   


    
  <RouterView  />
</template>
<script setup>
import { reactive,provide, onMounted,ref } from 'vue'
import { useOnline } from '@vueuse/core'
import { RouterLink, RouterView } from 'vue-router'

const userData=reactive({
  name:'Tanzim101',
  email:'tanzim@gmail.com'
})


onMounted(()=>{
  
  console.log("Unmounted");
})

provide('userData',userData)
const online=useOnline()

</script>
<style>
@import '@/assets/base.css';


</style>
