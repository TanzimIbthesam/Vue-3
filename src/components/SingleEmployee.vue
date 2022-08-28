<template>
    
        <div class="card-body">
    <div class="d-flex flex-row mb-3">
         <div><h5 class="card-title">{{allemployee.name}}</h5></div>
         <input type="checkbox" @click="clickCheckbox(allemployee.id)" class="ml-2" id="">
    </div>
    
    <p class="card-text">{{allemployee.location}}</p>
    
  </div>
   
</template>

<script>
export default({
    props:['allemployee'],
    data(){
        return {

        }
    }

})
</script>

<style lang="scss" scoped>

</style>