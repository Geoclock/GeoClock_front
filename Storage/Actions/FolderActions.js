import {ADD_FOLDER, EDIT_FOLDER,REMOVE_FOLDER,CLEAR_FOLDER} from "../Actions/types";

export function addFolder(folder){
    return{
        type: ADD_FOLDER,
        folder: folder
    }
}

export function editFolder(folder, id){
    return{
        type: EDIT_FOLDER,
        id: id,
        folder: folder
    }
}

export function removeFolder(id){
    return{
        type: REMOVE_FOLDER,
        id: id
    }
}

export function clearFolder(){
    return{
        type: CLEAR_FOLDER
    }
}
