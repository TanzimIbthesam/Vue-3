<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="is-size-4 is-family-monospace" >
      Noteballs App
    </div>
 <a 
  @click.prevent="showHideMobileNav"
  class="navbar-burger "
  aria-expanded="false"
  aria-lable="menu"
  data-target="navbarBasicExample"
  role="button"
  :class="[showMobileNav ? 'is-active':'']"
 >
 <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
   <span aria-hidden="true"></span>
 </a>
    
  </div>

  <div id="navbarBasicExample" class="navbar-menu "
  :class="[showMobileNav ? 'is-active':'']"
  >
    
<div class="container is-max-desktop">
  <div class="navbar-end">
       <Router-Link class="navbar-item is-active" :to="{name:'viewnotes'}">Home</Router-Link>
       <Router-Link class="navbar-item is-active" :to="{name:'viewstats'}">Stats</Router-Link>

      
    </div>
</div>
  
  </div>
</nav>
</template>

<script setup>
import {ref} from 'vue';
const showMobileNav=ref(false);

const showHideMobileNav=()=>{
    showMobileNav.value =! showMobileNav.value
}
</script>

<style>

</style>