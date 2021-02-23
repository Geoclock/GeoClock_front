import React from "react";
import Http from "../../ConnectionToFlask";



const GetAllNotifications = (user_id) => {
    const data = new FormData();
    data.append('user_id',user_id);
    const resp = {};
    const list = [];
    Http.post('/AllNotificationRead', data)
        .then(function (response){
            resp['status'] = response.data['status'];
            resp['notifications'] = response.data['notifications'];
            //console.log('list!!',resp['notifications'], typeof  resp['notifications']);
            (resp['notifications']).map(notification =>{
                //console.log('tyt', notification);
                const request = {};
                request['id'] = notification['id'];

                request['notification'] = notification['notification'];
                request['radius'] = notification['radius'];
                list.push(request);
                console.log('#',list,typeof list,list.length);
            });
    }, error => {
            console.log(error);
        });
    console.log('final list ',list,typeof list,list.length);
    return(list);
}

const AddNotification = (user_id, notification, radius, geo_id) => {
    const data = new FormData();
    data.append('user_id',user_id);
    data.append('note',notification);
    data.append('radius',radius);
    data.append('geo_id',1); // -> change value!!!
    const resp = {};
    const request={};
    Http.post('/NoteCreate',data)
        .then(function (response){
            resp['status'] = response.data['status'];
            resp['notedata'] = response.data['notedata'];
            request['id'] = resp['notedata'].id;
            request['notification'] = resp['notedata'].notification;
            request['radius'] = resp['notedata'].radius;
        },error => {
            console.log(error);
        });
    return (request);
}



const NotificationCommunication = (type, user_id, notification=null, radius=null, geo_id = null) =>{
    switch (type){
        case "GetAllNotifications":
        {
            return ( GetAllNotifications(user_id));
        }
        case "AddNotification":
        {
            return (AddNotification(user_id,notification,radius, geo_id));
        }
        default:
            return null;
    }
}

export default NotificationCommunication
