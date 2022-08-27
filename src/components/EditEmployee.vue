<template>
    <div>
         The props is-{{id}}
    </div>
</template>

<script>
import axios from 'axios'
export default({
props:['id'],
mounted(){
    axios.get('http://localhost:3001/employees/'+this.id)
    .then(response=>console.log(response.data))
    
}
})
</script>

<style lang="scss" scoped>

</style>