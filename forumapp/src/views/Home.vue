<template>
<body >

  <div class="home" >
    
  <Navbar  @close="closeModalfromNav"/>
 <Modal v-if="isOpen" @close="toggleModalclose" />
 <button class="bg-purple-600 bg-opacity-25  rounded-md px-4 py-4 text-white font-serif " @click="toggleModal">Login</button>
 
   

  </div>
  </body>
</template>

<script>
// @ is an alias to /src


import Navbar from './Navbar';
import Modal from './Modal'

export default {
  name: 'Home',
  data(){
     return{
       isOpen:false
     }
  },
  components: {
   
    Navbar,
    Modal

  },
  methods:{
  toggleModal(){
    console.log("clicked");
     this.isOpen=true;
   },
   closeModalfromNav(){
     console.log("Clicked");
   },
   toggleModalclose(){
     this.isOpen=false;
   }
  }
}
</script>
