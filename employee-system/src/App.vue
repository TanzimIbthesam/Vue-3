<template>
  <div class="container">
        <div class="row">
            <div class="col-4">
               <h1>Employee List</h1>
                <AllEmployee :ALL_EMPLOYEES_LIST="allemployees"/>  
                
               
              
             
              
            
        </div>
        <div class="col-8">
            <h1>Add New Employee</h1>
            <AddEmployee @add-employee="employeeAddHandler($event)" />
            <!-- <div class="container">
                <form action="">
                    <div class="row">
                        <div class="col-6">
                            
                            <input type="text" class="form-control" id="">
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" id="">
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary mt-3">SEND</button>
                </form>
                
            </div> -->
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import AddEmployee from './components/AddEmployee.vue';
import AllEmployee from './components/AllEmployee.vue';
  export default {
    components: { AddEmployee, AllEmployee },
    data(){
      return {
        allemployees:[
                    {id:1,name:"Abu Jafar",address:"Noakhali", selected: false},
                    {id:2,name:"Md Rahman",address:"Dhaka", selected: false}
                  ],
        
      }

    },
    methods:{
         employeeAddHandler(value){
          this.allemployees.unshift({
        name:value.name,
        address:value.address
      })
      value.name='',
      value.address=''
            
         }
    }
}
</script>

<style lang="scss" scoped>

</style>
