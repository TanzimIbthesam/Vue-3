<template>
    <div>
        <input type="search" name="" class="form-control" placeholder="Search"><br>
               <div v-for="(allemployee,index) in ALL_EMPLOYEES_LIST" 
               :key="index">
                <div class="card">
                <div class="card-header">{{allemployee.name}}</div>

                <div class="card-body">
                    <div class="d-flex p-2"> 
                        <div>{{allemployee.address}}</div>
                        <div><input type="checkbox" class="leftcheckbox" ></div>
                </div>
               </div>
            </div>
              
              </div>
    </div>
</template>

<script>
    
    export default {
        props:['ALL_EMPLOYEES_LIST']
        
    }
</script>

<style lang="scss" scoped>

</style>