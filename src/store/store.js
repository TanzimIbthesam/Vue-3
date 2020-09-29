import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
           pricepackages: [
               {name: 'Basic', price: 25, duration: '1 month'},
               {name: 'Premium',price: 35,duration: '3 month'},
               {name: 'Elite',price: 85,duration: '6 month'
               },
           ]
    },
   getters:{
     saleonPricepackages:(state)=>{
       const  saleonPricepackages = state.pricepackages.map(pricepackage => {
             return {  
                name:pricepackage.name,
                price: `${pricepackage.price/2}`,
                duration:pricepackage.duration
             };
         });
       return saleonPricepackages;
     },
    },
  mutations:{
    reducePrice:(state,amount)=>{
      state.pricepackages.forEach(pricepackage => {
        // pricepackage.price -= 1
        pricepackage.price -= amount
      });

  },
},
actions:{
  reducePrice:(context,amount)=>{
    setTimeout(()=>{
          context.commit('reducePrice',amount)
    },500)
  }
}
   
});