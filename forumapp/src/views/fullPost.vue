<template>
  <body class="">
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
                <textarea name="" v-model="comment" id="" cols="4" rows="4" class="border border-gray-200 w-full "></textarea>
                <div v-if='comment'>
                    <button @click.prevent="addComment()" class="px-4 py-1 bg-blue-600 text-white font-sans">Comment</button>
                </div>
          </div>
           <h1 class="text-xl font-sans font-medium text-center p-3 text-2xl">Comments</h1>
           <div class="space-y-2">
              
          <div v-for="authUserComment in authUserComments" :key="authUserComment.id">
              <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl" >
              <p class="font-serif px-4 text-md text-black">{{authUserComment.content}}</p>
                  <div class="xl:flex xl:flex-row sm:flex sm:flex-col justify-between w-11/12">
                  <div>
                          <p class="font-serif px-4 text-xl text-gray-600 py-1">Posted on 10/0/2020 by <a href="">{{authUserComment.user_name}}</a> </p>
                  </div>
                  <div v-if="isAuthUser">
                      <div class="ml-4 xl:ml-0 ">
                   
                         <button @click.prevent="deleteComment(authUserComment.id)" class="px-1 py-1 bg-red-700 text-white font-sans rounded-md"><span class="material-icons">delete</span></button>

                    </div>
                    </div>
                  </div>
                 </div>
     </div>
          <div v-for="unauthUserComment in unauthUserComments" :key="unauthUserComment.id">
              <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl" >
              <p class="font-serif px-4 text-md text-black">{{unauthUserComment.content}}</p>
                  <div class="xl:flex xl:flex-row sm:flex sm:flex-col justify-between w-11/12">
                  <div>
                          <p class="font-serif px-4 text-xl text-gray-600 py-1">Posted on 10/10/2020 by <a href="">{{unauthUserComment.user_name}}</a> </p>
                  </div>
                 
                 
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
            postId:'',
            authUserComments:[],
            unauthUserComments:[],
            isAuthUser:false,
            showButtons:true,
            postUserName:'',
            
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
                
                console.log('Data successfully added');
            }).catch((err)=>{
                console.log(err);
            })
        },
        deleteComment(id){

         let delCmnt=db.collection("comments").doc(id);
         
         delCmnt.delete();
         
           
        }
    },
    created(){
         let user=auth.currentUser;
         if(user){
             this.isAuthUser=true;
         }else{
             this.isAuthUser=false;
         }
        //users ref
  let newuser=auth.currentUser;
  if(newuser){
      db.collection("users")
       .doc(newuser.uid)
  .get()
  .then(doc=>{
      if(doc.exists){
          var usersdata=doc.data();
          console.log(usersdata.userName);
          this.username=usersdata.userName
          console.log(this.username);
        
      }else{
          console.log("Doc does not exists");
      }
  })

  }
    
    //    let postsRef=db.collection("posts");
       const ref = db.collection('posts').doc(this.id).get()
     
       ref.then(doc=>{
           if(doc.exists){
               let postsdata=doc.data();
               console.log(postsdata);
               postsdata.id=doc.id;
            
               this.postId=postsdata.id;
               this.postUserName=postsdata.user_name;
               console.log(this.postUserName);

               console.log(this.id);
              console.log(this.postId);
          
           }
       })
       //Comments 
       const commenstRef=db.collection("comments");
          
       commenstRef.onSnapshot((snap)=>{
           this.authUserComments=[];
           this.unauthUserComments=[];
           snap.forEach(doc => {
            //    this.authUserComments=[]
               let commentsdata=doc.data();
                    if(commentsdata.post_id==this.id ){

                        if(commentsdata.user_email==auth.currentUser.email && this.username==this.postUserName){
                            this.authUserComments.push({
                          id:doc.id,
                          content:commentsdata.content,
                         user_name:commentsdata.user_name,
                        post_id:commentsdata.post_id

                      });
                      this.comment='';
                            
                        }else{
                          this.unauthUserComments.push({
                          id:doc.id,
                          content:commentsdata.content,
                         user_name:commentsdata.user_name,
                        post_id:commentsdata.post_id

                      });

                        }
                        
                      
                      
                    }

                    
               
           });
       })
    }
   
    
     
}
</script>

<style>
</style>