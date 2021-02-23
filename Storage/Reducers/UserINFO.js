import {ADD_USERINFO, CLEAR_USERINFO} from "../Actions/types";

const initialState = {
    userINFO: []
};

export default function UserReducer(state=initialState,action){
    console.log(state,action,action.type)
    switch (action.type){
        case ADD_USERINFO:
        {
            return {
                ...state,
                userINFO: [...state.userINFO, action.userINFO]
            };
        }
        case CLEAR_USERINFO:
        {
            return {
                ...state,
                userINFO: []
            };
        }
        default:
            return state;
    }
}
