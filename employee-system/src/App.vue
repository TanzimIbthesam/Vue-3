<template>
  <div class="container">
        <div class="row">
            <div class="col-4">
               <h1>Employee List</h1>
               <input type="search" name="" class="form-control" placeholder="Search"><br>
               <div class="card">
                <div class="card-header">M.Rahman</div>

                <div class="card-body">
                    <div class="d-flex p-2"> 
                        <div>Dhaka,Bangladesh</div>
                        <div><input type="checkbox" class="leftcheckbox" ></div>
                </div>
               </div>
            </div>
               <div class="card">
                <div class="card-header">M.Rahman</div>

                <div class="card-body">
                    <div class="d-flex p-2"> 
                        <div>Dhaka,Bangladesh</div>
                        <div><input type="checkbox" class="leftcheckbox" ></div>
                </div>
               </div>
            </div>
               <div class="card">
                <div class="card-header">M.Rahman</div>

                <div class="card-body">
                    <div class="d-flex p-2"> 
                        <div>Dhaka,Bangladesh</div>
                        <div><input type="checkbox" class="leftcheckbox" ></div>
                </div>
               </div>
            </div>
               <div class="card">
                <div class="card-header">M.Rahman</div>

                <div class="card-body">
                    <div class="d-flex p-2"> 
                        <div>Dhaka,Bangladesh</div>
                        <div><input type="checkbox" class="leftcheckbox" ></div>
                </div>
               </div>
            </div>
            
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
  export default {
    components: { AddEmployee },
    data(){
      return {
        allemployees:[
                    {id:1,name:"Abu Jafar",address:"Noakhali", selected: false},
                    {id:2,name:"Md Rahman",address:"Dhaka", selected: false}
                  ],
        name:'',
        address:'',
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
