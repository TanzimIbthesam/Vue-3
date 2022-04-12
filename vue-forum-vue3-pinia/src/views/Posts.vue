<template>
   <div>
      Posts
       </div> 
</template>
<script setup>
import { onMounted } from 'vue'
import {onAuthStateChanged} from 'firebase/auth'
import  { auth } from '@/firebase/config.js'
import {authUserStore} from '@/store/index.js' 
import { getAuth } from "firebase/auth";

const store=authUserStore();
onMounted(()=>{
const auth = getAuth();
 
  // console.log(user);
 onAuthStateChanged(auth,(user)=>{
   if(user){
     console.log("User there",auth.currentUser);
   }else{
     console.log("User not there");
   }
 })
// onAuthStateChanged(auth, (user) => {
                
//                   if(user){
//                       console.log(auth.currentUser);
                       
                      
//                   }else{
//                      console.log("Unauth");
                      
//                   }
//                 })
    

})


</script>
