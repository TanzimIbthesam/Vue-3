<template>
  <button  @click="activateIsYes" class="bg-transparent bg-white border border-gray-600 h-6 rounded-full px-1 w-12">
       <!-- <div class="bg-black h-4 w-4 border rounded-full ml-4"></div> -->
       <!-- <div  class="bg-black h-4 w-4 border rounded-full ml-4"></div> -->
       <div v-bind:class="[isYes ? 'bg-black h-4 w-4 border rounded-full ml-4': 'bg-black h-4 w-4 border rounded-full']">

       </div> 
       <div v-if="isYes">Paid</div>
       <div v-else>Not Paid</div>
  </button>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    // data(){
    //     return{
    //         isYes:false
    //     }
    // },
    // methods:{
    //     activateIsYes(){
    //         this.isYes =! this.isYes
    //     }
    // }
    //With Composition Api
    setup(){
        const isYes=ref(false)

        const activateIsYes=()=>{
          return isYes.value =! isYes.value
        }

        return {isYes,activateIsYes}
    }
    
}
</script>

<style>

</style>