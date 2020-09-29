<template>
    <div class="bg-gray-900 flex flex-col justify-center items-center w-full py-32">
      <div> 
             <h1 class="text-center text-white font-sans text-2xl italic">Product List Two</h1>
        </div>
        <div  class="w-3/5 flex py-20 h-64">
          <div v-for="pricepackage in  saleonPricepackages" :key="pricepackage" class="w-1/4 flex flex-col h-32 py-20 bg-white  rounded-md ml-4">
         
                 <h1 class="text-blue-900 text-2xl text-center">{{pricepackage.name}}</h1>
                  <p class="text-blue-600 font-serif text-2xl text-center font-bold">$ {{pricepackage.price}} </p>
         
            <div class="bg-blue-600 py-10">
                 <h1 class="text-white font-bold text-xl text-center">{{pricepackage.duration}}</h1>
                  <button class="buttonsend">Get Started</button>
            </div>
          </div>
          
            
          
           
    </div>
    </div>
</template> 

<script>
export default {
    // props:['pricepackages']
    computed:{
   pricepackages(){
            return this.$store.state.pricepackages;
        },
        saleonPricepackages (){
           return  this.$store.getters. saleonPricepackages;
        }
    }
}
</script>
<style scoped>
    .buttonsend{
        @apply px-6 py-1 bg-white text-blue-600 ml-20 rounded-full font-serif font-thin text-center
    }
</style>