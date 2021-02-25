
<template>
<div class="home">

  <Navbar />

  </div>

<body class="bg-gray-100">
    
        <div class="max-w-5xl mx-auto p-4" v-for="allpost in allposts" :key="allpost">
       
        <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl">
             <router-link :to="{name:'individualpost'}">
                 
            <p class="text-gray-600 font-serif text-2xl text-center px-4" href="">{{allpost.title}}</p>
             </router-link>
            <p class="text-gray-600 font-serif text-md  px-4">
                {{ allpost.description }}


            </p>
            <p class="text-gray-600 font-serif text-md  px-4">Posted by-John Doe on 2/3/2021</p>
            <div>
                <span><span class="material-icons px-4 p-1 text-2xl text-blue-300">
             <router-link :to="{name:'individualpost'}">

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

       
            
        </div>
        <!-- <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl mt-1">
            <router-link :to="{name:'individualpost'}">
                <p class="text-gray-600 font-serif text-2xl text-center px-4">I am stuck with Firebase</p>
            </router-link>
            
            <p class="text-gray-600 font-serif text-md  px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus molestiae dolorem quia nobis nulla odit, assumenda sapiente at rem possimus fugit quibusdam totam? Provident amet temporibus in repellat consequatur dicta minima facere optio! Quos repellat itaque voluptatibus, cum tempore odit, suscipit laudantium delectus officia deleniti nesciunt vitae. Laudantium autem repellat officiis tempore perspiciatis cumque quasi veritatis, quo sed quidem ad sequi cum, earum nostrum aspernatur! 


            </p>
            <p class="text-gray-600 font-serif text-md  px-4">Posted by-John Doe on 2/3/2021</p>
            <div>
                <span><span class="material-icons px-4 p-1 text-2xl text-blue-300">
                    <router-link :to="{name:'individualpost'}">
                    <p class="text-2xl" href="">comment_bank</p>
                    </router-link>

</span>
                </span>
                    <span class="material-icons">
thumb_up 
</span>
               
                 <span>
                    <span class="material-icons">
thumb_down

</span>
</span>
            </div>

       
            
        </div> -->
    </div>

    
</body>
  
</template>
<script>
import { db } from '../firebase/config';
import Navbar from './Navbar';

export default {
    data() {
        return {
            // username:''
            allposts:[],
        }
    },
      computed:{
//         userName(){
//   console.log(auth.currentUser.email);    
//   db.collection("users").doc(auth.currentUser.uid)
//   .get()
//   .then(doc=>{
//       if(doc.exists){
//           const data=doc.data();
//           console.log(data);
//       }else{
//           console.log("Doc does not exists");
//       }
//   }) 

//         }

    },
    mounted() {
           
           
 db.collection("posts")

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
  
 
    
},
 

  
    components:{
        Navbar,
        
    },
  
                  
       

         }
    


</script>

<style>

</style>