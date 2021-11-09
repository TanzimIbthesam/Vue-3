<template>
 <h1>All Todos</h1>
 
</template>

<script>

import {mapActions, mapGetters,mapState} from "vuex"

export default {
  data(){
    return {
        // todos:this.$store.state.todos,
    }
  },
     
  name: 'App',
 

  components: {
    
  },
  methods:{
      //  increaseCounter(){
      //    console.log("clicked");
      //     this.$store.dispatch('increaseCounter')
      //  }
      ...mapActions(['increaseCounter'])
  },
  computed:{
      ...mapState(['counter']),
    // ...mapState(['allTodos','doneTodos','todosNotTodos']),
    ...mapGetters(['allTodos','doneTodos','todosNotTodos'])
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