<template>
<div>
    All posts
    <div v-for="post in allposts" :key="post.id">
      <!-- <Router-Link to="/post/">Post One</Router-Link>  -->
      <router-link :to="{ name: 'singlepost', params: { id: post.id }}">
        {{post.title}}
</router-link>
    </div>
    
    <!-- With named routes -->
  <!-- <router-link :to="{ name: 'post', params: { id: 1 }}"> -->
  User
<!-- </router-link> -->
</div>
</template>

<script setup>
import { ref } from 'vue';

const allposts=ref([
  {id:1,title:"Post One",description:"Description One"},
  {id:2,title:"Post One",description:"Description Two"},
  {id:3,title:"Post One",description:"Description Two"},
]);
</script>