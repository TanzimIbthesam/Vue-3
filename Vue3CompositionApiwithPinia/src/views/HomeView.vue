<template>
  <div>
    <!-- Non reactive data -->
    {{nonreacttitle}}
    Title-{{counterData.title}}
    <button @click="increaseCounter">Increase Counter</button>
    Counter-{{counterData.counter}}
    <!-- 2 way data binding -->
    <input type="text" v-model="counterData.title" name="" id="">
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const counter=ref(0),title=ref("Counter Title")
//Mot reactive data
const nonreacttitle="Title non react"
const increaseCounter=()=>{
      // counter.value++
      // title.value="Title changed"
      counterData.counter++;
      counterData.title="Title changed"
  }
const counterData=reactive({
    counter:0,
    title:'Counter Title'
})
</script>

<style>
 
</style>