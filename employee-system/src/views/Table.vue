<template>
    <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <div v-for="selected in ALL_FILTERED_EMPLOYEES_LIST" :key="selected.id">
                
              <FilteredEmployee :selected="selected" 
              @delete_employees="deleteEmployees"
               />
              
              </div>
            
            </tr>
          
            
            
          </tbody>
        </table>
    </div>
</template>

<script>
    import FilteredEmployee from '../components/FilteredEmployee.vue'
    
    export default {
        props:['ALL_FILTERED_EMPLOYEES_LIST'],
        components:{
            FilteredEmployee
        },
        data(){
            return {

            }
        },
        methods:{
            deleteEmployees(id){
                console.log(id);
                 let filteredEmployees=this.$props.ALL_FILTERED_EMPLOYEES_LIST;
                 
                 console.log('ALL_FILTERED_EMPLOYEES_LIST', this.ALL_FILTERED_EMPLOYEES_LIST);
                 
                 filteredEmployees.find(el=> el.id ===  id).selected = false

                 console.log('after', filteredEmployees);
                
            }
        }
        
    }
</script>

<style lang="stylus" scoped>

</style>