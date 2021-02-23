import {ADD_NOTESUBJECTION, REMOVE_NOTESUBJECTION,CLEAR_NOTESUBJECTION} from "../Actions/types";

const initialState = {
    notesubjections: []
};

export default function NotesubjectionReducer(state = initialState, action){
    switch (action.type){
        case ADD_NOTESUBJECTION:
        {
            return{
                ...state,
                notesubjections: [...state.notesubjections, action.notesubjection]
            };
        }
        case REMOVE_NOTESUBJECTION:
        {
            const new_state = [...state.notesubjections];
            new_state.splice(action.id,1);
            return {
                ...state,
                notesubjections: new_state
            };
        }
        case CLEAR_NOTESUBJECTION:
        {
            return {
                ...state,
                notesubjections: []
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
            geolocation_id: 1,
            notification_id: 1
        }
    ]
}*/
