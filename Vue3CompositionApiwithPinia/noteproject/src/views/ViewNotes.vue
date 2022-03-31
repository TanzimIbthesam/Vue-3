<template>
<div class="card has-background-success p-4 mb-5">

    <form @submit.prevent="AddNote">
     <div class="field">
  <div class="control">
    <textarea 
    v-model="writeNote"
    class="textarea"  
    ref="writeNoteRef"
    
    placeholder="Add a new note">
    </textarea>
  </div>
</div>
<div class="field is-grouped is-grouped-right">
    <div class="control">
        <button 
        :disabled="!writeNote"
        class="button is-link has-background-success-dark">Submit</button>
    </div>

</div>
    </form>
  </div>
<Note 
v-for="note in storeNotes.notes"
:key="note.id"
:note="note"
@deleteNote="deleteNote"

/>

  
</template>

<script setup>
import {ref} from 'vue';
import Note from '@/components/Notes/Note.vue';
import {useStoreNotes} from '@/stores/storeNotes.js';
import {useNote} from '@/composables/useNote.js'
const storeNotes=useStoreNotes();


  const writeNote=ref('');
  const writeNoteRef=ref(null);
// const notes=ref([
//     {id:1,content:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quibusdam culpa velit molestiae quia voluptatum eum quis aperiam qui beatae expedita, id labore optio fugiat enim, atque rem animi deleniti!"},
//     {id:2,content:"Notess"},
// ])
 


const AddNote=()=>{
    storeNotes.AddNote(writeNote.value)
   
//   store.notes.unshift(note)
   writeNote.value=''
   writeNoteRef.value.focus()
    
   
    
   
}
 const deleteNote=(id)=>{
    storeNotes.deleteNote(id)
    //  storeNotes.notes=storeNotes.notes.filter(note=>note.id !== id)
}


</script>

<style>

</style>