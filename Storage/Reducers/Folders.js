import {ADD_FOLDER, EDIT_FOLDER,REMOVE_FOLDER,CLEAR_FOLDER} from "../Actions/types";

const initialState = {
    folders: []
};

export default function FolderReducer(state = initialState, action){
    switch (action.type){
        case ADD_FOLDER:
        {
            return{
                ...state,
                folders: [...state.folders,action.folder]
            };
        }
        case EDIT_FOLDER:
        {
            const new_state = [...state.folders];
            const edited_state = new_state.map(folder => {
                if (folder.id !== action.id){
                    return folder
                }
                else {
                    return action.folder
                }
            });
            return {
                ...state,
                folders: edited_state
            };
        }
        case REMOVE_FOLDER:
        {
            const new_state = [...state.folders];
            new_state.splice(action.id,1);
            return {
                ...state,
                folders: new_state
            };
        }
        case CLEAR_FOLDER:
        {
            return {
                ...state,
                folders: []
            };
        }
        default:
            return state;
    }
}

/*export default function (){
    return [
        {
            id: 1,
            folder_name: 'some name',
            created_by_user: 1
        }
    ]
}*/
