<template>
    <div class="bg-gray-300 w-full ">
        <div class=" mx-auto flex justify-center content-center">
             <h1 class="text-3xl font-sans font-bold cursor-pointer" @click="changetitle">This is Header-{{title}}</h1>
        </div>
   
    </div>
</template>
<script>
export default {
   props:{
     title:{
         type:String
     }
   },
    data() {
        return {
        //   title:'SocialBook'
        }
    },
  methods: {
      changetitle(){
            this.$emit('change','Change the header');
          }
    }
    
}
</script>
<style lang="">
    
</style>