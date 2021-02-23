import {ADD_NOTIFICATION, EDIT_NOTIFICATION, REMOVE_NOTIFICATION,CLEAR_NOTIFICATION} from "../Actions/types";

const initialState = {
    notifications: []
};

export default function NotificationReducer(state = initialState, action){
    console.log(state,action)
    switch (action.type){
        case ADD_NOTIFICATION:
        {
            return{
                ...state,
                notifications: [...state.notifications,action.notification]
            };
        }
        case EDIT_NOTIFICATION:
        {
            const new_state = [...state.notifications];
            const edited_state = new_state.map(notification =>{
                if (notification.id !== action.id){
                    return notification
                }
                else {
                    return action.notification
                }
            });
            return {
                ...state,
                notifications: edited_state
            };
        }
        case REMOVE_NOTIFICATION:
        {
            const new_state = [...state.notifications];
            new_state.splice(action.id, 1);
            return {
                ...state,
                notifications: new_state
            };
        }
        case CLEAR_NOTIFICATION:
        {
            return {
                ...state,
                notifications: []
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
            notification: 'some text',
            redius: 123
        }
    ]
}*/
