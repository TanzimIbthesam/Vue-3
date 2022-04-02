<template>
  <div class="card  p-4 mb-5"
  :class="`has-background-${ bgColor }`"
  >
      <div class="field">
          <div class="control">
              <label class="has-text-white">{{label}}</label>
              <textarea
              v-model="modelValue"
              @input="$emit('update:modelValue',modelValue)"
              class="textarea"
              :placeholder="placeholder"
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
    },
    bgColor:{
        type:String,
         default:'success'
    },
    placeholder:{
        type:String,
        default:'Add a Note'
    },
    label:{
        type:String,
        default:'Add a note'

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