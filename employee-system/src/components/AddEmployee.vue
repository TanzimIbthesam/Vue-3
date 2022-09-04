<template>
    <div class="container">
                <form action="" @submit.prevent="handleSubmit">
                    <div class="row">
                        <div class="col-6">
                            
                            <input type="text" class="form-control" id=""
                            v-model="formData.email"
                            >
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" id=""
                            v-model="formData.address"
                            >
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary mt-3">SEND</button>
                </form>
                
            </div>
</template>

<script>
    export default {
        data(){
            return {
                formData:{
                    email:'',
                    address:''
                },
                
            }
        },
        methods:{
            handleSubmit(){
                this.$emit('add-employee',this.formData)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>