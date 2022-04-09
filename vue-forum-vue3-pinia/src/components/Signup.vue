<template>

  
    <div class="flex justify-center items-center h-screen mx-auto">
        <div class="xl:w-1/3  w-full border border-none bg-white p-10 rounded-2xl border-box shadow-2xl">
            <div class="space-y-2 xl:ml-16 ml-0">
                <h1 class="text-xl font-serif font-medium">Sign up</h1>
                <form @submit.prevent="handleSubmit">
                  <label for="">Enter your email</label><br>
                <input type="text" v-model="email" class="border-b-2 border-gray-300 w-4/5  py-1" name="" id=""><br>
                <label for=""> <p class="pt-2">Enter your password</p></label>
               
                <input type="password" v-model="password" class="border-b-2 border-gray-300  w-4/5 py-1" name="" id=""><br>
                <button class="px-6 py-1 bg-purple-600 text-white font-serif rounded-md ">SignUp</button><br>
                </form>
                 
                <div class="mt-2">
                      <p @click="toggleSignup"  class="text-md font-serif font-light cursor-pointer" >{{loginmessage}}</p><br>
                
                </div>
              
            </div>
        </div>
    </div>
    

  
</template>


<script setup>
import { ref } from 'vue';
import  {auth}  from '../firebase/config.js'
import {useRouter} from 'vue-router';
import {createUserWithEmailAndPassword} from 'firebase/auth'
const email=ref('');
const password=ref('');
const router=useRouter();
const props=defineProps({
    loginmessage:{
        type:String,
        required:true
    }
})
const emit=defineEmits('toggleSignup')

const toggleSignup=()=>{
    emit('toggleSignup')
}

const handleSubmit=async()=>{
    try {
       const user=await createUserWithEmailAndPassword(auth, email.value, password.value)
       if(user){
           router.replace({name:'posts'})
       }
    } catch (error) {
        console.log(error);
    }
  
  
 
}
</script>

<style>
</style>