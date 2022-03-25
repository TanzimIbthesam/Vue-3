

<template>
  <!-- <HomeView /> -->
<Router-link to="/">Home</Router-link>
    <!-- <Router-link to="/testroute">Testroute</Router-link> -->
  
    <!-- For named route -->
    <Router-link :to="{name:'testroute'}">Testroute</Router-link>
    <Router-link :to="{name:'posts'}">Posts</Router-link>
    <Router-link :to="{name:'modals'}">Modals</Router-link>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<style>
@import '@/assets/base.css';


</style>
