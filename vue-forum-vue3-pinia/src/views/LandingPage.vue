
<template>
<body>
    <div>
           <!-- <Navbar /> -->
    </div>
    
   
<Signup v-if="activeTab==='Signup' " :loginmessage="loginmessage" @toggleSignup="toggleLogin()"/> 
    <Login v-if="activeTab==='Login'" :signupmessage="signupmessage" @toggleLogin="toggleSignup()"  />
</body>



  
</template>



<script setup>
import {ref} from 'vue';
import Login from '@/components/Login.vue'
 import Signup from '@/components/Signup.vue'
 
 const activeTab=ref('Login')
 const loginmessage=ref('Already have an account? Login');
 const signupmessage=ref('Dont have an account?Signup');

 const toggleSignup=()=>{
     activeTab.value='Signup'
 }

 const toggleLogin=()=>{
     activeTab.value='Login'
 }

</script>
<style>
</style>