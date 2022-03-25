<template>
  
    <teleport to=".modals-container">
    
    <div class="modal"
    v-if="modelValue"
    >
      <h1>{{title}}</h1>
     
     <p>{{description}}</p>
     <button @click="$emit('update:modelValue',false)">Hide Modal</button>
     <!-- If we want to write emit in a function -->
    Username is-{{userData.name}}
    </div>
    </teleport>
    
    
</template>

<script setup>
import { inject } from 'vue';

const props=defineProps({
    
    modelValue:{
     type:Boolean,
     default:false

    },
     userData:{
    type:Object
  },
  title:{
    type:String,
    default:'No Title specified'
},
description:{
    type:String,
    default:'No Description specified'
}
});
//  const emit=defineEmits(['hideModal']);
const emit=defineEmits(['update:modelValue']);
// const handleClick=()=>{
//     emit('update:modelValue',false);
// }
const userData=inject('userData');
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