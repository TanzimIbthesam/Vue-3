<template>
  
    <teleport to=".modals-container">
    
    <div class="modal">
      <h1>{{title}}</h1>
     <slot />
     <!-- <button @click="showModal=false">Hide</button> -->
  
    </div>
    </teleport>
    
    
</template>

<script setup>
const props=defineProps({
  title:{
    type:String,
    default:'No Title specified'
}
});



</script>

<style>
.modal{
  background:beige;
  /* width:20%; */
  padding:10px;
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
}
</style>