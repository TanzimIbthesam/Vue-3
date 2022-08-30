<template>
  <div class="container">
    <div class="row">
      <!-- Left Section -->
      <AllEmployee 
        :ALL_EMPLOYEES_LIST="allemployees"
        @selectedChange="change(id)"
        /> 


      <div class="col-9">
        <AddEmployee @add-new-employee="addEmployeeHandler($event )" />
        <Table 
        :ALL_FILTERED_EMPLOYEES_LIST="selectedEmployees"
        />
        <!-- <table class="table">
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
              <div v-for="selected in selectedEmployees" :key="selected.id">
                
              <FilteredEmployee :selected="selected" />
              
              </div>
            
            </tr>
          
            
            
          </tbody>
        </table> -->

      </div>
    </div>
  </div>
</template>

<script>
import AllEmployee from "@/components/AllEmployee.vue";
import FilteredEmployee from "../components/FilteredEmployee.vue";
import AddEmployee from "@/components/AddEmployee.vue";
import Table from '@/views/Table.vue'
export default({
  components: {
    AllEmployee,
    FilteredEmployee,
    AddEmployee,
    Table
  },
  data(){
    return {
      allemployees:[
        {id:1,name:"Abu Jafar",address:"Noakhali", selected:true},
        {id:2,name:"Md Rahman",address:"Dhaka", selected: true}
                  ],
                  name:"",
                  location:"",
        form:{
          name:"",
          location:""
        }
    }
  },
  methods:{
    change(id){
      console.log("Clicked",id);
      let p=this.allemployees.find((allemployee)=>{
       return  allemployee.id === id
       })
       

    },

  

    addEmployeeHandler(value) {
      this.allemployees.unshift({
        name:value.name,
        address:value.address
      })
    }
    
  },
  computed:{
    selectedEmployees(){
        return this.allemployees.filter(allemployee=>allemployee.selected)
   },
  }
})
</script>

<style lang="scss" scoped>

</style>
