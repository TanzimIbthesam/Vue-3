<template>
    <div>
        <h4>Add New Employee</h4>
        <form  @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" placeholder="Enter Name" v-model="formData.name">
            </div>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" placeholder="Address" v-model="formData.address">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>  
</template>

<script>
export default({
    data(){
        return {
            formData:{
                name: null,
                address: null
            }
        }
    },
    methods:{
        handleSubmit(){
            console.log('formData', this.formData);
            this.$emit('add-new-employee', this.formData);

            this.formData = {
                name: null,
                address: null
            }
        }

    }

 }) 
 </script>

<style lang="scss" scoped>

</style>