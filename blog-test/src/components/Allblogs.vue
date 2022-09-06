<template>
    <div class="flex-grow-1">
                            <div v-for="allblog in ALL_BLOGS_LIST" :key="allblog.id">
                                <h3 class="mb-0">{{allblog.title}}</h3>
                            <div class="subheading mb-3">{{allblog.created_by}}</div>
                            <div v-for="all_blog in allblog.all_blogs" :key="all_blog.id">
                                <p>{{all_blog.blog_detail}}</p>
                            </div>
                            </div>
                            
                            
                        </div>
</template>

<script>
    
    export default {
        props:['ALL_BLOGS_LIST']  
    }
</script>

<style lang="scss" scoped>

</style>