<template>
<div class="col-3 bg-secondary">
    <h4>Employees List</h4>
    <input type="text" v-model="search" 
    class="form-control my-4" placeholder="Search"  name="" id=""> 
    <!-- Allemployees-{{searchEmployees}} -->
    
    <div v-for="(employee, index) in searchEmployees" :key="index">
        <div class="text-white">
            <div class="d-flex justify-content-between">
                <div>{{employee.name}}</div> 
                <input type="checkbox" @click="selectedChange(employee.id)">
            </div>
            <p class="text-left">{{employee.address}}</p>
        </div>
    </div>
</div>

</template>

<script>
// import Search from "./Search.vue";

export default({
    components:{
    //   Search
    },
    props:['ALL_EMPLOYEES_LIST'],
    data(){
        return {
            search:''
        }
    },
    methods: {
        selectedChange(id){
            console.log(id);
            this.$emit('selectedChange', id)
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
})
</script>

<style lang="scss" scoped>

</style>