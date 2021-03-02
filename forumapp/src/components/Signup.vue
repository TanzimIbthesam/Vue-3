<template>

  
    <div class="flex justify-center items-center h-screen mx-auto">
        <div class="xl:w-1/3  w-full border border-none bg-white p-10 rounded-2xl border-box shadow-2xl">
            <div class="space-y-2 xl:ml-16 ml-0">
                <h1 class="text-xl font-serif font-medium">Click here to Signup</h1>
                <form @submit.prevent="handleSubmit" action="">
                      <label for="">Enter your email</label><br>
                <input type="email" v-model="email" class="border-b-2 border-gray-300 w-4/5  py-1" name="" id=""><br>
                <label for=""> <p class="pt-2">Enter your password</p></label>
               
                <input type="password" v-model="password" class="border-b-2 border-gray-300  w-4/5 py-1" name="" id=""><br>
                <label for="">Enter your username</label><br>
                <input type="text" v-model="userName" class="border-b-2 border-gray-300 w-4/5  py-1" name="" id=""><br>
                
                <label for="">Enter your bio</label><br>
                <input type="text" v-model="bio" class="border-b-2 border-gray-300 w-4/5  py-1" name="" id=""><br>
               
                <button class="px-6 py-1 bg-purple-600 text-white font-serif rounded-md mt-3">SignUp</button><br>
                <div class="mt-2">
                      <p @click="toggleSignup"  class="text-md font-serif font-light cursor-pointer" href="">{{loginmessage}}</p><br>
                
                </div>

                </form>
               
              
            </div>
        </div>
    </div>
    

  
</template>

<script>

import { auth, db } from '../firebase/config'
// import Navbar from '../views/Navbar'
// import { ref } from 'vue'
import Signup from '../composables/Signup'

export default {
    props:['loginmessage'],

data() {
    return {
        email:'',
        password:'',
        userName:'',
        bio:''
    }
  
},
  methods: {
      toggleSignup(){
          this.$emit('toggleSignup')
      },
      
   async handleSubmit(){
       try{
            const res=await auth.createUserWithEmailAndPassword(this.email,this.password);
       let newusername = await db.collection('users')
       .doc(auth.currentUser.uid)
            .set({
                userName:this.userName,
                bio:this.bio
            })
            
           
            console.log(res,newusername);
          if(res){
              this.$router.replace({name:'Posts'})
            }
            return res,newusername;
            }catch (error){
           console.log(error);
           }
      
      

      }

        
    },
    computed:{
        async signup(){
            
        }
    }
}
   


</script>

<style>

</style>