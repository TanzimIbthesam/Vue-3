<template>
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
                              <tr v-for="filteredemployee in ALLFILTERED_EMPLOYEES_LIST"
                              :key="filteredemployee.id"
                              >
                                <th scope="row">{{filteredemployee.name}}</th>
                                <td >{{filteredemployee.address}}</td>
                                <td>
                                    <button type="button" class="btn btn-primary">Edit</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                                
                              </tr>
                              
                              
                            </tbody>
                          </table>
                    </div>
                </div>
            </div>
</template>

<script>
    
    export default {
        props:['ALLFILTERED_EMPLOYEES_LIST']
    }
</script>

<style lang="scss" scoped>

</style>