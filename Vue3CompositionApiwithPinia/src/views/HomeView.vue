<template>
  <div>
             <!-- <button @click="increaseCounter">Increase Counter</button>
             Counter-{{counter}} -->
              <input type="text" v-model="title" v-focus/> 
              <!-- <h2>{{title}}</h2>
             {{title}} -->
             <h1>{{titleRef}}</h1>
             
    
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import vFocus from '../directives/vFocus.js';
const title=ref(null);
const titleRef='My app title';
titleRef.style="color:green";
onMounted(()=>{
  console.log(titleRef);
 
})


</script>

<style>
 
</style>