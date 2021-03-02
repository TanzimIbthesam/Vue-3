<template>

  <div class="bg-blue-400  w-full" @click="addClick">
        <div class="mx-auto max-w-5xl flex justify-between p-4">
            <div class="flex mainnav">  
              <router-link to="/"><p class="text-white font-light subpixel-antialiased text-xl font-mono italic cursor-pointer">Vue Forum</p></router-link>
             
              
                <router-link :to="{name:'addpost'}"><p class="text-white font-light subpixel-antialiased text-xl font-mono italic cursor-pointer">Add a post</p></router-link>
               
                 
                </div>
                 <router-link :to="{name:'profile'}"> <p class="text-white font-light subpixel-antialiased text-xl font-mono italic cursor-pointer"> <span :class="[ isLoggedIn ? 'block' : 'hidden']">Welcome- {{username}}</span></p></router-link>
            
              
           
            <div class="flex justify-between " :class="[isLoggedIn ?'block' :'hidden']">
                    <div>
                        
                        <span class="material-icons text-white cursor-pointer -ml-8 notifications" @click=" openNotification">settings_power
</span>

<div class="relative inline-block text-left">
  <div>
<span class="material-icons icon cursor-pointer text-white " @click="openProfile">
       account_circle
</span>
  </div>


  <div v-if="isNotificationOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5  notificationitems">
    <div class="py-1 w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-serif text-md" role="menuitem">
        John Doe Commented on your post-1s ago
      </a>
    
      
    </div>
    <div class="py-1 w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-serif text-md" role="menuitem">
        John Doe Commented on your post-1s ago
      </a>
    
      
    </div>
    <div class="py-1 w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-serif text-md" role="menuitem">
        John Doe Commented on your post-1s ago
      </a>
    
      
    </div>
  </div>
       <div v-if=" isProfileOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5  navitems">
    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <router-link :to="{name:'profile'}"><p href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</p></router-link>
      
    
      <form  method="POST" action="#">
        <button @click.prevent="logOut" type="submit" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
          Sign Out <i class="fas fa-outdent"></i>
        </button>
      </form>
    </div>
  </div>
</div>

</div>
                  
            </div>
            

        </div>
       
    </div>
</template>

<script>
import { auth, db } from '../firebase/config'

export default {
    data() {
        return {
            isProfileOpen:false,
            isNotificationOpen:false,
            isLoggedIn:false,
            username:''
            
        }
    },
    methods:{
        openProfile(){
           return this.isProfileOpen =! this.isProfileOpen
        },
        openNotification(){
            return this.isNotificationOpen =! this.isNotificationOpen
        },
       close(){
         this.$emit('close')
       },
       async logOut(){
         try {
           const logout=await auth.signOut();
           console.log(logout);
           this.$router.replace({name:'auth'})
         } catch (error) {
           console.log(error);
           
         }
       }

    },
    created(){
        
      
    },
       mounted(){
         auth.onAuthStateChanged((user)=>{
        if(user){
          this.isLoggedIn=true;
        }else{
          this.isLoggedIn=false;
        }
      });
        let user=auth.currentUser;
        if(user){

  db.collection("users").doc(auth.currentUser.uid)
  .get()
  .then(doc=>{
      if(doc.exists){
          const data=doc.data();
          console.log(data.userName);
          this.username=data.userName;
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