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
        data(){
            return {
                formData:{
                    name:'',
                    address:''
                },
                
            }
        },
        methods:{
            handleSubmit(){
                console.log("clicked",this.formData);
                this.$emit('add-employee',this.formData)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>