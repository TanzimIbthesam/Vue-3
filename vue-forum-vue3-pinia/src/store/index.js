import { defineStore } from "pinia";
import  { auth } from '@/firebase/config.js'
//You can also write 
// import {createUserWithEmailAndPassword,getAuth} from 'firebase/auth'
 import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged


} from 'firebase/auth'

import router from '@/router/index.js'
export  const authUserStore=defineStore({
    id:'authusestore',
    state:()=>{
        return{
            email:'',
            password:'',
            isLoggedIn:false,
            user:null
        }
    },
    actions:{
      async signup(){
          
            try {
                //  const auth=auth();
                 
                const user=await createUserWithEmailAndPassword(auth,this.email,this.password);
                
                if(user){
                    router.push('/')
                    
                }
               
             } catch (error) {
                 console.log(error);
             }
             
        },
        async login(){
            try {
                const res=await signInWithEmailAndPassword(auth,this.email,this.password)
                if(res){
                    router.push('/')
                    
                }
            } catch (error) {
                console.log(error);
            }
        },
        async logout(){
            
                await signOut(auth)
                router.push('/login')
                this.email=''
                this.password=''
           
        },
         fetchUser(){
            onAuthStateChanged(auth, (user) => {
                
                  if(user){
                      this.user=user
                      this.isLoggedIn=true
                    //   console.log(this.user.currentUser);
                      if (router.isReady() && router.currentRoute.value.path === '/login') {
                        router.push('/')
                      }
                       
                      
                  }else{
                      this.isLoggedIn=false;
                      
                  }
                })
        }
        
    }


});