import {ADD_NOTESUBJECTION, REMOVE_NOTESUBJECTION,CLEAR_NOTESUBJECTION} from "../Actions/types";

export function addNotesubjection(notesubjection){
    return{
        type: ADD_NOTESUBJECTION,
        notesubjection: notesubjection
    }
}

export function removeNotesubjection(id){
    return{
        type: REMOVE_NOTESUBJECTION,
        id: id
    }
}

export function clearNotesubjection(){
    return{
        type: CLEAR_NOTESUBJECTION
    }
}
