<template>
<div class="flex flex-col justify-center items-center space-y-1">
    <div class="px-20 py-1 border rounded-md  h-8 cursor-pointer" @click="isOpen =! isOpen">
        {{ selected.join(' ')}}
    </div>
    <div v-if='isOpen'>
      <div class="flex flex-col px-6 py-1 border rounded-md w-64  cursor-pointer"  >
          <div class="" v-for="option in options" :key="option.id">
          <input type="checkbox" v-model="selected" :value="option.value" class="space-x-1" name="" id="">
        <label for="">{{option.text}}</label>
          </div>
        
    </div>
    </div>
   
</div>

  
  
</template>

<script>
export default {
    data(){
        return {
            selected:[],
            checkoptions:'',
            isOpen:false,
             options: [
        { text: 'One', value: 'OptionOne' },
        { text: 'Two', value: 'OptionTwo' },
        { text: 'Three', value: 'OptionThree' },
        { text: 'Four', value: 'OptionFour' },
         
      ]
        }
    }

}
</script>

<style>

</style>