<template>
    <div class="container">
        <div class="row">
            <form @submit.prevent="handleSubmit " >
                  <div class="">
                    <div class="">
                    <label>Name</label>
                   <input 
                   v-model="name"
                   class="form-control" type="text" name="" id="" />
                   
                    </div>
                    <div class="">
                        <label>Address</label>
                   <input class="form-control" 
                   v-model="location"
                   type="text" name="" id="" />
                    </div>
                    
                </div>
                <button type="submit" class="btn btn-primary marginleft">Update</button>
                </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default({
    data(){
        return {
           name:"",
           location:""
        }
    },
props:['id'],
methods:{
    handleSubmit(){
        let alldetails={
            name:this.name,
            location:this.location
        }
         axios.patch('http://localhost:3001/employees/'+this.id,alldetails)
         .then(response=>{
            console.log(response);
         }).then(()=>{
            this.$router.push('/')
         }).catch((err)=>{
            console.log(err);
         })
    }

},
mounted(){
    axios.get('http://localhost:3001/employees/'+this.id)
    .then(response=>{
        this.name=response.data.name
        this.location=response.data.location
    })
    
}
})
</script>

<style lang="scss" scoped>

</style>