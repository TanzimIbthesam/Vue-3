<template>
  
    <teleport to=".modals-container">
    
    <div class="modal">
      <h1><slot name="title" /></h1>
     <slot />
     <!-- <button @click="showModal=false">Hide</button> -->
  
    </div>
    </teleport>
    
    
</template>

<script setup>




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