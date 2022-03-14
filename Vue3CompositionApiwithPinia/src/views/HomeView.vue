<template>
  <div>
             <button @click="increaseCounter">Increase Counter</button>
             Counter-{{counter}}
    
  </div>
</template>

<script setup>
import { onActivated, onBeforeMount, onBeforeUnmount, onDeactivated, onMounted, onUnmounted } from "@vue/runtime-core";
import { onBeforeUpdate, onUpdated, ref } from "vue";
const counter=ref(0);

const increaseCounter=()=>{
  counter.value++
}

//At time an event is triggered like a click event
onBeforeUpdate(()=>{
  console.log("On before update");
})
onUpdated(()=>{
    console.log("Updated");
})
onBeforeMount(()=>{
  console.log("On Before mount");
})
onMounted(()=>{
  console.log("On Mount");
})

onBeforeUnmount(()=>{
  console.log("Before unmount");
})
onUnmounted(()=>{
  console.log("Unmounted");
})
onActivated(()=>{
  console.log("On Activated");
})
onDeactivated(()=>{
  console.log("On Deactivateddd");
})

 

</script>

<style>
 
</style>