<template>
  <div>
             <button @click="increaseCounter(10)">Increase Counter</button>
             Counter-{{counterData.counter}} 
               <input type="text" v-model="title" v-Focus/>  
               <!-- <h2>{{appTitle}}</h2> -->
             <!-- <h1 ref="appTitleRef">{{appTitle}}</h1> -->
              <p>Odd or even-{{oddorEven}}</p>
    
  </div>
</template>

<script setup>

 import {useCounter} from '../use/useCounter.js'
 import vFocus from '../directives/vFocus.js';
  // const title=ref(null);
  // const counter=ref(0);
 
  const {counterData,oddorEven,increaseCounter}=useCounter();

</script>

<style>
 
</style>