<template>
<nav class="bg-white shadow-lg">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					<!-- Website Logo -->
					<div>
						<router-link :to="{name:'Home'}" class="flex items-center py-4 px-2">
							<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" />
							<span class="font-semibold text-gray-500 text-lg"
								>Navigation</span
							>
						</router-link>
					</div>
					<!-- Primary Navbar items -->
					<div class="hidden md:flex items-center space-x-1">
						<router-link
							:to="{name:'Home'}"
							class="navclass"
							>Home</router-link>
						<router-link
							:to="{name:'Contact'}"
							class="navclass"
							>Contact Page</router-link>
					
						
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
    data(){
        return{
             isActive:false
        }
    },
    methods:{
      
    }
}
</script>

<style>
.new{
    color:aliceblue;
}
</style>