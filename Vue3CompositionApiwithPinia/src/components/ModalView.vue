<template>
 <div class="modals">
    <h1>Show Modal</h1>
    <div>
     <label>
       Show Dark Models?
       <input v-model="showDarkModal" type="checkbox" />
     </label>
    </div>
    <component
   
    v-model="showModal" 
    title="My App title "
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati ipsam quisquam eligendi laudantium totam tempora, minus quo recusandae nobis quod repellendus quia, accusamus quas perspiciatis nemo illo architecto natus?"
    :is="showDarkModal?ModalDark:Modal"
    >
        
      
    </component>
    <button @click="showModal=true">Show</button>
    
  </div>
   
</template>
<script setup>
// import Modal from './Modal.vue'
import {  ref } from 'vue';
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'
const showModal=ref(false);
const showDarkModal=ref(false);
// const emitModal=()=>{
//   showModal.value=false
// }
 
</script>
<style >

</style>