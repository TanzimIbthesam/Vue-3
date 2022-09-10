'<template>
    <div>
         <!-- {{this.$route.params.id}} -->
         <!-- {{singleblogs.blogs}} -->
         Recentdate-{{dateTime}}
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
        <button @click="isOpen =! isOpen"  class="btn btn-dark">Comment</button>
        <div class="container" v-if="isOpen">
            <div class="row">
                <div class="col-md-4">
                    <form @submit.prevent="clickHandle" action="" class="mt-3">
            <input type="text" v-model="form.comment" class="form-control" id=""><br>
            {{form.comment}}
            <input type="text" v-model="form.user" class="form-control" id=""><br>
            {{form.user}}
            <button  class="btn btn-dark">Comment</button>
        </form>
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
                isOpen:'',
                singleblogs:[],
                form:{
                    comment:'',
                    user:'',
                    dateTime:new Date()
                }
             }
        },
        computed:{
                dateTime(){
                    // return new Date().getHours()
                    return new Date().getFullYear()+"-"+( new Date().getMonth()+1)+"-"+ new Date().getDate()+" "+ new Date().getHours()+":"+new Date().getMinutes()+":"+ new Date().getSeconds();
                    //  return new Date().getHours()+":"+new Date().getMinutes()+":"+ new Date().getSeconds();
                    //  return this.dateTime.getHours()+":"+this.dateTime.getMinutes()+":"+ this.dateTime.getSeconds();
                    
                }
        },
        methods:{
            clickHandle(){
                console.log("Clicked");
                axios.post(`http://vue-test.gingerbd.com/api/post-comment?blog_id=${this.$route.params.id}&comment=${this.form.comment}&comment_datetime=${this.dateTime} &user=${this.form.user}`).then(res=>{
                    console.log(res);
                    console.log(this.dateTime);
                })
            }
        },

       created(){
          axios.get('http://vue-test.gingerbd.com/api/view-blog/'+this.$route.params.id)
          .then(res=>this.singleblogs=res.data.blogs)
       }
    }
</script>

<style lang="scss" scoped>

</style>'