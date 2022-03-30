<template>
  <div >
      Are you sure you want to delete?
      <footer class="card-footer">
    
    <a href="#" class="card-footer-item" @click="notebyId(id)">Delete</a>

  </footer>
  </div>
</template>

<script setup>
const props=defineProps({
    note:{
        type:Object,
        required:true
    }

})
const notebyId=(id)=>{
  props.note.id !== id
}
</script>

<style>

</style>