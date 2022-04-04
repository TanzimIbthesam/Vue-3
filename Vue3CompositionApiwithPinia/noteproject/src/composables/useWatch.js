import {watch} from 'vue';
export const useWatch=((valueToWatch,maxChars)=>{
    watch(valueToWatch,(newValue)=>{
        if(newValue.length>maxChars) alert("You have exceded 20characters")
        })
});