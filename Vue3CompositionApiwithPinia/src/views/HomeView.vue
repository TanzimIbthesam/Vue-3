<template>
  <div>
    <button @click="increaseCounter">Increase Counter</button>
    Counter-{{counter}}
  </div>
</template>

<script setup>
import { ref } from "vue";
const counter=ref(0);
const increaseCounter=()=>{
      counter.value++
  }
</script>

<style>

</style>