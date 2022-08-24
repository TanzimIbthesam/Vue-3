<template>
<div>
<AddTask @added="taskAdded" />

</div>
<div v-for="task in tasks" :key="task.id">
 {{task}}
</div>
</template>
<script>
import AddTask from './Addtask.vue'

export default({
  name:"App",
  components:{
      AddTask
  },
  data(){
    return {
      
      tasks:[]
    }
  },
  methods:{
    taskAdded(task){
      console.log("added")
         this.tasks.push(task)
         
    }
  },
 
})
</script>
<style>
</style>