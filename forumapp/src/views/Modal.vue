<template>
<body class="">
   
<div class="flex justify-center items-center h-screen w-full h-full" @click.self="close">
    <div class="xl:w-5/6 w-5/6 border border-gray-300  rounded-md   h-1/5 xl:-mt-96 mt-0  ">
    <div class="space-y-5 p-4 mt-8 ">
        
        <div class="flex justify-center">
            <div>
            <h1 class="text-xl font-serif font-semilbold text-center">Are you sure you want to delete?</h1>
       
        </div>
        

        </div>
        <div class="flex justify-center space-x-3">
            <button @click="deleteInfo(id)" class="bg-green-300 text-white font-sans font-serif px-6 py-1">Yes</button>
            <button @click="close" class="bg-red-800 text-white font-sans font-serif px-6 py-1">No</button>


        </div>
        
      
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
        },
        deleteInfo(id){
            this.$emit('deleteInfo',id);
        }

    }

}
</script>

<style>

</style>