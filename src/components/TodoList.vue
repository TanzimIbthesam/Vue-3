<template>
    <div class="w-full bg-gray-100 ">
       
           <div class=" flex flex-col  justify-center items-center">
           
                 <div>
                     <h1 class="text-2xl font-bold font-serif">ToDo List</h1><br>
                    <form @submit.prevent>
                        
            <input type="text" v-model="todo" name="" id="" class="px-6 py-1 border border-gray-800" >    <br>
            
              <button  @click="addtoList()" class="bg-gray-900 text-white py-1 px-6 rounded-full mt-1">SEND</button>
             </form><br>
            
                 </div>
                 <div>
                     <table>
                   <thead>
    <tr>
      <th class="px-4 py-2">Task</th>
      <th class="px-4 py-2">Action</th>
     
    </tr>
  </thead>
  <tbody >
    
    <tr v-for="todo in todos" :key="todo">
      <td  class="border px-32 py-2" :class="{ 'text-red-800 line-through': todo.done }" >{{todo.title}}</td>
      <td class="border px-32 py-2"><input v-model="todo.done"  type="checkbox"  name="" class="px-1 py-2" id="" :checked="todo.done"></td>
      <td class="border px-32 py-2"><button @click="deleteButton(todo)" class="px-4 py-1 bg-red-700 text-white text-md rounded-lg font-serif">DELETE</button></td>
      
      
    </tr>
    <button @click="deleteAllButton()" class="px-4 py-1 bg-red-700 text-white text-md rounded-lg font-serif">DELETEALL</button>
    <button @click=" allDoneMarked()" class="px-4 py-1 bg-orange-400 text-white text-md rounded-lg font-serif ml-2">All done</button>

    
  </tbody>
</table>
                 </div>
                       
                     
                   </div>
              
                   
           
             
           
         
         

        
           </div>
           
         
     
</template> 
<script>
export default {
    data() {
        return {
           todo:'',
           todos:[]
           
        }

    },
    methods:{
      addtoList(){
       this.todos.push({
         title:this.todo,
         done:false

       });
      },
      allDoneMarked(){
        this.todos.forEach((todo)=>{
               todo.done=true;
        });

      },
      deleteButton(todo){
          const todoIndex=this.todos.indexOf(todo);
          console.log(todoIndex);
      this.todos.splice(todoIndex,1);

      },
      deleteAllButton(){
       this.todos=[];
      }
        
    }
}
</script>
<style scoped>

      .done {
        text-decoration: line-through;
      }

    
</style>