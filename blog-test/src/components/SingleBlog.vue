<template>
    <div>
         <!-- {{this.$route.params.id}} -->
         <!-- {{singleblogs.blogs}} -->
         <div v-for="singleblog in singleblogs" :key="singleblog.index">
            <!-- {{singleblog.all_blogs}} -->
            <div class="card">
                <div class="card-header">
                 <h1 class="text-primary">{{singleblog.title}}</h1>
                </div>
            </div>
        
        </div>
        <div v-for="singleblog in singleblogs" :key="singleblog.index">
            <div v-for="sn in singleblog.all_blogs">
                <div class="card">
                    <div class="card-body">
                        {{sn.blog_detail}}
                    </div>
                </div>
           
        </div>
            
        </div>
    </div>
</template>

<script>
  import axios from 'axios'

    export default {
        props:['id'],
        data(){
             return {
                singleblogs:[]
             }
        },

       created(){
          axios.get('http://vue-test.gingerbd.com/api/view-blog/'+this.$route.params.id)
          .then(res=>this.singleblogs=res.data.blogs)
       }
    }
</script>

<style lang="scss" scoped>

</style>