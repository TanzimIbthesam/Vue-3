<template>
  <body id="page-app">
    <div id="app">
        <LeftNavbar />
        <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              
                <span class="d-none d-lg-block"><img class="img-fluid img-profile mx-auto mb-2" src="../assets/img/JERPLOGO2.png" alt=""  style="border:none;"/></span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Instructions</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">BLOG</a></li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#"><hr></a></li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Example Blog</a></li>
                   
                    <li class="nav-item" :key="blog.id" v-for="blog,index in blogs" > <a class="nav-link" :href="'#'+blog.id" > {{ blog.title }} </a>  </li>                    
                </ul>
            </div> 
        </nav> -->
        <div class="container-fluid p-0">
            <!-- About-->
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Vue Test
                        <span class="text-primary">MononSoft</span>
                    </h1>
                    <div class="subheading mt-3">
                        Instructions:                        
                    </div>
                    <p class="lead mb-5">
					<ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Populate Left Menu under BLOG
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Get Detail of Selected Blog and Comments and view in main content area
                        </li>
						<li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Make a Modal for Comment on click New Comment Button
                        </li>
						<li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Receive Commenter Name, Comment and current date time for from Comment Submit
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Create or remove new comment and display
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Maintain SPA while develop
                        </li>
                    </ul>
					<div class="subheading mt-5">
                        API's:                        
                    </div>
                    <p class="lead mt-3">
					<ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            ALL-BLOGS [get] ["http://vue-test.gingerbd.com/api/all-blogs"]
                        </li>
						<li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            LEFT-MENU [get] ["http://vue-test.gingerbd.com/api/blogs"]
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            VIEW-BLOG [get] ["http://vue-test.gingerbd.com/api/view-blog/id"]
                        </li>
						<li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            SAVE COMMENT [post] ["http://vue-test.gingerbd.com/api/post-comment?blog_id=blog_id&comment=comment&comment_datetime=now()&user=user"]
                        </li>
						<li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            DELETE COMMENT [get] ["http://vue-test.gingerbd.com/api/remove-comment/id"]
                        </li>
                    </ul>
					</p>
					
					</p>
                    
                </div>
            </section>
            <hr class="m-0" />
            <!-- Experience-->
            <section class="resume-section" id="experience">
                <div class="resume-section-content">                    
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Blog Title</h3>
                            <div class="subheading mb-3">Blog Author</div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">11 March 2013 : 10am</span></div>
                    </div>
					<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h5 class="mb-0">Blog Comment<hr></h5>
                            <div class="subheading mb-1" style="font-size:11pt;"><i class="fa fa-user"></i> Commenter 1 <div class="float-right"><i class="fa fa-clock"></i> 2021-03-23 10.05 pm</div></div>
                            <p>Comment 1</p>
							<div class="subheading mb-1" style="font-size:11pt;"><i class="fa fa-user"></i> Commenter 2 <div class="float-right"><i class="fa fa-clock"></i> 2021-03-23 10.05 pm</div></div>
                            <p>Comment 2</p>							
							<div class="subheading mb-1"><button class="btn btn-sm btn-info">New Comment</button></div>
                        </div>                        
                    </div>
                    
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
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    LeftNavbar
}
}
</script>
