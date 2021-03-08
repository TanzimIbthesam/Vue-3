<template>
<body class="bg-gray-100">
<Navbar />

     <div class="flex justify-center items-center h-screen xl:-mt-32 ">
           <div class="xl:w-1/4  w-full  bg-white p-3 rounded-xl border-box shadow-2xl">

            <div class=" xl:ml-16 ml-0 space-y-1">
                    <h1 >{{title}}</h1>
                    <form action="" @submit.prevent="updatePost(id)">
                           <label for="" class="text-xl font-semibold">Enter your title</label><br>
               
                  <input type="text" v-model="title" class="border border-b-2 border-gray-200  py-1 w-5/6 rounded-md" name="" id=""><br>
               <label class="block">
  <span class="text-gray-700 text-xl font-semibold">Enter your description</span>
  <textarea v-model="description" class="form-textarea mt-1 block w-10/12 border border-gray-300 rounded-md " rows="12" cols="8" placeholder="Enter your description"></textarea>
</label><br>

<button class="px-8 py-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-xl font-medium font-serif">Send</button>

                    </form>
                   
              
            </div>
        </div>
    </div>
</body>
  
</template>

<script>
import { auth, db } from '../firebase/config'
import Navbar from '../views/Navbar'
export default {
    components:{
        Navbar
    },
    data() {
        return {
            id:this.$route.params.id,
            title:this.$route.params.title,
            description:this.$route.params.description,
            post:'',
            
           
        }
    },
     created(){
       let dbRef = db.collection('posts').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.post = doc.data();
                console.log(doc.data());
            }).catch((error) => {
                console.log(error)
            })
  
        
       
   
        },
    methods: {
        updatePost(){
            // let uid=auth.currentUser.uid;
            // let userEmail=auth.currentUser.email;
         db.collection("posts")
        .doc(this.$route.params.id)   
         .update(this.post)
         .then(()=>{
             console.log("Post updated");

         }).catch(err=>{
             console.log(err);
         })
            // this.$router.replace({name:'Posts'})
        }
    },
       
}

</script>

<style>
</style>