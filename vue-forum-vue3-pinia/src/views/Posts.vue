<template>
   <div>
      Posts
       </div> 
</template>
<script setup>
import { onMounted,ref } from 'vue'
import {onAuthStateChanged} from 'firebase/auth'
import  { auth } from '@/firebase/config.js'
import {authUserStore} from '@/store/index.js' 
import { getAuth } from "firebase/auth";


const store=authUserStore();
 

onMounted(()=>{
   console.log("posts");
})

</script>
