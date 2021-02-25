<template>
<div class=" border border-gray-200 rounded-xl p-8 mt-2">
           <h1 class="text-md font-bold font-serif">Username</h1><span>{{username}}</span>
          
           <h1 class="text-md font-bold font-serif">Bio</h1>
           <span class="text-md font-medium font-serif">{{bio}}</span><br>
           <button class="px-4 py-1 bg-green-300 text-white font-serif mt-2">Edit</button>
        </div>
  
</template>

<script>
import { auth, db } from '../../firebase/config';
export default {
        data() {
                return {
                        username:'',
                        bio:''
                }
        },
            mounted(){
       
        let user=auth.currentUser;
        if(user){

       db.collection("users").doc(auth.currentUser.uid)
  .get()
  .then(doc=>{
      if(doc.exists){
          const data=doc.data();
          console.log(data.userName);
          console.log(data.bio);
          this.username=data.userName;
          this.bio=data.bio;
      }else{
          console.log("Doc does not exists");
      }
  }) 
        }
       
   

    },

}
</script>

<style>

</style>