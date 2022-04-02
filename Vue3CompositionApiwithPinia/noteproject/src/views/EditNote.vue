<template>
  <div>
       Edit Note route-{{$route.params.id}}
       Content-{{content}}
      
  </div>
</template>

<script setup>
const props=defineProps({
   content:{
       required:true,
       type:String
   }
   

})
</script>

<style>

</style>