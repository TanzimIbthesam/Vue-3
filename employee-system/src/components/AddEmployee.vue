<template>
    <div class="container">
                <form action="" @submit.prevent="handleSubmit">
                    <div class="row">
                        <div class="col-6">
                            
                            <input type="text" class="form-control" id=""
                            v-model="formData.name"
                            >
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" id=""
                            v-model="formData.address"
                            >
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">SEND</button>
                </form>
                
            </div>
</template>

<script>
    export default {
        props:['EDIT_EMPLOYEE'],
        data(){
            return {
                formData:{
                    name:'',
                    address:'',
                    id: null
                },
                
            }
        },
        methods:{
            handleSubmit(){
                console.log("clicked",this.formData);
                this.$emit('add-employee',this.formData);

                this.formData = {
                    name:'',
                    address:'',
                    id: null
                };
            }
        },
        watch: {
            EDIT_EMPLOYEE() {
                if(this.EDIT_EMPLOYEE){
                    this.formData = {
                        name:this.EDIT_EMPLOYEE.name,
                        address:this.EDIT_EMPLOYEE.address,
                        id:this.EDIT_EMPLOYEE.id
                    }
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>