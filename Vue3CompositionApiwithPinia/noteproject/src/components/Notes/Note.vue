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
    <!-- <a href="#" class="card-footer-item" >Edit</a> -->
    <!-- <router-link :to="`/editNote/${note.id}`">Edit</router-link> -->
    <router-link :to="{ name: 'EditNote', params: { id: note.id }}">
     Edit
</router-link>
    <!-- <a href="#" class="card-footer-item" @click="deleteNote">Delete</a> -->
      <a href="#" class="card-footer-item" @click="modals.deleteNote=true">Delete</a>
  </footer>
  <DeleteModal 
  v-if="modals.deleteNote" 
  v-model="modals.deleteNote"
  :noteId="note.id"
  />
</div>
</template>

<script setup> 
import DeleteModal from '@/components/Notes/Modal/DeleteModal.vue'
//  import {useNote} from '../../composables/useNote.js';

import {computed,reactive,ref} from 'vue';
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


const modals=reactive({
    deleteNote:false
})

const deleteModal=()=>{
    console.log("Clicked");
}


</script>

<style>

</style>