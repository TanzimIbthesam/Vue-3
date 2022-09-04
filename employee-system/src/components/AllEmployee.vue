<template>
    <div>
        <input type="search" 
        
        v-model="search" class="form-control" placeholder="Search"><br>
               <div v-for="(allemployee,index) in searchEmployees" 
               :key="index">
                <div class="card">
                <div class="card-header">{{allemployee.name}}</div>

                <div class="card-body">
                    <div class="d-flex p-2"> 
                        <div>{{allemployee.address}}</div>
                        <div><input type="checkbox" class="leftcheckbox" 
                            style="margin-left:20px"
                            ></div>
                </div>
               </div>
            </div>
              
              </div>
    </div>
</template>

<script>
    
    export default {
        props:['ALL_EMPLOYEES_LIST'],
        data(){
            return {
               search:''
            }
        },
        computed:{
            searchEmployees(){
    let allemployees=this.$props.ALL_EMPLOYEES_LIST;
    return allemployees.filter(allemployee=>allemployee.name.includes(this.search)
    || allemployee.address.includes(this.search)
    
    )
   ;
     
   }
     


        }
    
    
    }
    

</script>

<style lang="scss" scoped>

</style>