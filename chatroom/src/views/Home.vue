<template>
  <div class="home">
    <div class="xl:p-32 sm:p-12">
      <div class="flex justify-center items-center space-x-4">
        <div class="w-20 h-8 bg-gray-400 text-white font-mono text-md rounded-md cursor-pointer">#vue</div>
        <div class="w-20 h-8 bg-blue-400 text-white font-mono text-md rounded-md cursor-pointer">#React</div>
        <div class="w-20 h-8 bg-yellow-500 text-white font-mono text-md rounded-md cursor-pointer">#Svelte</div>
        
      </div>
      <div class="flex justify-center items-center p-10 space-x-2">
        <textarea name="" id="" cols="60" rows="1" class="border border-gray-300 rounded-md px-4 py-1">
          
        </textarea>
        <button class="bg-red-400 text-white font-serif px-4 py-1">SEND</button>
      </div>
      <div>

      </div>
      <div class="flex flex-col justify-center items-center p-10 space-x-2 space-y-2">
        <div class="xl:w-1/2 w-11/12 border border-gray-300 rounded-md  font-serif p-4">
         <div class="text-md text-left">Hello How are you?How have you been doing</div>
         <div class="font-bold font-serif text-xl text-left">Nima
           <span class="text-gray-400 text-xs font-serif">15 minutes ago</span>
         </div>
        </div>
        <div class="xl:w-1/2 w-11/12 border border-gray-300 rounded-md  font-serif p-4">
         <div class="text-md text-left">Hello How are you?How have you been doing</div>
         <div class="font-bold font-serif text-xl text-left">Nima
           <span class="text-gray-400 text-xs font-serif">15 minutes ago</span>
         </div>
        </div>
        <div class="xl:w-1/2 w-11/12 border border-gray-300 rounded-md  font-serif p-4">
         <div class="text-md text-left">Hello How are you?How have you been doing</div>
         <div class="font-bold font-serif text-xl text-left">Nima
           <span class="text-gray-400 text-xs font-serif">15 minutes ago</span>
         </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
 
  }
}
</script>
