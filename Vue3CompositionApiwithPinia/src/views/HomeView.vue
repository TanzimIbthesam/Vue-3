<template>
  <div>
             <button @click="increaseCounter(10)">Increase Counter</button>
             Counter-{{counter}} 
               <input type="text" v-model="title" v-Focus/>  
               <h2>{{appTitle}}</h2>
             <h1 ref="appTitleRef">{{appTitle}}</h1>
             
    
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
 import vFocus from '../directives/vFocus.js';
  const title=ref(null);
  const counter=ref(0);
const appTitle='My app title';

const appTitleRef=ref(null);
appTitleRef.style="color:green"
 const increaseCounter=async(amount)=>{
  counter.value+=amount;
  await nextTick();
  console.log("Hello this is mounted to DOM");
  //If not async function 
  nextTick(()=>{
    console.log("Hello this is mounted to DOM");
  })
}
onMounted(()=>{
  console.log(`The app title width is ${appTitleRef.value.offsetWidth} `);
  console.log(appTitleRef.value);
 
})


</script>

<style>
 
</style>