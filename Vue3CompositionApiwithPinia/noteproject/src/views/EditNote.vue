<template>
       <AddEditNote
       v-model="editNote"
       bgColor="link"
       placeholder="Edit a Note"
       label="Edit a note"
>
   
    <template #buttons>
        
        <button 
    @click="handleClick"
    :disabled="!editNote"
        class="button is-link has-background-success-dark"> Edit New Note</button> 
    </template>
    
</AddEditNote>
Note-{{editNote}}
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import {useStoreNotes} from '@/stores/storeNotes.js'

const props=defineProps({
  
   

})
const route=useRoute();
const router=useRouter();
const storeNotes=useStoreNotes();
const editNote=ref("");
editNote.value=storeNotes.getNoteContent(route.params.id)

const handleClick=()=>{
  storeNotes.updateNote(route.params.id,editNote.value)
  router.push('/')
}
</script>

<style>

</style>