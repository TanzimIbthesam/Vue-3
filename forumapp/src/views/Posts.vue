
<template>
<div class="home">

  <Navbar />

  </div>

<body class="bg-gray-100">
    <div>
        <div class="max-w-5xl mx-auto p-4" v-for="authUserpost in authUserposts" :key="authUserpost">
       
        <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl">
             <router-link :to="{name:'individualpost'}">
                 
            <p class="text-gray-600 font-serif text-2xl text-center px-4" href="">{{authUserpost.title}}</p>
             </router-link>
            <p class="text-gray-600 font-serif text-md  px-4">
                {{ authUserpost.description }}


            </p>
            <p class="text-gray-600 font-serif text-md  px-4">Posted by-{{ authUserpost.user_name }} on 2/3/2021</p>
            <div class="flex justify-between">
                <div>
                       <span><span class="material-icons px-4 p-1 text-2xl text-blue-300">
             <router-link :to="{name:'individualpost'}">

                    <p class="text-2xl" href="">comment_bank</p>
             </router-link>
                    </span>
                    </span>


                <span>
                    <span class="material-icons">
thumb_up 
</span>
                </span>
                 <span>
                    <span class="material-icons">
thumb_down
</span>
</span>

                </div>
             
 <div>
           <div class="ml-4 xl:ml-0 ">
         
                <div>
                                        <button class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">
create
</span></button>
                      <button class="px-1 py-1 bg-red-700 text-white font-sans rounded-md"><span class="material-icons">
delete
</span></button>

                </div>
   
                  </div>
 </div>
            </div>
           

       
            
        </div>
     
    </div>

    </div>
    
        <div class="max-w-5xl mx-auto p-4" v-for="unauthUserspost  in   unauthUsersposts" :key="unauthUserspost">
       
        <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl">
             <router-link :to="{name:'individualpost'}">
                 
            <p class="text-gray-600 font-serif text-2xl text-center px-4" href="">{{unauthUserspost.title}}</p>
             </router-link>
            <p class="text-gray-600 font-serif text-md  px-4">
                {{ unauthUserspost.description }}


            </p>
            <p class="text-gray-600 font-serif text-md  px-4">Posted by-{{ unauthUserspost.user_name }} on 2/3/2021</p>
            <div class="flex justify-between">
                <div>
                       <span><span class="material-icons px-4 p-1 text-2xl text-blue-300">
             <router-link :to="{name:'individualpost'}">

                    <p class="text-2xl" href="">comment_bank</p>
             </router-link>
                    </span>
                    </span>


                <span>
                    <span class="material-icons">
thumb_up 
</span>
                </span>
                 <span>
                    <span class="material-icons">
thumb_down
</span>
</span>

                </div>
             
 <div>
           <div class="ml-4 xl:ml-0 hidden" >
      
                <div v-if="currentUserPosts">
                                        <button class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">
create
</span></button>
                      <button class="px-1 py-1 bg-red-700 text-white font-sans rounded-md"><span class="material-icons">
delete
</span></button>

                </div>
   
                  </div>
 </div>
            </div>
           

       
            
        </div>
     
    </div>

    
        

    
</body>
  
</template>
<script>
import { auth, db } from '../firebase/config';
import Navbar from './Navbar';

export default {
    data() {
        return {
            // username:''
            authUserposts:[],
            
            unauthUsersposts:[],
        }
    },
      computed:{
//  
      },
    created() {
     

      let user=auth.currentUser;
     
      if(user){
           console.log(user.email);
          console.log("Current user is authenticated");
      }else{
          console.log("Current user is not authenticated");
      }
             db.collection("posts")

    .get()
    
    .then(querySnapshot=>{
        querySnapshot.forEach((doc)=>{
          
        //     let data=doc.data();
            
        //    console.log(data);
         
        //    console.log(auth.currentUser.email);
        //    console.log(data.user_email);
         
        //    if(auth.currentUser.email !== data.user_email){
               
              
               
        //         this.currentUserPosts=false;
              
                


        //    }
         let data=doc.data();
             
            if(auth.currentUser){
                 if(auth.currentUser.email == data.user_email){
                 
               
                this.authUserposts.push(data)
             
               
               
                


           }else{
              
               this.unauthUsersposts.push(data)
              
           }

            }
             

             
              
        })

    });

    
    

   

      
             
           
  
       

 
    
},
 

  
    components:{
        Navbar,
        
    },
  
                  
       

         }
    


</script>

<style>

</style>