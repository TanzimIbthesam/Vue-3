<template>
  <body id="page-app">
    <div id="app">
        <LeftNavbar />
        
        <div class="container-fluid p-0">
           
            <Instructions />
            <hr class="m-0" />
            <!-- Experience-->
            <section class="resume-section" id="experience">
                <div class="resume-section-content">                    
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                         <div class="flex-grow-1">
                            <div v-for="allblog in allblogs" :key="allblog.id">
                    
                <h3 class="mb-0"><router-link :to="{name:'SingleBlog',
                params:{id:allblog.id}
                }" >{{allblog.title}}</router-link></h3>
                            <div class="subheading mb-3">{{allblog.created_by}}</div>
                            <div v-for="all_blog in allblog.all_blogs" :key="all_blog.id">
                                <p>{{all_blog.blog_detail}}</p>
                            <!-- <Allblogs :ALL_BLOGS_LIST="allblogs" /> -->
                        <div class="flex-shrink-0"><span class="text-primary">{{all_blog.blog_datetime}}</span></div>
                    </div>
                    <div 
                    v-for="all_blog_comment in allblog.all_comments" :key="all_blog_comment.id"
                    class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h5 class="mb-0"><hr>Comments</h5>
                            
                            
							<div class="subheading mb-1" style="font-size:11pt;"><i class="fa fa-user"></i>{{all_blog_comment.user}}<div class="float-right"><i class="fa fa-clock"></i>{{all_blog_comment.comment_datetime}}</div></div>
                            <p>{{all_blog_comment.comment}}</p>							
							<div class="subheading mb-1"><button class="btn btn-sm btn-info">New Comment</button></div>
                        </div>                        
                    </div>
                    </div>
                    </div>
                    </div>
					<!-- <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h5 class="mb-0">Blog Comment<hr></h5>
                            <div class="subheading mb-1" style="font-size:11pt;"><i class="fa fa-user"></i> Commenter 1 <div class="float-right"><i class="fa fa-clock"></i> 2021-03-23 10.05 pm</div></div>
                            <p>Comment 1</p>
							<div class="subheading mb-1" style="font-size:11pt;"><i class="fa fa-user"></i> Commenter 2 <div class="float-right"><i class="fa fa-clock"></i> 2021-03-23 10.05 pm</div></div>
                            <p>Comment 2</p>							
							<div class="subheading mb-1"><button class="btn btn-sm btn-info">New Comment</button></div>
                        </div>                        
                    </div> -->
                    
                </div>
            </section>

             <!-- <div v-for="blg in allBlogs" ><Holder key="blg.id" :blg="blg" />            
            </div>                  -->
        </div>
    </div>
        
  </body>
</template>

<script>
import LeftNavbar from "../components/LeftNavbar.vue";
import Instructions from "@/components/Instructions.vue";
// @ is an alias to /src

import axios from 'axios'
import Allblogs from "@/components/Allblogs.vue";
export default {
    
  name: 'HomeView',
  components: {
    LeftNavbar,
    Instructions,
    Allblogs
},
data(){
    return{
        allblogs:[]

    }
},
created(){
    axios.get('http://vue-test.gingerbd.com/api/all-blogs')
     .then(res=>this.allblogs=res.data)
    // .then(res=>console.log(res.data))

}
}
</script>
