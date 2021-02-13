
<template>
<Navbar />
<body class="bg-gray-100">
    
    <div class="max-w-5xl mx-auto p-4">
        <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl">
            <img src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" class="h-64 w-full object-cover rounded-md -mt-8" alt="">
            <a class="text-gray-600 font-serif text-2xl text-center px-4" href="">I am stuck with Firebase</a>
            <p class="text-gray-600 font-serif text-md  px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus molestiae dolorem quia nobis nulla odit, assumenda sapiente at rem possimus fugit quibusdam totam? Provident amet temporibus in repellat consequatur dicta minima facere optio! Quos repellat itaque voluptatibus, cum tempore odit, suscipit laudantium delectus officia deleniti nesciunt vitae. Laudantium autem repellat officiis tempore perspiciatis cumque quasi veritatis, quo sed quidem ad sequi cum, earum nostrum aspernatur! 


            </p>
            <p class="text-gray-600 font-serif text-md  px-4">Posted by-John Doe on 2/3/2021</p>
            <div>
                <span><span class="material-icons px-4 p-1 text-2xl text-blue-300">
                    <a class="text-2xl" href="">comment_bank</a>

</span></span>
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
         <h1 class="text-xl font-sans font-medium text-center p-5">Add a comment</h1>
          <div class="rounded-2xl border border-gray-300 bg-white border-box shadow-2xl ">
                <textarea name="" id="" cols="4" rows="4" class="border border-gray-200 w-full ">Hello</textarea>
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
                      <button class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">
create
</span></button>
                      <button class="px-1 py-1 bg-red-700 text-white font-sans rounded-md"><span class="material-icons">
delete
</span></button>
                  </div>

              </div>
        
             

          </div>
          <div class="rounded-2xl border border-gray-300 bg-white py-8 border-box shadow-2xl">
              <p class="font-serif px-4 text-md text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita tempore, in quo libero adipisci fugit labore tenetur aliquid, porro eligendi cupiditate voluptatibus sapiente? Fuga ipsum debitis praesentium voluptatibus soluta!</p>
                  <div class="xl:flex xl:flex-row sm:flex sm:flex-col justify-between w-11/12">
                  <div>
                          <p class="font-serif px-4 text-xl text-gray-600 py-1">Posted on 10/03/2020 by <a href="">John Doe</a> </p>
                  </div>
                  <div class="ml-4 xl:ml-0">
                      <button class="px-1 py-1 bg-green-300 text-white font-sans rounded-md"><span class="material-icons">
create
</span></button>
                      <button class="px-1 py-1 bg-red-700 text-white font-sans rounded-md"><span class="material-icons">
delete
</span></button>
                  </div>

              </div>

          </div>
     

           </div>
      
           
           
       
        
    </div>

    
</body>
  
</template>
<script>
import Navbar from './Navbar';
export default {

}
</script>

<style>

</style>