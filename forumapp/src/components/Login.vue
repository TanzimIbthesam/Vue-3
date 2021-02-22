<template>
<body class="">
  
    
 
       <div class="flex justify-center items-center h-screen mx-auto">
        <div class="xl:w-1/3  w-full border border-none bg-white p-10 rounded-2xl border-box shadow-2xl">
            <div class="space-y-2 xl:ml-16 ml-0">
                <h1 class="text-xl font-serif font-medium">Click here to Login</h1>
                <form action="" ></form>
                 <label for="">Enter your email</label><br>
                <input type="email" v-model="email" class="border-b-2 border-gray-300 w-4/5  py-1" name="" id=""><br>
                <label for=""> <p class="pt-2">Enter your password</p></label>
               
                <input type="password" v-model="password" class="border-b-2 border-gray-300  w-4/5 py-1" name="" id=""><br>
                <button @click.prevent="logIn" class="px-6 py-1 bg-purple-600 text-white font-serif rounded-md ">Login</button><br>
               <div class="mt-2">
                      <p @click="toggleLogin" class="text-md font-serif font-light cursor-pointer" href="" >{{signupmessage}}-</p><br>
                      <!-- Dont have account? Signup -->
                <!-- <a class="text-md font-serif font-light" href="">Forgot password?</a> -->
                </div> 
              
            </div>
        </div>
    </div>
  

 

  
   
    
</body>
  
</template>

<script>
import { auth } from '../firebase/config';
// import Navbar from '../views/Navbar'


export default {
    props:['signupmessage'],
    name:'Login',
    data() {
        return {
            email:'',
            password:'',
            userName:''
           
        }
    },

    components:{
       
      
      
        
    },
   

    methods:{
        toggleLogin(){
            this.$emit('toggleLogin');
        },
      async  logIn(){
         
             try {
            const user=await auth.signInWithEmailAndPassword(this.email,this.password);
            
            console.log(user);
if(user){
     this.$router.replace({name:'Posts'})

            }

            
           
            return user;
            
            
           
       } catch (error) {
           console.log(error);
           
       }
       
        }
      
    }

}
</script>

<style>

</style>