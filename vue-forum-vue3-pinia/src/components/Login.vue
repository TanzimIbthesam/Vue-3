<template>
<body class="bg-gray-100">
    <div class="flex justify-center items-center h-screen mx-auto">
        <div class="xl:w-1/3  w-full border border-none bg-white p-10 rounded-2xl border-box shadow-2xl">
            <div class="space-y-2 xl:ml-16 ml-0">
                <h1 class="text-xl font-serif font-medium">Click here to Login</h1>
                <form @submit.prevent="handleLogin">
                    
                
                 <label for="">Enter your email</label><br>
                <input type="text" v-model="store.email"  class="border-b-2 border-gray-300 w-4/5  py-1" name="" id=""><br>
                <label for=""> <p class="pt-2">Enter your password</p></label>
               
                <input type="password" v-model="store.password" class="border-b-2 border-gray-300  w-4/5 py-1" name="" id=""><br>
                <button class="px-6 py-1 bg-purple-600 text-white font-serif rounded-md ">Login</button><br>
                </form>
                <div class="mt-2">
                    <div class="mt-2">
                      <p @click="toggleLogin"  class="text-md font-serif font-light cursor-pointer">{{signupmessage}}</p><br>
                
                </div>
                <a class="text-md font-serif font-light" href="">Forgot password?</a>
                </div>
              
            </div>
        </div>
    </div>
    
</body>
  
</template>

<script setup>
import {authUserStore} from '@/store/index.js' 
import {useRouter} from 'vue-router'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '@/firebase/config.js'
import { ref } from 'vue';
const store=authUserStore();
const props=defineProps({
    signupmessage:{
        type:String,
        required:true
    }
})
const router=useRouter()
const emit=defineEmits('toggleLogin')
const email=ref('');
const password=ref('');
const toggleLogin=()=>{
    emit('toggleLogin')
}
const handleLogin=async()=>{
     store.login()
   
}
</script>

<style>
</style>