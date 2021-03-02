<template>
<body class="">
   
<div class="flex justify-center items-center h-screen w-full h-full backdrop " @click.self="close">
    <div class="xl:w-1/6 w-5/6 border border-gray-300  rounded-md  bg-green-300 h-1/3 xl:-mt-32 mt-0  ">
    <div class="space-y-5 p-4 mt-8">
        <input type="text" name="" class="px-8 py-1 rounded-full border border-gray-300" id=""><br>
        <input type="text" name="" class="px-8 py-1 rounded-full border border-gray-300" id=""><br>
        <button class="px-6 py-1 bg-blue-800 text-white font-serif  uppercase">Send</button>
    </div>
        
       
    </div>
</div>

   

    
</body>

  
</template>

<script>
export default {

    data(){
        return {
 isShowing:true,
        }
    },
    methods:{
        close(){
            this.$emit('close');
        }

    }

}
</script>

<style>

</style>