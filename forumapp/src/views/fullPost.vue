<template>
  <body class="bg-gray-100">
     <Navbar />
    <div class="max-w-5xl mx-auto p-4">
        <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl">
            <!-- <img src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" class="h-64 w-full object-cover rounded-md -mt-8" alt=""> -->
            <a class="text-gray-600 font-serif text-2xl text-center px-4" href="">{{title}}</a>
          
            <p class="text-gray-600 font-serif text-md  px-4">
                {{description}}


            </p>
            <p class="text-gray-600 font-serif text-md  px-4">Posted by-{{user_name}} on 2/3/2021</p>
          

       
            
        </div>
         <h1 class="text-xl font-sans font-medium text-center p-5">Add a comment</h1>
          <div class="rounded-2xl border border-gray-300 bg-white border-box shadow-2xl ">
                <textarea name="" v-model="comment" id="" cols="4" rows="4" class="border border-gray-200 w-full ">Hello</textarea>
                <div v-if='comment'>
                    <button @click.prevent="addComment" class="px-4 py-1 bg-blue-600 text-white font-sans">Comment</button>
                </div>
          </div>
           <h1 class="text-xl font-sans font-medium text-center p-3 text-2xl">Comments</h1>
           <div class="space-y-2">
                   <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl">
              <p class="font-serif px-4 text-md text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita tempore, in quo libero adipisci fugit labore tenetur aliquid, porro eligendi cupiditate voluptatibus sapiente? Fuga ipsum debitis praesentium voluptatibus soluta!</p>
              <div class="xl:flex xl:flex-row sm:flex sm:flex-col justify-between w-11/12">
                  <div>
                          <p class="font-serif px-4 text-xl text-gray-600 py-1">Posted on 10/03/2020 by <a href="">John Doe</a> </p>
                  </div>
                  <div class="ml-4 xl:ml-0">
                      <button class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">create</span></button>
                      <button class="px-1 py-1 bg-red-700 text-white font-sans rounded-md"><span class="material-icons">delete</span></button>
                  </div>

              </div>
        
             

          </div>
          <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl">
              <p class="font-serif px-4 text-md text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita tempore, in quo libero adipisci fugit labore tenetur aliquid, porro eligendi cupiditate voluptatibus sapiente? Fuga ipsum debitis praesentium voluptatibus soluta!</p>
                  <div class="xl:flex xl:flex-row sm:flex sm:flex-col justify-between w-11/12">
                  <div>
                          <p class="font-serif px-4 text-xl text-gray-600 py-1">Posted on 10/03/2020 by <a href=""></a> </p>
                  </div>
                  <div class="ml-4 xl:ml-0">
                      <button class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">create</span></button>
                      <button class="px-1 py-1 bg-red-700 text-white font-sans rounded-md"><span class="material-icons">delete</span></button>
                  </div>

              </div>

          </div>
     

           </div>
      
           
           
       
        
    </div>

    
</body>
</template>

<script>
import { auth, db } from '../firebase/config'
import Navbar from './Navbar'
export default {
    props:['title','description','user_name'],
    components:{
        Navbar
    },
    data(){
        return{
            comment:'',
            id:this.$route.params.id,
            username:'',
            useremail:'',
            postId:''
            
        }
    },
    methods:{
        addComment(){
            console.log("Clicked");
            db.collection("comments")
            
            .add({
                content:this.comment,
                 user_email:auth.currentUser.email,
                 user_name:this.username,
                 post_id:this.postId

            })
            .then(()=>{
                this.$router.push
                console.log('Data successfully added');
            }).catch((err)=>{
                console.log(err);
            })

        }

    },
    created(){
        console.log(this.id);
        let user=auth.currentUser;
        db.collection("users")
        .doc(user.uid)
        .get()
        
        .then((doc)=>{
            if(doc.exists){
                const data=doc.data();
                console.log(data);
                this.username=data.userName;
                console.log(this.username);

            }
        })
    //    let postsRef=db.collection("posts");
       const ref = db.collection('posts').doc(this.id).get()
     
       ref.then(doc=>{
           if(doc.exists){
               const data=doc.data();
               console.log(data);
               data.id=doc.id;
            //    console.log(data.id);
               this.postId=data.id;
              console.log(this.postId);
            //    console.log(data.user_email);
            //    this.useremail=data.user_email;
            //    console.log(this.useremail);
               

           }
       })

    }
   

    
     

}
</script>

<style>

</style>