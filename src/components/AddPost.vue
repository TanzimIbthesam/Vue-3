<template>
    <div class="bg-gray-100">
             <div class="w-full    py-10 ">
                 <div class="w-4/5 flex bg-gray-100 py-18  rounded-sm mx-auto px-20 border-2 border-gray-100 ">
                      <div class="w-1/5 bg-white h-64 space-y-2">
                      <h1 class="text-2xl  text-blue-900 text-center font-serif">{{user_name}}</h1>
                       <p class="text-center"  v-if="isAdmin">
                       <button  class="adminbadge">Admin</button>
                       </p>
                       <p class="text-xl  text-center font-serif">Followers -{{followers}}</p>
                       <form action="" @submit.prevent="createNewPost">
                        <select class="py-1 w-full border cursor-pointer"  v-model="selectedPostType">
                          
                        <option :value="option.value" v-for="(option,index ) in options" :key="index"  class="text-black" >{{option.name}}</option>
                        
                       </select>
                       
                        <textarea class="border-4 border-red-300 px-4 py-2" v-model="newPostContent" name="" id="" cols="30" rows="4"  :class="{'border-4 border-red-800':postCharactercount>100 }" :disabled="postCharactercount>100" >
                                   
                       </textarea><br>
                          <div v-if="postCharactercount > 100">
                              <p class="text-red-800 font-bold font-serif"> Sorry you have exceeded the character limit</p>
                          </div>
                  
                          {{postCharactercount }}/100
                        
                        <button type="submit" class="postbutton">POST</button>
                       </form>
                       
                      </div>
                      <div   class="w-4/5 ml-4  rounded-md  ">
                     
                           <div  v-for="post in posts" :key="post.id"  class="  py-3   mx-auto px-20 border-2 mt-4 w-full bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                                
                            <p class="font-serif text-blue-800 font-medium  text-xl">{{post.user_name}}</p>
                            <p class="text-xl font-serif">{{post.body}}</p>
                   
                       
                          
                           </div>
                      </div>
                       
                       
                 </div>
                 
           
                     
                       
                       
                 </div>
               
             </div>
  
</template> 
<script>

export default {
    // props:['posts'],
 
    data() {
     
           
      
        return {
            followers:0,
            age:10,
            name:'Tanzim',
            user_name:'tanzim101',
            a:0,
            b:0,
            typing:false,
            message:'',
            m:null,
            km:null,
            isAdmin:true,
            newPostContent:'',
           selectedPostType:'draft',
            options:[
                {value:'instant',name:'Instant'},
                {value:'draft',name:'Draft'},
            ],
          posts:[
         { 
             id:1,
              user_name:'tanzim101',
                // title:'Hello World',
                 body:'We all are here',
                
            },
         {
             id:2,
              user_name:'tanzim101',
                // title:'Hello World',
                 body:'We all are here',
                
            },
        
          ]

  
          

        }
      

    },
    methods: {
        increaseFollowers(){
            return this.followers++;
        },
        createNewPost(){
            if(this.newPostContent && this.selectedPostType !=="draft" ){
                this.posts.unshift({
                    id:this.posts.length+1,
                    body:this.newPostContent,
                    user_name:this.user_name
                   
                })
                this.newPostContent= '';

            }
        }
    },
    computed: {
        postCharactercount(){
            return this. newPostContent.length;
        }
       
    },
    mounted() {
        this.increaseFollowers();
    },
    watch: {
        message(){
           this.typing=true;

           setTimeout(()=>{
               this.typing=false;
           },3000);
        },
    }
    
    
}
</script>
<style scoped>
    .adminbadge{
        @apply py-1 px-1 bg-blue-900  text-white text-xs font-serif
    }
    .postbutton{
        @apply py-1 px-4 bg-blue-900  text-white text-xs font-serif w-full
    }
</style>