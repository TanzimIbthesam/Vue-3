<template>
  <div class="modals">
    <h1>Show Modal</h1>
    <button @click="showModal=true">Show</button>
    <teleport to="body">
    <div v-if="showModal" 
    class="modal">
      <h1>Modal heading</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati ipsam quisquam eligendi laudantium totam tempora, minus quo recusandae nobis quod repellendus quia, accusamus quas perspiciatis nemo illo architecto natus?</p>
     <button @click="showModal=false">Hide</button>
  </div>
  
    </teleport>
    
    </div>
   
</template>
<script setup>
import {  ref,onMounted } from 'vue';
const showModal=ref(false)

onMounted(()=>{
  console.log("Hello");
})
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