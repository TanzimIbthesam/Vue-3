<template>
<body>
    <Navbar />
    <div class="max-w-5xl mx-auto p-8 bg-white">
        <div class="flex justify-center border border-gray-300 rounded-md w-full">
            <div class="flex space-x-4">
                <div class=" border-r-2 border-gray-900 "><div class="xl:text-2xl text:md font-serif pr-8 cursor-pointer" @click="activeProfileTab()">Profile Information</div></div>
                <div> <div class=" font-serif xl:text-2xl text:md cursor-pointer" :class="['currentActiveTab' ? 'border-b border-green-300 ':null]" @click=" activeUsersTab()" >Your posts</div></div>
               

            </div>
             
        </div>
       
       <ProfileInfo v-if="activeTab === 'ProfileInfo' " />
       <UsersPosts v-if="activeTab === 'UsersPosts' " />
      </div>
    
</body>


  
</template>

<script>
import Navbar from '../Navbar';
import ProfileInfo from './ProfileInfo'
import UsersPosts from './UsersPosts'
export default {
    data() {
        return {
            activeTab:'UsersPosts',
            currentActiveTab:false
        }
    },

    components:{
        Navbar,
        ProfileInfo,
        UsersPosts
    },
    methods: {
        activeProfileTab(){
             this.activeTab='ProfileInfo'
             this.currentActiveTab=true;
             this.currentActiveTab=false;

        },
        activeUsersTab(){
           this.activeTab='UsersPosts'
       

        }
    },
    
}
</script>

<style>

</style>