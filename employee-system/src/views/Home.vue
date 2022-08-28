<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        
        <h4>Employees List</h4>
        <input type="search" class="form-control"  name="" id="">
           <AllEmployee 
            :ALL_EMPLOYEES_LIST="allemployees"
            @selectedChange="change"
            
           />
        
           
           
      </div>
      <div class="col-10">
        <h4>Add New Employee</h4>
        <form action="">
          <div class="d-flex justify-content-between p-2 ">
          
          <label for="">Enter Name</label><br>
        <input type="text" class="form-control" name="" id="">
        <label for="">Enter Address</label>
        <input type="text" class="form-control" name="" id="">
        
        
        
        
      </div>
      <button type="button" class="btn btn-primary">Save</button>
        </form>



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
      <div v-for="selected in selectedEmployees" :key="selected.id">
      
      <FilteredEmployee :selected="selected" />
      </div>
     
    </tr>
    <tr>
      <td>2</td>
      <td>Mr Abu Jafar</td>
      <td>Noakhali</td>
      <td><div class="d-flex">
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div></td>
    </tr>
    
    
  </tbody>
</table>

      </div>
    </div>
  </div>
</template>

<script>
import AllEmployee from "@/components/AllEmployee.vue";
import FilteredEmployee from "../components/FilteredEmployee.vue";
export default({
  components: {
    AllEmployee,
    FilteredEmployee
  },
  data(){
    return {
      allemployees:[
                    {id:1,name:"Abu Jafar",location:"Noakhali", selected: false},
                    {id:2,name:"Md Rahman",location:"Dhaka", selected: true}
                  ]
    }
  },methods:{
    change(){
      console.log("Clicked");
      this.allemployees.selected =! this.allemployees.selected
    }
    
  },
  computed:{
    selectedEmployees(){
      this.allemployees.filter(allemployee=>{
        allemployee.selected
      })
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
