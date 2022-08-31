<template>
    <div>
        <h4>Employees List</h4>
    <input type="text" class="form-control my-4" placeholder="Search"  
    v-model="search"
    >
    </div>
</template>

<script>
    export default {
        data(){
            return{
                search:""
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>