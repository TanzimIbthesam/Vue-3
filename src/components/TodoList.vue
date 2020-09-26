<template>
    <h3>{{title}}</h3>
      <form @submit.prevent="addTodo">
        <label for="newTodo">New Todo</label>
        <input v-model="newTodo" type="text" name="newTodo" id="newTodo" value="">
        <button type="submit" name="button">Add</button>
      </form>
      <button @click="allDone" type="button" name="button">All Done</button>
      <ul>
        <li v-for="todo in todos" :key="todo">
          <input type="checkbox" v-model="todo.done">
          <span :class="{ done: todo.done }">{{todo.title}}</span>
          <button @click="removeTodo(todo)" type="button" name="button">Remove</button>
        </li>
      </ul>
           
         
     
</template> 
<script>
export default {
    data() {
        return {
            todo:'',
            todos:[],
           
        }

    },
    methods:{
        addtoTodo(){
             this.todos.unshift({
                  title:this.todo,
                  done:false,
                  
              })
            
        }
    }
}
</script>
<style scoped>

      .done {
        text-decoration: line-through;
      }

    
</style>