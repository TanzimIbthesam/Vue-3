import { auth } from "../firebase/config"
import { ref } from 'vue';
const error=ref('null');
const signup=async (email,password,userName)=>{
    error.value = null;
    try{
       //Signing up users  
        const res=await auth.createUserWithEmailAndPassword(email,password)
        if(!res){
            throw new Error('Could not complete signup');
        }
        await res.user.updateProfile({userName});
        error.value=null;
        return res;

    }catch(err){
        console.log(err.message);
        error.value=err.message


    }

}

const useSignup=()=>{
    return {error,signup}
}

export default useSignup;