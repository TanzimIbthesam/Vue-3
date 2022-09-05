<template>
  <div class="container">
        <div class="row">
            <div class="col-4">
               <h1>Employee List</h1>
                <AllEmployee :ALL_EMPLOYEES_LIST="allemployees"/>  
        </div>
        <div class="col-8">
            <h1>Add New Employee</h1>
            <AddEmployee @add-employee="employeeAddHandler($event)" 
              :EDIT_EMPLOYEE="editedEmployee"
            />
            <FilteredEmployee :ALLFILTERED_EMPLOYEES_LIST="selectedEmployees"
            @delete-employees="deleteEmployeeHandler($event)"
            @edit-employees="editEmployeeHandler($event)"
            
            />
        </div>
    </div>
    </div>
</template>

<script>
import AddEmployee from './components/AddEmployee.vue';
import AllEmployee from './components/AllEmployee.vue';
import FilteredEmployee from './components/FilteredEmployee.vue';
  export default {
    components: { AddEmployee, AllEmployee, FilteredEmployee },
    data(){
      return {
        allemployees:[
                    {id:1,name:"Abu Jafar",address:"Noakhali", selected:false},
                    {id:2,name:"Md Rahman",address:"Dhaka", selected:true}
                  ],

        editedEmployee:null
        
      }

    },
    methods:{
        employeeAddHandler(value){
          
          if(value.id){
            let editIndex = this.allemployees.findIndex(emp=> emp.id == value.id);
            this.allemployees[editIndex].name= value.name;
            this.allemployees[editIndex].address = value.address;
            this.editedEmployee = null
          } else {
              this.allemployees.unshift({
              name:value.name,
              address:value.address,
              id: this.allemployees.length + 1
            })
          }
        },

        deleteEmployeeHandler(value){
            console.log("Clickedddd",value);
            
             this.allemployees.splice(0,1)
        },
        editEmployeeHandler(value){
          console.log("Clickeddd",value);
          this.editedEmployee = this.allemployees.find((emp)=>{
           return emp.id === value
          })
        }
    },
    computed:{
      selectedEmployees(){
       return this.allemployees.filter(allemployee=>allemployee.selected)
      }
      
    }
}
</script>

<style lang="scss" scoped>

</style>
