<template>
  <div>
      <h1>All Coachesss-{{counter}}</h1>
     <div v-if="coachesCount">
         <div v-for="coach in allCoaches" :key="coach.id">
             <CoachItem :coach="coach" />
         </div>
         
       
      </div>
        <div v-else>
        <div>Coaches not listed</div> 
      </div> 
       </div> 
       
       


</template>

<script>
    // import store from '../../store'
    import CoachItem from './CoachItem.vue'
    import { mapGetters} from "vuex"
export default {
  data(){
    return{
          counter:this.$store.state.counter
    }
  },
  components:{
      CoachItem
    },
 computed: {
    // mix the getters into computed with object spread operator
    //  ...mapState(['counter']),
      //  ...mapGetters(['coaches/allCoaches']),
      // filteredCoaches(){
      //  return this.$store.getters['coaches/allCoaches']
      // }
      //Using mapGetters with modules
      ...mapGetters('coaches',['allCoaches','coachesCount']
  // anotherGetter: 'myModule2/anotherGetter',
)
  }
 
}
</script>

<style>

</style>