<template>
<!-- <h1>All Todos</h1>
 <div v-for="todo in allTodos" :key="todo.id">
   
   <div>
      <h1>{{todo.title}}</h1>
      <p>{{todo.description}}</p>

   </div>
 </div>
 <h1>Done Todos</h1>
 <div v-for="todo in doneTodos" :key="todo.id">
   
   <div>
      <h1>{{todo.title}}</h1>
      <p>{{todo.description}}</p>

   </div>
 </div>
 <h1>Not Todos</h1>
 <div v-for="todo in todosNotTodos" :key="todo.id">
   
   <div>
      <h1>{{todo.title}}</h1>
      <p>{{todo.description}}</p>

   </div>
 </div> -->
 <div>
   <button @click="increaseCounter">+</button>
   <p>Count-{{counter}}</p>
 </div>
</template>

<script>

  import {mapActions, mapGetters,mapState} from "vuex"
import { computed, ref } from 'vue'
export default {
  data(){
    return {
        // todos:this.$store.state.todos,
    }
  },
     
  name: 'App',
  setup(){
       const myname=ref("Tanzim");
      console.log(myname.value);
      const newstore=computed(()=>{
        return myname
      })
      return {newstore}
  },

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
