import {watch} from 'vue';
export const useWatch=(valueToWatch=>{
    watch(valueToWatch,(newValue)=>{
        if(newValue.length>20) alert("You have exceded 20characters")
        })
});