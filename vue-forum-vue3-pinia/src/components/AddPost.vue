<template>
<body class="">


     <div class="flex justify-center items-center h-screen xl:-mt-32 ">
           <div class="xl:w-1/4  w-full  bg-white p-3 rounded-xl border-box shadow-2xl">

            <div class=" xl:ml-16 ml-0 space-y-1">
                    <form @submit.prevent="addPost">
                      <label for="" class="text-xl font-semibold">Enter your title</label><br>
               
                  <input type="text" v-model="title" class="border border-b-2 border-gray-200  py-1 w-5/6" name="" id=""><br>
               <label class="block">
  <span class="text-gray-700 text-xl font-semibold">Enter your description</span>
  <textarea v-model="description" class="form-textarea mt-1 block w-10/12 border border-gray-300 " rows="12" cols="8" placeholder="Enter your description"></textarea>
</label><br>
<input type="file" class="">
<button class="px-8 py-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-xl font-medium font-serif">Send</button>
              </form>
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
    user_id:user_id.value
      
      
    
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