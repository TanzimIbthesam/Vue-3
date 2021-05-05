<template>
  <div class="home">
    <div class="xl:p-32 sm:p-12">
      <div class="flex justify-center items-center space-x-4">
        <div class="w-20 h-8 bg-gray-400 text-white font-mono text-md rounded-md cursor-pointer">#vue</div>
        <div class="w-20 h-8 bg-blue-400 text-white font-mono text-md rounded-md cursor-pointer">#React</div>
        <div class="w-20 h-8 bg-yellow-500 text-white font-mono text-md rounded-md cursor-pointer">#Svelte</div>
        
      </div>
      <div class="flex justify-center items-center p-10 ">
        <textarea name="" id="" cols="60" rows="10" class="border border-gray-300 rounded-md"></textarea>
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
