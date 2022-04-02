<template>
       <AddEditNote
       v-model="editNote"
       bgColor="link"
       placeholder="Edit a Note"
       label="Edit a note"
>
   
    <template #buttons>
        
        <button 
         
        class="button is-link has-background-success-dark"> Edit New Note</button> 
    </template>
    
</AddEditNote>
Note-{{editNote}}
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import {ref} from 'vue'

const editNote=ref("")
const props=defineProps({
  
   

})
</script>

<style>

</style>