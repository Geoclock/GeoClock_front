import {ADD_NOTIFICATION, EDIT_NOTIFICATION, REMOVE_NOTIFICATION,CLEAR_NOTIFICATION} from "../Actions/types";

export function addNotification(notification){
    console.log('addN',notification);
    return{
        type: ADD_NOTIFICATION,
        notification: notification
    }
}

export function editNotification(notification, id){
    return{
        type: EDIT_NOTIFICATION,
        id: id,
        notification: notification
    }
}

export function removeNotification(id){
    return{
        type: REMOVE_NOTIFICATION,
        id: id
    }
}

export function clearNotification(){
    return{
        type: CLEAR_NOTIFICATION
    }
}
