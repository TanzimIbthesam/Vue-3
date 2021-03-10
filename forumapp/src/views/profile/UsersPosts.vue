<template>
  <div class="xl:max-w-5xl  mx-auto" v-for="allpost in allposts" :key="allpost.id">
         <div class="border border-gray-300 rounded-md space-x-4 flex flex-col justify-center py-5 mt-4" >
             <router-link :to="{name:'fullpost',params:{id:allpost.id,title:allpost.title,description:allpost.description}}">
             <h1 class="text-xl font-medium font-serif pl-4">{{allpost.title}}</h1>
               </router-link>
               <p class="text-md font-medium font-serif">{{allpost.description}}</p>
           
             
                 <div class="xl:flex xl:flex-row sm:flex sm:flex-col justify-between w-11/12">
                  <div>
                          <p class="font-serif px-4 text-xl text-gray-600 py-1">Posted on 10/03/2020 by <a href="">{{allpost.user_name}}</a> </p>
                  </div>
                  <div class="ml-4 xl:ml-1">
                       <!-- <button  class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">
create
</span></button>  -->
           <router-link :to="{name:'updatepost',params:{id:allpost.id,title:allpost.title,description:allpost.description}}">
            <button class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">create</span></button>
            </router-link> 
            <button @click="deletePost(allpost.id)" class="px-1 py-1 bg-red-700 text-white font-sans rounded-md ml-1"><span class="material-icons">
           delete
          </span></button>
            </div>

              </div>
         </div>
         
        

      </div>
</template>
<script>
import { auth, db } from '../../firebase/config'
export default {
data() {
    return {
        title:'',
        description:'',
        allposts:[]
        
    }
},
methods:{
    deletePost(id){
        console.log("clicked");
     const newpost=db.collection("posts")
       .doc(id);
       newpost.delete();
       
     }

},
created() {
          
 let postsRef=db.collection("posts");

 postsRef.onSnapshot((snap)=>{
     this.allposts=[];
     snap.forEach((doc)=>{
         let data=doc.data();
         data.id=doc.id;
         if(auth.currentUser.email == data.user_email){
                this.allposts.push(data);

            }
         
     })
 })


  
 
    
}
}
</script>

<style>

</style>