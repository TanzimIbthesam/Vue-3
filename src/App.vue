<template>
 <div>
    <!-- <Header v-bind:title="title"  @change="updateTitle($event)"/> 
     -->
   <Postitem/> 
   <!-- <Footer v-bind:title="title" @change="updateTitle($event)"/>  -->
<!-- <TodoList /> -->
 </div>

</template>

<script>
// import Profile from './components/Profile';
 import Postitem from './components/Postitem';
// import TodoList from './components/TodoList'
// import Header  from './components/Header';
//  import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
   Postitem
  // TodoList
  
  },
  data() {
    return {
       
     title:'Socialbook'
    }
  },
  methods:{
        updateTitle: function(updatedTitle){
        this.title = updatedTitle;
      }
}
}
</script>

<style>

</style>
