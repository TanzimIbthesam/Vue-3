<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
         Employee List
         <input type="search" class="form-control mt-3 mb-2" name="" id="">
         <div class="card" style="width:10rem;">
  <!-- {{allemployees}} -->
 
  <div v-for="allemployee in allemployees" :key="allemployee.id">
    <div class="card-body">
    <div class="d-flex flex-row mb-3">
         <div><h5 class="card-title">{{allemployee.name}}</h5></div>
         <input type="checkbox" @click="clickCheckbox(allemployee.id)" class="ml-2" id="">
    </div>
    
    <p class="card-text">{{allemployee.location}}</p>
    
  </div>
  </div>
  
 
  
  
  
</div>
      </div>
      <div class="col-10">
         Add New Employee
         <div class="container">
            <div class="row">
                <form  @submit.prevent="handleSubmit">
                  <div class="d-flex justify-content-evenly">
                    <div class="">
                    <label>Name</label>
                   <input 
                   v-model="form.name"
                   class="form-control" type="text" name="" id="" />
                   
                    </div>
                    <div class="">
                        <label>Address</label>
                   <input class="form-control" 
                   v-model="form.location"
                   type="text" name="" id="" />
                    </div>
                    
                </div>
                <button type="submit" class="btn btn-primary marginleft">Save</button>
                </form>
                
                
            </div>
         </div>
         
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
    <tr v-for="selectedemployee in selectedEmployees" :key="selectedemployee.id">
      <td>{{selectedemployee.id}}</td>
      <td>{{selectedemployee.name}}</td>
      <td>{{selectedemployee.location}}</td>
      <td>
        <div class="d-flex p-2">
          <button class="btn btn-primary"><router-link class="text-white" :to="{ name: 'EditEmployee', params: { id:selectedemployee.id }}">
             Edit
</router-link></button>
          <button class="btn btn-danger" @click="handleDelete(selectedemployee.id)">Delete</button>
        </div>
      </td>
    </tr>
    
    
  </tbody>
</table>
      </div>
    </div>
  </div>
  
</template>
<script>
import axios from 'axios'
export default({
data(){
    return{
        allemployees:[],
        form:{
            name:"",
            location:"",
            isSelected:false
        }
    }
},
methods:{
  handleSubmit(){
     axios.post('http://localhost:3001/employees',this.form).then(response=>{
        this.allemployees
     })
     this.form=''
    },
    handleDelete(id){
      console.log(id);
      axios.delete('http://localhost:3001/employees/'+id)
      this.allemployees=this.allemployees.filter(allemployee=>{
        return allemployee.id !== id
      })
    },
  clickCheckbox(id){
    let p=this.allemployees.find((allemployee)=>{
       return  allemployee.id === id
       })
       p.isSelected = !p.isSelected
    
     axios.patch('http://localhost:3001/employees/'+id,{isSelected :!this.form.isSelected })
    
  }
},
mounted(){
   axios.get('http://localhost:3001/employees').then(response=>{
    this.allemployees=response.data
   });
   
},
computed:{
   

   selectedEmployees(){
        return this.allemployees.filter((allemployee=>allemployee.isSelected))
   }
}

})
</script>
<style scoped>
.marginleft{
    margin-left: 200px !important;
    margin-top:20px !important;
}
</style>