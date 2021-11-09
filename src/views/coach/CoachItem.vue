<template>
  <div>
      <li>
         <h3>{{fullName}}</h3>
         <h4>{{coach.hourlyRate}}/hour</h4>
         <span v-for="area in coach.areas" :key="area.id">
           {{area}}
         </span>
        </li>
        
  </div>
</template>

<script>
export default {
props:['coach'],
computed:{
    fullName(){
        return this.coach.firstName+' '+this.coach.lastName
    }
}
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  list-style-type: none;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>