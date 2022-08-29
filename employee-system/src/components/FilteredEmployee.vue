<template>
    <div>
        <td scope="row">{{selected.id}}</td>
      <td>{{selected.name}}</td>
      <td>{{selected.address}}</td>
      <td><div class="d-flex">
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div></td>
    </div>
</template>

<script>
export default({
    props:['selected'],
    data(){
        return {

        }
    }
})
</script>

<style lang="scss" scoped>

</style>