<template>
<body>
    <div>
           <Navbar />
    </div>
    
   
<Signup v-if="activeTab==='Signup' " :loginmessage="loginmessage" @toggleSignup="toggleLogin()"/> 
    <Login v-if="activeTab==='Login'" :signupmessage="signupmessage" @toggleLogin="toggleSignup()"  />
</body>



  
</template>

<script>
import Login from '../components/Login'
import Signup from '../components/Signup'

import Navbar from './Navbar';

export default {
  
    components:{
        Login,
        Signup,
        Navbar
        
    },
    data() {
        return {
            loginmessage:'Have an account aready?Login',
            signupmessage:'Dont have an account?Signup',
            activeTab:'Login'
          
        }
    },
    methods: {
        toggleSignup(){
            console.log("clicked");
        //   this.ActiveTab='Signup'
        this.activeTab='Signup'
         
            
            
        
        },
        toggleLogin(){
            this.activeTab='Login'
        }
    },

}
</script>

<style>

</style>