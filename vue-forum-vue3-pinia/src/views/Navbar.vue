<template>

  <div class="bg-blue-400  w-full">
        <div class="mx-auto max-w-5xl flex justify-between p-4">
            <div class="flex">  
                <p class="text-gray-100 font-medium text-xl cursor-pointer"> <router-link :to="{ name: 'posts'}">
                Vue Forum
                </router-link></p>
              <span v-if="isLoggedIn" class="text-white font-semibold text-xl pl-2 cursor-pointer">
                   <router-link :to="{ name: 'addpost'}">
                  Add a Post
                </router-link>
                
                </span>
             
                
                </div>
                
            <div class="flex justify-between ">
              
                    <div v-if="store.isLoggedIn">
                        
                        <span class="material-icons text-white cursor-pointer -ml-8 notifications" @click=" openNotification">settings_power
</span>

<div class="relative inline-block text-left">
  <div>
             <span  class="material-icons icon cursor-pointer text-white " @click="openProfile">
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
       <div v-if="isProfileOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5  navitems">
    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
    
      <form >
        <button 
         
        @click.prevent="handleLogout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
          Sign Out <i class="fas fa-outdent    "></i>
        </button>
      </form>
    </div>
  </div>
</div>

</div>
           <div v-else>
                <router-link :to="{ name: 'login'}">
                 <div class="font-serif text-white">Login</div>
               </router-link>
              </div>       
            </div>
            

        </div>
       
    </div>
</template>



 <script setup>
 import {ref} from 'vue'
import {authUserStore} from '@/store/index.js'
import { onMounted } from 'vue'
 const isProfileOpen=ref(false);
 const isNotificationOpen=ref(false)
const store=authUserStore();
import  { auth } from '@/firebase/config.js'
import { getAuth } from 'firebase/auth'
 const openProfile=()=>{
     console.log("Clicked");
    //  console.log(isProfileOpen);
    isProfileOpen.value =! isProfileOpen.value
      
 }
const openNotification=()=>{
     console.log("Clicked");
    isNotificationOpen.value =! isNotificationOpen.value
}
const handleLogout=()=>{
 store.logout()
}

onMounted(()=>{
  store.fetchUser()
// const auth=getAuth();
// console.log(auth.currentUser);
})
</script>


<style>
</style>