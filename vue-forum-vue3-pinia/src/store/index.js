import router from '@/router/index.js'
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


export  const authUserStore=defineStore({
    id:'authusestore',
    state:()=>{
        return{
            email:'',
            password:'',
            isLoggedIn:false,
            user:auth.currentUser
            
        }
    },
    actions:{
      async signup(){
          
            try {
                //  const auth=auth();
                 
                const user=await createUserWithEmailAndPassword(auth,this.email,this.password);
                
                if(user){
                    router.replace({name:'posts'})
                    
                }
               
             } catch (error) {
                 console.log(error);
             }
             
        },
        async login(){
            try {
                const res=await signInWithEmailAndPassword(auth,this.email,this.password)
                if(res){
                    router.replace({name:'posts'})
                    
                }
            } catch (error) {
                console.log(error);
            }
        },
        async logout(){
            
                await signOut(auth)
                router.replace({name:'login'})
                this.email=''
                this.password=''
           
        },
         fetchUser(){
            onAuthStateChanged(auth, (user) => {
                 
                  if(user != null){
                    this.user=user
                    console.log(this.user);
                    console.log(auth.currentUser);
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