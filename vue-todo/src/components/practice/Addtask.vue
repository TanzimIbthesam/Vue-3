<template>
Input
<input 
type="text" 
v-model="task"
id=""
ref="input"
class="block w-full rounded-md shadow-sm text-lg p-4"
@keyup.enter="addTask"
>

</template>
<script>
export default({
    emits:['added'],
  data(){
    return {
      task:'',
     
    }
  },
  methods:{
    addTask(){
        this.$emit("added",this.task)
         this.task=''
    }
  },
  mounted() {
    this.$refs.input.focus();
  },
})
</script>
<style>
</style>