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
        <!-- <form  @submit.prevent="handleSubmit">
          <div class="d-flex justify-content-between p-2 ">
          
          <label for="">Enter Name</label><br>
        <input type="text" v-model="form.name" class="form-control" name="" id="">
        <label for="">Enter Address</label>
        <input type="text" v-model="form.location" class="form-control" name="" id="">
        Name-{{form.name}}-Location-{{form.location}}
        
        
        
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
        </form> -->
        <form  @submit.prevent="handleSubmit">
         
        <!-- Also we can write -->
          <AddEmployee 
          v-model:name="form.name"
           v-model:location="form.location"
          />
          
          <button 
           @click.prevent="handleSubmit"
      type="submit" class="btn btn-primary">Save</button>
        </form>
          Name-{{form.name}}-Location-{{form.location}}
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
   
    
    
  </tbody>
</table>

      </div>
    </div>
  </div>
</template>

<script>
import AllEmployee from "@/components/AllEmployee.vue";
import FilteredEmployee from "../components/FilteredEmployee.vue";
import AddEmployee from "@/components/AddEmployee.vue";

export default({
  components: {
    AllEmployee,
    FilteredEmployee,
    AddEmployee
  },
  data(){
    return {
      allemployees:[
        {id:1,name:"Abu Jafar",location:"Noakhali", selected: false},
        {id:2,name:"Md Rahman",location:"Dhaka", selected: true}
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
    change(){
      console.log("Clicked");
      this.allemployees.selected =! this.allemployees.selected
    },
    handleSubmit(){
        this.allemployees.push({
          name:this.form.name,
          location:this.form.location
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
