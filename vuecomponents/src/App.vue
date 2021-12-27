<template>
  <!-- <switchbutton /> -->
  <!-- <activenavbar /> -->
  <activenavbar /> 
   
  <router-view />
  
</template>

<script>

// import switchbutton from './components/MyComponents/switchbutton.vue'
 import activenavbar from './components/MyComponents/activenavbar.vue'
import selectoptions from './components/MyComponents/activenavbar.vue'

export default {
  name: 'App',
  components: {
    // switchbutton
     activenavbar,
    selectoptions
    
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
