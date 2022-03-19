<template>
<div>
    <div v-if="showRoute">
    The route parameter-{{route.params.id}}

    </div>
   
   <button @click="showRouteParameters">Show route</button>
   <button @click="taketoHomepage">Redirect</button>
   
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

 const route=useRoute();
 const router=useRouter();
 const showRoute=ref(false)
const showRouteParameters=()=>{
     showRoute.value =! showRoute.value
}

const taketoHomepage=()=>{
    router.push({name:'home'})
}

</script>