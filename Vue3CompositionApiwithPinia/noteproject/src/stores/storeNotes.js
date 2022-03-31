import {defineStore} from 'pinia'

export const useStoreNotes=defineStore('storeNotes',{
    state:()=>{
        return{
            notes:[
                {id:1,content:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quibusdam culpa velit molestiae quia voluptatum eum quis aperiam qui beatae expedita, id labore optio fugiat enim, atque rem animi deleniti!"},
                {id:2,content:"Notess"},
            ]
        }
    },
    actions:{
        AddNote(writeNoteContent){
           
            let currentDate = new Date().getTime(),
            id = currentDate.toString()
    
        let note={
       id,
        content: writeNoteContent
    }

     this.notes.unshift(note);
        },
        deleteNote(id){
            this.notes=this.notes.filter(note=>note.id !== id)
        }
    }
});