<template>
    <div>
      <AddPost :posts="posts"/> 
      <!-- <AddPost/> -->
 
    </div>
</template>
<script>
import AddPost from './AddPost';

export default {
    components:{
      AddPost
},
    data() {
        return {
        //    posts:[
        //  { 
        //      id:1,
        //       user_name:'tanzim101',
        //         // title:'Hello World',
        //          body:'We all are here',
        //           posted_by:this.user_name
        //     },
        //  {
        //      id:2,
        //       user_name:'tanzim101',
        //         // title:'Hello World',
        //          body:'We all are here',
        //         posted_by:this.user_name
        //     },
        
        //   ]
  
        }
    }
}
</script>
<style lang="">
    
</style>