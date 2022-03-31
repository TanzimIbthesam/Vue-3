
import {computed,ref} from 'vue';
export const useNote=()=>{
    const writeNote=ref('');
    const writeNoteRef=ref(null);
    const notes=ref([
             {id:1,content:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quibusdam culpa velit molestiae quia voluptatum eum quis aperiam qui beatae expedita, id labore optio fugiat enim, atque rem animi deleniti!"},
             {id:2,content:"Notess"},
     ])
     const AddNote=()=>{
           
        let currentDate = new Date().getTime(),
        id = currentDate.toString()

    let note={
   id,
    content:writeNote.value
}
     notes.value.unshift(note)

     writeNote.value=''
     writeNoteRef.value.focus()
     
    }
    const deleteNote=(id)=>{
        notes.value=notes.value.filter((note)=>note.id !== id);
    }
    return {notes,AddNote,deleteNote,writeNote,writeNoteRef};
    
    }


// export default useNote;

