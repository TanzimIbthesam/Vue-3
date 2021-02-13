<template>
<body>
    <Navbar />
    <div class="max-w-5xl mx-auto p-8 bg-white">
        <p class="text-2xl font-serif ">Profile Information</p>
        <div class=" border border-gray-200 rounded-xl p-8">
           <h1 class="text-md font-bold font-serif">Username</h1><span>tanzim101</span>
           <h1 class="text-md font-bold font-serif">Email</h1>
           <span class="text-md font-medium font-serif">tanzim101@gmail.com</span>
           <h1 class="text-md font-bold font-serif">Bio</h1>
           <span class="text-md font-medium font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos nesciunt asperiores rem sint natus alias accusamus sapiente, ratione sit neque itaque ipsa cum aspernatur maxime, facere velit minus hic!</span><br>
           <button class="px-4 py-1 bg-green-300 text-white font-serif mt-2">Edit</button>
        </div>
      </div>
    
</body>


  
</template>

<script>
import Navbar from '../views/Navbar'
export default {

    components:{
        Navbar
    }
    
}
</script>

<style>

</style>