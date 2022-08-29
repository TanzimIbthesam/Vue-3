<template>
    
          <div class="d-flex justify-content-between p-2 ">
          
          <label for="">Enter Name</label><br>
        <input type="text" 
        :value="name"
        @input="$emit('update:name',$event.target.value)" 
        class="form-control" name="" id="">
        <label for="">Enter Address</label>
        <input type="text" 
        :value="location"
        @input="$emit('update:location',$event.target.value)"
        class="form-control" name="" id="">
        
        
        
        
      </div>
      
</template>

<script>
export default({
    props:['name','location'],
    data(){
        return {

        }
    },
    methods:{
        
    }

 }) 
 </script>

<style lang="scss" scoped>

</style>