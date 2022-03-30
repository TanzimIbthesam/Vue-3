
import {computed,ref} from 'vue';
export const useNote=()=>{
    const emit=defineEmits('deleteNote')
    const showDeleteModal=ref(false);
    const props=defineProps({
        note:{
            type:Object,
            required:true
        }
    
    })
    
    const showModal=()=>{
        showDeleteModal.value=true;
    }
    const contentCharacterLength=computed(()=>{
        let length=props.note.content.length
        let character= length>1 ? 'Characters':'Character'
    
        return `${length}-${character}`;
    })
    
    const deleteNote=()=>{
         emit('deleteNote',props.note.id )
    }
    return {showModal,contentCharacterLength,deleteNote};
}

// export default useNote;

