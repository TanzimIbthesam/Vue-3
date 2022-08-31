<template>
  <div class="container">
    <div class="row">
      <!-- Left Section -->
      <AllEmployee 
        :ALL_EMPLOYEES_LIST="allemployees"
        @selectedChange="changeHandler($event)"
        /> 


      <div class="col-9">
        <AddEmployee 
            @add-new-employee="addEmployeeHandler($event )" />
        <Table 
        
        :ALL_FILTERED_EMPLOYEES_LIST="selectedEmployees"
        />
         

      </div>
    </div>
  </div>
</template>

<script>
import AllEmployee from "@/components/AllEmployee.vue";
import FilteredEmployee from "@/components/FilteredEmployee.vue";
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
                    {id:1,name:"Abu Jafar",address:"Noakhali", selected: false},
                    {id:2,name:"Md Rahman",address:"Dhaka", selected: false}
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
    changeHandler(id){
      let p = this.allemployees.find((allemployee)=>{
        return  allemployee.id === id
       })
       p.selected = !p.selected
        console.log(p.selected);
    },

  

    addEmployeeHandler(value) {
      this.allemployees.unshift({
        name:value.name,
        address:value.address
      })
      value.name='',
      value.address=''
    }
    
  },
  computed:{
    selectedEmployees(){
        return this.allemployees.filter(allemployee=>allemployee.selected)
   },
   searchEmployees(){
    return this.allemployees.filter((allemployee)=>
    allemployee.name.includes(this.search) || 
    (allemployee.address.includes(this.search)))
   }
  }
})
</script>

<style lang="scss" scoped>

</style>
