

<template>
  <!-- <HomeView /> -->
<Router-link to="/">Home</Router-link>
    <!-- <Router-link to="/testroute">Testroute</Router-link> -->
  
    <!-- For named route -->
    <Router-link :to="{name:'testroute'}">Testroute</Router-link>
    <Router-link :to="{name:'posts'}">Posts</Router-link>
    <Router-link :to="{name:'modals'}">Modals</Router-link>
    Username-{{userData.name}}
    email-{{userData.email}}
  <RouterView  />
</template>
<script setup>
import { reactive,provide } from 'vue'

import { RouterLink, RouterView } from 'vue-router'
const userData=reactive({
  name:'Tanzim101',
  email:'tanzim@gmail.com'
})
provide('userData',userData)
</script>
<style>
@import '@/assets/base.css';


</style>
