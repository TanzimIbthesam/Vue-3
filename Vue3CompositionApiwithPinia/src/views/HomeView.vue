<template>
  <div>
             <!-- <button @click="increaseCounter">Increase Counter</button>
             Counter-{{counter}} -->
              <input type="text" v-model="title" v-focus/> 
             {{title}}
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import vFocus from '../directives/vFocus.js';
const title=ref("Hello");

</script>

<style>
 
</style>