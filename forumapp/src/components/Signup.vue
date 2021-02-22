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

import { auth } from '../firebase/config'
// import Navbar from '../views/Navbar'
// import { ref } from 'vue'

export default {
    props:['loginmessage'],
//     setup() {
//          const { error, signup } = useSignup()
//     // refs
//     const userName = ref('')
//     const email = ref('')
//     const password = ref('')

//     // useSignup
   

//     const handleSubmit = async () => {
//       await signup(email.value, password.value, userName.value)
//       console.log('user signed up')
//     }

//     return { userName, email, password, handleSubmit }
//   }
data() {
    return {
        email:'',
        password:'',
        userName:''
    }
  
},
  methods: {
      toggleSignup(){
          this.$emit('toggleSignup')
      },
   async   handleSubmit(){
       try {
            const user=await auth.createUserWithEmailAndPassword(this.email,this.password);
            
            console.log(user);
if(user){
     this.$router.replace({name:'Posts'})

            }

            
           
            return user;
            
            
           
       } catch (error) {
           console.log(error);
           
       }
      
      

      }
        
    },
}
   


</script>

<style>

</style>