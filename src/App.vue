<template>
<div>
 <!-- <ProductOne :pricepackages="pricepackages" /> 
<ProductTwo  :pricepackages="pricepackages" /> -->
 <ProductOne/> 
<ProductTwo/>
</div>





</template>

<script>

 import ProductOne from './components/ProductListOne'
import ProductTwo from './components/ProductListTwo'
export default {
  name: 'App',
  components: {
  //  Postitem
 ProductOne ,
  ProductTwo
  
  },
  data() {
    return {
      // pricepackages:[
      //   {name:'Basic',price:25,duration:'1 month'},
      //   {name:'Premium',price:35,duration:'3 month'},
      //   {name:'Elite',price:85,duration:'6 month'},
      // ]
       
     
    }
  },

}
</script>
<style  scoped>

</style>