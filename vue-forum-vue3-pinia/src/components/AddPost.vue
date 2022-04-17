<template>
<body class="">


     <div class="flex justify-center items-center h-screen xl:-mt-32 ">
           <div class="xl:w-1/4  w-full  bg-white p-3 rounded-xl border-box shadow-2xl">

            <div class=" xl:ml-16 ml-0 space-y-1">
                    
                     <AddEditPostVue 
                     
                     
                      v-model:title="title"
                      v-model:description="description"
                      />
                      <button  
                       @click.prevent="addPost"
                      class="px-8 py-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-xl font-medium font-serif"
                    >Send</button>
                 Title-{{title}}
            </div>
        </div>
    </div>
</body>
  
</template>

<script setup>
import { ref,onMounted } from "vue";
import {collection,addDoc} from "firebase/firestore"
import {db} from '@/firebase/config.js'
import { useRouter } from "vue-router";
 import { getAuth, onAuthStateChanged } from "@firebase/auth";
 import AddEditPostVue from "@/components/reuseable/AddEditPost.vue";
// import {auth} from '@/firebase/config'
const title=ref('')
const router=useRouter();
const description=ref('');
const user_id=ref('')
 const auth=getAuth();
 

const addPost=async()=>{
        
   try {
    await addDoc(collection(db, "posts"), {
    title:title.value,
     description:description.value,
   
      
      
    
 },
 router.push('/')
 );
   } catch (error) {
    console.log(error);
 }
    }
onMounted(()=>{
    onAuthStateChanged(auth, (user) => {
                 
                  if(user != null){
                   
                    console.log(auth.currentUser);
                      user_id.value=auth.currentUser.uid
                      console.log(user_id.value);
                   
                    
                      }
                       
                      
                  else{
                      console.log("Not");
                      
                  }
                })
     
  
})
</script>

<style>
</style>