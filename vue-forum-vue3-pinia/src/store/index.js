import { defineStore } from "pinia";
import  {auth}  from '@/firebase/config.js'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

import router from '../router/index.js'
export  const authUserStore=defineStore({
    id:'authusestore',
    state:()=>{
        return{
            email:'',
            password:''
        }
    },
    actions:{
      async handleSubmit(){
          
            try {
                const auth=getAuth();
                 
                const user=await createUserWithEmailAndPassword(auth,this.email,this.password);
                if(user){
                    router.push('/')
                    
                }
                
             } catch (error) {
                 console.log(error);
             }
             
        }
    }


});