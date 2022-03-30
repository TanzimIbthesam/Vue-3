<template>
  <div 
 
  class=" mb-4"
  >
  
  <div class="card-content">
    <div class="content">
        {{note.content}}
    </div>
    Characters-{{contentCharacterLength}}
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item" >Edit</a>
    <a href="#" class="card-footer-item" @click="deleteNote">Delete</a>

  </footer>
  <DeleteModal :note="note" v-if="showDeleteModal" />
</div>
</template>

<script setup>
import DeleteModal from'./Modal/DeleteModal.vue';
//  import {useNote} from '../../composables/useNote.js';

import {computed,ref} from 'vue';
const emit=defineEmits('deleteNote')

const showDeleteModal=ref(false);
const props=defineProps({
    note:{
        type:Object,
        required:true
    }

})

const showModal=()=>{
    showDeleteModal.value=true;
}
const contentCharacterLength=computed(()=>{
    let length=props.note.content.length
    let character= length>1 ? 'Characters':'Character'

    return `${length}-${character}`;
})

const deleteNote=()=>{
     emit('deleteNote',props.note.id )
}



</script>

<style>

</style>