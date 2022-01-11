<template>
  <!-- <switchbutton /> -->
  <!-- <activenavbar />  -->
 <activenavbarwithsvg /> 
  


  <router-view />
 
</template>

<script>
//import Activenavbarwithsvg from './components/activenavbarwithsvg.vue'

// import switchbutton from './components/MyComponents/switchbutton.vue'
 import activenavbarwithsvg from './components/MyComponents/activenavbarwithsvg.vue'
// import selectoptions from './components/MyComponents/activenavbar.vue'

export default {
  name: 'App',
  components: {
    // switchbutton
    //  activenavbar
    activenavbarwithsvg,
    // selectoptions
    
    
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
