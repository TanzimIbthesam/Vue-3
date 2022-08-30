<template>
<div class="col-3 bg-secondary">
    <h4>Employees List</h4>
    <input type="text" class="form-control my-4" placeholder="Search"  name="" id="">
    
    <div v-for="(employee, index) in ALL_EMPLOYEES_LIST" :key="index">
        <div class="text-white">
            <div class="d-flex justify-content-between">
                <div>{{employee.name}}</div> 
                <input type="checkbox" @click="selectedChange(id)">
            </div>
            <p class="text-left">{{employee.address}}</p>
        </div>
    </div>
</div>

</template>

<script>

export default({
    
    props:['ALL_EMPLOYEES_LIST'],
    data(){
        return {
            
        }
    },
    methods: {
        selectedChange(id){
            this.$emit('selectedChange',id)
        }
    }
})
</script>

<style lang="scss" scoped>

</style>