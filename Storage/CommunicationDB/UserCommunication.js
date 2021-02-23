import React from "react";
import axios from "axios";
import Http from "../../ConnectionToFlask";


const GetUserData = (id) => {
    const data = new FormData();
    data.append('id', id);
    const resp ={};
    const request={};
    Http.post('/UserRead', data)
        .then(function (response){
            resp['status'] = response.data['status'];
            resp['userdata'] = response.data['userdata'];
            //console.log('yyyy!!!', typeof resp['userdata']);
            //console.log(resp['userdata'].user_login);
            request['id']= resp['userdata'].id;
            request['user_login']=resp['userdata'].user_login;
            request['user_email']=resp['userdata'].user_email;
            request['default_folder_id']=resp['userdata'].default_folder_id;
        },(error) => {
            console.log(error);
        });
    console.log('getdata',id)
    return(request);
}
export default GetUserData;
