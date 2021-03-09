<template>
<div class="home">

  <Navbar />

  </div>

<body class="bg-gray-100">
    <div>
        <div class="max-w-5xl mx-auto p-4" v-for="authUserpost in authUserposts" :key="authUserpost.id">
       
        <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl">
            
             <router-link :to="{name:'fullpost',params:{id:authUserpost.id,title:authUserpost.title,description:authUserpost.description,user_name:authUserpost.user_name}}">
                 <p class="text-gray-600 font-serif text-2xl text-center px-4">{{authUserpost.title}}</p></router-link>
             <p class="text-gray-600 font-serif text-md  px-4">
                {{ authUserpost.description }}


            </p> 
            <p class="text-gray-600 font-serif text-md  px-4">Posted by-{{ authUserpost.user_name }} on 2/3/2021</p>
            <div class="flex justify-between">
                <div>
                       <span><span class="material-icons px-4 p-1 text-2xl text-blue-300">
               <router-link :to="{name:'fullpost',params:{id:authUserpost.id,title:authUserpost.title,description:authUserpost.description,user_name:authUserpost.description}}">
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
             
 <div v-if="isLoggedIn">
           <div  class="ml-4 xl:ml-0 block">
         
                <div>
                    <router-link :to="{name:'updatepost',params:{id:authUserpost.id,title:authUserpost.title,description:authUserpost.user_name}}">
                     <button class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">create</span></button>
                     
                    </router-link>
                    
                   
                      <button @click="deletePost(authUserpost.id)" class="px-1 py-1 bg-red-700 text-white font-sans rounded-md"><span class="material-icons">delete</span></button></div>
                    </div>
                   </div>
                   </div>
           

       
            
        </div>

        
     
    </div>

    </div>
       <div class="max-w-5xl mx-auto p-4" v-for="unauthUserpost in unauthUsersposts" :key="unauthUserpost.id">
       
        <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl">
             <!-- <router-link :to="{name:'individualpost',params:{id:unauthUserpost.id}}">
                 
            <p class="text-gray-600 font-serif text-2xl text-center px-4" href="">{{unauthUserpost.title}}</p>
             </router-link> -->
              <router-link :to="{name:'fullpost',params:{id:unauthUserpost.id,title:unauthUserpost.title,description:unauthUserpost.description,user_name:unauthUserpost.user_name}}">
                      
            <a class="text-gray-600 font-serif text-2xl text-center px-4" href="">{{unauthUserpost.title}}</a>
             </router-link>
            <p class="text-gray-600 font-serif text-md  px-4">
                {{ unauthUserpost.description }}


            </p>
            <p class="text-gray-600 font-serif text-md  px-4">Posted by-{{ unauthUserpost.user_name }} on 2/3/2021</p>
            <div class="flex justify-between">
                <div>
                       <span><span class="material-icons px-4 p-1 text-2xl text-blue-300">
               <router-link :to="{name:'fullpost',params:{id:unauthUserpost.id,title:unauthUserpost.title,description:unauthUserpost.description,user_name:unauthUserpost.user_name}}">

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
             
 <div >
           <div  class="ml-4 xl:ml-0 hidden">
         
                <div>
                    <button class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">create</span></button>
                      <button @click="deletePost(authUserpost.id)" class="px-1 py-1 bg-red-700 text-white font-sans rounded-md"><span class="material-icons">delete</span></button></div>
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
            isLoggedIn:false,
            isCurrentUser:false,
           title:'',
           description:'',
           id:'',
            
            unauthUsersposts:[],
            
        }
    },
    methods:{
//            getPosts() {
//     let postsRef= 
//      db.collection("posts");

   
// },
     deletePost(id){
     const newpost=db.collection("posts")
       .doc(id);
        newpost.delete();
    
       
     }
    },
     
      
    created() {
    let postsRef=db.collection("posts");
   postsRef.onSnapshot(snap => {
        this.authUserposts = [];
        this.unauthUsersposts = [];
        snap.forEach(doc => {
            var data = doc.data();
            console.log(data);
              data.id = doc.id;
             console.log(data.id);
            //  console.log(auth.currentUser.email);
             console.log(data.user_email);
             if(auth.currentUser){
                 this.isLoggedIn=true;
                  if(auth.currentUser.email == data.user_email){
                this.authUserposts.push(data);
                
                
            }else{

                     this.unauthUsersposts.push(data);
            }
            
                
             }else{
                 this.isLoggedIn=false;
                //  this.authUserposts.push(data);
                  this.unauthUsersposts.push(data);
             }
            
           
           console.log(this.$route.params.id);
           
            
            
        });
    });
   

    
          
    
    
   
      
             
           
  
       
 
    
},
 
  
    components:{
        Navbar,
        
    },
  
                  
       
         }
    
</script>

<style>
</style>

