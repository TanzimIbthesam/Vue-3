<template>
  <div class="card has-background-success p-4 mb-5">
      <div class="field">
          <div class="control">
              <textarea
              v-model="modelValue"
              @input="$emit('update:modelValue',modelValue)"
              class="textarea"
              placeholder="Add a new note"
              ref="textareaRef">

              </textarea>
          
      </div>
  </div>
  <div class="field is-grouped is-grouped-right">
      <div class="control">
          <slot name="buttons"/>
      </div>
  </div>
  </div>
   
    
</template>

<script setup>
import {ref} from 'vue'
const props=defineProps({
   
    modelValue:{
        type:String,
        required:true
    }
})

const emit=defineEmits(['update:modelValue'])
const textareaRef = ref(null)
// const editNoteRef=ref(null);

const focusTextarea=()=>{
    // editNoteRef.value.focus()
      textareaRef.value.focus()
}

defineExpose({
     focusTextarea
})
</script>

<style>

</style>