<template>
    <div>
          <FormHelper>
            
            <template v-slot:header>
        This will be injected as the header slot.
      </template>
            
           
      <template v-slot:content>
        This will be the content of the element
      </template>
            </FormHelper>
    </div>
</template>

<script>
    
import FormHelper from '@/views/FormHelper.vue';
    
    export default {
    components: { FormHelper }
}
</script>

<style lang="scss" scoped>

</style>