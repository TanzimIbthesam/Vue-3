<template>
    <div>
             <button @click="increaseFollowers()" class="px-4 py-1 bg-blue-600 text white rounded-sm">Followers</button>
             {{ followers }}
             <button class="px-4 py-1 bg-blue-600 text white rounded-sm" @click="a++">Add to A</button>
             <button class="px-4 py-1 bg-blue-600 text white rounded-sm ml-2" @click="b++">Add to A</button>
             {{ addtoA }}
             {{ addtoB }}
             <input type="text" class="px-4 py-1 border" v-model="message">
             <p v-if="typing">Typing</p><br>
           
    </div>
</template> 
<script>
export default {
    data() {
        return {
            followers:0,
            age:10,
            a:0,
            b:0,
            typing:false,
            message:'',
            m:null,
            km:null,

        }
      

    },
    methods: {
        increaseFollowers(){
            return this.followers++;
        }
    },
    computed: {
        addtoA:function(){
            console.log('First');
            return this.a+this.age;
        },
        addtoB:function(){
            console.log('Second');
            return this.b+this.age;
        },
    },
    mounted() {
        this.increaseFollowers();
    },
    watch: {
        message(){
           this.typing=true;

           setTimeout(()=>{
               this.typing=false;
           },3000);
        },
    }
    
    
}
</script>
<style lang="">
    
</style>