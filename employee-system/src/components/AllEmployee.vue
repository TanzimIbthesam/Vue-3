<template>
    <div class="card" v-for="(employee, index) in ALL_EMPLOYEES_LIST" :key="index">
    <div class="card-title">
        <div class="d-flex ">
        <div>{{employee.name}}</div> 
        <input type="checkbox" @click="selectedChange">
        </div>
        <p>{{employee.location}}</p>
    </div>
    </div>
</template>

<script>

export default({
    
    props:['ALL_EMPLOYEES_LIST'],
    data(){
        return ''
    },
    methods: {
        selectedChange(){
            this.$emit('selectedChange')
        }
    }
})
</script>

<style lang="scss" scoped>

</style>