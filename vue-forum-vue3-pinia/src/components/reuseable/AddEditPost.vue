<template>
                        
                           <label for="" class="text-xl font-semibold">Enter your title</label><br>
               
                  <input type="text" 
                  :value="title"
                  @input="$emit('update:title',$event.target.value)"
                  
                  class="border border-b-2 border-gray-200  py-1 w-5/6" name="" id=""><br>
               <label class="block">
  <span class="text-gray-700 text-xl font-semibold">Enter your description</span>
  <textarea 
  :value="description"
  @input="$emit('update:description',$event.target.value)"
  class="form-textarea mt-1 block w-10/12 border border-gray-300 " rows="12" cols="8" placeholder="Enter your description"></textarea>
</label><br>
<input type="file" class="">

                      
                    
             
</template>

<script setup>
import {collection,addDoc} from "firebase/firestore"
import {db} from '@/firebase/config.js'
import { useRouter } from "vue-router";
const router=useRouter();

const props=defineProps({
    title:{
        type:String
    },
    description:{
        type:String
    }
})

    const addPost=()=>{
        console.log("Add Post",props.title);
//   try {
//     await addDoc(collection(db, "posts"), {
//     title:props.title,
//     description:props.description,
   
      
      
    
// },
// router.push('/')
// );
//   } catch (error) {
//     console.log(error);
// }
    }

</script>

<style>

</style>