<template>
  <div id="nav">
    <!-- <router-link to="/">Login</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- <Navbar /> -->
  </div>
  <router-view/>
</template>
<script>
import Navbar from './views/Navbar'
export default {
  components:{
    Navbar
  }
  
}
</script>
<style>

</style>
