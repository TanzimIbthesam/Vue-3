<template>
  <div class="xl:max-w-5xl  mx-auto" v-for="allpost in allposts" :key="allpost">
         <div class="border border-gray-300 rounded-md space-x-4 flex flex-col justify-center py-5 mt-4" >
             <h1 class="text-xl font-medium font-serif pl-4">{{allpost.title}}</h1>
             <p class="text-md font-medium font-serif">{{allpost.description}}</p>
                 <div class="xl:flex xl:flex-row sm:flex sm:flex-col justify-between w-11/12">
                  <div>
                          <p class="font-serif px-4 text-xl text-gray-600 py-1">Posted on 10/03/2020 by <a href="">John Doe</a> </p>
                  </div>
                  <div class="ml-4 xl:ml-1">
                      <button class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">
create
</span></button>
                      <button class="px-1 py-1 bg-red-700 text-white font-sans rounded-md ml-1"><span class="material-icons">
delete
</span></button>
                  </div>

              </div>
         </div>
         <!-- <div class="border border-gray-300 rounded-md space-x-4 flex flex-col justify-center py-5 mt-4">
             <h1 class="text-xl font-medium font-serif text-center">{{title}}</h1>
             <p class="text-md font-medium font-serif">{{description}}</p>
                 <div class="xl:flex xl:flex-row sm:flex sm:flex-col justify-between w-11/12">
                  <div>
                          <p class="font-serif px-4 text-xl text-gray-600 py-1">Posted on 10/03/2020 by <a href="">John Doe</a> </p>
                  </div>
                  <div class="ml-4 xl:ml-1">
                      <button class="px-1 py-1  bg-green-300 font-sans rounded-md "><span class="material-icons">
create
</span></button>
                      <button class="px-1 py-1 bg-red-700 text-white font-sans rounded-md ml-1"><span class="material-icons">
delete
</span></button>
                  </div>

              </div>
         </div> -->
        

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
mounted() {
           let userEmail=auth.currentUser.email;
           console.log();
 db.collection("posts")
.where("user_email", "==", userEmail)
    .get()
    
    .then(querySnapshot=>{
        querySnapshot.forEach((doc)=>{
            console.log(doc.id, " => ", doc.data());
            let data=doc.data();
            this.title=data.title;
            this.description=data.description;
            console.log(data.description);
            console.log(data.title);
              this.allposts.push(data);
        })

    })
  
 
    
}
}
</script>

<style>

</style>