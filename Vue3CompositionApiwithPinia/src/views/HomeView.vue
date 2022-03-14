<template>
  <div>
    <!-- Non reactive data -->
 
    
    <button @click="increaseCounterAmount(5)">Increase Counter</button>
    Counter-{{counter}}
    <!-- 2 way data binding -->
    It is-{{oddorEven}}
    
  </div>
</template>

<script setup>
import {  computed, ref, watch } from "vue";
const counter=ref(0),title=ref("Counter Title")

const increaseCounterAmount=amount=>{
  console.log("clicked");
      return counter.value+=amount
}
//Computed property 
const oddorEven=computed(()=>{
  if(counter.value%2 === 0) return "It is odd";
  return "it is even";
})

watch(counter,(newCount,oldCount)=>{
       console.log(oldCount);
       
    if(newCount===20){
      alert("your count is 20")
    }
})
</script>

<style>
 
</style>